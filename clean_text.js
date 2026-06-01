const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'resume_text.txt');
const outputPath = path.join(__dirname, '..', 'resume_clean.txt');

if (!fs.existsSync(inputPath)) {
    console.error('找不到文件:', inputPath);
    process.exit(1);
}

let text = fs.readFileSync(inputPath, 'utf-8');

// 移除所有 XML 标签
text = text.replace(/<[^>]+>/g, '');

// 移除 HTML 实体
text = text.replace(/&nbsp;/g, ' ');
text = text.replace(/&lt;/g, '<');
text = text.replace(/&gt;/g, '>');
text = text.replace(/&amp;/g, '&');

// 清理多余的空格和换行
text = text.replace(/\s+/g, ' ').trim();

// 按标点符号分段
text = text.replace(/([。！？；:])/g, '$1\n');

// 清理多余的空格
text = text.replace(/\s+/g, ' ').trim();

// 保存清理后的文本
fs.writeFileSync(outputPath, text, 'utf-8');

console.log('✅ 文本清理完成！');
console.log('保存路径:', outputPath);
console.log('文本长度:', text.length, '字符');
console.log('\n--- 清理后的文本内容 ---\n');
console.log(text);
