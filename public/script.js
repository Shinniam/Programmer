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
        const data = await response.json();
        if (data.error) {
            chatBox.innerHTML += `<p><strong>エラー:</strong> ${data.error}</p>`;
        } else {
            chatBox.innerHTML += `<p><strong>AI:</strong> ${data.reply}</p>`;
        }
    } catch (error) {
        chatBox.innerHTML += `<p><strong>エラー:</strong> サーバーに接続できませんでした</p>`;
    }
    chatBox.scrollTop = chatBox.scrollHeight;
}
