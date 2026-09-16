// Rolodex card index — center-aligned cards with protruding index bumps.
// Every 4 white cards is followed by 1 black trapezoid tab. No 3D content in cards.
// Data format (extend with real entries later):
// { id: '094', title: 'oil lamp', year: '', details: '' }
const FOLDERS = [
 { id: '094', title: 'oil lamp', year: '', details: '' },
 { id: '095', title: 'oats', year: '', details: '' },
 { id: '096', title: 'pants', year: '', details: '' },
 { id: '097', title: 'plane', year: '', details: '' },
 { id: '098', title: 'plant 003', year: '', details: '' },
 { id: '099', title: 'pomelo', year: '', details: '' },
 { id: '100', title: 'phisher', year: '', details: '' },
 { id: '101', title: 'palo alto', year: '', details: '' },
 { id: '102', title: 'pencil', year: '', details: '' },
 { id: '103', title: 'photos', year: '', details: '' },
 { id: '104', title: 'quiet', year: '', details: '' },
 { id: '105', title: 'queen', year: '', details: '' },
 { id: '106', title: 'questions', year: '', details: '' },
 { id: '107', title: 'quizz', year: '', details: '' },
 { id: '108', title: 'quit', year: '', details: '' },
 { id: '109', title: 'raccoon', year: '', details: '' },
 { id: '111', title: 'rizz', year: '', details: '' },
 { id: '112', title: 'rum', year: '', details: '' },
 { id: '113', title: 'generic guy', year: '', details: '' },
 { id: '114', title: 'rain', year: '', details: '' },
 { id: '115', title: 'rug', year: '', details: '' },
 { id: '116', title: 'ruby', year: '', details: '' },
 { id: '117', title: 'sider', year: '', details: '' },
 { id: '118', title: 'sony', year: '1979', details: 'Walkman 1979 - 产品详情' },
 { id: '119', title: 'sun', year: '', details: '' },
 { id: '120', title: 'seller', year: '', details: '' },
 { id: '121', title: 'sims', year: '', details: '' },
 { id: '122', title: 'slides', year: '', details: '' },
 { id: '123', title: 'simpsons', year: '', details: '' },
 { id: '124', title: 'sir', year: '', details: '' }
];
const TABS = [
 { ltr: 'O', cnt: '010' }, { ltr: 'P', cnt: '012' }, { ltr: 'Q', cnt: '005' },
 { ltr: 'R', cnt: '002' }, { ltr: 'S', cnt: '002' }, { ltr: 'O', cnt: '010' },
 { ltr: 'P', cnt: '012' }
];

// build deck: 4 white cards, then 1 black tab, repeat
const ITEMS = [];
let tabIdx = 0;
FOLDERS.forEach((w, i) => {
 ITEMS.push(w);
 if ((i + 1) % 4 === 0 && tabIdx < TABS.length) ITEMS.push(TABS[tabIdx++]);
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
   '</span><span class="nm">/ ' + it.title + '</span></span></div>';
  el.addEventListener('click', ev => { ev.stopPropagation(); openDetail(it, i); });
 }
 deck.appendChild(el);
 return el;
});

// ---- spring scroll ----
let pos = 11, target = 11, vel = 0, snapIdle = 0;
let detailY = 220, detailVel = 0, detailTarget = 220;
let selected = -1;
const detailEl = document.getElementById('detail');
const SPACING = 34; // card height 34 -> cards stack flush, next bump covers previous edge

function layout() {
 const midY = innerHeight * .40, drawerTop = innerHeight - 276; // rim top approx
 for (let i = 0; i < ITEMS.length; i++) {
  const el = nodes[i], d = i - pos;
  const y = d * SPACING, screenY = midY + y;
  if (screenY < -80 || screenY > drawerTop) { el.style.display = 'none'; continue; }
  el.style.display = 'block';
  el.style.transform = 'translateX(-50%) translate3d(0,' + y.toFixed(1) + 'px,0)';
  el.style.zIndex = String(10 + i);
 }
 detailEl.style.transform = 'translateX(-50%) translateY(' + detailY.toFixed(2) + '%)';
}
function step() {
 vel += (target - pos) * .14; vel *= .80; pos += vel;
 if (++snapIdle > 30 && Math.abs(vel) < .05) target += (Math.round(target) - target) * .08;
 detailVel += (detailTarget - detailY) * .10; detailVel *= .78; detailY += detailVel;
 layout();
}
function tick() { step(); requestAnimationFrame(tick); }

addEventListener('wheel', e => {
 e.preventDefault();
 target += e.deltaY * .012; snapIdle = 0;
 const max = ITEMS.length - 1;
 if (target < 0) target *= .4; if (target > max) target = max + (target - max) * .4;
}, { passive: false });
let dragY = null, downY = 0;
addEventListener('pointerdown', e => { if (e.target.closest('#detail') || e.target.closest('#back')) return; dragY = e.clientY; downY = e.clientY; });
addEventListener('pointermove', e => {
 if (dragY === null) return;
 target += (dragY - e.clientY) * .02; dragY = e.clientY; snapIdle = 0;
 target = Math.max(0, Math.min(ITEMS.length - 1, target));
});
addEventListener('pointerup', e => {
 dragY = null;
 if (selected >= 0 && Math.abs(e.clientY - downY) < 5 && !e.target.closest('.card') && !e.target.closest('#detail') && !e.target.closest('#back')) closeDetail();
});
addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });
document.getElementById('back').addEventListener('click', () => { location.href = './index.html'; });

function openDetail(it, i) {
 document.getElementById('d-title').textContent = it.id + ' / ' + it.title + (it.year ? ' - ' + it.year : '');
 document.getElementById('d-sub').textContent = it.details ? it.details + ' / details' : 'details';
 selected = i; detailTarget = 0;
 window.ciDebug.open = true;
}
function closeDetail() {
 if (selected < 0) return;
 selected = -1; detailTarget = 220;
 window.ciDebug.open = false;
}
window.ciDebug = { get pos() { return pos; }, get target() { return target; }, set target(v) { target = v; snapIdle = 0; }, open: false, count: ITEMS.length, pump: n => { for (let i = 0; i < n; i++) step(); } };
tick();
