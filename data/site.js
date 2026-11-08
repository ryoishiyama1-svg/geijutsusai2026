// =====================================================
// 芸術祭 公式サイト：毎年ほぼ変わらない情報と、表示のための道具
//   年ごとの中身は data/2026.js のように「年.js」に1ファイルずつ書く
//   新しい年を足すときは、YEARS にその年を足して、data/template.js をコピーする
//   （くわしくは README.md「毎年の更新のしかた」）
// =====================================================

const SITE = {
  title: "芸術祭",
  en: "AZABU ART FESTIVAL",
  // 「芸術祭とは」（トップに毎年残す説明）
  about: [
    "芸術祭は、麻布学園の生徒が企画・運営する、音楽・ダンス・演劇などのステージイベントです。",
    "ジャンルの垣根をこえたステージを、ひとつの講堂で。学外の方や地域の方にもひらかれた、麻布の地域交流の中心となるコミュニティを目指しています。",
    "入場無料・予約不要。出演する団体やプログラムは、毎年新しくしてお届けします。",
  ],
  organizer: "芸術祭スタッフ一同",
  contact: "geijutusai@gmail.com",
  // 公式サイトのURL（QRコード・シェア用）
  siteUrl: "https://ryoishiyama1-svg.github.io/geijutsusai2026/",
  // 下書きモード。true のあいだ「【要入力】」を黄色で目立たせる
  draft: false,
};


// サイトに載せる年（新しい年を左に足す）。data/<年>.js を読み込む
const YEARS = [2026];

// 各年のファイルが addEdition({...}) でここに入る
const EDITIONS = [];
function addEdition(e) { EDITIONS.push(e); }

// 団体ごとの色（新しいジャンルは program 側に color を書けば上書きできる）
function kc(p) { return p && p.color ? ` style="--c:${p.color}"` : ""; }

const KIND_LABEL = {
  ceremony: "式典", band: "BAND", dj: "DJ", live: "LIVE", dance: "DANCE", drama: "DRAMA", staff: "STAFF",
};
// ジャンルの短い表示名（一覧にない新しいジャンルは label か英字のkindをそのまま使う）
function kindLabel(p) { return KIND_LABEL[p.kind] || p.label || String(p.kind).toUpperCase(); }

// 「【要入力】」を目立つ表示に変換するヘルパー
function fill(text) {
  const s = String(text ?? "");
  if (!EVENT.draft) return s.replace(/【要入力】([^、。]*)/g, '<span class="tbd">近日公開</span>');
  return s.replace(/【要入力】([^、。]*)/g, '<mark class="todo">要入力：$1</mark>');
}

// まだ決まっていない項目か
function isTodo(text) {
  return /【要入力】/.test(String(text ?? ""));
}
// 公開モードで出さない項目（未定の一言など）
function hideTodo(text) {
  return !text || (!EVENT.draft && isTodo(text));
}

// \n を改行に
function br(text) {
  return fill(text).replace(/\n/g, "<br>");
}

// アクセスの文（例：東京メトロ日比谷線「広尾」駅 徒歩約10分）を「駅 → 徒歩 → 会場」の図に
function routeHtml() {
  const rows = EVENT.access.map((a) => {
    const m = a.match(/^(.*?)「(.+?)」駅\s*徒歩約?(\d+)分/);
    if (!m) return `<div class="rt-row"><span class="rt-plain">${a}</span></div>`;
    const line = m[1].replace(/東京メトロ/g, "メトロ").replace(/都営/g, "都営 ");
    return `<div class="rt-row"><span class="rt-st"><b>${m[2]}</b><small>${line}</small></span><span class="rt-walk"><i></i>徒歩 約${m[3]}分<i></i></span><span class="rt-dest">${EVENT.venue}</span></div>`;
  }).join("");
  return `<div class="route">${rows}</div>`;
}
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("麻布中学校・麻布高等学校");

// 出演メンバーを「役職つき → 学年ごと」のHTMLに
function membersHtml(p, namesHidden) {
  const count = (p.members && p.members.length) || p.memberCount;
  if (!count) return "";
  if (namesHidden || !p.members) return `<div class="members"><div class="m-title">出演メンバー（${count}名）</div><div class="m-row">メンバーの名前はパンフレットに掲載しています。</div></div>`;
  const lead = p.members.filter((m) => m.role);
  const rest = p.members.filter((m) => !m.role);
  const grades = [...new Set(rest.map((m) => m.grade))];
  const leadHtml = lead.map((m) => `<div class="m-lead"><span class="m-role">${m.role}</span>${m.name}<span class="m-g">（${m.grade}）</span></div>`).join("");
  const rows = grades.map((g) => `<div class="m-row"><span class="m-g">${g}</span>${rest.filter((m) => m.grade === g).map((m) => m.name).join("・")}</div>`).join("");
  return `<div class="members"><div class="m-title">出演メンバー（${p.members.length}名）</div>${leadHtml}${rows}</div>`;
}

// キャッチコピーのロゴ組（先頭の数字を大きく、残りを2行で、下にジャンル）
function catchLockup() {
  const m = EVENT.catchcopy.match(/^(\d+)([\s\S]*)$/);
  const genres = PERFORMANCES.map((p) => kindLabel(p)).join(" / ");
  if (!m) return `<span class="c-txt">${br(EVENT.catchcopy)}</span>`;
  return `<span class="c-row"><span class="c-num">${m[1]}</span><span class="c-txt">${br(m[2])}</span></span><span class="c-genres">${genres}</span>`;
}

// 開場〜終演の時間軸バー（HTML）。now を渡すと現在位置の線を描く
function timelineBar(nowMin) {
  const from = minutes(EVENT.openTime), to = minutes(EVENT.endTime), span = to - from;
  const pct = (m) => ((m - from) / span) * 100;
  const segs = PERFORMANCES.map((p) =>
    `<div class="tl-seg k-${p.kind}" style="left:${pct(minutes(p.start))}%;width:${pct(minutes(p.end)) - pct(minutes(p.start))}%${p.color ? `;--c:${p.color}` : ""}"><span>${kindLabel(p)}</span></div>`).join("");
  const ticks = [];
  for (let h = Math.ceil(from / 60); h * 60 <= to; h++) ticks.push(`<div class="tl-tick" style="left:${pct(h * 60)}%">${h}:00</div>`);
  const now = nowMin != null && nowMin >= from && nowMin <= to ? `<div class="tl-now" style="left:${pct(nowMin)}%"></div>` : "";
  return `<div class="tl"><div class="tl-track">${segs}${now}</div><div class="tl-ticks">${ticks.join("")}</div></div>`;
}

function minutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}
