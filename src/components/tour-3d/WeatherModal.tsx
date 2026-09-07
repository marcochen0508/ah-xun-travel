'use client';

import React, { useState, useEffect } from 'react';
import {
  LiveWeatherData,
  WEATHER_LOCATIONS,
  fetchLiveWeather,
  getDistrictWeatherKey,
} from './weatherService';
import { Language } from './landmarkData';
import {
  Sun,
  CloudRain,
  Wind,
  Droplets,
  Sunrise,
  Sunset,
  ShieldAlert,
  Compass,
  X,
  Sparkles,
  Mountain,
  ThermometerSun,
  Info,
} from 'lucide-react';

interface WeatherModalProps {
  language: Language;
  selectedDistrictId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function WeatherModal({
  language,
  selectedDistrictId,
  isOpen,
  onClose,
}: WeatherModalProps) {
  const initialKey = getDistrictWeatherKey(selectedDistrictId);
  const [activeLocKey, setActiveLocKey] = useState<string>(initialKey);
  const [weatherData, setWeatherData] = useState<LiveWeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // Sync active station with selected district when opening
  useEffect(() => {
    const key = getDistrictWeatherKey(selectedDistrictId);
    setActiveLocKey(key);
  }, [selectedDistrictId, isOpen]);

  // Fetch weather data whenever activeLocKey changes
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchLiveWeather(activeLocKey).then((data) => {
      if (isMounted) {
        setWeatherData(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [activeLocKey]);

  if (!isOpen) return null;

  const locInfo = WEATHER_LOCATIONS[activeLocKey] || WEATHER_LOCATIONS['chiang-mai'];

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onWheel={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200 pointer-events-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        className="bg-white border border-lanna-gold/40 rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 font-sans pointer-events-auto"
      >
        {/* Lanna Cream & Gold Header */}
        <div className="p-4 sm:p-5 bg-lanna-cream border-b border-lanna-gold/30 text-lanna-coffee flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white border border-lanna-gold/40 flex items-center justify-center text-xl text-lanna-coffee shadow-sm">
              🌤️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lanna-gold text-xs font-bold">༺</span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-lanna-coffee tracking-wide">
                  {language === 'en'
                    ? 'Northern Thailand Live Meteorological Dashboard'
                    : language === 'th'
                    ? 'สถานีอุตุนิยมวิทยาแบบเรียลไทม์ล้านนา'
                    : '泰北雙城 即時氣象與空氣品質儀表板'}
                </h3>
                <span className="text-lanna-gold text-xs font-bold">༻</span>
              </div>
              <p className="text-xs text-lanna-coffee/80 font-medium">
                {language === 'en'
                  ? 'Realtime Satellite & European ECMWF Radar'
                  : language === 'th'
                  ? 'ข้อมูลดาวเทียมแบบเรียลไทม์และเรดาร์ยุโรป ECMWF'
                  : '歐洲中期氣象中心 (ECMWF) & 哥白尼空品衛星連線'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/80 hover:bg-white text-lanna-coffee transition border border-lanna-gold/30 shadow-sm"
            title={language === 'en' ? 'Close' : language === 'th' ? 'ปิด' : '關閉'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Location Switcher Tabs */}
        <div className="p-2.5 bg-lanna-cream/60 border-b border-lanna-gold/20 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-xs font-bold text-lanna-coffee px-2 shrink-0 flex items-center gap-1">
            <Mountain className="w-3.5 h-3.5 text-lanna-gold" />
            {language === 'en' ? 'Stations:' : language === 'th' ? 'สถานีตรวจวัด:' : '氣象測站:'}
          </span>
          {Object.values(WEATHER_LOCATIONS).map((loc) => {
            const isSelected = activeLocKey === loc.id;
            const elevationText = typeof loc.elevation === 'object' ? (loc.elevation[language] || loc.elevation['zh-TW']) : loc.elevation;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveLocKey(loc.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? 'bg-lanna-gold text-white border-lanna-gold shadow-md'
                    : 'bg-white text-lanna-coffee hover:bg-lanna-cream border-lanna-gold/20'
                }`}
              >
                <span>{loc.name[language] || loc.name['zh-TW']}</span>
                <span className="ml-1 text-[10px] opacity-80 font-normal">({elevationText})</span>
              </button>
            );
          })}
        </div>

        {/* Body Content */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 scrollbar-thin bg-lanna-cream/15 text-lanna-coffee">
          {loading || !weatherData ? (
            <div className="py-20 flex flex-col items-center justify-center gap-3 text-lanna-coffee/60">
              <div className="w-10 h-10 border-4 border-lanna-gold border-t-transparent rounded-full animate-spin" />
              <span className="text-sm font-bold font-serif text-lanna-coffee">
                {language === 'en' ? 'Syncing real-time satellite weather data...' : language === 'th' ? 'กำลังเชื่อมต่อข้อมูลดาวเทียมสภาพอากาศแบบเรียลไทม์...' : '正在同步連線泰北即時衛星氣象資料...'}
              </span>
            </div>
          ) : (
            <>
              {/* Top Overview Metric Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {/* Main Temperature & Sky */}
                <div className="md:col-span-2 bg-gradient-to-br from-lanna-cream via-white to-lanna-cream/60 border border-lanna-gold/30 p-5 rounded-3xl flex flex-col justify-between shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold font-serif text-lanna-coffee">
                          {locInfo.name[language] || locInfo.name['zh-TW']}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-lanna-cream text-lanna-coffee font-bold border border-lanna-gold/40">
                          {typeof locInfo.elevation === 'object' ? (locInfo.elevation[language] || locInfo.elevation['zh-TW']) : locInfo.elevation}
                        </span>
                      </div>
                      <p className="text-xs text-lanna-coffee/70 mt-0.5">
                        {language === 'en' ? 'Observed Time: ' : language === 'th' ? 'เวลาสังเกตการณ์: ' : '泰國即時觀測時刻：'} {weatherData.current.time.replace('T', ' ')} (UTC+7)
                      </p>
                    </div>

                    <div className="text-4xl sm:text-5xl drop-shadow-sm">{weatherData.current.weatherIcon}</div>
                  </div>

                  <div className="mt-4 flex items-baseline gap-4">
                    <span className="text-4xl sm:text-5xl font-black text-lanna-coffee tracking-tight">
                      {weatherData.current.temperature}°C
                    </span>
                    <div className="text-sm text-lanna-coffee space-y-0.5">
                      <div className="font-bold flex items-center gap-1.5">
                        <span>{weatherData.current.weatherText[language] || weatherData.current.weatherText['zh-TW']}</span>
                        <span className="text-xs font-normal text-lanna-coffee/70">
                          {language === 'en' ? `(Feels like ${weatherData.current.apparentTemperature}°C)` : language === 'th' ? `(รู้สึกเหมือน ${weatherData.current.apparentTemperature}°C)` : `(體感 ${weatherData.current.apparentTemperature}°C)`}
                        </span>
                      </div>
                      <div className="text-xs text-lanna-coffee/70">
                        {language === 'en'
                          ? `Today Max ${weatherData.daily[0]?.maxTemp}°C / Min ${weatherData.daily[0]?.minTemp}°C`
                          : language === 'th'
                          ? `สูงสุดวันนี้ ${weatherData.daily[0]?.maxTemp}°C / ต่ำสุด ${weatherData.daily[0]?.minTemp}°C`
                          : `今日最高 ${weatherData.daily[0]?.maxTemp}°C / 最低 ${weatherData.daily[0]?.minTemp}°C`}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Air Quality AQI / PM2.5 Card */}
                <div className="bg-white border border-lanna-gold/25 p-4.5 rounded-3xl flex flex-col justify-between shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-serif text-lanna-coffee flex items-center gap-1">
                      <ShieldAlert className="w-4 h-4 text-lanna-gold" />
                      {language === 'en' ? 'Air Quality (AQI)' : language === 'th' ? 'ดัชนีคุณภาพอากาศ (AQI)' : '空氣品質指數 (AQI)'}
                    </span>
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full font-bold border"
                      style={{
                        backgroundColor: weatherData.airQuality.aqiColor + '20',
                        color: weatherData.airQuality.aqiColor,
                        borderColor: weatherData.airQuality.aqiColor + '60',
                      }}
                    >
                      {weatherData.airQuality.aqiLevel[language] || weatherData.airQuality.aqiLevel['zh-TW']}
                    </span>
                  </div>

                  <div className="my-2">
                    <span className="text-3xl font-black text-lanna-coffee">{weatherData.airQuality.aqi}</span>
                    <span className="text-xs text-lanna-coffee/60 ml-1.5 font-medium">European AQI</span>
                  </div>

                  <div className="space-y-1 text-xs text-lanna-coffee/80 border-t border-lanna-gold/15 pt-2">
                    <div className="flex justify-between">
                      <span>PM2.5:</span>
                      <span className="font-bold text-lanna-coffee">{weatherData.airQuality.pm25} µg/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PM10:</span>
                      <span className="font-bold text-lanna-coffee">{weatherData.airQuality.pm10} µg/m³</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 bg-white border border-lanna-gold/20 rounded-2xl flex items-center gap-3 shadow-sm">
                  <Droplets className="w-5 h-5 text-sky-600 shrink-0" />
                  <div>
                    <span className="text-[11px] text-lanna-coffee/70 block">
                      {language === 'en' ? 'Humidity' : language === 'th' ? 'ความชื้นสัมพัทธ์' : '相對濕度'}
                    </span>
                    <span className="text-sm font-bold text-lanna-coffee">{weatherData.current.humidity}%</span>
                  </div>
                </div>

                <div className="p-3 bg-white border border-lanna-gold/20 rounded-2xl flex items-center gap-3 shadow-sm">
                  <Wind className="w-5 h-5 text-lanna-green shrink-0" />
                  <div>
                    <span className="text-[11px] text-lanna-coffee/70 block">
                      {language === 'en' ? 'Wind Speed' : language === 'th' ? 'ความเร็วลม' : '地面風速'}
                    </span>
                    <span className="text-sm font-bold text-lanna-coffee">{weatherData.current.windSpeed} km/h</span>
                  </div>
                </div>

                <div className="p-3 bg-white border border-lanna-gold/20 rounded-2xl flex items-center gap-3 shadow-sm">
                  <Sun className="w-5 h-5 text-lanna-gold shrink-0" />
                  <div>
                    <span className="text-[11px] text-lanna-coffee/70 block">
                      {language === 'en' ? 'UV Index' : language === 'th' ? 'ดัชนีรังสียูวี' : '紫外線指數'}
                    </span>
                    <span className="text-sm font-bold text-lanna-coffee">UV {weatherData.current.uvIndex}</span>
                  </div>
                </div>

                <div className="p-3 bg-white border border-lanna-gold/20 rounded-2xl flex items-center gap-3 shadow-sm">
                  <Sunrise className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <span className="text-[11px] text-lanna-coffee/70 block">
                      {language === 'en' ? 'Sunrise / Sunset' : language === 'th' ? 'พระอาทิตย์ขึ้น / ตก' : '日出 / 日落'}
                    </span>
                    <span className="text-xs font-bold text-lanna-coffee">
                      {weatherData.astronomy.sunrise} / {weatherData.astronomy.sunset}
                    </span>
                  </div>
                </div>
              </div>

              {/* Travel Climate & Packing Tip Box */}
              <div className="p-4 bg-lanna-cream border border-lanna-gold/40 rounded-2xl flex items-start gap-3 shadow-sm">
                <Info className="w-5 h-5 text-lanna-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold font-serif text-lanna-coffee inline-block mb-0.5">
                    {language === 'en'
                      ? '【Ah-Xun Travel Tips & Climate Guide】：'
                      : language === 'th'
                      ? '【คำแนะนำการเดินทางและการแต่งกายโดย อาซุนทราเวล】：'
                      : '【阿勛泰北旅遊・分區穿著與氣候叮嚀】：'}
                  </h4>
                  <p className="text-xs text-lanna-coffee/90 leading-relaxed font-medium">
                    {locInfo.tip[language] || locInfo.tip['zh-TW']}
                  </p>
                </div>
              </div>

              {/* 24-Hour Precipitation Probability & Temp Radar */}
              <div className="bg-white border border-lanna-gold/20 rounded-2xl p-4 space-y-2.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold font-serif text-lanna-coffee flex items-center gap-1.5">
                    <CloudRain className="w-4 h-4 text-lanna-gold" />
                    {language === 'en'
                      ? '24-Hour Hourly Forecast & Rain Probability'
                      : language === 'th'
                      ? 'พยากรณ์อากาศรายชั่วโมงและโอกาสเกิดฝน 24 ชม.'
                      : '未來 24 小時逐時氣溫與降雨機率預報'}
                  </h4>
                  <span className="text-[10px] text-lanna-coffee/60">
                    {language === 'en' ? 'Updated Hourly' : language === 'th' ? 'อัปเดตทุกชั่วโมง' : '每小時更新'}
                  </span>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                  {weatherData.hourly.map((h, i) => {
                    let hourDisplay = h.hourLabel;
                    if (i === 0) {
                      hourDisplay = language === 'en' ? 'Now' : language === 'th' ? 'ตอนนี้' : '現在';
                    }
                    return (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-between p-2.5 rounded-xl bg-lanna-cream/50 border border-lanna-gold/20 min-w-[64px] shrink-0 text-center shadow-sm"
                      >
                        <span className="text-[11px] font-bold text-lanna-coffee/80">{hourDisplay}</span>
                        <span className="text-base my-1 font-black text-lanna-coffee">{h.temp}°</span>
                        <div className="flex items-center gap-0.5 text-[10px] text-lanna-coffee font-bold">
                          <span>🌧️</span>
                          <span>{h.rainProb}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 7-Day Outlook */}
              <div className="bg-white border border-lanna-gold/20 rounded-2xl p-4 space-y-2.5 shadow-sm">
                <h4 className="text-xs font-bold font-serif text-lanna-coffee flex items-center gap-1.5">
                  <ThermometerSun className="w-4 h-4 text-lanna-gold" />
                  {language === 'en'
                    ? '7-Day Extended Weather Outlook'
                    : language === 'th'
                    ? 'แนวโน้มสภาพอากาศล่วงหน้า 7 วัน'
                    : '未來 7 日天氣趨勢展望'}
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                  {weatherData.daily.map((d, i) => {
                    const dObj = new Date(d.date);
                    const dayNamesEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    const dayNamesTh = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];
                    const dayNamesZh = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];

                    let dayDisplay = d.dayLabel;
                    if (i === 0) {
                      dayDisplay = language === 'en' ? 'Today' : language === 'th' ? 'วันนี้' : '今天';
                    } else if (i === 1) {
                      dayDisplay = language === 'en' ? 'Tomorrow' : language === 'th' ? 'พรุ่งนี้' : '明天';
                    } else {
                      const dayIdx = dObj.getDay();
                      dayDisplay = language === 'en' ? dayNamesEn[dayIdx] : language === 'th' ? dayNamesTh[dayIdx] : dayNamesZh[dayIdx];
                    }

                    return (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-lanna-cream/50 border border-lanna-gold/20 flex flex-col items-center justify-between text-center gap-1 shadow-sm"
                      >
                        <span className="text-xs font-bold text-lanna-coffee">{dayDisplay}</span>
                        <span className="text-2xl my-0.5">{d.weatherIcon}</span>
                        <span className="text-[11px] font-bold text-lanna-coffee">
                          {d.maxTemp}° / <span className="text-lanna-coffee/60 font-normal">{d.minTemp}°</span>
                        </span>
                        <span className="text-[10px] text-lanna-coffee font-bold bg-white px-1.5 py-0.2 rounded-md border border-lanna-gold/20">
                          🌧️ {d.rainProb}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-lanna-cream border-t border-lanna-gold/30 flex items-center justify-between text-xs text-lanna-coffee/80 px-5">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-lanna-gold" />
            <span>
              {language === 'en'
                ? 'Data Source: ECMWF European Weather Forecast & Copernicus Air Quality'
                : language === 'th'
                ? 'แหล่งข้อมูล: พยากรณ์อากาศ ECMWF ยุโรป และดาวเทียม Copernicus'
                : '資料來源：ECMWF 歐洲中期天氣預報 & 哥白尼衛星空品'}
            </span>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-lanna-gold hover:bg-[#b38e47] text-white font-serif font-bold transition shadow-md"
          >
            {language === 'en' ? 'Close' : language === 'th' ? 'ปิด' : '關閉'}
          </button>
        </div>
      </div>
    </div>
  );
}
