async function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    if (!message) return;

    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p><strong>あなた:</strong> ${message}</p>`;
    input.value = '';

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data.error) {
            chatBox.innerHTML += `<p><strong>エラー:</strong> ${data.error}</p>`;
        } else {
            const formattedReply = data.reply.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
            chatBox.innerHTML += `<p><strong>AI:</strong> ${formattedReply}</p>`;
        }
    } catch (error) {
        chatBox.innerHTML += `<p><strong>エラー:</strong> サーバーに接続できませんでした: ${error.message}</p>`;
    }
    chatBox.scrollTop = chatBox.scrollHeight;
}
