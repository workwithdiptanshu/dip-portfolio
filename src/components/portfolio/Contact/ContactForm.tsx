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
                    value="contact form submission @dptnshu"
                ></input>
                <input
                    type="hidden"
                    name="_next"
                    value="https://diptanshumahish.me/thank-you"
                ></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <ContactFormInner
                    heading="Your full name"
                    name="name"
                    placeholder="Full name please"
                    key="name"
                />
                <ContactFormInner
                    heading="Your Email Address"
                    name="email"
                    placeholder="hey@email.com"
                    key="email"
                />
                <ContactFormInner
                    heading="Your Contact Number (Whatsapp/iMessage)"
                    name="contact"
                    placeholder="+91 9876543210"
                    key="num"
                />
                <ContactFormInner
                    heading="Contacting for?"
                    name="purpose"
                    placeholder="for my new project!"
                    key="contact"
                />
                <ContactFormInner
                    heading="Budget, if contacting for a project"
                    name="budget"
                    placeholder="$1000-$2000, 0 if not"
                    key="budget"
                />
                <div className="flex flex-col  gap-3 text-white">
                    <span className="uppercase">Your Message</span>
                    <textarea
                        className="w-full p-4 bg-white bg-opacity-5 rounded-md resize-none focus:outline-none h-[200px]"
                        placeholder="So Here goes nothing."
                        name="form-message"
                    />
                </div>
                <button className="bg-white p-2 rounded-lg" type="submit">
                    Let&apos;s Go!
                </button>
                <span className="text-sm text-white">
                    (You will hear back from me ASAP)
                </span>
            </form>
        </div>
    );
}
