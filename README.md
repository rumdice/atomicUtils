# AtomicUtils

개발자와 실무자가 자주 쓰는 웹 유틸리티 도구를 브라우저에서 바로 무료로 사용할 수 있는 정적 사이트입니다. 회원가입, 설치, 서버 없이 대부분의 기능이 브라우저 내부에서 동작합니다.

🔗 **Live:** https://tools.rumdice.com/

## 제공하는 도구

| 도구 | 설명 |
|---|---|
| [JSON 포맷터 & 검증기](json.html) | JSON 정렬(Beautify) / 압축(Minify) / 문법 검증 |
| [UUID 생성기](uuid.html) | 랜덤 UUID(v4) 생성 |
| [Base64 인/디코더](base64.html) | 텍스트 ↔ Base64 변환 (UTF-8/한글 지원) |
| [Unix 타임스탬프 변환기](timestamp.html) | 타임스탬프 ↔ 날짜 상호 변환 |
| [유튜브 썸네일 추출기](youtube.html) | 영상 링크로 고화질 썸네일 추출 |
| [비밀번호 생성기](password.html) | Crypto API 기반 안전한 랜덤 비밀번호 생성 |
| [URL 단축기](shorturl.html) | 긴 URL 단축 + QR코드 생성 |
| [내 IP & 위치 확인](myip.html) | 공인 IP, 위치, 통신사 정보 확인 |
| [색상 코드 변환기](color.html) | HEX / RGB / HSL 상호 변환 |

## 기술 스택

빌드 도구나 프레임워크 없이 순수 HTML/CSS/JavaScript로 작성되었습니다.

- 각 도구는 독립된 `.html` 페이지 (검색 유입을 위해 도구별로 URL 분리)
- `js/common.js` — 모든 페이지에 공통 네비게이션/푸터를 주입
- `css/style.css` — 공통 스타일
- 대부분의 도구는 서버로 데이터를 전송하지 않고 브라우저 내부에서만 처리됩니다. 일부 도구(내 IP, URL 단축, 유튜브 썸네일)는 기능 특성상 외부 공개 API를 사용하며, 자세한 내용은 [개인정보처리방침](privacy.html)에서 확인할 수 있습니다.

## 로컬에서 실행하기

빌드 과정이 없으므로 정적 파일 서버로 열기만 하면 됩니다.

```bash
python -m http.server 8000
# 이후 브라우저에서 http://localhost:8000 접속
```

또는 `index.html`을 브라우저로 직접 열어도 대부분의 기능은 동작합니다.

## 프로젝트 구조

```
atomicUtils/
├── index.html          # 도구 모음 홈
├── {tool}.html          # 도구별 개별 페이지
├── about.html, privacy.html, terms.html, contact.html
├── css/style.css
├── js/common.js         # 공통 네비게이션 / 푸터
├── robots.txt
└── sitemap.xml
```

## License

[MIT](LICENSE)
