import { Loader2 } from "lucide-react";
import React from "react";

/**
 * Deliberately quiet. This shows for a few hundred milliseconds between routes,
 * so it should not announce itself with a full screen takeover.
 */
export default function PageLoader() {
    return (
        <div className="h-[60vh] w-full flex items-center justify-center">
            <div className="flex items-center gap-3 opacity-50">
                <Loader2 className="animate-spin" size={18} />
                <span className="text-sm">Loading</span>
            </div>
        </div>
    );
}
