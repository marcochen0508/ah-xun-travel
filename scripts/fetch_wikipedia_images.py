import json
import os
import re
import urllib.parse
import urllib.request
import time

LANDMARK_DATA_PATH = r'c:\Users\marcochen\Downloads\個人\ah-xun-travel\src\components\tour-3d\landmarkData.ts'
OUT_IMG_DIR = r'c:\Users\marcochen\Downloads\個人\ah-xun-travel\public\images\landmarks'

os.makedirs(OUT_IMG_DIR, exist_ok=True)

HEADERS = {
    'User-Agent': 'AhXunTravelWikipediaBot/1.0 (https://ahxuntravel.com; contact@ahxuntravel.com)'
}

def clean_name(raw: str) -> list:
    """Extract search candidates from name strings."""
    candidates = []
    
    # Check if there are English names in brackets like "帕邢寺 (Wat Phra Singh)"
    m_bracket = re.findall(r'\(([^)]+)\)', raw)
    for b in m_bracket:
        b_clean = b.strip()
        if len(b_clean) > 2:
            candidates.append(b_clean)
            
    # Remove brackets
    without_brackets = re.sub(r'\([^)]*\)', '', raw).strip()
    if without_brackets and without_brackets not in candidates:
        candidates.append(without_brackets)
        
    return candidates

def fetch_wikipedia_image(query: str):
    """Query English Wikipedia and Chinese Wikipedia API for thumbnail/original image."""
    for lang in ['en', 'zh', 'th']:
        try:
            # 1. Page Search Generator
            url = f"https://{lang}.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch={urllib.parse.quote(query)}&gsrlimit=1&prop=pageimages&pithumbsize=1200&format=json"
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=8) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                pages = data.get('query', {}).get('pages', {})
                for pid, pdata in pages.items():
                    thumb = pdata.get('thumbnail', {}).get('source')
                    if thumb:
                        return thumb, pdata.get('title')
        except Exception:
            pass

    # 2. Try Wikimedia Commons search
    try:
        url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={urllib.parse.quote(query + ' Chiang Mai')}&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json"
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=8) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            for pid, pdata in pages.items():
                imageinfo = pdata.get('imageinfo', [])
                if imageinfo and 'thumburl' in imageinfo[0]:
                    return imageinfo[0]['thumburl'], pdata.get('title')
    except Exception:
        pass

    return None, None

def download_image(img_url: str, dest_path: str) -> bool:
    try:
        req = urllib.request.Request(img_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp:
            content = resp.read()
            if len(content) > 2000: # Valid image
                with open(dest_path, 'wb') as f:
                    f.write(content)
                return True
    except Exception as e:
        print(f"Failed to download {img_url}: {e}")
    return False

def main():
    print("Reading landmarkData.ts...")
    with open(LANDMARK_DATA_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract all landmark objects
    # Pattern to find landmark items
    landmark_matches = list(re.finditer(r'{\s*"id":\s*"([^"]+)",[\s\S]*?"name":\s*{[\s\S]*?"zh-TW":\s*"([^"]+)"[\s\S]*?"en":\s*"([^"]+)"[\s\S]*?"th":\s*"([^"]+)"', content))
    print(f"Found {len(landmark_matches)} landmarks.")

    found_count = 0
    updated_paths = {}

    for idx, m in enumerate(landmark_matches):
        lid = m.group(1)
        name_zh = m.group(2)
        name_en = m.group(3)
        name_th = m.group(4)

        # Build candidate search queries
        queries = []
        for n in [name_en, name_zh, name_th]:
            queries.extend(clean_name(n))
        
        # Deduplicate while preserving order
        seen = set()
        unique_queries = [q for q in queries if not (q in seen or seen.add(q))]

        dest_file = os.path.join(OUT_IMG_DIR, f"{lid}.jpg")
        rel_path = f"/images/landmarks/{lid}.jpg"

        # Check if already downloaded
        if os.path.exists(dest_file) and os.path.getsize(dest_file) > 5000:
            print(f"[{idx+1}/{len(landmark_matches)}] Already exists: {lid}")
            updated_paths[lid] = rel_path
            found_count += 1
            continue

        print(f"[{idx+1}/{len(landmark_matches)}] Searching Wikipedia for '{lid}' ({', '.join(unique_queries[:3])})...")
        img_url = None
        matched_title = None

        for q in unique_queries:
            img_url, matched_title = fetch_wikipedia_image(q)
            if img_url:
                break

        if img_url:
            print(f"  --> Found on Wiki ({matched_title})! Downloading...")
            if download_image(img_url, dest_file):
                print(f"  ✓ Saved to {dest_file}")
                updated_paths[lid] = rel_path
                found_count += 1
            else:
                print(f"  ✗ Download failed.")
        else:
            print(f"  - No Wikipedia entry/image found.")

        time.sleep(0.3) # Rate limit respect

    print(f"\n==========================================")
    print(f"Wiki images found & downloaded: {found_count} / {len(landmark_matches)}")
    print(f"==========================================")

    # Now update landmarkData.ts with new image paths for matched landmarks
    print("Updating landmarkData.ts...")
    
    # We will update line by line or block by block
    def replace_image(match):
        block = match.group(0)
        id_m = re.search(r'"id":\s*"([^"]+)"', block)
        if id_m:
            lid = id_m.group(1)
            if lid in updated_paths:
                new_img = updated_paths[lid]
                # Replace image field in this block
                block = re.sub(r'"image":\s*"[^"]+"', f'"image": "{new_img}"', block)
        return block

    updated_content = re.sub(r'{\s*"id":\s*"[^"]+"[\s\S]*?"stampIcon":\s*"[^"]+"\s*}', replace_image, content)
    
    with open(LANDMARK_DATA_PATH, 'w', encoding='utf-8') as f:
        f.write(updated_content)

    print("landmarkData.ts successfully updated with Wikipedia images!")

if __name__ == '__main__':
    main()
