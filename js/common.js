document.addEventListener("DOMContentLoaded", function() {
    // 1. 네비게이션 바 HTML (여기에 메뉴를 추가하면 모든 페이지에 반영됨)
    const navHtml = `
        <nav>
            <a href="index.html">🏠 홈</a>
            <a href="uuid.html">🔑 UUID 생성기</a>
            <a href="json.html">📋 JSON 포맷터</a>
            <a href="base64.html">🔄 Base64 인/디코더</a>
            <a href="timestamp.html">⏱️ 타임스탬프</a>
        </nav>
    `;

    // 2. 푸터 HTML
    const footerHtml = `
        <footer>
            &copy; 2024 My Super Tools. All rights reserved.
        </footer>
    `;

    // 3. HTML body의 맨 앞과 맨 뒤에 삽입
    document.body.insertAdjacentHTML("afterbegin", navHtml);
    document.body.insertAdjacentHTML("beforeend", footerHtml);
});