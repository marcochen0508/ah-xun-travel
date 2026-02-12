"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Lock } from "lucide-react";

export default function MaintenanceBlocker({ initialMaintenanceMode = false }: { initialMaintenanceMode?: boolean }) {
    const pathname = usePathname();
    const [isMaintenance, setIsMaintenance] = useState(initialMaintenanceMode);

    // Optional: Polling or swr to check for status updates without refresh?
    // For now, initial state from server is good enough. 
    // If admin toggles it on, users might need a refresh or navigation to see it.
    // Let's add a simple check on mount to be sure.
    useEffect(() => {
        fetch("/api/settings/maintenance")
            .then(res => res.json())
            .then(data => {
                if (data.maintenance_mode !== undefined) {
                    setIsMaintenance(data.maintenance_mode);
                }
            })
            .catch(err => console.error("Failed to check maintenance status"));
    }, [pathname]); // Re-check on navigation

    // If NOT maintenance mode, or if we are in Admin area, do not block.
    if (!isMaintenance) return null;
    if (pathname?.startsWith("/admin") || pathname?.startsWith("/api") || pathname?.startsWith("/_next")) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center text-center p-4">
            <div className="max-w-md">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <Lock size={32} className="text-gray-500" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    網站維護中
                    <br />
                    <span className="text-lg font-normal text-gray-500 mt-2 block">Site Under Maintenance</span>
                </h1>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    我們正在進行系統升級與優化，以提供更優質的服務。
                    <br />
                    請稍後再回來訪問。
                </p>
                <div className="h-1 w-24 bg-lanna-green mx-auto rounded-full opacity-50"></div>

                {/* Contact Info (Optional) */}
                <div className="mt-12 text-sm text-gray-400">
                    聯絡我們: <a href="mailto:godotchen@hotmail.com" className="underline hover:text-gray-600">godotchen@hotmail.com</a>
                </div>
            </div>
        </div>
    );
}
