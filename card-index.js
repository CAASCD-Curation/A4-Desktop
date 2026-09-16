// Rolodex card index — center-aligned cards with protruding index bumps.
// Cards hold the "形式灵感" entries that are real physical desk forms
// (abstract systems and pure digital interfaces are excluded), grouped with
// black trapezoid tabs: 中 / 东 / 西 (traditional), 家 (modern furniture),
// 纳 (storage systems), 台 (counters), 档 (archive furniture), 图 (information boards).
// Data format: { id, title, full, year, details, img }
//   title   — short name shown on the index bump
//   full    — full name shown in the lifted card body (falls back to title)
//   details — note text from the archive sheet
//   img     — reference image shown in the card body
const FOLDERS = [
 { id: '001', title: '明式画案', full: '明式画案／书案', year: '16–17世纪', details: '简洁大平面适合发展为“阅读／书写／陈列共用”的展台。', img: './assets/card-index/c01.jpg' },
 { id: '002', title: '八仙桌', year: '明清至今', details: '四边同等的结构适合讨论平等对话与共享桌面。', img: './assets/card-index/c02.jpg' },
 { id: '003', title: '条案', year: '明清至今', details: '可用作网站横向时间轴或展厅周边陈列结构。', img: './assets/card-index/c03.jpg' },
 { id: '004', title: '折叠炕桌', year: '中国传统', details: '提供“坐地使用”的身体尺度与临时性。', img: './assets/card-index/c04.jpg' },
 { id: '005', title: '韩国小饭桌', full: '韩国小饭桌 Soban', year: '朝鲜王朝至今', details: '一人一桌的结构可发展为私密档案单元。', img: './assets/card-index/c05.jpg' },
 { id: '006', title: '日本经几', full: '日本经几／文机', year: '日本传统', details: '适合连接阅读、手写和案头工具的布局。', img: './assets/card-index/c06.jpg' },
 { id: '007', title: '日本重箱', full: '日本重箱（Jūbako）', year: '江户时期至今', details: '可作为“逐层展开”信息架构的原型。', img: './assets/card-index/c07.jpg' },
 { id: '008', title: '曲物便当盒', full: '日本曲物便当盒', year: '江户时期至今', details: '用柔和边界替代硬性网格，适合移动式展陈。', img: './assets/card-index/c08.jpg' },
 { id: '009', title: 'Shaker 折叠桌', year: '19世纪', details: '将“闲置状态”也纳入桌面的设计。', img: './assets/card-index/c09.jpg' },
 { id: '010', title: '英式折叶桌', full: '英式 Gateleg 折叶桌', year: '17世纪起', details: '桌面面积可随人数和活动变化。', img: './assets/card-index/c10.jpg' },
 { id: '011', title: '锯马桌', full: '工业锯马桌（Trestle Table）', year: '传统类型', details: '最直接地展示桌面由“台面＋支撑”构成。', img: './assets/card-index/c11.jpg' },
 { id: '012', title: '法国工作台', full: '法国工作台 Établi', year: '19世纪起', details: '适合强调桌面不是成品展示台，而是生产现场。', img: './assets/card-index/c12.jpg' },
 { id: '013', title: '学校课桌椅', year: '19世纪末起', details: '桌面与身体被标准化，可讨论知识生产的秩序。', img: './assets/card-index/c13.jpg' },
 { id: '014', title: '绘图桌', full: '绘图桌／制图台', year: '20世纪初起', details: '倾斜台面可让“浏览”成为更主动的身体姿势。', img: './assets/card-index/c14.jpg' },
 { id: '015', title: 'Thonet B9', full: 'Thonet B9 嵌套桌', year: '1925–1927', details: '同一桌面以不同尺度互相收纳、随时拆分。', img: './assets/card-index/c15.jpg' },
 { id: '016', title: 'Table 60', full: '阿尔瓦·阿尔托 Table 60', year: '1933', details: '可拼合成更大平面，适合建立灵活的群组关系。', img: './assets/card-index/c16.jpg' },
 { id: '017', title: 'Platform Bench', full: '乔治·纳尔逊 Platform Bench', year: '1946', details: '桌面可被理解为有节奏的“透气平面”。', img: './assets/card-index/c17.jpg' },
 { id: '018', title: '伊姆斯 LTR', full: '伊姆斯 LTR 小桌', year: '1950', details: '适合做低密度、可随手移动的展签平台。', img: './assets/card-index/c18.jpg' },
 { id: '019', title: '野口勇咖啡桌', year: '1947', details: '让桌下结构、人的腿部与地面都进入观看范围。', img: './assets/card-index/c19.jpg' },
 { id: '020', title: 'Tulip Table', full: '埃罗·沙里宁 Tulip Table', year: '1957', details: '消除桌腿对座位的限制，形成自由环绕的交流面。', img: './assets/card-index/c20.jpg' },
 { id: '021', title: 'Compas Table', full: 'Jean Prouvé Compas Table', year: '1953', details: '将支撑逻辑外显，适合发展成视觉骨架。', img: './assets/card-index/c21.jpg' },
 { id: '022', title: 'USM Haller', full: 'USM Haller 模块家具系统', year: '1965', details: '其节点语言可直接用于数据库关系图和展架。', img: './assets/card-index/c22.jpg' },
 { id: '023', title: 'String 搁架', full: 'String Shelf 搁架系统', year: '1949', details: '将桌面物件延展至墙面，形成纵向信息场。', img: './assets/card-index/c23.jpg' },
 { id: '024', title: 'Vitsœ 606', full: 'Vitsœ 606 通用搁架系统', year: '1960', details: '适合建立可不断添加与替换内容的展陈机制。', img: './assets/card-index/c24.jpg' },
 { id: '025', title: 'Componibili', full: 'Kartell Componibili 圆筒柜', year: '1969', details: '可把资料按“抽取—放回”的循环方式组织。', img: './assets/card-index/c25.jpg' },
 { id: '026', title: 'Uten.Silo', full: 'Uten.Silo 壁面收纳板', year: '1969', details: '将原本杂乱的桌面物件变成一眼可读的界面。', img: './assets/card-index/c26.jpg' },
 { id: '027', title: 'Boby 推车', full: 'Boby 收纳推车', year: '1970', details: '桌面外围可成为可移动的“功能卫星”。', img: './assets/card-index/c27.jpg' },
 { id: '028', title: 'IKEA IVAR', full: 'IKEA IVAR 模块储物系统', year: '1968起', details: '强调低门槛、持续生长的空间结构。', img: './assets/card-index/c28.jpg' },
 { id: '029', title: 'IKEA LACK', full: 'IKEA LACK 边桌', year: '1979起', details: '可作为“人人拥有的桌面”的大众消费样本。', img: './assets/card-index/c29.jpg' },
 { id: '030', title: 'MUJI 抽屉', full: '无印良品聚丙烯抽屉收纳系列', year: '1980年代起', details: '适合发展“可见但不完全暴露”的档案系统。', img: './assets/card-index/c30.jpg' },
 { id: '031', title: '洞洞板', full: 'Pegboard 洞洞板', year: '20世纪中期起', details: '可让图像、标签、物件被观众自行重新排列。', img: './assets/card-index/c31.jpg' },
 { id: '032', title: 'Kantan 纸板', full: 'Kantan 纸板家具系统', year: '1970年代起', details: '适合快闪展、工作坊及可回收的桌面模块。', img: './assets/card-index/c32.jpg' },
 { id: '033', title: '乐高底板', full: '乐高基础底板', year: '1950年代起', details: '可将每条词条设计为可被拼接、挪动的模块。', img: './assets/card-index/c33.jpg' },
 { id: '034', title: '烘焙操作台', full: '烘焙用不锈钢操作台', year: '20世纪起', details: '以“准备”而非“展示”为桌面的核心功能。', img: './assets/card-index/c34.jpg' },
 { id: '035', title: '寿司吧台', full: '寿司吧台／板前', year: '20世纪起', details: '制作者与观看者隔着同一张桌面进行交流。', img: './assets/card-index/c35.jpg' },
 { id: '036', title: '自助餐台', full: '自助餐保温台', year: '20世纪起', details: '适合转化成“自助浏览”的档案陈列逻辑。', img: './assets/card-index/c36.jpg' },
 { id: '037', title: '药房抽屉柜', year: '19–20世纪', details: '体现将大量微小信息精确定位的桌面管理方式。', img: './assets/card-index/c37.jpg' },
 { id: '038', title: '活字铅字盘', full: '活字排版铅字盘', year: '15世纪后', details: '字词被物化为可抓取、排列与重组的桌面单位。', img: './assets/card-index/c38.jpg' },
 { id: '039', title: '标本抽屉', full: '标本抽屉与昆虫展示盒', year: '19世纪起', details: '适合发展为“平置、编号、逐格阅读”的展示方式。', img: './assets/card-index/c39.jpg' },
 { id: '040', title: '潘通色卡', full: '纺织品色卡／潘通色卡', year: '20世纪起', details: '可将桌面上不同材料、情绪或议题转换为颜色编码。', img: './assets/card-index/c40.jpg' },
 { id: '041', title: '工程蓝图', full: '工程蓝图与蓝晒图', year: '19世纪中后期起', details: '适合为网站与展签建立“施工图式”的视觉语言。', img: './assets/card-index/c41.jpg' },
 { id: '042', title: '方格纸', full: '方格纸与工程记录本', year: '19世纪起', details: '为未完成的思考、标记和试算保留空间。', img: './assets/card-index/c42.jpg' },
 { id: '043', title: '看板', full: '看板（Kanban Board）', year: '20世纪中期起', details: '将资料库从静态存放转为可见的工作进度。', img: './assets/card-index/c43.jpg' },
 { id: '044', title: '翻页显示牌', full: '机场翻页显示牌 Solari Board', year: '1950年代起', details: '可将词条更新设计成有节奏的翻页或切换。', img: './assets/card-index/c44.jpg' }
];
// A black tab is inserted right after the card number given in `after`.
const TABS = [
 { after: 4, ltr: '中', cnt: '004' },
 { after: 8, ltr: '东', cnt: '004' },
 { after: 11, ltr: '西', cnt: '003' },
 { after: 21, ltr: '家', cnt: '010' },
 { after: 33, ltr: '纳', cnt: '012' },
 { after: 36, ltr: '台', cnt: '003' },
 { after: 40, ltr: '档', cnt: '004' },
 { after: 44, ltr: '图', cnt: '004' }
];

// build deck: cards in order, black tab at the end of each group
const ITEMS = [];
FOLDERS.forEach((w, i) => {
 ITEMS.push(w);
 const tab = TABS.find(t => t.after === i + 1);
 if (tab) ITEMS.push(tab);
});

const deck = document.getElementById('deck');
const nodes = ITEMS.map((it, i) => {
 const el = document.createElement('div');
 const side = i % 2 === 0 ? 'l' : 'r'; // bumps alternate left / right
 if (it.ltr) {
  el.className = 'card tab';
  el.innerHTML = '<div class="pop"><span class="bump black ' + side + '"><span class="no">' + it.ltr +
   '</span><span class="nm">' + it.cnt + '</span></span></div>';
 } else {
  el.className = 'card';
  el.innerHTML = '<div class="pop"><span class="bump ' + side + '"><span class="no">' + it.id +
   '</span><span class="nm">/ ' + it.title + '</span></span>' +
   '<div class="body"><div class="b-title">' + (it.full || it.title) + (it.year ? ' · ' + it.year : '') +
   '</div><div class="b-sub">' + (it.details || 'details') + '</div>' +
   (it.img ? '<img class="b-img" src="' + it.img + '" alt="">' : '') + '</div></div>';
 }
 deck.appendChild(el);
 return el;
});

// ---- spring scroll ----
let pos = 8, target = 8, vel = 0, snapIdle = 0;
const SPACING = 34; // card strip height 34 -> cards stack flush, next bump covers previous edge

function layout() {
 const midY = innerHeight * .40, drawerTop = innerHeight - 284; // rim top approx
 for (let i = 0; i < ITEMS.length; i++) {
  const el = nodes[i], d = i - pos;
  const y = d * SPACING, screenY = midY + y;
  if (screenY < -80 || screenY > drawerTop) { el.style.display = 'none'; continue; }
  el.style.display = 'block';
  el.style.transform = 'translateX(-50%) translate3d(0,' + y.toFixed(1) + 'px,0)';
  el.style.zIndex = String(10 + i);
 }
}
function step() {
 vel += (target - pos) * .14; vel *= .80; pos += vel;
 if (++snapIdle > 30 && Math.abs(vel) < .05) target += (Math.round(target) - target) * .08;
 layout();
}
function tick() { step(); requestAnimationFrame(tick); }

addEventListener('wheel', e => {
 e.preventDefault();
 target += e.deltaY * .012; snapIdle = 0;
 const max = ITEMS.length - 1;
 if (target < 0) target *= .4; if (target > max) target = max + (target - max) * .4;
}, { passive: false });
let dragY = null;
addEventListener('pointerdown', e => { if (e.target.closest('#back')) return; dragY = e.clientY; });
addEventListener('pointermove', e => {
 if (dragY === null) return;
 target += (dragY - e.clientY) * .02; dragY = e.clientY; snapIdle = 0;
 target = Math.max(0, Math.min(ITEMS.length - 1, target));
});
addEventListener('pointerup', () => { dragY = null; });
document.getElementById('back').addEventListener('click', () => { location.href = './index.html'; });

window.ciDebug = { get pos() { return pos; }, get target() { return target; }, set target(v) { target = v; snapIdle = 0; }, count: ITEMS.length, pump: n => { for (let i = 0; i < n; i++) step(); } };
tick();
