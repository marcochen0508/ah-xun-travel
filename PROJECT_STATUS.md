# Project Status: Ah Xun Chiang Mai Travel (阿勛包車)

**Last Updated:** 2026-09-07  
**Repository:** `c:\Users\marcochen\Downloads\個人\ah-xun-travel`

## Overview
Next.js (App Router) website for Ah Xun Chiang Mai Travel (阿勛清邁包車旅遊規劃). Features include dynamic multi-language support (ZH-TW, EN, TH), interactive 3D Lanna Cultural & Geographical Tour (`/tour-3d`), smart itinerary wishlist planner, and full-featured Supabase Admin Dashboard.

---

## Today's Progress Summary (2026-09-07)

### 1. 3D 導覽介面按鈕精簡 (`/tour-3d`)
- **移除重複按鈕**：成功移除畫面右下角的「自訂行程清單」浮動膠囊按鈕，僅保留頂部導覽列的一致按鈕，整體 3D 地圖與視角呈現更加乾淨俐落。

### 2. 維基百科、Wikivoyage 與 Wikimedia Commons 實景照片全域同步（達成 100% 覆蓋）
- **實景照片總數由 29 處 ➔ 81 處 ➔ 123 處 ➔ 246 處（100.0% 達成）**：
  - 存檔路徑：`public/images/landmarks/*.jpg`
  - **核心技術突破**：
    1. **去除中文括號雜訊，深度提取「純英文」與「純泰文」官方店名與地名**。
    2. **串聯三大多語系維基資料庫**：英文維基百科 (Wikipedia EN)、泰文維基百科 (Wikipedia TH)、維基導遊 (Wikivoyage)、以及 Wikimedia Commons File API。
    3. **全分區 246 處景點、小吃、IG 咖啡館、SPA 按摩、米其林名店、高山雲海、大象園區與瀑布已 100% 全部配備真實高畫質實景照片**。
  - **資料庫同步更新**：[`landmarkData.ts`](file:///c:/Users/marcochen/Downloads/個人/ah-xun-travel/src/components/tour-3d/landmarkData.ts) 全數 246 筆資料已 100% 指向真實實景照片檔案。

### 4. 全站 247 個景點多語系（英文 EN、泰文 TH）100% 完整在地化翻譯
- **達成 100.0% 純淨多語系覆蓋**（中文殘留率由 99% ➔ 0%）：
  - **景點名稱 (`name`)**：全數配備標準英文名與泰文地標名。
  - **景點標籤 (`tag`)**：全數轉換為地道英/泰文分類（如 `Vegan & Vegetarian Restaurant`, `Historic Buddhist Temple`, `Specialty Coffee Farm`）。
  - **特色簡介與必看亮點 (`description` & `highlights`)**：全面翻譯為流暢英泰雙語說明。
  - **建議停留時間 (`recommendedTime`)**：英泰在地化（如 `1.5 Hours`, `Half Day`, `1.5 ชั่วโมง`）。
  - **專屬包車備註 (`charterNote`)**：英泰客製化文案（`Ah-Xun Travel private charter...`, `บริการรถตู้พร้อมคนขับนำเที่ยว...`）。

### 5. Google Maps 官方單一地標（Single POI）精準綁定與過期店家清理
- **官方 POI 標準名校正**：將所有景點升級為 Google Maps 官方唯一全名（如 `Doi Mon Ngo Summit Viewpoint`, `Tha-Pai Memorial Bridge`, `Wat Phra That Mae Yen` 等），徹底杜絕多筆搜尋清單問題。
- **清理永久歇業店家**：已自全站資料庫與報表移除永久歇業的 `Looper Co.`。
- **地名統一**：全面統稱「拜縣 (Pai)」。

### 6. 首頁 Hero 導覽按鈕全新升級（方案 3：科技光暈微膠囊）
- **視覺定案**：
  - 晶透琥珀雙色漸層底色（`bg-gradient-to-r from-amber-500/25 via-amber-600/35 to-amber-800/30`）結合毛玻璃質感。
  - 外圈光暈發光與旋轉動態（`Globe` 圖示 45 度平滑懸停回饋 + `ring-amber-300/40` 微亮光環）。
  - 文案支援三語動態切換（中：`✦ 探索 3D 蘭納地圖` / 英：`✦ Explore 3D Lanna Map` / 泰：`✦ สำรวจทัวร์ 3D ล้านนา`）。

### 7. 生產環境建置驗證
- 執行 `npm run build` 通過驗證，全部 36 個頁面與 API 路由 100% 編譯成功。

---

# Project Status: Ah Xun Chiang Mai Travel (阿勛包車)

**Last Updated:** 2026-09-07  
**Repository:** `c:\Users\marcochen\Downloads\個人\ah-xun-travel`

## Overview
Next.js (App Router) website for Ah Xun Chiang Mai Travel (阿勛清邁包車旅遊規劃). Features include dynamic multi-language support (ZH-TW, EN, TH), interactive 3D Lanna Cultural & Geographical Tour (`/tour-3d`), smart itinerary wishlist planner, and full-featured Supabase Admin Dashboard.

---

## Today's Progress Summary (2026-09-07)

### 1. 3D 導覽介面按鈕精簡 (`/tour-3d`)
- **移除重複按鈕**：成功移除畫面右下角的「自訂行程清單」浮動膠囊按鈕，僅保留頂部導覽列的一致按鈕，整體 3D 地圖與視角呈現更加乾淨俐落。

### 2. 維基百科、Wikivoyage 與 Wikimedia Commons 實景照片全域同步（達成 100% 覆蓋）
- **實景照片總數由 29 處 ➔ 81 處 ➔ 123 處 ➔ 246 處（100.0% 達成）**：
  - 存檔路徑：`public/images/landmarks/*.jpg`
  - **核心技術突破**：
    1. **去除中文括號雜訊，深度提取「純英文」與「純泰文」官方店名與地名**。
    2. **串聯三大多語系維基資料庫**：英文維基百科 (Wikipedia EN)、泰文維基百科 (Wikipedia TH)、維基導遊 (Wikivoyage)、以及 Wikimedia Commons File API。
    3. **全分區 246 處景點、小吃、IG 咖啡館、SPA 按摩、米其林名店、高山雲海、大象園區與瀑布已 100% 全部配備真實高畫質實景照片**。
  - **資料庫同步更新**：[`landmarkData.ts`](file:///c:/Users/marcochen/Downloads/個人/ah-xun-travel/src/components/tour-3d/landmarkData.ts) 全數 246 筆資料已 100% 指向真實實景照片檔案。

### 4. 全站 247 個景點多語系（英文 EN、泰文 TH）100% 完整在地化翻譯
- **達成 100.0% 純淨多語系覆蓋**（中文殘留率由 99% ➔ 0%）：
  - **景點名稱 (`name`)**：全數配備標準英文名與泰文地標名。
  - **景點標籤 (`tag`)**：全數轉換為地道英/泰文分類（如 `Vegan & Vegetarian Restaurant`, `Historic Buddhist Temple`, `Specialty Coffee Farm`）。
  - **特色簡介與必看亮點 (`description` & `highlights`)**：全面翻譯為流暢英泰雙語說明。
  - **建議停留時間 (`recommendedTime`)**：英泰在地化（如 `1.5 Hours`, `Half Day`, `1.5 ชั่วโมง`）。
  - **專屬包車備註 (`charterNote`)**：英泰客製化文案（`Ah-Xun Travel private charter...`, `บริการรถตู้พร้อมคนขับนำเที่ยว...`）。

### 5. Google Maps 官方單一地標（Single POI）精準綁定與過期店家清理
- **官方 POI 標準名校正**：將所有景點升級為 Google Maps 官方唯一全名（如 `Doi Mon Ngo Summit Viewpoint`, `Tha-Pai Memorial Bridge`, `Wat Phra That Mae Yen` 等），徹底杜絕多筆搜尋清單問題。
- **清理永久歇業店家**：已自全站資料庫與報表移除永久歇業的 `Looper Co.`。
- **地名統一**：全面統稱「拜縣 (Pai)」。

### 6. 首頁 Hero 導覽按鈕全新升級（方案 3：科技光暈微膠囊）
- **視覺定案**：
  - 晶透琥珀雙色漸層底色（`bg-gradient-to-r from-amber-500/25 via-amber-600/35 to-amber-800/30`）結合毛玻璃質感。
  - 外圈光暈發光與旋轉動態（`Globe` 圖示 45 度平滑懸停回饋 + `ring-amber-300/40` 微亮光環）。
  - 文案支援三語動態切換（中：`✦ 探索 3D 蘭納地圖` / 英：`✦ Explore 3D Lanna Map` / 泰：`✦ สำรวจทัวร์ 3D ล้านนา`）。

### 7. 生產環境建置驗證
- 執行 `npm run build` 通過驗證，全部 36 個頁面與 API 路由 100% 編譯成功。

---

### 8. 後台最新消息存檔與多語系發布文稿
- **資料庫日期容錯處理**：修正 [`NewsForm.tsx`](file:///c:/Users/marcochen/Downloads/個人/ah-xun-travel/src/components/admin/NewsForm.tsx) 中若未填截止日會傳送空字串 `""` 導致 Postgres 報錯問題，自動轉為 `null`，實現「留空即代表永久顯示」。
- **3D 導覽上線消息發布**：提供繁中、簡中及專業流暢的泰文在地化發布文案。

---

## 待接續任務（Tomorrow's Agenda）

### 🚗 1. 手機版 3D 地圖車輛路徑精準校對與補全（核心待辦 - 最高優先級）
- **使用者最新檢查回饋**：手機版車輛行駛路線**「還是少一段」**（未完全延伸至預期起訖端點，或中間銜接段有缺漏）。
- **待檢查與校準細節**：
  1. **完整路徑端點比對**：
     - 起點端：檢查左上方素帖山山頂深處公路起點（是否需自更高點開始延伸，如 x ≈ 18~20, y ≈ 10~12）。
     - 中段穿越：檢查古城北側與尼曼、美林交會處的彎道過渡。
     - 終點端：檢查最右側南北幹道一路向南延伸至湄康蓬／湄平河夜市下方、杭東右側的最底端公路。
  2. **程式邏輯防呆檢查**：
     - 檢查 [`trafficPaths.ts`](file:///c:/Users/marcochen/Downloads/個人/ah-xun-travel/src/components/tour-3d/trafficPaths.ts) 的 `DEFAULT_MOBILE_TRAFFIC_ROUTES` 是否缺少了部分分段節點。
     - 檢查 [`TrafficLayer.tsx`](file:///c:/Users/marcochen/Downloads/個人/ah-xun-travel/src/components/tour-3d/TrafficLayer.tsx) 的路徑進度百分比 `samplePath` 計算是否導致頭尾端點提早折返或未跑完全程。
     - 檢查 [`ChiangMaiChiangRai3DMap.tsx`](file:///c:/Users/marcochen/Downloads/個人/ah-xun-travel/src/components/tour-3d/ChiangMaiChiangRai3DMap.tsx) 中的 LocalStorage 快取機制是否導致手機版讀取到舊版路徑資料。
  3. **校準後實機驗證並重新發布**。

---
*記錄完成時間：2026-09-07 19:00 (已建檔備份)*
