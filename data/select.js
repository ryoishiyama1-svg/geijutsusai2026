// =====================================================
// 表示する年を決める（?year=2026 のように指定。なければいちばん新しい年）
// ここはふだん触らなくてよい
// =====================================================
EDITIONS.sort((a, b) => b.year - a.year);
const YEAR_PARAM = new URLSearchParams(location.search).get("year");
const EDITION = EDITIONS.find((e) => String(e.year) === YEAR_PARAM) || EDITIONS[0];
const IS_LATEST = EDITION === EDITIONS[0];
// これまでのページの書き方をそのまま使えるように、1つにまとめる
const EVENT = { ...SITE, ...EDITION, title: SITE.title };
const PROGRAM = EDITION.program;
const DONE = EDITION.status === "done";
const PUBLIC_PROGRAM = PROGRAM.filter((p) => !p.staff);
const PERFORMANCES = PUBLIC_PROGRAM.filter((p) => p.end);
