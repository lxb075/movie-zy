
// ==================== 数据定义 ====================
const moviesData = [
    { id: 1, title: "星际穿越", cover: "https://picsum.photos/seed/interstellar/500/600.jpg", type: ["电影"], genre: ["科幻", "冒险"], score: 9.4, desc: "在地球面临生存危机之际，一群勇敢的探险家利用新发现的虫洞，超越人类太空旅行的极限，在广袤的宇宙中展开星际航行。", date: "2014-11-07", like: 12890, collect: 8560, hot: 9500, rating: 4.8, playUrl: "https://www.baidu.com/s?wd=星际穿越%20在线观看" },
    { id: 2, title: "鬼灭之刃", cover: "https://picsum.photos/seed/demon/500/600.jpg", type: ["动漫"], genre: ["动作", "奇幻"], score: 9.1, desc: "为了拯救被鬼杀死的家人，以及让变成鬼的妹妹禰豆子变回人类，炭治郎成为了鬼杀队的一员，展开了战斗。", date: "2019-04-06", like: 18560, collect: 12340, hot: 9800, rating: 4.7, playUrl: "https://www.baidu.com/s?wd=鬼灭之刃%20在线观看" },
    { id: 3, title: "盗梦空间", cover: "https://picsum.photos/seed/inception/500/600.jpg", type: ["电影"], genre: ["科幻", "悬疑"], score: 9.3, desc: "道姆·柯布是一位经验老道的窃贼，他在这一行业中算得上是最厉害的，因为他能够潜入人们精神最为脆弱的梦境中，窃取潜意识中有价值的秘密。", date: "2010-09-01", like: 15670, collect: 9870, hot: 9200, rating: 4.9, playUrl: "https://www.baidu.com/s?wd=盗梦空间%20在线观看" },
    { id: 4, title: "进击的巨人", cover: "https://picsum.photos/seed/titan/500/600.jpg", type: ["动漫"], genre: ["动作", "悬疑"], score: 9.0, desc: "为了躲避巨人的攻击而逃往内地，人类建造了三重巨大的城墙，艾伦耶格尔在亲眼目睹母亲被巨人吞噬后，立誓要消灭所有的巨人。", date: "2013-04-07", like: 21340, collect: 15670, hot: 9900, rating: 4.6, playUrl: "https://www.baidu.com/s?wd=进击的巨人%20在线观看" },
    { id: 5, title: "功夫熊猫", cover: "https://picsum.photos/seed/panda/500/600.jpg", type: ["电影"], genre: ["喜剧", "动作"], score: 8.6, desc: "笨拙的熊猫阿宝在机缘巧合下被选为神龙大侠，与盖世五侠一起保卫和平谷，对抗邪恶的太郎。", date: "2008-06-20", like: 9870, collect: 6540, hot: 8500, rating: 4.5, playUrl: "https://www.baidu.com/s?wd=功夫熊猫%20在线观看" },
    { id: 6, title: "你的名字", cover: "https://picsum.photos/seed/kimi/500/600.jpg", type: ["动漫"], genre: ["爱情", "奇幻"], score: 8.8, desc: "在日本的某个乡下小镇的高中女生三叶，每天过着忧郁的生活，而她的梦想则是能够成为东京的帅哥。", date: "2016-08-26", like: 16780, collect: 11230, hot: 9000, rating: 4.7, playUrl: "https://www.baidu.com/s?wd=你的名字%20在线观看" },
    { id: 7, title: "千与千寻", cover: "https://picsum.photos/seed/spirited/500/600.jpg", type: ["动漫"], genre: ["奇幻", "冒险"], score: 9.4, desc: "千寻和父母误入了一个诡异的世界，父母变成了猪，她不得不在汤屋工作，寻找解救父母的方法。", date: "2001-07-20", like: 22340, collect: 17890, hot: 9950, rating: 4.9, playUrl: "https://www.baidu.com/s?wd=千与千寻%20在线观看" },
    { id: 8, title: "楚门的世界", cover: "https://picsum.photos/seed/truman/500/600.jpg", type: ["电影"], genre: ["剧情", "悬疑"], score: 9.4, desc: "楚门是一个平凡得不能再平凡的人，但他却不知道他生活中的每一秒钟都有上千部摄像机在对着他。", date: "1998-06-01", like: 14560, collect: 10230, hot: 8700, rating: 4.8, playUrl: "https://www.baidu.com/s?wd=楚门的世界%20在线观看" },
    { id: 9, title: "龙珠", cover: "https://picsum.photos/seed/dragonball/500/600.jpg", type: ["动漫"], genre: ["动作", "冒险"], score: 9.4, desc: "讲述了孙悟空护送地球少女布玛寻找龙珠的冒险故事，以及之后与各大反派的战斗。", date: "1986-02-26", like: 25670, collect: 18920, hot: 9700, rating: 4.6, playUrl: "https://www.baidu.com/s?wd=龙珠%20在线观看" },
    { id: 10, title: "阿凡达", cover: "https://picsum.photos/seed/avatar/500/600.jpg", type: ["电影"], genre: ["科幻", "冒险"], score: 8.8, desc: "人类在遥远的星系潘多拉开采资源，杰克·萨利卧底进入纳美族，逐渐爱上了这个美丽的种族。", date: "2009-12-18", like: 19870, collect: 13450, hot: 9600, rating: 4.7, playUrl: "https://www.baidu.com/s?wd=阿凡达%20在线观看" },
    { id: 11, title: "灌篮高手", cover: "https://picsum.photos/seed/slam/500/600.jpg", type: ["动漫"], genre: ["喜剧", "运动"], score: 9.2, desc: "为了讨好暗恋对象赤木晴子，樱木花道加入篮球队。他从篮球小白成长为球队核心，带领球队向全国大赛发起冲击。", date: "1993-10-16", like: 23140, collect: 16780, hot: 9850, rating: 4.8, playUrl: "https://www.baidu.com/s?wd=灌篮高手%20在线观看" },
    { id: 12, title: "肖申克的救赎", cover: "https://picsum.photos/seed/shawshank/500/600.jpg", type: ["电影"], genre: ["剧情", "犯罪"], score: 9.7, desc: "银行家安迪被冤枉入狱，在肖申克监狱中结识了瑞德，并在狱中度过了近20年的时光，最终实现了自我救赎。", date: "1994-09-23", like: 28970, collect: 21340, hot: 9980, rating: 5.0, playUrl: "https://www.baidu.com/s?wd=肖申克的救赎%20在线观看" }
];

// ==================== 状态管理 ====================
let state = {
    currentFilter: "all",
    currentSort: "latest",
    searchQuery: "",
    likedMovies: JSON.parse(localStorage.getItem('likedMovies') || '[]'),
    collectedMovies: JSON.parse(localStorage.getItem('collectedMovies') || '[]'),
    movieRatings: JSON.parse(localStorage.getItem('movieRatings') || '{}'),
    theme: localStorage.getItem('theme') || 'auto',
    comments: JSON.parse(localStorage.getItem('movieComments') || '[]'),
    lightboxIndex: 0,
    lightboxData: []
};

// ==================== 主题管理 ====================
function initTheme() { applyTheme(); setupAutoTheme(); }
function applyTheme() { const theme = getEffectiveTheme(); document.documentElement.setAttribute('data-theme', theme); updateThemeBtn(theme); }
function getEffectiveTheme() { if (state.theme !== 'auto') return state.theme; const hour = new Date().getHours(); return (hour &gt;= 6 &amp;&amp; hour &lt; 18) ? 'light' : 'dark'; }
function setupAutoTheme() { setInterval(() =&gt; { if (state.theme === 'auto') applyTheme(); }, 60000); }
function toggleTheme() { const themes = ['auto', 'light', 'dark']; const i = themes.indexOf(state.theme); state.theme = themes[(i + 1) % themes.length]; localStorage.setItem('theme', state.theme); applyTheme(); }
function updateThemeBtn(t) { const btn = document.getElementById('themeBtn'); const icons = { auto: '🌓', light: '☀️', dark: '🌙' }; btn.textContent = icons[t]; }

// ==================== 初始化图片 ====================
function initializeImages() {
    const bannerImg = document.getElementById('bannerImage');
    bannerImg.src = 'https://images.unsplash.com/photo-1489599904472-1d493b9e3bb2?w=1920&amp;q=80';
}

// ==================== 渲染卡片 ====================
function renderCards() {
    const grid = document.getElementById('cardsGrid');
    grid.innerHTML = '';
    let data = [...moviesData];
    if (state.searchQuery) data = data.filter(m =&gt; m.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
    if (state.currentFilter !== 'all') data = data.filter(m =&gt; m.type.includes(state.currentFilter) || m.genre.includes(state.currentFilter));
    switch (state.currentSort) {
        case 'latest': data.sort((a, b) =&gt; new Date(b.date) - new Date(a.date)); break;
        case 'popular': data.sort((a, b) =&gt; b.hot - a.hot); break;
        case 'score': data.sort((a, b) =&gt; b.score - a.score); break;
    }
    data.forEach((m, i) =&gt; grid.appendChild(createCardElement(m, i)));
    setTimeout(observeCards, 100);
}

function createCardElement(movie, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.transitionDelay = `${index * .1}s`;
    const isLiked = state.likedMovies.includes(movie.id);
    const isCollected = state.collectedMovies.includes(movie.id);
    const userRating = state.movieRatings[movie.id] || 0;
    const fallback = `https://via.placeholder.com/500x600/7C3AED/FFFFFF?text=${encodeURIComponent(movie.title)}`;
    card.innerHTML = `&lt;div class="card-image-wrapper"&gt;&lt;a href="${movie.playUrl}" target="_blank" rel="noopener noreferrer"&gt;&lt;img class="card-image" src="${movie.cover}" alt="${movie.title}" loading="lazy" onerror="this.src='${fallback}'"&gt;&lt;div class="card-play-overlay"&gt;▶ 点击观看&lt;/div&gt;&lt;/a&gt;&lt;div class="card-image-overlay"&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class="card-content"&gt;&lt;div class="card-header"&gt;&lt;h3 class="card-title"&gt;${movie.title}&lt;/h3&gt;&lt;span class="card-score"&gt;⭐ ${movie.score}&lt;/span&gt;&lt;/div&gt;&lt;div class="card-meta"&gt;&lt;span class="card-type"&gt;${movie.type.join(' / ')}&lt;/span&gt;&lt;span class="card-date"&gt;${movie.date}&lt;/span&gt;&lt;/div&gt;&lt;div class="card-rating"&gt;${createStarRating(movie.id, userRating, false)}&lt;/div&gt;&lt;p class="card-desc"&gt;${movie.desc}&lt;/p&gt;&lt;div class="card-actions"&gt;&lt;button class="action-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike(${movie.id}, event)"&gt;❤️ &lt;span&gt;${formatNumber(movie.like + (isLiked ? 1 : 0))}&lt;/span&gt;&lt;/button&gt;&lt;button class="action-btn ${isCollected ? 'collected' : ''}" onclick="toggleCollect(${movie.id}, event)"&gt;🔖 &lt;span&gt;${formatNumber(movie.collect + (isCollected ? 1 : 0))}&lt;/span&gt;&lt;/button&gt;&lt;button class="action-btn play-btn" onclick="window.open('${movie.playUrl}', '_blank'); event.stopPropagation();"&gt;▶ &lt;span&gt;观看&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;`;
    card.addEventListener('click', e =&gt; { if (!e.target.closest('.action-btn') &amp;&amp; !e.target.closest('.card-rating')) openModal(movie); });
    return card;
}

function formatNumber(n) { return n &gt;= 10000 ? (n / 10000).toFixed(1) + 'w' : n.toLocaleString(); }

// ==================== 星级评分 ====================
function createStarRating(movieId, currentRating, interactive) {
    let html = '&lt;div class="stars ' + (interactive ? 'interactive' : '') + '"&gt;';
    for (let i = 1; i &lt;= 5; i++) {
        const filled = i &lt;= currentRating;
        html += `&lt;span class="star ${filled ? 'filled' : ''}" data-rating="${i}" onclick="event.stopPropagation();${interactive ? `setRating(${movieId}, ${i})` : ''}"&gt;★&lt;/span&gt;`;
    }
    html += '&lt;/div&gt;';
    return html;
}

function setRating(movieId, rating) {
    state.movieRatings[movieId] = rating;
    localStorage.setItem('movieRatings', JSON.stringify(state.movieRatings));
    const movie = moviesData.find(m =&gt; m.id === movieId);
    if (movie) { openModal(movie); }
    renderCards();
}

// ==================== 滚动动画 ====================
function observeCards() { const cards = document.querySelectorAll('.card'); const observer = new IntersectionObserver(entries =&gt; { entries.forEach(e =&gt; { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: .1 }); cards.forEach(c =&gt; observer.observe(c)); }

// ==================== 点赞收藏 ====================
function toggleLike(id, e) { e.stopPropagation(); const i = state.likedMovies.indexOf(id); i &gt; -1 ? state.likedMovies.splice(i, 1) : state.likedMovies.push(id); localStorage.setItem('likedMovies', JSON.stringify(state.likedMovies)); renderCards(); }
function toggleCollect(id, e) { e.stopPropagation(); const i = state.collectedMovies.indexOf(id); i &gt; -1 ? state.collectedMovies.splice(i, 1) : state.collectedMovies.push(id); localStorage.setItem('collectedMovies', JSON.stringify(state.collectedMovies)); renderCards(); }

// ==================== 详情弹窗 ====================
function openModal(m) {
    const modal = document.getElementById('modalOverlay');
    const img = document.getElementById('modalImage');
    const fallback = `https://via.placeholder.com/500x600/7C3AED/FFFFFF?text=${encodeURIComponent(m.title)}`;
    img.src = m.cover;
    img.onerror = function () { this.src = fallback; };
    const isLiked = state.likedMovies.includes(m.id);
    const isCollected = state.collectedMovies.includes(m.id);
    const userRating = state.movieRatings[m.id] || 0;
    const movieComments = state.comments.filter(c =&gt; c.movieId === m.id);
    document.getElementById('modalContent').innerHTML = `&lt;h2 class="modal-title"&gt;${m.title}&lt;/h2&gt;&lt;div class="modal-meta"&gt;&lt;span class="modal-meta-item"&gt;⭐ ${m.score}分&lt;/span&gt;&lt;span class="modal-meta-item"&gt;${m.type.join(' / ')}&lt;/span&gt;&lt;span class="modal-meta-item"&gt;${m.genre.join(' / ')}&lt;/span&gt;&lt;span class="modal-meta-item"&gt;${m.date}&lt;/span&gt;&lt;/div&gt;&lt;div class="modal-rating-section"&gt;&lt;div class="rating-label"&gt;我的评分：&lt;/div&gt;${createStarRating(m.id, userRating, true)}&lt;/div&gt;&lt;p class="modal-description"&gt;${m.desc}&lt;/p&gt;&lt;div class="modal-share"&gt;&lt;button class="share-btn" onclick="shareMovie('${m.title}')"&gt;🔗 分享链接&lt;/button&gt;&lt;/div&gt;&lt;div class="modal-actions"&gt;&lt;a href="${m.playUrl}" target="_blank" class="modal-action-btn play-primary"&gt;▶ 立即观看&lt;/a&gt;&lt;button class="modal-action-btn primary" onclick="toggleLikeInModal(${m.id})"&gt;❤️ ${isLiked ? '已点赞' : '点赞'} (${formatNumber(m.like + (isLiked ? 1 : 0))})&lt;/button&gt;&lt;button class="modal-action-btn secondary" onclick="toggleCollectInModal(${m.id})"&gt;🔖 ${isCollected ? '已收藏' : '收藏'} (${formatNumber(m.collect + (isCollected ? 1 : 0))})&lt;/button&gt;&lt;/div&gt;&lt;div class="modal-comments"&gt;&lt;h3&gt;💬 评论区 (${movieComments.length})&lt;/h3&gt;${renderComments(m.id)}&lt;/div&gt;`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderComments(movieId) {
    const comments = state.comments.filter(c =&gt; c.movieId === movieId);
    let html = '&lt;div class="comments-list"&gt;';
    if (comments.length === 0) {
        html += '&lt;p class="no-comments"&gt;还没有评论，快来抢沙发！&lt;/p&gt;';
    } else {
        comments.slice(-5).reverse().forEach(c =&gt; {
            html += `&lt;div class="comment-item"&gt;&lt;div class="comment-header"&gt;&lt;span class="comment-author"&gt;${c.author}&lt;/span&gt;&lt;span class="comment-time"&gt;${c.time}&lt;/span&gt;&lt;/div&gt;&lt;p class="comment-text"&gt;${c.text}&lt;/p&gt;&lt;/div&gt;`;
        });
    }
    html += '&lt;/div&gt;';
    html += `&lt;div class="comment-form"&gt;&lt;input type="text" id="commentInput" placeholder="写下你的评论..." maxlength="100"&gt;&lt;button onclick="submitComment(${movieId})"&gt;发送&lt;/button&gt;&lt;/div&gt;`;
    return html;
}

function submitComment(movieId) {
    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    if (!text) return;
    const comment = { movieId, author: '访客' + Math.floor(Math.random() * 9999), text, time: new Date().toLocaleString() };
    state.comments.push(comment);
    localStorage.setItem('movieComments', JSON.stringify(state.comments));
    const movie = moviesData.find(m =&gt; m.id === movieId);
    if (movie) openModal(movie);
}

function toggleLikeInModal(id) { const i = state.likedMovies.indexOf(id); i &gt; -1 ? state.likedMovies.splice(i, 1) : state.likedMovies.push(id); localStorage.setItem('likedMovies', JSON.stringify(state.likedMovies)); const movie = moviesData.find(m =&gt; m.id === id); if (movie) { openModal(movie); renderCards(); } }
function toggleCollectInModal(id) { const i = state.collectedMovies.indexOf(id); i &gt; -1 ? state.collectedMovies.splice(i, 1) : state.collectedMovies.push(id); localStorage.setItem('collectedMovies', JSON.stringify(state.collectedMovies)); const movie = moviesData.find(m =&gt; m.id === id); if (movie) { openModal(movie); renderCards(); } }
function closeModal() { document.getElementById('modalOverlay').classList.remove('active'); document.body.style.overflow = ''; }

// ==================== 分享功能 ====================
function shareMovie(title) {
    const url = window.location.href;
    const shareText = `我在影视推荐墙发现了《${title}》，推荐给大家！`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText + '\n' + url).then(() =&gt; {
            alert('分享内容已复制到剪贴板！');
        });
    } else {
        prompt('复制以下内容分享：', shareText + '\n' + url);
    }
}

// ==================== Lightbox图片查看器 ====================
function openLightbox(movieId, event) {
    event.stopPropagation();
    const movie = moviesData.find(m =&gt; m.id === movieId);
    if (!movie) return;
    state.lightboxData = moviesData.filter(m =&gt; m.type.some(t =&gt; movie.type.includes(t)));
    state.lightboxIndex = state.lightboxData.findIndex(m =&gt; m.id === movieId);
    updateLightbox();
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateLightbox() {
    const movie = state.lightboxData[state.lightboxIndex];
    if (!movie) return;
    const fallback = `https://via.placeholder.com/800x600/7C3AED/FFFFFF?text=${encodeURIComponent(movie.title)}`;
    document.getElementById('lightboxImage').src = movie.cover;
    document.getElementById('lightboxImage').onerror = function () { this.src = fallback; };
    document.getElementById('lightboxTitle').textContent = movie.title;
    document.getElementById('lightboxCounter').textContent = `${state.lightboxIndex + 1} / ${state.lightboxData.length}`;
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function prevImage() {
    state.lightboxIndex = (state.lightboxIndex - 1 + state.lightboxData.length) % state.lightboxData.length;
    updateLightbox();
}

function nextImage() {
    state.lightboxIndex = (state.lightboxIndex + 1) % state.lightboxData.length;
    updateLightbox();
}

// ==================== 留言板功能 ====================
function initGuestbook() {
    const container = document.getElementById('guestbook');
    if (!container) return;
    renderGuestbook();
}

function renderGuestbook() {
    const container = document.getElementById('guestbookList');
    if (!container) return;
    const comments = JSON.parse(localStorage.getItem('guestbookComments') || '[]');
    let html = '';
    if (comments.length === 0) {
        html = '&lt;p class="no-guestbook"&gt;还没有留言，写下你的第一条留言吧！&lt;/p&gt;';
    } else {
        comments.reverse().forEach(c =&gt; {
            html += `&lt;div class="guestbook-item"&gt;&lt;div class="guestbook-header"&gt;&lt;span class="guestbook-avatar"&gt;${c.avatar || '👤'}&lt;/span&gt;&lt;div&gt;&lt;div class="guestbook-author"&gt;${c.author}&lt;/div&gt;&lt;div class="guestbook-time"&gt;${c.time}&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;p class="guestbook-text"&gt;${c.text}&lt;/p&gt;&lt;/div&gt;`;
        });
    }
    container.innerHTML = html;
}

function submitGuestbook() {
    const input = document.getElementById('guestbookInput');
    const text = input.value.trim();
    if (!text) return;
    const comments = JSON.parse(localStorage.getItem('guestbookComments') || '[]');
    const avatars = ['😊', '🤗', '😎', '🥳', '🤩', '😋', '🤓', '🙂'];
    comments.push({ author: '访客' + Math.floor(Math.random() * 9999), text, time: new Date().toLocaleString(), avatar: avatars[Math.floor(Math.random() * avatars.length)] });
    localStorage.setItem('guestbookComments', JSON.stringify(comments));
    input.value = '';
    renderGuestbook();
}

// ==================== 返回顶部按钮 ====================
function initScrollButtons() {
    const backToTop = document.getElementById('backToTop');
    const progressBar = document.getElementById('progressBar');
    if (!backToTop) return;
    window.addEventListener('scroll', () =&gt; {
        if (window.pageYOffset &gt; 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        if (progressBar) progressBar.style.width = progress + '%';
    });
    backToTop.addEventListener('click', () =&gt; {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==================== 事件监听 ====================
function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', e =&gt; { state.searchQuery = e.target.value; renderCards(); });
    document.getElementById('filterButtons').addEventListener('click', e =&gt; { if (e.target.classList.contains('filter-btn')) { document.querySelectorAll('.filter-btn').forEach(b =&gt; b.classList.remove('active')); e.target.classList.add('active'); state.currentFilter = e.target.dataset.filter; renderCards(); } });
    document.getElementById('sortSelect').addEventListener('change', e =&gt; { state.currentSort = e.target.value; renderCards(); });
    document.getElementById('themeBtn').addEventListener('click', toggleTheme);
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', e =&gt; { if (e.target.id === 'modalOverlay') closeModal(); });
    document.addEventListener('keydown', e =&gt; {
        if (e.key === 'Escape') closeModal();
        if (document.getElementById('lightbox').classList.contains('active')) {
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeLightbox();
        }
    });
    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev')?.addEventListener('click', prevImage);
    document.getElementById('lightboxNext')?.addEventListener('click', nextImage);
    document.getElementById('lightbox')?.addEventListener('click', e =&gt; { if (e.target.id === 'lightbox') closeLightbox(); });
}

// ==================== 初始化 ====================
function init() {
    initTheme();
    initializeImages();
    setupEventListeners();
    initGuestbook();
    initScrollButtons();
    setTimeout(() =&gt; {
        document.getElementById('loading').style.display = 'none';
        renderCards();
    }, 1000);
}

// 启动
init();

