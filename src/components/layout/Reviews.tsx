"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { supabase } from "@/lib/supabase";
import { CustomerReview } from "@/types/schema";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Reviews() {
    const { t } = useLanguage();
    const [reviews, setReviews] = useState<CustomerReview[]>([]);
    const [loading, setLoading] = useState(true);
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
                    <div className="w-24 h-1 bg-lanna-gold mx-auto"></div>
                </div>

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

            {/* Detail Modal */}
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
        </section>
    );
}
