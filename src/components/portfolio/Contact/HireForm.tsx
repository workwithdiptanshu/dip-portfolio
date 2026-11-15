"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { CatHead, CatSitting, Ink } from "@/components/cats/Cats";

import type { Kind } from "./kinds";

const KINDS: { id: Kind; title: string; line: string; cat: Ink; face: Ink }[] = [
    { id: "role", title: "A full-time role", line: "You're hiring and think I'd fit", cat: "moss", face: "white" },
    { id: "project", title: "A project", line: "Something to design and build", cat: "indigo", face: "marigold" },
    { id: "website", title: "A website", line: "Like the ones in Concepts", cat: "marigold", face: "indigo" },
    { id: "hello", title: "Just saying hi", line: "A question, an idea, a hello", cat: "peach", face: "indigo" },
];

const BUDGETS = ["Under $2k", "$2k to $5k", "$5k to $15k", "$15k+", "Not sure yet"];
const TIMELINES = ["As soon as possible", "In 1 to 3 months", "No rush"];

const PROMPTS: Record<Kind, string> = {
    role: "Tell me about the team, the product, and what you'd want me to own.",
    project: "What are you building, and where could you use a hand?",
    website: "Tell me about the business, who your customers are, and what's wrong with the site now.",
    hello: "Say whatever's on your mind.",
};

const input =
    "w-full px-4 py-3 bg-white rounded-2xl text-[15px] placeholder:text-black/30 outline-none ring-1 ring-black/5 focus:ring-2 focus:ring-cat-moss transition";

function Field({
    label,
    optional,
    children,
}: {
    label: string;
    optional?: boolean;
    children: React.ReactNode;
}) {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-sm">
                {label}
                {optional && <span className="text-muted"> (optional)</span>}
            </span>
            {children}
        </label>
    );
}

/** A row of pill-shaped radio buttons. */
function Pills({
    legend,
    name,
    options,
    value,
    onChange,
}: {
    legend: string;
    name: string;
    options: string[];
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <fieldset className="flex flex-col gap-2">
            <legend className="text-sm pb-2">
                {legend} <span className="text-muted">(optional)</span>
            </legend>
            <div className="flex flex-wrap gap-2">
                {options.map((o) => (
                    <label key={o} className="cursor-pointer">
                        <input
                            type="radio"
                            name={name}
                            value={o}
                            checked={value === o}
                            onChange={() => onChange(o)}
                            className="peer sr-only"
                        />
                        <span className="block rounded-full px-4 py-2 text-[13px] bg-white ring-1 ring-black/5 transition-colors peer-checked:bg-ink peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-cat-moss hover:ring-black/20">
                            {o}
                        </span>
                    </label>
                ))}
            </div>
        </fieldset>
    );
}

export default function HireForm({
    fallbackEmail,
    initialKind = "project",
}: {
    fallbackEmail: string;
    /** Picked when the page opens: a project, unless the link says otherwise (/hire?for=website). */
    initialKind?: Kind;
}) {
    const [kind, setKind] = useState<Kind | null>(initialKind);
    const [budget, setBudget] = useState("");
    const [timeline, setTimeline] = useState("");
    const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [error, setError] = useState("");
    const [sentTo, setSentTo] = useState({ name: "", email: "" });
    const opened = useRef(Date.now());

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!kind) return;
        const form = new FormData(e.currentTarget);
        const data = Object.fromEntries(form.entries()) as Record<string, string>;
        setState("sending");
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, kind, budget, timeline, elapsed: Date.now() - opened.current }),
            });
            const json = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(json.error || "Something went wrong.");
            setSentTo({ name: data.name.split(" ")[0], email: data.email });
            setState("sent");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
            setState("error");
        }
    }

    if (state === "sent")
        return (
            <div className="flex flex-col items-center text-center gap-4 py-10" role="status">
                <CatSitting color="moss" face="white" mood="happy" blink className="w-24 h-auto cat-pop" />
                <h2 className="font-serif text-3xl leading-tight">Got it, thank you{sentTo.name ? `, ${sentTo.name}` : ""}!</h2>
                <p className="text-[15px] text-black/70 max-w-[360px] leading-relaxed">
                    It&apos;s in my inbox now. I&apos;ll reply to <b className="font-medium text-ink">{sentTo.email}</b>, usually within a day.
                </p>
                <button
                    type="button"
                    onClick={() => {
                        setState("idle");
                        setKind(initialKind);
                        setBudget("");
                        setTimeline("");
                        opened.current = Date.now();
                    }}
                    className="mt-2 text-sm underline underline-offset-4 decoration-black/30 hover:decoration-black"
                >
                    Send another
                </button>
            </div>
        );

    return (
        <form onSubmit={submit} className="flex flex-col gap-6">
            <fieldset>
                <legend className="font-serif text-2xl pb-1">What are you after?</legend>
                <p className="text-sm text-muted pb-4">Pick one and I&apos;ll only ask what matters.</p>
                <div className="grid grid-cols-2 gap-3">
                    {KINDS.map((k) => (
                        <label key={k.id} className="cursor-pointer">
                            <input
                                type="radio"
                                name="kind"
                                value={k.id}
                                checked={kind === k.id}
                                onChange={() => setKind(k.id)}
                                className="peer sr-only"
                                required
                            />
                            <span className="relative flex flex-col gap-2 h-full rounded-[22px] bg-white p-4 ring-1 ring-black/5 transition peer-checked:ring-2 peer-checked:ring-ink peer-focus-visible:ring-2 peer-focus-visible:ring-cat-moss hover:-translate-y-0.5">
                                <CatHead color={k.cat} face={k.face} mood={kind === k.id ? "happy" : "open"} className="w-9 h-auto" />
                                <span className="text-[15px] font-medium leading-tight">{k.title}</span>
                                <span className="text-xs text-muted leading-snug">{k.line}</span>
                                {kind === k.id && (
                                    <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-ink text-white flex items-center justify-center">
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                )}
                            </span>
                        </label>
                    ))}
                </div>
            </fieldset>

            {kind && (
                <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="Your name">
                            <input name="name" required autoComplete="name" placeholder="First and last" className={input} />
                        </Field>
                        <Field label="Your email">
                            <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={input} />
                        </Field>
                    </div>

                    {kind === "role" && (
                        <>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Field label="Company">
                                    <input name="company" required autoComplete="organization" placeholder="Where you work" className={input} />
                                </Field>
                                <Field label="The role" optional>
                                    <input name="roleTitle" placeholder="e.g. Senior frontend engineer" className={input} />
                                </Field>
                            </div>
                            <Field label="Link to the job post" optional>
                                <input name="link" type="url" placeholder="https://" className={input} />
                            </Field>
                        </>
                    )}

                    {kind === "project" && (
                        <Field label="Company or project name" optional>
                            <input name="company" autoComplete="organization" placeholder="What it's called" className={input} />
                        </Field>
                    )}

                    {kind === "website" && (
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Field label="Business name">
                                <input name="business" required autoComplete="organization" placeholder="Your business" className={input} />
                            </Field>
                            <Field label="Current website" optional>
                                <input name="currentSite" placeholder="yoursite.com, or none yet" className={input} />
                            </Field>
                        </div>
                    )}

                    {(kind === "project" || kind === "website") && (
                        <>
                            <Pills legend="Rough budget" name="budget" options={BUDGETS} value={budget} onChange={setBudget} />
                            <Pills legend="When do you need it?" name="timeline" options={TIMELINES} value={timeline} onChange={setTimeline} />
                        </>
                    )}

                    <Field label={kind === "hello" ? "Your message" : "Tell me more"}>
                        <textarea
                            name="message"
                            required
                            minLength={10}
                            placeholder={PROMPTS[kind]}
                            className={`${input} resize-y min-h-[150px]`}
                        />
                    </Field>

                    {/* Left empty by people, filled in by bots. */}
                    <input name="website_url" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

                    {state === "error" && (
                        <p className="text-sm rounded-2xl bg-cat-peach/40 px-4 py-3" role="alert">
                            {error} You can always email me at{" "}
                            <a href={`mailto:${fallbackEmail}`} className="underline underline-offset-2">
                                {fallbackEmail}
                            </a>
                            .
                        </p>
                    )}

                    <div className="flex flex-wrap items-center gap-4 pt-1">
                        <button
                            type="submit"
                            disabled={state === "sending"}
                            className="group bg-ink text-white rounded-full pl-6 pr-5 py-3 text-sm font-medium flex items-center gap-2 hover:bg-cat-moss transition-colors disabled:opacity-60"
                        >
                            {state === "sending" ? (
                                <>
                                    Sending <Loader2 size={15} className="animate-spin" />
                                </>
                            ) : (
                                <>
                                    Send it <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                                </>
                            )}
                        </button>
                        <span className="text-xs text-muted">Goes straight to my inbox. No newsletter, ever.</span>
                    </div>
                </div>
            )}
        </form>
    );
}
