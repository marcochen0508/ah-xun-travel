'use client';

import React, { useState } from 'react';
import { TrafficRoute, Waypoint, DEFAULT_TRAFFIC_ROUTES } from './trafficPaths';
import { Plus, Trash2, Copy, Check, RefreshCw, X, Eye, Edit3, Move, Car, Ship, Plane, Compass } from 'lucide-react';

interface PathEditorControlsProps {
  routes: TrafficRoute[];
  activeRouteId: string | null;
  isOpen: boolean;
  onToggleOpen: () => void;
  onSelectRoute: (id: string | null) => void;
  onUpdateRoutes: (newRoutes: TrafficRoute[]) => void;
  onResetRoutes: () => void;
}

export default function PathEditorControls({
  routes,
  activeRouteId,
  isOpen,
  onToggleOpen,
  onSelectRoute,
  onUpdateRoutes,
  onResetRoutes,
}: PathEditorControlsProps) {
  const [copied, setCopied] = useState(false);

  const activeRoute = routes.find((r) => r.id === activeRouteId);

  const handleAddRoute = (type: 'road' | 'river' | 'runway' | 'skyway') => {
    const newId = `${type}-${Date.now()}`;
    const typeLabel =
      type === 'road' ? '新道路' : type === 'river' ? '新河流' : type === 'runway' ? '新機場跑道' : '新空中航線';
    const newRoute: TrafficRoute = {
      id: newId,
      name: `${typeLabel} #${routes.length + 1}`,
      type,
      density: type === 'runway' ? 1 : type === 'river' ? 3 : 4,
      speed: type === 'skyway' ? 1.5 : 1,
      points: [
        { x: 30, y: 50 },
        { x: 70, y: 50 },
      ],
    };
    const updated = [...routes, newRoute];
    onUpdateRoutes(updated);
    onSelectRoute(newId);
  };

  const handleDeleteRoute = (id: string) => {
    const updated = routes.filter((r) => r.id !== id);
    onUpdateRoutes(updated);
    if (activeRouteId === id) {
      onSelectRoute(updated.length > 0 ? updated[0].id : null);
    }
  };

  const handleNameChange = (name: string) => {
    if (!activeRouteId) return;
    const updated = routes.map((r) => (r.id === activeRouteId ? { ...r, name } : r));
    onUpdateRoutes(updated);
  };

  const handleDensityChange = (density: number) => {
    if (!activeRouteId) return;
    const updated = routes.map((r) => (r.id === activeRouteId ? { ...r, density } : r));
    onUpdateRoutes(updated);
  };

  const handleSpeedChange = (speed: number) => {
    if (!activeRouteId) return;
    const updated = routes.map((r) => (r.id === activeRouteId ? { ...r, speed } : r));
    onUpdateRoutes(updated);
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(routes, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Trigger Button in Header/Toolbar */}
      <button
        onClick={onToggleOpen}
        className={`pointer-events-auto px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg backdrop-blur-md flex items-center gap-1.5 transition-all border ${
          isOpen
            ? 'bg-amber-500 text-slate-950 border-amber-400 ring-2 ring-amber-400/40'
            : 'bg-slate-900/80 text-white border-slate-700 hover:bg-slate-800'
        }`}
      >
        <Edit3 className="w-3.5 h-3.5" />
        {isOpen ? '關閉路徑標註工具' : '🛠️ 道路/河流/跑道 標註工具'}
      </button>

      {/* Editor Floating Sidebar Panel */}
      {isOpen && (
        <aside className="pointer-events-auto absolute right-4 sm:right-6 top-20 bottom-6 w-80 sm:w-96 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-50 text-white animate-in slide-in-from-right duration-200">
          {/* Header */}
          <div className="p-4 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-amber-500/20 text-amber-400 rounded-xl">
                <Move className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-100">動態路線標註工坊</h3>
                <p className="text-[10px] text-slate-400">點擊地圖添加節點 / 拖曳微調位置</p>
              </div>
            </div>
            <button onClick={onToggleOpen} className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Quick Add Buttons */}
            <div>
              <label className="text-[11px] font-semibold text-slate-400 mb-2 block">➕ 新增路線種類</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleAddRoute('road')}
                  className="px-2.5 py-2 bg-slate-800 hover:bg-amber-600/30 border border-slate-700 hover:border-amber-500 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
                >
                  <Car className="w-4 h-4 text-amber-400" />
                  + 汽車公路
                </button>
                <button
                  onClick={() => handleAddRoute('river')}
                  className="px-2.5 py-2 bg-slate-800 hover:bg-sky-600/30 border border-slate-700 hover:border-sky-500 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
                >
                  <Ship className="w-4 h-4 text-sky-400" />
                  + 河流船道
                </button>
                <button
                  onClick={() => handleAddRoute('runway')}
                  className="px-2.5 py-2 bg-slate-800 hover:bg-pink-600/30 border border-slate-700 hover:border-pink-500 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
                >
                  <Plane className="w-4 h-4 text-pink-400" />
                  + 機場起降
                </button>
                <button
                  onClick={() => handleAddRoute('skyway')}
                  className="px-2.5 py-2 bg-slate-800 hover:bg-purple-600/30 border border-slate-700 hover:border-purple-500 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
                >
                  <Compass className="w-4 h-4 text-purple-400" />
                  + 高空巡航
                </button>
              </div>
            </div>

            {/* Route List */}
            <div>
              <label className="text-[11px] font-semibold text-slate-400 mb-2 block">
                📋 現有路線清單 ({routes.length} 條)
              </label>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {routes.map((r) => {
                  const isSelected = r.id === activeRouteId;
                  const Icon =
                    r.type === 'road' ? Car : r.type === 'river' ? Ship : r.type === 'runway' ? Plane : Compass;
                  const badgeColor =
                    r.type === 'road'
                      ? 'text-amber-400'
                      : r.type === 'river'
                      ? 'text-sky-400'
                      : r.type === 'runway'
                      ? 'text-pink-400'
                      : 'text-purple-400';

                  return (
                    <div
                      key={r.id}
                      onClick={() => onSelectRoute(r.id)}
                      className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                        isSelected
                          ? 'bg-slate-800 border-amber-400 text-white ring-1 ring-amber-400/50'
                          : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <Icon className={`w-4 h-4 shrink-0 ${badgeColor}`} />
                        <span className="text-xs font-medium truncate">{r.name}</span>
                        <span className="text-[10px] bg-slate-700 px-1.5 py-0.5 rounded text-slate-400 shrink-0">
                          {r.points.length} 節點
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteRoute(r.id);
                        }}
                        className="p-1 hover:text-red-400 text-slate-500 rounded transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active Route Settings */}
            {activeRoute && (
              <div className="p-3 bg-slate-800/80 border border-slate-700 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">當前選中路線編輯</span>
                  <span className="text-[10px] text-slate-400">可在地圖畫布直接拖曳節點</span>
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">路線名稱</label>
                  <input
                    type="text"
                    value={activeRoute.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">
                      載具數量: {activeRoute.density || 3}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={activeRoute.density || 3}
                      onChange={(e) => handleDensityChange(parseInt(e.target.value))}
                      className="w-full accent-amber-400"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">
                      行駛速度: {(activeRoute.speed || 1).toFixed(1)}x
                    </label>
                    <input
                      type="range"
                      min="0.2"
                      max="3"
                      step="0.1"
                      value={activeRoute.speed || 1}
                      onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
                      className="w-full accent-amber-400"
                    />
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                  <Move className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>
                    在地圖上點擊可<strong>新增節點</strong>，拖曳圓圈可<strong>移動定位</strong>。
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-3 bg-slate-800/80 border-t border-slate-700 flex items-center justify-between gap-2">
            <button
              onClick={onResetRoutes}
              className="px-3 py-1.5 rounded-xl border border-slate-700 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              恢復預設
            </button>
            <button
              onClick={handleCopyJSON}
              className="flex-1 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-md"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? '已複製 JSON 代碼！' : '複製路徑設定 JSON'}
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
