import React from "react";

interface Props {
    name: string;
    placeholder: string;
    heading: string;
}
export default function ContactFormInner({
    heading,
    name,
    placeholder,
}: Props) {
    return (
        <div className="flex flex-col  gap-3 text-white">
            <span className="uppercase">{heading}</span>
            <input
                type="text"
                required
                className="w-full p-4 bg-white bg-opacity-5 rounded-md  focus:outline-none"
                placeholder={placeholder}
                name={name}
            />
        </div>
    );
}
