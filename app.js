// ==================== 数据定义 ====================
const moviesData=[
    {id:1,title:'星际穿越',cover:'https://img9.doubanio.com/view/photo/l/public/p2563877760.webp',type:['电影'],genre:['科幻','冒险'],score:9.4,desc:'在地球面临生存危机之际，一群勇敢的探险家利用新发现的虫洞，超越人类太空旅行的极限，在广袤的宇宙中展开星际航行。',date:'2014-11-07',like:12890,collect:8560,hot:9500,rating:4.8,playUrl:'https://www.baidu.com/s?wd=星际穿越%20在线观看'},
    {id:2,title:'鬼灭之刃',cover:'https://img9.doubanio.com/view/photo/l/public/p2622070805.webp',type:['动漫'],genre:['动作','奇幻'],score:9.1,desc:'为了拯救被鬼杀死的家人，以及让变成鬼的妹妹禰豆子变回人类，炭治郎成为了鬼杀队的一员，展开了战斗。',date:'2019-04-06',like:18560,collect:12340,hot:9800,rating:4.7,playUrl:'https://www.baidu.com/s?wd=鬼灭之刃%20在线观看'},
    {id:3,title:'盗梦空间',cover:'https://img9.doubanio.com/view/photo/l/public/p513344864.webp',type:['电影'],genre:['科幻','悬疑'],score:9.3,desc:'道姆·柯布是一位经验老道的窃贼，他在这一行业中算得上是最厉害的，因为他能够潜入人们精神最为脆弱的梦境中，窃取潜意识中有价值的秘密。',date:'2010-09-01',like:15670,collect:9870,hot:9200,rating:4.9,playUrl:'https://www.baidu.com/s?wd=盗梦空间%20在线观看'},
    {id:4,title:'进击的巨人',cover:'https://img9.doubanio.com/view/photo/l/public/p2500571282.webp',type:['动漫'],genre:['动作','悬疑'],score:9.0,desc:'为了躲避巨人的攻击而逃往内地，人类建造了三重巨大的城墙，艾伦耶格尔在亲眼目睹母亲被巨人吞噬后，立誓要消灭所有的巨人。',date:'2013-04-07',like:21340,collect:15670,hot:9900,rating:4.6,playUrl:'https://www.baidu.com/s?wd=进击的巨人%20在线观看'},
    {id:5,title:'功夫熊猫',cover:'https://img9.doubanio.com/view/photo/l/public/p486039073.webp',type:['电影'],genre:['喜剧','动作'],score:8.6,desc:'笨拙的熊猫阿宝在机缘巧合下被选为神龙大侠，与盖世五侠一起保卫和平谷，对抗邪恶的太郎。',date:'2008-06-20',like:9870,collect:6540,hot:8500,rating:4.5,playUrl:'https://www.baidu.com/s?wd=功夫熊猫%20在线观看'},
    {id:6,title:'你的名字',cover:'https://img9.doubanio.com/view/photo/l/public/p2457207612.webp',type:['动漫'],genre:['爱情','奇幻'],score:8.8,desc:'在日本的某个乡下小镇的高中女生三叶，每天过着忧郁的生活，而她的梦想则是能够成为东京的帅哥。',date:'2016-08-26',like:16780,collect:11230,hot:9000,rating:4.7,playUrl:'https://www.baidu.com/s?wd=你的名字%20在线观看'},
    {id:7,title:'千与千寻',cover:'https://img9.doubanio.com/view/photo/l/public/p1910813120.webp',type:['动漫'],genre:['奇幻','冒险'],score:9.4,desc:'千寻和父母误入了一个诡异的世界，父母变成了猪，她不得不在汤屋工作，寻找解救父母的方法。',date:'2001-07-20',like:22340,collect:17890,hot:9950,rating:4.9,playUrl:'https://www.baidu.com/s?wd=千与千寻%20在线观看'},
    {id:8,title:'楚门的世界',cover:'https://img9.doubanio.com/view/photo/l/public/p480921011.webp',type:['电影'],genre:['剧情','悬疑'],score:9.4,desc:'楚门是一个平凡得不能再平凡的人，但他却不知道他生活中的每一秒钟都有上千部摄像机在对着他。',date:'1998-06-01',like:14560,collect:10230,hot:8700,rating:4.8,playUrl:'https://www.baidu.com/s?wd=楚门的世界%20在线观看'},
    {id:9,title:'龙珠',cover:'https://img9.doubanio.com/view/photo/l/public/p599685263.webp',type:['动漫'],genre:['动作','冒险'],score:9.4,desc:'讲述了孙悟空护送地球少女布玛寻找龙珠的冒险故事，以及之后与各大反派的战斗。',date:'1986-02-26',like:25670,collect:18920,hot:9700,rating:4.6,playUrl:'https://www.baidu.com/s?wd=龙珠%20在线观看'},
    {id:10,title:'阿凡达',cover:'https://img9.doubanio.com/view/photo/l/public/p511696039.webp',type:['电影'],genre:['科幻','冒险'],score:8.8,desc:'人类在遥远的星系潘多拉开采资源，杰克·萨利卧底进入纳美族，逐渐爱上了这个美丽的种族。',date:'2009-12-18',like:19870,collect:13450,hot:9600,rating:4.7,playUrl:'https://www.baidu.com/s?wd=阿凡达%20在线观看'},
    {id:11,title:'灌篮高手',cover:'https://img9.doubanio.com/view/photo/l/public/p2812667342.webp',type:['动漫'],genre:['喜剧','运动'],score:9.2,desc:'为了讨好暗恋对象赤木晴子，樱木花道加入篮球队。他从篮球小白成长为球队核心，带领球队向全国大赛发起冲击。',date:'1993-10-16',like:23140,collect:16780,hot:9850,rating:4.8,playUrl:'https://www.baidu.com/s?wd=灌篮高手%20在线观看'},
    {id:12,title:'肖申克的救赎',cover:'https://img9.doubanio.com/view/photo/l/public/p480920952.webp',type:['电影'],genre:['剧情','犯罪'],score:9.7,desc:'银行家安迪被冤枉入狱，在肖申克监狱中结识了瑞德，并在狱中度过了近20年的时光，最终实现了自我救赎。',date:'1994-09-23',like:28970,collect:21340,hot:9980,rating:5.0,playUrl:'https://www.baidu.com/s?wd=肖申克的救赎%20在线观看'}
];

// ==================== 状态管理 ====================
let state={
    currentFilter:'all',
    currentSort:'latest',
    searchQuery:'',
    likedMovies:JSON.parse(localStorage.getItem('likedMovies')||'[]'),
    collectedMovies:JSON.parse(localStorage.getItem('collectedMovies')||'[]'),
    movieRatings:JSON.parse(localStorage.getItem('movieRatings')||'{}'),
    theme:localStorage.getItem('theme')||'auto',
    comments:JSON.parse(localStorage.getItem('movieComments')||'[]'),
    lightboxIndex:0,
    lightboxData:[]
};

// ==================== 主题管理 ====================
function initTheme(){applyTheme();setupAutoTheme();}
function applyTheme(){const theme=getEffectiveTheme();document.documentElement.setAttribute('data-theme',theme);updateThemeBtn(theme);}
function getEffectiveTheme(){if(state.theme!=='auto')return state.theme;const hour=new Date().getHours();return(hour>=6&&hour<18)?'light':'dark';}
function setupAutoTheme(){setInterval(()=>{if(state.theme==='auto')applyTheme();},60000);}
function toggleTheme(){const themes=['auto','light','dark'];const i=themes.indexOf(state.theme);state.theme=themes[(i+1)%themes.length];localStorage.setItem('theme',state.theme);applyTheme();}
function updateThemeBtn(t){const btn=document.getElementById('themeBtn');const icons={auto:'🌓',light:'☀️',dark:'🌙'};btn.textContent=icons[t];}

// ==================== 初始化图片 ====================
function initializeImages(){
    const bannerImg=document.getElementById('bannerImage');
    bannerImg.src='https://images.unsplash.com/photo-1489599904472-1d493b9e3bb2?w=1920&q=80';
}

// ==================== 渲染卡片 ====================
function renderCards(){
    const grid=document.getElementById('cardsGrid');
    grid.innerHTML='';
    let data=[...moviesData];
    if(state.searchQuery)data=data.filter(m=>m.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
    if(state.currentFilter!=='all')data=data.filter(m=>m.type.includes(state.currentFilter)||m.genre.includes(state.currentFilter));
    switch(state.currentSort){
        case'latest':data.sort((a,b)=>new Date(b.date)-new Date(a.date));break;
        case'popular':data.sort((a,b)=>b.hot-a.hot);break;
        case'score':data.sort((a,b)=>b.score-a.score);break;
    }
    data.forEach((m,i)=>grid.appendChild(createCardElement(m,i)));
    setTimeout(observeCards,100);
}

function createCardElement(movie,index){
    const card=document.createElement('div');
    card.className='card';
    card.style.transitionDelay=`${index*.1}s`;
    const isLiked=state.likedMovies.includes(movie.id);
    const isCollected=state.collectedMovies.includes(movie.id);
    const userRating=state.movieRatings[movie.id]||0;
    const fallback='https://via.placeholder.com/400x500/7C3AED/FFFFFF?text='+encodeURIComponent(movie.title);
    card.innerHTML=`<div class="card-image-wrapper"><a href="${movie.playUrl}" target="_blank" rel="noopener noreferrer"><img class="card-image" src="${movie.cover}" alt="${movie.title}" loading="lazy" onerror="this.src='${fallback}'"><div class="card-play-overlay">▶ 点击观看</div></a><div class="card-image-overlay"></div></div><div class="card-content"><div class="card-header"><h3 class="card-title">${movie.title}</h3><span class="card-score">⭐ ${movie.score}</span></div><div class="card-meta"><span class="card-type">${movie.type.join(' / ')}</span><span class="card-date">${movie.date}</span></div><div class="card-rating">${createStarRating(movie.id,userRating,false)}</div><p class="card-desc">${movie.desc}</p><div class="card-actions"><button class="action-btn ${isLiked?'liked':''}" onclick="toggleLike(${movie.id},event)">❤️ <span>${formatNumber(movie.like+(isLiked?1:0))}</span></button><button class="action-btn ${isCollected?'collected':''}" onclick="toggleCollect(${movie.id},event)">🔖 <span>${formatNumber(movie.collect+(isCollected?1:0))}</span></button><button class="action-btn play-btn" onclick="window.open('${movie.playUrl}', '_blank'); event.stopPropagation();">▶ <span>观看</span></button></div></div>`;
    card.addEventListener('click',e=>{if(!e.target.closest('.action-btn')&&!e.target.closest('.card-rating'))openModal(movie);});
    return card;
}

function formatNumber(n){return n>=10000?(n/10000).toFixed(1)+'w':n.toLocaleString();}

// ==================== 星级评分 ====================
function createStarRating(movieId,currentRating,interactive){
    let html='<div class="stars '+(interactive?'interactive':'')+'">';
    for(let i=1;i<=5;i++){
        const filled=i<=currentRating;
        html+=`<span class="star ${filled?'filled':''}" data-rating="${i}" onclick="event.stopPropagation();${interactive?`setRating(${movieId},${i})`:''}">★</span>`;
    }
    html+='</div>';
    return html;
}

function setRating(movieId,rating){
    state.movieRatings[movieId]=rating;
    localStorage.setItem('movieRatings',JSON.stringify(state.movieRatings));
    const movie=moviesData.find(m=>m.id===movieId);
    if(movie){openModal(movie);}
    renderCards();
}

// ==================== 滚动动画 ====================
function observeCards(){const cards=document.querySelectorAll('.card');const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:.1});cards.forEach(c=>observer.observe(c));}

// ==================== 点赞收藏 ====================
function toggleLike(id,e){e.stopPropagation();const i=state.likedMovies.indexOf(id);i>-1?state.likedMovies.splice(i,1):state.likedMovies.push(id);localStorage.setItem('likedMovies',JSON.stringify(state.likedMovies));renderCards();}
function toggleCollect(id,e){e.stopPropagation();const i=state.collectedMovies.indexOf(id);i>-1?state.collectedMovies.splice(i,1):state.collectedMovies.push(id);localStorage.setItem('collectedMovies',JSON.stringify(state.collectedMovies));renderCards();}

// ==================== 详情弹窗 ====================
function openModal(m){
    const modal=document.getElementById('modalOverlay');
    const img=document.getElementById('modalImage');
    const fallback='https://via.placeholder.com/400x500/7C3AED/FFFFFF?text='+encodeURIComponent(m.title);
    img.src=m.cover;
    img.onerror=function(){this.src=fallback;};
    const isLiked=state.likedMovies.includes(m.id);
    const isCollected=state.collectedMovies.includes(m.id);
    const userRating=state.movieRatings[m.id]||0;
    const movieComments=state.comments.filter(c=>c.movieId===m.id);
    document.getElementById('modalContent').innerHTML=`<h2 class="modal-title">${m.title}</h2><div class="modal-meta"><span class="modal-meta-item">⭐ ${m.score}分</span><span class="modal-meta-item">${m.type.join(' / ')}</span><span class="modal-meta-item">${m.genre.join(' / ')}</span><span class="modal-meta-item">${m.date}</span></div><div class="modal-rating-section"><div class="rating-label">我的评分：</div>${createStarRating(m.id,userRating,true)}</div><p class="modal-description">${m.desc}</p><div class="modal-share"><button class="share-btn" onclick="shareMovie('${m.title}')">🔗 分享链接</button></div><div class="modal-actions"><a href="${m.playUrl}" target="_blank" class="modal-action-btn play-primary">▶ 立即观看</a><button class="modal-action-btn primary" onclick="toggleLikeInModal(${m.id})">❤️ ${isLiked?'已点赞':'点赞'} (${formatNumber(m.like+(isLiked?1:0))})</button><button class="modal-action-btn secondary" onclick="toggleCollectInModal(${m.id})">🔖 ${isCollected?'已收藏':'收藏'} (${formatNumber(m.collect+(isCollected?1:0))})</button></div><div class="modal-comments"><h3>💬 评论区 (${movieComments.length})</h3>${renderComments(m.id)}</div>`;
    modal.classList.add('active');
    document.body.style.overflow='hidden';
}

function renderComments(movieId){
    const comments=state.comments.filter(c=>c.movieId===movieId);
    let html='<div class="comments-list">';
    if(comments.length===0){
        html+='<p class="no-comments">还没有评论，快来抢沙发！</p>';
    }else{
        comments.slice(-5).reverse().forEach(c=>{
            html+=`<div class="comment-item"><div class="comment-header"><span class="comment-author">${c.author}</span><span class="comment-time">${c.time}</span></div><p class="comment-text">${c.text}</p></div>`;
        });
    }
    html+='</div>';
    html+=`<div class="comment-form"><input type="text" id="commentInput" placeholder="写下你的评论..." maxlength="100"><button onclick="submitComment(${movieId})">发送</button></div>`;
    return html;
}

function submitComment(movieId){
    const input=document.getElementById('commentInput');
    const text=input.value.trim();
    if(!text)return;
    const comment={movieId,author:'访客'+Math.floor(Math.random()*9999),text,time:new Date().toLocaleString()};
    state.comments.push(comment);
    localStorage.setItem('movieComments',JSON.stringify(state.comments));
    const movie=moviesData.find(m=>m.id===movieId);
    if(movie)openModal(movie);
}

function toggleLikeInModal(id){const i=state.likedMovies.indexOf(id);i>-1?state.likedMovies.splice(i,1):state.likedMovies.push(id);localStorage.setItem('likedMovies',JSON.stringify(state.likedMovies));const movie=moviesData.find(m=>m.id===id);if(movie){openModal(movie);renderCards();}}
function toggleCollectInModal(id){const i=state.collectedMovies.indexOf(id);i>-1?state.collectedMovies.splice(i,1):state.collectedMovies.push(id);localStorage.setItem('collectedMovies',JSON.stringify(state.collectedMovies));const movie=moviesData.find(m=>m.id===id);if(movie){openModal(movie);renderCards();}}
function closeModal(){document.getElementById('modalOverlay').classList.remove('active');document.body.style.overflow='';}

// ==================== 分享功能 ====================
function shareMovie(title){
    const url=window.location.href;
    const shareText=`我在影视推荐墙发现了《${title}》，推荐给大家！`;
    if(navigator.clipboard){
        navigator.clipboard.writeText(shareText+'\n'+url).then(()=>{
            alert('分享内容已复制到剪贴板！');
        });
    }else{
        prompt('复制以下内容分享：',shareText+'\n'+url);
    }
}

// ==================== Lightbox图片查看器 ====================
function openLightbox(movieId,event){
    event.stopPropagation();
    const movie=moviesData.find(m=>m.id===movieId);
    if(!movie)return;
    state.lightboxData=moviesData.filter(m=>m.type.some(t=>movie.type.includes(t)));
    state.lightboxIndex=state.lightboxData.findIndex(m=>m.id===movieId);
    updateLightbox();
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow='hidden';
}

function updateLightbox(){
    const movie=state.lightboxData[state.lightboxIndex];
    if(!movie)return;
    const fallback='https://via.placeholder.com/800x600/7C3AED/FFFFFF?text='+encodeURIComponent(movie.title);
    document.getElementById('lightboxImage').src=movie.cover;
    document.getElementById('lightboxImage').onerror=function(){this.src=fallback;};
    document.getElementById('lightboxTitle').textContent=movie.title;
    document.getElementById('lightboxCounter').textContent=`${state.lightboxIndex+1} / ${state.lightboxData.length}`;
}

function closeLightbox(){
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow='';
}

function prevImage(){
    state.lightboxIndex=(state.lightboxIndex-1+state.lightboxData.length)%state.lightboxData.length;
    updateLightbox();
}

function nextImage(){
    state.lightboxIndex=(state.lightboxIndex+1)%state.lightboxData.length;
    updateLightbox();
}

// ==================== 留言板功能 ====================
function initGuestbook(){
    const container=document.getElementById('guestbook');
    if(!container)return;
    renderGuestbook();
}

function renderGuestbook(){
    const container=document.getElementById('guestbookList');
    if(!container)return;
    const comments=JSON.parse(localStorage.getItem('guestbookComments')||'[]');
    let html='';
    if(comments.length===0){
        html='<p class="no-guestbook">还没有留言，写下你的第一条留言吧！</p>';
    }else{
        comments.reverse().forEach(c=>{
            html+=`<div class="guestbook-item"><div class="guestbook-header"><span class="guestbook-avatar">${c.avatar||'👤'}</span><div><div class="guestbook-author">${c.author}</div><div class="guestbook-time">${c.time}</div></div></div><p class="guestbook-text">${c.text}</p></div>`;
        });
    }
    container.innerHTML=html;
}

function submitGuestbook(){
    const input=document.getElementById('guestbookInput');
    const text=input.value.trim();
    if(!text)return;
    const comments=JSON.parse(localStorage.getItem('guestbookComments')||'[]');
    const avatars=['😊','🤗','😎','🥳','🤩','😋','🤓','🙂'];
    comments.push({author:'访客'+Math.floor(Math.random()*9999),text,time:new Date().toLocaleString(),avatar:avatars[Math.floor(Math.random()*avatars.length)]});
    localStorage.setItem('guestbookComments',JSON.stringify(comments));
    input.value='';
    renderGuestbook();
}

// ==================== 返回顶部按钮 ====================
function initScrollButtons(){
    const backToTop=document.getElementById('backToTop');
    const progressBar=document.getElementById('progressBar');
    if(!backToTop)return;
    window.addEventListener('scroll',()=>{
        if(window.pageYOffset>300){
            backToTop.classList.add('visible');
        }else{
            backToTop.classList.remove('visible');
        }
        const scrollTop=window.pageYOffset;
        const docHeight=document.documentElement.scrollHeight-window.innerHeight;
        const progress=(scrollTop/docHeight)*100;
        if(progressBar)progressBar.style.width=progress+'%';
    });
    backToTop.addEventListener('click',()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    });
}

// ==================== 事件监听 ====================
function setupEventListeners(){
    document.getElementById('searchInput').addEventListener('input',e=>{state.searchQuery=e.target.value;renderCards();});
    document.getElementById('filterButtons').addEventListener('click',e=>{if(e.target.classList.contains('filter-btn')){document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');state.currentFilter=e.target.dataset.filter;renderCards();}});
    document.getElementById('sortSelect').addEventListener('change',e=>{state.currentSort=e.target.value;renderCards();});
    document.getElementById('themeBtn').addEventListener('click',toggleTheme);
    document.getElementById('modalClose').addEventListener('click',closeModal);
    document.getElementById('modalOverlay').addEventListener('click',e=>{if(e.target.id==='modalOverlay')closeModal();});
    document.addEventListener('keydown',e=>{
        if(e.key==='Escape')closeModal();
        if(document.getElementById('lightbox').classList.contains('active')){
            if(e.key==='ArrowLeft')prevImage();
            if(e.key==='ArrowRight')nextImage();
            if(e.key==='Escape')closeLightbox();
        }
    });
    document.getElementById('lightboxClose')?.addEventListener('click',closeLightbox);
    document.getElementById('lightboxPrev')?.addEventListener('click',prevImage);
    document.getElementById('lightboxNext')?.addEventListener('click',nextImage);
    document.getElementById('lightbox')?.addEventListener('click',e=>{if(e.target.id==='lightbox')closeLightbox();});
}

// ==================== 初始化 ====================
function init(){
    initTheme();
    initializeImages();
    setupEventListeners();
    initGuestbook();
    initScrollButtons();
    setTimeout(()=>{
        document.getElementById('loading').style.display='none';
        renderCards();
    },1000);
}

// 启动
init();
