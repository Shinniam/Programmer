module.exports = (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const userMessage = req.body.message?.toLowerCase();
    if (!userMessage) {
        return res.status(400).json({ error: 'メッセージを入力してください' });
    }

    let aiResponse = '';

    if (userMessage.includes('python') && userMessage.includes('フィボナッチ')) {
        aiResponse = `
Pythonでフィボナッチ数列を計算するコード:

\`\`\`python
def fibonacci(n, memo={}):
    if n <= 1: return n
    if n not in memo:
        memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    return memo[n]

print(fibonacci(50))
\`\`\`
`;
    } else if (userMessage.includes('javascript') && userMessage.includes('配列')) {
        aiResponse = `
JavaScriptで配列を操作する例:

\`\`\`javascript
const array = [1, 2, 3, 4, 5];
const doubled = array.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
\`\`\`
`;
    } else {
        aiResponse = `「${userMessage}」に対応するプログラムを思いつかなかったよ。もっと具体的に教えてくれると助かる！例: "Pythonでフィボナッチ数列を作って"`;
    }

    res.status(200).json({ reply: aiResponse });
};
