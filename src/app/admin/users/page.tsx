"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Loader2, Trash2, KeyRound, Plus, ShieldCheck } from "lucide-react";

type User = {
    id: string;
    email: string;
    created_at: string;
    last_sign_in_at: string;
    isSuperAdmin?: boolean;
};

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);

    // Form State
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newIsSuperAdmin, setNewIsSuperAdmin] = useState(false);
    const [creating, setCreating] = useState(false);
    const [actionSuccess, setActionSuccess] = useState<string | null>(null);

    // Password Reset Modal State
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [resetPassword, setResetPassword] = useState("");
    const [resetConfirmPassword, setResetConfirmPassword] = useState("");
    const [updatingPassword, setUpdatingPassword] = useState(false);

    useEffect(() => {
        fetchUsers();
        getUserSession();
    }, []);

    const getUserSession = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        setCurrentUserEmail(user?.email || null);
    };

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/admin/users");
            const data = await res.json();
            if (res.ok) {
                setUsers(data.users);
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError("Failed to fetch users");
        } finally {
            setLoading(false);
        }
    };

    const handleCreateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setCreating(true);
        setActionSuccess(null);
        setError(null);

        try {
            const res = await fetch("/api/admin/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: newEmail,
                    password: newPassword,
                    isSuperAdmin: newIsSuperAdmin
                }),
            });
            const data = await res.json();
            if (res.ok) {
                setActionSuccess(`使用者 ${data.user.email} 已建立！`);
                setNewEmail("");
                setNewPassword("");
                setNewIsSuperAdmin(false);
                fetchUsers();
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError("建立使用者失敗");
        } finally {
            setCreating(false);
        }
    };

    const handleDeleteUser = async (userId: string) => {
        if (!confirm("確定要刪除此使用者嗎？")) return;

        setActionSuccess(null);
        setError(null);
        try {
            const res = await fetch("/api/admin/users", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId }),
            });

            if (res.ok) {
                setActionSuccess("使用者刪除成功");
                fetchUsers();
            } else {
                const data = await res.json();
                setError(data.error);
            }
        } catch (err) {
            setError("刪除使用者失敗");
        }
    };

    const openPasswordModal = (userId: string) => {
        setSelectedUserId(userId);
        setResetPassword("");
        setResetConfirmPassword("");
        setError(null);
        setActionSuccess(null);
        setIsPasswordModalOpen(true);
    };

    const closePasswordModal = () => {
        setIsPasswordModalOpen(false);
        setSelectedUserId(null);
        setResetPassword("");
        setResetConfirmPassword("");
    };

    const submitPasswordUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedUserId) return;

        if (resetPassword !== resetConfirmPassword) {
            alert("兩次密碼輸入不一致");
            return;
        }
        if (resetPassword.length < 6) {
            alert("密碼長度至少需 6 個字元");
            return;
        }

        setUpdatingPassword(true);
        setActionSuccess(null);
        setError(null);

        try {
            const res = await fetch("/api/admin/users", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: selectedUserId, password: resetPassword }),
            });

            if (res.ok) {
                setActionSuccess("密碼更新成功");
                closePasswordModal();
            } else {
                const data = await res.json();
                setError(data.error);
            }
        } catch (err) {
            setError("更新密碼失敗");
        } finally {
            setUpdatingPassword(false);
        }
    }

    return (
        <div className="space-y-6 relative">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">帳號管理 (User Management)</h1>
            </div>

            {/* Create User Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Plus size={20} /> 新增使用者
                </h3>
                <form onSubmit={handleCreateUser} className="flex gap-4 items-end flex-wrap">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">電子郵件 (Email)</label>
                        <input
                            type="email"
                            required
                            value={newEmail}
                            onChange={e => setNewEmail(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-lanna-green"
                            placeholder="user@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">密碼 (Password)</label>
                        <input
                            type="text"
                            required
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-lanna-green"
                            placeholder="password123"
                            minLength={6}
                        />
                    </div>
                    {/* Only Godotchen can create Super Admins */}
                    {currentUserEmail?.toLowerCase() === "godotchen@hotmail.com" && (
                        <div className="flex items-center gap-2 mb-3">
                            <input
                                type="checkbox"
                                id="isSuperAdmin"
                                checked={newIsSuperAdmin}
                                onChange={e => setNewIsSuperAdmin(e.target.checked)}
                                className="w-4 h-4 text-lanna-green border-gray-300 rounded focus:ring-lanna-green"
                            />
                            <label htmlFor="isSuperAdmin" className="text-sm font-medium text-purple-700 flex items-center gap-1">
                                <ShieldCheck size={16} /> 設定為超級管理員
                            </label>
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={creating}
                        className="bg-lanna-green text-white px-4 py-2 rounded hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center gap-2"
                    >
                        {creating ? <Loader2 className="animate-spin" size={18} /> : "新增使用者"}
                    </button>
                </form>
            </div>

            {actionSuccess && (
                <div className="bg-green-50 text-green-700 p-3 rounded border border-green-200">
                    {actionSuccess}
                </div>
            )}

            {error && (
                <div className="bg-red-50 text-red-700 p-3 rounded border border-red-200">
                    {error}
                </div>
            )}

            {/* User List */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                {loading ? (
                    <div className="p-8 flex justify-center">
                        <Loader2 className="animate-spin text-gray-400" size={32} />
                    </div>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">電子郵件</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">建立日期</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">最後登入</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">權限</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {user.email}
                                        {user.email === currentUserEmail && <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">您</span>}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(user.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : '從未登入'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {user.isSuperAdmin ? (
                                            <span className="flex items-center gap-1 text-purple-600 font-semibold">
                                                <ShieldCheck size={16} /> 超級管理員
                                            </span>
                                        ) : (
                                            <span className="text-gray-500">管理員</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex justify-end gap-3">
                                            <button
                                                onClick={() => openPasswordModal(user.id)}
                                                className="text-indigo-600 hover:text-indigo-900 disabled:opacity-30 disabled:cursor-not-allowed"
                                                title="修改密碼"
                                                // 1. Logged in user can change their own password.
                                                // 2. Super admins can change anyone's password.
                                                disabled={
                                                    !(
                                                        user.email === currentUserEmail ||
                                                        (users.find(u => u.email === currentUserEmail)?.isSuperAdmin || false)
                                                    )
                                                }
                                            >
                                                <KeyRound size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteUser(user.id)}
                                                className="text-red-600 hover:text-red-900 disabled:opacity-30 disabled:cursor-not-allowed"
                                                title="刪除使用者"
                                                // Only Super Admin can delete.
                                                // Cannot delete self.
                                                // Only Root (godotchen) can delete other Super Admins.
                                                disabled={
                                                    !users.find(u => u.email === currentUserEmail)?.isSuperAdmin || // Must be Super Admin
                                                    user.email === currentUserEmail || // Cannot delete self
                                                    (user.isSuperAdmin && currentUserEmail !== "godotchen@hotmail.com") // Cannot delete Super Admin unless Root
                                                }
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {users.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">找不到使用者</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Password Reset Modal */}
            {isPasswordModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-sm overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">修改密碼</h3>
                            <form onSubmit={submitPasswordUpdate} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">新密碼</label>
                                    <input
                                        type="password"
                                        required
                                        value={resetPassword}
                                        onChange={(e) => setResetPassword(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lanna-green"
                                        placeholder="請輸入新密碼"
                                        minLength={6}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">確認新密碼</label>
                                    <input
                                        type="password"
                                        required
                                        value={resetConfirmPassword}
                                        onChange={(e) => setResetConfirmPassword(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lanna-green"
                                        placeholder="請再次輸入新密碼"
                                        minLength={6}
                                    />
                                </div>
                                <div className="flex justify-end gap-3 mt-6">
                                    <button
                                        type="button"
                                        onClick={closePasswordModal}
                                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                                        disabled={updatingPassword}
                                    >
                                        取消
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={updatingPassword}
                                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 transition-colors flex items-center gap-2"
                                    >
                                        {updatingPassword ? <Loader2 className="animate-spin" size={16} /> : "確認修改"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
