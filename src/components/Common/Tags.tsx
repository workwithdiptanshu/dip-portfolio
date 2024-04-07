import React from "react";

interface Props {
    stack: string[];
}
export default function Tags({ stack }: Props) {
    return (
        <div className="flex gap-2 flex-wrap">
            {stack.map((ele, idx) => {
                return (
                    <span
                        className="bg-white opacity-80 text-xs text-black tracking-wide px-4 py-1 rounded-full uppercase"
                        key={idx}
                    >
                        {ele}
                    </span>
                );
            })}
        </div>
    );
}
