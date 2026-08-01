// 챕터 목록 — 새 편 추가 시 여기에 항목을 추가하고 quizdata-<id>.js 를 만들면 된다.
// count 는 홈 화면 진행률 표시에 쓰이므로 실제 문항 수와 일치시켜야 한다.
//
// 헌법 편 id 규칙: hb01 ~ hbNN (localStorage 키 충돌 방지 위해 한 번 정하면 변경 금지).
// 총론 → 기본권 → 통치구조 순서로 편을 배열한다.
window.CHAPTER_LIST = [
  { id: "hb01", num: 1, title: "헌법 제1편 (헌법총론)",   file: "quizdata-hb01.js", count: 88 },
  { id: "hb02", num: 2, title: "헌법 제2편 (기본권론)",   file: "quizdata-hb02.js", count: 166 },
  { id: "hb03", num: 3, title: "헌법 제3편 (통치구조론)", file: "quizdata-hb03.js", count: 241 }
];
