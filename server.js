const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// チャット応答のエンドポイント
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    if (!userMessage) {
        return res.status(400).json({ error: 'Message is required' });
    }
    const aiResponse = `あなたが言ったこと: "${userMessage}"。どう思う？`;
    res.json({ reply: aiResponse });
});

// ルートで動作確認
app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
