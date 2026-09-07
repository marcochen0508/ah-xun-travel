export interface LiveWeatherData {
  locationId: string;
  locationName: { 'zh-TW': string; 'en': string; 'th': string };
  elevation: { 'zh-TW': string; 'en': string; 'th': string };
  current: {
    time: string;
    temperature: number;
    apparentTemperature: number;
    humidity: number;
    weatherCode: number;
    weatherText: { 'zh-TW': string; 'en': string; 'th': string };
    weatherIcon: string;
    windSpeed: number;
    precipitation: number;
    uvIndex: number;
  };
  airQuality: {
    pm25: number;
    pm10: number;
    aqi: number;
    aqiLevel: { 'zh-TW': string; 'en': string; 'th': string };
    aqiColor: string;
  };
  astronomy: {
    sunrise: string;
    sunset: string;
  };
  hourly: Array<{
    time: string;
    hourLabel: string;
    temp: number;
    rainProb: number;
    weatherCode: number;
  }>;
  daily: Array<{
    date: string;
    dayLabel: string;
    maxTemp: number;
    minTemp: number;
    rainProb: number;
    weatherCode: number;
    weatherText: string;
    weatherIcon: string;
  }>;
  travelTips: { 'zh-TW': string; 'en': string; 'th': string };
}

export interface WeatherLocation {
  id: string;
  name: { 'zh-TW': string; 'en': string; 'th': string };
  elevation: { 'zh-TW': string; 'en': string; 'th': string };
  lat: number;
  lon: number;
  tip: { 'zh-TW': string; 'en': string; 'th': string };
}

export const WEATHER_LOCATIONS: Record<string, WeatherLocation> = {
  'chiang-mai': {
    id: 'chiang-mai',
    name: { 'zh-TW': '清邁古城市區', 'en': 'Chiang Mai City', 'th': 'เมืองเชียงใหม่' },
    elevation: { 'zh-TW': '海拔 310m', 'en': 'Alt. 310m', 'th': 'ความสูง 310 ม.' },
    lat: 18.7883,
    lon: 98.9853,
    tip: {
      'zh-TW': '市區日間溫暖，建議穿著透氣涼爽服飾、防曬帽與隨身水瓶。',
      'en': 'Warm during the day. Light, breathable clothing and sun protection recommended.',
      'th': 'กลางวันอากาศอบอุ่น แนะนำสวมใส่เสื้อผ้าโปร่งสบายและทากันแดด'
    }
  },
  'doi-inthanon': {
    id: 'doi-inthanon',
    name: { 'zh-TW': '茵他儂國家公園 (泰國最高峰)', 'en': 'Doi Inthanon Summit', 'th': 'ยอดดอยอินทนนท์' },
    elevation: { 'zh-TW': '海拔 2,565m', 'en': 'Alt. 2,565m', 'th': 'ความสูง 2,565 ม.' },
    lat: 18.5888,
    lon: 98.4870,
    tip: {
      'zh-TW': '峰頂常年涼爽（氣溫比市區低 12~15°C），必備防風保暖外套與長褲！',
      'en': 'Cool year-round (12-15°C cooler than city). Bring a windbreaker and jacket!',
      'th': 'ยอดดอยอากาศหนาวเย็นตลอดปี แนะนำพกเสื้อกันหนาวและกางเกงขายาว'
    }
  },
  'doi-suthep': {
    id: 'doi-suthep',
    name: { 'zh-TW': '素帖山聖區', 'en': 'Doi Suthep Mountain', 'th': 'ดอยสุเทพ' },
    elevation: { 'zh-TW': '海拔 1,050m', 'en': 'Alt. 1,050m', 'th': 'ความสูง 1,050 ม.' },
    lat: 18.8049,
    lon: 98.9216,
    tip: {
      'zh-TW': '山區林蔭涼爽，參觀寺廟請留意著過膝長褲/長裙與著遮肩上衣。',
      'en': 'Pleasantly cool in the mountains. Please dress respectfully for temples.',
      'th': 'บนดอยร่มรื่นอากาศเย็น โปรดแต่งกายสุภาพเมื่อเข้าชมวัด'
    }
  },
  'mae-kampong': {
    id: 'mae-kampong',
    name: { 'zh-TW': '湄康蓬古村秘境', 'en': 'Mae Kampong Village', 'th': 'หมู่บ้านแม่กำปอง' },
    elevation: { 'zh-TW': '海拔 1,300m', 'en': 'Alt. 1,300m', 'th': 'ความสูง 1,300 ม.' },
    lat: 18.8660,
    lon: 99.3503,
    tip: {
      'zh-TW': '山谷溪流環繞，早晚氣溫微涼，適合散步與品嚐山間手沖咖啡。',
      'en': 'Streamside mountain village with cool mornings/evenings. Great for artisan coffee.',
      'th': 'หมู่บ้านริมลำธารอากาศเย็นสบายยามเช้าและค่ำ เหมาะกับการจิบกาแฟ'
    }
  },
  'chiang-rai': {
    id: 'chiang-rai',
    name: { 'zh-TW': '清萊市區與白廟', 'en': 'Chiang Rai City', 'th': 'เมืองเชียงราย' },
    elevation: { 'zh-TW': '海拔 390m', 'en': 'Alt. 390m', 'th': 'ความสูง 390 ม.' },
    lat: 19.9105,
    lon: 99.8406,
    tip: {
      'zh-TW': '參觀白廟與藍廟建議穿著舒適好穿脫之鞋履與防曬用品。',
      'en': 'Comfortable walking shoes and sun protection recommended for White/Blue Temples.',
      'th': 'แนะนำสวมรองเท้าที่เดินสะดวกและพกอุปกรณ์กันแดดเมื่อเที่ยววัดร่องขุ่น'
    }
  }
};

export function parseWeatherCode(code: number): {
  text: { 'zh-TW': string; 'en': string; 'th': string };
  icon: string;
} {
  switch (code) {
    case 0:
      return { text: { 'zh-TW': '晴空萬里', 'en': 'Clear Sky', 'th': 'ท้องฟ้าแจ่มใส' }, icon: '☀️' };
    case 1:
      return { text: { 'zh-TW': '晴時多雲', 'en': 'Mainly Clear', 'th': 'แดดออกเป็นส่วนใหญ่' }, icon: '🌤️' };
    case 2:
      return { text: { 'zh-TW': '多雲時晴', 'en': 'Partly Cloudy', 'th': 'มีเมฆเป็นบางส่วน' }, icon: '⛅' };
    case 3:
      return { text: { 'zh-TW': '陰天多雲', 'en': 'Overcast', 'th': 'เมฆมาก' }, icon: '☁️' };
    case 45:
    case 48:
      return { text: { 'zh-TW': '晨霧繚繞', 'en': 'Foggy / Mist', 'th': 'มีหมอก' }, icon: '🌫️' };
    case 51:
    case 53:
    case 55:
      return { text: { 'zh-TW': '局部細雨', 'en': 'Drizzle', 'th': 'ฝนตกปรอยๆ' }, icon: '🌦️' };
    case 61:
    case 63:
    case 65:
      return { text: { 'zh-TW': '短暫陣雨', 'en': 'Rain Showers', 'th': 'ฝนตก' }, icon: '🌧️' };
    case 80:
    case 81:
    case 82:
      return { text: { 'zh-TW': '熱帶驟雨', 'en': 'Heavy Showers', 'th': 'ฝนตกหนักเป็นช่วง' }, icon: '🌧️' };
    case 95:
    case 96:
    case 99:
      return { text: { 'zh-TW': '雷陣雨', 'en': 'Thunderstorm', 'th': 'พายุฝนฟ้าคะนอง' }, icon: '⛈️' };
    default:
      return { text: { 'zh-TW': '舒適宜人', 'en': 'Fair Weather', 'th': 'อากาศดี' }, icon: '🌤️' };
  }
}

export function parseAqi(pm25: number): {
  level: { 'zh-TW': string; 'en': string; 'th': string };
  color: string;
} {
  if (pm25 <= 15) {
    return { level: { 'zh-TW': '優良', 'en': 'Good', 'th': 'ดีมาก' }, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' };
  }
  if (pm25 <= 35) {
    return { level: { 'zh-TW': '良好', 'en': 'Moderate', 'th': 'ปานกลาง' }, color: 'text-amber-600 bg-amber-50 border-amber-200' };
  }
  if (pm25 <= 55) {
    return { level: { 'zh-TW': '敏感敏感', 'en': 'Sensitive', 'th': 'เริ่มมีผลต่อสุขภาพ' }, color: 'text-orange-600 bg-orange-50 border-orange-200' };
  }
  return { level: { 'zh-TW': '注意防護', 'en': 'Unhealthy', 'th': 'มีผลต่อสุขภาพ' }, color: 'text-rose-600 bg-rose-50 border-rose-200' };
}

// Map district ID to appropriate meteorological station
export function getDistrictWeatherKey(districtId: string | null): string {
  if (!districtId) return 'chiang-mai';
  if (districtId === 'doi-inthanon-district') return 'doi-inthanon';
  if (districtId === 'doi-suthep-district') return 'doi-suthep';
  if (districtId === 'san-kamphaeng-district') return 'mae-kampong';
  if (districtId === 'chiang-rai-city-district' || districtId === 'tea-mountain-district') return 'chiang-rai';
  return 'chiang-mai';
}

// In-memory weather cache
const weatherCache = new Map<string, { timestamp: number; data: LiveWeatherData }>();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 mins

export async function fetchLiveWeather(locationKey: string = 'chiang-mai'): Promise<LiveWeatherData | null> {
  const loc = WEATHER_LOCATIONS[locationKey] || WEATHER_LOCATIONS['chiang-mai'];
  const cached = weatherCache.get(loc.id);
  const now = Date.now();

  if (cached && now - cached.timestamp < CACHE_TTL_MS) {
    return cached.data;
  }

  try {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,surface_pressure&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,uv_index_max&timezone=Asia%2FBangkok`;
    const aqiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${loc.lat}&longitude=${loc.lon}&current=pm10,pm2_5,european_aqi&timezone=Asia%2FBangkok`;

    const [wRes, aRes] = await Promise.all([
      fetch(weatherUrl).then((r) => r.json()),
      fetch(aqiUrl).then((r) => r.json()).catch(() => null),
    ]);

    if (!wRes || !wRes.current) return null;

    const weatherParsed = parseWeatherCode(wRes.current.weather_code || 0);
    const pm25 = aRes?.current?.pm2_5 || 12;
    const pm10 = aRes?.current?.pm10 || 18;
    const aqiParsed = parseAqi(pm25);

    // Format 24-hour hourly
    const hourlyList = [];
    const currentHourIndex = new Date().getHours();
    for (let i = 0; i < 24; i++) {
      const idx = currentHourIndex + i;
      if (wRes.hourly && wRes.hourly.time[idx]) {
        const timeStr = wRes.hourly.time[idx];
        const dateObj = new Date(timeStr);
        const hourLabel = `${dateObj.getHours().toString().padStart(2, '0')}:00`;
        hourlyList.push({
          time: timeStr,
          hourLabel: i === 0 ? '現在' : hourLabel,
          temp: Math.round(wRes.hourly.temperature_2m[idx]),
          rainProb: wRes.hourly.precipitation_probability[idx] || 0,
          weatherCode: wRes.hourly.weather_code[idx] || 0,
        });
      }
    }

    // Format 7-day daily
    const dailyList = [];
    const dayNamesZh = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
    if (wRes.daily && wRes.daily.time) {
      for (let i = 0; i < wRes.daily.time.length && i < 7; i++) {
        const dStr = wRes.daily.time[i];
        const dObj = new Date(dStr);
        const dayLabel = i === 0 ? '今天' : i === 1 ? '明天' : dayNamesZh[dObj.getDay()];
        const dCode = wRes.daily.weather_code[i] || 0;
        const dParsed = parseWeatherCode(dCode);

        dailyList.push({
          date: dStr,
          dayLabel,
          maxTemp: Math.round(wRes.daily.temperature_2m_max[i]),
          minTemp: Math.round(wRes.daily.temperature_2m_min[i]),
          rainProb: wRes.daily.precipitation_probability_max[i] || 0,
          weatherCode: dCode,
          weatherText: dParsed.text['zh-TW'],
          weatherIcon: dParsed.icon,
        });
      }
    }

    const sunriseStr = wRes.daily?.sunrise?.[0]?.split('T')?.[1]?.slice(0, 5) || '06:10';
    const sunsetStr = wRes.daily?.sunset?.[0]?.split('T')?.[1]?.slice(0, 5) || '18:35';

    const resultData: LiveWeatherData = {
      locationId: loc.id,
      locationName: loc.name,
      elevation: loc.elevation,
      current: {
        time: wRes.current.time,
        temperature: Math.round(wRes.current.temperature_2m * 10) / 10,
        apparentTemperature: Math.round(wRes.current.apparent_temperature * 10) / 10,
        humidity: wRes.current.relative_humidity_2m,
        weatherCode: wRes.current.weather_code,
        weatherText: weatherParsed.text,
        weatherIcon: weatherParsed.icon,
        windSpeed: wRes.current.wind_speed_10m,
        precipitation: wRes.current.precipitation,
        uvIndex: Math.round(wRes.daily?.uv_index_max?.[0] || 6),
      },
      airQuality: {
        pm25: Math.round(pm25 * 10) / 10,
        pm10: Math.round(pm10 * 10) / 10,
        aqi: aRes?.current?.european_aqi || 30,
        aqiLevel: aqiParsed.level,
        aqiColor: aqiParsed.color,
      },
      astronomy: {
        sunrise: sunriseStr,
        sunset: sunsetStr,
      },
      hourly: hourlyList,
      daily: dailyList,
      travelTips: loc.tip,
    };

    weatherCache.set(loc.id, { timestamp: now, data: resultData });
    return resultData;
  } catch (e) {
    console.error('Failed to fetch live weather', e);
    return null;
  }
}
