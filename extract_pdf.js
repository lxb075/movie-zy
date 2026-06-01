const fs = require('fs');
const path = require('path');

// PDF 文件路径
const pdfPath = path.join(__dirname, '..', '美观整齐简历模板 (1).pdf');
const outputPath = path.join(__dirname, '..', 'resume_text.txt');

console.log('正在读取 PDF 文件:', pdfPath);

if (!fs.existsSync(pdfPath)) {
    console.error('PDF 文件不存在:', pdfPath);
    process.exit(1);
}

// 读取 PDF 文件为 Buffer
const pdfBuffer = fs.readFileSync(pdfPath);

console.log('PDF 文件大小:', (pdfBuffer.length / 1024).toFixed(2) + ' KB');

// 尝试从 PDF 中提取文本内容
// PDF 文本通常以流的形式存储，我们需要解析
let text = '';

// 使用 Buffer 读取
const pdfString = pdfBuffer.toString('latin1');

// 查找 PDF 中的文本流
const textStreamRegex = /stream\s+([\s\S]*?)\s+endstream/g;
let match;

while ((match = textStreamRegex.exec(pdfString)) !== null) {
    text += match[1] + '\n';
}

// 清理文本 - 移除控制字符
text = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

// 移除 PDF 操作符
text = text.replace(/BT\s*/gi, '\n');
text = text.replace(/Tf\s*/gi, ' ');
text = text.replace(/Tj\s*/gi, ' ');
text = text.replace(/TJ\s*/gi, ' ');
text = text.replace(/ET\s*/gi, '\n');
text = text.replace(/Tm\s*/gi, '');
text = text.replace(/Tc\s*/gi, '');
text = text.replace(/Tw\s*/gi, '');
text = text.replace(/Tz\s*/gi, '');
text = text.replace(/TL\s*/gi, '');

// 移除数字和坐标
text = text.replace(/\b\d+(\.\d+)?\b\s*/g, ' ');

// 移除特殊字符
text = text.replace(/[<>\/\[\]]/g, '');

// 清理多余的空格和换行
text = text.replace(/\s+/g, ' ').trim();

// 保存提取的文本
fs.writeFileSync(outputPath, text, 'utf-8');

console.log('\n文本已提取并保存到:', outputPath);
console.log('提取的文本长度:', text.length, '字符');
console.log('\n--- 提取的文本内容 (前2000字符) ---\n');
console.log(text.substring(0, 2000));
