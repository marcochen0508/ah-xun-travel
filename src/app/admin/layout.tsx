import Link from "next/link";
import { LayoutDashboard, Map, Newspaper, Info, FileText, MessageSquare, Image as ImageIcon, Phone } from "lucide-react";
import LogoutButton from "@/components/admin/LogoutButton";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-100 flex font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-lanna-green text-white flex flex-col">
                <div className="p-6 border-b border-white/10">
                    <h1 className="text-2xl font-bold font-serif">阿勛後台管理</h1>
                    <p className="text-xs opacity-70">AH XUN Admin System</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <LayoutDashboard size={20} />
                        <span>總覽 (Dashboard)</span>
                    </Link>
                    <Link
                        href="/admin/banners"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <ImageIcon size={20} />
                        <span>首頁看板管理</span>
                    </Link>
                    <Link
                        href="/admin/news"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <Newspaper size={20} />
                        <span>最新消息管理</span>
                    </Link>
                    <Link
                        href="/admin/about"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <Info size={20} />
                        <span>關於我們編輯</span>
                    </Link>
                    <Link
                        href="/admin/routes"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <Map size={20} />
                        <span>特色行程管理</span>
                    </Link>
                    <Link
                        href="/admin/reviews"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <MessageSquare size={20} />
                        <span>顧客回饋</span>
                    </Link>

                    <Link
                        href="/admin/users"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <FileText size={20} />
                        <span>帳號管理</span>
                    </Link>

                    <Link
                        href="/admin/notes"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <FileText size={20} />
                        <span>包車注意事項</span>
                    </Link>
                    <Link
                        href="/admin/contact"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <Phone size={20} />
                        <span>聯絡資訊管理</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <LogoutButton />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="bg-white shadow-sm p-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">管理面板</h2>
                    <div className="text-sm text-gray-500">管理員，您好</div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div >
    );
}
