# Project Walkthrough: Ah Xun Travel (Chiang Mai Charter)

## 🚀 Production Status
- **URL**: [https://ah-xun-travel.vercel.app](https://ah-xun-travel.vercel.app)
- **Repo**: Pushed to `main` branch.
- **Deployment**: Active and Verified.

## 🛠️ Recent Fixes
- **Build Warning**: Migrated `middleware.ts` to `proxy.ts` (Next.js 16 requirement) to resolve deprecation warning.
- **Google Analytics**: Fixed missing environment variable in local development.

## ✨ Features Implemented

### 1. Root Admin Privileges
- **Role**: Godotchen is the "Root Admin".
- **Capabilities**: Can create/delete Super Admins; other admins cannot delete Root Admin.

### 2. Maintenance Mode
- **Switch**: Toggle in **Admin > Settings**.
- **Effect**: Displays a "Under Maintenance" screen with contact email `godotchen@hotmail.com`.

### 3. Banner Internal Note (橫幅備註)
- **Feature**: Added an "Internal Note" field to banners.
- **UI**: Notes appear in a yellow box in the admin list for quick internal reference.

### 4. Manageable Navbar Links (導航管理)
- **Sort Order**: Admins can reorder links using the `sort_order` field.
- **Charter Notes**: Added a dedicated link for "包車須知" (Charter Notes).
- **Dynamic**: Navbar links are fetched from the database, allowing admin control.

### 5. Google Analytics & Dashboard
- **Integration**: GA4 connected via Measurement ID.
- **Dashboard**: "Visitors" card now displays **"Total Reviews"** (real data from DB).
- **Sidebar**: Reorganized into **Operational**, **Content**, and **System** sections.

### 6. SEO & Homepage Settings (New!)
- **Page**: **Admin > SEO Settings** (`/admin/seo`).
- **Capabilities**:
    - **Site Title/Desc**: Customize how the site appears in Google.
    - **Homepage Banner**: Edit the large Hero text directly.
    - **OG Image**: Custom social media sharing preview image.
- **Technical SEO**:
    - **Sitemap**: `/sitemap.xml` automatically includes all routes.
    - **Robots.txt**: configured to block admin pages.

## ✅ Verification Steps

### Test 1: SEO & Banner Editing
1. Go to **Admin > SEO Settings**.
2. Change the **Homepage Hero Title** (首頁看板主標題).
3. Save and wait ~60 seconds (ISR cache).
4. Refresh the homepage to see the text change.

### Test 2: Social Media Preview
1. Copy the website URL.
2. Paste it into LINE or Facebook Debugger.
3. Verify the "OG Image" (or the default Hero image) appears correctly.

### Test 3: Google Search Console
- **Status**: **Verified** (HTML Tag method).
- **Next Step**: User has submitted `sitemap.xml`.
- **Goal**: Wait for Google to index the pages for "清邁包車" keywords.

## 🔜 Next Steps for User
1. **Content Strategy**: Use the "News" section to write articles about "Chiang Mai Charter" to boost SEO.
2. **Monitor**: Check Google Search Console weekly for performance data.
3. **Social**: Share website links on FB/IG to drive initial traffic.
