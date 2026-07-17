import React from "react";

interface Props {
    name: string;
    placeholder: string;
    heading: string;
    type?: string;
    required?: boolean;
}
export default function ContactFormInner({
    heading,
    name,
    placeholder,
    type = "text",
    required = true,
}: Props) {
    return (
        <div className="flex flex-col  gap-3 text-white">
            <span className="uppercase">
                {heading}
                {!required && (
                    <span className="normal-case opacity-40"> (optional)</span>
                )}
            </span>
            <input
                type={type}
                required={required}
                className="w-full p-4 bg-white bg-opacity-5 rounded-md  focus:outline-none"
                placeholder={placeholder}
                name={name}
            />
        </div>
    );
}
