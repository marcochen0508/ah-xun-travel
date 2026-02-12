# Project Status: Ah Xun Chiang Mai Travel (阿勛包車)

**Last Updated:** 2026-02-12
**Repository:** `C:\Users\marcochen\Desktop\ah-xun-travel`

## Overview
This is a Next.js (App Router) website for a Chiang Mai charter service. It features a landing page with parallax scrolling, multilingual support (ZH-TW, ZH-CN, TH), and an Admin Dashboard for managing content.

## Key Features & Status

### 1. Frontend (Public)
- **Framework**: Next.js 14, Tailwind CSS.
- **Languages**: Main: Zh-TW. Support: Zh-CN, Thai.
  - *Note:* Language switcher uses `LanguageContext`.
- **Components**:
  - `Navbar`: Dynamic links (fetched from DB), Smooth scroll, Language Switcher, "Charter Notes" modal.
  - `Hero`: Full-screen banner with rotation logic (random default banners + scheduled banners). **Titles are hardcoded localized text for stability.**
  - `Features`: Dynamic service features (managed via Admin).
  - `Destinations`: Grid of popular routes (fetched from Supabase).
  - `Reviews`: Customer reviews slider/grid (fetched from Supabase).
  - `About`: Dynamic content from DB.
  - `Footer`: Dynamic contact info (Phone, Line, QR Codes) fetched from DB.
    - **Logo**: Uses an Elephant emoji (🐘).

### 2. Backend / Admin (Private)
- **Path**: `/admin`
- **Authentication**:
  - **Login**: `/admin/login` (Secure, HttpOnly Cookie).
  - **Middleware**: Protects all `/admin/*` routes.
  - **Super Admin**: Only specific users can manage critical settings (users, logs).
- **Features Management**:
  - **Banners**: Upload, scheduling, and random rotation management. (Internal Note feature temporarily reverted).
  - **News**: Full CRUD for news/events with rich text and multi-language support.
  - **Routes**: CRUD for travel routes (multilingual titles/descriptions, images, PDF/Video links).
  - **Reviews**: CRUD for customer reviews (text + images) + Approval system.
  - **Navbar**: Manage top navigation links order and labels.
  - **Settings**: Manage global SEO title/description/keywords and social links.
  - **Contact**: Manage footer contact details.

### 3. Database Schema (Supabase)
Tables used:
- `banners`: `id`, `image_url`, `title` (legacy), `start_at`, `end_at`, `is_active`, `is_default`, `subtitle`, `cta_text`.
- `news_events`: `id`, `title`, `content`, `start_date`, `end_date`, `is_active` (plus language columns `_zh_tw`, `_zh_cn`, `_th`).
- `routes`: `id`, `title_*`, `description_*`, `image_url`, `pdf_link`, `video_link`.
- `customer_reviews`: `id`, `name`, `rating`, `content`, `image_url`, `date`.
- `site_settings` (in `general_content`): SEO, Navbar links, Contact info.
- `users`: Admin accounts.

## Recent Changes & Fixes (2026-02-12)
- **Environment**: Fixed `PowerShell Execution Policy` issue blocking `npm run dev` (Solution: `Set-ExecutionPolicy RemoteSigned`).
- **Admin Auth**: Implemented secure login flow and middleware protection.
- **Banners**: Reverted "Internal Note" feature due to instability. System is now stable using standard fields.
- **SEO**: Added `sitemap.xml`, `robots.txt`, and dynamic metadata generation.
- **Rate Limiting**: Configured global and API-specific rate limits.

## Pending Tasks (For Next Session)
1. **Banner Improvements**: Re-implement "Internal Note" safely (backend-only field).
2. **Review Submission**: Polish the frontend user review submission flow.
3. **Deployment**: Verify production deployment on Vercel after recent reverts.

---
*End of Status Report*
