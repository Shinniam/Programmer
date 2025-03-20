async function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    if (!message) return;

    // ユーザーのメッセージを表示
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p><strong>あなた:</strong> ${message}</p>`;
    input.value = '';

    // AIに送信して応答を取得
    const response = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    });
    const data = await response.json();

    // AIの応答を表示
    chatBox.innerHTML += `<p><strong>AI:</strong> ${data.reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}
