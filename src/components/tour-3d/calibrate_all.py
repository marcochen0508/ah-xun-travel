import json
import re

path = r'c:\Users\marcochen\Downloads\個人\ah-xun-travel\src\components\tour-3d\landmarkData.ts'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# ID to target mapping: (new_districtId, new_regionId, new_image)
district_images = {
    'old-city-district': '/images/diorama/old_city_square_v1.jpg',
    'south-city-district': '/images/diorama/south_city_accurate_v3.jpg',
    'nimman-district': '/images/diorama/nimman_cmu_diorama.jpg',
    'doi-suthep-district': '/images/diorama/doi_suthep_sacred_diorama.jpg',
    'night-bazaar-district': '/images/diorama/ping_river_warorot_diorama.jpg',
    'mae-rim-district': '/images/diorama/hangdong_maerim_diorama.jpg',
    'hang-dong-district': '/images/diorama/hangdong_maewang_diorama.jpg',
    'mae-kampong-district': '/images/diorama/maekampong_giant_diorama.jpg',
    'doi-inthanon-district': '/images/diorama/5_doi_suthep.jpg', # will be replaced when generated
    'chiang-rai-city-district': '/images/diorama/chiang_rai_art_diorama.jpg',
    'tea-mountain-district': '/images/diorama/tea_golden_triangle_diorama.jpg',
}

# Explicit landmark reassignment maps
reassignments = {
    # Inthanon (was in old-city or hang-dong)
    '因他農山頂-doi-inthanon-peak-183': ('doi-inthanon-district', 'chiang-mai'),
    '國王王后雙塔-king-queen-pagodas-184': ('doi-inthanon-district', 'chiang-mai'),
    '瓦吉拉坦瀑布-wachirathan-waterfall-185': ('doi-inthanon-district', 'chiang-mai'),
    'mae-ya-瀑布-mae-ya-waterfall-186': ('doi-inthanon-district', 'chiang-mai'),
    'sirithan-瀑布-mae-klang-187': ('doi-inthanon-district', 'chiang-mai'),
    'kew-mae-pan-雲海步道-188': ('doi-inthanon-district', 'chiang-mai'),
    '坤旺皇家農業中心-khun-wang-189': ('doi-inthanon-district', 'chiang-mai'),
    'ban-pa-pong-piang-梯田梯稻觀景台-190': ('doi-inthanon-district', 'chiang-mai'),
    'ang-ka-冷溫帶高山步道-ang-ka-nature-t-191': ('doi-inthanon-district', 'chiang-mai'),
    '卡倫族高山部落-karen-hill-tribe-villa-192': ('doi-inthanon-district', 'chiang-mai'),
    '歐鑾峽谷國家公園-ob-luang-national-par-193': ('doi-inthanon-district', 'chiang-mai'),

    # Mae Rim (was in hang-dong)
    '梅莎七層瀑布-mae-sa-waterfall-151': ('mae-rim-district', 'chiang-mai'),
    'elephant-poopoopaper-park-大象便便-160': ('mae-rim-district', 'chiang-mai'),
    'kanta-elephant-sanctuary-坎塔大象保-162': ('mae-rim-district', 'chiang-mai'),
    'hugelephant-抱抱大象保護區-163': ('mae-rim-district', 'chiang-mai'),
    '梅莎大象營-mae-sa-elephant-camp-164': ('mae-rim-district', 'chiang-mai'),
    '蒙瞻山-mon-jam-夢瞻山-168': ('mae-rim-district', 'chiang-mai'),
    'pongyang-jungle-coaster-ziplin-176': ('mae-rim-district', 'chiang-mai'),
    '老虎王國-tiger-kingdom-chiang-mai-180': ('mae-rim-district', 'chiang-mai'),
    '虎園-tiger-kingdom-chiang-mai-180': ('mae-rim-district', 'chiang-mai'),

    # Mae Taeng & Chiang Dao & Fang (was in chiang-rai)
    '布通粘粘瀑布-bua-tong-sticky-waterfa-194': ('mae-rim-district', 'chiang-mai'),
    '清邁藍廟-wat-ban-den-瓦邦頓寺-195': ('mae-rim-district', 'chiang-mai'),
    '美納斯水庫水上木屋-mountain-float-mae-n-196': ('mae-rim-district', 'chiang-mai'),
    'khao-soi-prince-王子咖哩麵-197': ('mae-rim-district', 'chiang-mai'),
    '美登大象營-mae-taeng-elephant-park-198': ('mae-rim-district', 'chiang-mai'),
    '美登河急流漂流-mae-taeng-river-raftin-199': ('mae-rim-district', 'chiang-mai'),
    '清道溶洞神廟-wat-tham-chiang-dao-202': ('mae-rim-district', 'chiang-mai'),
    'chiang-dao-nest-203': ('mae-rim-district', 'chiang-mai'),
    'baan-na-kang-tong-204': ('mae-rim-district', 'chiang-mai'),
    'villa-de-hun-205': ('mae-rim-district', 'chiang-mai'),
    '芳縣天然地熱溫泉-fang-hot-springs-206': ('mae-rim-district', 'chiang-mai'),
    '檜木王國-hinoki-land-207': ('mae-rim-district', 'chiang-mai'),
    '安康山皇家農業場-doi-ang-khang-208': ('mae-rim-district', 'chiang-mai'),
    '蒙恩山雲海茶園-mon-ngo-viewpoint-209': ('mae-rim-district', 'chiang-mai'),

    # Hang Dong (was in mae-rim or chiang-rai)
    '清邁夜間野生動物園-night-safari-165': ('hang-dong-district', 'chiang-mai'),
    '帕丘峽谷-pha-chor-canyon-171': ('hang-dong-district', 'chiang-mai'),
    '木雕工藝村-baan-tawai-179': ('hang-dong-district', 'chiang-mai'),
    '象神博物館-ganesh-museum-chiang-mai-229': ('hang-dong-district', 'chiang-mai'),

    # Doi Suthep (was in south-city)
    '松達寺-wat-suan-dok-白塔寺-73': ('doi-suthep-district', 'chiang-mai'),

    # South City (was in doi-suthep)
    '清邁國際機場-cnx-74': ('south-city-district', 'chiang-mai'),

    # Pai Yun Lai (was in mae-kampong)
    '拜縣雲來觀景台-yun-lai-viewpoint-pai-242': ('tea-mountain-district', 'chiang-rai'),
}

# Regex to find each landmark block
def replace_landmark_block(m):
    block = m.group(0)
    # find id
    id_m = re.search(r'"id":\s*"([^"]+)"', block)
    if not id_m:
        return block
    lid = id_m.group(1)
    
    if lid in reassignments:
        new_dist, new_reg = reassignments[lid]
        new_img = district_images.get(new_dist, '/images/diorama/old_city_square_v1.jpg')
        
        block = re.sub(r'"regionId":\s*"[^"]+"', f'"regionId": "{new_reg}"', block)
        block = re.sub(r'"districtId":\s*"[^"]+"', f'"districtId": "{new_dist}"', block)
        block = re.sub(r'"image":\s*"[^"]+"', f'"image": "{new_img}"', block)
    else:
        # Update image according to current districtId if needed
        dist_m = re.search(r'"districtId":\s*"([^"]+)"', block)
        if dist_m:
            dist = dist_m.group(1)
            if dist in district_images:
                block = re.sub(r'"image":\s*"[^"]+"', f'"image": "{district_images[dist]}"', block)
                
    return block

# Find all blocks in LANDMARKS
landmarks_part_match = re.search(r'export const LANDMARKS: Landmark\[\] = \[(.*)\];', text, re.DOTALL)
if landmarks_part_match:
    landmarks_content = landmarks_part_match.group(1)
    # Split/Match each object block
    new_landmarks_content = re.sub(r'\{\s*"id":\s*"[^"]+".*?\n  \}', replace_landmark_block, landmarks_content, flags=re.DOTALL)
    text = text[:landmarks_part_match.start(1)] + new_landmarks_content + text[landmarks_part_match.end(1):]

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Successfully calibrated all landmarks in landmarkData.ts")
