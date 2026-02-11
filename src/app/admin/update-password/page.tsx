"use strict";
"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Loader2, KeyRound, Eye, EyeOff } from "lucide-react";

export default function UpdatePasswordPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isSessionValid, setIsSessionValid] = useState(false);
    const [checkingSession, setCheckingSession] = useState(true);

    // Toggle Password Visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const router = useRouter();

    useEffect(() => {
        // 1. Check current session immediately
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setIsSessionValid(true);
                setCheckingSession(false);
            }
        };
        checkSession();

        // 2. Listen for Auth State Changes (Handles the magic link / code exchange)
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            console.log("Auth Event:", event);
            if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") {
                if (session) {
                    setIsSessionValid(true);
                    setCheckingSession(false);
                }
            }
        });

        // 3. Handle URL errors
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        if (hashParams.get("error")) {
            setError(hashParams.get("error_description") || "連結無效或已過期");
            setCheckingSession(false);
        }

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isSessionValid) {
            setError("尚未取得授權，請稍候或重新點擊信件連結");
            return;
        }

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

    if (checkingSession) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
                <div className="text-center">
                    <Loader2 className="animate-spin h-8 w-8 text-indigo-600 mx-auto mb-4" />
                    <p className="text-gray-600">正在驗證連結...</p>
                </div>
            </div>
        );
    }

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
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 pl-10 pr-10 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                placeholder="••••••••"
                                minLength={6}
                            />
                            <KeyRound className="absolute left-3 top-2.5 text-gray-400" size={18} />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 focus:outline-none"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            確認新密碼
                        </label>
                        <div className="relative mt-1">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 pl-10 pr-10 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                placeholder="••••••••"
                                minLength={6}
                            />
                            <KeyRound className="absolute left-3 top-2.5 text-gray-400" size={18} />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 focus:outline-none"
                            >
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !isSessionValid}
                        className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : "更新密碼"}
                    </button>
                </form>
            </div>
        </div>
    );
}
