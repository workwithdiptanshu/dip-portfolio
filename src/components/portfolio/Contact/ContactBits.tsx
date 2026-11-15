"use client";

import React, { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

/** The time where I am, so you know whether I'm likely awake. */
export function LocalTime() {
    const [now, setNow] = useState<Date | null>(null);
    useEffect(() => {
        setNow(new Date());
        const id = setInterval(() => setNow(new Date()), 30_000);
        return () => clearInterval(id);
    }, []);

    const fmt = (opts: Intl.DateTimeFormatOptions) =>
        now ? new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", ...opts }).format(now) : "";
    const hour = now ? Number(fmt({ hour: "numeric", hour12: false })) : 12;
    const awake = hour >= 9 && hour < 23;

    return (
        <p className="text-sm leading-relaxed">
            It&apos;s{" "}
            <b className="font-medium tabular-nums">
                {now ? fmt({ hour: "numeric", minute: "2-digit", hour12: true }).toLowerCase() : "…"}
            </b>{" "}
            in Bengaluru.{" "}
            <span className="text-muted">{awake ? "I'm probably around." : "I'm probably asleep, but I'll see it in the morning."}</span>
        </p>
    );
}

/** The email address, with a button that copies it. */
export function CopyEmail({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);
    return (
        <div className="flex items-center gap-2 bg-white rounded-2xl pl-4 pr-1.5 py-1.5">
            <a href={`mailto:${email}`} className="text-sm truncate flex-1 hover:underline underline-offset-2">
                {email}
            </a>
            <button
                type="button"
                onClick={async () => {
                    try {
                        await navigator.clipboard.writeText(email);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1800);
                    } catch {
                        window.location.href = `mailto:${email}`;
                    }
                }}
                className="shrink-0 flex items-center gap-1.5 rounded-xl bg-paper hover:bg-ink hover:text-white transition-colors px-3 py-2 text-xs"
                aria-label="Copy email address"
            >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? "Copied" : "Copy"}
            </button>
        </div>
    );
}
