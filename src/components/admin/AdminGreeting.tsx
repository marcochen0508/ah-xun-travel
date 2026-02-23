"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminGreeting() {
    const [prefix, setPrefix] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user?.email) {
                const nickname = user.user_metadata?.nickname;
                if (nickname) {
                    setPrefix(nickname);
                } else {
                    const namePart = user.email.split('@')[0];
                    setPrefix(namePart);
                }
            }
        };
        fetchUser();
    }, []);

    if (!prefix) {
        return <div className="text-sm text-gray-500">管理員，您好</div>;
    }

    return <div className="text-sm text-gray-500">{prefix} 管理員，您好</div>;
}
