const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Word 文件路径
const wordPath = path.join(__dirname, '..', '美观整齐简历模板 (1).docx');
const tempDir = path.join(__dirname, 'temp_word');
const outputPath = path.join(__dirname, '..', 'resume_text.txt');

console.log('正在读取 Word 文件:', wordPath);

if (!fs.existsSync(wordPath)) {
    console.error('Word 文件不存在:', wordPath);
    process.exit(1);
}

// 创建临时目录
if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true });
}
fs.mkdirSync(tempDir);

// .docx 文件本质上是 ZIP 压缩包
// 我们需要解压并读取 document.xml 文件
try {
    // 复制文件到临时目录并重命名为 .zip
    const zipPath = path.join(tempDir, 'resume.zip');
    fs.copyFileSync(wordPath, zipPath);
    
    console.log('正在解压 Word 文件...');
    
    // 使用 PowerShell 解压
    const extractCmd = `powershell -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${tempDir}' -Force"`;
    execSync(extractCmd, { encoding: 'utf-8' });
    
    // 读取 document.xml
    const documentXmlPath = path.join(tempDir, 'word', 'document.xml');
    if (!fs.existsSync(documentXmlPath)) {
        console.error('找不到 document.xml 文件');
        process.exit(1);
    }
    
    const xmlContent = fs.readFileSync(documentXmlPath, 'utf-8');
    
    // 从 XML 中提取文本
    // Word XML 中文本在 <w:t> 标签中
    const textRegex = /<w:t[^>]*>(.*?)<\/w:t>/g;
    let match;
    let text = '';
    let paragraphs = [];
    let currentParagraph = '';
    
    // 按段落分割
    const xmlLines = xmlContent.split('\n');
    for (const line of xmlLines) {
        const matches = line.matchAll(textRegex);
        for (const m of matches) {
            currentParagraph += m[1];
        }
        
        // 检查是否有段落结束标记
        if (line.includes('</w:p>')) {
            if (currentParagraph.trim()) {
                paragraphs.push(currentParagraph.trim());
            }
            currentParagraph = '';
        }
    }
    
    text = paragraphs.join('\n');
    
    // 保存提取的文本
    fs.writeFileSync(outputPath, text, 'utf-8');
    
    console.log('\n✅ 文本提取成功！');
    console.log('保存路径:', outputPath);
    console.log('文本长度:', text.length, '字符');
    console.log('\n--- 提取的文本内容 ---\n');
    console.log(text);
    
    // 清理临时文件
    fs.rmSync(tempDir, { recursive: true });
    
} catch (error) {
    console.error('提取失败:', error.message);
    // 清理临时文件
    if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true });
    }
    process.exit(1);
}
