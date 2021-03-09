var FingerPaint = function FingerPaint() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fp = this;
  var canvas = document.createElement('canvas');
  fp.canvas = canvas;
  canvas.width = options.width || 150;
  canvas.height = options.height || 150;
  var posA = {
    x: 0,
    y: 0
  };
  var posB = {
    x: 0,
    y: 0
  };

  var onTouchEnd = function onTouchEnd() {
    posA = {
      x: 0,
      y: 0
    };
    posB = {
      x: 0,
      y: 0
    };
  };

  var setPosition = function setPosition(e) {
    posA.x = posB.x;
    posA.y = posB.y;
    posB.x = e.touches[0].pageX - e.target.offsetLeft;
    posB.y = e.touches[0].pageY - e.target.offsetTop;
  };

  var ctx = canvas.getContext('2d');

  var onTouchMove = function onTouchMove(e) {
    e.preventDefault();
    setPosition(e);
    fp.draw(posA, posB);
  };

  fp.draw = function (posA, posB) {
    if (posA.x == 0 && posA.y == 0) {
      return;
    }

    ctx.beginPath();
    ctx.moveTo(posA.x, posA.y);
    ctx.lineTo(posB.x, posB.y);
    ctx.stroke();
  };

  fp.clear = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  canvas.addEventListener('touchmove', onTouchMove);
  canvas.addEventListener('touchend', onTouchEnd);
  return fp;
};

var hiragana = {
  a: 'あ',
  i: 'い',
  u: 'う',
  e: 'え',
  o: 'お',
  ka: 'か',
  ki: 'き',
  ku: 'く',
  ke: 'け',
  ko: 'こ',
  ga: 'が',
  gi: 'ぎ',
  gu: 'ぐ',
  ge: 'げ',
  go: 'ご',
  sa: 'さ',
  shi: 'し',
  su: 'す',
  se: 'せ',
  so: 'そ',
  za: 'ざ',
  zhi: 'じ',
  zu: 'ず',
  ze: 'ぜ',
  zo: 'ぞ',
  ta: 'た',
  chi: 'ち',
  tsu: 'つ',
  te: 'て',
  to: 'と',
  da: 'だ',
  dzhi: 'ぢ',
  du: 'づ',
  de: 'で',
  do: 'ど',
  na: 'な',
  ni: 'に',
  nu: 'ぬ',
  ne: 'ね',
  no: 'の',
  ha: 'は',
  hi: 'ひ',
  fu: 'ふ',
  he: 'へ',
  ho: 'ほ',
  ba: 'ば',
  bi: 'び',
  bu: 'ぶ',
  be: 'べ',
  bo: 'ぼ',
  pa: 'ぱ',
  pi: 'ぴ',
  pu: 'ぷ',
  pe: 'ぺ',
  po: 'ぽ',
  ma: 'ま',
  mi: 'み',
  mu: 'む',
  me: 'め',
  mo: 'も',
  ya: 'や',
  yi: '',
  yu: 'ゆ',
  ye: '',
  yo: 'よ',
  ra: 'ら',
  ri: 'り',
  ru: 'る',
  re: 'れ',
  ro: 'ろ',
  wa: 'わ',
  wi: '',
  wu: '',
  we: '',
  wo: 'を'
};

export { FingerPaint as F, hiragana as h };
