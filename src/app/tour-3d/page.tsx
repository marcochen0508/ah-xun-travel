'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import TourUIOverlay from '@/components/tour-3d/TourUIOverlay';
import { Landmark, Language } from '@/components/tour-3d/landmarkData';
import { TrafficRoute, DEFAULT_TRAFFIC_ROUTES } from '@/components/tour-3d/trafficPaths';

const ChiangMaiChiangRai3DMap = dynamic(
  () => import('@/components/tour-3d/ChiangMaiChiangRai3DMap'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-screen bg-slate-900 flex flex-col items-center justify-center text-slate-100 space-y-4 font-sans">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-semibold tracking-wider text-slate-300 animate-pulse">
          正在載入泰北雙城 (清邁 & 清萊) 3D 立體動態沙盤...
        </p>
      </div>
    ),
  }
);

export default function Tour3DPage() {
  const [language, setLanguage] = useState<Language>('zh-TW');
  const [selectedRegionId, setSelectedRegionId] = useState<'all' | 'chiang-mai' | 'chiang-rai'>('all');
  const [selectedDistrictId, setSelectedDistrictId] = useState<string | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(null);
  const [collectedStamps, setCollectedStamps] = useState<string[]>([]);

  // Traffic Routes & Interactive Path State (Default to Calibrated Live Routes)
  const [routes, setRoutes] = useState<TrafficRoute[]>(DEFAULT_TRAFFIC_ROUTES);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [activeRouteId, setActiveRouteId] = useState<string | null>(DEFAULT_TRAFFIC_ROUTES[0]?.id || null);

  // Load collected stamps & custom traffic routes from LocalStorage
  useEffect(() => {
    try {
      const savedStamps = localStorage.getItem('ah_xun_collected_stamps');
      if (savedStamps) {
        setCollectedStamps(JSON.parse(savedStamps));
      }

      // Load custom routes from v8 or default
      const savedRoutes = localStorage.getItem('ah_xun_traffic_routes_v8');
      if (savedRoutes) {
        setRoutes(JSON.parse(savedRoutes));
      } else {
        setRoutes(DEFAULT_TRAFFIC_ROUTES);
      }
    } catch (e) {
      console.error('Failed to load saved state', e);
    }
  }, []);

  const handleUpdateRoutes = (newRoutes: TrafficRoute[]) => {
    setRoutes(newRoutes);
    try {
      localStorage.setItem('ah_xun_traffic_routes_v8', JSON.stringify(newRoutes));
    } catch (e) {
      console.error('Failed to save routes', e);
    }
  };

  const handleResetRoutes = () => {
    if (window.confirm('確定要恢復預設的道路、河流與航線路徑嗎？')) {
      setRoutes(DEFAULT_TRAFFIC_ROUTES);
      setActiveRouteId(DEFAULT_TRAFFIC_ROUTES[0]?.id || null);
      try {
        localStorage.removeItem('ah_xun_traffic_routes_v8');
      } catch (e) {
        console.error('Failed to clear saved routes', e);
      }
    }
  };

  const handleCollectStamp = (landmarkId: string) => {
    if (!collectedStamps.includes(landmarkId)) {
      const updated = [...collectedStamps, landmarkId];
      setCollectedStamps(updated);
      try {
        localStorage.setItem('ah_xun_collected_stamps', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save stamp', e);
      }
    }
  };

  const handleZoomIn = () => {
    const event = new WheelEvent('wheel', { deltaY: -120 });
    window.dispatchEvent(event);
  };

  const handleZoomOut = () => {
    const event = new WheelEvent('wheel', { deltaY: 120 });
    window.dispatchEvent(event);
  };

  const handleResetView = () => {
    setSelectedRegionId('chiang-mai');
    setSelectedDistrictId('old-city-district');
    setSelectedCategoryId(null);
    setSelectedLandmark(null);
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#dce5ed] md:bg-slate-900 font-sans">
      {/* 3D Map & Dynamic Animated Traffic Canvas */}
      <div className="w-full h-full">
        <ChiangMaiChiangRai3DMap
          language={language}
          selectedRegionId={selectedRegionId}
          selectedDistrictId={selectedDistrictId}
          selectedCategoryId={selectedCategoryId}
          selectedLandmarkId={selectedLandmark?.id || null}
          routes={routes}
          activeRouteId={activeRouteId}
          isEditorActive={false}
          onSelectRegion={setSelectedRegionId}
          onSelectDistrict={setSelectedDistrictId}
          onSelectLandmark={setSelectedLandmark}
          onUpdateRoutes={handleUpdateRoutes}
          onSelectActiveRoute={setActiveRouteId}
        />
      </div>

      {/* Interactive UI Overlay Layer */}
      <TourUIOverlay
        language={language}
          selectedRegionId={selectedRegionId}
          selectedDistrictId={selectedDistrictId}
          selectedCategoryId={selectedCategoryId}
          selectedLandmark={selectedLandmark}
          collectedStamps={collectedStamps}
          onLanguageChange={setLanguage}
          onRegionChange={setSelectedRegionId}
          onDistrictChange={setSelectedDistrictId}
          onCategoryChange={setSelectedCategoryId}
          onSelectLandmark={setSelectedLandmark}
          onCollectStamp={handleCollectStamp}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onResetView={handleResetView}
        />
    </main>
  );
}

