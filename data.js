// =====================================================
// イベント情報（ホームページとパンフレットの共通データ）
// ここを書き換えると両方に反映されます。
// 「【要入力】」はまだ決まっていない項目です。
// =====================================================

const EVENT = {
  title: "芸術祭",
  // \n で改行（縦書きでは列が変わる）
  catchcopy: "5つのステージを、\n一日で。",
  catchcopySub: "麻布から、地域とつながる一日を。",
  heroImage: "images/keyvisual.jpg",
  date: "2026-11-07",
  dateLabel: "2026年11月7日（土）",
  openTime: "12:40",
  startTime: "12:55",
  endTime: "17:00",
  venue: "麻布学園 講堂",
  address: "東京都港区元麻布2-3-29",
  access: [
    "東京メトロ日比谷線「広尾」駅 徒歩約10分",
    "都営大江戸線・東京メトロ南北線「麻布十番」駅 徒歩約15分",
  ],
  fee: "入場無料・予約不要",
  hashtags: ["#麻布芸術祭2026", "#芸術祭×地域"],
  highlights: [
    ["5 GENRES", "5ジャンルを一気に", "軽音・DJ・アザライブ・ダンス・演劇。ジャンルをまたいだステージが、ひとつの講堂で続きます。"],
    ["FREE", "ふらっと立ち寄れる", "入場無料・予約不要・出入り自由。気になる演目だけ観に来るのも大歓迎です。"],
    ["OPEN", "地域にひらく", "学外の方、地域の方、どなたでも。麻布の地域交流の中心となるコミュニティへの第一歩です。"],
  ],
  organizer: "芸術祭スタッフ一同",
  contact: "geijutusai@gmail.com",
  notices: [
    "学外の方も大歓迎です。どなたでもお気軽にお越しください。",
    "撮影・録音は可能です。ただし、出演者の許可なくSNS等へ投稿することはお控えください。",
    "途中の入退場は自由です。",
    "上履きは不要です。",
    "講堂内での飲食は、お飲み物のみ可能です。",
    "会場の麻布生のノリが異常な盛り上がりを見せる場合があります。どうかお気になさらず。",
    "名札を付けている芸術祭スタッフの指示はよく聞いてください。",
  ],
  faq: [
    ["チケットや予約は必要ですか？", "必要ありません。入場無料・予約不要で、当日そのままお越しいただけます。"],
    ["途中から入ったり、途中で帰ったりしてもいいですか？", "はい、入退場は自由です。お好きな演目だけでもぜひ。"],
    ["麻布の生徒・関係者じゃなくても行けますか？", "もちろんです。地域の方、他校の方、どなたでも大歓迎です。"],
    ["写真や動画を撮ってもいいですか？", "撮影・録音はOKです。ただし出演者の許可なくSNS等へ投稿するのはご遠慮ください。"],
    ["飲食はできますか？", "講堂内はお飲み物のみOKです。"],
    ["上履きは必要ですか？", "不要です。そのままお入りください。"],
  ],
  greeting: [
    "こんにちは。芸術祭 共同代表の石山と大林です。",
    "今年の芸術祭は、麻布の地域交流の中心となるコミュニティとしての第一歩と考えています。",
    "学外の皆さまも、どうぞ遠慮なくお立ち寄りください。",
  ],
  greetingSign: "芸術祭 共同代表　石山遼真・大林祐駈",
  // お知らせ（新しい順。[日付, 本文]）
  news: [
    ["2026.10.27", "公式サイトを公開しました。"],
  ],
  // 楽しみ方（見出し, 本文）
  howto: [
    ["ふらっと来る", "予約もチケットもいりません。思い立ったらそのまま講堂へ。"],
    ["好きな演目を選ぶ", "出入り自由。タイムテーブルを見て、気になるステージだけでもOK。"],
    ["撮って残す", "撮影・録音はOK。SNSに載せるときは出演者の許可をとってから。"],
    ["一緒に盛り上がる", "麻布生のノリに巻き込まれるのも、この日の楽しみ方のひとつです。"],
  ],
  // 公式サイトのURL（QRコード・シェア用）
  siteUrl: "https://ryoishiyama1-svg.github.io/geijutsusai2026/",
  // パンフレット（PDFなど）を公開するならそのURL。空のあいだ、ホームページにパンフレットへのリンクは出さない
  pamphletUrl: "",
  // 下書きモード。true のあいだ「【要入力】」を黄色で目立たせる。
  // 公開するときは false に → 未定の項目は「近日公開」になり、未定の一言・クレジット行は出さない
  draft: false,
  // 協賛・協力（以前の pamphlet.html 用。ホームページには出さない）
  sponsors: [],
  // クレジット（役割, 名前）
  credits: [
    ["共同代表", "石山遼真・大林祐駈"],
    ["運営", "芸術祭スタッフ一同"],
    ["メインビジュアル", "神田祐太郎"],
    ["顧問", "諸橋先生・村本先生"],
  ],
};

// staff: true の行は一般向けには表示しません
const PROGRAM = [
  { start: "12:30", end: "",      title: "各スタッフ準備開始", kind: "staff", staff: true },
  { start: "12:40", end: "",      title: "開場",       kind: "ceremony" },
  { start: "12:50", end: "",      title: "開会",       kind: "ceremony" },
  // 一言（comment）はパンフレットと同じ。紹介文（desc）は空なら出さない
  { start: "12:55", end: "14:05", title: "軽音",       kind: "band",   performer: "軽音楽部", desc: "入部希望者募集！！", photo: "images/band.jpg", comment: "響く轟音とライブパフォーマンスをお楽しみください！" },
  { start: "14:07", end: "14:47", title: "DJ",         kind: "dj",     performer: "", desc: "", photo: "images/dj.jpg", comment: "Make some noise!" },
  { start: "14:48", end: "15:48", title: "アザライブ", kind: "live",   performer: "", desc: "", photo: "images/live.jpg", comment: "麻布学園のスクールアイドル、アザライブ！です！" },
  { start: "15:50", end: "16:19", title: "ダンス",     kind: "dance",  performer: "ダンス部",
    desc: "", photo: "images/dance.jpg",
    comment: "精一杯踊ります！みんな見に来てね！",
    memberCount: 18 },
  { start: "16:20", end: "16:58", title: "演劇",       kind: "drama",  performer: "演劇部", desc: "", comment: "",
    memberCount: 10 },
  { start: "17:00", end: "",      title: "閉会のあいさつ", kind: "ceremony" },
];

const KIND_LABEL = {
  ceremony: "式典", band: "BAND", dj: "DJ", live: "LIVE", dance: "DANCE", drama: "DRAMA", staff: "STAFF",
};

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
  const genres = PERFORMANCES.map((p) => KIND_LABEL[p.kind]).join(" / ");
  if (!m) return `<span class="c-txt">${br(EVENT.catchcopy)}</span>`;
  return `<span class="c-row"><span class="c-num">${m[1]}</span><span class="c-txt">${br(m[2])}</span></span><span class="c-genres">${genres}</span>`;
}

// 開場〜終演の時間軸バー（HTML）。now を渡すと現在位置の線を描く
function timelineBar(nowMin) {
  const from = minutes(EVENT.openTime), to = minutes(EVENT.endTime), span = to - from;
  const pct = (m) => ((m - from) / span) * 100;
  const segs = PERFORMANCES.map((p) =>
    `<div class="tl-seg k-${p.kind}" style="left:${pct(minutes(p.start))}%;width:${pct(minutes(p.end)) - pct(minutes(p.start))}%"><span>${KIND_LABEL[p.kind]}</span></div>`).join("");
  const ticks = [];
  for (let h = Math.ceil(from / 60); h * 60 <= to; h++) ticks.push(`<div class="tl-tick" style="left:${pct(h * 60)}%">${h}:00</div>`);
  const now = nowMin != null && nowMin >= from && nowMin <= to ? `<div class="tl-now" style="left:${pct(nowMin)}%"></div>` : "";
  return `<div class="tl"><div class="tl-track">${segs}${now}</div><div class="tl-ticks">${ticks.join("")}</div></div>`;
}

function minutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

const PUBLIC_PROGRAM = PROGRAM.filter((p) => !p.staff);
const PERFORMANCES = PUBLIC_PROGRAM.filter((p) => p.end);
