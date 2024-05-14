import { dt } from "@/components/privacy/dt";
import React from "react";

export default function page() {
    return <div className="p-8" dangerouslySetInnerHTML={{ __html: dt }} />;
}
