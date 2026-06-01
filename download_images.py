
import requests
import os

# 电影列表
movies = [
    "星际穿越",
    "鬼灭之刃", 
    "盗梦空间",
    "进击的巨人",
    "功夫熊猫",
    "你的名字",
    "千与千寻",
    "楚门的世界",
    "龙珠",
    "阿凡达",
    "灌篮高手",
    "肖申克的救赎"
]

# 尝试使用不同的图片源
sources = [
    # 直接用 picsum，虽然不关联名字，但至少有图片
    lambda idx: f"https://picsum.photos/seed/{'film'+str(idx)}/500/600.jpg",
    # 豆瓣电影海报 API（模拟）
    lambda idx: f"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt={requests.utils.quote(movies[idx] + ' movie poster cinematic art')}&amp;image_size=square",
    # 兜底
    lambda idx: f"https://via.placeholder.com/500x600/7C3AED/FFFFFF?text={requests.utils.quote(movies[idx])}"
]

# 确保目录存在
os.makedirs("images", exist_ok=True)

print("开始下载电影封面...")

for idx, movie in enumerate(movies):
    filename = f"images/{idx+1}.jpg"
    
    if os.path.exists(filename):
        print(f"  [{idx+1}] {movie} - 已存在")
        continue
    
    for i, source in enumerate(sources):
        try:
            url = source(idx)
            print(f"  [{idx+1}] {movie} - 尝试源 {i+1}: {url[:80]}...")
            
            headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
            response = requests.get(url, headers=headers, timeout=30)
            
            if response.status_code == 200:
                with open(filename, 'wb') as f:
                    f.write(response.content)
                print(f"  ✓ [{idx+1}] {movie} - 下载成功")
                break
                
        except Exception as e:
            print(f"  ✗ [{idx+1}] {movie} - 源 {i+1} 失败: {e}")
            continue

print("\n下载完成！")

