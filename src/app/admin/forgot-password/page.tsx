"use strict";
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Loader2, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        setError(null);

        try {
            // Determine the base URL dynamically for redirect
            const returnUrl = `${window.location.origin}/admin/update-password`;

            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: returnUrl,
            });

            if (error) {
                setError(error.message);
            } else {
                setMessage("重置密碼信件已發送！請檢查您的信箱 (包含垃圾郵件)。");
            }
        } catch (err) {
            setError("發送請求失敗");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
                <h1 className="mb-2 text-center text-2xl font-bold text-gray-800">
                    忘記密碼
                </h1>
                <p className="mb-6 text-center text-sm text-gray-500">
                    請輸入您的電子郵件，我們將發送重置連結給您。
                </p>

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

                <form onSubmit={handleResetPassword} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            電子郵件 (Email)
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                placeholder="admin@example.com"
                            />
                            <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : "發送重置信件"}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <Link href="/admin/login" className="flex items-center justify-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                        <ArrowLeft size={16} /> 返回登入頁
                    </Link>
                </div>
            </div>
        </div>
    );
}
