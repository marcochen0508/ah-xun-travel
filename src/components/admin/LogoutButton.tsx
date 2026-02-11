"use client";

import { LogOut, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function LogoutButton() {
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        try {
            console.log("Triggering logout...");


            // 1. Call server API to clear HTTP-only cookies
            await fetch('/auth/signout', { method: 'POST' });

            // 2. Clear client-side session just in case
            await supabase.auth.signOut();

            console.log("Logout successful, reloading...");

            // 3. Force hard reload to login page to clear all client state
            window.location.href = "/admin/login";
        } catch (e) {
            console.error("Logout error:", e);
            // Fallback
            window.location.href = "/admin/login";
        }
    };

    return (
        <button
            onClick={handleLogout}
            disabled={loading}
            className={`flex w-full items-center gap-3 rounded-lg p-3 text-left text-red-200 transition-colors hover:bg-black/20 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {loading ? <Loader2 size={20} className="animate-spin" /> : <LogOut size={20} />}
            <span>{loading ? "登出中..." : "登出"}</span>
        </button>
    );
}
