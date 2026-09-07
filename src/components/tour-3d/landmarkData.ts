export type Language = 'zh-TW' | 'en' | 'th';

export interface MultiLangString {
  'zh-TW': string;
  'en': string;
  'th': string;
}

export interface Landmark {
  id: string;
  name: MultiLangString;
  regionId: 'chiang-mai' | 'chiang-rai';
  districtId: string;
  category: 'temple' | 'food' | 'cafe' | 'spa' | 'market' | 'night-market' | 'shopping' | 'experience' | 'nature' | 'route' | 'festival';
  position: [number, number, number]; // [x, y, z]
  image: string;
  tag: MultiLangString;
  description: MultiLangString;
  highlights: {
    'zh-TW': string[];
    'en': string[];
    'th': string[];
  };
  recommendedTime: MultiLangString;
  tips?: MultiLangString;
  charterNote?: MultiLangString;
  stampIcon: string;
  googleMapsQuery?: string;
  googleMapsUrl?: string;
}

export interface DistrictInfo {
  id: string;
  regionId: 'chiang-mai' | 'chiang-rai';
  name: MultiLangString;
}

export const DISTRICTS: DistrictInfo[] = [
  // --- 清邁分區 ---
  {
    id: 'old-city-district',
    regionId: 'chiang-mai',
    name: { 'zh-TW': '🏰 古城文化區', 'en': '🏰 Old City District', 'th': '🏰 เขตเมืองเก่า' },
  },
  {
    id: 'south-city-district',
    regionId: 'chiang-mai',
    name: { 'zh-TW': '🕌 古城南區', 'en': '🕌 South Old City', 'th': '🕌 เมืองเก่าตอนใต้' },
  },
  {
    id: 'nimman-district',
    regionId: 'chiang-mai',
    name: { 'zh-TW': '🛍️ 尼曼潮流區', 'en': '🛍️ Nimman Area', 'th': '🛍️ ย่านนิมมาน' },
  },
  {
    id: 'doi-suthep-district',
    regionId: 'chiang-mai',
    name: { 'zh-TW': '🌄 素貼山聖區', 'en': '🌄 Doi Suthep Area', 'th': '🌄 ดอยสุเทพ' },
  },
  {
    id: 'night-bazaar-district',
    regionId: 'chiang-mai',
    name: { 'zh-TW': '🌊 湄平河與瓦洛洛', 'en': '🌊 Ping River & Warorot', 'th': '🌊 แม่น้ำปิงและวโรรส' },
  },
  {
    id: 'mae-rim-district',
    regionId: 'chiang-mai',
    name: { 'zh-TW': '🌿 北郊梅林與美登', 'en': '🌿 North Mae Rim & Mae Taeng', 'th': '🌿 แม่ริมและแม่แตง' },
  },
  {
    id: 'hang-dong-district',
    regionId: 'chiang-mai',
    name: { 'zh-TW': '☕ 南郊杭東與美王休閒區', 'en': '☕ South Hang Dong & Mae Wang', 'th': '☕ อำเภอหางดง-แม่วาง (ตอนใต้)' },
  },
  {
    id: 'mae-kampong-district',
    regionId: 'chiang-mai',
    name: { 'zh-TW': '🏡 東郊湄康蓬區', 'en': '🏡 East Mae Kampong', 'th': '🏡 แม่กำปอง (ตอนตะวันออก)' },
  },

  {
    id: 'doi-inthanon-district',
    regionId: 'chiang-mai',
    name: { 'zh-TW': '⛰️ 因他農山', 'en': '⛰️ Doi Inthanon', 'th': '⛰️ ดอยอินทนนท์' },
  },

  // --- 清萊分區 ---
  {
    id: 'chiang-rai-city-district',
    regionId: 'chiang-rai',
    name: { 'zh-TW': '🏛️ 清萊', 'en': '🏛️ Chiang Rai', 'th': '🏛️ เชียงราย' },
  },
  {
    id: 'tea-mountain-district',
    regionId: 'chiang-rai',
    name: { 'zh-TW': '🍵 茶園與金三角', 'en': '🍵 Tea Plantations & Golden Triangle', 'th': '🍵 ไร่ชาและสามเหลี่ยมทองคำ' },
  },
];

export const LANDMARKS: Landmark[] = [
  {
    "id": "rad-rabbit-vegan-pizzeria-紅兔子純-1",
    "name": {
      "zh-TW": "Rad Rabbit Vegan Pizzeria (紅兔子純素披薩)",
      "en": "Rad Rabbit Vegan Pizzeria",
      "th": "Rad Rabbit Vegan Pizzeria, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "清邁首家全純素義式披薩專賣店！自製純素起司、植物肉香腸披薩與義大利麵",
      "en": "Discover Rad Rabbit Vegan Pizzeria — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Rad Rabbit Vegan Pizzeria, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁首家全純素義式披薩專賣店",
        "自製純素起司",
        "植物肉香腸披薩與義大利麵"
      ],
      "en": [
        "Rad Rabbit Vegan Pizzeria signature experience",
        "house-crafted plant-based cheeses",
        "Rad Rabbit Vegan Pizzeria signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Rad Rabbit Vegan Pizzeria, Chiang Mai",
        "ชีสวีแกนทำเอง",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Rad Rabbit Vegan Pizzeria, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城中心",
      "en": "Location highlight & travel tip for Rad Rabbit Vegan Pizzeria.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Rad Rabbit Vegan Pizzeria, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Rad Rabbit Vegan Pizzeria (紅兔子純素披薩)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Rad Rabbit Vegan Pizzeria with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Rad Rabbit Vegan Pizzeria, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Rad Rabbit Vegan Pizzeria, Chiang Mai"
  },
  {
    "id": "kao-soy-vegan-古城純素咖哩麵-2",
    "name": {
      "zh-TW": "Kao Soy Vegan (古城純素咖哩麵)",
      "en": "Kao Soy Vegan",
      "th": "Kao Soy Vegan, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "專利研發全純素泰北咖哩麵 (Khao Soi)、椰奶濃湯、自製素雞肉與素脆麵",
      "en": "Discover Kao Soy Vegan — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Kao Soy Vegan, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "專利研發全純素泰北咖哩麵 (Khao Soi)",
        "椰奶濃湯",
        "自製素雞肉與素脆麵"
      ],
      "en": [
        "Kao Soy Vegan signature experience",
        "Kao Soy Vegan signature experience",
        "Kao Soy Vegan signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kao Soy Vegan, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kao Soy Vegan, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kao Soy Vegan, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城素食咖哩麵首選",
      "en": "Location highlight & travel tip for Kao Soy Vegan.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Kao Soy Vegan, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Kao Soy Vegan (古城純素咖哩麵)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Kao Soy Vegan with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Kao Soy Vegan, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Kao Soy Vegan, Chiang Mai"
  },
  {
    "id": "morning-glory-vegan-cafe-3",
    "name": {
      "zh-TW": "Morning Glory Vegan Cafe (牽牛花純素咖啡)",
      "en": "Morning Glory Vegan Cafe",
      "th": "Morning Glory Vegan Cafe, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "古城南門老字號純素泰菜、純素冬蔭功、純素泰式炒河粉與香草春捲",
      "en": "Discover Morning Glory Vegan Cafe — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Morning Glory Vegan Cafe, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "古城南門老字號純素泰菜",
        "純素冬蔭功",
        "純素泰式炒河粉與香草春捲"
      ],
      "en": [
        "Morning Glory Vegan Cafe signature experience",
        "Morning Glory Vegan Cafe signature experience",
        "Morning Glory Vegan Cafe signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Morning Glory Vegan Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Morning Glory Vegan Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Morning Glory Vegan Cafe, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城南門內",
      "en": "Location highlight & travel tip for Morning Glory Vegan Cafe.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Morning Glory Vegan Cafe, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Morning Glory Vegan Cafe (牽牛花純素咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Morning Glory Vegan Cafe with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Morning Glory Vegan Cafe, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Morning Glory Vegan Cafe, Chiang Mai"
  },
  {
    "id": "munasare-organic-vegan-cafe-4",
    "name": {
      "zh-TW": "Begin Vegan (古城純素有機餐廳)",
      "en": "Begin Vegan",
      "th": "Begin Vegan Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "cafe",
    "googleMapsQuery": "Begin Vegan Chiang Mai",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "極簡木質風格有機純素咖啡館、純素植物肉定食、有機無毒蔬果汁",
      "en": "Discover Begin Vegan — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Begin Vegan Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "極簡木質風格有機純素咖啡館",
        "純素植物肉定食",
        "有機無毒蔬果汁"
      ],
      "en": [
        "Begin Vegan signature experience",
        "Begin Vegan signature experience",
        "Begin Vegan signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Begin Vegan Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Begin Vegan Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Begin Vegan Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城東側",
      "en": "Location highlight & travel tip for Begin Vegan.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Begin Vegan Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Begin Vegan (古城純素有機餐廳)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Begin Vegan with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Begin Vegan Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜"
  },
  {
    "id": "aum-vegetarian-restaurant-老字號木-5",
    "name": {
      "zh-TW": "Aum Vegetarian Restaurant (老字號木屋素食)",
      "en": "Aum Vegetarian Restaurant",
      "th": "Aum Vegetarian Restaurant, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "契迪龍寺旁三十年老字號！雙層木造榻榻米、招牌泰式素壽司、素咖哩與蔬食米粉",
      "en": "Discover Aum Vegetarian Restaurant — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Aum Vegetarian Restaurant, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "契迪龍寺旁三十年老字號",
        "雙層木造榻榻米",
        "招牌泰式素壽司",
        "素咖哩與蔬食米粉"
      ],
      "en": [
        "Aum Vegetarian Restaurant signature experience",
        "Aum Vegetarian Restaurant signature experience",
        "Aum Vegetarian Restaurant signature experience",
        "Aum Vegetarian Restaurant signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Aum Vegetarian Restaurant, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Aum Vegetarian Restaurant, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Aum Vegetarian Restaurant, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Aum Vegetarian Restaurant, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "契迪龍寺旁",
      "en": "Location highlight & travel tip for Aum Vegetarian Restaurant.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Aum Vegetarian Restaurant, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Aum Vegetarian Restaurant (老字號木屋素食)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Aum Vegetarian Restaurant with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Aum Vegetarian Restaurant, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Aum Vegetarian Restaurant, Chiang Mai"
  },
  {
    "id": "amrita-garden-日式養生純素餐館-6",
    "name": {
      "zh-TW": "Amrita Garden (日式養生純素餐館)",
      "en": "Amrita Garden",
      "th": "Amrita Garden, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "古城日式老宅、招牌純素天然發酵起司、純素漢堡與養生蔬食定食",
      "en": "Discover Amrita Garden — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Amrita Garden, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "古城日式老宅",
        "招牌純素天然發酵起司",
        "純素漢堡與養生蔬食定食"
      ],
      "en": [
        "Amrita Garden signature experience",
        "Amrita Garden signature experience",
        "Amrita Garden signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Amrita Garden, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Amrita Garden, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Amrita Garden, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城南側巷弄",
      "en": "Location highlight & travel tip for Amrita Garden.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Amrita Garden, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Amrita Garden (日式養生純素餐館)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Amrita Garden with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Amrita Garden, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Amrita Garden, Chiang Mai"
  },
  {
    "id": "bodhi-tree-cafe-菩提樹有機素食-7",
    "name": {
      "zh-TW": "Bodhi Tree Cafe (菩提樹有機素食)",
      "en": "Bodhi Tree Cafe",
      "th": "Bodhi Tree Cafe, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "庭園風格有機蔬食咖啡、泰式純素炒麵、有機果昔與瑜珈蔬食餐",
      "en": "Discover Bodhi Tree Cafe — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Bodhi Tree Cafe, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "庭園風格有機蔬食咖啡",
        "泰式純素炒麵",
        "有機果昔與瑜珈蔬食餐"
      ],
      "en": [
        "Bodhi Tree Cafe signature experience",
        "Bodhi Tree Cafe signature experience",
        "Bodhi Tree Cafe signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Bodhi Tree Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Bodhi Tree Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Bodhi Tree Cafe, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城西門附近",
      "en": "Location highlight & travel tip for Bodhi Tree Cafe.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Bodhi Tree Cafe, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Bodhi Tree Cafe (菩提樹有機素食)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Bodhi Tree Cafe with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Bodhi Tree Cafe, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Bodhi Tree Cafe, Chiang Mai"
  },
  {
    "id": "vsecret-vegan-free-food-8",
    "name": {
      "zh-TW": "V Secret Vegan (秘密純素泰式料理)",
      "en": "V Secret Vegan",
      "th": "V Secret Vegan, Changklan Rd, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "googleMapsQuery": "V Secret Vegan, Changklan Rd, Chiang Mai",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "清邁爆款全素小吃！現做純素泰式墨西哥捲餅、純素沙拉包與炸豆腐",
      "en": "Discover V Secret Vegan — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ V Secret Vegan, Changklan Rd, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁爆款全素小吃",
        "現做純素泰式墨西哥捲餅",
        "純素沙拉包與炸豆腐"
      ],
      "en": [
        "V Secret Vegan signature experience",
        "V Secret Vegan signature experience",
        "V Secret Vegan signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ V Secret Vegan, Changklan Rd, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ V Secret Vegan, Changklan Rd, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ V Secret Vegan, Changklan Rd, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城熱門平價素食",
      "en": "Location highlight & travel tip for V Secret Vegan.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ V Secret Vegan, Changklan Rd, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達V Secret Vegan (秘密純素泰式料理)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to V Secret Vegan with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว V Secret Vegan, Changklan Rd, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜"
  },
  {
    "id": "reform-kafe-by-green-tiger-9",
    "name": {
      "zh-TW": "Reform Kafe by Green Tiger (綠虎庭園純素餐廳)",
      "en": "Reform Kafe by Green Tiger",
      "th": "Reform Kafe by Green Tiger, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "清邁評價最高純素花園餐廳！極致植物肉漢堡、泰式純素綠咖哩與香草特調",
      "en": "Discover Reform Kafe by Green Tiger — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Reform Kafe by Green Tiger, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁評價最高純素花園餐廳",
        "極致植物肉漢堡",
        "泰式純素綠咖哩與香草特調"
      ],
      "en": [
        "Reform Kafe by Green Tiger signature experience",
        "Reform Kafe by Green Tiger signature experience",
        "Reform Kafe by Green Tiger signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Reform Kafe by Green Tiger, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Reform Kafe by Green Tiger, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Reform Kafe by Green Tiger, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城北門內",
      "en": "Location highlight & travel tip for Reform Kafe by Green Tiger.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Reform Kafe by Green Tiger, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Reform Kafe by Green Tiger (綠虎庭園純素餐廳)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Reform Kafe by Green Tiger with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Reform Kafe by Green Tiger, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Reform Kafe by Green Tiger, Chiang Mai"
  },
  {
    "id": "free-bird-cafe-飛鳥公益蔬食咖啡-10",
    "name": {
      "zh-TW": "Free Bird Cafe (飛鳥公益蔬食咖啡)",
      "en": "Free Bird Cafe",
      "th": "Free Bird Cafe, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "純素植物肉早午餐、有機果昔碗與泰北緬甸風味素食、難民公益選物店",
      "en": "Discover Free Bird Cafe — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Free Bird Cafe, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "純素植物肉早午餐",
        "有機果昔碗與泰北緬甸風味素食",
        "難民公益選物店"
      ],
      "en": [
        "Free Bird Cafe signature experience",
        "Free Bird Cafe signature experience",
        "Free Bird Cafe signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Free Bird Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Free Bird Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Free Bird Cafe, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城西北角",
      "en": "Location highlight & travel tip for Free Bird Cafe.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Free Bird Cafe, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Free Bird Cafe (飛鳥公益蔬食咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Free Bird Cafe with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Free Bird Cafe, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Free Bird Cafe, Chiang Mai"
  },
  {
    "id": "goodsouls-kitchen-11",
    "name": {
      "zh-TW": "Goodsouls Kitchen (好靈魂純素美饌)",
      "en": "Goodsouls Kitchen",
      "th": "Goodsouls Kitchen, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "米其林推薦！極致植物肉泰菜、全素漢堡、蔬食果昔碗與健康早午餐",
      "en": "Discover Goodsouls Kitchen — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Goodsouls Kitchen, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林推薦",
        "極致植物肉泰菜",
        "全素漢堡",
        "蔬食果昔碗與健康早午餐"
      ],
      "en": [
        "Goodsouls Kitchen signature experience",
        "Goodsouls Kitchen signature experience",
        "Goodsouls Kitchen signature experience",
        "Goodsouls Kitchen signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Goodsouls Kitchen, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Goodsouls Kitchen, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Goodsouls Kitchen, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Goodsouls Kitchen, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城西北角",
      "en": "Location highlight & travel tip for Goodsouls Kitchen.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Goodsouls Kitchen, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Goodsouls Kitchen (好靈魂純素美饌)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Goodsouls Kitchen with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Goodsouls Kitchen, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Goodsouls Kitchen, Chiang Mai"
  },
  {
    "id": "塔佩泰拳館-tha-phae-muay-thai-stadi-12",
    "name": {
      "zh-TW": "塔佩泰拳館 (Tha Phae Muay Thai Stadium)",
      "en": "Tha Phae Muay Thai Stadium",
      "th": "Tha Phae Muay Thai Stadium, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "泰拳競技展演",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁最古老正宗泰拳館！真槍實彈職業泰拳手對決、熱血刺激現場氛圍",
      "en": "Discover Tha Phae Muay Thai Stadium — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Tha Phae Muay Thai Stadium, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁最古老正宗泰拳館",
        "真槍實彈職業泰拳手對決",
        "熱血刺激現場氛圍"
      ],
      "en": [
        "Tha Phae Muay Thai Stadium signature experience",
        "Tha Phae Muay Thai Stadium signature experience",
        "Tha Phae Muay Thai Stadium signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Tha Phae Muay Thai Stadium, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Tha Phae Muay Thai Stadium, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Tha Phae Muay Thai Stadium, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "每晚 21:00 開賽",
      "en": "Location highlight & travel tip for Tha Phae Muay Thai Stadium.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Tha Phae Muay Thai Stadium, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達塔佩泰拳館 (Tha Phae Muay Thai Stadium)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Tha Phae Muay Thai Stadium with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Tha Phae Muay Thai Stadium, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Tha Phae Muay Thai Stadium, Chiang Mai"
  },
  {
    "id": "塔佩門-tha-phae-gate-13",
    "name": {
      "zh-TW": "塔佩門 (Tha Phae Gate)",
      "en": "Tha Phae Gate",
      "th": "Tha Phae Gate, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/塔佩門-tha-phae-gate-13.jpg",
    "tag": {
      "zh-TW": "古蹟/地標",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "蘭納古城磚紅城牆、和平鴿打卡聖地、週日夜市起點",
      "en": "Discover Tha Phae Gate — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Tha Phae Gate, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "蘭納古城磚紅城牆",
        "和平鴿打卡聖地",
        "週日夜市起點"
      ],
      "en": [
        "Tha Phae Gate signature experience",
        "Tha Phae Gate signature experience",
        "Tha Phae Gate signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Tha Phae Gate, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Tha Phae Gate, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Tha Phae Gate, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "早晨8點拍鴿子餵食打卡人少",
      "en": "Location highlight & travel tip for Tha Phae Gate.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Tha Phae Gate, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達塔佩門 (Tha Phae Gate)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Tha Phae Gate with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Tha Phae Gate, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Tha Phae Gate, Chiang Mai"
  },
  {
    "id": "契迪龍寺-wat-chedi-luang-14",
    "name": {
      "zh-TW": "契迪龍寺 (Wat Chedi Luang)",
      "en": "Wat Chedi Luang",
      "th": "Wat Chedi Luang, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/契迪龍寺-wat-chedi-luang-14.jpg",
    "tag": {
      "zh-TW": "古蹟/寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "六百年古老大佛塔遺蹟、大象護塔雕刻、城柱神廟",
      "en": "Discover Wat Chedi Luang — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Chedi Luang, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "六百年古老大佛塔遺蹟",
        "大象護塔雕刻",
        "城柱神廟"
      ],
      "en": [
        "Wat Chedi Luang signature experience",
        "Wat Chedi Luang signature experience",
        "Wat Chedi Luang signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Chedi Luang, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Chedi Luang, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Chedi Luang, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "門票 50 泰銖，注意穿著過膝過肩",
      "en": "Location highlight & travel tip for Wat Chedi Luang.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Chedi Luang, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達契迪龍寺 (Wat Chedi Luang)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Chedi Luang with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Chedi Luang, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Chedi Luang, Chiang Mai"
  },
  {
    "id": "帕邢寺-wat-phra-singh-15",
    "name": {
      "zh-TW": "帕邢寺 (Wat Phra Singh)",
      "en": "Wat Phra Singh",
      "th": "Wat Phra Singh, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/帕邢寺-wat-phra-singh-15.jpg",
    "tag": {
      "zh-TW": "古蹟/寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁地位最高等級皇家寺廟、金碧輝煌大殿與經典壁畫",
      "en": "Discover Wat Phra Singh — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Phra Singh, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁地位最高等級皇家寺廟",
        "金碧輝煌大殿與經典壁畫"
      ],
      "en": [
        "Wat Phra Singh signature experience",
        "Wat Phra Singh signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra Singh, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra Singh, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城西門起點",
      "en": "Location highlight & travel tip for Wat Phra Singh.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Phra Singh, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達帕邢寺 (Wat Phra Singh)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Phra Singh with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Phra Singh, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Phra Singh, Chiang Mai"
  },
  {
    "id": "清曼寺-wat-chiang-man-16",
    "name": {
      "zh-TW": "清曼寺 (Wat Chiang Man)",
      "en": "Wat Chiang Man",
      "th": "Wat Chiang Man, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清曼寺-wat-chiang-man-16.jpg",
    "tag": {
      "zh-TW": "古蹟/寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁第一座寺廟 (1296年建)、15隻石雕大象抬塔",
      "en": "Discover Wat Chiang Man — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Chiang Man, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁第一座寺廟 (1296年建)",
        "15隻石雕大象抬塔"
      ],
      "en": [
        "Wat Chiang Man signature experience",
        "Wat Chiang Man signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Chiang Man, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Chiang Man, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城東北角",
      "en": "Location highlight & travel tip for Wat Chiang Man.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Chiang Man, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清曼寺 (Wat Chiang Man)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Chiang Man with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Chiang Man, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Chiang Man, Chiang Mai"
  },
  {
    "id": "盼道寺-wat-phan-tao-17",
    "name": {
      "zh-TW": "盼道寺 (Wat Phan Tao)",
      "en": "Wat Phan Tao",
      "th": "Wat Phan Tao, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/盼道寺-wat-phan-tao-17.jpg",
    "tag": {
      "zh-TW": "古蹟/寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "全柚木打造蘭納古寺、水池與竹林祈福燈會",
      "en": "Discover Wat Phan Tao — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Phan Tao, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "全柚木打造蘭納古寺",
        "水池與竹林祈福燈會"
      ],
      "en": [
        "Wat Phan Tao signature experience",
        "Wat Phan Tao signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phan Tao, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phan Tao, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "契迪龍寺旁",
      "en": "Location highlight & travel tip for Wat Phan Tao.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Phan Tao, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達盼道寺 (Wat Phan Tao)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Phan Tao with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Phan Tao, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Phan Tao, Chiang Mai"
  },
  {
    "id": "羅摩利寺-wat-lok-moli-18",
    "name": {
      "zh-TW": "羅摩利寺 (Wat Lok Moli)",
      "en": "Wat Lok Moli",
      "th": "Wat Lok Moli, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/羅摩利寺-wat-lok-moli-18.jpg",
    "tag": {
      "zh-TW": "古蹟/寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "古城北護城河外古寺、精緻木雕大殿與古佛塔",
      "en": "Discover Wat Lok Moli — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Lok Moli, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "古城北護城河外古寺",
        "精緻木雕大殿與古佛塔"
      ],
      "en": [
        "Wat Lok Moli signature experience",
        "Wat Lok Moli signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Lok Moli, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Lok Moli, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "北門外",
      "en": "Location highlight & travel tip for Wat Lok Moli.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Lok Moli, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達羅摩利寺 (Wat Lok Moli)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Lok Moli with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Lok Moli, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Lok Moli, Chiang Mai"
  },
  {
    "id": "布帕蘭寺-wat-buppharam-泰囧寺-19",
    "name": {
      "zh-TW": "布帕蘭寺 (Wat Buppharam / 泰囧寺)",
      "en": "Wat Buppharam",
      "th": "Wat Buppharam, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/布帕蘭寺-wat-buppharam-泰囧寺-19.jpg",
    "tag": {
      "zh-TW": "古蹟/寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "電影《泰囧》取景地、唐老鴨雕像與皇室佛塔",
      "en": "Discover Wat Buppharam — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Buppharam, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "電影《泰囧》取景地",
        "唐老鴨雕像與皇室佛塔"
      ],
      "en": [
        "Wat Buppharam signature experience",
        "Wat Buppharam signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Buppharam, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Buppharam, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "塔佩門外東側",
      "en": "Location highlight & travel tip for Wat Buppharam.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Buppharam, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達布帕蘭寺 (Wat Buppharam / 泰囧寺)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Buppharam with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Buppharam, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Buppharam, Chiang Mai"
  },
  {
    "id": "三王紀念碑-three-kings-monument-20",
    "name": {
      "zh-TW": "三王紀念碑 (Three Kings Monument)",
      "en": "Three Kings Monument",
      "th": "Three Kings Monument, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/三王紀念碑-three-kings-monument-20.jpg",
    "tag": {
      "zh-TW": "歷史地標",
      "en": "Historic Old City Landmark",
      "th": "แลนด์มาร์กประวัติศาสตร์เมืองเก่า"
    },
    "description": {
      "zh-TW": "孟萊王、坤藍甘亨大帝與南蒙王三位建城國王銅像",
      "en": "Discover Three Kings Monument — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Three Kings Monument, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "孟萊王",
        "坤藍甘亨大帝與南蒙王三位建城國王銅像"
      ],
      "en": [
        "Three Kings Monument signature experience",
        "Three Kings Monument signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Three Kings Monument, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Three Kings Monument, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "0.5 小時",
      "en": "30 Mins",
      "th": "30 นาที"
    },
    "tips": {
      "zh-TW": "古城中心廣場",
      "en": "Location highlight & travel tip for Three Kings Monument.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Three Kings Monument, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達三王紀念碑 (Three Kings Monument)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Three Kings Monument with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Three Kings Monument, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Three Kings Monument, Chiang Mai"
  },
  {
    "id": "蘭納民俗博物館-lanna-folklife-museum-21",
    "name": {
      "zh-TW": "蘭納民俗博物館 (Lanna Folklife Museum)",
      "en": "Lanna Folklife Museum",
      "th": "Lanna Folklife Museum, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/蘭納民俗博物館-lanna-folklife-museum-21.jpg",
    "tag": {
      "zh-TW": "博物館",
      "en": "Art & Cultural Museum",
      "th": "พิพิธภัณฑ์ศิลปะและวัฒนธรรม"
    },
    "description": {
      "zh-TW": "展示蘭納王朝傳統生活、服飾、手作工藝與歷史文化",
      "en": "Discover Lanna Folklife Museum — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Lanna Folklife Museum, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "展示蘭納王朝傳統生活",
        "服飾",
        "手作工藝與歷史文化"
      ],
      "en": [
        "Lanna Folklife Museum signature experience",
        "Lanna Folklife Museum signature experience",
        "Lanna Folklife Museum signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Lanna Folklife Museum, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Lanna Folklife Museum, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Lanna Folklife Museum, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "三王像對面",
      "en": "Location highlight & travel tip for Lanna Folklife Museum.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Lanna Folklife Museum, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達蘭納民俗博物館 (Lanna Folklife Museum)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Lanna Folklife Museum with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Lanna Folklife Museum, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Lanna Folklife Museum, Chiang Mai"
  },
  {
    "id": "清邁文化藝術中心-chiang-mai-city-arts--22",
    "name": {
      "zh-TW": "清邁文化藝術中心 (Chiang Mai City Arts Centre)",
      "en": "Chiang Mai City Arts Centre",
      "th": "Chiang Mai City Arts Centre"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清邁文化藝術中心-chiang-mai-city-arts-22.jpg",
    "tag": {
      "zh-TW": "博物館",
      "en": "Art & Cultural Museum",
      "th": "พิพิธภัณฑ์ศิลปะและวัฒนธรรม"
    },
    "description": {
      "zh-TW": "殖民風格舊市政廳建築、清邁歷史演變展覽",
      "en": "Discover Chiang Mai City Arts Centre — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chiang Mai City Arts Centre จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "殖民風格舊市政廳建築",
        "清邁歷史演變展覽"
      ],
      "en": [
        "Chiang Mai City Arts Centre signature experience",
        "Chiang Mai City Arts Centre signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai City Arts Centre",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai City Arts Centre"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "三王廣場旁",
      "en": "Location highlight & travel tip for Chiang Mai City Arts Centre.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chiang Mai City Arts Centre"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁文化藝術中心 (Chiang Mai City Arts Centre)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chiang Mai City Arts Centre with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chiang Mai City Arts Centre อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Chiang Mai City Arts Centre"
  },
  {
    "id": "sp-chicken-古城平價烤雞-23",
    "name": {
      "zh-TW": "SP Chicken (古城平價烤雞)",
      "en": "SP Chicken",
      "th": "SP Chicken, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林必比登推薦！招牌蒜香釀草藥烤雞、青木瓜沙拉",
      "en": "Discover SP Chicken — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ SP Chicken, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林必比登推薦",
        "招牌蒜香釀草藥烤雞",
        "青木瓜沙拉"
      ],
      "en": [
        "SP Chicken signature experience",
        "SP Chicken signature experience",
        "SP Chicken signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ SP Chicken, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ SP Chicken, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ SP Chicken, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "中午熱門建議 11:30 前前往",
      "en": "Location highlight & travel tip for SP Chicken.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ SP Chicken, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達SP Chicken (古城平價烤雞)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to SP Chicken with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว SP Chicken, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "SP Chicken, Chiang Mai"
  },
  {
    "id": "roti-pa-day-帕蒂阿姨香蕉煎餅-24",
    "name": {
      "zh-TW": "Roti Pa Day (帕蒂阿姨香蕉煎餅)",
      "en": "Roti Pa Day",
      "th": "Roti Pa Day, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登小吃",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林必比登推薦！塔佩門外數十年老字號脆皮香蕉煎餅與竹炭巧克力煎餅",
      "en": "Discover Roti Pa Day — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Roti Pa Day, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林必比登推薦",
        "塔佩門外數十年老字號脆皮香蕉煎餅與竹炭巧克力煎餅"
      ],
      "en": [
        "Roti Pa Day signature experience",
        "Roti Pa Day signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Roti Pa Day, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Roti Pa Day, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "0.5 小時",
      "en": "30 Mins",
      "th": "30 นาที"
    },
    "tips": {
      "zh-TW": "每晚 18:00 開攤排隊",
      "en": "Location highlight & travel tip for Roti Pa Day.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Roti Pa Day, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Roti Pa Day (帕蒂阿姨香蕉煎餅)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Roti Pa Day with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Roti Pa Day, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Roti Pa Day, Chiang Mai"
  },
  {
    "id": "鳳飛飛豬腳飯-chang-phueak-pork-leg-25",
    "name": {
      "zh-TW": "鳳飛飛豬腳飯 (Chang Phueak Pork Leg)",
      "en": "Chang Phueak Pork Leg",
      "th": "Chang Phueak Pork Leg, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "老字號街頭美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "戴牛仔帽闆娘標誌、滷至軟爛入味的切盤豬腳與溏心蛋",
      "en": "Discover Chang Phueak Pork Leg — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chang Phueak Pork Leg, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "戴牛仔帽闆娘標誌",
        "滷至軟爛入味的切盤豬腳與溏心蛋"
      ],
      "en": [
        "Chang Phueak Pork Leg signature experience",
        "Chang Phueak Pork Leg signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chang Phueak Pork Leg, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chang Phueak Pork Leg, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "晚餐17:00開賣",
      "en": "Location highlight & travel tip for Chang Phueak Pork Leg.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chang Phueak Pork Leg, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達鳳飛飛豬腳飯 (Chang Phueak Pork Leg)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chang Phueak Pork Leg with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chang Phueak Pork Leg, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Chang Phueak Pork Leg, Chiang Mai"
  },
  {
    "id": "榮吉海南雞飯-kiat-ocha-26",
    "name": {
      "zh-TW": "榮吉海南雞飯 (Kiat Ocha)",
      "en": "Kiat Ocha",
      "th": "Kiat Ocha, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "老字號街頭美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "七十年老字號！清邁最經典的嫩雞肉、沙茶沙爹串燒",
      "en": "Discover Kiat Ocha — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Kiat Ocha, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "七十年老字號",
        "清邁最經典的嫩雞肉",
        "沙茶沙爹串燒"
      ],
      "en": [
        "Kiat Ocha signature experience",
        "Kiat Ocha signature experience",
        "Kiat Ocha signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kiat Ocha, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kiat Ocha, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kiat Ocha, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "三王紀念碑對面",
      "en": "Location highlight & travel tip for Kiat Ocha.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Kiat Ocha, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達榮吉海南雞飯 (Kiat Ocha)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Kiat Ocha with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Kiat Ocha, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Kiat Ocha, Chiang Mai"
  },
  {
    "id": "發榮海南雞飯-fah-tara-27",
    "name": {
      "zh-TW": "發榮海南雞飯 (Fah Tara)",
      "en": "Fah Tara",
      "th": "Fah Tara, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "傳統老店美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "三王紀念碑旁雙雄之一、獨門秘製黑醬油與香米雞飯",
      "en": "Discover Fah Tara — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Fah Tara, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "三王紀念碑旁雙雄之一",
        "獨門秘製黑醬油與香米雞飯"
      ],
      "en": [
        "Fah Tara signature experience",
        "Fah Tara signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Fah Tara, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Fah Tara, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "早餐午餐首選",
      "en": "Location highlight & travel tip for Fah Tara.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Fah Tara, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達發榮海南雞飯 (Fah Tara)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Fah Tara with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Fah Tara, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Fah Tara, Chiang Mai"
  },
  {
    "id": "老媽媽芒果糯米飯-mae-sai-芒果老店-28",
    "name": {
      "zh-TW": "老媽媽芒果糯米飯 (Mae Sai / 芒果老店)",
      "en": "Mae Sai",
      "th": "Mae Sai, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "特色甜點美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "鮮甜椰奶、香甜金煌芒果與軟糯香米",
      "en": "Discover Mae Sai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Sai, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "鮮甜椰奶",
        "香甜金煌芒果與軟糯香米"
      ],
      "en": [
        "Mae Sai signature experience",
        "Mae Sai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Sai, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Sai, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "0.5 小時",
      "en": "30 Mins",
      "th": "30 นาที"
    },
    "tips": {
      "zh-TW": "古城名店外帶首選",
      "en": "Location highlight & travel tip for Mae Sai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Sai, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達老媽媽芒果糯米飯 (Mae Sai / 芒果老店)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Sai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Sai, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Mae Sai, Chiang Mai"
  },
  {
    "id": "baan-landai-fine-thai-cuisine-29",
    "name": {
      "zh-TW": "Baan Landai (班蘭泰米其林泰菜)",
      "en": "Baan Landai",
      "th": "Baan Landai Fine Thai Cuisine, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登餐廳",
      "en": "Michelin Bib Gourmand Restaurant",
      "th": "ร้านอาหารแนะนำมิชลิน บิบ กูร์มองด์"
    },
    "description": {
      "zh-TW": "米其林推薦精緻泰北菜、炸排骨與泰式花卉特調",
      "en": "Discover Baan Landai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Baan Landai Fine Thai Cuisine, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林推薦精緻泰北菜",
        "炸排骨與泰式花卉特調"
      ],
      "en": [
        "Baan Landai signature experience",
        "Baan Landai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Landai Fine Thai Cuisine, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Landai Fine Thai Cuisine, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "需提前預約",
      "en": "Location highlight & travel tip for Baan Landai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Baan Landai Fine Thai Cuisine, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Baan Landai (班蘭泰米其林泰菜)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Baan Landai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Baan Landai Fine Thai Cuisine, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Baan Landai Fine Thai Cuisine, Chiang Mai"
  },
  {
    "id": "the-house-by-ginger-30",
    "name": {
      "zh-TW": "The House by Ginger (薑房私房米其林泰菜)",
      "en": "The House by Ginger",
      "th": "The House by Ginger, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林推薦美饌",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "華麗復古老宅、經典精緻泰北菜與熱帶調酒",
      "en": "Discover The House by Ginger — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ The House by Ginger, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "華麗復古老宅",
        "經典精緻泰北菜與熱帶調酒"
      ],
      "en": [
        "The House by Ginger signature experience",
        "The House by Ginger signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The House by Ginger, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The House by Ginger, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城東北角門外",
      "en": "Location highlight & travel tip for The House by Ginger.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ The House by Ginger, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達The House by Ginger (薑房私房米其林泰菜)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to The House by Ginger with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว The House by Ginger, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "The House by Ginger, Chiang Mai"
  },
  {
    "id": "fern-forest-cafe-蕨類森林咖啡-31",
    "name": {
      "zh-TW": "Fern Forest Cafe (蕨類森林咖啡)",
      "en": "Fern Forest Cafe",
      "th": "Fern Forest Cafe, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "網美景觀咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "古城內綠意央然蕨類花園庭園、手工千層蛋糕與早餐",
      "en": "Discover Fern Forest Cafe — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Fern Forest Cafe, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "古城內綠意央然蕨類花園庭園",
        "手工千層蛋糕與早餐"
      ],
      "en": [
        "Fern Forest Cafe signature experience",
        "Fern Forest Cafe signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Fern Forest Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Fern Forest Cafe, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "氣氛極放鬆",
      "en": "Location highlight & travel tip for Fern Forest Cafe.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Fern Forest Cafe, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Fern Forest Cafe (蕨類森林咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Fern Forest Cafe with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Fern Forest Cafe, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Fern Forest Cafe, Chiang Mai"
  },
  {
    "id": "akha-ama-coffee-phrasingh-32",
    "name": {
      "zh-TW": "Akha Ama Coffee (帕辛寺阿卡族自烘咖啡)",
      "en": "Akha Ama Coffee",
      "th": "Akha Ama Coffee, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "阿卡族自烘咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰北阿卡高山自產自烘咖啡豆、極簡木質空間",
      "en": "Discover Akha Ama Coffee — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Akha Ama Coffee, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰北阿卡高山自產自烘咖啡豆",
        "極簡木質空間"
      ],
      "en": [
        "Akha Ama Coffee signature experience",
        "Akha Ama Coffee signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Akha Ama Coffee, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Akha Ama Coffee, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "帕邢寺正對面",
      "en": "Location highlight & travel tip for Akha Ama Coffee.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Akha Ama Coffee, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Akha Ama Coffee (帕辛寺阿卡族自烘咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Akha Ama Coffee with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Akha Ama Coffee, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Akha Ama Coffee, Chiang Mai"
  },
  {
    "id": "sun-rays-cafe-33",
    "name": {
      "zh-TW": "Sun Rays Cafe (太陽光芒水果早午餐咖啡)",
      "en": "Sun Rays Cafe",
      "th": "Sun Rays Cafe, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "爆款網美早午餐",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "IG爆紅巨型水果法式吐司拼盤、滿滿新鮮熱帶水果",
      "en": "Discover Sun Rays Cafe — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Sun Rays Cafe, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "IG爆紅巨型水果法式吐司拼盤",
        "滿滿新鮮熱帶水果"
      ],
      "en": [
        "Sun Rays Cafe signature experience",
        "Sun Rays Cafe signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Sun Rays Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Sun Rays Cafe, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "建議早起排隊",
      "en": "Location highlight & travel tip for Sun Rays Cafe.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Sun Rays Cafe, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Sun Rays Cafe (太陽光芒水果早午餐咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Sun Rays Cafe with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Sun Rays Cafe, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Sun Rays Cafe, Chiang Mai"
  },
  {
    "id": "baan-phor-liang-meun-34",
    "name": {
      "zh-TW": "Baan Phor Liang Meun (泥塑神廟庭園咖啡)",
      "en": "Baan Phor Liang Meun",
      "th": "Phor Liang Meun Terracotta Arts Hotel, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/baan-phor-liang-meun-34.jpg",
    "googleMapsQuery": "Phor Liang Meun Terracotta Arts Hotel, Chiang Mai",
    "tag": {
      "zh-TW": "網美泥塑神廟咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "滿牆古老泥塑雕刻神廟庭園、宛如吳哥窟探險咖啡館",
      "en": "Discover Baan Phor Liang Meun — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Phor Liang Meun Terracotta Arts Hotel, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "滿牆古老泥塑雕刻神廟庭園",
        "宛如吳哥窟探險咖啡館"
      ],
      "en": [
        "Baan Phor Liang Meun signature experience",
        "Baan Phor Liang Meun signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Phor Liang Meun Terracotta Arts Hotel, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Phor Liang Meun Terracotta Arts Hotel, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城南側門內",
      "en": "Location highlight & travel tip for Baan Phor Liang Meun.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Phor Liang Meun Terracotta Arts Hotel, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Baan Phor Liang Meun (泥塑神廟庭園咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Baan Phor Liang Meun with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Phor Liang Meun Terracotta Arts Hotel, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕"
  },
  {
    "id": "ponganes-coffee-roaster-35",
    "name": {
      "zh-TW": "Ponganes Coffee Roaster (龐加尼斯精品自烘咖啡)",
      "en": "Ponganes Coffee Roaster",
      "th": "Ponganes Coffee Roaster, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "專業精品自烘咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁專業烘豆師聖地、單品手沖與義式特調專家",
      "en": "Discover Ponganes Coffee Roaster — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Ponganes Coffee Roaster, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁專業烘豆師聖地",
        "單品手沖與義式特調專家"
      ],
      "en": [
        "Ponganes Coffee Roaster signature experience",
        "Ponganes Coffee Roaster signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ponganes Coffee Roaster, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ponganes Coffee Roaster, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城東側巷弄",
      "en": "Location highlight & travel tip for Ponganes Coffee Roaster.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Ponganes Coffee Roaster, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Ponganes Coffee Roaster (龐加尼斯精品自烘咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Ponganes Coffee Roaster with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Ponganes Coffee Roaster, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Ponganes Coffee Roaster, Chiang Mai"
  },
  {
    "id": "baan-orjao-泰服體驗館-36",
    "name": {
      "zh-TW": "Baan Orjao (泰服體驗館)",
      "en": "Baan Orjao",
      "th": "Baan Orjao, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "傳統泰服體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "精緻泰國傳統服裝租借、妝髮造型與古城城牆外拍",
      "en": "Discover Baan Orjao — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Baan Orjao, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "精緻泰國傳統服裝租借",
        "妝髮造型與古城城牆外拍"
      ],
      "en": [
        "Baan Orjao signature experience",
        "Baan Orjao signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Orjao, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Orjao, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "塔佩門拍照必備",
      "en": "Location highlight & travel tip for Baan Orjao.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Baan Orjao, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Baan Orjao (泰服體驗館)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Baan Orjao with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Baan Orjao, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Baan Orjao, Chiang Mai"
  },
  {
    "id": "女子監獄按摩院-womens-massage-37",
    "name": {
      "zh-TW": "女子監獄按摩院 (Women's Massage)",
      "en": "Women's Massage",
      "th": "Women's Massage, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "spa",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/女子監獄按摩院-womens-massage-37.jpg",
    "tag": {
      "zh-TW": "正宗泰式按摩",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁職業訓練公益按摩、平價正宗泰式古法按摩",
      "en": "Discover Women's Massage — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Women's Massage, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁職業訓練公益按摩",
        "平價正宗泰式古法按摩"
      ],
      "en": [
        "Women's Massage signature experience",
        "Women's Massage signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Women's Massage, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Women's Massage, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "現場領號碼牌",
      "en": "Location highlight & travel tip for Women's Massage.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Women's Massage, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達女子監獄按摩院 (Women's Massage)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Women's Massage with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Women's Massage, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "googleMapsUrl": "https://share.google/5bGG7gL16KQAKhFul",
    "stampIcon": "💆",
    "googleMapsQuery": "Women's Massage, Chiang Mai"
  },
  {
    "id": "fah-lanna-spa-古城旗艦店-38",
    "name": {
      "zh-TW": "Fah Lanna Spa (古城旗艦店)",
      "en": "Fah Lanna Spa",
      "th": "Fah Lanna Spa, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "spa",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/fah-lanna-spa-古城旗艦店-38.jpg",
    "tag": {
      "zh-TW": "奢華頂級水療",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "獲獎無數蘭納水療庭園、精油按摩與草藥包熱敷",
      "en": "Discover Fah Lanna Spa — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Fah Lanna Spa, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "獲獎無數蘭納水療庭園",
        "精油按摩與草藥包熱敷"
      ],
      "en": [
        "Fah Lanna Spa signature experience",
        "Fah Lanna Spa signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Fah Lanna Spa, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Fah Lanna Spa, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "需提前官網預約",
      "en": "Location highlight & travel tip for Fah Lanna Spa.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Fah Lanna Spa, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Fah Lanna Spa (古城旗艦店)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Fah Lanna Spa with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Fah Lanna Spa, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "💆",
    "googleMapsQuery": "Fah Lanna Spa, Chiang Mai"
  },
  {
    "id": "週日步行街夜市-sunday-night-market-39",
    "name": {
      "zh-TW": "週日步行街夜市 (Sunday Night Market)",
      "en": "Sunday Night Market",
      "th": "Sunday Night Market, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "night-market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_night_market.jpg",
    "tag": {
      "zh-TW": "傳統夜市/購物",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "貫穿古城中心、數千攤手作工藝品與在地小吃",
      "en": "Discover Sunday Night Market — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Sunday Night Market, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "貫穿古城中心",
        "數千攤手作工藝品與在地小吃"
      ],
      "en": [
        "Sunday Night Market signature experience",
        "Sunday Night Market signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Sunday Night Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Sunday Night Market, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "週日 17:00 ~ 23:00 封街",
      "en": "Location highlight & travel tip for Sunday Night Market.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Sunday Night Market, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達週日步行街夜市 (Sunday Night Market)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Sunday Night Market with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Sunday Night Market, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛍️",
    "googleMapsQuery": "Sunday Night Market, Chiang Mai"
  },
  {
    "id": "松佩傳統市場-somphet-market-40",
    "name": {
      "zh-TW": "松佩傳統市場 (Somphet Market)",
      "en": "Somphet Market",
      "th": "Somphet Market, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_market.jpg",
    "tag": {
      "zh-TW": "傳統市場/烹飪食材",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "古城東北角傳統食材市場、泰式廚藝學校採買地標",
      "en": "Discover Somphet Market — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Somphet Market, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "古城東北角傳統食材市場",
        "泰式廚藝學校採買地標"
      ],
      "en": [
        "Somphet Market signature experience",
        "Somphet Market signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Somphet Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Somphet Market, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "早晨最熱鬧",
      "en": "Location highlight & travel tip for Somphet Market.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Somphet Market, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達松佩傳統市場 (Somphet Market)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Somphet Market with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Somphet Market, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🏮",
    "googleMapsQuery": "Somphet Market, Chiang Mai"
  },
  {
    "id": "asia-scenic-泰式烹飪學校-41",
    "name": {
      "zh-TW": "Asia Scenic 泰式烹飪學校",
      "en": "Asia Scenic",
      "th": "Asia Scenic, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "泰菜手作體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "阿勛熱門推薦！古城有機農場食材採買、手作冬蔭功與綠咖哩",
      "en": "Discover Asia Scenic — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Asia Scenic, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "阿勛熱門推薦",
        "古城有機農場食材採買",
        "手作冬蔭功與綠咖哩"
      ],
      "en": [
        "Asia Scenic signature experience",
        "Asia Scenic signature experience",
        "Asia Scenic signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Asia Scenic, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Asia Scenic, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Asia Scenic, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "半天",
      "en": "Half Day",
      "th": "ครึ่งวัน"
    },
    "tips": {
      "zh-TW": "含中文講解",
      "en": "Location highlight & travel tip for Asia Scenic.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Asia Scenic, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Asia Scenic 泰式烹飪學校，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Asia Scenic with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Asia Scenic, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Asia Scenic, Chiang Mai"
  },
  {
    "id": "lila-thai-massage-莉菈泰式按摩古城店-42",
    "name": {
      "zh-TW": "Lila Thai Massage (莉菈泰式按摩古城店)",
      "en": "Lila Thai Massage",
      "th": "Lila Thai Massage, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "spa",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/lila-thai-massage-莉菈泰式按摩古城店-42.jpg",
    "tag": {
      "zh-TW": "正宗泰式按摩",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "女子監獄前更生人員創業連鎖按摩、手法道地平價舒適",
      "en": "Discover Lila Thai Massage — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Lila Thai Massage, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "女子監獄前更生人員創業連鎖按摩",
        "手法道地平價舒適"
      ],
      "en": [
        "Lila Thai Massage signature experience",
        "Lila Thai Massage signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Lila Thai Massage, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Lila Thai Massage, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城內多家分店",
      "en": "Location highlight & travel tip for Lila Thai Massage.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Lila Thai Massage, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Lila Thai Massage (莉菈泰式按摩古城店)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Lila Thai Massage with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Lila Thai Massage, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "💆",
    "googleMapsQuery": "Lila Thai Massage, Chiang Mai"
  },
  {
    "id": "khao-tom-chang-phueak-昌卜克海鮮泡飯-43",
    "name": {
      "zh-TW": "Khao Tom Chang Phueak (昌卜克海鮮泡飯)",
      "en": "Khao Tom Chang Phueak",
      "th": "Khao Tom Chang Phueak, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林推薦美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林推薦！北門夜市深夜鮮美海鮮粥與香菇排骨泡飯",
      "en": "Discover Khao Tom Chang Phueak — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Khao Tom Chang Phueak, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林推薦",
        "北門夜市深夜鮮美海鮮粥與香菇排骨泡飯"
      ],
      "en": [
        "Khao Tom Chang Phueak signature experience",
        "Khao Tom Chang Phueak signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Tom Chang Phueak, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Tom Chang Phueak, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "北門夜市夜宵",
      "en": "Location highlight & travel tip for Khao Tom Chang Phueak.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Khao Tom Chang Phueak, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Khao Tom Chang Phueak (昌卜克海鮮泡飯)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Khao Tom Chang Phueak with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Khao Tom Chang Phueak, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Khao Tom Chang Phueak, Chiang Mai"
  },
  {
    "id": "na-phralan-古城景觀泰菜-44",
    "name": {
      "zh-TW": "Na Phralan (古城景觀泰菜)",
      "en": "Na Phralan",
      "th": "Na Phralan, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林推薦美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林推薦！位在帕邢寺門前、精緻泰國南部與北部風味料理",
      "en": "Discover Na Phralan — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Na Phralan, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林推薦",
        "位在帕邢寺門前",
        "精緻泰國南部與北部風味料理"
      ],
      "en": [
        "Na Phralan signature experience",
        "Na Phralan signature experience",
        "Na Phralan signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Na Phralan, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Na Phralan, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Na Phralan, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "帕邢寺前",
      "en": "Location highlight & travel tip for Na Phralan.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Na Phralan, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Na Phralan (古城景觀泰菜)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Na Phralan with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Na Phralan, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Na Phralan, Chiang Mai"
  },
  {
    "id": "khao-soi-sam-yuen-三元咖哩麵-45",
    "name": {
      "zh-TW": "Khao Soi Sam Yuen (三元咖哩麵)",
      "en": "Khao Soi Sam Yuen",
      "th": "Khao Soi Sam Yuen, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林推薦美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林推薦！古城邊界濃郁泰北牛肉與雞腿咖哩麵",
      "en": "Discover Khao Soi Sam Yuen — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Khao Soi Sam Yuen, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林推薦",
        "古城邊界濃郁泰北牛肉與雞腿咖哩麵"
      ],
      "en": [
        "Khao Soi Sam Yuen signature experience",
        "Khao Soi Sam Yuen signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi Sam Yuen, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi Sam Yuen, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "在地老字號",
      "en": "Location highlight & travel tip for Khao Soi Sam Yuen.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Khao Soi Sam Yuen, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Khao Soi Sam Yuen (三元咖哩麵)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Khao Soi Sam Yuen with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Khao Soi Sam Yuen, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Khao Soi Sam Yuen, Chiang Mai"
  },
  {
    "id": "asa-vegan-cafe-studio-46",
    "name": {
      "zh-TW": "Asa Vegan Cafe & Studio (麻布純素蔬食瑜珈咖啡)",
      "en": "Asa Vegan Cafe & Studio",
      "th": "Asa Vegan Cafe & Studio, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "湄平河畔木造瑜珈純素咖啡館！純素植物肉餐點、健康昔碗與樓上瑜珈課程",
      "en": "Discover Asa Vegan Cafe & Studio — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Asa Vegan Cafe & Studio, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "湄平河畔木造瑜珈純素咖啡館",
        "純素植物肉餐點",
        "健康昔碗與樓上瑜珈課程"
      ],
      "en": [
        "Asa Vegan Cafe & Studio signature experience",
        "Asa Vegan Cafe & Studio signature experience",
        "Asa Vegan Cafe & Studio signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Asa Vegan Cafe & Studio, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Asa Vegan Cafe & Studio, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Asa Vegan Cafe & Studio, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "湄平河西岸",
      "en": "Location highlight & travel tip for Asa Vegan Cafe & Studio.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Asa Vegan Cafe & Studio, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Asa Vegan Cafe & Studio (麻布純素蔬食瑜珈咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Asa Vegan Cafe & Studio with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Asa Vegan Cafe & Studio, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Asa Vegan Cafe & Studio, Chiang Mai"
  },
  {
    "id": "vegan-heaven-chiang-mai-47",
    "name": {
      "zh-TW": "Vegan Heaven (天堂純素美饌)",
      "en": "Vegan Heaven",
      "th": "Vegan Heaven, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "長康路夜市人氣純素餐廳！全純素泰式美式料理、純素吐司與炸花椰菜棒",
      "en": "Discover Vegan Heaven — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Vegan Heaven, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "長康路夜市人氣純素餐廳",
        "全純素泰式美式料理",
        "純素吐司與炸花椰菜棒"
      ],
      "en": [
        "Vegan Heaven signature experience",
        "Vegan Heaven signature experience",
        "Vegan Heaven signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Vegan Heaven, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Vegan Heaven, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Vegan Heaven, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "夜市周邊",
      "en": "Location highlight & travel tip for Vegan Heaven.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Vegan Heaven, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Vegan Heaven (天堂純素美饌)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Vegan Heaven with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Vegan Heaven, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Vegan Heaven, Chiang Mai"
  },
  {
    "id": "湄平河長尾船遊船體驗-mae-ping-river-crui-48",
    "name": {
      "zh-TW": "湄平河長尾船遊船體驗 (Mae Ping River Cruise)",
      "en": "Mae Ping River Cruise",
      "th": "Mae Ping River Cruise, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "水上觀光體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "乘坐傳統泰式長尾船沿湄平河順流而下、拜訪河畔百年農家與草藥園",
      "en": "Discover Mae Ping River Cruise — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Ping River Cruise, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "乘坐傳統泰式長尾船沿湄平河順流而下",
        "拜訪河畔百年農家與草藥園"
      ],
      "en": [
        "Mae Ping River Cruise signature experience",
        "Mae Ping River Cruise signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Ping River Cruise, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Ping River Cruise, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "Wat Chai Mongkol 碼頭搭乘",
      "en": "Location highlight & travel tip for Mae Ping River Cruise.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Ping River Cruise, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達湄平河長尾船遊船體驗 (Mae Ping River Cruise)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Ping River Cruise with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Ping River Cruise, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Mae Ping River Cruise, Chiang Mai"
  },
  {
    "id": "瓦洛洛傳統大市場-warorot-market-49",
    "name": {
      "zh-TW": "瓦洛洛傳統大市場 (Warorot Market)",
      "en": "Warorot Market",
      "th": "Warorot Market, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/瓦洛洛傳統大市場-warorot-market-49.jpg",
    "tag": {
      "zh-TW": "傳統大市場",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "百年大市場！泰北香腸、炸豬皮、乾果伴手禮採買大本營",
      "en": "Discover Warorot Market — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Warorot Market, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "百年大市場",
        "泰北香腸",
        "炸豬皮",
        "乾果伴手禮採買大本營"
      ],
      "en": [
        "Warorot Market signature experience",
        "Warorot Market signature experience",
        "Warorot Market signature experience",
        "Warorot Market signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Warorot Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Warorot Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Warorot Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Warorot Market, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "買伴手禮比古城便宜 20%",
      "en": "Location highlight & travel tip for Warorot Market.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Warorot Market, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達瓦洛洛傳統大市場 (Warorot Market)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Warorot Market with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Warorot Market, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🏮",
    "googleMapsQuery": "Warorot Market, Chiang Mai"
  },
  {
    "id": "龍眼花卉市場-ton-lamyai-market-50",
    "name": {
      "zh-TW": "龍眼花卉市場 (Ton Lamyai Market)",
      "en": "Ton Lamyai Market",
      "th": "Ton Lamyai Market, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_market.jpg",
    "tag": {
      "zh-TW": "傳統市場",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "24小時不打烊！鮮花瀑布與繽紛泰國蘭花批發",
      "en": "Discover Ton Lamyai Market — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Ton Lamyai Market, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "24小時不打烊",
        "鮮花瀑布與繽紛泰國蘭花批發"
      ],
      "en": [
        "Ton Lamyai Market signature experience",
        "Ton Lamyai Market signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ton Lamyai Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ton Lamyai Market, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "臨近瓦洛洛市場旁",
      "en": "Location highlight & travel tip for Ton Lamyai Market.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Ton Lamyai Market, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達龍眼花卉市場 (Ton Lamyai Market)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Ton Lamyai Market with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Ton Lamyai Market, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🏮",
    "googleMapsQuery": "Ton Lamyai Market, Chiang Mai"
  },
  {
    "id": "pa-thong-ko-ko-neng-動物造型油條-51",
    "name": {
      "zh-TW": "Pa Thong Ko Ko Neng (動物造型油條)",
      "en": "Pa Thong Ko Ko Neng",
      "th": "Pa Thong Ko Ko Neng, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登小吃",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林必比登推薦！瓦洛洛市場旁手作大象、恐龍、龍神造型炸油條",
      "en": "Discover Pa Thong Ko Ko Neng — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Pa Thong Ko Ko Neng, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林必比登推薦",
        "瓦洛洛市場旁手作大象",
        "恐龍",
        "龍神造型炸油條"
      ],
      "en": [
        "Pa Thong Ko Ko Neng signature experience",
        "Pa Thong Ko Ko Neng signature experience",
        "Pa Thong Ko Ko Neng signature experience",
        "Pa Thong Ko Ko Neng signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pa Thong Ko Ko Neng, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pa Thong Ko Ko Neng, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pa Thong Ko Ko Neng, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pa Thong Ko Ko Neng, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "0.5 小時",
      "en": "30 Mins",
      "th": "30 นาที"
    },
    "tips": {
      "zh-TW": "早晨排隊名店",
      "en": "Location highlight & travel tip for Pa Thong Ko Ko Neng.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Pa Thong Ko Ko Neng, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Pa Thong Ko Ko Neng (動物造型油條)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Pa Thong Ko Ko Neng with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Pa Thong Ko Ko Neng, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Pa Thong Ko Ko Neng, Chiang Mai"
  },
  {
    "id": "khao-soi-lamduan-fah-ham-七十年咖哩-52",
    "name": {
      "zh-TW": "Khao Soi Lamduan Fah Ham (七十年咖哩麵)",
      "en": "Khao Soi Lamduan Fah Ham",
      "th": "Khao Soi Lamduan Fah Ham, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林必比登推薦！清邁 1943 年創立第一家泰北咖哩麵創始老店",
      "en": "Discover Khao Soi Lamduan Fah Ham — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Khao Soi Lamduan Fah Ham, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林必比登推薦",
        "清邁 1943 年創立第一家泰北咖哩麵創始老店"
      ],
      "en": [
        "Khao Soi Lamduan Fah Ham signature experience",
        "Khao Soi Lamduan Fah Ham signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi Lamduan Fah Ham, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi Lamduan Fah Ham, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "湄平河東岸",
      "en": "Location highlight & travel tip for Khao Soi Lamduan Fah Ham.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Khao Soi Lamduan Fah Ham, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Khao Soi Lamduan Fah Ham (七十年咖哩麵)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Khao Soi Lamduan Fah Ham with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Khao Soi Lamduan Fah Ham, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Khao Soi Lamduan Fah Ham, Chiang Mai"
  },
  {
    "id": "草編一條街-chang-moi-road-53",
    "name": {
      "zh-TW": "草編一條街 (Chang Moi Road)",
      "en": "Chang Moi Road",
      "th": "Chang Moi Road, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "shopping",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_shopping.jpg",
    "tag": {
      "zh-TW": "文青打卡/購物",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "滿牆草編包、草編帽與藤編家具打卡街區",
      "en": "Discover Chang Moi Road — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chang Moi Road, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "滿牆草編包",
        "草編帽與藤編家具打卡街區"
      ],
      "en": [
        "Chang Moi Road signature experience",
        "Chang Moi Road signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chang Moi Road, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chang Moi Road, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "瓦洛洛市場附近",
      "en": "Location highlight & travel tip for Chang Moi Road.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chang Moi Road, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達草編一條街 (Chang Moi Road)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chang Moi Road with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chang Moi Road, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛍️",
    "googleMapsQuery": "Chang Moi Road, Chiang Mai"
  },
  {
    "id": "arscnx-artisan-coffee-shop-54",
    "name": {
      "zh-TW": "ARS.cnx (極簡工藝特調咖啡)",
      "en": "ARS.cnx",
      "th": "ARS.cnx, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "極簡特調咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "昌莫草編街必去！日式極簡水泥風、專業自烘手沖與特調咖啡",
      "en": "Discover ARS.cnx — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ ARS.cnx, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "昌莫草編街必去",
        "日式極簡水泥風",
        "專業自烘手沖與特調咖啡"
      ],
      "en": [
        "ARS.cnx signature experience",
        "ARS.cnx signature experience",
        "ARS.cnx signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ ARS.cnx, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ ARS.cnx, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ ARS.cnx, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "草編街拍照首選",
      "en": "Location highlight & travel tip for ARS.cnx.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ ARS.cnx, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達ARS.cnx (極簡工藝特調咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to ARS.cnx with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว ARS.cnx, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "ARS.cnx, Chiang Mai"
  },
  {
    "id": "self-coffee-55",
    "name": {
      "zh-TW": "Self Coffee (復古底片風底蘊咖啡)",
      "en": "Self Coffee",
      "th": "Self Coffee, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "復古底片風咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "復古黑膠唱片與霓虹燈底片風、招牌濃縮特調果汁咖啡",
      "en": "Discover Self Coffee — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Self Coffee, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "復古黑膠唱片與霓虹燈底片風",
        "招牌濃縮特調果汁咖啡"
      ],
      "en": [
        "Self Coffee signature experience",
        "Self Coffee signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Self Coffee, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Self Coffee, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城東門外",
      "en": "Location highlight & travel tip for Self Coffee.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Self Coffee, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Self Coffee (復古底片風底蘊咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Self Coffee with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Self Coffee, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Self Coffee, Chiang Mai"
  },
  {
    "id": "清邁長康路夜市-chiang-mai-night-bazaa-56",
    "name": {
      "zh-TW": "清邁長康路夜市 (Chiang Mai Night Bazaar)",
      "en": "Chiang Mai Night Bazaar",
      "th": "Chiang Mai Night Bazaar"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "night-market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清邁長康路夜市-chiang-mai-night-bazaa-56.jpg",
    "tag": {
      "zh-TW": "夜市/購物",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰北最著名夜市、阿努善市場 (Anusarn Market)、海鮮大排檔",
      "en": "Discover Chiang Mai Night Bazaar — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chiang Mai Night Bazaar จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰北最著名夜市",
        "阿努善市場 (Anusarn Market)",
        "海鮮大排檔"
      ],
      "en": [
        "Chiang Mai Night Bazaar signature experience",
        "Chiang Mai Night Bazaar signature experience",
        "Chiang Mai Night Bazaar signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai Night Bazaar",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai Night Bazaar",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai Night Bazaar"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "天天營業",
      "en": "Location highlight & travel tip for Chiang Mai Night Bazaar.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chiang Mai Night Bazaar"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁長康路夜市 (Chiang Mai Night Bazaar)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chiang Mai Night Bazaar with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chiang Mai Night Bazaar อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛍️",
    "googleMapsQuery": "Chiang Mai Night Bazaar"
  },
  {
    "id": "阿努善夜市-anusarn-night-market-57",
    "name": {
      "zh-TW": "阿努善夜市 (Anusarn Night Market)",
      "en": "Anusarn Night Market",
      "th": "Anusarn Night Market, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "night-market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_night_market.jpg",
    "tag": {
      "zh-TW": "傳統夜市/美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "長康路夜市核心、海鮮大排檔、人妖秀展演與手工藝品",
      "en": "Discover Anusarn Night Market — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Anusarn Night Market, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "長康路夜市核心",
        "海鮮大排檔",
        "人妖秀展演與手工藝品"
      ],
      "en": [
        "Anusarn Night Market signature experience",
        "Anusarn Night Market signature experience",
        "Anusarn Night Market signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Anusarn Night Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Anusarn Night Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Anusarn Night Market, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "晚餐夜生活首選",
      "en": "Location highlight & travel tip for Anusarn Night Market.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Anusarn Night Market, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達阿努善夜市 (Anusarn Night Market)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Anusarn Night Market with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Anusarn Night Market, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Anusarn Night Market, Chiang Mai"
  },
  {
    "id": "ploen-ruedee-night-market-58",
    "name": {
      "zh-TW": "Ploen Ruedee (草畔美食廣場文創夜市)",
      "en": "Ploen Ruedee",
      "th": "Ploen Ruedee, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "night-market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_night_market.jpg",
    "tag": {
      "zh-TW": "美食廣場夜市",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "草地露天啤酒花園、多國美食餐車與現場樂團表演",
      "en": "Discover Ploen Ruedee — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Ploen Ruedee, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "草地露天啤酒花園",
        "多國美食餐車與現場樂團表演"
      ],
      "en": [
        "Ploen Ruedee signature experience",
        "Ploen Ruedee signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ploen Ruedee, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ploen Ruedee, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "Night Bazaar 核心",
      "en": "Location highlight & travel tip for Ploen Ruedee.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Ploen Ruedee, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Ploen Ruedee (草畔美食廣場文創夜市)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Ploen Ruedee with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Ploen Ruedee, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Ploen Ruedee, Chiang Mai"
  },
  {
    "id": "woo-cafe-art-gallery-59",
    "name": {
      "zh-TW": "Woo Cafe & Art Gallery (沃歐花藝美學藝廊咖啡)",
      "en": "Woo Cafe & Art Gallery",
      "th": "Woo Cafe & Art Gallery, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "網美景觀咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "湄平河畔畫廊風綠意咖啡館、精緻泰式下午茶與生活選物",
      "en": "Discover Woo Cafe & Art Gallery — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Woo Cafe & Art Gallery, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "湄平河畔畫廊風綠意咖啡館",
        "精緻泰式下午茶與生活選物"
      ],
      "en": [
        "Woo Cafe & Art Gallery signature experience",
        "Woo Cafe & Art Gallery signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Woo Cafe & Art Gallery, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Woo Cafe & Art Gallery, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "氣氛極佳質感咖啡館",
      "en": "Location highlight & travel tip for Woo Cafe & Art Gallery.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Woo Cafe & Art Gallery, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Woo Cafe & Art Gallery (沃歐花藝美學藝廊咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Woo Cafe & Art Gallery with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Woo Cafe & Art Gallery, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Woo Cafe & Art Gallery, Chiang Mai"
  },
  {
    "id": "the-baristro-x-ping-river-60",
    "name": {
      "zh-TW": "The Baristro x Ping River (河畔極簡美學咖啡)",
      "en": "The Baristro x Ping River",
      "th": "The Baristro x Ping River, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "網美水岸咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "湄平河畔極簡幾何木質玻璃屋、水岸露天咖啡座與特調甜點",
      "en": "Discover The Baristro x Ping River — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ The Baristro x Ping River, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "湄平河畔極簡幾何木質玻璃屋",
        "水岸露天咖啡座與特調甜點"
      ],
      "en": [
        "The Baristro x Ping River signature experience",
        "The Baristro x Ping River signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The Baristro x Ping River, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The Baristro x Ping River, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "河畔景觀第一排",
      "en": "Location highlight & travel tip for The Baristro x Ping River.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ The Baristro x Ping River, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達The Baristro x Ping River (河畔極簡美學咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to The Baristro x Ping River with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว The Baristro x Ping River, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "The Baristro x Ping River, Chiang Mai"
  },
  {
    "id": "my-grandparents-house-老奶奶木屋-61",
    "name": {
      "zh-TW": "My Grandparent's House (老奶奶木屋)",
      "en": "My Grandparent's House",
      "th": "My Grandparent's House, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "古木屋河畔咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "百年泰式傳統雙層木屋、臨河涼亭與古早味泰式甜點",
      "en": "Discover My Grandparent's House — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ My Grandparent's House, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "百年泰式傳統雙層木屋",
        "臨河涼亭與古早味泰式甜點"
      ],
      "en": [
        "My Grandparent's House signature experience",
        "My Grandparent's House signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ My Grandparent's House, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ My Grandparent's House, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "平河西岸老街",
      "en": "Location highlight & travel tip for My Grandparent's House.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ My Grandparent's House, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達My Grandparent's House (老奶奶木屋)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to My Grandparent's House with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว My Grandparent's House, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "My Grandparent's House, Chiang Mai"
  },
  {
    "id": "the-riverside-bar-restaurant-62",
    "name": {
      "zh-TW": "The Riverside (湄平河畔經典音樂景觀餐廳)",
      "en": "The Riverside",
      "th": "The Riverside, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "美饌景觀餐廳",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "湄平河畔現場爵士樂演奏、水岸景觀晚餐與精釀啤酒",
      "en": "Discover The Riverside — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ The Riverside, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "湄平河畔現場爵士樂演奏",
        "水岸景觀晚餐與精釀啤酒"
      ],
      "en": [
        "The Riverside signature experience",
        "The Riverside signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The Riverside, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The Riverside, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "夜晚氣氛絕佳",
      "en": "Location highlight & travel tip for The Riverside.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ The Riverside, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達The Riverside (湄平河畔經典音樂景觀餐廳)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to The Riverside with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว The Riverside, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "The Riverside, Chiang Mai"
  },
  {
    "id": "good-view-chiang-mai-63",
    "name": {
      "zh-TW": "The Good View (好視野湄平河畔景觀餐廳)",
      "en": "The Good View",
      "th": "The Good View, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "河畔景觀餐廳",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁三十年老牌河畔美饌、現場樂團演唱與泰式海鮮料理",
      "en": "Discover The Good View — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ The Good View, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁三十年老牌河畔美饌",
        "現場樂團演唱與泰式海鮮料理"
      ],
      "en": [
        "The Good View signature experience",
        "The Good View signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The Good View, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The Good View, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "晚餐熱門",
      "en": "Location highlight & travel tip for The Good View.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ The Good View, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達The Good View (好視野湄平河畔景觀餐廳)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to The Good View with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว The Good View, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "The Good View, Chiang Mai"
  },
  {
    "id": "nakara-jardin-64",
    "name": {
      "zh-TW": "Nakara Jardin (納卡拉法式河畔庭園下午茶)",
      "en": "Nakara Jardin",
      "th": "Nakara Jardin, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "河畔法式下午茶",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "平河畔隱密法式花園、精緻司康、法式甜點與英式下午茶",
      "en": "Discover Nakara Jardin — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Nakara Jardin, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "平河畔隱密法式花園",
        "精緻司康",
        "法式甜點與英式下午茶"
      ],
      "en": [
        "Nakara Jardin signature experience",
        "Nakara Jardin signature experience",
        "Nakara Jardin signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Nakara Jardin, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Nakara Jardin, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Nakara Jardin, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "河畔極奢華體驗",
      "en": "Location highlight & travel tip for Nakara Jardin.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Nakara Jardin, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Nakara Jardin (納卡拉法式河畔庭園下午茶)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Nakara Jardin with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Nakara Jardin, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Nakara Jardin, Chiang Mai"
  },
  {
    "id": "khun-kaes-juice-bar-65",
    "name": {
      "zh-TW": "Khun Kae's Juice Bar (孔凱健康冷壓果昔名店)",
      "en": "Khun Kae's Juice Bar",
      "th": "Khun Kae's Juice Bar, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "健康果昔名店",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "瓦洛洛周邊超高人氣純天然現打果昔碗與熱帶水果杯",
      "en": "Discover Khun Kae's Juice Bar — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Khun Kae's Juice Bar, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "瓦洛洛周邊超高人氣純天然現打果昔碗與熱帶水果杯"
      ],
      "en": [
        "Khun Kae's Juice Bar signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khun Kae's Juice Bar, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "0.5 小時",
      "en": "30 Mins",
      "th": "30 นาที"
    },
    "tips": {
      "zh-TW": "健康甜點首選",
      "en": "Location highlight & travel tip for Khun Kae's Juice Bar.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Khun Kae's Juice Bar, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Khun Kae's Juice Bar (孔凱健康冷壓果昔名店)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Khun Kae's Juice Bar with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Khun Kae's Juice Bar, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Khun Kae's Juice Bar, Chiang Mai"
  },
  {
    "id": "泰香閣餐廳-the-service-1921-anantar-66",
    "name": {
      "zh-TW": "泰香閣餐廳 (The Service 1921 Anantara)",
      "en": "The Service 1921 Anantara",
      "th": "The Service 1921 Anantara, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "奢華水岸美饌",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "阿南塔拉度假村內英倫特務風格奢華河畔泰菜與下午茶",
      "en": "Discover The Service 1921 Anantara — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ The Service 1921 Anantara, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "阿南塔拉度假村內英倫特務風格奢華河畔泰菜與下午茶"
      ],
      "en": [
        "The Service 1921 Anantara signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The Service 1921 Anantara, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "湄平河東岸",
      "en": "Location highlight & travel tip for The Service 1921 Anantara.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ The Service 1921 Anantara, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達泰香閣餐廳 (The Service 1921 Anantara)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to The Service 1921 Anantara with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว The Service 1921 Anantara, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "The Service 1921 Anantara, Chiang Mai"
  },
  {
    "id": "lets-relax-spa-長康路-night-bazaa-67",
    "name": {
      "zh-TW": "Let's Relax Spa (長康路 Night Bazaar 店)",
      "en": "Let's Relax Spa (Night Bazaar)",
      "th": "เล็ทส์ รีแลกซ์ สปา (ไนท์บาซาร์)"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "spa",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/lets-relax-spa-長康路-night-bazaa-67.jpg",
    "tag": {
      "zh-TW": "知名連鎖水療",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國知名連鎖水療品牌、草藥球按摩與芒果糯米飯招待",
      "en": "Discover Let's Relax Spa (Night Bazaar) — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ เล็ทส์ รีแลกซ์ สปา (ไนท์บาซาร์) จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國知名連鎖水療品牌",
        "草藥球按摩與芒果糯米飯招待"
      ],
      "en": [
        "Let's Relax Spa (Night Bazaar) signature experience",
        "Let's Relax Spa (Night Bazaar) signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ เล็ทส์ รีแลกซ์ สปา (ไนท์บาซาร์)",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ เล็ทส์ รีแลกซ์ สปา (ไนท์บาซาร์)"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "夜市旁最便利",
      "en": "Location highlight & travel tip for Let's Relax Spa (Night Bazaar).",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ เล็ทส์ รีแลกซ์ สปา (ไนท์บาซาร์)"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Let's Relax Spa (長康路 Night Bazaar 店)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Let's Relax Spa (Night Bazaar) with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว เล็ทส์ รีแลกซ์ สปา (ไนท์บาซาร์) อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "💆",
    "googleMapsQuery": "長康路 Night Bazaar 店, Chiang Mai"
  },
  {
    "id": "卡拉爾夜市美食廣場-kalare-night-bazaar-68",
    "name": {
      "zh-TW": "卡拉爾夜市美食廣場 (Kalare Night Bazaar)",
      "en": "Kalare Night Bazaar",
      "th": "Kalare Night Bazaar, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "night-market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_night_market.jpg",
    "tag": {
      "zh-TW": "夜市美食",
      "en": "Night Bazaar Street Food",
      "th": "อาหารสตรีทฟู้ดตลาดกลางคืน"
    },
    "description": {
      "zh-TW": "長康路夜市室內美食廣場、泰式小吃與露天傳統舞蹈",
      "en": "Discover Kalare Night Bazaar — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Kalare Night Bazaar, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "長康路夜市室內美食廣場",
        "泰式小吃與露天傳統舞蹈"
      ],
      "en": [
        "Kalare Night Bazaar signature experience",
        "Kalare Night Bazaar signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kalare Night Bazaar, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kalare Night Bazaar, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "夜市核心",
      "en": "Location highlight & travel tip for Kalare Night Bazaar.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Kalare Night Bazaar, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達卡拉爾夜市美食廣場 (Kalare Night Bazaar)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Kalare Night Bazaar with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Kalare Night Bazaar, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Kalare Night Bazaar, Chiang Mai"
  },
  {
    "id": "kasetsorn-vegetarian-เกษตรสรณ--70",
    "name": {
      "zh-TW": "Kasetsorn Vegetarian (เกษตรสรณ์ 平價素食)",
      "en": "Kasetsorn Vegetarian",
      "th": "Kasetsorn Vegetarian (เกษตรสรณ์ )"
    },
    "regionId": "chiang-mai",
    "districtId": "south-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "清邁在地人最愛平價泰式素食自助餐！數十道純素泰式打拋素肉、素咖哩與炸物",
      "en": "Discover Kasetsorn Vegetarian — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Kasetsorn Vegetarian (เกษตรสรณ์ ) จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁在地人最愛平價泰式素食自助餐",
        "數十道純素泰式打拋素肉",
        "素咖哩與炸物"
      ],
      "en": [
        "Kasetsorn Vegetarian signature experience",
        "Kasetsorn Vegetarian signature experience",
        "Kasetsorn Vegetarian signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kasetsorn Vegetarian (เกษตรสรณ์ )",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kasetsorn Vegetarian (เกษตรสรณ์ )",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kasetsorn Vegetarian (เกษตรสรณ์ )"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "南門外平價首選",
      "en": "Location highlight & travel tip for Kasetsorn Vegetarian.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Kasetsorn Vegetarian (เกษตรสรณ์ )"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Kasetsorn Vegetarian (เกษตรสรณ์ 平價素食)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Kasetsorn Vegetarian with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Kasetsorn Vegetarian (เกษตรสรณ์ ) อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Kasetsorn Vegetarian, Chiang Mai"
  },
  {
    "id": "素攀純銀廟-wat-sri-suphan-71",
    "name": {
      "zh-TW": "素攀純銀廟 (Wat Sri Suphan)",
      "en": "Wat Sri Suphan",
      "th": "Wat Sri Suphan, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "south-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/素攀純銀廟-wat-sri-suphan-71.jpg",
    "tag": {
      "zh-TW": "古蹟/寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "全世界唯一純銀浮雕主殿！夜間點燈與金屬手工藝村",
      "en": "Discover Wat Sri Suphan — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Sri Suphan, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "全世界唯一純銀浮雕主殿",
        "夜間點燈與金屬手工藝村"
      ],
      "en": [
        "Wat Sri Suphan signature experience",
        "Wat Sri Suphan signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Sri Suphan, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Sri Suphan, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "銀廟主殿限男性進入，女眷可在外拍照",
      "en": "Location highlight & travel tip for Wat Sri Suphan.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Sri Suphan, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達素攀純銀廟 (Wat Sri Suphan)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Sri Suphan with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Sri Suphan, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Sri Suphan, Chiang Mai"
  },
  {
    "id": "週六瓦萊路銀器夜市-wua-lai-night-market-72",
    "name": {
      "zh-TW": "週六瓦萊路銀器夜市 (Wua Lai Night Market)",
      "en": "Wua Lai Night Market",
      "th": "Wua Lai Walking Street Saturday Market, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "south-city-district",
    "category": "night-market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_night_market.jpg",
    "tag": {
      "zh-TW": "傳統夜市/購物",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "沿著銀器街展開、傳統金屬工藝與飾品採買",
      "en": "Discover Wua Lai Night Market — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wua Lai Walking Street Saturday Market, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "沿著銀器街展開",
        "傳統金屬工藝與飾品採買"
      ],
      "en": [
        "Wua Lai Night Market signature experience",
        "Wua Lai Night Market signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wua Lai Walking Street Saturday Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wua Lai Walking Street Saturday Market, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "週六 17:00 開攤",
      "en": "Location highlight & travel tip for Wua Lai Night Market.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wua Lai Walking Street Saturday Market, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達週六瓦萊路銀器夜市 (Wua Lai Night Market)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wua Lai Night Market with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wua Lai Walking Street Saturday Market, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛍️",
    "googleMapsQuery": "Wua Lai Walking Street Saturday Market, Chiang Mai"
  },
  {
    "id": "松達寺-wat-suan-dok-白塔寺-73",
    "name": {
      "zh-TW": "松達寺 (Wat Suan Dok / 白塔寺)",
      "en": "Wat Suan Dok",
      "th": "Wat Suan Dok, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/松達寺-wat-suan-dok-白塔寺-73.jpg",
    "tag": {
      "zh-TW": "古蹟/寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "絕美純白皇室塔林與夕陽金光、蘭納歷代國王陵墓",
      "en": "Discover Wat Suan Dok — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Suan Dok, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "絕美純白皇室塔林與夕陽金光",
        "蘭納歷代國王陵墓"
      ],
      "en": [
        "Wat Suan Dok signature experience",
        "Wat Suan Dok signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Suan Dok, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Suan Dok, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古城西南門外",
      "en": "Location highlight & travel tip for Wat Suan Dok.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Suan Dok, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達松達寺 (Wat Suan Dok / 白塔寺)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Suan Dok with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Suan Dok, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Suan Dok, Chiang Mai"
  },
  {
    "id": "清邁國際機場-cnx-74",
    "name": {
      "zh-TW": "清邁國際機場 (CNX)",
      "en": "CNX",
      "th": "CNX, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "south-city-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "交通航站",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰北第一大空中樞紐、國際與國內線接送機",
      "en": "Discover CNX — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ CNX, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰北第一大空中樞紐",
        "國際與國內線接送機"
      ],
      "en": [
        "CNX signature experience",
        "CNX signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ CNX, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ CNX, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "離古城 10 分鐘",
      "en": "Location highlight & travel tip for CNX.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ CNX, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁國際機場 (CNX)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to CNX with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว CNX, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "CNX, Chiang Mai"
  },
  {
    "id": "central-chiang-mai-airport-商場-75",
    "name": {
      "zh-TW": "尚泰清邁機場購物中心 (Central Chiang Mai Airport Plaza)",
      "en": "Central Chiang Mai Airport Plaza",
      "th": "Central Chiangmai Airport, Mahidol Rd, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "south-city-district",
    "category": "shopping",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_shopping.jpg",
    "tag": {
      "zh-TW": "購物百貨",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "機場旁大型綜合商場、離境前伴手禮與泰國手標奶茶採買",
      "en": "Discover Central Chiang Mai Airport Plaza — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Central Chiangmai Airport, Mahidol Rd, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "機場旁大型綜合商場",
        "離境前伴手禮與泰國手標奶茶採買"
      ],
      "en": [
        "Central Chiang Mai Airport Plaza signature experience",
        "Central Chiang Mai Airport Plaza signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Central Chiangmai Airport, Mahidol Rd, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Central Chiangmai Airport, Mahidol Rd, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "地下一樓美食街極讚",
      "en": "Location highlight & travel tip for Central Chiang Mai Airport Plaza.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Central Chiangmai Airport, Mahidol Rd, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達尚泰清邁機場購物中心 (Central Chiang Mai Airport Plaza)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Central Chiang Mai Airport Plaza with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Central Chiangmai Airport, Mahidol Rd, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛍️",
    "googleMapsQuery": "Central Chiangmai Airport, Mahidol Rd, Chiang Mai"
  },
  {
    "id": "premium-outlet-chiang-mai-76",
    "name": {
      "zh-TW": "Premium Outlet Chiang Mai (清邁名牌暢貨中心)",
      "en": "Premium Outlet Chiang Mai",
      "th": "Premium Outlet Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "south-city-district",
    "category": "shopping",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_shopping.jpg",
    "tag": {
      "zh-TW": "折扣購物中心",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "美式 Outlet 購物村、各大運動品牌與服飾超值折扣",
      "en": "Discover Premium Outlet Chiang Mai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Premium Outlet Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "美式 Outlet 購物村",
        "各大運動品牌與服飾超值折扣"
      ],
      "en": [
        "Premium Outlet Chiang Mai signature experience",
        "Premium Outlet Chiang Mai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Premium Outlet Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Premium Outlet Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "機場往南公路旁",
      "en": "Location highlight & travel tip for Premium Outlet Chiang Mai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Premium Outlet Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Premium Outlet Chiang Mai (清邁名牌暢貨中心)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Premium Outlet Chiang Mai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Premium Outlet Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛍️",
    "googleMapsQuery": "Premium Outlet Chiang Mai"
  },
  {
    "id": "nim-city-daily-有機市集商場-77",
    "name": {
      "zh-TW": "Nim City Daily (有機市集商場)",
      "en": "Nim City Daily",
      "th": "Nim City Daily, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "south-city-district",
    "category": "shopping",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_shopping.jpg",
    "tag": {
      "zh-TW": "生活美食廣場",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "有機農夫超市 Rimping、小龍包與各式文青輕食餐廳",
      "en": "Discover Nim City Daily — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Nim City Daily, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "有機農夫超市 Rimping",
        "小龍包與各式文青輕食餐廳"
      ],
      "en": [
        "Nim City Daily signature experience",
        "Nim City Daily signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Nim City Daily, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Nim City Daily, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "機場旁生活圈",
      "en": "Location highlight & travel tip for Nim City Daily.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Nim City Daily, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Nim City Daily (有機市集商場)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Nim City Daily with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Nim City Daily, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Nim City Daily, Chiang Mai"
  },
  {
    "id": "瓦萊手工銀器村-wua-lai-silversmith-vi-78",
    "name": {
      "zh-TW": "瓦萊手工銀器村 (Wua Lai Silversmith Village)",
      "en": "Wua Lai Silversmith Village",
      "th": "Wualaisilp, Wua Lai Road, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "south-city-district",
    "category": "shopping",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_shopping.jpg",
    "tag": {
      "zh-TW": "工藝體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "百年銀器雕刻工坊、師傅現場打磨銀盤與銀首飾",
      "en": "Discover Wua Lai Silversmith Village — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wualaisilp, Wua Lai Road, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "百年銀器雕刻工坊",
        "師傅現場打磨銀盤與銀首飾"
      ],
      "en": [
        "Wua Lai Silversmith Village signature experience",
        "Wua Lai Silversmith Village signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wualaisilp, Wua Lai Road, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wualaisilp, Wua Lai Road, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "瓦萊路巷弄",
      "en": "Location highlight & travel tip for Wua Lai Silversmith Village.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wualaisilp, Wua Lai Road, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達瓦萊手工銀器村 (Wua Lai Silversmith Village)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wua Lai Silversmith Village with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wualaisilp, Wua Lai Road, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "googleMapsQuery": "Wualaisilp, Wua Lai Road, Chiang Mai",
    "stampIcon": "✨"
  },
  {
    "id": "kad-manee-market-湖畔夜市-79",
    "name": {
      "zh-TW": "Kad Manee Market (湖畔夜市)",
      "en": "Kad Manee Market",
      "th": "Kad Manee Market, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "south-city-district",
    "category": "night-market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_night_market.jpg",
    "tag": {
      "zh-TW": "傳統夜市/美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "機場旁湖畔景觀夜市、竹編涼亭與在地泰式小吃",
      "en": "Discover Kad Manee Market — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Kad Manee Market, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "機場旁湖畔景觀夜市",
        "竹編涼亭與在地泰式小吃"
      ],
      "en": [
        "Kad Manee Market signature experience",
        "Kad Manee Market signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kad Manee Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kad Manee Market, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "在地人最愛夜市",
      "en": "Location highlight & travel tip for Kad Manee Market.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Kad Manee Market, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Kad Manee Market (湖畔夜市)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Kad Manee Market with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Kad Manee Market, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Kad Manee Market, Chiang Mai"
  },
  {
    "id": "清邁南門小吃街-chiang-mai-gate-night--80",
    "name": {
      "zh-TW": "清邁南門小吃街 (Chiang Mai Gate Night Market)",
      "en": "Chiang Mai Gate Night Market",
      "th": "Chiang Mai Gate Night Market"
    },
    "regionId": "chiang-mai",
    "districtId": "south-city-district",
    "category": "night-market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_night_market.jpg",
    "tag": {
      "zh-TW": "夜市小吃",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "古城南門外夜間小吃攤、炸雞、芒果糯米飯與泰式炒河粉",
      "en": "Discover Chiang Mai Gate Night Market — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chiang Mai Gate Night Market จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "古城南門外夜間小吃攤",
        "炸雞",
        "芒果糯米飯與泰式炒河粉"
      ],
      "en": [
        "Chiang Mai Gate Night Market signature experience",
        "Chiang Mai Gate Night Market signature experience",
        "Chiang Mai Gate Night Market signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai Gate Night Market",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai Gate Night Market",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai Gate Night Market"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "天天營業",
      "en": "Location highlight & travel tip for Chiang Mai Gate Night Market.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chiang Mai Gate Night Market"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁南門小吃街 (Chiang Mai Gate Night Market)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chiang Mai Gate Night Market with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chiang Mai Gate Night Market อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Chiang Mai Gate Night Market"
  },
  {
    "id": "清邁南門傳統早市-chiang-mai-gate-morni-81",
    "name": {
      "zh-TW": "清邁南門傳統早市 (Chiang Mai Gate Morning Market)",
      "en": "Chiang Mai Gate Morning Market",
      "th": "Chiang Mai Gate Morning Market"
    },
    "regionId": "chiang-mai",
    "districtId": "south-city-district",
    "category": "market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_market.jpg",
    "tag": {
      "zh-TW": "傳統早市",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "古城南門清晨傳統早市、僧侶托缽祈福與道地泰式早餐",
      "en": "Discover Chiang Mai Gate Morning Market — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chiang Mai Gate Morning Market จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "古城南門清晨傳統早市",
        "僧侶托缽祈福與道地泰式早餐"
      ],
      "en": [
        "Chiang Mai Gate Morning Market signature experience",
        "Chiang Mai Gate Morning Market signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai Gate Morning Market",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai Gate Morning Market"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "早晨 06:00 ~ 09:00",
      "en": "Location highlight & travel tip for Chiang Mai Gate Morning Market.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chiang Mai Gate Morning Market"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁南門傳統早市 (Chiang Mai Gate Morning Market)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chiang Mai Gate Morning Market with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chiang Mai Gate Morning Market อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Chiang Mai Gate Morning Market"
  },
  {
    "id": "oasis-spa-綠野仙蹤蘭納館-82",
    "name": {
      "zh-TW": "Oasis Spa (綠野仙蹤蘭納館)",
      "en": "Oasis Spa",
      "th": "Oasis Spa, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "south-city-district",
    "category": "spa",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/oasis-spa-綠野仙蹤蘭納館-82.jpg",
    "tag": {
      "zh-TW": "奢華頂級水療",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "阿勛精選推薦！蘭納奢華庭園、四手按摩與精油水療",
      "en": "Discover Oasis Spa — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Oasis Spa, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "阿勛精選推薦",
        "蘭納奢華庭園",
        "四手按摩與精油水療"
      ],
      "en": [
        "Oasis Spa signature experience",
        "Oasis Spa signature experience",
        "Oasis Spa signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Oasis Spa, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Oasis Spa, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Oasis Spa, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "需提前預約",
      "en": "Location highlight & travel tip for Oasis Spa.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Oasis Spa, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Oasis Spa (綠野仙蹤蘭納館)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Oasis Spa with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Oasis Spa, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "💆",
    "googleMapsQuery": "Oasis Spa, Chiang Mai"
  },
  {
    "id": "one-nimman-尼曼一號-83",
    "name": {
      "zh-TW": "One Nimman (尼曼一號)",
      "en": "One Nimman",
      "th": "One Nimman, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "shopping",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_shopping.jpg",
    "tag": {
      "zh-TW": "購物商場/文青商場",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "歐式磚紅鐘樓廣場、文青手作市集、美食街與露天酒吧",
      "en": "Discover One Nimman — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ One Nimman, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "歐式磚紅鐘樓廣場",
        "文青手作市集",
        "美食街與露天酒吧"
      ],
      "en": [
        "One Nimman signature experience",
        "One Nimman signature experience",
        "One Nimman signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ One Nimman, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ One Nimman, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ One Nimman, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "拍照極美",
      "en": "Location highlight & travel tip for One Nimman.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ One Nimman, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達One Nimman (尼曼一號)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to One Nimman with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว One Nimman, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛍️",
    "googleMapsQuery": "One Nimman, Chiang Mai"
  },
  {
    "id": "maya-頂級購物中心-maya-mall-84",
    "name": {
      "zh-TW": "MAYA 頂級購物中心 (MAYA Mall)",
      "en": "MAYA Mall",
      "th": "MAYA Lifestyle Shopping Center, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "shopping",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_shopping.jpg",
    "tag": {
      "zh-TW": "購物商場/百貨地標",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "尼曼地標購物中心、24小時 C.A.M.P 空間、頂樓露天酒吧觀景",
      "en": "Discover MAYA Mall — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ MAYA Lifestyle Shopping Center, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "尼曼地標購物中心",
        "24小時 C.A.M.P 空間",
        "頂樓露天酒吧觀景"
      ],
      "en": [
        "MAYA Mall signature experience",
        "MAYA Mall signature experience",
        "MAYA Mall signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ MAYA Lifestyle Shopping Center, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ MAYA Lifestyle Shopping Center, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ MAYA Lifestyle Shopping Center, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "地下美食街極便宜",
      "en": "Location highlight & travel tip for MAYA Mall.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ MAYA Lifestyle Shopping Center, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達MAYA 頂級購物中心 (MAYA Mall)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to MAYA Mall with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว MAYA Lifestyle Shopping Center, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛍️",
    "googleMapsQuery": "MAYA Lifestyle Shopping Center, Chiang Mai"
  },
  {
    "id": "nihon-seishin-vegan-ramen-日本精神-85",
    "name": {
      "zh-TW": "Nihon Seishin Vegan Ramen (日本精神純素拉麵)",
      "en": "Nihon Seishin Vegan Ramen",
      "th": "Nihon Seishin Vegan Ramen, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "尼曼區極致日式純素拉麵！濃郁純素豆乳豚骨湯頭、純素叉燒與純素日式餃子",
      "en": "Discover Nihon Seishin Vegan Ramen — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Nihon Seishin Vegan Ramen, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "尼曼區極致日式純素拉麵",
        "濃郁純素豆乳豚骨湯頭",
        "純素叉燒與純素日式餃子"
      ],
      "en": [
        "Nihon Seishin Vegan Ramen signature experience",
        "Nihon Seishin Vegan Ramen signature experience",
        "Nihon Seishin Vegan Ramen signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Nihon Seishin Vegan Ramen, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Nihon Seishin Vegan Ramen, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Nihon Seishin Vegan Ramen, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼區知名純素拉麵",
      "en": "Location highlight & travel tip for Nihon Seishin Vegan Ramen.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Nihon Seishin Vegan Ramen, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Nihon Seishin Vegan Ramen (日本精神純素拉麵)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Nihon Seishin Vegan Ramen with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Nihon Seishin Vegan Ramen, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Nihon Seishin Vegan Ramen, Chiang Mai"
  },
  {
    "id": "the-vegano-chiang-mai-86",
    "name": {
      "zh-TW": "The Vegano (維加諾精品純素餐廳)",
      "en": "The Vegano",
      "th": "The Vegano, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "尼曼巷弄極簡美式純素漢堡、植物肉熱狗堡與純素奶昔",
      "en": "Discover The Vegano — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ The Vegano, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "尼曼巷弄極簡美式純素漢堡",
        "植物肉熱狗堡與純素奶昔"
      ],
      "en": [
        "The Vegano signature experience",
        "The Vegano signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The Vegano, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The Vegano, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼區",
      "en": "Location highlight & travel tip for The Vegano.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ The Vegano, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達The Vegano (維加諾精品純素餐廳)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to The Vegano with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว The Vegano, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "The Vegano, Chiang Mai"
  },
  {
    "id": "bee-vegan-清大學生平價純素餐廳-87",
    "name": {
      "zh-TW": "Bee Vegan (清大學生平價純素餐廳)",
      "en": "Bee Vegan",
      "th": "Bee Vegan, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "清大後門學生極力推薦高 CP 值平價純素泰菜、純素綠咖哩與炸素雞",
      "en": "Discover Bee Vegan — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Bee Vegan, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清大後門學生極力推薦高 CP 值平價純素泰菜",
        "純素綠咖哩與炸素雞"
      ],
      "en": [
        "Bee Vegan signature experience",
        "Bee Vegan signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Bee Vegan, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Bee Vegan, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清大後門",
      "en": "Location highlight & travel tip for Bee Vegan.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Bee Vegan, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Bee Vegan (清大學生平價純素餐廳)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Bee Vegan with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Bee Vegan, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Bee Vegan, Chiang Mai"
  },
  {
    "id": "anchan-vegetarian-restaurant-88",
    "name": {
      "zh-TW": "Anchan Vegetarian (蝶豆花有機蔬食餐廳)",
      "en": "Anchan Vegetarian",
      "th": "Anchan Vegetarian, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "尼曼區極致有機蔬食餐廳！蝶豆花天然藍色飯、泰式純素炒河粉與香草溫沙拉",
      "en": "Discover Anchan Vegetarian — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Anchan Vegetarian, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "尼曼區極致有機蔬食餐廳",
        "蝶豆花天然藍色飯",
        "泰式純素炒河粉與香草溫沙拉"
      ],
      "en": [
        "Anchan Vegetarian signature experience",
        "Anchan Vegetarian signature experience",
        "Anchan Vegetarian signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Anchan Vegetarian, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Anchan Vegetarian, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Anchan Vegetarian, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼區素食首選",
      "en": "Location highlight & travel tip for Anchan Vegetarian.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Anchan Vegetarian, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Anchan Vegetarian (蝶豆花有機蔬食餐廳)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Anchan Vegetarian with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Anchan Vegetarian, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Anchan Vegetarian, Chiang Mai"
  },
  {
    "id": "marscnx-火星沉浸式咖啡-89",
    "name": {
      "zh-TW": "MARS.cnx (火星沉浸式咖啡)",
      "en": "MARS.cnx",
      "th": "MARS.cnx, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "爆款網美咖啡",
      "en": "Trending Instagrammable Cafe",
      "th": "คาเฟ่ยอดนิยมถ่ายรูปสวย"
    },
    "description": {
      "zh-TW": "火星地質岩洞、宇宙太空艙與極光打卡背景、火星特調飲品",
      "en": "Discover MARS.cnx — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ MARS.cnx, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "火星地質岩洞",
        "宇宙太空艙與極光打卡背景",
        "火星特調飲品"
      ],
      "en": [
        "MARS.cnx signature experience",
        "MARS.cnx signature experience",
        "MARS.cnx signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ MARS.cnx, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ MARS.cnx, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ MARS.cnx, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "IG 熱門第一名",
      "en": "Location highlight & travel tip for MARS.cnx.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ MARS.cnx, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達MARS.cnx (火星沉浸式咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to MARS.cnx with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว MARS.cnx, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "MARS.cnx, Chiang Mai"
  },
  {
    "id": "pluto-cafe-暗黑外太空咖啡-90",
    "name": {
      "zh-TW": "PLUTO Cafe (暗黑外太空咖啡)",
      "en": "PLUTO Cafe",
      "th": "PLUTO Cafe, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "爆款網美咖啡",
      "en": "Trending Instagrammable Cafe",
      "th": "คาเฟ่ยอดนิยมถ่ายรูปสวย"
    },
    "description": {
      "zh-TW": "暗黑極簡水泥幾何建築、冥王星外太空風格與冷冽氛圍甜點",
      "en": "Discover PLUTO Cafe — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ PLUTO Cafe, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "暗黑極簡水泥幾何建築",
        "冥王星外太空風格與冷冽氛圍甜點"
      ],
      "en": [
        "PLUTO Cafe signature experience",
        "PLUTO Cafe signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ PLUTO Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ PLUTO Cafe, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "建築設計感極強",
      "en": "Location highlight & travel tip for PLUTO Cafe.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ PLUTO Cafe, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達PLUTO Cafe (暗黑外太空咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to PLUTO Cafe with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว PLUTO Cafe, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "PLUTO Cafe, Chiang Mai"
  },
  {
    "id": "transit-no8-日式跑道咖啡-91",
    "name": {
      "zh-TW": "Transit No.8 (日式跑道咖啡)",
      "en": "Transit No.8",
      "th": "Transit No.8, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "爆款網美咖啡",
      "en": "Trending Instagrammable Cafe",
      "th": "คาเฟ่ยอดนิยมถ่ายรูปสวย"
    },
    "description": {
      "zh-TW": "日式登機門與機場跑道設計、日式抹荼與特調冰淇淋咖啡",
      "en": "Discover Transit No.8 — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Transit No.8, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "日式登機門與機場跑道設計",
        "日式抹荼與特調冰淇淋咖啡"
      ],
      "en": [
        "Transit No.8 signature experience",
        "Transit No.8 signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Transit No.8, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Transit No.8, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼南側巷弄",
      "en": "Location highlight & travel tip for Transit No.8.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Transit No.8, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Transit No.8 (日式跑道咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Transit No.8 with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Transit No.8, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Transit No.8, Chiang Mai"
  },
  {
    "id": "khao-soi-nimman-尼曼咖哩麵-92",
    "name": {
      "zh-TW": "Khao Soi Nimman (尼曼咖哩麵)",
      "en": "Khao Soi Nimman",
      "th": "Khao Soi Nimman, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林必比登推薦！尼曼區最火爆豪華泰北咖哩麵、海鮮與牛腱雙拼",
      "en": "Discover Khao Soi Nimman — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Khao Soi Nimman, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林必比登推薦",
        "尼曼區最火爆豪華泰北咖哩麵",
        "海鮮與牛腱雙拼"
      ],
      "en": [
        "Khao Soi Nimman signature experience",
        "Khao Soi Nimman signature experience",
        "Khao Soi Nimman signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi Nimman, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi Nimman, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi Nimman, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼7巷",
      "en": "Location highlight & travel tip for Khao Soi Nimman.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Khao Soi Nimman, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Khao Soi Nimman (尼曼咖哩麵)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Khao Soi Nimman with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Khao Soi Nimman, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Khao Soi Nimman, Chiang Mai"
  },
  {
    "id": "guay-tiew-kua-gai-nimman-尼曼鐵板炒-93",
    "name": {
      "zh-TW": "Guay Tiew Kua Gai Nimman (尼曼鐵板炒雞麵)",
      "en": "Guay Tiew Kua Gai Nimman",
      "th": "Guay Tiew Kua Gai Nimman, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林必比登推薦！熱鐵板爆炒寬米粉與嫩雞肉、半熟蛋液焦香",
      "en": "Discover Guay Tiew Kua Gai Nimman — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Guay Tiew Kua Gai Nimman, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林必比登推薦",
        "熱鐵板爆炒寬米粉與嫩雞肉",
        "半熟蛋液焦香"
      ],
      "en": [
        "Guay Tiew Kua Gai Nimman signature experience",
        "Guay Tiew Kua Gai Nimman signature experience",
        "Guay Tiew Kua Gai Nimman signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Guay Tiew Kua Gai Nimman, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Guay Tiew Kua Gai Nimman, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Guay Tiew Kua Gai Nimman, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼6巷",
      "en": "Location highlight & travel tip for Guay Tiew Kua Gai Nimman.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Guay Tiew Kua Gai Nimman, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Guay Tiew Kua Gai Nimman (尼曼鐵板炒雞麵)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Guay Tiew Kua Gai Nimman with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Guay Tiew Kua Gai Nimman, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Guay Tiew Kua Gai Nimman, Chiang Mai"
  },
  {
    "id": "gopuek-kuakai-古樸炒雞麵-94",
    "name": {
      "zh-TW": "Gopuek Kua-KAI (古樸炒雞麵)",
      "en": "Gopuek Kua-KAI",
      "th": "Gopuek Kua-KAI, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林推薦美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林推薦！尼曼後方經典古早味鑊氣鐵板炒雞麵與泰式奶茶",
      "en": "Discover Gopuek Kua-KAI — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Gopuek Kua-KAI, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林推薦",
        "尼曼後方經典古早味鑊氣鐵板炒雞麵與泰式奶茶"
      ],
      "en": [
        "Gopuek Kua-KAI signature experience",
        "Gopuek Kua-KAI signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Gopuek Kua-KAI, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Gopuek Kua-KAI, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "早午餐名店",
      "en": "Location highlight & travel tip for Gopuek Kua-KAI.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Gopuek Kua-KAI, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Gopuek Kua-KAI (古樸炒雞麵)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Gopuek Kua-KAI with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Gopuek Kua-KAI, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Gopuek Kua-KAI, Chiang Mai"
  },
  {
    "id": "清大附近燕窩-泰榮清大老字號燕窩-95",
    "name": {
      "zh-TW": "清大附近燕窩 (泰榮/清大老字號燕窩)",
      "en": "Thai Rong Bird's Nest (CMU)",
      "th": "รังนกแท้ไทยรุ่ง (หน้า มช.)"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "特色名店美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "在地饕客激推！高 CP 值燉煮金絲燕窩與雪蛤甜品",
      "en": "Discover Thai Rong Bird's Nest (CMU) — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ รังนกแท้ไทยรุ่ง (หน้า มช.) จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "在地饕客激推",
        "高 CP 值燉煮金絲燕窩與雪蛤甜品"
      ],
      "en": [
        "Thai Rong Bird's Nest (CMU) signature experience",
        "Thai Rong Bird's Nest (CMU) signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ รังนกแท้ไทยรุ่ง (หน้า มช.)",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ รังนกแท้ไทยรุ่ง (หน้า มช.)"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清邁大學後門美食街",
      "en": "Location highlight & travel tip for Thai Rong Bird's Nest (CMU).",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ รังนกแท้ไทยรุ่ง (หน้า มช.)"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清大附近燕窩 (泰榮/清大老字號燕窩)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Thai Rong Bird's Nest (CMU) with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว รังนกแท้ไทยรุ่ง (หน้า มช.) อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "清大附近燕窩, Chiang Mai"
  },
  {
    "id": "khao-soi-mae-sai-泰北咖哩麵-96",
    "name": {
      "zh-TW": "Khao Soi Mae Sai (泰北咖哩麵)",
      "en": "Khao Soi Mae Sai",
      "th": "Khao Soi Mae Sai, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林必比登推薦！濃郁椰奶咖哩濃湯、炸脆麵與嫩雞腿",
      "en": "Discover Khao Soi Mae Sai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Khao Soi Mae Sai, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林必比登推薦",
        "濃郁椰奶咖哩濃湯",
        "炸脆麵與嫩雞腿"
      ],
      "en": [
        "Khao Soi Mae Sai signature experience",
        "Khao Soi Mae Sai signature experience",
        "Khao Soi Mae Sai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi Mae Sai, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi Mae Sai, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi Mae Sai, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "營業至 16:00 止",
      "en": "Location highlight & travel tip for Khao Soi Mae Sai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Khao Soi Mae Sai, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Khao Soi Mae Sai (泰北咖哩麵)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Khao Soi Mae Sai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Khao Soi Mae Sai, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Khao Soi Mae Sai, Chiang Mai"
  },
  {
    "id": "huen-muan-jai-帝王餐拼盤-97",
    "name": {
      "zh-TW": "Huen Muan Jai (帝王餐拼盤)",
      "en": "Huen Muan Jai",
      "th": "Huen Muan Jai, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "連年米其林推薦！經典泰北帝王餐小吃拼盤、炸豬皮與泰北香腸",
      "en": "Discover Huen Muan Jai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Huen Muan Jai, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "連年米其林推薦",
        "經典泰北帝王餐小吃拼盤",
        "炸豬皮與泰北香腸"
      ],
      "en": [
        "Huen Muan Jai signature experience",
        "Huen Muan Jai signature experience",
        "Huen Muan Jai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Huen Muan Jai, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Huen Muan Jai, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Huen Muan Jai, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "正宗泰北菜代表",
      "en": "Location highlight & travel tip for Huen Muan Jai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Huen Muan Jai, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Huen Muan Jai (帝王餐拼盤)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Huen Muan Jai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Huen Muan Jai, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Huen Muan Jai, Chiang Mai"
  },
  {
    "id": "cherng-doi-roast-chicken-98",
    "name": {
      "zh-TW": "Cherng Doi Roast Chicken (成多脆皮烤雞名店)",
      "en": "Cherng Doi Roast Chicken",
      "th": "Cherng Doi Roast Chicken, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "人氣燒烤美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "獨門脆皮烤雞 (Kai Thong)、脆皮外表與多汁雞肉、糯米飯",
      "en": "Discover Cherng Doi Roast Chicken — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Cherng Doi Roast Chicken, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "獨門脆皮烤雞 (Kai Thong)",
        "脆皮外表與多汁雞肉",
        "糯米飯"
      ],
      "en": [
        "Cherng Doi Roast Chicken signature experience",
        "Cherng Doi Roast Chicken signature experience",
        "Cherng Doi Roast Chicken signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Cherng Doi Roast Chicken, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Cherng Doi Roast Chicken, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Cherng Doi Roast Chicken, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼巷弄平價美食",
      "en": "Location highlight & travel tip for Cherng Doi Roast Chicken.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Cherng Doi Roast Chicken, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Cherng Doi Roast Chicken (成多脆皮烤雞名店)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Cherng Doi Roast Chicken with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Cherng Doi Roast Chicken, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Cherng Doi Roast Chicken, Chiang Mai"
  },
  {
    "id": "tong-tem-toh-童添圖-99",
    "name": {
      "zh-TW": "Tong Tem Toh (童添圖)",
      "en": "Tong Tem Toh",
      "th": "Tong Tem Toh, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "人氣泰北燒烤",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "尼曼最火爆露天燒烤！泰北烤豬肉、酸肉煎蛋與泰北蔬菜湯",
      "en": "Discover Tong Tem Toh — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Tong Tem Toh, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "尼曼最火爆露天燒烤",
        "泰北烤豬肉",
        "酸肉煎蛋與泰北蔬菜湯"
      ],
      "en": [
        "Tong Tem Toh signature experience",
        "Tong Tem Toh signature experience",
        "Tong Tem Toh signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Tong Tem Toh, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Tong Tem Toh, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Tong Tem Toh, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "晚餐用餐時間大排長龍",
      "en": "Location highlight & travel tip for Tong Tem Toh.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Tong Tem Toh, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Tong Tem Toh (童添圖)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Tong Tem Toh with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Tong Tem Toh, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Tong Tem Toh, Chiang Mai"
  },
  {
    "id": "蝶豆花藍色麵-anchan-noodle-100",
    "name": {
      "zh-TW": "蝶豆花藍色麵 (Anchan Noodle)",
      "en": "Anchan Noodle",
      "th": "Anchan Noodle, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "特色網美美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "蝶豆花天然染色的夢幻藍色泰式米粉湯與藍色椰香豬肉飯",
      "en": "Discover Anchan Noodle — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Anchan Noodle, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "蝶豆花天然染色的夢幻藍色泰式米粉湯與藍色椰香豬肉飯"
      ],
      "en": [
        "Anchan Noodle signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Anchan Noodle, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼巷弄內",
      "en": "Location highlight & travel tip for Anchan Noodle.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Anchan Noodle, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達蝶豆花藍色麵 (Anchan Noodle)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Anchan Noodle with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Anchan Noodle, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Anchan Noodle, Chiang Mai"
  },
  {
    "id": "ristr8to-lab-graph-cafe-101",
    "name": {
      "zh-TW": "Ristr8to Lab (世界拉花冠軍咖啡實驗室)",
      "en": "Ristr8to Lab",
      "th": "Ristr8to Lab, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "網美精品咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "世界拉花冠軍咖啡店、極簡工業風特調咖啡體驗",
      "en": "Discover Ristr8to Lab — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Ristr8to Lab, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "世界拉花冠軍咖啡店",
        "極簡工業風特調咖啡體驗"
      ],
      "en": [
        "Ristr8to Lab signature experience",
        "Ristr8to Lab signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ristr8to Lab, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ristr8to Lab, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "拉花圖案極精緻",
      "en": "Location highlight & travel tip for Ristr8to Lab.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Ristr8to Lab, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Ristr8to Lab (世界拉花冠軍咖啡實驗室)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Ristr8to Lab with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Ristr8to Lab, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Ristr8to Lab, Chiang Mai"
  },
  {
    "id": "roast8ry-flagship-store-102",
    "name": {
      "zh-TW": "Roast8ry Flagship Store (世界冠軍旗艦咖啡)",
      "en": "Roast8ry Flagship Store",
      "th": "Roast8ry Flagship Store, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "世界級冠軍咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "世界咖啡大賽冠軍旗艦店、骷髏頭杯特調與自烘單品豆",
      "en": "Discover Roast8ry Flagship Store — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Roast8ry Flagship Store, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "世界咖啡大賽冠軍旗艦店",
        "骷髏頭杯特調與自烘單品豆"
      ],
      "en": [
        "Roast8ry Flagship Store signature experience",
        "Roast8ry Flagship Store signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Roast8ry Flagship Store, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Roast8ry Flagship Store, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼 17 巷",
      "en": "Location highlight & travel tip for Roast8ry Flagship Store.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Roast8ry Flagship Store, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Roast8ry Flagship Store (世界冠軍旗艦咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Roast8ry Flagship Store with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Roast8ry Flagship Store, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Roast8ry Flagship Store, Chiang Mai"
  },
  {
    "id": "graph-ground-103",
    "name": {
      "zh-TW": "GRAPH Ground (暗黑工業風特調咖啡)",
      "en": "GRAPH Ground",
      "th": "GRAPH Ground, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "工業暗黑風咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "挑高工業風玻璃烘豆室、沉浸式專業手沖與特調冷萃咖啡",
      "en": "Discover GRAPH Ground — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ GRAPH Ground, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "挑高工業風玻璃烘豆室",
        "沉浸式專業手沖與特調冷萃咖啡"
      ],
      "en": [
        "GRAPH Ground signature experience",
        "GRAPH Ground signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ GRAPH Ground, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ GRAPH Ground, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼周邊",
      "en": "Location highlight & travel tip for GRAPH Ground.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ GRAPH Ground, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達GRAPH Ground (暗黑工業風特調咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to GRAPH Ground with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว GRAPH Ground, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "GRAPH Ground, Chiang Mai"
  },
  {
    "id": "ss1254372-cafe-圓窗太空艙咖啡-104",
    "name": {
      "zh-TW": "SS1254372 Cafe (圓窗太空艙咖啡)",
      "en": "SS1254372 Cafe",
      "th": "SS1254372 Cafe, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "爆款藝文咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "巨大潛水艇圓窗設計、藝文畫廊空間與健康彩虹早午餐",
      "en": "Discover SS1254372 Cafe — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ SS1254372 Cafe, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "巨大潛水艇圓窗設計",
        "藝文畫廊空間與健康彩虹早午餐"
      ],
      "en": [
        "SS1254372 Cafe signature experience",
        "SS1254372 Cafe signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ SS1254372 Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ SS1254372 Cafe, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼巷弄名店",
      "en": "Location highlight & travel tip for SS1254372 Cafe.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ SS1254372 Cafe, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達SS1254372 Cafe (圓窗太空艙咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to SS1254372 Cafe with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว SS1254372 Cafe, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "SS1254372 Cafe, Chiang Mai"
  },
  {
    "id": "yellow-crafts-cafe-日系豆乳咖啡-105",
    "name": {
      "zh-TW": "Yellow Crafts Cafe (日系豆乳咖啡)",
      "en": "Yellow Crafts Cafe",
      "th": "Yellow Crafts Cafe, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "極簡文青咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "亮黃色與純白日系幾何空間、自製新鮮濃郁豆乳咖啡與甜點",
      "en": "Discover Yellow Crafts Cafe — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Yellow Crafts Cafe, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "亮黃色與純白日系幾何空間",
        "自製新鮮濃郁豆乳咖啡與甜點"
      ],
      "en": [
        "Yellow Crafts Cafe signature experience",
        "Yellow Crafts Cafe signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Yellow Crafts Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Yellow Crafts Cafe, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼西南側",
      "en": "Location highlight & travel tip for Yellow Crafts Cafe.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Yellow Crafts Cafe, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Yellow Crafts Cafe (日系豆乳咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Yellow Crafts Cafe with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Yellow Crafts Cafe, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Yellow Crafts Cafe, Chiang Mai"
  },
  {
    "id": "jing-jai-market-jj-market-綠色農夫-106",
    "name": {
      "zh-TW": "Jing Jai Market (JJ Market / 綠色農夫市集)",
      "en": "JJ Market",
      "th": "JJ Market, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_market.jpg",
    "tag": {
      "zh-TW": "文青手作市集",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁每週末最紅的文青手作、手沖咖啡、農夫有機美食與手工藝",
      "en": "Discover JJ Market — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ JJ Market, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁每週末最紅的文青手作",
        "手沖咖啡",
        "農夫有機美食與手工藝"
      ],
      "en": [
        "JJ Market signature experience",
        "JJ Market signature experience",
        "JJ Market signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ JJ Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ JJ Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ JJ Market, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "週六日 06:00 ~ 13:00 限定",
      "en": "Location highlight & travel tip for JJ Market.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ JJ Market, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Jing Jai Market (JJ Market / 綠色農夫市集)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to JJ Market with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว JJ Market, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🏮",
    "googleMapsQuery": "JJ Market, Chiang Mai"
  },
  {
    "id": "瘋狂大碗麵-crazy-noodle-107",
    "name": {
      "zh-TW": "瘋狂大碗麵 (Crazy Noodle)",
      "en": "Crazy Noodle",
      "th": "Crazy Noodle, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "特色平價小吃",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "浮誇巨型海鮮與巨型豬肋排泰式酸辣麵碗、自選湯頭麵條",
      "en": "Discover Crazy Noodle — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Crazy Noodle, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "浮誇巨型海鮮與巨型豬肋排泰式酸辣麵碗",
        "自選湯頭麵條"
      ],
      "en": [
        "Crazy Noodle signature experience",
        "Crazy Noodle signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Crazy Noodle, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Crazy Noodle, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼巷弄",
      "en": "Location highlight & travel tip for Crazy Noodle.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Crazy Noodle, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達瘋狂大碗麵 (Crazy Noodle)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Crazy Noodle with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Crazy Noodle, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Crazy Noodle, Chiang Mai"
  },
  {
    "id": "kiti-panit-百年紅木老宅美饌-108",
    "name": {
      "zh-TW": "Kiti Panit (百年紅木老宅美饌)",
      "en": "Kiti Panit",
      "th": "Kiti Panit, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林推薦美饌",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "1888年紅木百年老宅、米其林推薦經典烤芒果糯米飯與高檔泰菜",
      "en": "Discover Kiti Panit — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Kiti Panit, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "1888年紅木百年老宅",
        "米其林推薦經典烤芒果糯米飯與高檔泰菜"
      ],
      "en": [
        "Kiti Panit signature experience",
        "Kiti Panit signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kiti Panit, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kiti Panit, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "需預約",
      "en": "Location highlight & travel tip for Kiti Panit.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Kiti Panit, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Kiti Panit (百年紅木老宅美饌)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Kiti Panit with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Kiti Panit, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Kiti Panit, Chiang Mai"
  },
  {
    "id": "白色市集-white-market-nimman-109",
    "name": {
      "zh-TW": "白色市集 (White Market Nimman)",
      "en": "White Market Nimman",
      "th": "White Market Nimman, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_market.jpg",
    "tag": {
      "zh-TW": "文青手作市集",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "One Nimman 露天廣場每週末限定白色市集！日系文青手作飾品、編織布包、文創選物與街頭美食",
      "en": "Discover White Market Nimman — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ White Market Nimman, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "One Nimman 露天廣場每週末限定白色市集",
        "日系文青手作飾品",
        "編織布包",
        "文創選物與街頭美食"
      ],
      "en": [
        "White Market Nimman signature experience",
        "White Market Nimman signature experience",
        "White Market Nimman signature experience",
        "White Market Nimman signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ White Market Nimman, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ White Market Nimman, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ White Market Nimman, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ White Market Nimman, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "週五至週日 15:00 ~ 22:00 限定",
      "en": "Location highlight & travel tip for White Market Nimman.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ White Market Nimman, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達白色市集 (White Market Nimman)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to White Market Nimman with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว White Market Nimman, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🏮",
    "googleMapsQuery": "White Market Nimman, Chiang Mai"
  },
  {
    "id": "mooh-尼曼爆漿甜甜圈-110",
    "name": {
      "zh-TW": "MOOH (尼曼爆漿甜甜圈)",
      "en": "MOOH",
      "th": "MOOH, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "特色甜點名店",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "尼曼巷弄極簡木質小店、招牌現做草莓奶油爆漿甜甜圈",
      "en": "Discover MOOH — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ MOOH, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "尼曼巷弄極簡木質小店",
        "招牌現做草莓奶油爆漿甜甜圈"
      ],
      "en": [
        "MOOH signature experience",
        "MOOH signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ MOOH, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ MOOH, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "0.5 小時",
      "en": "30 Mins",
      "th": "30 นาที"
    },
    "tips": {
      "zh-TW": "售完為止",
      "en": "Location highlight & travel tip for MOOH.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ MOOH, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達MOOH (尼曼爆漿甜甜圈)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to MOOH with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว MOOH, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "MOOH, Chiang Mai"
  },
  {
    "id": "cheevit-cheeva-奇維奇娃冰品-111",
    "name": {
      "zh-TW": "Cheevit Cheeva (奇維奇娃冰品)",
      "en": "Cheevit Cheeva",
      "th": "Cheevit Cheeva, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "特色甜點名店",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁爆款泰式鹹蛋黃椰香雪花冰、芒果糯米冰淇淋",
      "en": "Discover Cheevit Cheeva — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Cheevit Cheeva, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁爆款泰式鹹蛋黃椰香雪花冰",
        "芒果糯米冰淇淋"
      ],
      "en": [
        "Cheevit Cheeva signature experience",
        "Cheevit Cheeva signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Cheevit Cheeva, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Cheevit Cheeva, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "尼曼熱門冰品店",
      "en": "Location highlight & travel tip for Cheevit Cheeva.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Cheevit Cheeva, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Cheevit Cheeva (奇維奇娃冰品)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Cheevit Cheeva with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Cheevit Cheeva, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Cheevit Cheeva, Chiang Mai"
  },
  {
    "id": "7-senses-gelato-義式手工冰淇淋-112",
    "name": {
      "zh-TW": "7 Senses Gelato (義式手工冰淇淋)",
      "en": "7 Senses Gelato",
      "th": "7 Senses Gelato, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "特色甜點/手工冰淇淋",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "尼曼11巷超人氣手工義式冰淇淋！義大利主廚特調、濃郁開心果、純素與多種無乳糖口味",
      "en": "Discover 7 Senses Gelato — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ 7 Senses Gelato, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "尼曼11巷超人氣手工義式冰淇淋",
        "義大利主廚特調",
        "濃郁開心果",
        "純素與多種無乳糖口味"
      ],
      "en": [
        "7 Senses Gelato signature experience",
        "7 Senses Gelato signature experience",
        "7 Senses Gelato signature experience",
        "7 Senses Gelato signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ 7 Senses Gelato, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ 7 Senses Gelato, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ 7 Senses Gelato, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ 7 Senses Gelato, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "0.5 小時",
      "en": "30 Mins",
      "th": "30 นาที"
    },
    "tips": {
      "zh-TW": "尼曼 11 巷",
      "en": "Location highlight & travel tip for 7 Senses Gelato.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ 7 Senses Gelato, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達7 Senses Gelato (義式手工冰淇淋)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to 7 Senses Gelato with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว 7 Senses Gelato, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "7 Senses Gelato, Chiang Mai"
  },
  {
    "id": "清大前門夜市-kad-malin-market-113",
    "name": {
      "zh-TW": "清大前門夜市 (Kad Malin Market)",
      "en": "Kad Malin Market",
      "th": "Kad Malin Market, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "night-market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_night_market.jpg",
    "tag": {
      "zh-TW": "學生平價夜市",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁大學前門超平價學生夜市、日式燒肉、衣服鞋包採買",
      "en": "Discover Kad Malin Market — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Kad Malin Market, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁大學前門超平價學生夜市",
        "日式燒肉",
        "衣服鞋包採買"
      ],
      "en": [
        "Kad Malin Market signature experience",
        "Kad Malin Market signature experience",
        "Kad Malin Market signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kad Malin Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kad Malin Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kad Malin Market, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "晚上熱鬧",
      "en": "Location highlight & travel tip for Kad Malin Market.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Kad Malin Market, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清大前門夜市 (Kad Malin Market)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Kad Malin Market with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Kad Malin Market, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🏮",
    "googleMapsQuery": "Kad Malin Market, Chiang Mai"
  },
  {
    "id": "清大後門美食街-suthep-road-night-mark-114",
    "name": {
      "zh-TW": "清大後門美食街 (Suthep Road Night Market)",
      "en": "Suthep Road Night Market",
      "th": "Suthep Road Night Market, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "night-market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_night_market.jpg",
    "tag": {
      "zh-TW": "平價小吃街",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清大後門沿街泰式小吃、現榨果汁、燕窩與泰國燒烤",
      "en": "Discover Suthep Road Night Market — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Suthep Road Night Market, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清大後門沿街泰式小吃",
        "現榨果汁",
        "燕窩與泰國燒烤"
      ],
      "en": [
        "Suthep Road Night Market signature experience",
        "Suthep Road Night Market signature experience",
        "Suthep Road Night Market signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Suthep Road Night Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Suthep Road Night Market, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Suthep Road Night Market, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "傍晚學生人潮",
      "en": "Location highlight & travel tip for Suthep Road Night Market.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Suthep Road Night Market, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清大後門美食街 (Suthep Road Night Market)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Suthep Road Night Market with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Suthep Road Night Market, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Suthep Road Night Market, Chiang Mai"
  },
  {
    "id": "grandmas-home-泰菜廚藝學校-115",
    "name": {
      "zh-TW": "Grandma's Home 泰菜廚藝學校",
      "en": "Grandma's Home",
      "th": "Grandma's Home, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "泰菜手作體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "阿勛熱門推薦！農場採集食材、做芒果糯米飯與泰式炒河粉",
      "en": "Discover Grandma's Home — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Grandma's Home, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "阿勛熱門推薦",
        "農場採集食材",
        "做芒果糯米飯與泰式炒河粉"
      ],
      "en": [
        "Grandma's Home signature experience",
        "Grandma's Home signature experience",
        "Grandma's Home signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Grandma's Home, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Grandma's Home, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Grandma's Home, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "半天",
      "en": "Half Day",
      "th": "ครึ่งวัน"
    },
    "tips": {
      "zh-TW": "含飯店接送",
      "en": "Location highlight & travel tip for Grandma's Home.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Grandma's Home, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Grandma's Home 泰菜廚藝學校，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Grandma's Home with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Grandma's Home, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Grandma's Home, Chiang Mai"
  },
  {
    "id": "zabb-e-lee-有機農場烹飪課-116",
    "name": {
      "zh-TW": "Zabb E Lee 有機農場烹飪課",
      "en": "Zabb E Lee",
      "th": "Zabb E Lee, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "nimman-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "泰菜手作體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "有機花園採摘香草、親手做冬陰功與泰式咖哩醬",
      "en": "Discover Zabb E Lee — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Zabb E Lee, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "有機花園採摘香草",
        "親手做冬陰功與泰式咖哩醬"
      ],
      "en": [
        "Zabb E Lee signature experience",
        "Zabb E Lee signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Zabb E Lee, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Zabb E Lee, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "半天",
      "en": "Half Day",
      "th": "ครึ่งวัน"
    },
    "tips": {
      "zh-TW": "小班制教學",
      "en": "Location highlight & travel tip for Zabb E Lee.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Zabb E Lee, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Zabb E Lee 有機農場烹飪課，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Zabb E Lee with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Zabb E Lee, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Zabb E Lee, Chiang Mai"
  },
  {
    "id": "pun-pun-organic-temple-rest-阿班-117",
    "name": {
      "zh-TW": "Pun Pun Organic Temple Rest (阿班有機素食)",
      "en": "Pun Pun Organic Temple Rest",
      "th": "Pun Pun Organic Temple Rest, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "悟孟寺古森林樹蔭下有機農場蔬食、天然泰式有機素咖哩與糙米飯",
      "en": "Discover Pun Pun Organic Temple Rest — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Pun Pun Organic Temple Rest, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "悟孟寺古森林樹蔭下有機農場蔬食",
        "天然泰式有機素咖哩與糙米飯"
      ],
      "en": [
        "Pun Pun Organic Temple Rest signature experience",
        "Pun Pun Organic Temple Rest signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pun Pun Organic Temple Rest, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pun Pun Organic Temple Rest, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "悟孟寺內最受歡迎素食",
      "en": "Location highlight & travel tip for Pun Pun Organic Temple Rest.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Pun Pun Organic Temple Rest, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Pun Pun Organic Temple Rest (阿班有機素食)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Pun Pun Organic Temple Rest with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Pun Pun Organic Temple Rest, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Pun Pun Organic Temple Rest, Chiang Mai"
  },
  {
    "id": "素貼山雙龍寺-wat-phra-that-doi-suthe-118",
    "name": {
      "zh-TW": "素貼山雙龍寺 (Wat Phra That Doi Suthep)",
      "en": "Wat Phra That Doi Suthep",
      "th": "Wat Phra That Doi Suthep, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/素貼山雙龍寺-wat-phra-that-doi-suthe-118.jpg",
    "tag": {
      "zh-TW": "古蹟/寺廟聖地",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁指標聖地！24K 金黃大佛塔、306階納迦雙龍階梯、市區俯瞰",
      "en": "Discover Wat Phra That Doi Suthep — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Phra That Doi Suthep, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁指標聖地",
        "24K 金黃大佛塔",
        "306階納迦雙龍階梯",
        "市區俯瞰"
      ],
      "en": [
        "Wat Phra That Doi Suthep signature experience",
        "Wat Phra That Doi Suthep signature experience",
        "Wat Phra That Doi Suthep signature experience",
        "Wat Phra That Doi Suthep signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Doi Suthep, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Doi Suthep, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Doi Suthep, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Doi Suthep, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "可坐纜車或爬階梯",
      "en": "Location highlight & travel tip for Wat Phra That Doi Suthep.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Phra That Doi Suthep, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達素貼山雙龍寺 (Wat Phra That Doi Suthep)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Phra That Doi Suthep with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Phra That Doi Suthep, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Phra That Doi Suthep, Chiang Mai"
  },
  {
    "id": "蒲屏皇宮-bhubing-palace-119",
    "name": {
      "zh-TW": "蒲屏皇宮 (Bhubing Palace)",
      "en": "Bhubing Palace",
      "th": "Bhubing Palace, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/蒲屏皇宮-bhubing-palace-119.jpg",
    "tag": {
      "zh-TW": "皇室花園",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國皇室避暑行宮、四季花卉公園與高山玫瑰園",
      "en": "Discover Bhubing Palace — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Bhubing Palace, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國皇室避暑行宮",
        "四季花卉公園與高山玫瑰園"
      ],
      "en": [
        "Bhubing Palace signature experience",
        "Bhubing Palace signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Bhubing Palace, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Bhubing Palace, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "素貼山更高處",
      "en": "Location highlight & travel tip for Bhubing Palace.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Bhubing Palace, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達蒲屏皇宮 (Bhubing Palace)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Bhubing Palace with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Bhubing Palace, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Bhubing Palace, Chiang Mai"
  },
  {
    "id": "悟孟寺-wat-umong-120",
    "name": {
      "zh-TW": "悟孟寺 (Wat Umong)",
      "en": "Wat Umong",
      "th": "Wat Umong, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/悟孟寺-wat-umong-120.jpg",
    "tag": {
      "zh-TW": "古蹟/森林寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "700年森林地道古寺、湖畔餵魚與苔蘚佛像秘境",
      "en": "Discover Wat Umong — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Umong, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "700年森林地道古寺",
        "湖畔餵魚與苔蘚佛像秘境"
      ],
      "en": [
        "Wat Umong signature experience",
        "Wat Umong signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Umong, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Umong, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "氣氛極寧靜",
      "en": "Location highlight & travel tip for Wat Umong.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Umong, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達悟孟寺 (Wat Umong)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Umong with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Umong, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Umong, Chiang Mai"
  },
  {
    "id": "no39-cafe-湖畔小木屋咖啡館-121",
    "name": {
      "zh-TW": "No.39 Cafe (湖畔小木屋咖啡館)",
      "en": "No.39 Cafe",
      "th": "No.39 Cafe, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "爆款網美咖啡",
      "en": "Trending Instagrammable Cafe",
      "th": "คาเฟ่ยอดนิยมถ่ายรูปสวย"
    },
    "description": {
      "zh-TW": "夢幻藍綠色水池、滑梯小木屋與露天草地音樂咖啡、小木屋打卡",
      "en": "Discover No.39 Cafe — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ No.39 Cafe, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "夢幻藍綠色水池",
        "滑梯小木屋與露天草地音樂咖啡",
        "小木屋打卡"
      ],
      "en": [
        "No.39 Cafe signature experience",
        "No.39 Cafe signature experience",
        "No.39 Cafe signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ No.39 Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ No.39 Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ No.39 Cafe, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "悟孟寺旁必去打卡熱點",
      "en": "Location highlight & travel tip for No.39 Cafe.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ No.39 Cafe, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達No.39 Cafe (湖畔小木屋咖啡館)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to No.39 Cafe with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว No.39 Cafe, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "No.39 Cafe, Chiang Mai"
  },
  {
    "id": "baan-kang-wat-森林手作藝術村-122",
    "name": {
      "zh-TW": "Baan Kang Wat 森林手作藝術村",
      "en": "Baan Kang Wat",
      "th": "Baan Kang Wat, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "藝文體驗/手作",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泥土小路、木造手作工作坊、陶藝體驗與獨立書店",
      "en": "Discover Baan Kang Wat — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Baan Kang Wat, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泥土小路",
        "木造手作工作坊",
        "陶藝體驗與獨立書店"
      ],
      "en": [
        "Baan Kang Wat signature experience",
        "Baan Kang Wat signature experience",
        "Baan Kang Wat signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Kang Wat, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Kang Wat, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Kang Wat, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "週一公休",
      "en": "Location highlight & travel tip for Baan Kang Wat.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Baan Kang Wat, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Baan Kang Wat 森林手作藝術村，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Baan Kang Wat with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Baan Kang Wat, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🎨",
    "googleMapsQuery": "Baan Kang Wat, Chiang Mai"
  },
  {
    "id": "early-owls-cafe-草地大樹咖啡-123",
    "name": {
      "zh-TW": "Early Owls Cafe (草地大樹咖啡)",
      "en": "Early Owls Cafe",
      "th": "Early Owls Cafe, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "網美野餐咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "超大片天然綠色草地、溪流與大樹野餐椅、天然愜意氛圍",
      "en": "Discover Early Owls Cafe — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Early Owls Cafe, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "超大片天然綠色草地",
        "溪流與大樹野餐椅",
        "天然愜意氛圍"
      ],
      "en": [
        "Early Owls Cafe signature experience",
        "Early Owls Cafe signature experience",
        "Early Owls Cafe signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Early Owls Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Early Owls Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Early Owls Cafe, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "適合放空野餐",
      "en": "Location highlight & travel tip for Early Owls Cafe.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Early Owls Cafe, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Early Owls Cafe (草地大樹咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Early Owls Cafe with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Early Owls Cafe, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Early Owls Cafe, Chiang Mai"
  },
  {
    "id": "nana-jungle-森林麵包市集-124",
    "name": {
      "zh-TW": "Nana Jungle (森林麵包市集)",
      "en": "Nana Jungle",
      "th": "Nana Jungle, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_market.jpg",
    "tag": {
      "zh-TW": "特色美饌市集",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "每週六限定！森林裡排隊搶購的現烤歐式法棍與可頌",
      "en": "Discover Nana Jungle — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Nana Jungle, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "每週六限定",
        "森林裡排隊搶購的現烤歐式法棍與可頌"
      ],
      "en": [
        "Nana Jungle signature experience",
        "Nana Jungle signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Nana Jungle, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Nana Jungle, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "週六早晨 08:00 限定",
      "en": "Location highlight & travel tip for Nana Jungle.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Nana Jungle, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Nana Jungle (森林麵包市集)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Nana Jungle with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Nana Jungle, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🏮",
    "googleMapsQuery": "Nana Jungle, Chiang Mai"
  },
  {
    "id": "界遙寺-wat-jet-yod-125",
    "name": {
      "zh-TW": "界遙寺 (Wat Jet Yod)",
      "en": "Wat Jet Yod",
      "th": "Wat Jet Yod, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/界遙寺-wat-jet-yod-125.jpg",
    "tag": {
      "zh-TW": "古蹟/寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "印度菩提伽耶風格七頂塔、平靜古木森林寺廟",
      "en": "Discover Wat Jet Yod — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Jet Yod, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "印度菩提伽耶風格七頂塔",
        "平靜古木森林寺廟"
      ],
      "en": [
        "Wat Jet Yod signature experience",
        "Wat Jet Yod signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Jet Yod, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Jet Yod, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清邁超級古寺",
      "en": "Location highlight & travel tip for Wat Jet Yod.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Jet Yod, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達界遙寺 (Wat Jet Yod)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Jet Yod with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Jet Yod, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Jet Yod, Chiang Mai"
  },
  {
    "id": "blue-coffee-at-agriculture-cmu-126",
    "name": {
      "zh-TW": "Blue Coffee at Agriculture CMU (清大農學院藍色咖啡)",
      "en": "Blue Coffee at Agriculture CMU",
      "th": "Blue Coffee at Agriculture CMU, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "清大校園咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁大學農學院大片落地窗草地咖啡、超極簡景觀與平價咖啡",
      "en": "Discover Blue Coffee at Agriculture CMU — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Blue Coffee at Agriculture CMU, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁大學農學院大片落地窗草地咖啡",
        "超極簡景觀與平價咖啡"
      ],
      "en": [
        "Blue Coffee at Agriculture CMU signature experience",
        "Blue Coffee at Agriculture CMU signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Blue Coffee at Agriculture CMU, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Blue Coffee at Agriculture CMU, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清大校園內",
      "en": "Location highlight & travel tip for Blue Coffee at Agriculture CMU.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Blue Coffee at Agriculture CMU, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Blue Coffee at Agriculture CMU (清大農學院藍色咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Blue Coffee at Agriculture CMU with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Blue Coffee at Agriculture CMU, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Blue Coffee at Agriculture CMU, Chiang Mai"
  },
  {
    "id": "帕拉寺-wat-pha-lat-127",
    "name": {
      "zh-TW": "帕拉寺 (Wat Pha Lat)",
      "en": "Wat Pha Lat",
      "th": "Wat Pha Lat, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/帕拉寺-wat-pha-lat-127.jpg",
    "tag": {
      "zh-TW": "森林溪流古寺",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "隱匿於素貼山半山腰森林中的古老溪流寺廟、苔蘚石佛與瀑布",
      "en": "Discover Wat Pha Lat — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Pha Lat, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "隱匿於素貼山半山腰森林中的古老溪流寺廟",
        "苔蘚石佛與瀑布"
      ],
      "en": [
        "Wat Pha Lat signature experience",
        "Wat Pha Lat signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Pha Lat, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Pha Lat, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "雙龍寺途經秘境",
      "en": "Location highlight & travel tip for Wat Pha Lat.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Pha Lat, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達帕拉寺 (Wat Pha Lat)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Pha Lat with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Pha Lat, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Pha Lat, Chiang Mai"
  },
  {
    "id": "素貼山觀景台-doi-suthep-viewpoint-128",
    "name": {
      "zh-TW": "素貼山觀景台 (Doi Suthep Viewpoint)",
      "en": "Doi Suthep Viewpoint",
      "th": "Doi Suthep Viewpoint, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "高山景觀平台",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "半山腰無遮蔽觀景台、俯瞰整座清邁城區與機場跑道",
      "en": "Discover Doi Suthep Viewpoint — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Doi Suthep Viewpoint, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "半山腰無遮蔽觀景台",
        "俯瞰整座清邁城區與機場跑道"
      ],
      "en": [
        "Doi Suthep Viewpoint signature experience",
        "Doi Suthep Viewpoint signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Suthep Viewpoint, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Suthep Viewpoint, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "0.5 小時",
      "en": "30 Mins",
      "th": "30 นาที"
    },
    "tips": {
      "zh-TW": "看夜景首選",
      "en": "Location highlight & travel tip for Doi Suthep Viewpoint.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Doi Suthep Viewpoint, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達素貼山觀景台 (Doi Suthep Viewpoint)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Doi Suthep Viewpoint with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Doi Suthep Viewpoint, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Doi Suthep Viewpoint, Chiang Mai"
  },
  {
    "id": "坤昌阡-khun-chang-kian-櫻花谷-129",
    "name": {
      "zh-TW": "坤昌阡 (Khun Chang Kian 櫻花谷)",
      "en": "Khun Chang Kian Sakura Highland",
      "th": "ขุนช่างเคี่ยน (หุบเขานางพญาเสือโคร่ง)"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "高山櫻花景觀",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "素貼山頂苗族部落、每年1-2月盛開的泰國高山野櫻花",
      "en": "Discover Khun Chang Kian Sakura Highland — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ ขุนช่างเคี่ยน (หุบเขานางพญาเสือโคร่ง) จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "素貼山頂苗族部落",
        "每年1-2月盛開的泰國高山野櫻花"
      ],
      "en": [
        "Khun Chang Kian Sakura Highland signature experience",
        "Khun Chang Kian Sakura Highland signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ ขุนช่างเคี่ยน (หุบเขานางพญาเสือโคร่ง)",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ ขุนช่างเคี่ยน (หุบเขานางพญาเสือโคร่ง)"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "賞櫻季首選",
      "en": "Location highlight & travel tip for Khun Chang Kian Sakura Highland.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ ขุนช่างเคี่ยน (หุบเขานางพญาเสือโคร่ง)"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達坤昌阡 (Khun Chang Kian 櫻花谷)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Khun Chang Kian Sakura Highland with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว ขุนช่างเคี่ยน (หุบเขานางพญาเสือโคร่ง) อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Khun Chang Kian 櫻花谷, Chiang Mai"
  },
  {
    "id": "doi-chaang-coffee-doi-suthep-130",
    "name": {
      "zh-TW": "Doi Chaang Coffee (象山高山景觀咖啡)",
      "en": "Doi Chaang Coffee",
      "th": "Doi Chaang Coffee, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "高山景觀咖啡",
      "en": "Mountain View Cafe",
      "th": "คาเฟ่วิวภูเขาและดอย"
    },
    "description": {
      "zh-TW": "素貼山半山腰景觀平台、品嚐泰北知名象山高山精品咖啡",
      "en": "Discover Doi Chaang Coffee — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Doi Chaang Coffee, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "素貼山半山腰景觀平台",
        "品嚐泰北知名象山高山精品咖啡"
      ],
      "en": [
        "Doi Chaang Coffee signature experience",
        "Doi Chaang Coffee signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Chaang Coffee, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Chaang Coffee, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "山景第一排",
      "en": "Location highlight & travel tip for Doi Chaang Coffee.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Doi Chaang Coffee, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Doi Chaang Coffee (象山高山景觀咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Doi Chaang Coffee with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Doi Chaang Coffee, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Doi Chaang Coffee, Chiang Mai"
  },
  {
    "id": "僧侶步道-monks-trail-131",
    "name": {
      "zh-TW": "僧侶步道 (Monk's Trail)",
      "en": "Monk's Trail",
      "th": "Monk's Trail, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "森林徒步步道",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "綁著橘色僧袍樹木指引的清邁最經典森林徒步路線",
      "en": "Discover Monk's Trail — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Monk's Trail, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "綁著橘色僧袍樹木指引的清邁最經典森林徒步路線"
      ],
      "en": [
        "Monk's Trail signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Monk's Trail, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "直通帕拉寺",
      "en": "Location highlight & travel tip for Monk's Trail.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Monk's Trail, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達僧侶步道 (Monk's Trail)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Monk's Trail with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Monk's Trail, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Monk's Trail, Chiang Mai"
  },
  {
    "id": "清邁大學靜心湖-ang-kaew-cmu-132",
    "name": {
      "zh-TW": "清邁大學靜心湖 (Ang Kaew CMU)",
      "en": "Ang Kaew CMU",
      "th": "Ang Kaew CMU, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清邁大學靜心湖-ang-kaew-cmu-132.jpg",
    "tag": {
      "zh-TW": "校園水岸景觀",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清大湖畔大片草地、素貼山倒影與傍晚散步打卡勝地",
      "en": "Discover Ang Kaew CMU — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Ang Kaew CMU, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清大湖畔大片草地",
        "素貼山倒影與傍晚散步打卡勝地"
      ],
      "en": [
        "Ang Kaew CMU signature experience",
        "Ang Kaew CMU signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ang Kaew CMU, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ang Kaew CMU, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "傍晚最熱門",
      "en": "Location highlight & travel tip for Ang Kaew CMU.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Ang Kaew CMU, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁大學靜心湖 (Ang Kaew CMU)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Ang Kaew CMU with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Ang Kaew CMU, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Ang Kaew CMU, Chiang Mai"
  },
  {
    "id": "清邁國家博物館-chiang-mai-national-mu-133",
    "name": {
      "zh-TW": "清邁國家博物館 (Chiang Mai National Museum)",
      "en": "Chiang Mai National Museum",
      "th": "Chiang Mai National Museum"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-suthep-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清邁國家博物館-chiang-mai-national-mu-133.jpg",
    "tag": {
      "zh-TW": "歷史博物館",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "界遙寺旁、展示蘭納王朝珍貴佛像、文物與王室金飾",
      "en": "Discover Chiang Mai National Museum — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chiang Mai National Museum จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "界遙寺旁",
        "展示蘭納王朝珍貴佛像",
        "文物與王室金飾"
      ],
      "en": [
        "Chiang Mai National Museum signature experience",
        "Chiang Mai National Museum signature experience",
        "Chiang Mai National Museum signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai National Museum",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai National Museum",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai National Museum"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "歷史控必去",
      "en": "Location highlight & travel tip for Chiang Mai National Museum.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chiang Mai National Museum"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁國家博物館 (Chiang Mai National Museum)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chiang Mai National Museum with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chiang Mai National Museum อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Chiang Mai National Museum"
  },
  {
    "id": "meena-rice-based-cuisine-五色米飯-134",
    "name": {
      "zh-TW": "Meena Rice Based Cuisine (五色米飯)",
      "en": "Meena Rice Based Cuisine",
      "th": "Meena Rice Based Cuisine, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登餐廳",
      "en": "Michelin Bib Gourmand Restaurant",
      "th": "ร้านอาหารแนะนำมิชลิน บิบ กูร์มองด์"
    },
    "description": {
      "zh-TW": "米其林必比登推薦！清邁東郊花園水池、招牌五彩金字塔米飯與精緻泰菜",
      "en": "Discover Meena Rice Based Cuisine — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Meena Rice Based Cuisine, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林必比登推薦",
        "清邁東郊花園水池",
        "招牌五彩金字塔米飯與精緻泰菜"
      ],
      "en": [
        "Meena Rice Based Cuisine signature experience",
        "Meena Rice Based Cuisine signature experience",
        "Meena Rice Based Cuisine signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Meena Rice Based Cuisine, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Meena Rice Based Cuisine, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Meena Rice Based Cuisine, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "三甘攀區名店",
      "en": "Location highlight & travel tip for Meena Rice Based Cuisine.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Meena Rice Based Cuisine, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Meena Rice Based Cuisine (五色米飯)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Meena Rice Based Cuisine with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Meena Rice Based Cuisine, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Meena Rice Based Cuisine, Chiang Mai"
  },
  {
    "id": "the-giant-chiang-mai-大樹咖啡館-135",
    "name": {
      "zh-TW": "The Giant Chiang Mai (大樹咖啡館)",
      "en": "The Giant Chiang Mai",
      "th": "The Giant Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "網美懸空咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "建於千年巨樹冠頂！懸空木棧道、吊橋與高空滑索 (Zipline)",
      "en": "Discover The Giant Chiang Mai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ The Giant Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "建於千年巨樹冠頂",
        "懸空木棧道",
        "吊橋與高空滑索 (Zipline)"
      ],
      "en": [
        "The Giant Chiang Mai signature experience",
        "The Giant Chiang Mai signature experience",
        "The Giant Chiang Mai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The Giant Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The Giant Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The Giant Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "位於梅翁縣山頂",
      "en": "Location highlight & travel tip for The Giant Chiang Mai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ The Giant Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達The Giant Chiang Mai (大樹咖啡館)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to The Giant Chiang Mai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว The Giant Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "The Giant Chiang Mai"
  },
  {
    "id": "羅賓帕薩樹屋度假村-rabeang-pasak-treeho-136",
    "name": {
      "zh-TW": "羅賓帕薩樹屋度假村 (Rabeang Pasak Treehouse)",
      "en": "Rabeang Pasak Treehouse",
      "th": "Rabeang Pasak Treehouse, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "爆款高山樹屋咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁最經典高山樹屋！高聳樹冠木造小屋、森林步道與樹屋咖啡館",
      "en": "Discover Rabeang Pasak Treehouse — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Rabeang Pasak Treehouse, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁最經典高山樹屋",
        "高聳樹冠木造小屋",
        "森林步道與樹屋咖啡館"
      ],
      "en": [
        "Rabeang Pasak Treehouse signature experience",
        "Rabeang Pasak Treehouse signature experience",
        "Rabeang Pasak Treehouse signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Rabeang Pasak Treehouse, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Rabeang Pasak Treehouse, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Rabeang Pasak Treehouse, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "三甘攀/梅翁高山秘境",
      "en": "Location highlight & travel tip for Rabeang Pasak Treehouse.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Rabeang Pasak Treehouse, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達羅賓帕薩樹屋度假村 (Rabeang Pasak Treehouse)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Rabeang Pasak Treehouse with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Rabeang Pasak Treehouse, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Rabeang Pasak Treehouse, Chiang Mai"
  },
  {
    "id": "湄康蓬古村-mae-kampong-137",
    "name": {
      "zh-TW": "湄康蓬古村 (Mae Kampong)",
      "en": "Mae Kampong",
      "th": "Mae Kampong, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/湄康蓬古村-mae-kampong-137.jpg",
    "tag": {
      "zh-TW": "百年古村秘境",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "沿著溪流與山谷建造的木造高腳屋部落、山溪瀑布、高山茶咖啡",
      "en": "Discover Mae Kampong — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Kampong, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "沿著溪流與山谷建造的木造高腳屋部落",
        "山溪瀑布",
        "高山茶咖啡"
      ],
      "en": [
        "Mae Kampong signature experience",
        "Mae Kampong signature experience",
        "Mae Kampong signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Kampong, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Kampong, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Kampong, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清邁最熱門包車山村",
      "en": "Location highlight & travel tip for Mae Kampong.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Kampong, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達湄康蓬古村 (Mae Kampong)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Kampong with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Kampong, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Mae Kampong, Chiang Mai"
  },
  {
    "id": "湄康蓬瀑布-mae-kampong-waterfall-138",
    "name": {
      "zh-TW": "湄康蓬瀑布 (Mae Kampong Waterfall)",
      "en": "Mae Kampong Waterfall",
      "th": "Mae Kampong Waterfall, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "自然瀑布",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "古村頂端七層山谷瀑布、涼爽森林步道",
      "en": "Discover Mae Kampong Waterfall — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Kampong Waterfall, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "古村頂端七層山谷瀑布",
        "涼爽森林步道"
      ],
      "en": [
        "Mae Kampong Waterfall signature experience",
        "Mae Kampong Waterfall signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Kampong Waterfall, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Kampong Waterfall, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古村上方",
      "en": "Location highlight & travel tip for Mae Kampong Waterfall.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Kampong Waterfall, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達湄康蓬瀑布 (Mae Kampong Waterfall)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Kampong Waterfall with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Kampong Waterfall, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "Mae Kampong Waterfall, Chiang Mai"
  },
  {
    "id": "chom-nok-chom-mai-古村俯瞰咖啡-139",
    "name": {
      "zh-TW": "Chom Nok Chom Mai (古村俯瞰咖啡)",
      "en": "Chom Nok Chom Mai",
      "th": "Chomnok Chommai, Mae Kampong, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "山谷觀景咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "位於湄康蓬村頂木造平台、俯瞰整座山谷部落與雲霧",
      "en": "Discover Chom Nok Chom Mai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chomnok Chommai, Mae Kampong, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "位於湄康蓬村頂木造平台",
        "俯瞰整座山谷部落與雲霧"
      ],
      "en": [
        "Chom Nok Chom Mai signature experience",
        "Chom Nok Chom Mai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chomnok Chommai, Mae Kampong, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chomnok Chommai, Mae Kampong, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "拍古村全景最佳點",
      "en": "Location highlight & travel tip for Chom Nok Chom Mai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chomnok Chommai, Mae Kampong, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Chom Nok Chom Mai (古村俯瞰咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chom Nok Chom Mai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chomnok Chommai, Mae Kampong, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Chomnok Chommai, Mae Kampong, Chiang Mai"
  },
  {
    "id": "teds-army-cafe-森林溪流咖啡-140",
    "name": {
      "zh-TW": "Ted's Army Cafe (森林溪流咖啡)",
      "en": "Ted's Army Cafe",
      "th": "Ted's Army Cafe, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "溪流木屋咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "建於湄康蓬森林溪流旁、聽著水聲喝咖啡與烤吐司",
      "en": "Discover Ted's Army Cafe — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Ted's Army Cafe, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "建於湄康蓬森林溪流旁",
        "聽著水聲喝咖啡與烤吐司"
      ],
      "en": [
        "Ted's Army Cafe signature experience",
        "Ted's Army Cafe signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ted's Army Cafe, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ted's Army Cafe, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古村溪邊",
      "en": "Location highlight & travel tip for Ted's Army Cafe.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Ted's Army Cafe, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Ted's Army Cafe (森林溪流咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Ted's Army Cafe with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Ted's Army Cafe, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Ted's Army Cafe, Chiang Mai"
  },
  {
    "id": "flying-squirrels-叢林滑索-141",
    "name": {
      "zh-TW": "Flying Squirrels 叢林滑索",
      "en": "Flying Squirrels",
      "th": "Flying Squirrels, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "戶外叢林滑索",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "森林叢林飛躍滑索 (Ziplines)、樹頂走廊空中體驗",
      "en": "Discover Flying Squirrels — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Flying Squirrels, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "森林叢林飛躍滑索 (Ziplines)",
        "樹頂走廊空中體驗"
      ],
      "en": [
        "Flying Squirrels signature experience",
        "Flying Squirrels signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Flying Squirrels, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Flying Squirrels, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "適合喜愛冒險遊客",
      "en": "Location highlight & travel tip for Flying Squirrels.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Flying Squirrels, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Flying Squirrels 叢林滑索，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Flying Squirrels with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Flying Squirrels, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Flying Squirrels, Chiang Mai"
  },
  {
    "id": "skyline-adventure-高空滑索-142",
    "name": {
      "zh-TW": "Skyline Adventure 高空滑索",
      "en": "Skyline Adventure",
      "th": "Skyline Adventure, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "戶外叢林滑索",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國最長高空滑索線路之一、飛越高山峽谷雨林",
      "en": "Discover Skyline Adventure — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Skyline Adventure, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國最長高空滑索線路之一",
        "飛越高山峽谷雨林"
      ],
      "en": [
        "Skyline Adventure signature experience",
        "Skyline Adventure signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Skyline Adventure, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Skyline Adventure, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3.5 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "包含飯店接送",
      "en": "Location highlight & travel tip for Skyline Adventure.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Skyline Adventure, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Skyline Adventure 高空滑索，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Skyline Adventure with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Skyline Adventure, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Skyline Adventure, Chiang Mai"
  },
  {
    "id": "三甘攀天然溫泉-san-kamphaeng-springs-143",
    "name": {
      "zh-TW": "三甘攀天然溫泉 (San Kamphaeng Springs)",
      "en": "San Kamphaeng Springs",
      "th": "San Kamphaeng Springs, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/三甘攀天然溫泉-san-kamphaeng-springs-143.jpg",
    "tag": {
      "zh-TW": "天然溫泉公園",
      "en": "Natural Hot Springs",
      "th": "บ่อน้ำพุร้อนธรรมชาติ"
    },
    "description": {
      "zh-TW": "高壓噴湧溫泉水柱、露天泡腳池與煮溫泉蛋體驗",
      "en": "Discover San Kamphaeng Springs — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ San Kamphaeng Springs, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "高壓噴湧溫泉水柱",
        "露天泡腳池與煮溫泉蛋體驗"
      ],
      "en": [
        "San Kamphaeng Springs signature experience",
        "San Kamphaeng Springs signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ San Kamphaeng Springs, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ San Kamphaeng Springs, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "回程途經中途站",
      "en": "Location highlight & travel tip for San Kamphaeng Springs.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ San Kamphaeng Springs, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達三甘攀天然溫泉 (San Kamphaeng Springs)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to San Kamphaeng Springs with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว San Kamphaeng Springs, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "San Kamphaeng Springs, Chiang Mai"
  },
  {
    "id": "博桑手作紙傘村-bo-sang-village-144",
    "name": {
      "zh-TW": "博桑手作紙傘村 (Bo Sang Village)",
      "en": "Bo Sang Village",
      "th": "Bo Sang Village, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/博桑手作紙傘村-bo-sang-village-144.jpg",
    "tag": {
      "zh-TW": "傳統手作村",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "百年彩繪竹骨紙傘手作村、師傅現場在手機殼/包包彩繪",
      "en": "Discover Bo Sang Village — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Bo Sang Village, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "百年彩繪竹骨紙傘手作村",
        "師傅現場在手機殼/包包彩繪"
      ],
      "en": [
        "Bo Sang Village signature experience",
        "Bo Sang Village signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Bo Sang Village, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Bo Sang Village, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "三甘攀路上",
      "en": "Location highlight & travel tip for Bo Sang Village.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Bo Sang Village, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達博桑手作紙傘村 (Bo Sang Village)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Bo Sang Village with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Bo Sang Village, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Bo Sang Village, Chiang Mai"
  },
  {
    "id": "博桑手工紙傘文創館-145",
    "name": {
      "zh-TW": "博桑手工紙傘文創館",
      "en": "Bo Sang Umbrella Village & Cultural Centre",
      "th": "หมู่บ้านทำร่มบ่อสร้างและหัตถกรรม"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "文化體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "彩繪紙傘 DIY 體驗、泰國傳統桑皮紙製作展示",
      "en": "Discover Bo Sang Umbrella Village & Cultural Centre — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ หมู่บ้านทำร่มบ่อสร้างและหัตถกรรม จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "彩繪紙傘 DIY 體驗",
        "泰國傳統桑皮紙製作展示"
      ],
      "en": [
        "Bo Sang Umbrella Village & Cultural Centre signature experience",
        "Bo Sang Umbrella Village & Cultural Centre signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ หมู่บ้านทำร่มบ่อสร้างและหัตถกรรม",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ หมู่บ้านทำร่มบ่อสร้างและหัตถกรรม"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "適合親子 DIY",
      "en": "Location highlight & travel tip for Bo Sang Umbrella Village & Cultural Centre.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ หมู่บ้านทำร่มบ่อสร้างและหัตถกรรม"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達博桑手工紙傘文創館，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Bo Sang Umbrella Village & Cultural Centre with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว หมู่บ้านทำร่มบ่อสร้างและหัตถกรรม อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "博桑手工紙傘文創館, Chiang Mai"
  },
  {
    "id": "雙溪谷地觀景台-doi-saket-146",
    "name": {
      "zh-TW": "雙溪谷地觀景台 (Doi Saket)",
      "en": "Doi Saket",
      "th": "Doi Saket, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "高山觀景台",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "位於梅翁與雙溪山脈交界、俯瞰水庫與高山谷地",
      "en": "Discover Doi Saket — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Doi Saket, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "位於梅翁與雙溪山脈交界",
        "俯瞰水庫與高山谷地"
      ],
      "en": [
        "Doi Saket signature experience",
        "Doi Saket signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Saket, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Saket, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "公路景觀點",
      "en": "Location highlight & travel tip for Doi Saket.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Doi Saket, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達雙溪谷地觀景台 (Doi Saket)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Doi Saket with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Doi Saket, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Doi Saket, Chiang Mai"
  },
  {
    "id": "the-giant-zipline-大樹高空滑索-147",
    "name": {
      "zh-TW": "The Giant Zipline (大樹高空滑索)",
      "en": "The Giant Zipline",
      "th": "The Giant Zipline, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "樹頂高空體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "從千年大樹冠頂直接滑向對面山谷的單線體驗",
      "en": "Discover The Giant Zipline — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ The Giant Zipline, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "從千年大樹冠頂直接滑向對面山谷的單線體驗"
      ],
      "en": [
        "The Giant Zipline signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ The Giant Zipline, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "0.5 小時",
      "en": "30 Mins",
      "th": "30 นาที"
    },
    "tips": {
      "zh-TW": "大樹咖啡館內",
      "en": "Location highlight & travel tip for The Giant Zipline.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ The Giant Zipline, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達The Giant Zipline (大樹高空滑索)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to The Giant Zipline with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว The Giant Zipline, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "The Giant Zipline, Chiang Mai"
  },
  {
    "id": "綠野仙蹤溫泉度假村-san-kamphaeng-hot-sp-148",
    "name": {
      "zh-TW": "綠野仙蹤溫泉度假村 (San Kamphaeng Hot Spring Resort)",
      "en": "San Kamphaeng Hot Spring Resort",
      "th": "San Kamphaeng Hot Spring Resort, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "溫泉休閒",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "天然礦物溫泉個人湯屋、露天溫泉游泳池與日式足湯",
      "en": "Discover San Kamphaeng Hot Spring Resort — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ San Kamphaeng Hot Spring Resort, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "天然礦物溫泉個人湯屋",
        "露天溫泉游泳池與日式足湯"
      ],
      "en": [
        "San Kamphaeng Hot Spring Resort signature experience",
        "San Kamphaeng Hot Spring Resort signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ San Kamphaeng Hot Spring Resort, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ San Kamphaeng Hot Spring Resort, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "三甘攀山腳",
      "en": "Location highlight & travel tip for San Kamphaeng Hot Spring Resort.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ San Kamphaeng Hot Spring Resort, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達綠野仙蹤溫泉度假村 (San Kamphaeng Hot Spring Resort)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to San Kamphaeng Hot Spring Resort with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว San Kamphaeng Hot Spring Resort, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "San Kamphaeng Hot Spring Resort, Chiang Mai"
  },
  {
    "id": "baan-suan-phak-泰北蔬菜園-149",
    "name": {
      "zh-TW": "Baan Suan Phak (泰北蔬菜園)",
      "en": "Baan Suan Phak",
      "th": "Baan Suan Phak, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-kampong-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林推薦美饌",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林推薦！天然農場有機蔬果料理、泰式炸魚與鮮採沙拉",
      "en": "Discover Baan Suan Phak — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Baan Suan Phak, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林推薦",
        "天然農場有機蔬果料理",
        "泰式炸魚與鮮採沙拉"
      ],
      "en": [
        "Baan Suan Phak signature experience",
        "Baan Suan Phak signature experience",
        "Baan Suan Phak signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Suan Phak, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Suan Phak, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Suan Phak, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "東郊綠意庭園",
      "en": "Location highlight & travel tip for Baan Suan Phak.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Baan Suan Phak, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Baan Suan Phak (泰北蔬菜園)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Baan Suan Phak with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Baan Suan Phak, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Baan Suan Phak, Chiang Mai"
  },
  {
    "id": "pure-vegan-heaven-chiang-mai-150",
    "name": {
      "zh-TW": "Pure Vegan Heaven (純淨天堂蔬食餐廳)",
      "en": "Pure Vegan Heaven",
      "th": "Pure Vegan Heaven, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "素食/純素餐廳",
      "en": "Vegan & Vegetarian Restaurant",
      "th": "ร้านอาหารมังสวิรัติและวีแกน"
    },
    "description": {
      "zh-TW": "杭東熱門爆款純素天堂餐廳！純素墨西哥塔可、彩虹水果碗與純素起司通心粉",
      "en": "Discover Pure Vegan Heaven — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Pure Vegan Heaven, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "杭東熱門爆款純素天堂餐廳",
        "純素墨西哥塔可",
        "彩虹水果碗與純素起司通心粉"
      ],
      "en": [
        "Pure Vegan Heaven signature experience",
        "Pure Vegan Heaven signature experience",
        "Pure Vegan Heaven signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pure Vegan Heaven, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pure Vegan Heaven, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pure Vegan Heaven, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "杭東區必去純素",
      "en": "Location highlight & travel tip for Pure Vegan Heaven.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Pure Vegan Heaven, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Pure Vegan Heaven (純淨天堂蔬食餐廳)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Pure Vegan Heaven with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Pure Vegan Heaven, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Pure Vegan Heaven, Chiang Mai"
  },
  {
    "id": "梅莎七層瀑布-mae-sa-waterfall-151",
    "name": {
      "zh-TW": "梅莎七層瀑布 (Mae Sa Waterfall)",
      "en": "Mae Sa Waterfall",
      "th": "Mae Sa Waterfall, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/梅莎七層瀑布-mae-sa-waterfall-151.jpg",
    "tag": {
      "zh-TW": "自然瀑布森林",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "梅林區最著名七層階梯式高山瀑布、清涼溪流與森林芬多精步道",
      "en": "Discover Mae Sa Waterfall — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Sa Waterfall, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "梅林區最著名七層階梯式高山瀑布",
        "清涼溪流與森林芬多精步道"
      ],
      "en": [
        "Mae Sa Waterfall signature experience",
        "Mae Sa Waterfall signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Sa Waterfall, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Sa Waterfall, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "梅林區核心自然景點",
      "en": "Location highlight & travel tip for Mae Sa Waterfall.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Sa Waterfall, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達梅莎七層瀑布 (Mae Sa Waterfall)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Sa Waterfall with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Sa Waterfall, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "Mae Sa Waterfall, Chiang Mai"
  },
  {
    "id": "清邁皇家陸軍實彈射擊場-mae-rim-shooting-c-152",
    "name": {
      "zh-TW": "清邁皇家陸軍實彈射擊場 (Mae Rim Shooting Club)",
      "en": "Mae Rim Shooting Club",
      "th": "Mae Rim Shooting Club, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "極限冒險體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國皇家陸軍正規實彈射擊靶場！霰彈槍、9mm 手槍、AR15 步槍真槍實彈體驗與教練指導",
      "en": "Discover Mae Rim Shooting Club — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Rim Shooting Club, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國皇家陸軍正規實彈射擊靶場",
        "霰彈槍",
        "9mm 手槍",
        "AR15 步槍真槍實彈體驗與教練指導"
      ],
      "en": [
        "Mae Rim Shooting Club signature experience",
        "Mae Rim Shooting Club signature experience",
        "Mae Rim Shooting Club signature experience",
        "Mae Rim Shooting Club signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Rim Shooting Club, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Rim Shooting Club, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Rim Shooting Club, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Rim Shooting Club, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "梅林區熱門冒險行程",
      "en": "Location highlight & travel tip for Mae Rim Shooting Club.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Rim Shooting Club, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁皇家陸軍實彈射擊場 (Mae Rim Shooting Club)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Rim Shooting Club with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Rim Shooting Club, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Mae Rim Shooting Club, Chiang Mai"
  },
  {
    "id": "清邁-atv-越野車冒險-chiang-mai-atv-of-153",
    "name": {
      "zh-TW": "清邁 ATV 越野車冒險 (Chiang Mai ATV Off-Road)",
      "en": "Chiang Mai ATV Off-Road",
      "th": "Chiang Mai ATV Off-Road"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "戶外極限體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "駕駛四輪全地形 ATV 越野車穿梭梅林山谷泥地、溪流與泥濘步道",
      "en": "Discover Chiang Mai ATV Off-Road — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chiang Mai ATV Off-Road จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "駕駛四輪全地形 ATV 越野車穿梭梅林山谷泥地",
        "溪流與泥濘步道"
      ],
      "en": [
        "Chiang Mai ATV Off-Road signature experience",
        "Chiang Mai ATV Off-Road signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai ATV Off-Road",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Mai ATV Off-Road"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "含安全裝備與教練",
      "en": "Location highlight & travel tip for Chiang Mai ATV Off-Road.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chiang Mai ATV Off-Road"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁 ATV 越野車冒險 (Chiang Mai ATV Off-Road)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chiang Mai ATV Off-Road with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chiang Mai ATV Off-Road อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Chiang Mai ATV Off-Road"
  },
  {
    "id": "清邁-paramotor-輕型動力傘-paramotor-f-154",
    "name": {
      "zh-TW": "清邁 Paramotor 輕型動力傘 (Paramotor Flight)",
      "en": "Paramotor Flight",
      "th": "Paramotor Flight, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "高空飛行體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "專業飛行員帶領乘坐動力飛行傘升空、鳥瞰清邁日出與稻田全景",
      "en": "Discover Paramotor Flight — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Paramotor Flight, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "專業飛行員帶領乘坐動力飛行傘升空",
        "鳥瞰清邁日出與稻田全景"
      ],
      "en": [
        "Paramotor Flight signature experience",
        "Paramotor Flight signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Paramotor Flight, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Paramotor Flight, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清晨日出時段",
      "en": "Location highlight & travel tip for Paramotor Flight.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Paramotor Flight, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁 Paramotor 輕型動力傘 (Paramotor Flight)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Paramotor Flight with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Paramotor Flight, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Paramotor Flight, Chiang Mai"
  },
  {
    "id": "ajarn-saiyuds-kitchen-saiyud-皇-155",
    "name": {
      "zh-TW": "Ajarn Saiyud's Kitchen (Saiyud 皇家宮廷菜)",
      "en": "Ajarn Saiyud's Kitchen (Royal Thai Cuisine)",
      "th": "ครัวอาจารย์สายหยุดและหมอทราย"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登餐廳",
      "en": "Michelin Bib Gourmand Restaurant",
      "th": "ร้านอาหารแนะนำมิชลิน บิบ กูร์มองด์"
    },
    "description": {
      "zh-TW": "米其林必比登推薦！清邁最頂級皇家雕花宮廷菜、泰式蝶豆花雕花點心",
      "en": "Discover Ajarn Saiyud's Kitchen (Royal Thai Cuisine) — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ ครัวอาจารย์สายหยุดและหมอทราย จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林必比登推薦",
        "清邁最頂級皇家雕花宮廷菜",
        "泰式蝶豆花雕花點心"
      ],
      "en": [
        "Ajarn Saiyud's Kitchen (Royal Thai Cuisine) signature experience",
        "Ajarn Saiyud's Kitchen (Royal Thai Cuisine) signature experience",
        "Ajarn Saiyud's Kitchen (Royal Thai Cuisine) signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ ครัวอาจารย์สายหยุดและหมอทราย",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ ครัวอาจารย์สายหยุดและหมอทราย",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ ครัวอาจารย์สายหยุดและหมอทราย"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "需提前一個月預約",
      "en": "Location highlight & travel tip for Ajarn Saiyud's Kitchen (Royal Thai Cuisine).",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ ครัวอาจารย์สายหยุดและหมอทราย"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Ajarn Saiyud's Kitchen (Saiyud 皇家宮廷菜)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Ajarn Saiyud's Kitchen (Royal Thai Cuisine) with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว ครัวอาจารย์สายหยุดและหมอทราย อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Saiyud 皇家宮廷菜, Chiang Mai"
  },
  {
    "id": "chom-cafe-restaurant-仙境瀑布-156",
    "name": {
      "zh-TW": "Chom Cafe & Restaurant (熱帶雨林瀑布咖啡)",
      "en": "Chom Cafe & Restaurant",
      "th": "Chom Cafe & Restaurant (คาเฟ่น้ำตกในป่า)"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "熱帶雨林瀑布咖啡",
      "en": "Rainforest Waterfall Cafe",
      "th": "คาเฟ่น้ำตกป่าเมืองร้อน"
    },
    "description": {
      "zh-TW": "清邁最夢幻熱帶雨林花園！自然水霧、人造瀑布與綠苔秘境景觀餐廳",
      "en": "Discover Chom Cafe & Restaurant — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chom Cafe & Restaurant (คาเฟ่น้ำตกในป่า) จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁最夢幻花園",
        "熱帶雨林水霧",
        "人造瀑布與綠苔秘境"
      ],
      "en": [
        "Chiang Mai most dreamy tropical garden",
        "tropical rainforest mist atmosphere",
        "Fairytale artificial waterfall & moss-covered rainforest garden"
      ],
      "th": [
        "สวนเมืองร้อนสุดอลังการแห่งเชียงใหม่",
        "บรรยากาศม่านหมอกในป่าดิบชื้น",
        "น้ำตกจำลองและสวนมอสเขียวขจี"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "建議預約免排隊",
      "en": "Location highlight & travel tip for Chom Cafe & Restaurant.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chom Cafe & Restaurant (คาเฟ่น้ำตกในป่า)"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Chom Cafe & Restaurant (熱帶雨林瀑布咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chom Cafe & Restaurant with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chom Cafe & Restaurant (คาเฟ่น้ำตกในป่า) อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Chom Cafe & Restaurant, Chiang Mai"
  },
  {
    "id": "carp-café-錦鯉咖啡館-157",
    "name": {
      "zh-TW": "Carp Café (錦鯉咖啡館)",
      "en": "Carp Caf",
      "th": "Carp Caf, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "爆款網美咖啡",
      "en": "Trending Instagrammable Cafe",
      "th": "คาเฟ่ยอดนิยมถ่ายรูปสวย"
    },
    "description": {
      "zh-TW": "數萬條絢麗日本錦鯉悠游水池、日式霧氣庭園與日式餐點甜點",
      "en": "Discover Carp Caf — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Carp Caf, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "數萬條絢麗日本錦鯉悠游水池",
        "日式霧氣庭園與日式餐點甜點"
      ],
      "en": [
        "Carp Caf signature experience",
        "Carp Caf signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Carp Caf, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Carp Caf, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "杭東區打卡首選",
      "en": "Location highlight & travel tip for Carp Caf.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Carp Caf, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Carp Café (錦鯉咖啡館)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Carp Caf with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Carp Caf, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Carp Caf, Chiang Mai"
  },
  {
    "id": "黑森林景觀餐廳-khaomaokhaofang-158",
    "name": {
      "zh-TW": "黑森林景觀餐廳 (Khaomao-Khaofang)",
      "en": "Khaomao-Khaofang",
      "th": "Khaomao-Khaofang, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "爆款景觀餐廳",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "被譽為世界前十大森林系餐廳！巨型室內瀑布、流泉與花卉宴會",
      "en": "Discover Khaomao-Khaofang — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Khaomao-Khaofang, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "被譽為世界前十大森林系餐廳",
        "巨型室內瀑布",
        "流泉與花卉宴會"
      ],
      "en": [
        "Khaomao-Khaofang signature experience",
        "Khaomao-Khaofang signature experience",
        "Khaomao-Khaofang signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khaomao-Khaofang, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khaomao-Khaofang, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khaomao-Khaofang, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "杭東最熱門景觀餐廳",
      "en": "Location highlight & travel tip for Khaomao-Khaofang.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Khaomao-Khaofang, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達黑森林景觀餐廳 (Khaomao-Khaofang)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Khaomao-Khaofang with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Khaomao-Khaofang, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Khaomao-Khaofang, Chiang Mai"
  },
  {
    "id": "大象朋友飯店-chai-lai-orchid-159",
    "name": {
      "zh-TW": "大象朋友飯店 / Chai Lai Orchid",
      "en": "The Chai Lai Orchid Elephant Eco Resort",
      "th": "เดอะ ชายลาย ออร์คิด รีสอร์ทช้าง"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "爆款大象體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "IG爆紅大象朋友飯店！大象早晨叩窗敲門、大象溪流沐浴與竹伐漂流",
      "en": "Discover The Chai Lai Orchid Elephant Eco Resort — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ เดอะ ชายลาย ออร์คิด รีสอร์ทช้าง จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "IG爆紅大象朋友飯店",
        "大象早晨叩窗敲門",
        "大象溪流沐浴與竹伐漂流"
      ],
      "en": [
        "The Chai Lai Orchid Elephant Eco Resort signature experience",
        "The Chai Lai Orchid Elephant Eco Resort signature experience",
        "The Chai Lai Orchid Elephant Eco Resort signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ เดอะ ชายลาย ออร์คิด รีสอร์ทช้าง",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ เดอะ ชายลาย ออร์คิด รีสอร์ทช้าง",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ เดอะ ชายลาย ออร์คิด รีสอร์ทช้าง"
      ]
    },
    "recommendedTime": {
      "zh-TW": "半天 ~ 一晚",
      "en": "Half Day",
      "th": "ครึ่งวัน"
    },
    "tips": {
      "zh-TW": "美王縣爆款住宿體驗",
      "en": "Location highlight & travel tip for The Chai Lai Orchid Elephant Eco Resort.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ เดอะ ชายลาย ออร์คิด รีสอร์ทช้าง"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達大象朋友飯店 / Chai Lai Orchid，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to The Chai Lai Orchid Elephant Eco Resort with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว เดอะ ชายลาย ออร์คิด รีสอร์ทช้าง อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "大象朋友飯店 / Chai Lai Orchid, Chiang Mai"
  },
  {
    "id": "elephant-poopoopaper-park-大象便便-160",
    "name": {
      "zh-TW": "Elephant POOPOOPAPER Park (大象便便紙公園)",
      "en": "Elephant POOPOOPAPER Park",
      "th": "Elephant POOPOOPAPER Park, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "親子環保手作",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "大象糞便回收造紙主題公園！寓教於樂、手作便便紙手工書與書籤",
      "en": "Discover Elephant POOPOOPAPER Park — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Elephant POOPOOPAPER Park, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "大象糞便回收造紙主題公園",
        "寓教於樂",
        "手作便便紙手工書與書籤"
      ],
      "en": [
        "Elephant POOPOOPAPER Park signature experience",
        "Elephant POOPOOPAPER Park signature experience",
        "Elephant POOPOOPAPER Park signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Elephant POOPOOPAPER Park, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Elephant POOPOOPAPER Park, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Elephant POOPOOPAPER Park, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "梅林區爆款親子景點",
      "en": "Location highlight & travel tip for Elephant POOPOOPAPER Park.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Elephant POOPOOPAPER Park, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Elephant POOPOOPAPER Park (大象便便紙公園)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Elephant POOPOOPAPER Park with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Elephant POOPOOPAPER Park, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Elephant POOPOOPAPER Park, Chiang Mai"
  },
  {
    "id": "elephant-nature-park-大象自然公園-161",
    "name": {
      "zh-TW": "Elephant Nature Park (大象自然公園)",
      "en": "Elephant Nature Park",
      "th": "Elephant Nature Park, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/elephant-nature-park-大象自然公園-161.jpg",
    "tag": {
      "zh-TW": "大象體驗/生態",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "友善大象保護區、不騎大象、給大象洗澡餵食體驗",
      "en": "Discover Elephant Nature Park — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Elephant Nature Park, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "友善大象保護區",
        "不騎大象",
        "給大象洗澡餵食體驗"
      ],
      "en": [
        "Elephant Nature Park signature experience",
        "Elephant Nature Park signature experience",
        "Elephant Nature Park signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Elephant Nature Park, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Elephant Nature Park, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Elephant Nature Park, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "半天",
      "en": "Half Day",
      "th": "ครึ่งวัน"
    },
    "tips": {
      "zh-TW": "需提前官網預約",
      "en": "Location highlight & travel tip for Elephant Nature Park.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Elephant Nature Park, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Elephant Nature Park (大象自然公園)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Elephant Nature Park with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Elephant Nature Park, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Elephant Nature Park, Chiang Mai"
  },
  {
    "id": "kanta-elephant-sanctuary-坎塔大象保-162",
    "name": {
      "zh-TW": "Kanta Elephant Sanctuary (坎塔大象保護區)",
      "en": "Kanta Elephant Sanctuary",
      "th": "Kanta Elephant Sanctuary, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "友善大象體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "阿勛熱門推薦！穿著卡倫族服飾、製作大象營養飯糰與泥巴浴",
      "en": "Discover Kanta Elephant Sanctuary — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Kanta Elephant Sanctuary, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "阿勛熱門推薦",
        "穿著卡倫族服飾",
        "製作大象營養飯糰與泥巴浴"
      ],
      "en": [
        "Kanta Elephant Sanctuary signature experience",
        "Kanta Elephant Sanctuary signature experience",
        "Kanta Elephant Sanctuary signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kanta Elephant Sanctuary, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kanta Elephant Sanctuary, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kanta Elephant Sanctuary, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "半天",
      "en": "Half Day",
      "th": "ครึ่งวัน"
    },
    "tips": {
      "zh-TW": "不騎大象無表演",
      "en": "Location highlight & travel tip for Kanta Elephant Sanctuary.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Kanta Elephant Sanctuary, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Kanta Elephant Sanctuary (坎塔大象保護區)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Kanta Elephant Sanctuary with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Kanta Elephant Sanctuary, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Kanta Elephant Sanctuary, Chiang Mai"
  },
  {
    "id": "hugelephant-抱抱大象保護區-163",
    "name": {
      "zh-TW": "HugElephant (抱抱大象保護區)",
      "en": "HugElephant",
      "th": "HugElephant, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "友善大象體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "美王山谷高山大象保育園區、大象溪流散步與洗澡",
      "en": "Discover HugElephant — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ HugElephant, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "美王山谷高山大象保育園區",
        "大象溪流散步與洗澡"
      ],
      "en": [
        "HugElephant signature experience",
        "HugElephant signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ HugElephant, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ HugElephant, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "半天",
      "en": "Half Day",
      "th": "ครึ่งวัน"
    },
    "tips": {
      "zh-TW": "美王縣",
      "en": "Location highlight & travel tip for HugElephant.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ HugElephant, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達HugElephant (抱抱大象保護區)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to HugElephant with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว HugElephant, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "HugElephant, Chiang Mai"
  },
  {
    "id": "梅莎大象營-mae-sa-elephant-camp-164",
    "name": {
      "zh-TW": "梅莎大象營 (Mae Sa Elephant Camp)",
      "en": "Mae Sa Elephant Camp",
      "th": "Mae Sa Elephant Camp, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "傳統大象營",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁老牌大象園區、大象洗澡與大象餵食互動體驗",
      "en": "Discover Mae Sa Elephant Camp — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Sa Elephant Camp, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁老牌大象園區",
        "大象洗澡與大象餵食互動體驗"
      ],
      "en": [
        "Mae Sa Elephant Camp signature experience",
        "Mae Sa Elephant Camp signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Sa Elephant Camp, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Sa Elephant Camp, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "梅林區",
      "en": "Location highlight & travel tip for Mae Sa Elephant Camp.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Sa Elephant Camp, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達梅莎大象營 (Mae Sa Elephant Camp)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Sa Elephant Camp with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Sa Elephant Camp, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Mae Sa Elephant Camp, Chiang Mai"
  },
  {
    "id": "清邁夜間野生動物園-night-safari-165",
    "name": {
      "zh-TW": "清邁夜間野生動物園 (Night Safari)",
      "en": "Night Safari",
      "th": "Night Safari, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清邁夜間野生動物園-night-safari-165.jpg",
    "tag": {
      "zh-TW": "夜間生態體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "乘坐開放式遊園車近距離餵食長頸鹿、斑馬與猛獸展演",
      "en": "Discover Night Safari — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Night Safari, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "乘坐開放式遊園車近距離餵食長頸鹿",
        "斑馬與猛獸展演"
      ],
      "en": [
        "Night Safari signature experience",
        "Night Safari signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Night Safari, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Night Safari, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "傍晚 18:00 入園最佳",
      "en": "Location highlight & travel tip for Night Safari.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Night Safari, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁夜間野生動物園 (Night Safari)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Night Safari with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Night Safari, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Night Safari, Chiang Mai"
  },
  {
    "id": "金山寺-wat-phra-that-doi-kham-166",
    "name": {
      "zh-TW": "金山寺 (Wat Phra That Doi Kham)",
      "en": "Wat Phra That Doi Kham",
      "th": "Wat Phra That Doi Kham, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/金山寺-wat-phra-that-doi-kham-166.jpg",
    "tag": {
      "zh-TW": "許願靈驗寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁許願最靈驗寺廟！17公尺巨型坐佛、滿山茉莉花供奉",
      "en": "Discover Wat Phra That Doi Kham — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Phra That Doi Kham, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁許願最靈驗寺廟",
        "17公尺巨型坐佛",
        "滿山茉莉花供奉"
      ],
      "en": [
        "Wat Phra That Doi Kham signature experience",
        "Wat Phra That Doi Kham signature experience",
        "Wat Phra That Doi Kham signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Doi Kham, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Doi Kham, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Doi Kham, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "杭東山丘",
      "en": "Location highlight & travel tip for Wat Phra That Doi Kham.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Phra That Doi Kham, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達金山寺 (Wat Phra That Doi Kham)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Phra That Doi Kham with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Phra That Doi Kham, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Phra That Doi Kham, Chiang Mai"
  },
  {
    "id": "皇家花園-royal-park-rajapruek-167",
    "name": {
      "zh-TW": "皇家花園 (Royal Park Rajapruek)",
      "en": "Royal Park Rajapruek",
      "th": "Royal Park Rajapruek, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/皇家花園-royal-park-rajapruek-167.jpg",
    "tag": {
      "zh-TW": "皇家植物園",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "拉查帕皇家植物園、黃金蘭納宮殿主殿與各國展覽花園",
      "en": "Discover Royal Park Rajapruek — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Royal Park Rajapruek, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "拉查帕皇家植物園",
        "黃金蘭納宮殿主殿與各國展覽花園"
      ],
      "en": [
        "Royal Park Rajapruek signature experience",
        "Royal Park Rajapruek signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Royal Park Rajapruek, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Royal Park Rajapruek, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "可搭乘園區遊覽車",
      "en": "Location highlight & travel tip for Royal Park Rajapruek.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Royal Park Rajapruek, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達皇家花園 (Royal Park Rajapruek)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Royal Park Rajapruek with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Royal Park Rajapruek, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Royal Park Rajapruek, Chiang Mai"
  },
  {
    "id": "蒙瞻山-mon-jam-夢瞻山-168",
    "name": {
      "zh-TW": "蒙瞻山 (Mon Jam / 夢瞻山)",
      "en": "Mon Jam",
      "th": "Mon Jam, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/蒙瞻山-mon-jam-夢瞻山-168.jpg",
    "tag": {
      "zh-TW": "高山景觀/花海",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "高山梯田花海、懸崖露營、高山木製卡丁車 (Hmong Cart)",
      "en": "Discover Mon Jam — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mon Jam, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "高山梯田花海",
        "懸崖露營",
        "高山木製卡丁車 (Hmong Cart)"
      ],
      "en": [
        "Mon Jam signature experience",
        "Mon Jam signature experience",
        "Mon Jam signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mon Jam, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mon Jam, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mon Jam, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "梅林區高山",
      "en": "Location highlight & travel tip for Mon Jam.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mon Jam, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達蒙瞻山 (Mon Jam / 夢瞻山)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mon Jam with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mon Jam, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Mon Jam, Chiang Mai"
  },
  {
    "id": "fleur-cafe-eatery-169",
    "name": {
      "zh-TW": "Fleur Cafe & Eatery (芙洛兒英式莊園花園咖啡)",
      "en": "Fleur Cafe & Eatery",
      "th": "Fleur Cafe & Eatery, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "英式莊園咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "梅林區絕美英式玫瑰花園、白色玻璃木屋與法式甜點",
      "en": "Discover Fleur Cafe & Eatery — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Fleur Cafe & Eatery, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "梅林區絕美英式玫瑰花園",
        "白色玻璃木屋與法式甜點"
      ],
      "en": [
        "Fleur Cafe & Eatery signature experience",
        "Fleur Cafe & Eatery signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Fleur Cafe & Eatery, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Fleur Cafe & Eatery, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "梅林區打卡名店",
      "en": "Location highlight & travel tip for Fleur Cafe & Eatery.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Fleur Cafe & Eatery, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Fleur Cafe & Eatery (芙洛兒英式莊園花園咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Fleur Cafe & Eatery with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Fleur Cafe & Eatery, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Fleur Cafe & Eatery, Chiang Mai"
  },
  {
    "id": "皇后植物園天空步道-queen-sirikit-170",
    "name": {
      "zh-TW": "皇后植物園天空步道 (Queen Sirikit)",
      "en": "Queen Sirikit",
      "th": "Queen Sirikit, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/皇后植物園天空步道-queen-sirikit-170.jpg",
    "tag": {
      "zh-TW": "植物園/空中步道",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "樹頂透明空中玻璃步道與巨型溫室多肉植物園",
      "en": "Discover Queen Sirikit — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Queen Sirikit, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "樹頂透明空中玻璃步道與巨型溫室多肉植物園"
      ],
      "en": [
        "Queen Sirikit signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Queen Sirikit, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "梅林區地標",
      "en": "Location highlight & travel tip for Queen Sirikit.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Queen Sirikit, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達皇后植物園天空步道 (Queen Sirikit)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Queen Sirikit with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Queen Sirikit, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Queen Sirikit, Chiang Mai"
  },
  {
    "id": "帕丘峽谷-pha-chor-canyon-171",
    "name": {
      "zh-TW": "帕丘峽谷 (Pha Chor Canyon)",
      "en": "Pha Chor Canyon",
      "th": "Pha Chor Canyon, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/帕丘峽谷-pha-chor-canyon-171.jpg",
    "tag": {
      "zh-TW": "自然地質奇景",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "被譽為「泰國版大峽谷」的天然地質巨石柱與峽谷奇景",
      "en": "Discover Pha Chor Canyon — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Pha Chor Canyon, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "被譽為「泰國版大峽谷」的天然地質巨石柱與峽谷奇景"
      ],
      "en": [
        "Pha Chor Canyon signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pha Chor Canyon, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清邁南部美王縣",
      "en": "Location highlight & travel tip for Pha Chor Canyon.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Pha Chor Canyon, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達帕丘峽谷 (Pha Chor Canyon)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Pha Chor Canyon with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Pha Chor Canyon, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "Pha Chor Canyon, Chiang Mai"
  },
  {
    "id": "惠登套湖-huay-tung-tao-lake-172",
    "name": {
      "zh-TW": "惠登套湖 (Huay Tung Tao Lake)",
      "en": "Huay Tung Tao Lake",
      "th": "Huay Tung Tao Lake, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/惠登套湖-huay-tung-tao-lake-172.jpg",
    "tag": {
      "zh-TW": "湖畔農場景觀",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "巨型草編大象金剛家族雕塑、湖畔涼亭泰菜與水上腳踏船",
      "en": "Discover Huay Tung Tao Lake — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Huay Tung Tao Lake, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "巨型草編大象金剛家族雕塑",
        "湖畔涼亭泰菜與水上腳踏船"
      ],
      "en": [
        "Huay Tung Tao Lake signature experience",
        "Huay Tung Tao Lake signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Huay Tung Tao Lake, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Huay Tung Tao Lake, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "素貼山腳北側",
      "en": "Location highlight & travel tip for Huay Tung Tao Lake.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Huay Tung Tao Lake, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達惠登套湖 (Huay Tung Tao Lake)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Huay Tung Tao Lake with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Huay Tung Tao Lake, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Huay Tung Tao Lake, Chiang Mai"
  },
  {
    "id": "惠登套湖水中樹-huay-tung-tao-water-tr-173",
    "name": {
      "zh-TW": "惠登套湖水中樹 (Huay Tung Tao Water Tree)",
      "en": "Huay Tung Tao Water Tree",
      "th": "Huay Tung Tao Water Tree, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "湖畔倒影打卡點",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁爆款景觀！惠登套湖水中矗立的孤獨樹木與草編金剛背景倒影",
      "en": "Discover Huay Tung Tao Water Tree — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Huay Tung Tao Water Tree, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁爆款景觀",
        "惠登套湖水中矗立的孤獨樹木與草編金剛背景倒影"
      ],
      "en": [
        "Huay Tung Tao Water Tree signature experience",
        "Huay Tung Tao Water Tree signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Huay Tung Tao Water Tree, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Huay Tung Tao Water Tree, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "惠登套湖內",
      "en": "Location highlight & travel tip for Huay Tung Tao Water Tree.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Huay Tung Tao Water Tree, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達惠登套湖水中樹 (Huay Tung Tao Water Tree)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Huay Tung Tao Water Tree with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Huay Tung Tao Water Tree, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Huay Tung Tao Water Tree, Chiang Mai"
  },
  {
    "id": "清邁大峽谷水上樂園-grand-canyon-174",
    "name": {
      "zh-TW": "清邁大峽谷水上樂園 (Grand Canyon)",
      "en": "Grand Canyon",
      "th": "Grand Canyon, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "水上戶外樂園",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "採石場天然巨岩水上樂園、高空跳水、充氣水上障礙賽與划艇",
      "en": "Discover Grand Canyon — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Grand Canyon, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "採石場天然巨岩水上樂園",
        "高空跳水",
        "充氣水上障礙賽與划艇"
      ],
      "en": [
        "Grand Canyon signature experience",
        "Grand Canyon signature experience",
        "Grand Canyon signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Grand Canyon, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Grand Canyon, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Grand Canyon, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "杭東區戶外名店",
      "en": "Location highlight & travel tip for Grand Canyon.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Grand Canyon, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁大峽谷水上樂園 (Grand Canyon)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Grand Canyon with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Grand Canyon, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Grand Canyon, Chiang Mai"
  },
  {
    "id": "美王河竹伐漂流-mae-wang-bamboo-raftin-175",
    "name": {
      "zh-TW": "美王河竹伐漂流 (Mae Wang Bamboo Rafting)",
      "en": "Mae Wang Bamboo Rafting",
      "th": "Mae Wang Bamboo Rafting, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "戶外溪流體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "傳統竹筏順著清澈美王河漂流、沿岸清涼溪水與野生大象",
      "en": "Discover Mae Wang Bamboo Rafting — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Wang Bamboo Rafting, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "傳統竹筏順著清澈美王河漂流",
        "沿岸清涼溪水與野生大象"
      ],
      "en": [
        "Mae Wang Bamboo Rafting signature experience",
        "Mae Wang Bamboo Rafting signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Wang Bamboo Rafting, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Wang Bamboo Rafting, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "美王縣爆款",
      "en": "Location highlight & travel tip for Mae Wang Bamboo Rafting.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Wang Bamboo Rafting, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達美王河竹伐漂流 (Mae Wang Bamboo Rafting)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Wang Bamboo Rafting with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Wang Bamboo Rafting, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Mae Wang Bamboo Rafting, Chiang Mai"
  },
  {
    "id": "pongyang-jungle-coaster-ziplin-176",
    "name": {
      "zh-TW": "Pongyang Jungle Coaster (博岩叢林過山車與滑索)",
      "en": "Pongyang Jungle Coaster",
      "th": "Pongyang Jungle Coaster, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "戶外極限體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "梅林高山森林過山車 (Jungle Coaster)、高空自行車與滑索",
      "en": "Discover Pongyang Jungle Coaster — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Pongyang Jungle Coaster, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "梅林高山森林過山車 (Jungle Coaster)",
        "高空自行車與滑索"
      ],
      "en": [
        "Pongyang Jungle Coaster signature experience",
        "Pongyang Jungle Coaster signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pongyang Jungle Coaster, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pongyang Jungle Coaster, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "梅林區爆款",
      "en": "Location highlight & travel tip for Pongyang Jungle Coaster.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Pongyang Jungle Coaster, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Pongyang Jungle Coaster (博岩叢林過山車與滑索)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Pongyang Jungle Coaster with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Pongyang Jungle Coaster, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Pongyang Jungle Coaster, Chiang Mai"
  },
  {
    "id": "eagle-track-zipline-鷹軌叢林滑索-177",
    "name": {
      "zh-TW": "Eagle Track Zipline (鷹軌叢林滑索)",
      "en": "Eagle Track Zipline",
      "th": "Eagle Track Zipline, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "戶外叢林滑索",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "阿勛精選推薦！穿梭梯田、瀑布與森林的冒險空中索道",
      "en": "Discover Eagle Track Zipline — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Eagle Track Zipline, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "阿勛精選推薦",
        "穿梭梯田",
        "瀑布與森林的冒險空中索道"
      ],
      "en": [
        "Eagle Track Zipline signature experience",
        "Eagle Track Zipline signature experience",
        "Eagle Track Zipline signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Eagle Track Zipline, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Eagle Track Zipline, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Eagle Track Zipline, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "梅林區",
      "en": "Location highlight & travel tip for Eagle Track Zipline.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Eagle Track Zipline, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Eagle Track Zipline (鷹軌叢林滑索)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Eagle Track Zipline with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Eagle Track Zipline, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Eagle Track Zipline, Chiang Mai"
  },
  {
    "id": "dragon-flight-zipline-飛龍高空滑索-178",
    "name": {
      "zh-TW": "Dragon Flight Zipline (飛龍高空滑索)",
      "en": "Dragon Flight Zipline",
      "th": "Dragon Flight Zipline, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "戶外叢林滑索",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "包含泰國頂級樹頂過山車與多道高空飛行平台",
      "en": "Discover Dragon Flight Zipline — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Dragon Flight Zipline, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "包含泰國頂級樹頂過山車與多道高空飛行平台"
      ],
      "en": [
        "Dragon Flight Zipline signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Dragon Flight Zipline, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3.5 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "梅林區",
      "en": "Location highlight & travel tip for Dragon Flight Zipline.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Dragon Flight Zipline, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Dragon Flight Zipline (飛龍高空滑索)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Dragon Flight Zipline with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Dragon Flight Zipline, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Dragon Flight Zipline, Chiang Mai"
  },
  {
    "id": "木雕工藝村-baan-tawai-179",
    "name": {
      "zh-TW": "木雕工藝村 (Baan Tawai)",
      "en": "Baan Tawai",
      "th": "Baan Tawai, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "shopping",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_shopping.jpg",
    "tag": {
      "zh-TW": "傳統手作工藝",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁最大傳統木雕手工藝批發村、精雕木家具與裝飾",
      "en": "Discover Baan Tawai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Baan Tawai, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁最大傳統木雕手工藝批發村",
        "精雕木家具與裝飾"
      ],
      "en": [
        "Baan Tawai signature experience",
        "Baan Tawai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Tawai, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Tawai, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "杭東區古老村落",
      "en": "Location highlight & travel tip for Baan Tawai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Baan Tawai, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達木雕工藝村 (Baan Tawai)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Baan Tawai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Baan Tawai, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Baan Tawai, Chiang Mai"
  },
  {
    "id": "老虎王國-tiger-kingdom-chiang-mai-180",
    "name": {
      "zh-TW": "老虎王國 (Tiger Kingdom Chiang Mai)",
      "en": "Tiger Kingdom Chiang Mai",
      "th": "Tiger Kingdom Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "野生動物體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "近距離撫摸與合照大老虎與小老虎、專業飼養員陪同",
      "en": "Discover Tiger Kingdom Chiang Mai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Tiger Kingdom Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "近距離撫摸與合照大老虎與小老虎",
        "專業飼養員陪同"
      ],
      "en": [
        "Tiger Kingdom Chiang Mai signature experience",
        "Tiger Kingdom Chiang Mai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Tiger Kingdom Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Tiger Kingdom Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "梅林區名店",
      "en": "Location highlight & travel tip for Tiger Kingdom Chiang Mai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Tiger Kingdom Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達老虎王國 (Tiger Kingdom Chiang Mai)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Tiger Kingdom Chiang Mai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Tiger Kingdom Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Tiger Kingdom Chiang Mai"
  },
  {
    "id": "綠谷高爾夫球俱樂部-summit-green-valley-181",
    "name": {
      "zh-TW": "綠谷高爾夫球俱樂部 (Summit Green Valley)",
      "en": "Summit Green Valley",
      "th": "Summit Green Valley, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "高爾夫休閒",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "18洞國際錦標賽等級高爾夫球場、壯麗山景倒影",
      "en": "Discover Summit Green Valley — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Summit Green Valley, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "18洞國際錦標賽等級高爾夫球場",
        "壯麗山景倒影"
      ],
      "en": [
        "Summit Green Valley signature experience",
        "Summit Green Valley signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Summit Green Valley, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Summit Green Valley, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "半天",
      "en": "Half Day",
      "th": "ครึ่งวัน"
    },
    "tips": {
      "zh-TW": "梅林區名球場",
      "en": "Location highlight & travel tip for Summit Green Valley.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Summit Green Valley, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達綠谷高爾夫球俱樂部 (Summit Green Valley)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Summit Green Valley with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Summit Green Valley, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Summit Green Valley, Chiang Mai"
  },
  {
    "id": "khao-hom-muang-phrae-米其林帕府風味菜-182",
    "name": {
      "zh-TW": "Khao Hom Muang Phrae (米其林帕府風味菜)",
      "en": "Khao Hom Muang Phrae",
      "th": "Khao Hom Muang Phrae, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林推薦餐廳",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林推薦！泰北帕府古法泰菜、香草烤豬肉與炸魚皮",
      "en": "Discover Khao Hom Muang Phrae — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Khao Hom Muang Phrae, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林推薦",
        "泰北帕府古法泰菜",
        "香草烤豬肉與炸魚皮"
      ],
      "en": [
        "Khao Hom Muang Phrae signature experience",
        "Khao Hom Muang Phrae signature experience",
        "Khao Hom Muang Phrae signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Hom Muang Phrae, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Hom Muang Phrae, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Hom Muang Phrae, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "杭東區庭園",
      "en": "Location highlight & travel tip for Khao Hom Muang Phrae.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Khao Hom Muang Phrae, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Khao Hom Muang Phrae (米其林帕府風味菜)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Khao Hom Muang Phrae with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Khao Hom Muang Phrae, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Khao Hom Muang Phrae, Chiang Mai"
  },
  {
    "id": "因他農山頂-doi-inthanon-peak-183",
    "name": {
      "zh-TW": "因他農山頂 (Doi Inthanon Peak)",
      "en": "Doi Inthanon Peak",
      "th": "Doi Inthanon Peak, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-inthanon-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/因他農山頂-doi-inthanon-peak-183.jpg",
    "tag": {
      "zh-TW": "國家公園/自然",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國最高峰 (2565m)、冷溫帶霧林與 Angel Walk 木棧道健行",
      "en": "Discover Doi Inthanon Peak — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Doi Inthanon Peak, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國最高峰 (2565m)",
        "冷溫帶霧林與 Angel Walk 木棧道健行"
      ],
      "en": [
        "Doi Inthanon Peak signature experience",
        "Doi Inthanon Peak signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Inthanon Peak, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Inthanon Peak, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "全年氣溫涼爽(10-15度)",
      "en": "Location highlight & travel tip for Doi Inthanon Peak.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Doi Inthanon Peak, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達因他農山頂 (Doi Inthanon Peak)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Doi Inthanon Peak with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Doi Inthanon Peak, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "Doi Inthanon Peak, Chiang Mai"
  },
  {
    "id": "國王王后雙塔-king-queen-pagodas-184",
    "name": {
      "zh-TW": "國王王后雙塔 (King & Queen Pagodas)",
      "en": "King & Queen Pagodas",
      "th": "King & Queen Pagodas, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-inthanon-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/國王王后雙塔-king-queen-pagodas-184.jpg",
    "tag": {
      "zh-TW": "皇家地標/花園",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "壯麗高山皇家花園雙塔、俯瞰雲海與紫色彩虹花海",
      "en": "Discover King & Queen Pagodas — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ King & Queen Pagodas, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "壯麗高山皇家花園雙塔",
        "俯瞰雲海與紫色彩虹花海"
      ],
      "en": [
        "King & Queen Pagodas signature experience",
        "King & Queen Pagodas signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ King & Queen Pagodas, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ King & Queen Pagodas, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "有扶手電梯可上塔",
      "en": "Location highlight & travel tip for King & Queen Pagodas.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ King & Queen Pagodas, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達國王王后雙塔 (King & Queen Pagodas)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to King & Queen Pagodas with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว King & Queen Pagodas, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "King & Queen Pagodas, Chiang Mai"
  },
  {
    "id": "瓦吉拉坦瀑布-wachirathan-waterfall-185",
    "name": {
      "zh-TW": "瓦吉拉坦瀑布 (Wachirathan Waterfall)",
      "en": "Wachirathan Waterfall",
      "th": "Wachirathan Waterfall, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-inthanon-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/瓦吉拉坦瀑布-wachirathan-waterfall-185.jpg",
    "tag": {
      "zh-TW": "自然瀑布",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "氣勢磅礡巨型瀑布、水霧彩虹打卡點與山谷咖啡休息站",
      "en": "Discover Wachirathan Waterfall — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wachirathan Waterfall, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "氣勢磅礡巨型瀑布",
        "水霧彩虹打卡點與山谷咖啡休息站"
      ],
      "en": [
        "Wachirathan Waterfall signature experience",
        "Wachirathan Waterfall signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wachirathan Waterfall, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wachirathan Waterfall, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "山腳下必停留站",
      "en": "Location highlight & travel tip for Wachirathan Waterfall.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wachirathan Waterfall, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達瓦吉拉坦瀑布 (Wachirathan Waterfall)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wachirathan Waterfall with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wachirathan Waterfall, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "Wachirathan Waterfall, Chiang Mai"
  },
  {
    "id": "mae-ya-瀑布-mae-ya-waterfall-186",
    "name": {
      "zh-TW": "Mae Ya 瀑布 (Mae Ya Waterfall)",
      "en": "Mae Ya Waterfall",
      "th": "Mae Ya Waterfall, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-inthanon-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/mae-ya-瀑布-mae-ya-waterfall-v2.jpg",
    "tag": {
      "zh-TW": "泰國第一大瀑布",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁最壯觀多層次階梯式巨型瀑布、宛如水簾洞",
      "en": "Discover Mae Ya Waterfall — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Ya Waterfall, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁最壯觀多層次階梯式巨型瀑布",
        "宛如水簾洞"
      ],
      "en": [
        "Mae Ya Waterfall signature experience",
        "Mae Ya Waterfall signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Ya Waterfall, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Ya Waterfall, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "因他農山麓必去",
      "en": "Location highlight & travel tip for Mae Ya Waterfall.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Ya Waterfall, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Mae Ya 瀑布 (Mae Ya Waterfall)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Ya Waterfall with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Ya Waterfall, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "Mae Ya Waterfall, Chiang Mai"
  },
  {
    "id": "sirithan-瀑布-mae-klang-187",
    "name": {
      "zh-TW": "Sirithan 瀑布 (Mae Klang)",
      "en": "Mae Klang",
      "th": "Mae Klang, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-inthanon-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "自然瀑布",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "山谷深處雙層飛瀑、森林芬多精健行步道",
      "en": "Discover Mae Klang — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Klang, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "山谷深處雙層飛瀑",
        "森林芬多精健行步道"
      ],
      "en": [
        "Mae Klang signature experience",
        "Mae Klang signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Klang, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Klang, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "國家公園內",
      "en": "Location highlight & travel tip for Mae Klang.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Klang, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Sirithan 瀑布 (Mae Klang)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Klang with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Klang, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "Mae Klang, Chiang Mai"
  },
  {
    "id": "kew-mae-pan-雲海步道-188",
    "name": {
      "zh-TW": "Kew Mae Pan 雲海步道",
      "en": "Kew Mae Pan",
      "th": "Kew Mae Pan, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-inthanon-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "高山健行步道",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁最美雲海健行步道、高山杜鵑花與懸崖景觀平台",
      "en": "Discover Kew Mae Pan — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Kew Mae Pan, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁最美雲海健行步道",
        "高山杜鵑花與懸崖景觀平台"
      ],
      "en": [
        "Kew Mae Pan signature experience",
        "Kew Mae Pan signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kew Mae Pan, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Kew Mae Pan, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "每年11月至5月開放",
      "en": "Location highlight & travel tip for Kew Mae Pan.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Kew Mae Pan, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Kew Mae Pan 雲海步道，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Kew Mae Pan with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Kew Mae Pan, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Kew Mae Pan, Chiang Mai"
  },
  {
    "id": "坤旺皇家農業中心-khun-wang-櫻花谷-189",
    "name": {
      "zh-TW": "坤旺皇家農業中心 (Khun Wang 櫻花谷)",
      "en": "Khun Wang Royal Agricultural Centre (Sakura Valley)",
      "th": "ศูนย์วิจัยเกษตรหลวงเชียงใหม่ (ขุนวาง)"
    },
    "regionId": "chiang-mai",
    "districtId": "old-city-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "高山櫻花勝地",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "因他農山高山櫻花隧道、寒帶水果與高山茶園",
      "en": "Discover Khun Wang Royal Agricultural Centre (Sakura Valley) — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ ศูนย์วิจัยเกษตรหลวงเชียงใหม่ (ขุนวาง) จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "因他農山高山櫻花隧道",
        "寒帶水果與高山茶園"
      ],
      "en": [
        "Khun Wang Royal Agricultural Centre (Sakura Valley) signature experience",
        "Khun Wang Royal Agricultural Centre (Sakura Valley) signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ ศูนย์วิจัยเกษตรหลวงเชียงใหม่ (ขุนวาง)",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ ศูนย์วิจัยเกษตรหลวงเชียงใหม่ (ขุนวาง)"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "每年1-2月爆發盛開",
      "en": "Location highlight & travel tip for Khun Wang Royal Agricultural Centre (Sakura Valley).",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ ศูนย์วิจัยเกษตรหลวงเชียงใหม่ (ขุนวาง)"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達坤旺皇家農業中心 (Khun Wang 櫻花谷)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Khun Wang Royal Agricultural Centre (Sakura Valley) with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว ศูนย์วิจัยเกษตรหลวงเชียงใหม่ (ขุนวาง) อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Khun Wang 櫻花谷, Chiang Mai"
  },
  {
    "id": "ban-pa-pong-piang-梯田梯稻觀景台-190",
    "name": {
      "zh-TW": "Ban Pa Pong Piang 梯田梯稻觀景台",
      "en": "Ban Pa Pong Piang",
      "th": "Ban Pa Pong Piang, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-inthanon-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "梯田絕景",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "被譽為泰國最美高山水稻梯田村落、夕陽與稻浪倒影",
      "en": "Discover Ban Pa Pong Piang — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Ban Pa Pong Piang, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "被譽為泰國最美高山水稻梯田村落",
        "夕陽與稻浪倒影"
      ],
      "en": [
        "Ban Pa Pong Piang signature experience",
        "Ban Pa Pong Piang signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ban Pa Pong Piang, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ban Pa Pong Piang, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "每年9-11月黃金稻浪",
      "en": "Location highlight & travel tip for Ban Pa Pong Piang.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Ban Pa Pong Piang, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Ban Pa Pong Piang 梯田梯稻觀景台，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Ban Pa Pong Piang with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Ban Pa Pong Piang, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Ban Pa Pong Piang, Chiang Mai"
  },
  {
    "id": "ang-ka-冷溫帶高山步道-ang-ka-nature-t-191",
    "name": {
      "zh-TW": "Ang Ka 冷溫帶高山步道 (Ang Ka Nature Trail)",
      "en": "Ang Ka Nature Trail",
      "th": "Ang Ka Nature Trail, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-inthanon-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "高山苔蘚苔原",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國最高處綠色苔蘚森林木棧道、冷溫帶霧林生態解說",
      "en": "Discover Ang Ka Nature Trail — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Ang Ka Nature Trail, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國最高處綠色苔蘚森林木棧道",
        "冷溫帶霧林生態解說"
      ],
      "en": [
        "Ang Ka Nature Trail signature experience",
        "Ang Ka Nature Trail signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ang Ka Nature Trail, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ang Ka Nature Trail, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "因他農山頂",
      "en": "Location highlight & travel tip for Ang Ka Nature Trail.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Ang Ka Nature Trail, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Ang Ka 冷溫帶高山步道 (Ang Ka Nature Trail)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Ang Ka Nature Trail with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Ang Ka Nature Trail, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Ang Ka Nature Trail, Chiang Mai"
  },
  {
    "id": "卡倫族高山部落-karen-hill-tribe-villa-192",
    "name": {
      "zh-TW": "卡倫族高山部落 (Karen Hill Tribe Village)",
      "en": "Karen Hill Tribe Village",
      "th": "Karen Hill Tribe Village, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-inthanon-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "原住民部落文化",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "因他農山卡倫族傳統咖啡種植園、高山織布手作工藝展示",
      "en": "Discover Karen Hill Tribe Village — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Karen Hill Tribe Village, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "因他農山卡倫族傳統咖啡種植園",
        "高山織布手作工藝展示"
      ],
      "en": [
        "Karen Hill Tribe Village signature experience",
        "Karen Hill Tribe Village signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Karen Hill Tribe Village, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Karen Hill Tribe Village, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "因他農山半山腰",
      "en": "Location highlight & travel tip for Karen Hill Tribe Village.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Karen Hill Tribe Village, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達卡倫族高山部落 (Karen Hill Tribe Village)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Karen Hill Tribe Village with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Karen Hill Tribe Village, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Karen Hill Tribe Village, Chiang Mai"
  },
  {
    "id": "歐鑾峽谷國家公園-ob-luang-national-par-193",
    "name": {
      "zh-TW": "歐鑾峽谷國家公園 (Ob Luang National Park)",
      "en": "Ob Luang National Park",
      "th": "Ob Luang National Park, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "doi-inthanon-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/歐鑾峽谷國家公園-ob-luang-national-par-193.jpg",
    "tag": {
      "zh-TW": "峽谷自然景觀",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "天然岩石巨頭峽谷、紅河吊橋與史前岩畫考古遺蹟",
      "en": "Discover Ob Luang National Park — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Ob Luang National Park, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "天然岩石巨頭峽谷",
        "紅河吊橋與史前岩畫考古遺蹟"
      ],
      "en": [
        "Ob Luang National Park signature experience",
        "Ob Luang National Park signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ob Luang National Park, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ob Luang National Park, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "因他農山西南側",
      "en": "Location highlight & travel tip for Ob Luang National Park.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Ob Luang National Park, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達歐鑾峽谷國家公園 (Ob Luang National Park)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Ob Luang National Park with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Ob Luang National Park, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "Ob Luang National Park, Chiang Mai"
  },
  {
    "id": "布通粘粘瀑布-bua-tong-sticky-waterfa-194",
    "name": {
      "zh-TW": "布通粘粘瀑布 (Bua Tong Sticky Waterfall)",
      "en": "Bua Tong Sticky Waterfall",
      "th": "Bua Tong Sticky Waterfall, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "自然地質奇觀",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國獨一無二地質奇觀！白色鈣化石灰岩瀑布、完全不滑、可以赤腳逆流攀爬瀑布",
      "en": "Discover Bua Tong Sticky Waterfall — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Bua Tong Sticky Waterfall, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國獨一無二地質奇觀",
        "白色鈣化石灰岩瀑布",
        "完全不滑",
        "可以赤腳逆流攀爬瀑布"
      ],
      "en": [
        "Bua Tong Sticky Waterfall signature experience",
        "Bua Tong Sticky Waterfall signature experience",
        "Bua Tong Sticky Waterfall signature experience",
        "Bua Tong Sticky Waterfall signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Bua Tong Sticky Waterfall, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Bua Tong Sticky Waterfall, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Bua Tong Sticky Waterfall, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Bua Tong Sticky Waterfall, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "美登縣熱門奇觀",
      "en": "Location highlight & travel tip for Bua Tong Sticky Waterfall.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Bua Tong Sticky Waterfall, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達布通粘粘瀑布 (Bua Tong Sticky Waterfall)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Bua Tong Sticky Waterfall with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Bua Tong Sticky Waterfall, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "Bua Tong Sticky Waterfall, Chiang Mai"
  },
  {
    "id": "清邁藍廟-wat-ban-den-瓦邦頓寺-195",
    "name": {
      "zh-TW": "清邁藍廟 (Wat Ban Den / 瓦邦頓寺)",
      "en": "Wat Ban Den",
      "th": "Wat Ban Den, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清邁藍廟-wat-ban-den-瓦邦頓寺-195.jpg",
    "tag": {
      "zh-TW": "地標寺廟/藝術",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "美登縣絕美蔚藍神廟群！12生肖佛塔、藍色琉璃瓦大殿與巨大神獸雕刻",
      "en": "Discover Wat Ban Den — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Ban Den, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "美登縣絕美蔚藍神廟群",
        "12生肖佛塔",
        "藍色琉璃瓦大殿與巨大神獸雕刻"
      ],
      "en": [
        "Wat Ban Den signature experience",
        "Wat Ban Den signature experience",
        "Wat Ban Den signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Ban Den, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Ban Den, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Ban Den, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清邁北部美登縣最震撼寺廟",
      "en": "Location highlight & travel tip for Wat Ban Den.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Ban Den, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁藍廟 (Wat Ban Den / 瓦邦頓寺)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Ban Den with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Ban Den, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Ban Den, Chiang Mai"
  },
  {
    "id": "美納斯水庫水上木屋-mountain-float-mae-n-196",
    "name": {
      "zh-TW": "美納斯水庫水上木屋 (Mountain Float / Mae Ngat Dam)",
      "en": "Mountain Float",
      "th": "Mountain Float, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "水上度假木屋",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "美登美納斯水庫天然湖泊、獨木舟、水上漂浮木屋與水中樹倒影秘境",
      "en": "Discover Mountain Float — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mountain Float, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "美登美納斯水庫天然湖泊",
        "獨木舟",
        "水上漂浮木屋與水中樹倒影秘境"
      ],
      "en": [
        "Mountain Float signature experience",
        "Mountain Float signature experience",
        "Mountain Float signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mountain Float, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mountain Float, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mountain Float, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "半天 ~ 1 天",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "美登縣水庫秘境",
      "en": "Location highlight & travel tip for Mountain Float.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mountain Float, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達美納斯水庫水上木屋 (Mountain Float / Mae Ngat Dam)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mountain Float with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mountain Float, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Mountain Float, Chiang Mai"
  },
  {
    "id": "khao-soi-prince-王子咖哩麵-197",
    "name": {
      "zh-TW": "Khao Soi Prince (王子咖哩麵)",
      "en": "Khao Soi Prince",
      "th": "Khao Soi Prince, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林必比登推薦！清邁北部名店、濃郁香醇牛腱肉咖哩麵",
      "en": "Discover Khao Soi Prince — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Khao Soi Prince, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林必比登推薦",
        "清邁北部名店",
        "濃郁香醇牛腱肉咖哩麵"
      ],
      "en": [
        "Khao Soi Prince signature experience",
        "Khao Soi Prince signature experience",
        "Khao Soi Prince signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi Prince, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi Prince, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi Prince, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "美登公路途經",
      "en": "Location highlight & travel tip for Khao Soi Prince.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Khao Soi Prince, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Khao Soi Prince (王子咖哩麵)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Khao Soi Prince with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Khao Soi Prince, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Khao Soi Prince, Chiang Mai"
  },
  {
    "id": "美登大象營-mae-taeng-elephant-park-198",
    "name": {
      "zh-TW": "美登大象營 (Mae Taeng Elephant Park)",
      "en": "Mae Taeng Elephant Park",
      "th": "Mae Taeng Elephant Park, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "大象體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "傳統大象表演、大象繪畫展示與美登河竹筏漂流",
      "en": "Discover Mae Taeng Elephant Park — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Taeng Elephant Park, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "傳統大象表演",
        "大象繪畫展示與美登河竹筏漂流"
      ],
      "en": [
        "Mae Taeng Elephant Park signature experience",
        "Mae Taeng Elephant Park signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Taeng Elephant Park, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Taeng Elephant Park, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "美登縣公路旁",
      "en": "Location highlight & travel tip for Mae Taeng Elephant Park.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Taeng Elephant Park, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達美登大象營 (Mae Taeng Elephant Park)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Taeng Elephant Park with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Taeng Elephant Park, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Mae Taeng Elephant Park, Chiang Mai"
  },
  {
    "id": "美登河急流漂流-mae-taeng-river-raftin-199",
    "name": {
      "zh-TW": "美登河急流漂流 (Mae Taeng River Rafting)",
      "en": "Mae Taeng River Rafting",
      "th": "Mae Taeng River Rafting, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "戶外極限體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰北最刺激三級至四級白水急流橡皮艇漂流",
      "en": "Discover Mae Taeng River Rafting — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Taeng River Rafting, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰北最刺激三級至四級白水急流橡皮艇漂流"
      ],
      "en": [
        "Mae Taeng River Rafting signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Taeng River Rafting, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "夏季雨季最刺激",
      "en": "Location highlight & travel tip for Mae Taeng River Rafting.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Taeng River Rafting, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達美登河急流漂流 (Mae Taeng River Rafting)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Taeng River Rafting with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Taeng River Rafting, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Mae Taeng River Rafting, Chiang Mai"
  },
  {
    "id": "mae-kachan-天然溫泉中途站-200",
    "name": {
      "zh-TW": "Mae Kachan 天然溫泉中途站",
      "en": "Mae Kachan",
      "th": "Mae Kachan, Chiang Rai"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "公路中途站",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "118 號公路地熱噴泉、免費露天泡腳池、溫泉蛋體驗",
      "en": "Discover Mae Kachan — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Kachan, Chiang Rai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "118 號公路地熱噴泉",
        "免費露天泡腳池",
        "溫泉蛋體驗"
      ],
      "en": [
        "Mae Kachan signature experience",
        "Mae Kachan signature experience",
        "Mae Kachan signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Kachan, Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Kachan, Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Kachan, Chiang Rai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "45 分鐘",
      "en": "45 分鐘",
      "th": "45 分鐘"
    },
    "tips": {
      "zh-TW": "跨城包車洗手間休息站",
      "en": "Location highlight & travel tip for Mae Kachan.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Kachan, Chiang Rai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Mae Kachan 天然溫泉中途站，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Kachan with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Kachan, Chiang Rai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Mae Kachan, Chiang Rai"
  },
  {
    "id": "孔雀王廟-wat-saeng-kaew-phothiyan-201",
    "name": {
      "zh-TW": "孔雀王廟 (Wat Saeng Kaew Phothiyan)",
      "en": "Wat Saeng Kaew Phothiyan",
      "th": "Wat Saeng Kaew Phothiyan, Chiang Rai"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/孔雀王廟-wat-saeng-kaew-phothiyan-201.jpg",
    "tag": {
      "zh-TW": "特色寺廟/地標",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "美律縣地標！金光巨型孔雀聖像、巨大象神與夜叉守護神雕像",
      "en": "Discover Wat Saeng Kaew Phothiyan — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Saeng Kaew Phothiyan, Chiang Rai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "美律縣地標",
        "金光巨型孔雀聖像",
        "巨大象神與夜叉守護神雕像"
      ],
      "en": [
        "Wat Saeng Kaew Phothiyan signature experience",
        "Wat Saeng Kaew Phothiyan signature experience",
        "Wat Saeng Kaew Phothiyan signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Saeng Kaew Phothiyan, Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Saeng Kaew Phothiyan, Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Saeng Kaew Phothiyan, Chiang Rai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "古巴阿里雅查名廟",
      "en": "Location highlight & travel tip for Wat Saeng Kaew Phothiyan.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Saeng Kaew Phothiyan, Chiang Rai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達孔雀王廟 (Wat Saeng Kaew Phothiyan)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Saeng Kaew Phothiyan with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Saeng Kaew Phothiyan, Chiang Rai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Saeng Kaew Phothiyan, Chiang Rai"
  },
  {
    "id": "清道溶洞神廟-wat-tham-chiang-dao-202",
    "name": {
      "zh-TW": "清道溶洞神廟 (Wat Tham Chiang Dao)",
      "en": "Wat Tham Chiang Dao",
      "th": "Wat Tham Chiang Dao, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清道溶洞神廟-wat-tham-chiang-dao-202.jpg",
    "tag": {
      "zh-TW": "自然溶洞古寺",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清道山腳下天然巨大石灰岩溶洞、鐘乳石與洞穴佛像探險",
      "en": "Discover Wat Tham Chiang Dao — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Tham Chiang Dao, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清道山腳下天然巨大石灰岩溶洞",
        "鐘乳石與洞穴佛像探險"
      ],
      "en": [
        "Wat Tham Chiang Dao signature experience",
        "Wat Tham Chiang Dao signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Tham Chiang Dao, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Tham Chiang Dao, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清邁北部清道縣",
      "en": "Location highlight & travel tip for Wat Tham Chiang Dao.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Tham Chiang Dao, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清道溶洞神廟 (Wat Tham Chiang Dao)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Tham Chiang Dao with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Tham Chiang Dao, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Tham Chiang Dao, Chiang Mai"
  },
  {
    "id": "chiang-dao-nest-203",
    "name": {
      "zh-TW": "Chiang Dao Nest (清道鳥巢山谷景觀餐廳)",
      "en": "Chiang Dao Nest",
      "th": "Chiang Dao Nest, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "山谷景觀餐廳",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清道雪山 (Doi Luang Chiang Dao) 腳下高山木屋與精緻泰西料理",
      "en": "Discover Chiang Dao Nest — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chiang Dao Nest, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清道雪山 (Doi Luang Chiang Dao) 腳下高山木屋與精緻泰西料理"
      ],
      "en": [
        "Chiang Dao Nest signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Dao Nest, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "雪山絕景",
      "en": "Location highlight & travel tip for Chiang Dao Nest.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chiang Dao Nest, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Chiang Dao Nest (清道鳥巢山谷景觀餐廳)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chiang Dao Nest with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chiang Dao Nest, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Chiang Dao Nest, Chiang Mai"
  },
  {
    "id": "baan-na-kang-tong-204",
    "name": {
      "zh-TW": "Baan Na Kang Tong (稻田水景木屋咖啡莊園)",
      "en": "Baan Na Kang Tong",
      "th": "Baan Na Kang Tong, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "稻田木屋咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清道高山稻田梯田、高腳木棧道與高山咖啡下午茶",
      "en": "Discover Baan Na Kang Tong — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Baan Na Kang Tong, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清道高山稻田梯田",
        "高腳木棧道與高山咖啡下午茶"
      ],
      "en": [
        "Baan Na Kang Tong signature experience",
        "Baan Na Kang Tong signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Na Kang Tong, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baan Na Kang Tong, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清道熱門網美店",
      "en": "Location highlight & travel tip for Baan Na Kang Tong.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Baan Na Kang Tong, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Baan Na Kang Tong (稻田水景木屋咖啡莊園)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Baan Na Kang Tong with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Baan Na Kang Tong, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Baan Na Kang Tong, Chiang Mai"
  },
  {
    "id": "villa-de-hun-205",
    "name": {
      "zh-TW": "Villa De Hun (洪之墅雪山景觀餐廳)",
      "en": "Villa De Hun",
      "th": "Villa De Hun, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "雪山景觀飯店餐廳",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清道大雪山正面全景視角、露天高山咖啡與下午茶",
      "en": "Discover Villa De Hun — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Villa De Hun, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清道大雪山正面全景視角",
        "露天高山咖啡與下午茶"
      ],
      "en": [
        "Villa De Hun signature experience",
        "Villa De Hun signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Villa De Hun, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Villa De Hun, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清道大雪山無遮蔽",
      "en": "Location highlight & travel tip for Villa De Hun.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Villa De Hun, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Villa De Hun (洪之墅雪山景觀餐廳)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Villa De Hun with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Villa De Hun, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Villa De Hun, Chiang Mai"
  },
  {
    "id": "芳縣天然地熱溫泉-fang-hot-springs-206",
    "name": {
      "zh-TW": "芳縣天然地熱溫泉 (Fang Hot Springs)",
      "en": "Fang Hot Springs",
      "th": "Fang Hot Springs, Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/芳縣天然地熱溫泉-fang-hot-springs-206.jpg",
    "tag": {
      "zh-TW": "天然溫泉國家公園",
      "en": "Natural Hot Springs",
      "th": "บ่อน้ำพุร้อนธรรมชาติ"
    },
    "description": {
      "zh-TW": "蒸氣地熱噴泉水柱、露天木桶泡湯與天然溫泉水水療",
      "en": "Discover Fang Hot Springs — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Fang Hot Springs, Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "蒸氣地熱噴泉水柱",
        "露天木桶泡湯與天然溫泉水水療"
      ],
      "en": [
        "Fang Hot Springs signature experience",
        "Fang Hot Springs signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Fang Hot Springs, Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Fang Hot Springs, Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清邁最北端芳縣",
      "en": "Location highlight & travel tip for Fang Hot Springs.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Fang Hot Springs, Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達芳縣天然地熱溫泉 (Fang Hot Springs)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Fang Hot Springs with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Fang Hot Springs, Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "Fang Hot Springs, Chiang Mai"
  },
  {
    "id": "檜木王國-hinoki-land-207",
    "name": {
      "zh-TW": "清邁日本城 (Hinoki Land)",
      "en": "Hinoki Land",
      "th": "ฮิโนกิแลนด์ (Hinoki Land)"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "日式主題園區",
      "en": "Japanese Theme Park",
      "th": "สวนสไตล์ญี่ปุ่น"
    },
    "description": {
      "zh-TW": "耗資巨額打造日式千本鳥居、檜木城堡與日式和服體驗",
      "en": "Discover Hinoki Land — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ ฮิโนกิแลนด์ (Hinoki Land) จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "耗資巨額打造日式千本鳥居",
        "檜木城堡與日式和服體驗"
      ],
      "en": [
        "Hinoki Land signature experience",
        "Hinoki Land signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ ฮิโนกิแลนด์ (Hinoki Land)",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ ฮิโนกิแลนด์ (Hinoki Land)"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "芳縣日式景觀",
      "en": "Location highlight & travel tip for Hinoki Land.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ ฮิโนกิแลนด์ (Hinoki Land)"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清邁日本城 (Hinoki Land)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Hinoki Land with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว ฮิโนกิแลนด์ (Hinoki Land) อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Hinoki Land, Chiang Mai"
  },
  {
    "id": "安康山皇家農業場-doi-ang-khang-208",
    "name": {
      "zh-TW": "安康山皇家農業場 (Doi Ang Khang)",
      "en": "Doi Ang Khang",
      "th": "Royal Agricultural Station Angkhang"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/安康山皇家農業場-doi-ang-khang-208.jpg",
    "tag": {
      "zh-TW": "高山櫻花谷",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清邁最美高山櫻花谷、寒帶高山水果蔬菜與高山茶園",
      "en": "Discover Doi Ang Khang — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Royal Agricultural Station Angkhang จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清邁最美高山櫻花谷",
        "寒帶高山水果蔬菜與高山茶園"
      ],
      "en": [
        "Doi Ang Khang signature experience",
        "Doi Ang Khang signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Royal Agricultural Station Angkhang",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Royal Agricultural Station Angkhang"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "每年1月賞櫻名所",
      "en": "Location highlight & travel tip for Doi Ang Khang.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Royal Agricultural Station Angkhang"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達安康山皇家農業場 (Doi Ang Khang)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Doi Ang Khang with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Royal Agricultural Station Angkhang อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Royal Agricultural Station Angkhang"
  },
  {
    "id": "蒙恩山雲海茶園-mon-ngo-viewpoint-209",
    "name": {
      "zh-TW": "蒙恩山雲海茶園 (Mon Ngo Viewpoint)",
      "en": "Mon Ngo Viewpoint",
      "th": "Doi Mon Ngo Summit Viewpoint"
    },
    "regionId": "chiang-mai",
    "districtId": "mae-rim-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "高山日出雲海",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清道山脈絕美雲海日出觀景台與高山茶園",
      "en": "Discover Mon Ngo Viewpoint — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Doi Mon Ngo Summit Viewpoint จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清道山脈絕美雲海日出觀景台與高山茶園"
      ],
      "en": [
        "Mon Ngo Viewpoint signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Mon Ngo Summit Viewpoint"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "露營熱點",
      "en": "Location highlight & travel tip for Mon Ngo Viewpoint.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Doi Mon Ngo Summit Viewpoint"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達蒙恩山雲海茶園 (Mon Ngo Viewpoint)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mon Ngo Viewpoint with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Doi Mon Ngo Summit Viewpoint อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Doi Mon Ngo Summit Viewpoint"
  },
  {
    "id": "南邦舍利寺-wat-phra-that-lampang-lu-210",
    "name": {
      "zh-TW": "南邦舍利寺 (Wat Phra That Lampang Luang)",
      "en": "Wat Phra That Lampang Luang",
      "th": "Wat Phra That Lampang Luang, Lampang"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/南邦舍利寺-wat-phra-that-lampang-lu-210.jpg",
    "tag": {
      "zh-TW": "古蹟寺廟/地標",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國最古老全柚木建築寺廟、傳世佛舍利金塔與影倒立奇景",
      "en": "Discover Wat Phra That Lampang Luang — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Phra That Lampang Luang, Lampang จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國最古老全柚木建築寺廟",
        "傳世佛舍利金塔與影倒立奇景"
      ],
      "en": [
        "Wat Phra That Lampang Luang signature experience",
        "Wat Phra That Lampang Luang signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Lampang Luang, Lampang",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Lampang Luang, Lampang"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "南邦府古城",
      "en": "Location highlight & travel tip for Wat Phra That Lampang Luang.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Phra That Lampang Luang, Lampang"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達南邦舍利寺 (Wat Phra That Lampang Luang)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Phra That Lampang Luang with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Phra That Lampang Luang, Lampang อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Phra That Lampang Luang, Lampang"
  },
  {
    "id": "南邦馬車古城體驗-lampang-horse-carriag-211",
    "name": {
      "zh-TW": "南邦馬車古城體驗 (Lampang Horse Carriage)",
      "en": "Lampang Horse Carriage",
      "th": "Lampang Horse Carriage, Lampang"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "文化體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國唯一保留歐式復古馬車計程車巡禮、遊覽南邦古街與老宅",
      "en": "Discover Lampang Horse Carriage — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Lampang Horse Carriage, Lampang จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國唯一保留歐式復古馬車計程車巡禮",
        "遊覽南邦古街與老宅"
      ],
      "en": [
        "Lampang Horse Carriage signature experience",
        "Lampang Horse Carriage signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Lampang Horse Carriage, Lampang",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Lampang Horse Carriage, Lampang"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "南邦市區",
      "en": "Location highlight & travel tip for Lampang Horse Carriage.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Lampang Horse Carriage, Lampang"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達南邦馬車古城體驗 (Lampang Horse Carriage)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Lampang Horse Carriage with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Lampang Horse Carriage, Lampang อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Lampang Horse Carriage, Lampang"
  },
  {
    "id": "長頸族文化村-long-neck-karen-village-212",
    "name": {
      "zh-TW": "長頸族文化村 (Long Neck Karen Village)",
      "en": "Long Neck Karen Village",
      "th": "Long Neck Karen Village, Chiang Rai"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "原住民文化體驗",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "阿勛經典必訪！了解泰北長頸族傳統銅環與傳統織布",
      "en": "Discover Long Neck Karen Village — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Long Neck Karen Village, Chiang Rai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "阿勛經典必訪",
        "了解泰北長頸族傳統銅環與傳統織布"
      ],
      "en": [
        "Long Neck Karen Village signature experience",
        "Long Neck Karen Village signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Long Neck Karen Village, Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Long Neck Karen Village, Chiang Rai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "美登/清萊途中",
      "en": "Location highlight & travel tip for Long Neck Karen Village.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Long Neck Karen Village, Chiang Rai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達長頸族文化村 (Long Neck Karen Village)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Long Neck Karen Village with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Long Neck Karen Village, Chiang Rai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "✨",
    "googleMapsQuery": "Long Neck Karen Village, Chiang Rai"
  },
  {
    "id": "lulum-chiang-rai-柯克河畔泰北菜-213",
    "name": {
      "zh-TW": "LuLum Chiang Rai (柯克河畔泰北菜)",
      "en": "LuLum Chiang Rai",
      "th": "LuLum Chiang Rai"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登餐廳",
      "en": "Michelin Bib Gourmand Restaurant",
      "th": "ร้านอาหารแนะนำมิชลิน บิบ กูร์มองด์"
    },
    "description": {
      "zh-TW": "米其林必比登推薦！清萊最著名柯克河畔景觀餐廳、泰北辣醬與烤豬肋排",
      "en": "Discover LuLum Chiang Rai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ LuLum Chiang Rai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林必比登推薦",
        "清萊最著名柯克河畔景觀餐廳",
        "泰北辣醬與烤豬肋排"
      ],
      "en": [
        "LuLum Chiang Rai signature experience",
        "LuLum Chiang Rai signature experience",
        "LuLum Chiang Rai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ LuLum Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ LuLum Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ LuLum Chiang Rai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清萊第一美饌",
      "en": "Location highlight & travel tip for LuLum Chiang Rai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ LuLum Chiang Rai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達LuLum Chiang Rai (柯克河畔泰北菜)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to LuLum Chiang Rai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว LuLum Chiang Rai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "LuLum Chiang Rai"
  },
  {
    "id": "khao-soi-san-sai-清萊咖哩麵-214",
    "name": {
      "zh-TW": "Khao Soi San Sai (清萊咖哩麵)",
      "en": "Khao Soi San Sai",
      "th": "Khao Soi San Sai, Chiang Rai"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登小吃",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林必比登推薦！清萊數十年老字號濃郁泰北雞腿咖哩麵",
      "en": "Discover Khao Soi San Sai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Khao Soi San Sai, Chiang Rai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林必比登推薦",
        "清萊數十年老字號濃郁泰北雞腿咖哩麵"
      ],
      "en": [
        "Khao Soi San Sai signature experience",
        "Khao Soi San Sai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi San Sai, Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Khao Soi San Sai, Chiang Rai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清萊市區",
      "en": "Location highlight & travel tip for Khao Soi San Sai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Khao Soi San Sai, Chiang Rai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Khao Soi San Sai (清萊咖哩麵)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Khao Soi San Sai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Khao Soi San Sai, Chiang Rai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Khao Soi San Sai, Chiang Rai"
  },
  {
    "id": "lab-san-pa-koi-泰北辣醬烤肉-215",
    "name": {
      "zh-TW": "Lab San Pa Koi (泰北辣醬烤肉)",
      "en": "Lab San Pa Koi",
      "th": "Lab San Pa Koi, Chiang Rai"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林必比登美食",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林必比登推薦！泰北道地碎肉辣醬 Lab 與香辣烤豬肉",
      "en": "Discover Lab San Pa Koi — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Lab San Pa Koi, Chiang Rai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林必比登推薦",
        "泰北道地碎肉辣醬 Lab 與香辣烤豬肉"
      ],
      "en": [
        "Lab San Pa Koi signature experience",
        "Lab San Pa Koi signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Lab San Pa Koi, Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Lab San Pa Koi, Chiang Rai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "在地老字號",
      "en": "Location highlight & travel tip for Lab San Pa Koi.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Lab San Pa Koi, Chiang Rai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Lab San Pa Koi (泰北辣醬烤肉)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Lab San Pa Koi with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Lab San Pa Koi, Chiang Rai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Lab San Pa Koi, Chiang Rai"
  },
  {
    "id": "phu-lae-鳳梨炒飯與泰北菜-216",
    "name": {
      "zh-TW": "Phu Lae (鳳梨炒飯與泰北菜)",
      "en": "Phu Lae",
      "th": "Phu Lae, Chiang Rai"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "food",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_food.jpg",
    "tag": {
      "zh-TW": "米其林推薦美饌",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "米其林推薦！選用清萊特產小鳳梨做盛器的小鳳梨炒飯與泰北菜",
      "en": "Discover Phu Lae — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Phu Lae, Chiang Rai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "米其林推薦",
        "選用清萊特產小鳳梨做盛器的小鳳梨炒飯與泰北菜"
      ],
      "en": [
        "Phu Lae signature experience",
        "Phu Lae signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Phu Lae, Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Phu Lae, Chiang Rai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清萊鐘樓旁",
      "en": "Location highlight & travel tip for Phu Lae.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Phu Lae, Chiang Rai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Phu Lae (鳳梨炒飯與泰北菜)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Phu Lae with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Phu Lae, Chiang Rai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Phu Lae, Chiang Rai"
  },
  {
    "id": "清萊白廟-wat-rong-khun-217",
    "name": {
      "zh-TW": "清萊白廟 (Wat Rong Khun)",
      "en": "Wat Rong Khun",
      "th": "Wat Rong Khun - White Temple"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清萊白廟-wat-rong-khun-217.jpg",
    "tag": {
      "zh-TW": "當代藝術寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國國寶大師傑作！純白雕琢與銀色鏡面、奈何橋與地獄輪迴手",
      "en": "Discover Wat Rong Khun — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Rong Khun - White Temple จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國國寶大師傑作",
        "純白雕琢與銀色鏡面",
        "奈何橋與地獄輪迴手"
      ],
      "en": [
        "Wat Rong Khun signature experience",
        "Wat Rong Khun signature experience",
        "Wat Rong Khun signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Rong Khun - White Temple",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Rong Khun - White Temple",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Rong Khun - White Temple"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "門票 100 泰銖",
      "en": "Location highlight & travel tip for Wat Rong Khun.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Rong Khun - White Temple"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清萊白廟 (Wat Rong Khun)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Rong Khun with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Rong Khun - White Temple อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Rong Khun - White Temple"
  },
  {
    "id": "清萊藍廟-wat-rong-suea-ten-218",
    "name": {
      "zh-TW": "清萊藍廟 (Wat Rong Suea Ten)",
      "en": "Wat Rong Suea Ten",
      "th": "Wat Rong Suea Ten (Blue Temple)"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清萊藍廟-wat-rong-suea-ten-218.jpg",
    "tag": {
      "zh-TW": "當代藝術寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "絢麗寶藍與金黃雕飾大殿、殿內純白巨佛、蝶豆花椰子冰淇淋",
      "en": "Discover Wat Rong Suea Ten — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Rong Suea Ten (Blue Temple) จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "絢麗寶藍與金黃雕飾大殿",
        "殿內純白巨佛",
        "蝶豆花椰子冰淇淋"
      ],
      "en": [
        "Wat Rong Suea Ten signature experience",
        "Wat Rong Suea Ten signature experience",
        "Wat Rong Suea Ten signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Rong Suea Ten (Blue Temple)",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Rong Suea Ten (Blue Temple)",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Rong Suea Ten (Blue Temple)"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "免費參觀",
      "en": "Location highlight & travel tip for Wat Rong Suea Ten.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Rong Suea Ten (Blue Temple)"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清萊藍廟 (Wat Rong Suea Ten)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Rong Suea Ten with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Rong Suea Ten (Blue Temple) อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Rong Suea Ten (Blue Temple)"
  },
  {
    "id": "清萊黑屋博物館-baandam-museum-219",
    "name": {
      "zh-TW": "清萊黑屋博物館 (Baandam Museum)",
      "en": "Baandam Museum",
      "th": "Baandam Museum"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清萊黑屋博物館-baandam-museum-219.jpg",
    "tag": {
      "zh-TW": "藝術博物館",
      "en": "Art & Cultural Museum",
      "th": "พิพิธภัณฑ์ศิลปะและวัฒนธรรม"
    },
    "description": {
      "zh-TW": "鬼才藝術家 Thawan 打造、40多座黑木蘭納建築與動物骨骼標本",
      "en": "Discover Baandam Museum — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Baandam Museum จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "鬼才藝術家 Thawan 打造",
        "40多座黑木蘭納建築與動物骨骼標本"
      ],
      "en": [
        "Baandam Museum signature experience",
        "Baandam Museum signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baandam Museum",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Baandam Museum"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "門票 80 泰銖",
      "en": "Location highlight & travel tip for Baandam Museum.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Baandam Museum"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清萊黑屋博物館 (Baandam Museum)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Baandam Museum with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Baandam Museum อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Baandam Museum"
  },
  {
    "id": "清萊觀音寺-wat-huay-pla-kang-220",
    "name": {
      "zh-TW": "清萊觀音寺 (Wat Huay Pla Kang)",
      "en": "Wat Huay Pla Kang",
      "th": "Wat Huay Pla Kang"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清萊觀音寺-wat-huay-pla-kang-220.jpg",
    "tag": {
      "zh-TW": "地標寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "九層玉塔與90公尺巨型雪白觀音聖像、電梯直達觀音頭部觀景",
      "en": "Discover Wat Huay Pla Kang — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Huay Pla Kang จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "九層玉塔與90公尺巨型雪白觀音聖像",
        "電梯直達觀音頭部觀景"
      ],
      "en": [
        "Wat Huay Pla Kang signature experience",
        "Wat Huay Pla Kang signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Huay Pla Kang",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Huay Pla Kang"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清萊市郊地標",
      "en": "Location highlight & travel tip for Wat Huay Pla Kang.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Huay Pla Kang"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清萊觀音寺 (Wat Huay Pla Kang)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Huay Pla Kang with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Huay Pla Kang อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Huay Pla Kang"
  },
  {
    "id": "清萊金黃鐘樓-chiang-rai-clock-tower-221",
    "name": {
      "zh-TW": "清萊金黃鐘樓 (Chiang Rai Clock Tower)",
      "en": "Chiang Rai Clock Tower",
      "th": "Chiang Rai Clock Tower"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清萊金黃鐘樓-chiang-rai-clock-tower-221.jpg",
    "tag": {
      "zh-TW": "城市地標",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "白廟大師親自設計的金黃璀璨鐘樓、每晚整點燈光音樂秀",
      "en": "Discover Chiang Rai Clock Tower — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chiang Rai Clock Tower จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "白廟大師親自設計的金黃璀璨鐘樓",
        "每晚整點燈光音樂秀"
      ],
      "en": [
        "Chiang Rai Clock Tower signature experience",
        "Chiang Rai Clock Tower signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Rai Clock Tower",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Rai Clock Tower"
      ]
    },
    "recommendedTime": {
      "zh-TW": "0.5 小時",
      "en": "30 Mins",
      "th": "30 นาที"
    },
    "tips": {
      "zh-TW": "每晚 19:00/20:00/21:00",
      "en": "Location highlight & travel tip for Chiang Rai Clock Tower.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chiang Rai Clock Tower"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清萊金黃鐘樓 (Chiang Rai Clock Tower)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chiang Rai Clock Tower with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chiang Rai Clock Tower อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Chiang Rai Clock Tower"
  },
  {
    "id": "聖獅公園-singha-park-222",
    "name": {
      "zh-TW": "聖獅公園 (Singha Park)",
      "en": "Singha Park",
      "th": "Singha Park Chiang Rai"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/聖獅公園-singha-park-222.jpg",
    "tag": {
      "zh-TW": "主題園區",
      "en": "Japanese Theme Park",
      "th": "สวนสไตล์ญี่ปุ่น"
    },
    "description": {
      "zh-TW": "巨型金獅地標、茶園熱氣球體驗、天鵝湖與花海溜索",
      "en": "Discover Singha Park — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Singha Park Chiang Rai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "巨型金獅地標",
        "茶園熱氣球體驗",
        "天鵝湖與花海溜索"
      ],
      "en": [
        "Singha Park signature experience",
        "Singha Park signature experience",
        "Singha Park signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Singha Park Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Singha Park Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Singha Park Chiang Rai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "園區遊園車極方便",
      "en": "Location highlight & travel tip for Singha Park.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Singha Park Chiang Rai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達聖獅公園 (Singha Park)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Singha Park with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Singha Park Chiang Rai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Singha Park Chiang Rai"
  },
  {
    "id": "melt-in-your-mouth-223",
    "name": {
      "zh-TW": "Melt in Your Mouth (融化於心河畔花園餐廳)",
      "en": "Melt in Your Mouth",
      "th": "Melt in Your Mouth, Chiang Rai"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "柯克河畔餐廳",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "柯克河畔英式白色歐風莊園餐廳、甜點與泰西融合料理",
      "en": "Discover Melt in Your Mouth — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Melt in Your Mouth, Chiang Rai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "柯克河畔英式白色歐風莊園餐廳",
        "甜點與泰西融合料理"
      ],
      "en": [
        "Melt in Your Mouth signature experience",
        "Melt in Your Mouth signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Melt in Your Mouth, Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Melt in Your Mouth, Chiang Rai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清萊水岸名店",
      "en": "Location highlight & travel tip for Melt in Your Mouth.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Melt in Your Mouth, Chiang Rai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Melt in Your Mouth (融化於心河畔花園餐廳)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Melt in Your Mouth with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Melt in Your Mouth, Chiang Rai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🍜",
    "googleMapsQuery": "Melt in Your Mouth, Chiang Rai"
  },
  {
    "id": "清萊夜市-chiang-rai-night-bazaar-224",
    "name": {
      "zh-TW": "清萊夜市 (Chiang Rai Night Bazaar)",
      "en": "Chiang Rai Night Bazaar",
      "th": "Chiang Rai Night Bazaar"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "night-market",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_night_market.jpg",
    "tag": {
      "zh-TW": "傳統夜市",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "市中心夜市、露天舞台傳統舞蹈表演與陶鍋小火鍋",
      "en": "Discover Chiang Rai Night Bazaar — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chiang Rai Night Bazaar จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "市中心夜市",
        "露天舞台傳統舞蹈表演與陶鍋小火鍋"
      ],
      "en": [
        "Chiang Rai Night Bazaar signature experience",
        "Chiang Rai Night Bazaar signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Rai Night Bazaar",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chiang Rai Night Bazaar"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "晚上熱門",
      "en": "Location highlight & travel tip for Chiang Rai Night Bazaar.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chiang Rai Night Bazaar"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清萊夜市 (Chiang Rai Night Bazaar)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chiang Rai Night Bazaar with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chiang Rai Night Bazaar อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🏮",
    "googleMapsQuery": "Chiang Rai Night Bazaar"
  },
  {
    "id": "清萊玉佛寺-wat-phra-kaew-chiang-rai-225",
    "name": {
      "zh-TW": "清萊玉佛寺 (Wat Phra Kaew Chiang Rai)",
      "en": "Wat Phra Kaew Chiang Rai",
      "th": "Wat Phra Kaew Chiang Rai"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/清萊玉佛寺-wat-phra-kaew-chiang-rai-225.jpg",
    "tag": {
      "zh-TW": "古蹟寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國玉佛發源地歷史名寺、綠玉佛複製像與博物館",
      "en": "Discover Wat Phra Kaew Chiang Rai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Phra Kaew Chiang Rai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國玉佛發源地歷史名寺",
        "綠玉佛複製像與博物館"
      ],
      "en": [
        "Wat Phra Kaew Chiang Rai signature experience",
        "Wat Phra Kaew Chiang Rai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra Kaew Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra Kaew Chiang Rai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清萊市區",
      "en": "Location highlight & travel tip for Wat Phra Kaew Chiang Rai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Phra Kaew Chiang Rai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達清萊玉佛寺 (Wat Phra Kaew Chiang Rai)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Phra Kaew Chiang Rai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Phra Kaew Chiang Rai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Phra Kaew Chiang Rai"
  },
  {
    "id": "城柱山頂古寺-wat-phra-that-doi-chom--226",
    "name": {
      "zh-TW": "城柱山頂古寺 (Wat Phra That Doi Chom Thong)",
      "en": "Wat Phra That Doi Chom Thong",
      "th": "Wat Phra That Doi Chom Thong, Chiang Rai"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/城柱山頂古寺-wat-phra-that-doi-chom--226.jpg",
    "tag": {
      "zh-TW": "古蹟寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清萊建城古寺、俯瞰清萊市區全景與柯克河",
      "en": "Discover Wat Phra That Doi Chom Thong — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Phra That Doi Chom Thong, Chiang Rai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清萊建城古寺",
        "俯瞰清萊市區全景與柯克河"
      ],
      "en": [
        "Wat Phra That Doi Chom Thong signature experience",
        "Wat Phra That Doi Chom Thong signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Doi Chom Thong, Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Doi Chom Thong, Chiang Rai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清萊地標",
      "en": "Location highlight & travel tip for Wat Phra That Doi Chom Thong.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Phra That Doi Chom Thong, Chiang Rai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達城柱山頂古寺 (Wat Phra That Doi Chom Thong)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Phra That Doi Chom Thong with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Phra That Doi Chom Thong, Chiang Rai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Phra That Doi Chom Thong, Chiang Rai"
  },
  {
    "id": "南奔哈利奔猜大金塔寺-wat-phra-that-harip-227",
    "name": {
      "zh-TW": "南奔哈利奔猜大金塔寺 (Wat Phra That Hariphunchai)",
      "en": "Wat Phra That Hariphunchai",
      "th": "Wat Phra That Hariphunchai, Lamphun"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/南奔哈利奔猜大金塔寺-wat-phra-that-harip-227.jpg",
    "tag": {
      "zh-TW": "古蹟寺廟/地標",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "南奔府千年皇家大金塔寺、泰國雞年本命年祈福聖地",
      "en": "Discover Wat Phra That Hariphunchai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Phra That Hariphunchai, Lamphun จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "南奔府千年皇家大金塔寺",
        "泰國雞年本命年祈福聖地"
      ],
      "en": [
        "Wat Phra That Hariphunchai signature experience",
        "Wat Phra That Hariphunchai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Hariphunchai, Lamphun",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Hariphunchai, Lamphun"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清邁南郊南奔府",
      "en": "Location highlight & travel tip for Wat Phra That Hariphunchai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Phra That Hariphunchai, Lamphun"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達南奔哈利奔猜大金塔寺 (Wat Phra That Hariphunchai)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Phra That Hariphunchai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Phra That Hariphunchai, Lamphun อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Phra That Hariphunchai, Lamphun"
  },
  {
    "id": "南奔-chamadevi-方塔寺-wat-chama-dev-228",
    "name": {
      "zh-TW": "南奔 Chamadevi 方塔寺 (Wat Chama Devi)",
      "en": "Wat Chama Devi",
      "th": "Wat Chama Devi, Lamphun"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/南奔-chamadevi-方塔寺-wat-chama-dev-228.jpg",
    "tag": {
      "zh-TW": "古蹟寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "陀羅缽地王朝金剛寶座風格方形佛塔遺蹟",
      "en": "Discover Wat Chama Devi — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Chama Devi, Lamphun จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "陀羅缽地王朝金剛寶座風格方形佛塔遺蹟"
      ],
      "en": [
        "Wat Chama Devi signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Chama Devi, Lamphun"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "南奔府古寺",
      "en": "Location highlight & travel tip for Wat Chama Devi.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Chama Devi, Lamphun"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達南奔 Chamadevi 方塔寺 (Wat Chama Devi)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Chama Devi with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Chama Devi, Lamphun อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Chama Devi, Lamphun"
  },
  {
    "id": "象神博物館-ganesh-museum-chiang-mai-229",
    "name": {
      "zh-TW": "象神博物館 (Ganesh Museum Chiang Mai)",
      "en": "Ganesh Museum Chiang Mai",
      "th": "Ganesh Museum Chiang Mai"
    },
    "regionId": "chiang-mai",
    "districtId": "hang-dong-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_experience.jpg",
    "tag": {
      "zh-TW": "主題博物館",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國最大象神雕像博物館、收集世界各地數千尊象神藝術品",
      "en": "Discover Ganesh Museum Chiang Mai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Ganesh Museum Chiang Mai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國最大象神雕像博物館",
        "收集世界各地數千尊象神藝術品"
      ],
      "en": [
        "Ganesh Museum Chiang Mai signature experience",
        "Ganesh Museum Chiang Mai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ganesh Museum Chiang Mai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Ganesh Museum Chiang Mai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "泰國祈福名所",
      "en": "Location highlight & travel tip for Ganesh Museum Chiang Mai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Ganesh Museum Chiang Mai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達象神博物館 (Ganesh Museum Chiang Mai)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Ganesh Museum Chiang Mai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Ganesh Museum Chiang Mai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Ganesh Museum Chiang Mai"
  },
  {
    "id": "lalitta-café-清萊仙境瀑布咖啡-230",
    "name": {
      "zh-TW": "Lalitta Café (清萊仙境瀑布咖啡)",
      "en": "Lalitta Caf",
      "th": "Lalitta Caf, Chiang Rai"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "網美瀑布咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "柯克河畔夢幻水霧瀑布、仙女雕像與雨林花園秘境",
      "en": "Discover Lalitta Caf — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Lalitta Caf, Chiang Rai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "柯克河畔夢幻水霧瀑布",
        "仙女雕像與雨林花園秘境"
      ],
      "en": [
        "Lalitta Caf signature experience",
        "Lalitta Caf signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Lalitta Caf, Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Lalitta Caf, Chiang Rai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "入場費可全額折抵餐飲",
      "en": "Location highlight & travel tip for Lalitta Caf.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Lalitta Caf, Chiang Rai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Lalitta Café (清萊仙境瀑布咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Lalitta Caf with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Lalitta Caf, Chiang Rai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Lalitta Caf, Chiang Rai"
  },
  {
    "id": "翠峰茶園-choui-fong-tea-plantation-231",
    "name": {
      "zh-TW": "翠峰茶園 (Choui Fong Tea Plantation)",
      "en": "Choui Fong Tea Plantation",
      "th": "Choui Fong Tea Plantation Mae Chan"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/翠峰茶園-choui-fong-tea-plantation-231.jpg",
    "tag": {
      "zh-TW": "高山茶園觀景",
      "en": "Highland Tea Plantation",
      "th": "ไร่ชาบนดอยสูง"
    },
    "description": {
      "zh-TW": "綿延綠色梯田茶山、360度極簡觀景台、招牌抹茶蛋糕與冷泡烏龍",
      "en": "Discover Choui Fong Tea Plantation — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Choui Fong Tea Plantation Mae Chan จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "綿延綠色梯田茶山",
        "360度極簡觀景台",
        "招牌抹茶蛋糕與冷泡烏龍"
      ],
      "en": [
        "Choui Fong Tea Plantation signature experience",
        "Choui Fong Tea Plantation signature experience",
        "Choui Fong Tea Plantation signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Choui Fong Tea Plantation Mae Chan",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Choui Fong Tea Plantation Mae Chan",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Choui Fong Tea Plantation Mae Chan"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清萊最美茶園",
      "en": "Location highlight & travel tip for Choui Fong Tea Plantation.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Choui Fong Tea Plantation Mae Chan"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達翠峰茶園 (Choui Fong Tea Plantation)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Choui Fong Tea Plantation with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Choui Fong Tea Plantation Mae Chan อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "Choui Fong Tea Plantation Mae Chan"
  },
  {
    "id": "美斯樂高山村-doi-mae-salong-232",
    "name": {
      "zh-TW": "美斯樂高山村 (Doi Mae Salong)",
      "en": "Doi Mae Salong",
      "th": "Doi Mae Salong"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/美斯樂高山村-doi-mae-salong-v2.jpg",
    "tag": {
      "zh-TW": "高山歷史名村",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰北孤軍歷史故事村、高山烏龍茶園與櫻花步道景觀",
      "en": "Discover Doi Mae Salong — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Doi Mae Salong จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰北孤軍歷史故事村",
        "高山烏龍茶園與櫻花步道景觀"
      ],
      "en": [
        "Doi Mae Salong signature experience",
        "Doi Mae Salong signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Mae Salong",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Mae Salong"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "高山雲霧村落",
      "en": "Location highlight & travel tip for Doi Mae Salong.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Doi Mae Salong"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達美斯樂高山村 (Doi Mae Salong)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Doi Mae Salong with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Doi Mae Salong อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Doi Mae Salong"
  },
  {
    "id": "金三角-golden-triangle-chiang-sae-233",
    "name": {
      "zh-TW": "金三角 (Golden Triangle / Chiang Saen)",
      "en": "Golden Triangle",
      "th": "Golden Triangle Park Chiang Saen"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/金三角-golden-triangle-chiang-sae-233.jpg",
    "tag": {
      "zh-TW": "歷史邊境地標",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰、寮、緬三國交界湄公河畔、大佛巨船與鴉片博物館",
      "en": "Discover Golden Triangle — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Golden Triangle Park Chiang Saen จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰",
        "寮",
        "緬三國交界湄公河畔",
        "大佛巨船與鴉片博物館"
      ],
      "en": [
        "Golden Triangle signature experience",
        "Golden Triangle signature experience",
        "Golden Triangle signature experience",
        "Golden Triangle signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Golden Triangle Park Chiang Saen",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Golden Triangle Park Chiang Saen",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Golden Triangle Park Chiang Saen",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Golden Triangle Park Chiang Saen"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "可乘坐長尾船遊湄公河",
      "en": "Location highlight & travel tip for Golden Triangle.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Golden Triangle Park Chiang Saen"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達金三角 (Golden Triangle / Chiang Saen)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Golden Triangle with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Golden Triangle Park Chiang Saen อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Golden Triangle Park Chiang Saen"
  },
  {
    "id": "鴉片博物館-hall-of-opium-234",
    "name": {
      "zh-TW": "鴉片博物館 (Hall of Opium)",
      "en": "Hall of Opium",
      "th": "Hall of Opium Museum"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/鴉片博物館-hall-of-opium-234.jpg",
    "tag": {
      "zh-TW": "歷史博物館",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "展示金三角鴉片貿易歷史、禁毒教育與沈浸式多媒體展覽",
      "en": "Discover Hall of Opium — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Hall of Opium Museum จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "展示金三角鴉片貿易歷史",
        "禁毒教育與沈浸式多媒體展覽"
      ],
      "en": [
        "Hall of Opium signature experience",
        "Hall of Opium signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Hall of Opium Museum",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Hall of Opium Museum"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "金三角旁",
      "en": "Location highlight & travel tip for Hall of Opium.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Hall of Opium Museum"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達鴉片博物館 (Hall of Opium)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Hall of Opium with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Hall of Opium Museum อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Hall of Opium Museum"
  },
  {
    "id": "皇太后行宮與花園-doi-tung-royal-villa-235",
    "name": {
      "zh-TW": "皇太后行宮與花園 (Doi Tung Royal Villa)",
      "en": "Doi Tung Royal Villa",
      "th": "Doi Tung Royal Villa"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/皇太后行宮與花園-doi-tung-royal-villa-235.jpg",
    "tag": {
      "zh-TW": "皇室高山花園",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "瑞士木屋風皇太后行宮、四季高山花卉花海公園",
      "en": "Discover Doi Tung Royal Villa — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Doi Tung Royal Villa จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "瑞士木屋風皇太后行宮",
        "四季高山花卉花海公園"
      ],
      "en": [
        "Doi Tung Royal Villa signature experience",
        "Doi Tung Royal Villa signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Tung Royal Villa",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Tung Royal Villa"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清萊北部最高峰",
      "en": "Location highlight & travel tip for Doi Tung Royal Villa.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Doi Tung Royal Villa"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達皇太后行宮與花園 (Doi Tung Royal Villa)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Doi Tung Royal Villa with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Doi Tung Royal Villa อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Doi Tung Royal Villa"
  },
  {
    "id": "指天山觀景台-phu-chi-fah-236",
    "name": {
      "zh-TW": "指天山觀景台 (Phu Chi Fah)",
      "en": "Phu Chi Fah",
      "th": "Phu Chi Fa Forest Park"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/指天山觀景台-phu-chi-fah-236.jpg",
    "tag": {
      "zh-TW": "邊境高山雲海",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰寮邊境絕美懸崖日出與壯觀雲海景觀平台",
      "en": "Discover Phu Chi Fah — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Phu Chi Fa Forest Park จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰寮邊境絕美懸崖日出與壯觀雲海景觀平台"
      ],
      "en": [
        "Phu Chi Fah signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Phu Chi Fa Forest Park"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清萊東部高山",
      "en": "Location highlight & travel tip for Phu Chi Fah.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Phu Chi Fa Forest Park"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達指天山觀景台 (Phu Chi Fah)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Phu Chi Fah with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Phu Chi Fa Forest Park อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Phu Chi Fa Forest Park"
  },
  {
    "id": "美塞泰緬邊境大門-mae-sai-border-market-237",
    "name": {
      "zh-TW": "美塞泰緬邊境大門 (Mae Sai Border Market)",
      "en": "Mae Sai Border Market",
      "th": "Mae Sai Border Checkpoint"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/美塞泰緬邊境大門-mae-sai-border-market-237.jpg",
    "tag": {
      "zh-TW": "邊境市場",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國最北端邊境關卡、泰緬跨國橋樑與邊境採買市場",
      "en": "Discover Mae Sai Border Market — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Mae Sai Border Checkpoint จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國最北端邊境關卡",
        "泰緬跨國橋樑與邊境採買市場"
      ],
      "en": [
        "Mae Sai Border Market signature experience",
        "Mae Sai Border Market signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Sai Border Checkpoint",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Mae Sai Border Checkpoint"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "泰國最北點標誌",
      "en": "Location highlight & travel tip for Mae Sai Border Market.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Mae Sai Border Checkpoint"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達美塞泰緬邊境大門 (Mae Sai Border Market)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Mae Sai Border Market with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Mae Sai Border Checkpoint อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🏮",
    "googleMapsQuery": "Mae Sai Border Checkpoint"
  },
  {
    "id": "象山高山咖啡莊園-doi-chang-coffee-farm-238",
    "name": {
      "zh-TW": "象山高山咖啡莊園 (Doi Chang Coffee Farm)",
      "en": "Doi Chang Coffee Farm",
      "th": "Doi Chaang Coffee Farm"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "精品咖啡源頭",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰國最著名 Doi Chaang 象山咖啡原產地、高山採豆與烘豆體驗",
      "en": "Discover Doi Chang Coffee Farm — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Doi Chaang Coffee Farm จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰國最著名 Doi Chaang 象山咖啡原產地",
        "高山採豆與烘豆體驗"
      ],
      "en": [
        "Doi Chang Coffee Farm signature experience",
        "Doi Chang Coffee Farm signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Chaang Coffee Farm",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Doi Chaang Coffee Farm"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2.5 小時",
      "en": "2.5 Hours",
      "th": "2.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "象山高山",
      "en": "Location highlight & travel tip for Doi Chang Coffee Farm.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Doi Chaang Coffee Farm"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達象山高山咖啡莊園 (Doi Chang Coffee Farm)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Doi Chang Coffee Farm with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Doi Chaang Coffee Farm อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Doi Chaang Coffee Farm"
  },
  {
    "id": "chouat-cafe-waterfall-239",
    "name": {
      "zh-TW": "Chouat Cafe & Waterfall (周阿特水岸瀑布景觀咖啡)",
      "en": "Chouat Cafe & Waterfall",
      "th": "Chouat Cafe & Waterfall, Chiang Rai"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "水岸瀑布咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清萊水岸高山瀑布觀景台、自然芬多精與特調冷飲",
      "en": "Discover Chouat Cafe & Waterfall — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Chouat Cafe & Waterfall, Chiang Rai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清萊水岸高山瀑布觀景台",
        "自然芬多精與特調冷飲"
      ],
      "en": [
        "Chouat Cafe & Waterfall signature experience",
        "Chouat Cafe & Waterfall signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chouat Cafe & Waterfall, Chiang Rai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Chouat Cafe & Waterfall, Chiang Rai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清萊山區",
      "en": "Location highlight & travel tip for Chouat Cafe & Waterfall.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Chouat Cafe & Waterfall, Chiang Rai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達Chouat Cafe & Waterfall (周阿特水岸瀑布景觀咖啡)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Chouat Cafe & Waterfall with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Chouat Cafe & Waterfall, Chiang Rai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Chouat Cafe & Waterfall, Chiang Rai"
  },
  {
    "id": "百萬啤酒瓶寺-wat-pa-maha-chedi-kaew-240",
    "name": {
      "zh-TW": "百萬啤酒瓶寺 (Wat Pa Maha Chedi Kaew)",
      "en": "Wat Pa Maha Chedi Kaew",
      "th": "Wat Pa Maha Chedi Kaew"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/百萬啤酒瓶寺-wat-pa-maha-chedi-kaew-240.jpg",
    "tag": {
      "zh-TW": "奇趣寺廟",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "由超過 150 萬個海尼根與泰國啤酒綠色玻璃瓶建造的綠光寺廟",
      "en": "Discover Wat Pa Maha Chedi Kaew — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Pa Maha Chedi Kaew จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "由超過 150 萬個海尼根與泰國啤酒綠色玻璃瓶建造的綠光寺廟"
      ],
      "en": [
        "Wat Pa Maha Chedi Kaew signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Pa Maha Chedi Kaew"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "泰北奇觀",
      "en": "Location highlight & travel tip for Wat Pa Maha Chedi Kaew.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Pa Maha Chedi Kaew"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達百萬啤酒瓶寺 (Wat Pa Maha Chedi Kaew)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Pa Maha Chedi Kaew with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Pa Maha Chedi Kaew อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Pa Maha Chedi Kaew"
  },
  {
    "id": "拜縣樹屋度假村咖啡-pai-treehouse-resort-241",
    "name": {
      "zh-TW": "拜縣樹屋度假村咖啡 (Pai Treehouse Resort)",
      "en": "Pai Treehouse Resort",
      "th": "Pai Treehouse Resort"
    },
    "regionId": "chiang-rai",
    "districtId": "mae-kampong-district",
    "category": "cafe",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_cafe.jpg",
    "tag": {
      "zh-TW": "高山樹屋咖啡",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "拜縣經典地標！巨大樹木與木造高空樹屋咖啡、俯瞰拜河景致",
      "en": "Discover Pai Treehouse Resort — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Pai Treehouse Resort จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "拜縣經典地標",
        "巨大樹木與木造高空樹屋咖啡",
        "俯瞰拜河景致"
      ],
      "en": [
        "Pai Treehouse Resort signature experience",
        "Pai Treehouse Resort signature experience",
        "Pai Treehouse Resort signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pai Treehouse Resort",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pai Treehouse Resort",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pai Treehouse Resort"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "拜縣熱門打卡",
      "en": "Location highlight & travel tip for Pai Treehouse Resort.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Pai Treehouse Resort"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達拜縣樹屋度假村咖啡 (Pai Treehouse Resort)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Pai Treehouse Resort with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Pai Treehouse Resort อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "☕",
    "googleMapsQuery": "Pai Treehouse Resort"
  },
  {
    "id": "拜縣雲來觀景台-yun-lai-viewpoint-pai-242",
    "name": {
      "zh-TW": "拜縣雲來觀景台 (Yun Lai Viewpoint Pai)",
      "en": "Yun Lai Viewpoint Pai",
      "th": "Yun Lai Viewpoint Pai"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "高山日出雲海",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "拜縣雲頂中華村觀景平台、俯瞰高山雲霧與品嚐熱烏龍茶",
      "en": "Discover Yun Lai Viewpoint Pai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Yun Lai Viewpoint Pai จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "拜縣雲頂中華村觀景平台",
        "俯瞰高山雲霧與品嚐熱烏龍茶"
      ],
      "en": [
        "Yun Lai Viewpoint Pai signature experience",
        "Yun Lai Viewpoint Pai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Yun Lai Viewpoint Pai",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Yun Lai Viewpoint Pai"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "拜縣高山",
      "en": "Location highlight & travel tip for Yun Lai Viewpoint Pai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Yun Lai Viewpoint Pai"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達拜縣雲來觀景台 (Yun Lai Viewpoint Pai)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Yun Lai Viewpoint Pai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Yun Lai Viewpoint Pai อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "Yun Lai Viewpoint Pai"
  },
  {
    "id": "拜縣大峽谷-pai-canyon-孔敬峽谷-243",
    "name": {
      "zh-TW": "拜縣大峽谷 (Pai Canyon / 孔敬峽谷)",
      "en": "Pai Canyon",
      "th": "Pai Canyon"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "自然地質奇景",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "阿勛經典必訪！極窄紅土崖壁走廊、觀賞夕陽餘暉名所",
      "en": "Discover Pai Canyon — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Pai Canyon จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "阿勛經典必訪",
        "極窄紅土崖壁走廊",
        "觀賞夕陽餘暉名所"
      ],
      "en": [
        "Pai Canyon signature experience",
        "Pai Canyon signature experience",
        "Pai Canyon signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pai Canyon",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pai Canyon",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Pai Canyon"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "拜縣經典",
      "en": "Location highlight & travel tip for Pai Canyon.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Pai Canyon"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達拜縣大峽谷 (Pai Canyon / 孔敬峽谷)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Pai Canyon with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Pai Canyon อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🌿",
    "googleMapsQuery": "Pai Canyon"
  },
  {
    "id": "拜縣二戰紀念大橋-memorial-bridge-pai-244",
    "name": {
      "zh-TW": "拜縣二戰紀念大橋 (Memorial Bridge Pai)",
      "en": "Memorial Bridge Pai",
      "th": "Tha-Pai Memorial Bridge"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "experience",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/拜縣二戰紀念大橋-memorial-bridge-pai-244.jpg",
    "tag": {
      "zh-TW": "歷史地標",
      "en": "Historic Old City Landmark",
      "th": "แลนด์มาร์กประวัติศาสตร์เมืองเก่า"
    },
    "description": {
      "zh-TW": "二戰時期鋼架古橋、拜河河畔打卡地標",
      "en": "Discover Memorial Bridge Pai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Tha-Pai Memorial Bridge จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "二戰時期鋼架古橋",
        "拜河河畔打卡地標"
      ],
      "en": [
        "Memorial Bridge Pai signature experience",
        "Memorial Bridge Pai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Tha-Pai Memorial Bridge",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Tha-Pai Memorial Bridge"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1 小時",
      "en": "1 Hour",
      "th": "1 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "拜縣公路旁",
      "en": "Location highlight & travel tip for Memorial Bridge Pai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Tha-Pai Memorial Bridge"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達拜縣二戰紀念大橋 (Memorial Bridge Pai)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Memorial Bridge Pai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Tha-Pai Memorial Bridge อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Tha-Pai Memorial Bridge"
  },
  {
    "id": "拜縣山地村-santichon-village-245",
    "name": {
      "zh-TW": "拜縣山地村 (Santichon Village)",
      "en": "Santichon Village",
      "th": "หมู่บ้านสันติชล (Santichon Village)"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "nature",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/categories/category_nature.jpg",
    "tag": {
      "zh-TW": "雲南民俗村",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰北雲南村落、傳統土生住宅、品嚐雲南大頭菜與高山茶",
      "en": "Discover Santichon Village — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ หมู่บ้านสันติชล (Santichon Village) จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰北雲南村落",
        "傳統土生住宅",
        "品嚐雲南大頭菜與高山茶"
      ],
      "en": [
        "Santichon Village signature experience",
        "Santichon Village signature experience",
        "Santichon Village signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ หมู่บ้านสันติชล (Santichon Village)",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ หมู่บ้านสันติชล (Santichon Village)",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ หมู่บ้านสันติชล (Santichon Village)"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "雲來觀景台山腳",
      "en": "Location highlight & travel tip for Santichon Village.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ หมู่บ้านสันติชล (Santichon Village)"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達拜縣山地村 (Santichon Village)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Santichon Village with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว หมู่บ้านสันติชล (Santichon Village) อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "📍",
    "googleMapsQuery": "หมู่บ้านสันติชล (Santichon Village)"
  },
  {
    "id": "拜縣美音寺大佛-wat-phra-that-mae-yen-246",
    "name": {
      "zh-TW": "拜縣美音寺大佛 (Wat Phra That Mae Yen)",
      "en": "Wat Phra That Mae Yen",
      "th": "Wat Phra That Mae Yen"
    },
    "regionId": "chiang-rai",
    "districtId": "tea-mountain-district",
    "category": "temple",
    "position": [
      0,
      1,
      0
    ],
    "image": "/images/landmarks/拜縣美音寺大佛-wat-phra-that-mae-yen-243.jpg",
    "tag": {
      "zh-TW": "地標寺廟/觀景",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "山頂純白巨型坐佛、353階梯登頂俯瞰整座拜縣山谷夕陽",
      "en": "Discover Wat Phra That Mae Yen — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ Wat Phra That Mae Yen จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "山頂純白巨型坐佛",
        "353階梯登頂俯瞰整座拜縣山谷夕陽"
      ],
      "en": [
        "Wat Phra That Mae Yen signature experience",
        "Wat Phra That Mae Yen signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Mae Yen",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ Wat Phra That Mae Yen"
      ]
    },
    "recommendedTime": {
      "zh-TW": "1.5 小時",
      "en": "1.5 Hours",
      "th": "1.5 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "拜縣夕陽勝地",
      "en": "Location highlight & travel tip for Wat Phra That Mae Yen.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ Wat Phra That Mae Yen"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達拜縣美音寺大佛 (Wat Phra That Mae Yen)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Wat Phra That Mae Yen with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว Wat Phra That Mae Yen อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛕",
    "googleMapsQuery": "Wat Phra That Mae Yen"
  },
  {
    "id": "central-festival-chiang-mai-shopping",
    "name": {
      "zh-TW": "尚泰清邁購物中心 (Central Chiangmai / Central Festival)",
      "en": "Central Chiangmai",
      "th": "เซ็นทรัล เชียงใหม่ (Central Chiangmai)"
    },
    "regionId": "chiang-mai",
    "districtId": "night-bazaar-district",
    "category": "shopping",
    "position": [
      0.75,
      1,
      -0.45
    ],
    "image": "/images/categories/category_shopping.jpg",
    "tag": {
      "zh-TW": "泰北最大旗艦商場",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "泰北規模最大旗艦級購物商場、國際精品、Major IMAX 影城、美食廣場與超市",
      "en": "Discover Central Chiangmai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ เซ็นทรัล เชียงใหม่ (Central Chiangmai) จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "泰北規模最大旗艦級購物商場",
        "國際精品、Major IMAX 影城與美食廣場"
      ],
      "en": [
        "Central Chiangmai signature experience",
        "Central Chiangmai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ เซ็นทรัล เชียงใหม่ (Central Chiangmai)",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ เซ็นทรัล เชียงใหม่ (Central Chiangmai)"
      ]
    },
    "recommendedTime": {
      "zh-TW": "3 小時",
      "en": "3 Hours",
      "th": "3 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "超高速公路旁，設施齊全好逛",
      "en": "Location highlight & travel tip for Central Chiangmai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ เซ็นทรัล เชียงใหม่ (Central Chiangmai)"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達尚泰清邁購物中心 (Central Chiangmai / Central Festival)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Central Chiangmai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว เซ็นทรัล เชียงใหม่ (Central Chiangmai) อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛍️",
    "googleMapsQuery": "Central Chiangmai, Superhighway Road, Chiang Mai"
  },
  {
    "id": "central-chiang-rai-shopping",
    "name": {
      "zh-TW": "尚泰清萊購物中心 (Central Chiangrai)",
      "en": "Central Chiangrai",
      "th": "เซ็นทรัล เชียงราย (Central Chiangrai)"
    },
    "regionId": "chiang-rai",
    "districtId": "chiang-rai-city-district",
    "category": "shopping",
    "position": [
      0.35,
      1,
      -0.65
    ],
    "image": "/images/categories/category_shopping.jpg",
    "tag": {
      "zh-TW": "清萊旗艦購物商場",
      "en": "Featured Destination",
      "th": "จุดเช็คอินแนะนำ"
    },
    "description": {
      "zh-TW": "清萊市區最大現代化購物商場、泰北特色伴手禮與連鎖美食餐廳聚集地",
      "en": "Discover Central Chiangrai — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.",
      "th": "สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ เซ็นทรัล เชียงราย (Central Chiangrai) จุดเช็คอินยอดนิยมที่ไม่ควรพลาด"
    },
    "highlights": {
      "zh-TW": [
        "清萊市區最大現代化購物商場",
        "泰北特色伴手禮與連鎖美食餐廳聚集地"
      ],
      "en": [
        "Central Chiangrai signature experience",
        "Central Chiangrai signature experience"
      ],
      "th": [
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ เซ็นทรัล เชียงราย (Central Chiangrai)",
        "ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ เซ็นทรัล เชียงราย (Central Chiangrai)"
      ]
    },
    "recommendedTime": {
      "zh-TW": "2 小時",
      "en": "2 Hours",
      "th": "2 ชั่วโมง"
    },
    "tips": {
      "zh-TW": "清萊市區購物冷氣首選",
      "en": "Location highlight & travel tip for Central Chiangrai.",
      "th": "ข้อแนะนำและข้อมูลการเดินทางสำหรับ เซ็นทรัล เชียงราย (Central Chiangrai)"
    },
    "charterNote": {
      "zh-TW": "阿勛旅遊包車提供專屬中文司機接送，直達尚泰清萊購物中心 (Central Chiangrai)，行程彈性不趕路。",
      "en": "Ah-Xun Travel private charter provides dedicated chauffeur service directly to Central Chiangrai with comfortable, flexible timing.",
      "th": "บริการรถตู้พร้อมคนขับนำเที่ยว เซ็นทรัล เชียงราย (Central Chiangrai) อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง"
    },
    "stampIcon": "🛍️",
    "googleMapsQuery": "Central Chiangrai, Phaholyothin Rd, Chiang Rai"
  }
];
