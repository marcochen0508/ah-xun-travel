# Project Status: Ah Xun Chiang Mai Travel (阿勛包車)

**Last Updated:** 2026-02-11
**Repository:** `C:\Users\marcochen\Desktop\ah-xun-travel`

## Overview
This is a Next.js (App Router) website for a Chiang Mai charter service. It features a landing page with parallax scrolling, multilingual support (ZH-TW, ZH-CN, TH), and an Admin Dashboard for managing content.

## Key Features & Status

### 1. Frontend (Public)
- **Framework**: Next.js 14, Tailwind CSS.
- **Languages**: English (default), Traditional Chinese, Simplified Chinese, Thai.
  - *Note:* Language switcher uses `LanguageContext`.
- **Components**:
  - `Navbar`: Includes smooth scroll links, Language Switcher, "Charter Notes" modal.
  - `Hero`: Full-screen banner with rotation logic (random default banners + scheduled banners).
  - `Features`: 3 key selling points.
  - `Destinations`: Grid of popular routes (fetched from Supabase).
  - `Reviews`: Customer reviews slider/grid (fetched from Supabase).
  - `About`: Static layout with dynamic content from DB.
  - `Footer`: **Static** contact info (Phone, Line, QR Codes). *Dynamic fetch was reverted for stability.*
    - **Logo**: Uses an Elephant emoji (🐘) natively in code.

### 2. Backend / Admin (Private)
- **Path**: `/admin` (No hard authentication yet, relies on obscurity or simple local checks).
- **Database**: Supabase (PostgreSQL).
- **Features**:
  - **Banners**: Upload, scheduling, and random rotation management.
  - **Routes**: CRUD for travel routes (multilingual titles/descriptions, images, PDF/Video links).
  - **Reviews**: CRUD for customer reviews (text + images).
  - **Content**: "About Us" text editing.
  - *Note:* "Contact Info" management was removed from Admin sidebar to keep Footer static.

### 3. Database Schema (Supabase)
Tables used:
- `banners`: `id`, `image_url`, `title`, `start_time`, `end_time`, `is_active`, `is_default`, `order_index`.
- `routes`: `id`, `title_*`, `description_*`, `image_url`, `pdf_link`, `video_link`.
- `customer_reviews`: `id`, `name`, `rating`, `content`, `image_url`, `date`.
- `general_content`: Key-value store for `about_us` and `charter_notes`.

## Recent Changes & Fixes
- **Footer**: Reverted from dynamic DB fetch to **hardcoded static content** to prevent loading errors.
- **Logo**: Fixed broken `logo.png` by replacing it with a text-based Elephant icon (🐘).
- **About Us**: Removed unintended "10+ Years / 5000+ Customers" stats block.
- **Banners**: Implemented logic to randomly rotate "Default" banners every 5 seconds if no scheduled banner is active.

## Known Issues / Pending Tasks
- **SEO**: Metadata (OpenGraph, descriptions) needs tailored optimization for each language.
- **Performance**: Images are hosted on Supabase Storage; consider optimization if traffic scales.
- **Admin Auth**: Currently minimal. Needs proper NextAuth or Supabase Auth if going public.

## Next Steps for New Conversation
1. **SEO Optimization**: Add `sitemap.xml`, `robots.txt`, and dynamic metadata.
2. **Content Polish**: Verify all Thai/Chinese translations.
3. **Deployment**: Continue monitoring Vercel deployment (currently active).

---
*End of Status Report*
