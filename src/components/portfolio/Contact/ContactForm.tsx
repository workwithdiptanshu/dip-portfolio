import React from "react";
import ContactFormInner from "./ContactFormInner";
import Footer from "@/components/Common/Footer";

export default function ContactForm() {
    return (
        <div className="pt-[10%]">
            <form
                action="https://formsubmit.co/workwithdiptanshu@gmail.com"
                method="POST"
                className="flex flex-col gap-4"
            >
                <input
                    type="hidden"
                    name="_subject"
                    value="diptanshumahish.in, someone got in touch"
                ></input>
                <input
                    type="hidden"
                    name="_next"
                    value="https://diptanshumahish.in/thank-you"
                ></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <ContactFormInner
                    heading="Your name"
                    name="name"
                    placeholder="Full name please"
                    key="name"
                />
                <ContactFormInner
                    heading="Your email"
                    name="email"
                    placeholder="hey@email.com"
                    type="email"
                    key="email"
                />
                <ContactFormInner
                    heading="Company or team"
                    name="company"
                    placeholder="Where you're writing from"
                    required={false}
                    key="company"
                />
                <ContactFormInner
                    heading="What's this about?"
                    name="purpose"
                    placeholder="A role, a project, or just saying hi"
                    key="purpose"
                />
                <div className="flex flex-col  gap-3 text-white">
                    <span className="uppercase">Your message</span>
                    <textarea
                        className="w-full p-4 bg-white bg-opacity-5 rounded-md resize-none focus:outline-none h-[200px]"
                        placeholder="So here goes nothing."
                        name="form-message"
                    />
                </div>
                <button
                    className="bg-white p-2 rounded-lg hover:bg-yellow-300 transition-colors"
                    type="submit"
                >
                    Send it
                </button>
                <span className="text-sm text-white opacity-60">
                    I read everything and reply to what I can. If you&apos;d
                    rather just email,{" "}
                    <a
                        href="mailto:diptanshumahish2016@gmail.com"
                        className="underline"
                    >
                        diptanshumahish2016@gmail.com
                    </a>
                    .
                </span>
            </form>
        </div>
    );
}
