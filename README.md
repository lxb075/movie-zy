# 🎬 电影/动漫推荐墙

一个现代化的电影/动漫推荐墙网页应用，采用深色主题设计，包含完整的搜索、筛选、排序功能，以及丰富的交互动画效果。

## ✨ 功能特性

### 核心功能
- 🔍 **实时搜索**: 按作品名称快速搜索
- 🏷️ **分类筛选**: 支持全部/电影/动漫/动作/喜剧/科幻/悬疑
- 📊 **内容排序**: 按最新/热度/评分排序
- 💌 **详情弹窗**: 点击卡片查看完整信息
- ⏳ **加载状态**: 所有操作都有加载提示

### 视觉动效
- 🎨 **AI生成图片**: Banner图和卡片封面使用AI生成
- ✨ **滚动入场动画**: 卡片淡入+下滑效果
- 🖼️ **卡片悬浮效果**: 放大、阴影加深、高亮边框
- 🎭 **图片遮罩**: hover时显示渐变遮罩
- 🔔 **弹窗动画**: 平滑过渡打开/关闭

### 数据持久化
- ❤️ **点赞功能**: 支持点赞/取消点赞
- 📑 **收藏功能**: 支持收藏/取消收藏
- 💾 **localStorage**: 数据自动保存，刷新不丢失

## 🚀 快速开始

### 直接运行

直接在浏览器中打开 `index.html` 文件即可使用。

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/lxb075/movie-recommendations.git

# 进入目录
cd movie-recommendations

# 使用任意HTTP服务器启动
python -m http.server 8000
# 或
npx serve
```

然后访问 `http://localhost:8000`

## 🛠️ 技术栈

- **HTML5**: 页面结构
- **CSS3**: 样式与动画
- **JavaScript ES6+**: 交互逻辑
- **localStorage**: 数据持久化

## 📱 响应式设计

- **PC端**: 多列网格布局
- **平板端**: 自适应两列/三列
- **移动端**: 单列布局，触摸友好

## 🎨 设计主题

### 配色方案

| 用途 | 颜色值 | 说明 |
|------|--------|------|
| 主背景 | `#0A0C10` | 深邃黑灰，电影感底色 |
| 次背景 | `#12161F` | 卡片/导航栏背景 |
| 主强调色 | `#7C3AED` | 深紫色，年轻活力 |
| 次强调色 | `#06B6D4` | 青蓝色，科技感点缀 |
| 主文字 | `#F8FAFC` | 高亮白，确保可读性 |
| 次文字 | `#94A3B8` | 浅灰蓝，辅助信息 |
| 边框/分割线 | `#1E293B` | 深色边框，低调区分 |

### AI绘图提示词

**① 网站顶部Banner图**
```
cinematic wide-screen banner, anime and movie characters collage, dark moody atmosphere, soft volumetric lighting, modern minimalist luxury, subtle film grain texture, neon accents in deep purple and cyan, dramatic composition, high-end aesthetic, 8k, ultra detailed, --ar 21:9 --style cinematic
```

**② 卡片封面图**
```
movie or anime poster style, cinematic composition, dramatic lighting, dark moody atmosphere, film grain texture, minimalist design, modern aesthetic, high quality, --ar 4:5 --style raw
```

**③ 页面背景图**
```
subtle dark texture background, soft film grain, minimalist luxury, deep navy blue to charcoal gradient, faint cinematic vignette, smooth texture, no distinct objects, neutral mood, --ar 16:9 --style raw
```

### 布局规范

**网格结构**
- 桌面端(≥1200px): 4列网格
- 平板端(768px-1199px): 3列网格
- 移动端(<768px): 2列网格 / 单列

**卡片规格**
- 尺寸: 280px × 420px（宽×高）
- 圆角: 16px
- 阴影: `0 8px 30px rgba(0,0,0,0.4)`
- 间距: 24px（卡片间）

**字体层级**
- 页面标题: 32px / 字重700
- 卡片标题: 18px / 字重600
- 卡片元数据: 14px / 字重400
- 导航文字: 16px / 字重500

### 动效规范

1. **滚动渐入**: `opacity 0.6s ease-out, transform 0.6s ease-out`
2. **卡片悬停**: `scale 1.05` + 阴影增强，过渡0.3s
3. **模态框**: 从底部滑入，背景半透明渐变

## 📁 项目结构

```
movie-recommendations/
├── index.html    # 主页面（包含CSS和JS）
└── README.md     # 项目说明
```

## 📄 许可证

MIT License

---

⭐ 如果这个项目对你有帮助，请给个 Star！
