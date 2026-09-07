import re

path = r'c:\Users\marcochen\Downloads\個人\ah-xun-travel\src\components\tour-3d\landmarkData.ts'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Precise list of assignments based on ID:
inthanon_ids = {
    '因他農山頂-doi-inthanon-peak-183',
    '國王王后雙塔-king-queen-pagodas-184',
    '瓦吉拉坦瀑布-wachirathan-waterfall-185',
    'mae-ya-瀑布-mae-ya-waterfall-186',
    'sirithan-瀑布-mae-klang-187',
    'kew-mae-pan-雲海步道-188',
    '坤旺皇家農業中心-khun-wang-189',
    'ban-pa-pong-piang-梯田梯稻觀景台-190',
    'ang-ka-冷溫帶高山步道-ang-ka-nature-t-191',
    '卡倫族高山部落-karen-hill-tribe-villa-192',
    '歐鑾峽谷國家公園-ob-luang-national-par-193',
}

mae_rim_ids = {
    # Mae Rim
    '梅莎七層瀑布-mae-sa-waterfall-151',
    '清邁皇家陸軍實彈射擊場-mae-rim-shooting-c-152',
    '清邁-atv-越野車冒險-chiang-mai-atv-of-153',
    '清邁-paramotor-輕型動力傘-paramotor-f-154',
    'elephant-poopoopaper-park-大象便便-160',
    'elephant-nature-park-大象自然公園-161',
    'kanta-elephant-sanctuary-坎塔大象保-162',
    'hugelephant-抱抱大象保護區-163',
    '梅莎大象營-mae-sa-elephant-camp-164',
    '蒙瞻山-mon-jam-夢瞻山-168',
    'fleur-cafe-eatery-169',
    '皇后植物園天空步道-queen-sirikit-170',
    'pongyang-jungle-coaster-ziplin-176',
    'eagle-track-zipline-鷹軌叢林滑索-177',
    'dragon-flight-zipline-飛龍高空滑索-178',
    '老虎王國-tiger-kingdom-chiang-mai-180',
    '虎園-tiger-kingdom-chiang-mai-180',
    '綠谷高爾夫球俱樂部-summit-green-valley-181',
    'khao-hom-muang-phrae-米其林帕府風味菜-182',
    # Mae Taeng & Chiang Dao & Fang
    '布通粘粘瀑布-bua-tong-sticky-waterfa-194',
    '清邁藍廟-wat-ban-den-瓦邦頓寺-195',
    '美納斯水庫水上木屋-mountain-float-mae-n-196',
    'khao-soi-prince-王子咖哩麵-197',
    '美登大象營-mae-taeng-elephant-park-198',
    '美登河急流漂流-mae-taeng-river-raftin-199',
    '清道溶洞神廟-wat-tham-chiang-dao-202',
    'chiang-dao-nest-203',
    'baan-na-kang-tong-204',
    'villa-de-hun-205',
    '芳縣天然地熱溫泉-fang-hot-springs-206',
    '檜木王國-hinoki-land-207',
    '安康山皇家農業場-doi-ang-khang-208',
    '蒙恩山雲海茶園-mon-ngo-viewpoint-209',
}

hang_dong_ids = {
    'ajarn-saiyuds-kitchen-saiyud-皇-155',
    'chom-cafe-restaurant-仙境瀑布-156',
    'carp-café-錦鯉咖啡館-157',
    '黑森林景觀餐廳-khaomaokhaofang-158',
    '大象朋友飯店-chai-lai-orchid-159',
    '清邁夜間野生動物園-night-safari-165',
    '金山寺-wat-phra-that-doi-kham-166',
    '皇家花園-royal-park-rajapruek-167',
    '帕丘峽谷-pha-chor-canyon-171',
    '惠登套湖-huay-tung-tao-lake-172',
    '惠登套湖水中樹-huay-tung-tao-water-tr-173',
    '清邁大峽谷水上樂園-grand-canyon-174',
    '美王河竹伐漂流-mae-wang-bamboo-raftin-175',
    '木雕工藝村-baan-tawai-179',
    '象神博物館-ganesh-museum-chiang-mai-229',
}

doi_suthep_ids = {
    '松達寺-wat-suan-dok-白塔寺-73',
    '素貼山雙龍寺-wat-phra-that-doi-suthe-118',
    '蒲屏皇宮-bhubing-palace-119',
    '悟孟寺-wat-umong-120',
    'no39-cafe-湖畔小木屋咖啡館-121',
    'baan-kang-wat-森林手作藝術村-122',
    'early-owls-cafe-草地大樹咖啡-123',
    'nana-jungle-森林麵包市集-124',
    '界遙寺-wat-jet-yod-125',
    'blue-coffee-at-agriculture-cmu-126',
    '帕拉寺-wat-pha-lat-127',
    '素貼山觀景台-doi-suthep-viewpoint-128',
    '坤昌阡-khun-chang-kian-櫻花谷-129',
    'doi-chaang-coffee-doi-suthep-130',
    '僧侶步道-monks-trail-131',
    '清邁大學靜心湖-ang-kaew-cmu-132',
    '清邁國家博物館-chiang-mai-national-mu-133',
    'meena-rice-based-cuisine-五色米飯-134',
}

south_city_ids = {
    '素攀純銀廟-wat-sri-suphan-71',
    '週六瓦萊路銀器夜市-wua-lai-night-market-72',
    '清邁國際機場-cnx-74',
    'central-chiang-mai-airport-商場-75',
    'premium-outlet-chiang-mai-76',
    'nim-city-daily-有機市集商場-77',
    '瓦萊手工銀器村-wua-lai-silversmith-vi-78',
    'kad-manee-market-湖畔夜市-79',
    '清邁南門小吃街-chiang-mai-gate-night--80',
    '清邁南門傳統早市-chiang-mai-gate-morni-81',
    'oasis-spa-綠野仙蹤蘭納館-82',
}

chiang_rai_ids = {
    'mae-kachan-天然溫泉中途站-200',
    '孔雀王廟-wat-saeng-kaew-phothiyan-201',
    '南邦舍利寺-wat-phra-that-lampang-lu-210',
    '南邦馬車古城體驗-lampang-horse-carriag-211',
    '長頸族文化村-long-neck-karen-village-212',
    'lulum-chiang-rai-柯克河畔泰北菜-213',
    'khao-soi-san-sai-清萊咖哩麵-214',
    'lab-san-pa-koi-泰北辣醬烤肉-215',
    'phu-lae-鳳梨炒飯與泰北菜-216',
    '清萊白廟-wat-rong-khun-217',
    '清萊藍廟-wat-rong-suea-ten-218',
    '清萊黑屋博物館-baandam-museum-219',
    '清萊觀音寺-wat-huay-pla-kang-220',
    '清萊金黃鐘樓-chiang-rai-clock-tower-221',
    '聖獅公園-singha-park-222',
    'melt-in-your-mouth-223',
    '清萊夜市-chiang-rai-night-bazaar-224',
    '清萊玉佛寺-wat-phra-kaew-chiang-rai-225',
    '城柱山頂古寺-wat-phra-that-doi-chom--226',
    '南奔哈利奔猜大金塔寺-wat-phra-that-harip-227',
    '南奔-chamadevi-方塔寺-wat-chama-dev-228',
    'lalitta-café-清萊仙境瀑布咖啡-230',
}

tea_mountain_ids = {
    '翠峰茶園-choui-fong-tea-plantation-231',
    '美斯樂高山村-doi-mae-salong-232',
    '金三角-golden-triangle-chiang-sae-233',
    '鴉片博物館-hall-of-opium-234',
    '皇太后行宮與花園-doi-tung-royal-villa-235',
    '指天山觀景台-phu-chi-fah-236',
    '美塞泰緬邊境大門-mae-sai-border-market-237',
    '象山高山咖啡莊園-doi-chang-coffee-farm-238',
    'chouat-cafe-waterfall-239',
    '百萬啤酒瓶寺-wat-pa-maha-chedi-kaew-240',
    '拜縣樹屋度假村咖啡-pai-treehouse-resort-241',
    '拜縣雲來觀景台-yun-lai-viewpoint-pai-242',
    '拜縣大峽谷-pai-canyon-孔敬峽谷-243',
    '拜縣二戰紀念大橋-memorial-bridge-pai-244',
    '拜縣山地村-santichon-village-245',
    '拜縣美音寺大佛-wat-phra-that-mae-yen-246',
}

def get_target(lid):
    if lid in inthanon_ids:
        return 'doi-inthanon-district', 'chiang-mai', '/images/diorama/5_doi_suthep.jpg'
    if lid in mae_rim_ids:
        return 'mae-rim-district', 'chiang-mai', '/images/diorama/hangdong_maerim_diorama.jpg'
    if lid in hang_dong_ids:
        return 'hang-dong-district', 'chiang-mai', '/images/diorama/hangdong_maewang_diorama.jpg'
    if lid in doi_suthep_ids:
        return 'doi-suthep-district', 'chiang-mai', '/images/diorama/doi_suthep_sacred_diorama.jpg'
    if lid in south_city_ids:
        return 'south-city-district', 'chiang-mai', '/images/diorama/south_city_accurate_v3.jpg'
    if lid in chiang_rai_ids:
        return 'chiang-rai-city-district', 'chiang-rai', '/images/diorama/chiang_rai_art_diorama.jpg'
    if lid in tea_mountain_ids:
        return 'tea-mountain-district', 'chiang-rai', '/images/diorama/tea_golden_triangle_diorama.jpg'
    return None

# Parse line by line
lines = text.splitlines(True)
output_lines = []
current_block_lines = []
in_obj = False
current_lid = None

for line in lines:
    if line.strip() == '{' and not in_obj:
        in_obj = True
        current_block_lines = [line]
        current_lid = None
        continue
    
    if in_obj:
        current_block_lines.append(line)
        m_id = re.search(r'"id":\s*"([^"]+)"', line)
        if m_id:
            current_lid = m_id.group(1)
            
        if line.strip() in ['},', '}']:
            in_obj = False
            block_str = "".join(current_block_lines)
            if current_lid:
                target = get_target(current_lid)
                if target:
                    d_id, r_id, img = target
                    block_str = re.sub(r'"regionId":\s*"[^"]+"', f'"regionId": "{r_id}"', block_str)
                    block_str = re.sub(r'"districtId":\s*"[^"]+"', f'"districtId": "{d_id}"', block_str)
                    block_str = re.sub(r'"image":\s*"[^"]+"', f'"image": "{img}"', block_str)
            output_lines.append(block_str)
            current_block_lines = []
    else:
        output_lines.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(output_lines)

print("Exact Line-by-Line Update Completed!")
