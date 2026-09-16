// 横向时间轴版：数据注入 + 竖向时间轴 + 左右箭头
// 数据来自 stage-data.js 的 window.STAGE_ARCHIVE，按六阶段顺序展平为一条时间线
(function () {
 const STAGES = ['jianli', 'jinru', 'yunxing', 'weihu', 'tuichu', 'yanxu'];
 const META = {
  jianli:  { cn: '建立', en: 'BUILD',    sub: '设计／制作', q: '桌子从图纸到器物：被设计、打造、生产出来的阶段。' },
  jinru:   { cn: '进入', en: 'ENTER',    sub: '分配／布置', q: '桌子进入空间：被搬入、安置、布置、安排座位的阶段。' },
  yunxing: { cn: '运行', en: 'OPERATE',  sub: '操作／交流', q: '事件如何在桌面上发生并持续运转？工作、交谈、书写、进餐与观看构成桌面最密集的使用阶段。' },
  weihu:   { cn: '维护', en: 'MAINTAIN', sub: '整理／修补', q: '桌子被收拾、收纳、清洁、保养与修补的阶段。' },
  tuichu:  { cn: '退出', en: 'RETIRE',   sub: '撤除／停用', q: '桌子被清空、停用、撤除、空置的阶段。' },
  yanxu:   { cn: '延续', en: 'REMAIN',   sub: '留痕／再用', q: '桌子留下痕迹：记忆、纪念、遗留与再用的阶段。' }
 };
 const ARCHIVE = window.STAGE_ARCHIVE || {};

 // 展平：所有阶段的条目按时间轴顺序排列
 const entries = [];
 STAGES.forEach((k, si) => {
  (ARCHIVE[k] || []).forEach(e => entries.push(Object.assign({}, e, { stageKey: k, stageIndex: si })));
 });

 // 底部顺序轴 DOM（与首页下方六格对应：编号 + 像素图标 + 中英标签）
 const ICONS = {
  jianli: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 40h36M14 40V26M34 40V26M8 26h32M12 20l10-10 6 6-10 10zM28 10l6-6 6 6-6 6z"/></svg>',
  jinru: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 8h14v32H8zM12 12h6v10h-6zM26 24h14M34 17l7 7-7 7M26 12v24"/></svg>',
  yunxing: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="24" r="14"/><path d="M20 17l11 7-11 7z"/></svg>',
  weihu: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M30 8a9 9 0 0 0-10 12L8 32l8 8 12-12a9 9 0 0 0 12-10l-7 7-8-2-2-8zM12 36l4-4"/></svg>',
  tuichu: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M40 8H26v32h14zM36 12h-6v10h6zM8 24h14M15 17l-8 7 8 7M22 12v24"/></svg>',
  yanxu: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 24c4-9 10-9 14 0s10 9 14 0M10 30c4-9 10-9 14 0s10 9 14 0M24 8v6M24 34v6"/></svg>'
 };
 const seq = document.getElementById('h-seq-items');
 STAGES.forEach((k, si) => {
  const b = document.createElement('button');
  b.className = 'h-seq-item';
  b.innerHTML = '<span class="h-seq-num">' + String(si + 1).padStart(2, '0') + '</span>' +
                '<span class="h-seq-icon">' + (ICONS[k] || '') + '</span>' +
                '<span class="h-seq-label">' + META[k].cn + '<small>' + META[k].en + '</small></span>';
  b.addEventListener('click', () => window.hGoStage(si));
  seq.appendChild(b);
 });
 const tlItems = [...seq.children];

 let curStage = -1, curEntry = -1;

 // 阶段语境（左栏 + 副栏）+ 顺序轴亮起
 function setStage(si) {
  if (si === curStage) return;
  curStage = si;
  const m = META[STAGES[si]];
  document.getElementById('h-sub-left').textContent = '● ' + String(si + 1).padStart(2, '0') + ' / ' + m.en;
  document.getElementById('h-stage-cn').textContent = m.cn;
  document.getElementById('h-stage-q').textContent = m.q;
  document.getElementById('h-stage-bullet').textContent = '● ' + m.sub;
  document.getElementById('h-stage-count').textContent =
   '本阶段 ' + (ARCHIVE[STAGES[si]] || []).length + ' 条 / 全部 ' + entries.length + ' 条';
  tlItems.forEach((b, i) => b.classList.toggle('active', i === si));
 }

 // 条目信息（右栏）+ 照片说明
 function setEntry(i) {
  if (i === curEntry) return;
  curEntry = i;
  const e = entries[i]; if (!e) return;
  const firstTag = (e.tags || '').split(/[／,，]/)[0] || '';
  document.getElementById('h-entry-no').textContent = '● ' + e.id + (firstTag ? ' / ' + firstTag : '');
  document.getElementById('h-entry-title').textContent = e.title;
  document.getElementById('h-entry-year').textContent = e.year || '';
  document.getElementById('h-entry-note').textContent = e.note || '';
  document.getElementById('h-entry-tags').innerHTML =
   (e.tags || '').split(/[／,，]/).filter(Boolean).map(t => '<span>' + t.trim() + '</span>').join('');
  document.getElementById('h-caption').textContent =
   (e.title || '') + (e.year ? '　·　' + e.year : '');
  setStage(e.stageIndex);
 }

 window.H_ENTRIES = entries;
 window.hShow = setEntry;            // 3D 层联动入口
 window.hCurrent = () => curEntry;
 document.getElementById('h-prev').addEventListener('click', () => window.hGoEntry(curEntry - 1));
 document.getElementById('h-next').addEventListener('click', () => window.hGoEntry(curEntry + 1));
 setEntry(0);
})();
