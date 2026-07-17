import { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Fragment } from "react";
import { styling } from "./styling";
import Image from "next/image";
import assets from "../services/assets";

interface Props {
    block: CalloutBlockObjectResponse;
}
/** Notion icons arrive as an emoji, a custom emoji, or an image. Only the last needs rendering as one. */
function iconImageUrl(icon: CalloutBlockObjectResponse["callout"]["icon"]) {
    if (!icon) return null;
    switch (icon.type) {
        case "file":
            return icon.file.url;
        case "external":
            return icon.external.url;
        case "custom_emoji":
            return icon.custom_emoji.url;
        default:
            return null;
    }
}

export default async function RenderCallout({ block }: Props) {
    const callout = block.callout;
    const imageUrl = iconImageUrl(callout.icon);
    return (
        <section className="w-full  ">
            {callout.icon && (
                <Fragment>
                    {callout.icon.type === "emoji" ? (
                        callout.icon.emoji
                    ) : imageUrl ? (
                        <Image
                            blurDataURL={assets.blur_img}
                            placeholder="blur"
                            src={imageUrl}
                            width={650}
                            height={400}
                            alt="emoji"
                        />
                    ) : null}
                </Fragment>
            )}
            <div>
                {callout.rich_text.map((i) => (
                    <span
                        key={i.plain_text}
                        style={styling(i.annotations)}
                        className="text-black"
                    >
                        {i.plain_text}
                    </span>
                ))}
            </div>
        </section>
    );
}
