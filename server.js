const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// チャット応答のエンドポイント
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    // ここでAIロジックを追加（仮に簡単な応答）
    const aiResponse = `あなたが言ったこと: "${userMessage}"。どう思う？`;
    res.json({ reply: aiResponse });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
