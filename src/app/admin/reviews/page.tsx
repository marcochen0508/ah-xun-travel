"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { CustomerReview } from "@/types/schema";
import Image from "next/image";

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<CustomerReview[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const { data, error } = await supabase
                .from("customer_reviews")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setReviews(data || []);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("確定要刪除此評論嗎？此動作無法復原。")) return;

        try {
            const { error } = await supabase
                .from("customer_reviews")
                .delete()
                .eq("id", id);

            if (error) throw error;
            setReviews(reviews.filter(r => r.id !== id));
        } catch (error) {
            console.error("Error deleting review:", error);
            alert("刪除失敗");
        }
    };

    const filteredReviews = reviews.filter(r =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">顧客回饋管理</h1>
                <Link
                    href="/admin/reviews/new"
                    className="flex items-center justify-center gap-2 bg-lanna-green text-white px-4 py-2 rounded-lg hover:bg-lanna-green/90 transition-colors shadow-sm"
                >
                    <Plus size={20} />
                    <span>新增回饋</span>
                </Link>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="搜尋姓名或內容..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lanna-green outline-none"
                />
            </div>

            {/* List Table */}
            {loading ? (
                <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lanna-green"></div>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow overflow-hidden border">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">照片</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名 / 評分</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">內容預覽</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">狀態</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredReviews.map((review) => (
                                    <tr key={review.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="h-12 w-12 rounded bg-gray-100 relative overflow-hidden border">
                                                {review.photos && review.photos.length > 0 ? (
                                                    <Image src={review.photos[0]} alt="Avatar" fill className="object-cover" />
                                                ) : (
                                                    <div className="flex items-center justify-center h-full text-gray-300 text-xs text-center p-1">No img</div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-bold text-gray-800">{review.name}</div>
                                            <div className="text-sm text-yellow-500">{"★".repeat(review.rating || 5)}</div>
                                            <div className="text-xs text-gray-400 mt-1">
                                                {review.created_at && new Date(review.created_at).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-600 line-clamp-2 max-w-md">
                                                {review.content}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${review.show_on_home ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {review.show_on_home ? '顯示中' : '已隱藏'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end gap-2">
                                                <Link
                                                    href={`/admin/reviews/${review.id}`}
                                                    className="text-blue-600 hover:text-blue-900 bg-blue-50 p-2 rounded-full"
                                                    title="編輯"
                                                >
                                                    <Edit size={16} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(review.id)}
                                                    className="text-red-600 hover:text-red-900 bg-red-50 p-2 rounded-full"
                                                    title="刪除"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filteredReviews.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                            尚無相關評論
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
