import React from "react";
import { CatHead } from "@/components/cats/Cats";

/**
 * A cat peeks up, blinks, says hi, and the page lifts away. Shown on the
 * first page of a visit only.
 *
 * It's all CSS, so it never waits on JavaScript and always gets out of the
 * way. The script below runs before the first paint: on a later page or a
 * reload it marks the page as seen, and the loader is never drawn at all.
 */

const KEY = "dm-hello";

export const firstLoadScript = `try{if(sessionStorage.getItem("${KEY}")){document.documentElement.classList.add("hello-seen")}else{sessionStorage.setItem("${KEY}","1")}}catch(e){}`;

export default function FirstLoad() {
    return (
        <div aria-hidden className="hello">
            <div className="hello-stage">
                <div className="hello-window">
                    <CatHead color="moss" face="white" mood="open" className="hello-cat" />
                </div>
                <span className="hello-ledge" />
                <span className="hello-hi font-hand">hi!</span>
            </div>
        </div>
    );
}
