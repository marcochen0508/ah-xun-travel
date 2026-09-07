import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Landmark, DISTRICTS, Language } from './landmarkData';
import { TrafficRoute, Waypoint } from './trafficPaths';
import TrafficLayer from './TrafficLayer';

interface ChiangMaiChiangRai3DMapProps {
  language: Language;
  selectedRegionId: 'all' | 'chiang-mai' | 'chiang-rai';
  selectedDistrictId: string | null;
  selectedCategoryId: string | null;
  selectedLandmarkId: string | null;
  routes?: TrafficRoute[];
  activeRouteId?: string | null;
  isEditorActive?: boolean;
  onSelectRegion: (regionId: 'all' | 'chiang-mai' | 'chiang-rai') => void;
  onSelectDistrict: (districtId: string | null) => void;
  onSelectLandmark: (landmark: Landmark | null) => void;
  onUpdateRoutes?: (newRoutes: TrafficRoute[]) => void;
  onSelectActiveRoute?: (id: string) => void;
}

export default function ChiangMaiChiangRai3DMap({
  language,
  selectedRegionId,
  selectedDistrictId,
  selectedCategoryId,
  selectedLandmarkId,
  routes = [],
  activeRouteId = null,
  isEditorActive = false,
  onSelectRegion,
  onSelectDistrict,
  onSelectLandmark,
  onUpdateRoutes,
  onSelectActiveRoute,
}: ChiangMaiChiangRai3DMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Smooth 2.5D Map State (Scale, Pan Offsets)
  const [scale, setScale] = useState(1.1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);

  // Direct Mouse Drag Pan tracking
  const isDraggingRef = useRef(false);
  const startMouseRef = useRef({ x: 0, y: 0 });
  const startPanRef = useRef({ x: 0, y: 0 });

  // Waypoint dragging state in editor mode
  const [draggingWaypoint, setDraggingWaypoint] = useState<{
    routeId: string;
    pointIndex: number;
  } | null>(null);

  // Toggle Visibility of Waypoints & Lines (按 H 切換隱藏/顯示)
  const [showWaypoints, setShowWaypoints] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle when pressing 'H' or 'h'
      if ((e.key === 'h' || e.key === 'H') && isEditorActive) {
        setShowWaypoints((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditorActive]);

  // Determine current diorama artwork based on selected district
  let currentDioramaArt = '/images/diorama/diorama_00_v17_no_car.jpg';
  if (selectedDistrictId === 'old-city-district') {
    currentDioramaArt = '/images/diorama/old_city_square_v1.jpg';
  } else if (selectedDistrictId === 'south-city-district') {
    currentDioramaArt = '/images/diorama/south_city_accurate_v3.jpg';
  } else if (selectedDistrictId === 'nimman-district') {
    currentDioramaArt = '/images/diorama/nimman_cmu_diorama.jpg';
  } else if (selectedDistrictId === 'doi-suthep-district') {
    currentDioramaArt = '/images/diorama/doi_suthep_sacred_diorama.jpg';
  } else if (selectedDistrictId === 'doi-inthanon-district') {
    currentDioramaArt = '/images/diorama/doi_inthanon_diorama.jpg';
  } else if (selectedDistrictId === 'chiang-rai-city-district') {
    currentDioramaArt = '/images/diorama/chiang_rai_art_diorama.jpg';
  } else if (selectedDistrictId === 'tea-mountain-district') {
    currentDioramaArt = '/images/diorama/tea_golden_triangle_diorama.jpg';
  } else if (selectedDistrictId === 'night-bazaar-district') {
    currentDioramaArt = '/images/diorama/ping_river_warorot_diorama.jpg';
  } else if (selectedDistrictId === 'mae-kampong-district' || selectedDistrictId === 'san-kamphaeng-district') {
    currentDioramaArt = '/images/diorama/maekampong_giant_diorama.jpg';
  } else if (selectedDistrictId === 'mae-rim-district') {
    currentDioramaArt = '/images/diorama/maerim_maetaeng_diorama.jpg';
  } else if (selectedDistrictId === 'hang-dong-district') {
    currentDioramaArt = '/images/diorama/hangdong_maewang_diorama.jpg';
  } else if (selectedDistrictId === 'chiang-dao-district') {
    currentDioramaArt = '/images/diorama/6_lalitta_cafe_chiang_rai.jpg';
  }

  // Track touch pan and pinch-to-zoom gestures on mobile
  const touchStartRef = useRef<{ x: number; y: number; dist: number }>({ x: 0, y: 0, dist: 0 });

  // Set initial scale to 1.0 so the entire overview diorama (from Doi Inthanon to Chiang Rai) is 100% visible
  useEffect(() => {
    setPanX(0);
    setPanY(0);
    setScale(1.0);
  }, [selectedDistrictId]);

  // Mouse Wheel Zooming
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    setScale((prev) => Math.min(Math.max(prev * zoomFactor, 0.8), 3.5));
  }, []);

  // Mouse Drag Pan
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0 || draggingWaypoint) return;
    isDraggingRef.current = true;
    startMouseRef.current = { x: e.clientX, y: e.clientY };
    startPanRef.current = { x: panX, y: panY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingWaypoint && canvasRef.current && onUpdateRoutes) {
      const rect = canvasRef.current.getBoundingClientRect();
      const xPct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const yPct = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));

      const updated = routes.map((r) => {
        if (r.id !== draggingWaypoint.routeId) return r;
        const newPoints = [...r.points];
        newPoints[draggingWaypoint.pointIndex] = {
          x: Math.round(xPct * 10) / 10,
          y: Math.round(yPct * 10) / 10,
        };
        return { ...r, points: newPoints };
      });
      onUpdateRoutes(updated);
      return;
    }

    if (!isDraggingRef.current) return;
    const dx = e.clientX - startMouseRef.current.x;
    const dy = e.clientY - startMouseRef.current.y;
    setPanX(startPanRef.current.x + dx);
    setPanY(startPanRef.current.y + dy);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setDraggingWaypoint(null);
  };

  // Mobile Touch Pan and Pinch-to-Zoom handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      startMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      startPanRef.current = { x: panX, y: panY };
    } else if (e.touches.length === 2) {
      isDraggingRef.current = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchStartRef.current = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
        dist: Math.hypot(dx, dy),
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isDraggingRef.current) {
      const dx = e.touches[0].clientX - startMouseRef.current.x;
      const dy = e.touches[0].clientY - startMouseRef.current.y;
      setPanX(startPanRef.current.x + dx);
      setPanY(startPanRef.current.y + dy);
    } else if (e.touches.length === 2 && touchStartRef.current.dist > 0) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const newDist = Math.hypot(dx, dy);
      const factor = newDist / touchStartRef.current.dist;
      setScale((prev) => Math.min(Math.max(prev * factor, 0.9), 3.5));
      touchStartRef.current.dist = newDist;
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    touchStartRef.current = { x: 0, y: 0, dist: 0 };
  };

  // Click Canvas to Add Waypoint in Editor Mode
  const handleCanvasClick = (e: React.MouseEvent) => {
    if (!isEditorActive || !activeRouteId || !canvasRef.current || !onUpdateRoutes) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const xPct = Math.round((((e.clientX - rect.left) / rect.width) * 100) * 10) / 10;
    const yPct = Math.round((((e.clientY - rect.top) / rect.height) * 100) * 10) / 10;

    const updated = routes.map((r) => {
      if (r.id !== activeRouteId) return r;
      return {
        ...r,
        points: [...r.points, { x: xPct, y: yPct }],
      };
    });
    onUpdateRoutes(updated);
  };

  const handleDeleteWaypoint = (routeId: string, pointIndex: number) => {
    if (!onUpdateRoutes) return;
    const updated = routes.map((r) => {
      if (r.id !== routeId) return r;
      return {
        ...r,
        points: r.points.filter((_, idx) => idx !== pointIndex),
      };
    });
    onUpdateRoutes(updated);
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full h-full min-h-[600px] overflow-hidden bg-gradient-to-b from-[#120D0A] via-[#1C140E] to-[#0E0906] select-none flex items-center justify-center ${
        isEditorActive ? 'cursor-crosshair' : 'cursor-grab active:cursor-grabbing'
      }`}
    >
      {/* Quick Route Selector Banner (Always visible in editor mode) */}
      {isEditorActive && (
        <div className="absolute top-4 left-6 z-40 max-w-[calc(100vw-28rem)] overflow-x-auto flex items-center gap-2 p-1.5 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700 shadow-xl scrollbar-none">
          <span className="text-[10px] font-bold text-slate-400 px-1 shrink-0">🎯 編輯路線:</span>
          {routes.map((r) => {
            const isSelected = r.id === activeRouteId;
            const badgeIcon =
              r.type === 'road' ? '🚗' : r.type === 'river' ? '🚤' : r.type === 'runway' ? '🛫' : '✈️';
            const activeClass = isSelected
              ? 'bg-amber-400 text-slate-950 font-black shadow-md scale-105 ring-2 ring-amber-300'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium';

            return (
              <button
                key={r.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectActiveRoute?.(r.id);
                }}
                className={`px-2.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5 whitespace-nowrap transition-all ${activeClass}`}
              >
                <span>{badgeIcon}</span>
                <span>{r.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-slate-900 text-amber-300' : 'bg-slate-700 text-slate-400'}`}>
                  {r.points.length}點
                </span>
              </button>
            );
          })}

          <div className="w-px h-5 bg-slate-700 mx-1 shrink-0" />

          {/* Quick Add Buttons directly in top bar */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const newId = `river-${Date.now()}`;
              const newRoute: TrafficRoute = {
                id: newId,
                name: `新河流航道 #${routes.filter(r => r.type === 'river').length + 1}`,
                type: 'river',
                density: 2,
                speed: 0.6,
                points: [
                  { x: 45, y: 55 },
                  { x: 55, y: 55 },
                ],
              };
              onUpdateRoutes?.([...routes, newRoute]);
              onSelectActiveRoute?.(newId);
            }}
            className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white flex items-center gap-1 shrink-0 shadow transition"
          >
            <span>➕ 新增河流</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const newId = `road-${Date.now()}`;
              const newRoute: TrafficRoute = {
                id: newId,
                name: `新道路 #${routes.filter(r => r.type === 'road').length + 1}`,
                type: 'road',
                density: 3,
                speed: 1.0,
                points: [
                  { x: 40, y: 50 },
                  { x: 60, y: 50 },
                ],
              };
              onUpdateRoutes?.([...routes, newRoute]);
              onSelectActiveRoute?.(newId);
            }}
            className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white flex items-center gap-1 shrink-0 shadow transition"
          >
            <span>➕ 新增道路</span>
          </button>

          <div className="w-px h-5 bg-slate-700 mx-1 shrink-0" />

          {/* Quick Copy JSON Button directly in top bar */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(JSON.stringify(routes, null, 2));
              alert('✅ 已成功複製路徑設定 JSON！請直接貼在對話框傳給我！');
            }}
            className="px-3 py-1.5 rounded-xl text-xs font-black bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center gap-1.5 shrink-0 shadow-lg ring-2 ring-emerald-300 transition"
          >
            <span>📋 複製路徑 JSON</span>
          </button>

          <div className="w-px h-5 bg-slate-700 mx-1 shrink-0" />

          {/* Toggle Hide/Show Waypoints Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowWaypoints((prev) => !prev);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition shadow-sm shrink-0 border ${
              showWaypoints
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-600'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 border-emerald-400 font-black ring-2 ring-emerald-300'
            }`}
            title="快捷鍵: 按鍵盤 H 鍵可隨時切換"
          >
            <span>{showWaypoints ? '👁️ 隱藏節點 (按 H)' : '🙈 顯示節點 (按 H)'}</span>
          </button>
        </div>
      )}

      {/* 2.5D Direct Drag Panning Map Canvas */}
      <div
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="relative w-full aspect-[16/9] max-w-6xl transition-transform duration-150 ease-out shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden border border-amber-900/30 transform-gpu shrink-0"
        style={{
          transform: `translate3d(${panX}px, ${panY}px, 0px) scale(${scale})`,
        }}
      >
        {/* 1. Overview Diorama Layer (Always in DOM for instant seamless cross-dissolve) */}
        <div
          className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out transform-gpu ${
            !selectedDistrictId
              ? 'opacity-100 scale-100 filter-none pointer-events-auto'
              : 'opacity-0 scale-125 blur-sm pointer-events-none'
          }`}
        >
          <Image
            src="/images/diorama/diorama_00_v17_no_car.jpg"
            alt="Northern Thailand Overview Diorama Map"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* 2. District Closeup Diorama Layer (Always in DOM so CSS transition executes in both directions) */}
        <div
          className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out transform-gpu ${
            selectedDistrictId
              ? 'opacity-100 scale-100 filter-none pointer-events-auto'
              : 'opacity-0 scale-90 blur-sm pointer-events-none'
          }`}
        >
          <Image
            src={currentDioramaArt}
            alt="District 3D Closeup Diorama Map"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Cinematic Camera Transition Vignette & Atmospheric Glow Flash */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
            selectedDistrictId
              ? 'bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/15'
              : 'bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/10'
          }`}
        />

        {/* Dynamic Traffic & Animations Layer (Smoothly fades in/out with overview) */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            !selectedDistrictId ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <TrafficLayer routes={routes} isEditorActive={isEditorActive && showWaypoints} />
        </div>

        {/* Waypoint Markers when Editor is Active & showWaypoints is true */}
        {isEditorActive && showWaypoints && (
          <div className="absolute inset-0 z-30 pointer-events-none">
            {routes.map((r) => {
              const isActiveRoute = r.id === activeRouteId;
              const pointColor =
                r.type === 'road'
                  ? 'bg-amber-400 border-amber-600'
                  : r.type === 'river'
                  ? 'bg-sky-400 border-sky-600'
                  : r.type === 'runway'
                  ? 'bg-pink-400 border-pink-600'
                  : 'bg-purple-400 border-purple-600';

              return r.points.map((pt, pIdx) => (
                <div
                  key={`${r.id}-pt-${pIdx}`}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    onSelectActiveRoute?.(r.id);
                    setDraggingWaypoint({ routeId: r.id, pointIndex: pIdx });
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectActiveRoute?.(r.id);
                  }}
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    handleDeleteWaypoint(r.id, pIdx);
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDeleteWaypoint(r.id, pIdx);
                  }}
                  className={`pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 shadow-md cursor-move flex items-center justify-center text-[8px] font-black transition-transform ${pointColor} ${
                    isActiveRoute ? 'ring-2 ring-white scale-125 z-40 text-slate-950' : 'opacity-70 scale-90 text-slate-900'
                  }`}
                  style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                  title={`${r.name} 節點 #${pIdx + 1} (${pt.x}, ${pt.y})\n點擊切換路線 / 拖曳移動 / 雙擊刪除`}
                >
                  {pIdx + 1}
                </div>
              ));
            })}
          </div>
        )}

        {/* Clean Frosted Lanna District Badges (Only displayed on Overview Map) */}
        {!selectedDistrictId &&
          DISTRICTS.map((dist) => {
            let coords = { top: '50%', left: '50%' };
            let icon = '📍';
            let shortNameZh = '分區';

            switch (dist.id) {
              case 'doi-suthep-district':
                coords = { top: '15%', left: '20%' };
                icon = '⛰️';
                shortNameZh = '素帖山';
                break;
              case 'nimman-district':
                coords = { top: '38%', left: '22%' };
                icon = '☕';
                shortNameZh = '尼曼';
                break;
              case 'mae-rim-district':
                coords = { top: '30%', left: '46%' };
                icon = '🐘';
                shortNameZh = '美林';
                break;
              case 'old-city-district':
                coords = { top: '50%', left: '46%' };
                icon = '🏛️';
                shortNameZh = '古城';
                break;
              case 'south-city-district':
                coords = { top: '66%', left: '46%' };
                icon = '🪙';
                shortNameZh = '瓦萊';
                break;
              case 'night-bazaar-district':
                coords = { top: '50%', left: '68%' };
                icon = '🏮';
                shortNameZh = '夜市';
                break;
              case 'hang-dong-district':
                coords = { top: '82%', left: '38%' };
                icon = '🪵';
                shortNameZh = '杭東';
                break;
              case 'mae-kampong-district':
              case 'san-kamphaeng-district':
                coords = { top: '64%', left: '80%' };
                icon = '🌿';
                shortNameZh = '湄康蓬';
                break;
              case 'chiang-dao-district':
                coords = { top: '12%', left: '44%' };
                icon = '🏔️';
                shortNameZh = '清道';
                break;
              case 'doi-inthanon-district':
                coords = { top: '88%', left: '20%' };
                icon = '👑';
                shortNameZh = '茵他儂';
                break;
              case 'chiang-rai-city-district':
                coords = { top: '22%', left: '58%' };
                icon = '🎨';
                shortNameZh = '清萊市區';
                break;
              case 'tea-mountain-district':
                coords = { top: '14%', left: '78%' };
                icon = '🍵';
                shortNameZh = '金三角';
                break;
              default:
                break;
            }

            const isSelected = selectedDistrictId === dist.id;
            // Strip any emoji from the display name to keep pure text
            const distName = (dist.name[language] || dist.name['zh-TW']).replace(/^[^\s\w\u4e00-\u9fa5]+\s*/, '').trim();

            return (
              <button
                key={dist.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectDistrict(dist.id);
                  onSelectRegion(dist.regionId);
                }}
                style={{ top: coords.top, left: coords.left }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-25 group cursor-pointer transition-all duration-300 active:scale-95 ${
                  isSelected ? 'scale-110 z-40' : 'hover:scale-105'
                }`}
              >
                <div
                  className={`flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full shadow-lg border backdrop-blur-md transition-all duration-300 ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-300 ring-2 ring-amber-400/50 shadow-amber-900/40'
                      : 'bg-[#1C140E]/88 hover:bg-[#2C1D13] text-amber-100 border-amber-400/40 ring-1 ring-amber-300/20 shadow-black/60'
                  }`}
                >
                  <span className="text-[11px] sm:text-sm leading-none shrink-0 drop-shadow">{icon}</span>
                  <span className={`text-[10px] sm:text-xs font-bold font-sans tracking-tight sm:tracking-wide whitespace-nowrap ${isSelected ? 'text-white font-extrabold' : 'text-amber-50'}`}>
                    <span className="sm:hidden">{language === 'zh-TW' ? shortNameZh : distName}</span>
                    <span className="hidden sm:inline">{distName}</span>
                  </span>
                </div>
              </button>
            );
          })}
      </div>
    </div>
  );
}

