export type FeatureRoute = {
    id: string;
    title_zh_tw: string;
    title_zh_cn?: string;
    title_th?: string;
    description_zh_tw?: string;
    description_zh_cn?: string;
    description_th?: string;
    image_url?: string;
    pdf_link?: string;
    video_link?: string;
    is_active: boolean;
    is_pinned: boolean; // New field
};

export type NewsEvent = {
    id: string;
    title: string;
    title_zh_tw?: string;
    title_zh_cn?: string;
    title_th?: string;
    content?: string;
    content_zh_tw?: string;
    content_zh_cn?: string;
    content_th?: string;
    image_url?: string;
    is_active: boolean;
    start_date?: string;
    end_date?: string;
};

export type GeneralContent = {
    key: string;
    title_zh_tw?: string;
    title_zh_cn?: string;
    title_th?: string;
    content_zh_tw?: string;
    content_zh_cn?: string;
    content_th?: string;
    link_url?: string;
    updated_at?: string;
};


export interface CustomerReview {
    id: string;
    name: string;
    content: string;
    rating?: number;
    photos?: string[];
    show_on_home: boolean;
    created_at?: string;
};

export interface Banner {
    id: string;
    title?: string;
    internal_note?: string;
    image_url: string;
    is_default: boolean;
    start_at?: string;
    end_at?: string;
    is_active: boolean;
    created_at?: string;
};
export type NavigationLink = {
    id: string;
    label: string;
    label_zh_tw?: string;
    label_zh_cn?: string;
    label_th?: string;
    url: string;
    sort_order: number;
    is_active: boolean;
};
