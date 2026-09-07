'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Landmark, LANDMARKS, DISTRICTS, Language } from './landmarkData';
import { fetchLiveWeather, getDistrictWeatherKey, LiveWeatherData } from './weatherService';
import WeatherModal from './WeatherModal';
import {
  Compass,
  MapPin,
  ArrowLeft,
  X,
  Sparkles,
  Clock,
  Info,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronRight,
  Globe,
  Award,
  Search,
  Gift,
  Check,
  ExternalLink,
  Plus,
  Trash2,
  Route,
  Navigation,
  ArrowUp,
  ArrowDown,
  Shuffle,
  Map as MapIcon,
  ListOrdered,
  Camera,
} from 'lucide-react';

interface TourUIOverlayProps {
  language: Language;
  selectedRegionId: 'all' | 'chiang-mai' | 'chiang-rai';
  selectedDistrictId: string | null;
  selectedCategoryId: string | null;
  selectedLandmark: Landmark | null;
  collectedStamps: string[];
  onLanguageChange: (lang: Language) => void;
  onRegionChange: (regionId: 'all' | 'chiang-mai' | 'chiang-rai') => void;
  onDistrictChange: (districtId: string | null) => void;
  onCategoryChange: (categoryId: string | null) => void;
  onSelectLandmark: (landmark: Landmark | null) => void;
  onCollectStamp: (landmarkId: string) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetView: () => void;
}

// Approximate Geographic Coordinates for smart routing
const DISTRICT_GEO_COORDS: Record<string, { lat: number; lng: number }> = {
  'old-city-district': { lat: 18.7883, lng: 98.9853 },
  'south-city-district': { lat: 18.7750, lng: 98.9820 },
  'nimman-district': { lat: 18.7960, lng: 98.9680 },
  'doi-suthep-district': { lat: 18.8049, lng: 98.9216 },
  'night-bazaar-district': { lat: 18.7880, lng: 99.0010 },
  'mae-rim-district': { lat: 18.9600, lng: 98.9400 },
  'hang-dong-district': { lat: 18.6800, lng: 98.9000 },
  'mae-kampong-district': { lat: 18.8650, lng: 99.3500 },
  'doi-inthanon-district': { lat: 18.5880, lng: 98.4870 },
  'chiang-rai-city-district': { lat: 19.9100, lng: 99.8400 },
  'tea-mountain-district': { lat: 20.2500, lng: 99.9500 },
};

// Specific Micro-Coordinates for key landmarks to enable precise intra-district sorting
const SPECIFIC_LANDMARK_COORDS: Record<string, { lat: number; lng: number }> = {
  // Old city landmarks
  'aum-vegetarian-restaurant-老字號木-5': { lat: 18.7865, lng: 98.9870 },
  '帕邢寺-wat-phra-singh-15': { lat: 18.7885, lng: 98.9814 },
  '契迪龍寺-wat-chedi-luang-14': { lat: 18.7870, lng: 98.9865 },
  '清曼寺-wat-chiang-man-16': { lat: 18.7938, lng: 98.9892 },
  '塔佩門-tha-phae-gate-13': { lat: 18.7877, lng: 98.9931 },
  '布帕蘭寺-wat-buppharam-泰-17': { lat: 18.7882, lng: 98.9972 },
  '布帕蘭寺-wat-buppharam-泰囧寺-19': { lat: 18.7882, lng: 98.9972 },
  '羅摩利寺-wat-lok-moli-18': { lat: 18.7962, lng: 98.9825 },
  '盼道寺-wat-phan-tao-17': { lat: 18.7875, lng: 98.9875 },
  '盼道寺-wat-phan-tao-19': { lat: 18.7875, lng: 98.9875 },
  '三王紀念碑-three-kings-mon-20': { lat: 18.7902, lng: 98.9874 },
  '三王紀念碑-three-kings-monument-20': { lat: 18.7902, lng: 98.9874 },
  '蘭納民俗博物館-lanna-folklife-museum-21': { lat: 18.7899, lng: 98.9880 },
  '鳳飛飛豬腳飯-chang-phueak-23': { lat: 18.7955, lng: 98.9865 },
  'munasare-organic-vegan-cafe-4': { lat: 18.7895, lng: 98.9935 },
  'rad-rabbit-vegan-pizzeria-1': { lat: 18.7925, lng: 98.9915 },
  'kao-soy-vegan-古城純素咖哩麵-2': { lat: 18.7905, lng: 98.9880 },
  'morning-glory-vegan-cafe-3': { lat: 18.7820, lng: 98.9875 },
  'sp-chicken-古城平價烤雞-21': { lat: 18.7880, lng: 98.9818 },
  'kiat-ocha-榮吉海南雞飯-24': { lat: 18.7898, lng: 98.9878 },
  'baan-phor-liang-meun-34': { lat: 18.7836, lng: 98.9868 },
};

const getLandmarkGeo = (l: Landmark) => {
  if (SPECIFIC_LANDMARK_COORDS[l.id]) {
    return SPECIFIC_LANDMARK_COORDS[l.id];
  }
  const base = DISTRICT_GEO_COORDS[l.districtId] || { lat: 18.7883, lng: 98.9853 };
  const posX = l.position ? (l.position[0] || 0) : 0;
  const posZ = l.position ? (l.position[2] || 0) : 0;

  let microLat = 0;
  let microLng = 0;
  if (posX === 0 && posZ === 0) {
    let hash = 0;
    for (let i = 0; i < l.id.length; i++) {
      hash = (hash << 5) - hash + l.id.charCodeAt(i);
      hash |= 0;
    }
    microLat = ((Math.abs(hash) % 100) / 100 - 0.5) * 0.006;
    microLng = (((Math.abs(hash) >> 3) % 100) / 100 - 0.5) * 0.006;
  }

  return {
    lat: base.lat - posZ * 0.002 + microLat,
    lng: base.lng + posX * 0.002 + microLng,
  };
};

const getGoogleMapsSearchUrl = (landmark: Landmark, lang: Language = 'zh-TW') => {
  if (landmark.googleMapsUrl) {
    return landmark.googleMapsUrl;
  }
  if (landmark.googleMapsQuery) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(landmark.googleMapsQuery)}`;
  }
  const rawName = landmark.name[lang] || landmark.name['en'] || landmark.name['zh-TW'];
  
  // Extract English/Romanized name from parentheses e.g. "拜縣美音寺大佛 (Wat Phra That Mae Yen)" -> "Wat Phra That Mae Yen"
  const parenMatch = rawName.match(/\(([^)]+)\)/);
  let bestName = '';
  if (parenMatch && parenMatch[1]) {
    const parts = parenMatch[1].split(/[\/,]/);
    for (const p of parts) {
      const trimmed = p.trim();
      if (/[a-zA-Z]/.test(trimmed)) {
        bestName = trimmed;
        break;
      }
    }
  }
  if (!bestName) {
    const prefixMatch = rawName.match(/^([a-zA-Z0-9\s'&.-]+)/);
    if (prefixMatch && prefixMatch[1].trim().length > 2) {
      bestName = prefixMatch[1].trim();
    } else {
      bestName = rawName.replace(/\([^)]*\)/g, '').trim() || rawName;
    }
  }

  // Determine correct region/district hint without conflicting cross-province names
  let districtHint = 'Chiang Mai, Thailand';
  const idOrName = (landmark.id + ' ' + rawName).toLowerCase();
  
  if (idOrName.includes('pai') || idOrName.includes('拜縣') || idOrName.includes('拜縣')) {
    districtHint = 'Pai, Mae Hong Son';
  } else if (idOrName.includes('lampang') || idOrName.includes('南邦')) {
    districtHint = 'Lampang';
  } else if (idOrName.includes('lamphun') || idOrName.includes('南奔')) {
    districtHint = 'Lamphun';
  } else if (landmark.districtId === 'mae-kampong-district') {
    districtHint = 'Mae Kampong Chiang Mai';
  } else if (landmark.districtId === 'mae-rim-district') {
    districtHint = 'Mae Rim Chiang Mai';
  } else if (landmark.districtId === 'hang-dong-district') {
    districtHint = 'Hang Dong Chiang Mai';
  } else if (landmark.districtId === 'doi-inthanon-district') {
    districtHint = 'Doi Inthanon Chiang Mai';
  } else if (landmark.districtId === 'tea-mountain-district') {
    districtHint = 'Chiang Rai';
  } else if (landmark.regionId === 'chiang-rai') {
    districtHint = 'Chiang Rai';
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${bestName}, ${districtHint}`)}`;
};

export default function TourUIOverlay({
  language,
  selectedRegionId,
  selectedDistrictId,
  selectedCategoryId,
  selectedLandmark,
  collectedStamps,
  onLanguageChange,
  onRegionChange,
  onDistrictChange,
  onCategoryChange,
  onSelectLandmark,
  onCollectStamp,
  onZoomIn,
  onZoomOut,
  onResetView,
}: TourUIOverlayProps) {
  const [showPassportModal, setShowPassportModal] = useState(false);
  const [showWeatherModal, setShowWeatherModal] = useState(false);
  const [showItineraryModal, setShowItineraryModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [mobileListOpen, setMobileListOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [headerWeather, setHeaderWeather] = useState<LiveWeatherData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Automatically clear search input whenever the user changes district, region, or category
  useEffect(() => {
    setSearchQuery('');
  }, [selectedDistrictId, selectedRegionId, selectedCategoryId]);

  // Initialize wishlist from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ah_xun_tour_wishlist');
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save wishlist to localStorage
  const saveWishlist = (newList: string[]) => {
    setWishlist(newList);
    try {
      localStorage.setItem('ah_xun_tour_wishlist', JSON.stringify(newList));
    } catch {
      // ignore
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  // Toggle wishlist item
  const toggleWishlist = (landmarkId: string) => {
    if (wishlist.includes(landmarkId)) {
      const updated = wishlist.filter((id) => id !== landmarkId);
      saveWishlist(updated);
      showToast(language === 'en' ? 'Removed from itinerary' : language === 'th' ? 'นำออกจากแผนการเดินทางแล้ว' : '已從行程心願單移除 ✕');
    } else {
      const updated = [...wishlist, landmarkId];
      saveWishlist(updated);
      showToast(language === 'en' ? 'Added to itinerary! ✦' : language === 'th' ? 'เพิ่มลงในแผนการเดินทางแล้ว! ✦' : '已成功加入行程心願單！✦');
    }
  };

  // Remove single item
  const removeFromWishlist = (landmarkId: string) => {
    const updated = wishlist.filter((id) => id !== landmarkId);
    saveWishlist(updated);
  };

  // Clear wishlist
  const clearWishlist = () => {
    if (confirm(language === 'en' ? 'Clear all items in your itinerary?' : language === 'th' ? 'ล้างสถานที่ทั้งหมดในแผนการเดินทาง?' : '確定要清空所有已選行程景點嗎？')) {
      saveWishlist([]);
      showToast(language === 'en' ? 'Itinerary cleared' : '已清空自訂行程');
    }
  };

  // Move item up / down
  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newIdx = direction === 'up' ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= wishlist.length) return;
    const next = [...wishlist];
    const temp = next[index];
    next[index] = next[newIdx];
    next[newIdx] = temp;
    saveWishlist(next);
  };

  // Smart Route Optimization (South-to-North, North-to-South, or Shortest Distance TSP)
  const optimizeRoute = (manualMode?: 'auto' | 'south-to-north' | 'north-to-south' | 'reverse') => {
    if (wishlist.length <= 1) return;

    if (manualMode === 'reverse') {
      const reversed = [...wishlist].reverse();
      saveWishlist(reversed);
      showToast('🔄 已反轉行程路線順序！');
      return;
    }

    const spots = wishlist
      .map((id) => LANDMARKS.find((l) => l.id === id))
      .filter(Boolean) as Landmark[];

    if (spots.length <= 1) return;

    // Center point of Chiang Mai Old City / Nimman (Latitude 18.796, Longitude 98.968)
    const cityCenter = { lat: 18.796, lng: 98.968 };

    // Calculate geo coordinates for all spots
    const geoList = spots.map((s) => ({
      landmark: s,
      ...getLandmarkGeo(s),
    }));

    let sortedIds: string[] = [];

    if (manualMode === 'south-to-north') {
      // Force South -> North (Latitude Ascending: lowest lat to highest lat)
      sortedIds = [...geoList].sort((a, b) => {
        const diff = a.lat - b.lat;
        if (Math.abs(diff) > 0.000001) return diff;
        const lngDiff = a.lng - b.lng;
        if (Math.abs(lngDiff) > 0.000001) return lngDiff;
        return a.landmark.id.localeCompare(b.landmark.id);
      }).map((g) => g.landmark.id);
      showToast('⬆️ 已依「由南往北」順路排序！');
    } else if (manualMode === 'north-to-south') {
      // Force North -> South (Latitude Descending: highest lat to lowest lat)
      sortedIds = [...geoList].sort((a, b) => {
        const diff = b.lat - a.lat;
        if (Math.abs(diff) > 0.000001) return diff;
        const lngDiff = b.lng - a.lng;
        if (Math.abs(lngDiff) > 0.000001) return lngDiff;
        return b.landmark.id.localeCompare(a.landmark.id);
      }).map((g) => g.landmark.id);
      showToast('⬇️ 已依「由北往南」順路排序！');
    } else {
      // Auto Smart Judgment:
      // Count spots north of city center vs south of city center
      const northSpots = geoList.filter((g) => g.lat > cityCenter.lat + 0.005);
      const southSpots = geoList.filter((g) => g.lat < cityCenter.lat - 0.005);
      const avgLat = geoList.reduce((sum, g) => sum + g.lat, 0) / geoList.length;

      if (northSpots.length > southSpots.length || avgLat > 18.82) {
        // Heading North (e.g. Mae Rim, Mae Taeng, Chiang Rai): Sort South to North
        sortedIds = [...geoList].sort((a, b) => {
          const diff = a.lat - b.lat;
          if (Math.abs(diff) > 0.000001) return diff;
          return a.landmark.id.localeCompare(b.landmark.id);
        }).map((g) => g.landmark.id);
        showToast('⚡ 自動判斷為向北行程：已按「由南往北」一路順行！');
      } else if (southSpots.length > northSpots.length || avgLat < 18.78) {
        // Heading South (e.g. Hang Dong, Mae Wang, Doi Inthanon): Sort North to South
        sortedIds = [...geoList].sort((a, b) => {
          const diff = b.lat - a.lat;
          if (Math.abs(diff) > 0.000001) return diff;
          return b.landmark.id.localeCompare(a.landmark.id);
        }).map((g) => g.landmark.id);
        showToast('⚡ 自動判斷為向南行程：已按「由北往南」一路順行！');
      } else {
        // East-West or Central cluster: Nearest Neighbor TSP starting from Chiang Mai Center
        let currentPos = cityCenter;
        const unvisited = [...geoList];
        const result: Landmark[] = [];

        while (unvisited.length > 0) {
          let bestIdx = 0;
          let bestDist = Infinity;

          for (let i = 0; i < unvisited.length; i++) {
            const dLat = unvisited[i].lat - currentPos.lat;
            const dLng = unvisited[i].lng - currentPos.lng;
            const dist = dLat * dLat + dLng * dLng;
            if (dist < bestDist) {
              bestDist = dist;
              bestIdx = i;
            }
          }

          const nextStop = unvisited.splice(bestIdx, 1)[0];
          result.push(nextStop.landmark);
          currentPos = { lat: nextStop.lat, lng: nextStop.lng };
        }

        sortedIds = result.map((r) => r.id);
        showToast('⚡ 已依起點與各景點最短路程智慧排列！');
      }
    }

    saveWishlist(sortedIds);
  };

  // Export to Google Maps Navigation (Multi-stop)
  const exportToGoogleMaps = () => {
    if (wishlist.length === 0) return;

    const spots = wishlist
      .map((id) => LANDMARKS.find((l) => l.id === id))
      .filter(Boolean) as Landmark[];

    if (spots.length === 0) return;

    const getCleanSpotQuery = (s: Landmark) => {
      if (s.googleMapsQuery) return s.googleMapsQuery;
      const raw = s.name[language] || s.name['en'] || s.name['zh-TW'];
      const clean = raw.replace(/\([^)]*\)/g, '').trim() || raw;
      const region = s.regionId === 'chiang-rai' ? 'Chiang Rai, Thailand' : 'Chiang Mai, Thailand';
      return `${clean} ${region}`;
    };

    if (spots.length === 1) {
      window.open(getGoogleMapsSearchUrl(spots[0], language), '_blank');
      return;
    }

    const spotQueries = spots.map(getCleanSpotQuery);
    const origin = spotQueries[0];
    const destination = spotQueries[spotQueries.length - 1];
    const waypoints = spotQueries.slice(1, -1);

    let url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
    if (waypoints.length > 0) {
      url += `&waypoints=${encodeURIComponent(waypoints.join('|'))}`;
    }

    window.open(url, '_blank');
  };

  // Fetch live weather when district changes
  useEffect(() => {
    const stationKey = getDistrictWeatherKey(selectedDistrictId);
    fetchLiveWeather(stationKey).then((data) => {
      setHeaderWeather(data);
    });
  }, [selectedDistrictId]);

  // Get distinct categories available in current district / region
  const availableCategoryIds = new Set(
    LANDMARKS.filter((l) => {
      if (selectedRegionId !== 'all' && l.regionId !== selectedRegionId) return false;
      if (selectedDistrictId && l.districtId !== selectedDistrictId) return false;
      return true;
    }).map((l) => l.category)
  );

  // If selected category does not exist in current district, automatically reset to all
  useEffect(() => {
    if (selectedCategoryId && !availableCategoryIds.has(selectedCategoryId as any)) {
      onCategoryChange(null);
    }
  }, [selectedDistrictId, selectedCategoryId]);

  // Filter landmarks strictly by region, district, category, and search query
  const filteredLandmarks = LANDMARKS.filter((l) => {
    if (selectedRegionId !== 'all' && l.regionId !== selectedRegionId) return false;
    if (selectedDistrictId && l.districtId !== selectedDistrictId) return false;
    if (selectedCategoryId && l.category !== selectedCategoryId) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const nameZh = (l.name['zh-TW'] || '').toLowerCase();
      const nameEn = (l.name['en'] || '').toLowerCase();
      const nameTh = (l.name['th'] || '').toLowerCase();
      const tagZh = (l.tag['zh-TW'] || '').toLowerCase();
      const tagEn = (l.tag['en'] || '').toLowerCase();
      const descZh = (l.description['zh-TW'] || '').toLowerCase();
      const descEn = (l.description['en'] || '').toLowerCase();
      return (
        nameZh.includes(q) ||
        nameEn.includes(q) ||
        nameTh.includes(q) ||
        tagZh.includes(q) ||
        tagEn.includes(q) ||
        descZh.includes(q) ||
        descEn.includes(q)
      );
    }
    return true;
  });

  // District-specific customized category priorities based on travel highlights
  const DISTRICT_CATEGORY_PRIORITIES: Record<string, string[]> = {
    // 古城文化區：寺廟古蹟為首、道地美食次之、市集夜市接續
    'old-city-district': ['temple', 'food', 'market', 'night-market', 'cafe', 'spa', 'experience', 'shopping'],

    // 尼曼潮流區：購物商場為首、網美咖啡與潮流美食並重
    'nimman-district': ['shopping', 'cafe', 'food', 'night-market', 'market', 'experience', 'spa'],

    // 素帖山聖區：神聖古寺為首、自然景觀與高山咖啡
    'doi-suthep-district': ['temple', 'nature', 'cafe', 'experience', 'food'],

    // 湄平河與夜市：傳統百年大市場為首、觀光夜市與河畔美食咖啡
    'night-bazaar-district': ['market', 'night-market', 'food', 'cafe', 'spa', 'experience', 'shopping'],

    // 北郊梅林美登：高山自然景觀為首、叢林滑索大象戶外體驗、網美景觀咖啡
    'mae-rim-district': ['nature', 'experience', 'cafe', 'temple', 'food'],

    // 南郊杭東美王：竹筏漂流與手作體驗為首、田園咖啡、木雕購物
    'hang-dong-district': ['experience', 'cafe', 'nature', 'shopping', 'food', 'temple'],

    // 東郊湄康蓬：古村溫泉自然景觀為首、大樹景觀咖啡、紙傘文創
    'mae-kampong-district': ['nature', 'cafe', 'experience', 'market', 'food'],

    // 因他儂山：高山雲海與瀑布步道為首、國王王后雙塔寺廟、部落體驗
    'doi-inthanon-district': ['nature', 'temple', 'experience', 'food'],

    // 古城南區：純銀寺廟為首、週六瓦萊夜市與傳統早市、手工銀器
    'south-city-district': ['temple', 'night-market', 'market', 'shopping', 'food', 'spa'],

    // 清萊市區：白廟藍廟黑屋藝術寺廟為首、清萊夜市、道地美食
    'chiang-rai-city-district': ['temple', 'night-market', 'food', 'cafe', 'nature'],

    // 茶園金三角：高山茶園雲海自然為首、景觀咖啡、邊境歷史體驗
    'tea-mountain-district': ['nature', 'cafe', 'experience', 'temple', 'food'],
  };

  const allCategoryDefs = [
    { id: null, label: { 'zh-TW': '全部景點', 'en': 'All', 'th': 'ทั้งหมด' } },
    { id: 'temple', label: { 'zh-TW': '🏛️ 寺廟古蹟', 'en': '🏛️ Temples', 'th': '🏛️ วัด' } },
    { id: 'shopping', label: { 'zh-TW': '🛍️ 購物商場', 'en': '🛍️ Shopping Mall', 'th': '🛍️ ห้างสรรพสินค้า' } },
    { id: 'cafe', label: { 'zh-TW': '☕ 網美咖啡', 'en': '☕ IG Cafes', 'th': '☕ คาเฟ่' } },
    { id: 'food', label: { 'zh-TW': '🍜 美食名店', 'en': '🍜 Cuisine', 'th': '🍜 อาหาร' } },
    { id: 'nature', label: { 'zh-TW': '🌿 自然景觀', 'en': '🌿 Nature', 'th': '🌿 ธรรมชาติ' } },
    { id: 'experience', label: { 'zh-TW': '✨ 特色體驗', 'en': '✨ Activities', 'th': '✨ กิจกรรม' } },
    { id: 'night-market', label: { 'zh-TW': '🏮 觀光夜市', 'en': '🏮 Night Market', 'th': '🏮 ตลาดกลางคืน' } },
    { id: 'market', label: { 'zh-TW': '🧺 傳統市集', 'en': '🧺 Traditional Market', 'th': '🧺 ตลาดสด/ตลาดเช้า' } },
    { id: 'spa', label: { 'zh-TW': '💆 泰式按摩', 'en': '💆 Massage', 'th': '💆 นวด' } },
  ];

  // Dynamically sort category chips based on the selected district's main travel theme
  const priorityList = selectedDistrictId ? DISTRICT_CATEGORY_PRIORITIES[selectedDistrictId] || [] : [];

  const availableCategories = allCategoryDefs.filter(
    (cat) => cat.id === null || availableCategoryIds.has(cat.id as any)
  );

  const categories = [
    availableCategories[0], // Always "All" first
    ...availableCategories.slice(1).sort((a, b) => {
      const idxA = a.id ? priorityList.indexOf(a.id) : -1;
      const idxB = b.id ? priorityList.indexOf(b.id) : -1;
      const rankA = idxA !== -1 ? idxA : 999;
      const rankB = idxB !== -1 ? idxB : 999;
      return rankA - rankB;
    }),
  ];

  const handleStampClick = (landmarkId: string) => {
    onCollectStamp(landmarkId);
    showToast(language === 'en' ? 'Stamp unlocked! 💮' : '恭喜獲得專屬印章！💮');
  };

  const selectedDistrictName = DISTRICTS.find((d) => d.id === selectedDistrictId)?.name[language] || null;

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-3 sm:p-5 overflow-hidden font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-[#3B2D26] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 border border-lanna-gold animate-in fade-in slide-in-from-top-4 duration-300">
          <Sparkles className="w-4 h-4 text-lanna-gold" /> {toastMessage}
        </div>
      )}

      {/* TOP HEADER - SLEEK & COMPACT SINGLE ROW ON ALL SCREENS */}
      <header className="pointer-events-auto bg-lanna-cream/95 backdrop-blur-md border border-lanna-gold/40 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-md flex items-center justify-between gap-2 sm:gap-3">
        {/* Left: Brand Logo matching Ah Xun Travel Navbar */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white hover:bg-lanna-cream text-lanna-coffee transition text-xs font-bold border border-lanna-gold/30 shadow-sm shrink-0"
            title="返回官網"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-lanna-gold shrink-0" />
            <span className="hidden sm:inline">
              {language === 'en' ? 'Home' : language === 'th' ? 'กลับหน้าแรก' : '官網'}
            </span>
          </Link>
          
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
            <span className="text-xl sm:text-2xl">🐘</span>
            <div className="flex flex-col">
              <span className="tracking-widest font-serif text-sm sm:text-base font-bold text-lanna-coffee leading-tight group-hover:text-lanna-gold transition">
                阿勛
              </span>
              <span className="text-[9px] sm:text-[10px] font-normal tracking-wider text-lanna-coffee/80 hidden xs:inline">
                清邁包車
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            <div className="h-5 w-px bg-lanna-gold/20" />
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-lanna-gold/15 text-lanna-coffee font-serif font-bold border border-lanna-gold/40">
              🗺️ 3D 泰北雙城導覽
            </span>
          </div>
        </div>

        {/* Right Side: Itinerary, Weather, Passport & Language Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-2 justify-end shrink-0">
          {/* Custom Itinerary Capsule Button */}
          <button
            onClick={() => setShowItineraryModal(true)}
            className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white border border-amber-300/40 text-xs sm:text-sm font-bold font-serif transition-all shadow-md hover:shadow-lg active:scale-95 shrink-0"
            title="查看我的自訂行程心願單"
          >
            <Route className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-100 shrink-0" />
            <span className="hidden sm:inline">
              {language === 'en' ? 'Itinerary' : language === 'th' ? 'แผนการเดินทาง' : '心願單'}
            </span>
            <span className="bg-white text-amber-900 px-1.5 sm:px-2 py-0.2 rounded-full text-[11px] sm:text-xs font-black shadow-inner">
              {wishlist.length}
            </span>
          </button>

          {/* Live Weather Pill Badge */}
          <button
            onClick={() => setShowWeatherModal(true)}
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-xl bg-white hover:bg-lanna-cream text-lanna-coffee border border-lanna-gold/40 text-xs font-bold transition shadow-sm group active:scale-95 shrink-0"
            title={language === 'en' ? 'Live Meteorological & Air Quality Data' : language === 'th' ? 'สภาพอากาศและมลพิษทางอากาศสด' : '即時天氣與空氣品質 (點擊查看詳情)'}
          >
            {headerWeather ? (
              <>
                <span className="text-sm sm:text-base leading-none drop-shadow-sm shrink-0">{headerWeather.current.weatherIcon}</span>
                <span className="text-lanna-coffee font-black text-xs sm:text-sm">{headerWeather.current.temperature}°C</span>
                <span className="hidden lg:inline text-lanna-gold font-normal">|</span>
                <span className="hidden lg:inline text-lanna-coffee font-semibold">{headerWeather.locationName[language]}</span>
                <span
                  className="hidden md:inline px-1.5 py-0.5 rounded text-[10px] font-black border"
                  style={{
                    backgroundColor: headerWeather.airQuality.aqiColor + '20',
                    color: headerWeather.airQuality.aqiColor,
                    borderColor: headerWeather.airQuality.aqiColor + '60',
                  }}
                >
                  AQI {headerWeather.airQuality.aqi} {headerWeather.airQuality.aqiLevel[language]}
                </span>
              </>
            ) : (
              <span className="text-[11px] text-lanna-coffee/70">⛅ 天氣</span>
            )}
          </button>

          {/* Passport Stamp Button */}
          <button
            onClick={() => setShowPassportModal(true)}
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3.5 py-1.5 rounded-xl bg-white hover:bg-lanna-cream text-lanna-coffee border border-lanna-gold/40 text-xs sm:text-sm font-bold transition shadow-sm shrink-0"
            title="泰北旅行護照集章"
          >
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-lanna-gold shrink-0" />
            <span className="hidden sm:inline">
              {language === 'en' ? 'Passport' : language === 'th' ? 'พาสปอร์ต' : '護照'}
            </span>
            <span className="bg-lanna-gold text-white px-1.5 sm:px-2 py-0.2 rounded-full text-[10px] sm:text-xs font-bold">
              {collectedStamps.length}
            </span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-white p-0.5 sm:p-1 rounded-xl border border-lanna-gold/30 text-xs sm:text-sm font-semibold text-lanna-coffee shadow-sm shrink-0">
            <button
              onClick={() => onLanguageChange(language === 'zh-TW' ? 'en' : language === 'en' ? 'th' : 'zh-TW')}
              className="sm:hidden px-2 py-1 rounded-lg bg-lanna-gold text-white font-bold text-xs"
              title="切換語系"
            >
              {language === 'zh-TW' ? '繁中' : language === 'en' ? 'EN' : 'ไทย'}
            </button>
            <div className="hidden sm:flex items-center">
              <Globe className="w-4 h-4 text-lanna-gold ml-1.5 mr-1" />
              <button
                onClick={() => onLanguageChange('zh-TW')}
                className={`px-2 py-0.5 rounded-lg transition text-xs ${language === 'zh-TW' ? 'bg-lanna-gold text-white font-bold shadow-sm' : 'text-lanna-coffee hover:bg-lanna-cream'}`}
              >
                繁中
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded-lg transition text-xs ${language === 'en' ? 'bg-lanna-gold text-white font-bold shadow-sm' : 'text-lanna-coffee hover:bg-lanna-cream'}`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('th')}
                className={`px-2 py-0.5 rounded-lg transition text-xs ${language === 'th' ? 'bg-lanna-gold text-white font-bold shadow-sm' : 'text-lanna-coffee hover:bg-lanna-cream'}`}
              >
                ไทย
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* DESKTOP MASTER-DETAIL SPLIT PANEL (LEFT SIDE - HIDDEN ON MOBILE) */}
      <aside className="pointer-events-auto absolute left-4 sm:left-6 top-20 sm:top-22 bottom-6 z-30 hidden md:flex items-stretch gap-4 max-w-[calc(100vw-2rem)]">
        {/* COLUMN 1: LANDMARK LIST (STRICTLY FILTERED BY DISTRICT) */}
        <div className="w-88 sm:w-[420px] lg:w-[460px] bg-white/95 backdrop-blur-xl border border-lanna-gold/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col shrink-0">
          <div className="p-4 bg-lanna-cream/90 border-b border-lanna-gold/20 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-base font-bold font-serif text-lanna-coffee flex items-center gap-2 truncate">
                <MapPin className="w-5 h-5 text-lanna-gold shrink-0" />
                <span className="truncate">{selectedDistrictName ? `${selectedDistrictName}` : '景點總清單'}</span>
                <span className="text-xs bg-white border border-lanna-gold/30 text-lanna-coffee px-2.5 py-0.5 rounded-full font-bold shrink-0">
                  {filteredLandmarks.length} 處
                </span>
              </span>
              {selectedDistrictId && (
                <button
                  onClick={() => {
                    onDistrictChange(null);
                    onRegionChange('all');
                    onSelectLandmark(null);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white border border-amber-300/40 text-xs font-bold font-serif transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 active:scale-95 shrink-0 group whitespace-nowrap"
                  title="返回雙城總覽"
                >
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                  <span>
                    {language === 'en'
                      ? 'Back to Overview'
                      : language === 'th'
                      ? 'กลับสู่ภาพรวม'
                      : '返回雙城總覽'}
                  </span>
                </button>
              )}
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-lanna-coffee/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search attractions, cuisine, cafe...' : language === 'th' ? 'ค้นหาสถานที่ ท่องเที่ยว...' : '搜尋古蹟、米其林美食、SPA按摩...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-white border border-lanna-gold/30 rounded-xl text-sm text-lanna-coffee placeholder:text-lanna-coffee/40 focus:outline-none focus:border-lanna-gold focus:ring-1 focus:ring-lanna-gold shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-stone-400 hover:text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors"
                  title="清除搜尋"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const isSelected = selectedCategoryId === cat.id;
                return (
                  <button
                    key={cat.id || 'all'}
                    onClick={() => onCategoryChange(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 border ${
                      isSelected
                        ? 'bg-lanna-gold text-white border-lanna-gold shadow-sm'
                        : 'bg-white text-lanna-coffee hover:bg-lanna-cream border-lanna-gold/20'
                    }`}
                  >
                    {cat.label[language] || cat.label['zh-TW']}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Landmarks List Items */}
          <div className="p-3.5 overflow-y-auto space-y-3 flex-1 scrollbar-thin bg-lanna-cream/20">
            {filteredLandmarks.map((landmark) => {
              const isSelected = selectedLandmark?.id === landmark.id;
              const isStamped = collectedStamps.includes(landmark.id);
              const isInWishlist = wishlist.includes(landmark.id);
              const landmarkName = landmark.name[language] || landmark.name['zh-TW'];
              const tagText = landmark.tag[language] || landmark.tag['zh-TW'];

              return (
                <button
                  key={landmark.id}
                  onClick={() => onSelectLandmark(landmark)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all group flex items-center gap-3.5 ${
                    isSelected
                      ? 'bg-lanna-cream border-lanna-gold shadow-md ring-2 ring-lanna-gold/30'
                      : 'bg-white hover:bg-lanna-cream/60 border-lanna-gold/20 shadow-sm'
                  }`}
                >
                  {/* Thumbnail / Stamp Avatar */}
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-lanna-gold/20 bg-lanna-cream">
                    <Image src={landmark.image} alt={landmarkName} fill className="object-cover" />
                    {isStamped && (
                      <span className="absolute top-1 right-1 bg-lanna-gold text-white text-[10px] px-1.5 py-0.2 rounded-full shadow font-black">
                        💮
                      </span>
                    )}
                  </div>
                  
                  {/* Name and Tag */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-lanna-coffee bg-lanna-cream px-2.5 py-0.5 rounded-md inline-block border border-lanna-gold/30">
                        {tagText}
                      </span>
                      {isInWishlist && (
                        <span className="text-[10px] bg-amber-100 text-amber-900 border border-amber-300 font-bold px-1.5 py-0.2 rounded-md flex items-center gap-0.5">
                          ✓ 已在行程
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base font-serif font-bold text-lanna-coffee leading-snug line-clamp-2">{landmarkName}</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-lanna-gold shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>
              );
            })}
          </div>
        </div>

        {/* COLUMN 2: SPACIOUS LANDMARK DETAIL PANEL */}
        {selectedLandmark && (
          <div className="w-[360px] sm:w-[480px] lg:w-[540px] bg-white/95 backdrop-blur-2xl border border-lanna-gold/30 rounded-3xl shadow-2xl overflow-y-auto flex flex-col shrink-0 animate-in slide-in-from-left duration-300">
            {/* Header image & Back button & Google Maps link */}
            <div className="relative w-full h-56 shrink-0 overflow-hidden group/photo">
              <a
                href={getGoogleMapsSearchUrl(selectedLandmark, language)}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 block cursor-pointer z-0"
                title={language === 'en' ? 'Click to open in Google Maps' : language === 'th' ? 'คลิกเพื่อเปิดใน Google Maps' : '點擊在 Google Maps 開啟此景點地標'}
              >
                <Image
                  src={selectedLandmark.image}
                  alt={selectedLandmark.name[language] || selectedLandmark.name['zh-TW']}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/photo:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity group-hover/photo:opacity-90" />
              </a>

              {/* Back to list button */}
              <button
                onClick={() => onSelectLandmark(null)}
                className="absolute top-3.5 left-3.5 z-10 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-bold backdrop-blur-md border border-white/20 flex items-center gap-1.5 transition shadow"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>
                  {language === 'en' ? 'Back to List' : language === 'th' ? 'ย้อนกลับ' : '⬅️ 返回景點列表'}
                </span>
              </button>

              {/* Google Maps quick badge */}
              <a
                href={getGoogleMapsSearchUrl(selectedLandmark, language)}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3.5 right-13 z-10 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/85 text-white text-xs font-bold backdrop-blur-md border border-white/20 flex items-center gap-1.5 transition shadow group-hover/photo:border-lanna-gold/80 active:scale-95"
                title={language === 'en' ? 'Open in Google Maps' : language === 'th' ? 'เปิดใน Google Maps' : '在 Google Maps 開啟'}
              >
                <Navigation className="w-3.5 h-3.5 text-lanna-gold" />
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 text-white/70" />
              </a>

              <button
                onClick={() => onSelectLandmark(null)}
                className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-white/90 text-lanna-coffee backdrop-blur-md shadow hover:bg-white transition"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Landmark Title and Tag (Clicking also navigates to Google Maps) */}
              <a
                href={getGoogleMapsSearchUrl(selectedLandmark, language)}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 z-10 text-white block group-hover/photo:translate-y-[-2px] transition-transform"
                title={language === 'en' ? 'Click to open in Google Maps' : language === 'th' ? 'คลิกเพื่อเปิดใน Google Maps' : '點擊在 Google Maps 開啟'}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-3 py-1 rounded-lg bg-lanna-gold text-white text-xs font-serif font-bold inline-block shadow-md">
                    {selectedLandmark.tag[language] || selectedLandmark.tag['zh-TW']}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold drop-shadow-md text-white group-hover/photo:text-amber-200 transition-colors">
                  {selectedLandmark.name[language] || selectedLandmark.name['zh-TW']}
                </h2>
              </a>
            </div>

            {/* Photo Attribution / Source Notice (Like Japanese 3D travel standards) */}
            <div className="px-5 py-2 bg-stone-100/90 border-b border-lanna-gold/15 flex items-center justify-between text-[11px] text-lanna-coffee/75 font-sans">
              <span className="flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-lanna-gold shrink-0" />
                <span>
                  {selectedLandmark.image?.startsWith('/images/landmarks/')
                    ? (language === 'en' ? 'Photo source: Wikimedia Commons (CC BY-SA)' : language === 'th' ? 'ที่มาภาพ: วิกิพีเดีย (CC BY-SA)' : '照片出處：維基百科 Wikimedia Commons (CC BY-SA 自由授權)')
                    : (language === 'en' ? '※ Photo is for illustrative purpose only' : language === 'th' ? '※ ภาพเพื่อการโฆษณาและเป็นภาพจำลอง' : '※ 圖片為分類情境示意圖，實際以現場為準')}
                </span>
              </span>
              <span className="text-[10px] text-lanna-coffee/50 font-mono shrink-0 ml-2">
                {selectedLandmark.image?.startsWith('/images/landmarks/') ? 'CC BY-SA' : '情境示意'}
              </span>
            </div>

            {/* Body Details */}
            <div className="p-5 flex-1 space-y-4 text-lanna-coffee bg-lanna-cream/10">
              <p className="leading-relaxed text-lanna-coffee/90 text-sm sm:text-base font-normal">
                {selectedLandmark.description[language] || selectedLandmark.description['zh-TW']}
              </p>

              {/* Stamp Collection Box */}
              <div className="bg-gradient-to-r from-amber-50/80 via-white to-amber-50/80 border border-lanna-gold/40 p-3.5 sm:p-4 rounded-2xl flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-inner border transition-transform ${
                    collectedStamps.includes(selectedLandmark.id)
                      ? 'bg-gradient-to-br from-amber-500 to-amber-700 text-white border-amber-300 shadow-md scale-105'
                      : 'bg-lanna-cream text-lanna-coffee/50 border-lanna-gold/30'
                  }`}>
                    {collectedStamps.includes(selectedLandmark.id) ? (
                      <Award className="w-6 h-6 text-yellow-300" />
                    ) : (
                      <span className="text-xl">📜</span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold font-serif text-lanna-coffee flex items-center gap-1.5">
                      <span>{language === 'en' ? 'Passport Travel Seal' : language === 'th' ? 'ตราประทับท่องเที่ยวล้านนา' : '泰北旅行護照紀念印章'}</span>
                      {collectedStamps.includes(selectedLandmark.id) && (
                        <span className="text-[10px] px-2 py-0.2 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                          {language === 'en' ? 'Stamped' : language === 'th' ? 'ประทับแล้ว' : '已蓋章'}
                        </span>
                      )}
                    </h4>
                    <p className="text-[11px] text-lanna-coffee/70 font-medium">
                      {collectedStamps.includes(selectedLandmark.id) 
                        ? (language === 'en' ? 'Official memorial seal collected ✓' : language === 'th' ? 'สะสมตราประทับเรียบร้อยแล้ว ✓' : '已成功收藏此地標專屬紀念鋼印 ✓') 
                        : (language === 'en' ? 'Click to collect official seal' : language === 'th' ? 'คลิกเพื่อสะสมตราประทับสุดพิเศษ' : '點擊蓋章收集阿勛專屬紀念印章')}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleStampClick(selectedLandmark.id)}
                  disabled={collectedStamps.includes(selectedLandmark.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition shadow flex items-center gap-1.5 active:scale-95 ${
                    collectedStamps.includes(selectedLandmark.id)
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 cursor-default font-serif'
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-md'
                  }`}
                >
                  {collectedStamps.includes(selectedLandmark.id) ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{language === 'en' ? 'Seal Collected' : language === 'th' ? 'สะสมแล้ว' : '已收藏鋼印'}</span>
                    </>
                  ) : (
                    <>
                      <Award className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Collect Seal ✦' : language === 'th' ? 'ประทับตรา ✦' : '點擊蓋章 ✦'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Highlights Checklist */}
              <div className="bg-white border border-lanna-gold/20 rounded-2xl p-4 space-y-2.5 shadow-sm">
                <h3 className="text-sm font-bold font-serif text-lanna-coffee flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-lanna-gold" />
                  <span>{language === 'en' ? 'Must-See Highlights' : language === 'th' ? 'ไฮไลท์และจุดเด่นที่ไม่ควรพลาด' : '必看特色與亮點'}</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(selectedLandmark.highlights[language] || selectedLandmark.highlights['zh-TW']).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-lanna-coffee/90 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-lanna-green shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Time */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-lanna-coffee text-xs sm:text-sm">
                  <Clock className="w-4 h-4 text-lanna-gold shrink-0" />
                  <span className="font-bold">{language === 'en' ? 'Recommended Time:' : language === 'th' ? 'เวลาที่แนะนำ:' : '建議遊覽時間：'}</span>
                  <span className="font-medium text-lanna-coffee/80">{selectedLandmark.recommendedTime[language] || selectedLandmark.recommendedTime['zh-TW']}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => toggleWishlist(selectedLandmark.id)}
                  className={`w-full py-3.5 px-4 rounded-2xl font-bold font-serif text-sm shadow-md flex items-center justify-center gap-2 transition active:scale-95 ${
                    wishlist.includes(selectedLandmark.id)
                      ? 'bg-emerald-600 text-white border border-emerald-400/50'
                      : 'bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white border border-amber-300/40 shadow-amber-900/20'
                  }`}
                >
                  {wishlist.includes(selectedLandmark.id) ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>✓ 已在我的行程清單 (點擊移除)</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>+ 加入我的行程心願單</span>
                    </>
                  )}
                </button>

                <a
                  href={getGoogleMapsSearchUrl(selectedLandmark, language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-lanna-cream text-lanna-coffee border border-lanna-gold/40 font-bold font-serif text-xs transition flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 text-lanna-gold" />
                  <span>在 Google Maps 開啟官方地標導航</span>
                  <ExternalLink className="w-3.5 h-3.5 text-lanna-coffee/60" />
                </a>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* MOBILE JAPANESE 3D TOUR BOTTOM PEEK BAR (WHEN NO LANDMARK SELECTED) */}
      {!selectedLandmark && (
        <div className="md:hidden pointer-events-auto fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-2xl border-t border-lanna-gold/40 shadow-2xl rounded-t-3xl pt-2 pb-5 px-3.5 flex flex-col gap-2.5 animate-in slide-in-from-bottom duration-300">
          {/* Grabber Handle */}
          <div 
            onClick={() => setMobileListOpen(true)}
            className="w-10 h-1 bg-stone-300 rounded-full mx-auto cursor-pointer" 
          />
          
          {/* Info & Expand Row */}
          <div className="flex items-center justify-between gap-2">
            <div 
              onClick={() => setMobileListOpen(true)}
              className="flex items-center gap-1.5 cursor-pointer truncate"
            >
              <MapPin className="w-4 h-4 text-lanna-gold shrink-0" />
              <span className="font-bold font-sans text-lanna-coffee text-xs sm:text-sm truncate">
                {selectedDistrictName ? `${selectedDistrictName}` : '泰北雙城 12 分區總覽'}
              </span>
              <span className="text-[10px] bg-amber-50 border border-lanna-gold/40 text-amber-900 px-2 py-0.2 rounded-full font-bold shrink-0">
                {filteredLandmarks.length} 處
              </span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {selectedDistrictId && (
                <button
                  onClick={() => {
                    onDistrictChange(null);
                    onRegionChange('all');
                    onSelectLandmark(null);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold"
                >
                  返回總覽
                </button>
              )}
              <button
                onClick={() => setMobileListOpen(true)}
                className="px-3 py-1 rounded-xl bg-lanna-gold text-white text-xs font-bold font-sans shadow-sm flex items-center gap-1"
              >
                <ListOrdered className="w-3.5 h-3.5" />
                <span>全部清單</span>
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategoryId === cat.id;
              return (
                <button
                  key={cat.id || 'all'}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all shrink-0 border ${
                    isSelected
                      ? 'bg-lanna-gold text-white border-lanna-gold shadow-sm'
                      : 'bg-stone-50 text-lanna-coffee border-stone-200'
                  }`}
                >
                  {cat.label[language] || cat.label['zh-TW']}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* MOBILE JAPANESE SPOTLIGHT LANDMARK CARD (FLOATING MINI SPOTLIGHT ON MAP) */}
      {selectedLandmark && !showDetailModal && (
        <div className="md:hidden pointer-events-auto fixed bottom-3 left-3 right-3 z-40 bg-white/98 backdrop-blur-2xl border border-lanna-gold/50 shadow-2xl rounded-2xl p-3 flex flex-col gap-2.5 max-w-lg mx-auto animate-in slide-in-from-bottom-6 duration-300">
          {/* Top Row: Thumbnail + Title + Close */}
          <div className="flex items-start gap-3">
            <div 
              onClick={() => setShowDetailModal(true)}
              className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-lanna-gold/30 bg-lanna-cream cursor-pointer"
            >
              <Image src={selectedLandmark.image} alt={selectedLandmark.name[language] || selectedLandmark.name['zh-TW']} fill className="object-cover" />
              {collectedStamps.includes(selectedLandmark.id) && (
                <span className="absolute top-0.5 right-0.5 bg-lanna-gold text-white text-[8px] px-1 rounded-full font-black">
                  💮
                </span>
              )}
            </div>

            <div className="flex-1 min-w-0" onClick={() => setShowDetailModal(true)}>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] font-bold text-lanna-coffee bg-lanna-cream px-2 py-0.2 rounded border border-lanna-gold/30">
                  {selectedLandmark.tag[language] || selectedLandmark.tag['zh-TW']}
                </span>
                <span className="text-[10px] text-stone-500 flex items-center gap-0.5">
                  <Clock className="w-3 h-3 text-lanna-gold" />
                  {selectedLandmark.recommendedTime[language] || selectedLandmark.recommendedTime['zh-TW']}
                </span>
              </div>
              <h3 className="text-sm font-sans font-bold text-lanna-coffee leading-tight truncate">
                {selectedLandmark.name[language] || selectedLandmark.name['zh-TW']}
              </h3>
              <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                {selectedLandmark.description[language] || selectedLandmark.description['zh-TW']}
              </p>
            </div>

            <button
              onClick={() => onSelectLandmark(null)}
              className="p-1 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Actions Row */}
          <div className="flex items-center gap-2 pt-1 border-t border-stone-100">
            <button
              onClick={() => toggleWishlist(selectedLandmark.id)}
              className={`flex-1 py-2 px-3 rounded-xl font-bold font-sans text-xs shadow-sm flex items-center justify-center gap-1.5 transition active:scale-95 ${
                wishlist.includes(selectedLandmark.id)
                  ? 'bg-emerald-600 text-white border border-emerald-400/50'
                  : 'bg-gradient-to-r from-amber-500 to-amber-700 text-white border border-amber-300/40'
              }`}
            >
              {wishlist.includes(selectedLandmark.id) ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>已在行程</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ 心願單</span>
                </>
              )}
            </button>

            <a
              href={getGoogleMapsSearchUrl(selectedLandmark, language)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-xl bg-white hover:bg-stone-50 text-lanna-coffee border border-lanna-gold/40 font-bold font-sans text-xs shadow-sm flex items-center justify-center gap-1 transition active:scale-95 shrink-0"
            >
              <Navigation className="w-3.5 h-3.5 text-lanna-gold" />
              <span>導航</span>
            </a>

            <button
              onClick={() => setShowDetailModal(true)}
              className="py-2 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold font-sans text-xs shadow-sm flex items-center justify-center gap-1 transition active:scale-95 shrink-0"
            >
              <span>詳情 ➔</span>
            </button>
          </div>
        </div>
      )}

      {/* MOBILE LANDMARK LIST DRAWER / BOTTOM SHEET */}
      {mobileListOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileListOpen(false);
          }}
          className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-end pointer-events-auto animate-in fade-in duration-200"
        >
          <div className="bg-white/98 backdrop-blur-2xl border-t-2 border-lanna-gold/50 rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
            {/* Drawer Header */}
            <div className="p-4 bg-lanna-cream border-b border-lanna-gold/20 flex flex-col gap-2.5 shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 truncate">
                  <MapPin className="w-4 h-4 text-lanna-gold shrink-0" />
                  <span className="font-bold font-sans text-lanna-coffee text-sm truncate">
                    {selectedDistrictName ? `${selectedDistrictName}` : '泰北雙城景點總清單'}
                  </span>
                  <span className="text-[11px] bg-white border border-lanna-gold/30 text-lanna-coffee px-2 py-0.2 rounded-full font-bold shrink-0">
                    {filteredLandmarks.length} 處
                  </span>
                </div>
                <button
                  onClick={() => setMobileListOpen(false)}
                  className="p-1.5 rounded-full bg-white text-lanna-coffee border border-lanna-gold/30 shadow-sm"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-lanna-coffee/50 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={language === 'en' ? 'Search attractions, cafe, food...' : language === 'th' ? 'ค้นหาสถานที่...' : '搜尋古蹟、米其林美食、SPA...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 bg-white border border-lanna-gold/30 rounded-xl text-xs text-lanna-coffee placeholder:text-lanna-coffee/40 focus:outline-none shadow-sm font-sans"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-stone-400 bg-stone-100 rounded-full"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                )}
              </div>

              {/* Category Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
                {categories.map((cat) => {
                  const isSelected = selectedCategoryId === cat.id;
                  return (
                    <button
                      key={cat.id || 'all'}
                      onClick={() => onCategoryChange(cat.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all shrink-0 border ${
                        isSelected
                          ? 'bg-lanna-gold text-white border-lanna-gold shadow-sm'
                          : 'bg-white text-lanna-coffee border-lanna-gold/20'
                      }`}
                    >
                      {cat.label[language] || cat.label['zh-TW']}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Landmarks List Items */}
            <div className="p-3 overflow-y-auto space-y-2 flex-1 scrollbar-thin bg-lanna-cream/20">
              {filteredLandmarks.map((landmark) => {
                const isSelected = selectedLandmark?.id === landmark.id;
                const isStamped = collectedStamps.includes(landmark.id);
                const isInWishlist = wishlist.includes(landmark.id);
                const landmarkName = landmark.name[language] || landmark.name['zh-TW'];
                const tagText = landmark.tag[language] || landmark.tag['zh-TW'];

                return (
                  <button
                    key={landmark.id}
                    onClick={() => {
                      onSelectLandmark(landmark);
                      setMobileListOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center gap-2.5 ${
                      isSelected
                        ? 'bg-lanna-cream border-lanna-gold shadow-md ring-2 ring-lanna-gold/30'
                        : 'bg-white border-lanna-gold/20 shadow-sm active:bg-lanna-cream/60'
                    }`}
                  >
                    <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 border border-lanna-gold/20 bg-lanna-cream">
                      <Image src={landmark.image} alt={landmarkName} fill className="object-cover" />
                      {isStamped && (
                        <span className="absolute top-0.5 right-0.5 bg-lanna-gold text-white text-[8px] px-1 rounded-full font-black">
                          💮
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[10px] font-bold text-lanna-coffee bg-lanna-cream px-1.5 py-0.1 rounded border border-lanna-gold/30">
                          {tagText}
                        </span>
                        {isInWishlist && (
                          <span className="text-[9px] bg-amber-100 text-amber-900 border border-amber-300 font-bold px-1 rounded">
                            ✓ 已在行程
                          </span>
                        )}
                      </div>
                      <h3 className="text-xs font-sans font-bold text-lanna-coffee truncate">{landmarkName}</h3>
                    </div>
                    <ChevronRight className="w-4 h-4 text-lanna-gold shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* DEEP STORY DETAIL MODAL (FULL MODAL ON MOBILE WHEN CLICKING '詳情') */}
      {selectedLandmark && showDetailModal && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowDetailModal(false);
          }}
          className="md:hidden fixed inset-0 z-50 bg-black/65 backdrop-blur-md flex flex-col justify-end pointer-events-auto animate-in fade-in duration-200 p-2 sm:p-4"
        >
          <div className="bg-white border-2 border-lanna-gold/50 rounded-3xl shadow-2xl max-h-[88vh] overflow-y-auto flex flex-col pointer-events-auto animate-in slide-in-from-bottom duration-300">
            {/* Header photo & Back to spotlight & Close */}
            <div className="relative w-full h-48 shrink-0 overflow-hidden">
              <a
                href={getGoogleMapsSearchUrl(selectedLandmark, language)}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 block cursor-pointer z-0"
              >
                <Image
                  src={selectedLandmark.image}
                  alt={selectedLandmark.name[language] || selectedLandmark.name['zh-TW']}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              </a>

              <button
                onClick={() => setShowDetailModal(false)}
                className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-bold backdrop-blur-md border border-white/20 flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>返回地圖</span>
              </button>

              <button
                onClick={() => {
                  setShowDetailModal(false);
                  onSelectLandmark(null);
                }}
                className="absolute top-3.5 right-3.5 z-10 p-1.5 rounded-full bg-white/90 text-lanna-coffee backdrop-blur-md shadow"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 left-3.5 right-3.5 z-10 text-white">
                <span className="px-2.5 py-0.5 rounded-md bg-lanna-gold text-white text-[10px] font-bold inline-block shadow mb-1">
                  {selectedLandmark.tag[language] || selectedLandmark.tag['zh-TW']}
                </span>
                <h2 className="text-base sm:text-lg font-sans font-bold drop-shadow-md text-white">
                  {selectedLandmark.name[language] || selectedLandmark.name['zh-TW']}
                </h2>
              </div>
            </div>

            {/* Attribution */}
            <div className="px-4 py-1.5 bg-stone-100 border-b border-lanna-gold/15 flex items-center justify-between text-[10px] text-stone-600">
              <span className="flex items-center gap-1">
                <Camera className="w-3 h-3 text-lanna-gold shrink-0" />
                <span>照片出處：維基百科 Wikimedia (CC BY-SA)</span>
              </span>
              <span className="font-mono text-[9px] text-stone-400">CC BY-SA</span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3.5 text-lanna-coffee bg-lanna-cream/10 font-sans">
              <p className="leading-relaxed text-xs sm:text-sm text-stone-700">
                {selectedLandmark.description[language] || selectedLandmark.description['zh-TW']}
              </p>

              {/* Stamp */}
              <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 border border-lanna-gold/40 p-3 rounded-2xl flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-base shadow-inner border ${
                    collectedStamps.includes(selectedLandmark.id)
                      ? 'bg-amber-600 text-white border-amber-300'
                      : 'bg-lanna-cream text-stone-500 border-lanna-gold/30'
                  }`}>
                    {collectedStamps.includes(selectedLandmark.id) ? (
                      <Award className="w-5 h-5 text-yellow-300" />
                    ) : (
                      <span>📜</span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-lanna-coffee">
                      {language === 'en' ? 'Passport Seal' : language === 'th' ? 'ตราประทับ' : '護照紀念鋼印'}
                    </h4>
                    <p className="text-[10px] text-stone-500">
                      {collectedStamps.includes(selectedLandmark.id) ? '已成功收藏此地標印章 ✓' : '點擊蓋章收集紀念鋼印'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleStampClick(selectedLandmark.id)}
                  disabled={collectedStamps.includes(selectedLandmark.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shadow ${
                    collectedStamps.includes(selectedLandmark.id)
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
                  }`}
                >
                  {collectedStamps.includes(selectedLandmark.id) ? '已蓋章 ✓' : '點擊蓋章 ✦'}
                </button>
              </div>

              {/* Highlights */}
              <div className="bg-white border border-lanna-gold/20 rounded-2xl p-3.5 space-y-2 shadow-sm">
                <h3 className="text-xs font-bold text-lanna-coffee flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-lanna-gold" />
                  <span>{language === 'en' ? 'Highlights' : language === 'th' ? 'ไฮไลท์' : '必看精華亮點'}</span>
                </h3>
                <ul className="space-y-1.5">
                  {(selectedLandmark.highlights[language] || selectedLandmark.highlights['zh-TW']).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-stone-700 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-stone-700 text-xs">
                <Clock className="w-3.5 h-3.5 text-lanna-gold shrink-0" />
                <span className="font-bold">建議遊覽時間：</span>
                <span>{selectedLandmark.recommendedTime[language] || selectedLandmark.recommendedTime['zh-TW']}</span>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => toggleWishlist(selectedLandmark.id)}
                  className={`w-full py-3 px-4 rounded-xl font-bold font-sans text-xs shadow-md flex items-center justify-center gap-2 transition active:scale-95 ${
                    wishlist.includes(selectedLandmark.id)
                      ? 'bg-emerald-600 text-white border border-emerald-400/50'
                      : 'bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white border border-amber-300/40'
                  }`}
                >
                  {wishlist.includes(selectedLandmark.id) ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>✓ 已加入行程心願單 (點擊移除)</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>+ 加入自訂行程心願單</span>
                    </>
                  )}
                </button>

                <a
                  href={getGoogleMapsSearchUrl(selectedLandmark, language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-lanna-coffee border border-lanna-gold/40 font-bold font-sans text-xs shadow-sm flex items-center justify-center gap-1.5 transition active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 text-lanna-gold" />
                  <span>在 Google Maps 開啟官方地標</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* CUSTOM ITINERARY DRAWER / MODAL */}
      {showItineraryModal && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowItineraryModal(false);
          }}
          onWheel={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 pointer-events-auto animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            className="bg-white border-2 border-lanna-gold/50 rounded-3xl shadow-2xl w-full max-w-2xl md:max-w-3xl max-h-[85vh] overflow-hidden flex flex-col pointer-events-auto animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-lanna-cream border-b border-lanna-gold/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md">
                  <Route className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-lanna-coffee flex items-center gap-2">
                    <span>我的自訂行程心願單</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold border border-amber-300">
                      共 {wishlist.length} 處景點
                    </span>
                  </h3>
                  <p className="text-xs text-lanna-coffee/70 font-medium">
                    {language === 'en' ? 'Smart route sorting & One-click Google Maps export' : '智慧南北向順路排序 ✦ 一鍵匯出 Google Maps 導航'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowItineraryModal(false)}
                className="p-2 rounded-full bg-white hover:bg-lanna-cream text-lanna-coffee border border-lanna-gold/30 transition shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Action Bar (Smart Sort & Direction Controls & Clear) */}
            <div className="px-4 sm:px-5 py-3 bg-[#FAF7F2] border-b border-lanna-gold/20 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {/* Auto Smart Sort */}
                <button
                  onClick={() => optimizeRoute('auto')}
                  disabled={wishlist.length <= 1}
                  className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-serif font-bold shadow-sm flex items-center gap-1.5 transition active:scale-95"
                  title="依據地理方位自動判斷南北/東西向順路方向"
                >
                  <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
                  <span>⚡ 智慧順路排序</span>
                </button>

                {/* South to North */}
                <button
                  onClick={() => optimizeRoute('south-to-north')}
                  disabled={wishlist.length <= 1}
                  className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-amber-50 border border-lanna-gold/40 text-lanna-coffee disabled:opacity-40 disabled:cursor-not-allowed text-xs font-serif font-medium transition active:scale-95"
                  title="由南往北排序（清邁市區 ➔ 湄林 ➔ 清萊）"
                >
                  <span>⬆️ 由南往北</span>
                </button>

                {/* North to South */}
                <button
                  onClick={() => optimizeRoute('north-to-south')}
                  disabled={wishlist.length <= 1}
                  className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-amber-50 border border-lanna-gold/40 text-lanna-coffee disabled:opacity-40 disabled:cursor-not-allowed text-xs font-serif font-medium transition active:scale-95"
                  title="由北往南排序（尼曼/古城 ➔ 杭東 ➔ 湄旺 ➔ 茵他儂）"
                >
                  <span>⬇️ 由北往南</span>
                </button>

                {/* Reverse */}
                <button
                  onClick={() => optimizeRoute('reverse')}
                  disabled={wishlist.length <= 1}
                  className="px-2 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-serif font-medium transition active:scale-95"
                  title="反轉當前順序"
                >
                  <span>🔄 反向</span>
                </button>
              </div>

              {wishlist.length > 0 && (
                <button
                  onClick={clearWishlist}
                  className="px-3 py-1.5 rounded-lg text-rose-700 hover:bg-rose-50 border border-rose-200 text-xs font-medium transition flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>清空</span>
                </button>
              )}
            </div>

            {/* Modal Body: Itinerary List */}
            <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-3 bg-[#FAF7F2]/60">
              {wishlist.length === 0 ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 text-lanna-coffee/60">
                  <div className="w-16 h-16 rounded-full bg-lanna-cream border border-lanna-gold/30 flex items-center justify-center text-3xl">
                    🗺️
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-serif text-lanna-coffee">心願單目前是空的</h4>
                    <p className="text-xs text-lanna-coffee/70 mt-1">
                      瀏覽左側地標清單，點擊景點卡片中的「+ 加入行程心願單」即可自訂行程！
                    </p>
                  </div>
                </div>
              ) : (
                wishlist.map((id, index) => {
                  const landmark = LANDMARKS.find((l) => l.id === id);
                  if (!landmark) return null;

                  const lName = landmark.name[language] || landmark.name['zh-TW'];
                  const districtName = DISTRICTS.find((d) => d.id === landmark.districtId)?.name[language] || landmark.districtId;

                  return (
                    <div
                      key={id}
                      className="p-3 bg-white border border-lanna-gold/30 rounded-2xl shadow-sm hover:shadow-md transition flex items-center gap-3 group"
                    >
                      {/* Step Number Badge */}
                      <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-black shrink-0 shadow-sm font-serif">
                        {index + 1}
                      </div>

                      {/* Thumbnail */}
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-lanna-gold/20">
                        <Image src={landmark.image} alt={lName} fill className="object-cover" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] bg-lanna-cream text-lanna-coffee font-bold px-2 py-0.2 rounded border border-lanna-gold/20 truncate">
                            {districtName}
                          </span>
                          <span className="text-[10px] text-lanna-coffee/60 flex items-center gap-0.5">
                            <Clock className="w-3 h-3 text-lanna-gold" />
                            {landmark.recommendedTime[language] || landmark.recommendedTime['zh-TW']}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold font-serif text-lanna-coffee truncate">{lName}</h4>
                      </div>

                      {/* Reorder & Action Buttons */}
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => moveItem(index, 'up')}
                          disabled={index === 0}
                          className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed text-slate-700 transition"
                          title="上移"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => moveItem(index, 'down')}
                          disabled={index === wishlist.length - 1}
                          className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed text-slate-700 transition"
                          title="下移"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                        <a
                          href={getGoogleMapsSearchUrl(landmark, language)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 transition"
                          title="在 Google Maps 開啟此景點"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => removeFromWishlist(id)}
                          className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 transition"
                          title="從心願單移除"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Modal Footer: Google Maps Export */}
            <div className="p-4 sm:p-5 bg-lanna-cream border-t border-lanna-gold/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-lanna-coffee/80 font-medium text-center sm:text-left">
                {wishlist.length > 0 ? (
                  <span className="flex items-center gap-1.5 text-lanna-coffee font-semibold">
                    <span>📍</span>
                    <span>已排定 {wishlist.length} 處景點</span>
                    <span className="text-lanna-gold">✦</span>
                    <span className="text-lanna-coffee/70 font-normal">多點路徑串聯導航</span>
                  </span>
                ) : (
                  <span className="text-lanna-coffee/60">快去探索並挑選想去的景點吧！</span>
                )}
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setShowItineraryModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-lanna-coffee text-xs font-bold border border-lanna-gold/30 transition whitespace-nowrap shrink-0 shadow-sm"
                >
                  繼續挑選
                </button>

                <button
                  onClick={exportToGoogleMaps}
                  disabled={wishlist.length === 0}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-serif font-bold shadow-md flex items-center justify-center gap-2 transition active:scale-95 whitespace-nowrap shrink-0"
                >
                  <MapIcon className="w-4 h-4 shrink-0" />
                  <span>🗺️ 匯出至 Google Maps 導航</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DIGITAL PASSPORT MODAL */}
      {showPassportModal && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowPassportModal(false);
          }}
          onWheel={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 pointer-events-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            className="bg-white border border-lanna-gold/40 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 pointer-events-auto"
          >
            <div className="p-4 bg-lanna-cream border-b border-lanna-gold/30 text-lanna-coffee flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Award className="w-6 h-6 text-lanna-gold" />
                <div>
                  <h3 className="text-base font-serif font-bold text-lanna-coffee">阿勛泰北旅遊 3D 護照集章卡</h3>
                  <p className="text-xs text-lanna-coffee/80 font-medium">已集章 {collectedStamps.length} / {LANDMARKS.length}</p>
                </div>
              </div>
              <button
                onClick={() => setShowPassportModal(false)}
                className="p-1.5 rounded-full bg-white/80 hover:bg-white text-lanna-coffee border border-lanna-gold/30 transition shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 max-h-[60vh] overflow-y-auto bg-lanna-cream/10">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {LANDMARKS.map((l) => {
                  const isUnlocked = collectedStamps.includes(l.id);
                  const lName = l.name[language] || l.name['zh-TW'];
                  return (
                    <div
                      key={l.id}
                      className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center text-center gap-1.5 ${
                        isUnlocked
                          ? 'bg-lanna-cream border-lanna-gold/50 text-lanna-coffee shadow-sm'
                          : 'bg-white border-slate-200 text-slate-400 opacity-60'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-white border border-lanna-gold/30 flex items-center justify-center text-2xl shadow-inner">
                        {isUnlocked ? l.stampIcon : '🔒'}
                      </div>
                      <span className="text-xs font-serif font-bold text-lanna-coffee">{lName}</span>
                      <span className="text-[10px] text-lanna-gold font-bold">
                        {isUnlocked ? '💮 已蓋章' : '尚未解鎖'}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Discount Reward Box */}
              <div className="mt-5 p-4 rounded-2xl bg-lanna-cream border border-lanna-gold/40 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <Gift className="w-8 h-8 text-lanna-gold shrink-0" />
                  <div>
                    <h4 className="text-xs font-serif font-bold text-lanna-coffee">包車集章獎勵折扣</h4>
                    <p className="text-[11px] text-lanna-coffee/90 font-medium">
                      {collectedStamps.length >= 5 ? '🎉 恭喜已集滿 5 章！預約包車可享 200 泰銖折扣！' : `還差 ${5 - collectedStamps.length} 個印章即可領取 200 泰銖包車折價！`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-lanna-cream border-t border-lanna-gold/30 flex justify-end">
              <button
                onClick={() => setShowPassportModal(false)}
                className="px-5 py-2 rounded-xl bg-lanna-gold hover:bg-[#b38e47] text-white text-xs font-serif font-bold shadow-md transition"
              >
                關閉護照
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Live Meteorological & Air Quality Modal */}
      <WeatherModal
        language={language}
        selectedDistrictId={selectedDistrictId}
        isOpen={showWeatherModal}
        onClose={() => setShowWeatherModal(false)}
      />
    </div>
  );
}
