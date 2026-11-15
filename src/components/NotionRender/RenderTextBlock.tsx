import {
    CodeBlockObjectResponse,
    ParagraphBlockObjectResponse,
    QuoteBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { styling } from "./styling";
import { Quote } from "lucide-react";

interface Props {
    block:
        | ParagraphBlockObjectResponse
        | CodeBlockObjectResponse
        | QuoteBlockObjectResponse;
}
export default async function RenderTextBlock({ block }: Props) {
    switch (block.type) {
        case "paragraph":
            return (
                <p>
                    {block.paragraph.rich_text.map((i) =>
                        i.href === null ? (
                            <span
                                key={i.plain_text}
                                style={styling(i.annotations)}
                            >
                                {i.plain_text}
                            </span>
                        ) : (
                            <a
                                key={i.plain_text}
                                href={i.href ?? ""}
                                style={styling(i.annotations)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {i.plain_text}
                            </a>
                        )
                    )}
                </p>
            );
        case "quote":
            return (
                <blockquote className="bg-card border-l-4 border-cat-moss w-full p-5 flex gap-2 items-start rounded-r-2xl font-serif text-lg">
                    <Quote fill="black" />
                    {block.quote.rich_text.map((i) => (
                        <span
                            key={i.plain_text}
                            style={styling(i.annotations)}
                            className="text-black "
                        >
                            {i.plain_text}
                        </span>
                    ))}
                </blockquote>
            );

        case "code":
            return (
                <code>
                    {block.code.rich_text.map((i) => (
                        <span
                            key={i.plain_text}
                            className="bg-card ml-2 px-2 rounded-md py-[1px] flex items-center text-md justify-center w-fit "
                            style={styling(i.annotations)}
                        >
                            {i.plain_text}
                        </span>
                    ))}
                </code>
            );
    }
}
