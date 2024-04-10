import { ServerProps } from "@/contracts/ServerComponents";
import React from "react";

export default function page({ params }: { params: { type: string } }) {
    return <div className="py-[5%]">{params.type}</div>;
}
