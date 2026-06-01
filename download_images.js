
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const movieNames = [
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
];

const seeds = ["interstellar", "demon", "inception", "titan", "panda", "kimi", "spirited", "truman", "dragon", "avatar", "slam", "shawshank"];

function downloadImage(url, filename) {
    return new Promise((resolve, reject) =&gt; {
        const client = url.startsWith('https') ? https : http;
        client.get(url, (res) =&gt; {
            if (res.statusCode === 200) {
                const fileStream = fs.createWriteStream(filename);
                res.pipe(fileStream);
                fileStream.on('finish', () =&gt; {
                    fileStream.close();
                    resolve(true);
                });
            } else {
                resolve(false);
            }
        }).on('error', (err) =&gt; {
            resolve(false);
        });
    });
}

async function downloadAll() {
    const imagesDir = path.join(__dirname, 'images');
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir);
    }
    
    console.log('开始下载电影封面...\n');
    
    for (let i = 0; i &lt; movieNames.length; i++) {
        const filename = path.join(imagesDir, `${i+1}.jpg`);
        const movieName = movieNames[i];
        
        if (fs.existsSync(filename)) {
            console.log(`  [${i+1}] ${movieName} - 已存在`);
            continue;
        }
        
        let success = false;
        
        // 尝试多个源
        const sources = [
            `https://picsum.photos/seed/${seeds[i]}/500/600.jpg`,
            `https://picsum.photos/seed/${'film'+(i+1)}/500/600.jpg`
        ];
        
        for (const url of sources) {
            console.log(`  [${i+1}] ${movieName} - 尝试: ${url}`);
            try {
                success = await downloadImage(url, filename);
                if (success) {
                    console.log(`  ✓ [${i+1}] ${movieName} - 下载成功`);
                    break;
                }
            } catch (e) {
                continue;
            }
        }
        
        if (!success) {
            console.log(`  ✗ [${i+1}] ${movieName} - 下载失败`);
            // 创建占位图
            const placeholder = path.join(__dirname, 'images', `${i+1}.jpg`);
            fs.writeFileSync(placeholder, Buffer.from(''));
        }
    }
    
    console.log('\n下载完成！');
}

downloadAll();

