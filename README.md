# 나는 어떤 여행자인가?

북토크 참가자용 여행 스타일 테스트. 모바일 전용 정적 웹페이지입니다.

- 접속: https://bomangoo.github.io/likebook-event/
- 화면: 메인 → 테스트(6문항) → 결과
- 결과 유형: 풍경 수집가형 / 돌발 모험가형 / 도시 탐험가형 / 감정 동반자형
- 결과는 항상 하나의 유형으로 정해집니다. 가장 많이 고른 유형이 동점이면, 동점 유형 중 가장 마지막 질문에서 고른 유형이 결과가 됩니다.

## 구조

```
index.html        화면 마크업 (메인 / 테스트 / 결과)
assets/data.js    질문·결과 문구
assets/app.js     화면 전환과 결과 계산
assets/style.css  스타일
```

빌드 과정이 없습니다. 로컬에서는 `python3 -m http.server` 후 http://localhost:8000 으로 확인합니다.

## 배포

`main` 브랜치에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 `gh-pages` 브랜치로 배포합니다.
