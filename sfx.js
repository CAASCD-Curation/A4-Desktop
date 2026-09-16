/* Desk Archive — interaction sound effects.
   window.SFX.play(name)          play a sound (overlapping allowed)
   window.SFX.go(url, name)       play a sound, then navigate (delay per sound)
   window.SFX.toggle()            mute / unmute, returns muted state
*/
(function () {
  var BASE = './assets/sfx/';
  var FILES = { click: 'click.mp3', drawer: 'drawer.mp3', boot: 'boot.mp3', toggle: 'toggle.mp3', book: 'book.mp3' };
  var VOL = { click: 0.45, drawer: 0.85, boot: 0.8, toggle: 0.6, book: 0.8 };
  var DELAY = { click: 180, toggle: 150, drawer: 480, boot: 550, book: 380 };
  var pool = {}, muted = false;
  for (var k in FILES) {
    var a = new Audio(BASE + FILES[k]);
    a.preload = 'auto';
    pool[k] = a;
  }
  function play(name) {
    if (muted) return;
    var a = pool[name];
    if (!a) return;
    try {
      var c = a.cloneNode();
      c.volume = VOL[name] != null ? VOL[name] : 0.6;
      var p = c.play();
      if (p && p.catch) p.catch(function () {});
    } catch (e) {}
  }
  function go(url, name) {
    if (muted) { location.href = url; return; }
    play(name);
    setTimeout(function () { location.href = url; }, DELAY[name] || 200);
  }
  function toggle() { muted = !muted; return muted; }
  window.SFX = { play: play, go: go, toggle: toggle, get muted() { return muted; } };
})();
