import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import generate_excel
import json
import re

# Category mapping helper
def map_category(cat_str):
    if '寺' in cat_str or '古蹟' in cat_str or '歷史' in cat_str:
        return 'temple', '🛕'
    elif '素食' in cat_str or '餐廳' in cat_str or '美食' in cat_str or '小吃' in cat_str or '米其林' in cat_str or '燒烤' in cat_str:
        return 'food', '🍜'
    elif '咖啡' in cat_str or '甜點' in cat_str or '果昔' in cat_str or '冰品' in cat_str:
        return 'cafe', '☕'
    elif '按摩' in cat_str or '水療' in cat_str or 'Spa' in cat_str or 'SPA' in cat_str:
        return 'spa', '💆'
    elif '百貨' in cat_str or '商場' in cat_str or '購物' in cat_str or 'Outlet' in cat_str or 'Mall' in cat_str:
        return 'shopping', '🛍️'
    elif '夜市' in cat_str or '市集' in cat_str or '市場' in cat_str:
        return 'market', '🏮'
    elif '體驗' in cat_str or '泰拳' in cat_str or '烹飪' in cat_str or '遊船' in cat_str or '農場' in cat_str or '泰服' in cat_str or '手作' in cat_str:
        return 'experience', '✨'
    elif '自然' in cat_str or '瀑布' in cat_str or '國家公園' in cat_str or '溫泉' in cat_str or '茶園' in cat_str:
        return 'nature', '🌿'
    else:
        return 'temple', '📍'

# District mapping helper
def map_district(section_name):
    # Map section name to districtId and regionId
    if '1_清邁古城' in section_name:
        return 'old-city-district', 'chiang-mai', '/images/diorama/old_city_square_v1.jpg'
    elif '2_湄平河' in section_name:
        return 'night-bazaar-district', 'chiang-mai', '/images/diorama/4_route_and_suburbs.jpg'
    elif '3_清邁古城南區' in section_name:
        return 'south-city-district', 'chiang-mai', '/images/diorama/4_route_and_suburbs.jpg'
    elif '4_尼曼' in section_name:
        return 'nimman-district', 'chiang-mai', '/images/diorama/1_3d_overview.jpg'
    elif '5_素貼山' in section_name:
        return 'doi-suthep-district', 'chiang-mai', '/images/diorama/5_doi_suthep.jpg'
    elif '6_南郊杭東' in section_name or '杭東' in section_name:
        return 'hang-dong-district', 'chiang-mai', '/images/diorama/6_lalitta_cafe_chiang_rai.jpg'
    elif '清萊' in section_name or '10_清萊' in section_name or '11_清萊' in section_name:
        return 'chiang-rai-city-district', 'chiang-rai', '/images/diorama/3_chiang_rai_district.jpg'
    elif '12_高山茶園' in section_name or '茶園' in section_name:
        return 'tea-mountain-district', 'chiang-rai', '/images/diorama/3_chiang_rai_district.jpg'
    else:
        return 'old-city-district', 'chiang-mai', '/images/diorama/old_city_square_v1.jpg'

def generate_id(name, idx):
    clean = re.sub(r'[^\w\s]', '', name.lower()).strip()
    clean = re.sub(r'\s+', '-', clean)
    if not clean or len(clean) < 2:
        return f'spot-{idx}'
    return f'{clean[:30]}-{idx}'

def main():
    items = generate_excel.data
    output_landmarks = []
    
    for idx, row in enumerate(items):
        sec = row['分區名稱']
        name_zh = row['景點/餐廳/體驗名稱']
        cat_type = row['分類類型']
        highlights_zh = row['必看亮點與特色簡介']
        rec_time = row['建議遊玩時間']
        tips = row.get('備註/旅遊貼士', '')
        
        if sec == '0_泰北雙城全景總覽':
            continue
            
        category, stamp_icon = map_category(cat_type)
        dist_id, region_id, default_img = map_district(sec)
        spot_id = generate_id(name_zh, idx)
        
        # Split highlights into 3-4 bullet points
        hl_list = [h.strip() for h in re.split(r'[,、！!。；;]+', highlights_zh) if h.strip()]
        if not hl_list:
            hl_list = [highlights_zh]
        hl_list = hl_list[:4]
        
        landmark_obj = {
            'id': spot_id,
            'name': {
                'zh-TW': name_zh,
                'en': name_zh,
                'th': name_zh
            },
            'regionId': region_id,
            'districtId': dist_id,
            'category': category,
            'position': [0, 1.0, 0],
            'image': default_img,
            'tag': {
                'zh-TW': cat_type,
                'en': cat_type,
                'th': cat_type
            },
            'description': {
                'zh-TW': highlights_zh,
                'en': highlights_zh,
                'th': highlights_zh
            },
            'highlights': {
                'zh-TW': hl_list,
                'en': hl_list,
                'th': hl_list
            },
            'recommendedTime': {
                'zh-TW': rec_time,
                'en': rec_time,
                'th': rec_time
            },
            'tips': {
                'zh-TW': tips,
                'en': tips,
                'th': tips
            },
            'charterNote': {
                'zh-TW': f'阿勛旅遊包車提供專屬中文司機接送，直達{name_zh}，行程彈性不趕路。',
                'en': f'Ah-Xun Travel private charter with Chinese-speaking driver, direct transfer to {name_zh}.',
                'th': f'บริการรถตู้พร้อมคนขับนำเที่ยว {name_zh}'
            },
            'stampIcon': stamp_icon
        }
        output_landmarks.append(landmark_obj)
        
    print(f'Generated {len(output_landmarks)} landmarks.')
    
    # Write to landmarkData.ts template
    ts_header = """export type Language = 'zh-TW' | 'en' | 'th';

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
  category: 'temple' | 'food' | 'cafe' | 'spa' | 'market' | 'shopping' | 'experience' | 'nature' | 'route' | 'festival';
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
    name: { 'zh-TW': '🕌 古城南區 (銀廟/瓦萊路)', 'en': '🕌 South Old City (Silver Temple)', 'th': '🕌 เมืองเก่าตอนใต้' },
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
    name: { 'zh-TW': '🏮 長康觀光夜市區', 'en': '🏮 Night Bazaar Area', 'th': '🏮 ย่านไนท์บาซาร์' },
  },
  {
    id: 'hang-dong-district',
    regionId: 'chiang-mai',
    name: { 'zh-TW': '☕ 南郊杭東區', 'en': '☕ South Hang Dong', 'th': '☕ หางดง' },
  },

  // --- 清萊分區 ---
  {
    id: 'chiang-rai-city-district',
    regionId: 'chiang-rai',
    name: { 'zh-TW': '🏛️ 清萊市區藝術區', 'en': '🏛️ Chiang Rai Arts', 'th': '🏛️ เมืองเชียงราย' },
  },
  {
    id: 'tea-mountain-district',
    regionId: 'chiang-rai',
    name: { 'zh-TW': '🍵 高山茶園區', 'en': '🍵 Tea Slopes', 'th': '🍵 ดอยแม่สลอง' },
  },
];

export const LANDMARKS: Landmark[] = """
    
    with open('src/components/tour-3d/landmarkData.ts', 'w', encoding='utf-8') as f:
        f.write(ts_header + json.dumps(output_landmarks, ensure_ascii=False, indent=2) + ';\n')
        
    print('Successfully updated src/components/tour-3d/landmarkData.ts')

if __name__ == '__main__':
    main()
