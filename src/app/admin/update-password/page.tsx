"use strict";
"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Loader2, KeyRound } from "lucide-react";

export default function UpdatePasswordPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Effectively, when they land here from the email link, 
    // Supabase client should detect the session from the URL hash.
    // We can add a check to see if we have a session.
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) {
                // If no session, they might have come here directly or the link expired
                // But let's not be too aggressive with redirecting yet, 
                // sometimes session takes a moment to initialize.
                // For now, we assume if they are here, they want to update password.
            }
        });

        // Check for hash parameters for error handling
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        if (hashParams.get("error")) {
            setError(hashParams.get("error_description") || "連結無效或已過期");
        }
    }, []);

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("兩次密碼輸入不一致");
            return;
        }

        if (password.length < 6) {
            setError("密碼長度至少需 6 個字元");
            return;
        }

        setLoading(true);
        setMessage(null);
        setError(null);

        try {
            const { error } = await supabase.auth.updateUser({
                password: password
            });

            if (error) {
                setError(error.message);
            } else {
                setMessage("密碼更新成功！正在跳轉至後台首頁...");
                setTimeout(() => {
                    router.replace("/admin");
                }, 2000);
            }
        } catch (err) {
            setError("更新密碼失敗");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
                <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
                    設定新密碼
                </h1>

                {message && (
                    <div className="mb-4 rounded-md bg-green-50 p-3 text-sm text-green-600">
                        {message}
                    </div>
                )}

                {error && (
                    <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
                        {error}
                    </div>
                )}

                <form onSubmit={handleUpdatePassword} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            新密碼
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                placeholder="••••••••"
                                minLength={6}
                            />
                            <KeyRound className="absolute left-3 top-2.5 text-gray-400" size={18} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            確認新密碼
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                placeholder="••••••••"
                                minLength={6}
                            />
                            <KeyRound className="absolute left-3 top-2.5 text-gray-400" size={18} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : "更新密碼"}
                    </button>
                </form>
            </div>
        </div>
    );
}
