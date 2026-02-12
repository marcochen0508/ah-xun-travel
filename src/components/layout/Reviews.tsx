"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { supabase } from "@/lib/supabase";
import { CustomerReview } from "@/types/schema";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star, X, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Reviews() {
    const { t } = useLanguage();
    const [reviews, setReviews] = useState<CustomerReview[]>([]);
    const [loading, setLoading] = useState(true);
    const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [reviewForm, setReviewForm] = useState({
        name: "",
        content: "",
        rating: 5,
        photos: [] as string[]
    });

    const [selectedReview, setSelectedReview] = useState<CustomerReview | null>(null);

    // Embla Carousel Setup
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
        Autoplay({ delay: 5000, stopOnInteraction: false })
    ]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        const fetchAndShuffleReviews = async () => {
            try {
                const { data, error } = await supabase
                    .from("customer_reviews")
                    .select("*")
                    .eq("show_on_home", true);

                if (error) throw error;

                // Random Shuffle
                const shuffled = (data || []).sort(() => Math.random() - 0.5);
                setReviews(shuffled);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAndShuffleReviews();
    }, []);

    const toggleModal = (review: CustomerReview | null) => {
        if (review) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        setSelectedReview(review);
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const files = Array.from(e.target.files);
        const newPhotos: string[] = [];

        try {
            setIsUploading(true);
            for (const file of files) {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('bucket', 'reviews');

                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();
                if (!response.ok) throw new Error(result.error);
                newPhotos.push(result.url);
            }

            setReviewForm(prev => ({
                ...prev,
                photos: [...prev.photos, ...newPhotos]
            }));
        } catch (error) {
            console.error("Upload failed", error);
            alert("圖片上傳失敗，請稍後再試");
        } finally {
            setIsUploading(false);
        }
    };

    const handleRemovePhoto = (indexToRemove: number) => {
        setReviewForm(prev => ({
            ...prev,
            photos: prev.photos.filter((_, index) => index !== indexToRemove)
        }));
    };

    const handleSubmitReview = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/reviews/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reviewForm)
            });

            if (!response.ok) throw new Error("Submission failed");

            // alert("留言已送出！待管理者審核通過後將顯示於頁面。");
            toast.success(t.reviews.successMessage);
            setIsWriteModalOpen(false);
            setReviewForm({ name: "", content: "", rating: 5, photos: [] });
        } catch (error) {
            console.error(error);
            // alert("送出失敗，請稍後再試");
            toast.error(t.reviews.errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="reviews" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-lanna-gold uppercase tracking-widest font-bold text-sm mb-4 block">
                        TESTIMONIALS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-lanna-coffee mb-6">
                        {t.nav.reviews}
                    </h2>

                    <button
                        onClick={() => setIsWriteModalOpen(true)}
                        className="mt-4 px-8 py-3 bg-lanna-gold text-white rounded-full font-bold hover:bg-lanna-gold/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        {t.reviews.writeBtn}
                    </button>
                </div>

                {/* ... (Existing Carousel Code) ... */}
                {loading ? (
                    <div className="flex justify-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lanna-gold"></div>
                    </div>
                ) : (
                    <div className="relative max-w-7xl mx-auto px-2 md:px-12">
                        {/* Navigation Buttons */}
                        <button
                            onClick={scrollPrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md text-lanna-gold transition-all hover:scale-110 hidden md:flex"
                            aria-label="Previous"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md text-lanna-gold transition-all hover:scale-110 hidden md:flex"
                            aria-label="Next"
                        >
                            <ChevronRight size={32} />
                        </button>

                        {reviews.length === 0 ? (
                            <div className="text-center text-gray-400 py-12 italic">
                                尚無評論
                            </div>
                        ) : (
                            <div className="overflow-hidden" ref={emblaRef}>
                                <div className="flex -ml-4 md:-ml-6 py-4">
                                    {reviews.map((review) => (
                                        <div
                                            key={review.id}
                                            className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-6"
                                        >
                                            <div className="bg-lanna-cream/20 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-transparent hover:border-lanna-gold/20">
                                                {/* Quote Icon */}
                                                <div className="text-6xl text-lanna-gold/20 font-serif leading-none mb-4 font-normal">
                                                    &ldquo;
                                                </div>

                                                <div className="flex-1 mb-6">
                                                    <p className="text-gray-600 whitespace-pre-wrap leading-relaxed min-h-[5rem]">
                                                        {review.content.length > 90
                                                            ? `${review.content.substring(0, 90)}...`
                                                            : review.content
                                                        }
                                                    </p>
                                                </div>

                                                {/* Photos Preview */}
                                                {review.photos && review.photos.length > 0 && (
                                                    <div className="mb-6 flex gap-2 overflow-hidden h-16">
                                                        {review.photos.slice(0, 3).map((photo, index) => (
                                                            <div key={index} className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 border-white shadow-sm">
                                                                <Image
                                                                    src={photo}
                                                                    alt={`Review photo ${index}`}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                        ))}
                                                        {review.photos.length > 3 && (
                                                            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 text-xs text-gray-500 rounded-lg border-2 border-white shadow-sm font-bold">
                                                                +{review.photos.length - 3}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                <div className="flex items-center justify-between border-t border-gray-200/60 pt-6 mt-auto">
                                                    <div className="flex flex-col">
                                                        <div className="font-bold text-lanna-coffee text-lg">
                                                            {review.name}
                                                        </div>
                                                        <div className="flex text-lanna-gold text-sm mt-1">
                                                            {Array.from({ length: 5 }).map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    size={14}
                                                                    fill={i < (review.rating || 5) ? "currentColor" : "none"}
                                                                    className={i < (review.rating || 5) ? "text-lanna-gold" : "text-gray-300"}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => toggleModal(review)}
                                                        className="text-sm bg-white text-lanna-green border border-lanna-green px-4 py-2 rounded-full font-bold hover:bg-lanna-green hover:text-white transition-all shadow-sm"
                                                    >
                                                        查看全文
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Read Modal */}
            {selectedReview && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all" onClick={() => toggleModal(null)}>
                    <div
                        className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-200"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => toggleModal(null)}
                            className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>

                        <div className="p-8">
                            <div className="flex items-center justify-between mb-6 border-b pb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-lanna-coffee">{selectedReview.name}</h3>
                                    <div className="flex text-lanna-gold mt-1 text-lg">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                fill={i < (selectedReview.rating || 5) ? "currentColor" : "none"}
                                                className={i < (selectedReview.rating || 5) ? "text-lanna-gold" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500 self-start mt-1">
                                    {selectedReview.created_at && new Date(selectedReview.created_at).toLocaleDateString()}
                                </div>
                            </div>

                            <div className="text-gray-700 whitespace-pre-wrap leading-relaxed text-lg mb-8">
                                {selectedReview.content}
                            </div>

                            {/* Full Photos Grid */}
                            {selectedReview.photos && selectedReview.photos.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {selectedReview.photos.map((photo, index) => (
                                        <div key={index} className="relative aspect-video rounded-lg overflow-hidden border bg-gray-50">
                                            <Image
                                                src={photo}
                                                alt={`Review full photo ${index}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Write Review Modal */}
            {isWriteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all" onClick={() => setIsWriteModalOpen(false)}>
                    <div
                        className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-200"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-lanna-coffee mb-4">{t.reviews.modalTitle}</h3>

                            <form onSubmit={handleSubmitReview} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t.reviews.nameLabel} <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-lanna-gold outline-none"
                                        value={reviewForm.name}
                                        onChange={e => setReviewForm({ ...reviewForm, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t.reviews.ratingLabel}</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <button
                                                type="button"
                                                key={star}
                                                onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                                                className="focus:outline-none transition-transform hover:scale-110"
                                            >
                                                <Star
                                                    size={28}
                                                    fill={star <= reviewForm.rating ? "#D4AF37" : "none"}
                                                    className={star <= reviewForm.rating ? "text-lanna-gold" : "text-gray-300"}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t.reviews.contentLabel} <span className="text-red-500">*</span></label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-lanna-gold outline-none"
                                        value={reviewForm.content}
                                        onChange={e => setReviewForm({ ...reviewForm, content: e.target.value })}
                                        placeholder=""
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t.reviews.photoLabel}</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handleFileUpload}
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lanna-gold/10 file:text-lanna-gold hover:file:bg-lanna-gold/20"
                                    />
                                    {reviewForm.photos.length > 0 && (
                                        <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
                                            {reviewForm.photos.map((photo, i) => (
                                                <div key={i} className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden border group">
                                                    <Image src={photo} alt="preview" fill className="object-cover" />
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemovePhoto(i)}
                                                        className="absolute top-0 right-0 bg-red-500 text-white p-0.5 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <X size={12} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-end gap-2 pt-4 border-t">
                                    <button
                                        type="button"
                                        onClick={() => setIsWriteModalOpen(false)}
                                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                                    >
                                        {t.contact.close}
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || isUploading}
                                        className="px-6 py-2 bg-lanna-gold text-white rounded-lg font-bold hover:bg-lanna-gold/90 disabled:opacity-50 flex items-center gap-2"
                                    >
                                        {(isUploading || isSubmitting) && <Loader2 size={16} className="animate-spin" />}
                                        {isUploading ? t.reviews.uploading : (isSubmitting ? t.reviews.submitting : t.reviews.submitBtn)}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
