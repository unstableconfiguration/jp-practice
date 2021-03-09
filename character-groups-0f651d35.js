import { l as lite } from './index-aa6b2341.js';
import { F as FingerPaint, h as hiragana } from './hiragana-d8a17763.js';

var page = lite.extend({
  contentUrl: './pages/character-groups/character-groups.html',
  initialize: function initialize() {
    this.loadStyleSheet('css/character-practice.css');
  },
  onContentBound: function onContentBound() {
    this.bindElements();
    this.addEventListeners();
    this.addCanvas();
  },
  bindElements: function bindElements() {
    var get = id => document.getElementById(id);

    this.el = {
      engDisplay1: get('eng-display-1'),
      engDisplay2: get('eng-display-2'),
      engDisplay3: get('eng-display-3'),
      engDisplay4: get('eng-display-4'),
      engDisplay5: get('eng-display-5'),
      jpDisplay1: get('jp-display-1'),
      jpDisplay2: get('jp-display-2'),
      jpDisplay3: get('jp-display-3'),
      jpDisplay4: get('jp-display-4'),
      jpDisplay5: get('jp-display-5'),
      btnPreviousSet: get('btn-previous-set'),
      btnNextSet: get('btn-next-set'),
      canvasContainer: get('canvas-container')
    };
  },
  addEventListeners: function addEventListeners() {
    this.el.btnPreviousSet.addEventListener('click', this.onPreviousSetClick.bind(this));
    this.el.btnNextSet.addEventListener('click', this.onNextSetClick.bind(this));
    this.el.jpDisplay1.addEventListener('click', this.onJPCharClick.bind(this));
    this.el.jpDisplay2.addEventListener('click', this.onJPCharClick.bind(this));
    this.el.jpDisplay3.addEventListener('click', this.onJPCharClick.bind(this));
    this.el.jpDisplay4.addEventListener('click', this.onJPCharClick.bind(this));
    this.el.jpDisplay5.addEventListener('click', this.onJPCharClick.bind(this));
  },
  addCanvas: function addCanvas() {
    var left = this.el.engDisplay1.getClientRects()[0].left;
    var right = this.el.engDisplay5.getClientRects()[0].right;
    this.fingerPaint = new FingerPaint({
      width: right - left
    });
    this.el.canvasContainer.appendChild(this.fingerPaint.canvas);
  },
  direction: {
    previous: 1,
    next: 2
  },
  // the 'a' char of the current set
  currentChar: null,
  getCharSet: function getCharSet(alphabet, dir) {
    var keys = Object.keys(alphabet);
    var currentIdx = keys.findIndex(k => k == (this.currentChar || 'a'));
    var isNext = dir == this.direction.next;
    var nextIdx = currentIdx + (isNext ? 5 : -5);

    if (nextIdx < 0) {
      nextIdx = keys.length - 5;
    }

    if (nextIdx == keys.length) {
      nextIdx = 0;
    }

    this.currentChar = keys[nextIdx];
    return [{
      english: keys[nextIdx],
      japanese: alphabet[keys[nextIdx]]
    }, {
      english: keys[nextIdx + 1],
      japanese: alphabet[keys[nextIdx + 1]]
    }, {
      english: keys[nextIdx + 2],
      japanese: alphabet[keys[nextIdx + 2]]
    }, {
      english: keys[nextIdx + 3],
      japanese: alphabet[keys[nextIdx + 3]]
    }, {
      english: keys[nextIdx + 4],
      japanese: alphabet[keys[nextIdx + 4]]
    }];
  },
  onNextSetClick: function onNextSetClick(ev) {
    var chars = this.getCharSet(hiragana, this.direction.next);
    this.setChars(chars);
    this.toggleFilters();
    this.fingerPaint.clear();
  },
  onPreviousSetClick: function onPreviousSetClick(ev) {
    var chars = this.getCharSet(hiragana, this.direction.previous);
    this.setChars(chars);
    this.toggleFilters();
    this.fingerPaint.clear();
  },
  setChars: function setChars(chars) {
    this.el.engDisplay1.innerHTML = chars[0].english;
    this.el.engDisplay2.innerHTML = chars[1].english;
    this.el.engDisplay3.innerHTML = chars[2].english;
    this.el.engDisplay4.innerHTML = chars[3].english;
    this.el.engDisplay5.innerHTML = chars[4].english;
    this.el.jpDisplay1.innerHTML = chars[0].japanese;
    this.el.jpDisplay2.innerHTML = chars[1].japanese;
    this.el.jpDisplay3.innerHTML = chars[2].japanese;
    this.el.jpDisplay4.innerHTML = chars[3].japanese;
    this.el.jpDisplay5.innerHTML = chars[4].japanese;
  },
  onJPCharClick: function onJPCharClick(ev) {
    this.toggleFilter(ev.target, false);
  },
  toggleFilters: function toggleFilters() {
    var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.toggleFilter(this.el.jpDisplay1, status);
    this.toggleFilter(this.el.jpDisplay2, status);
    this.toggleFilter(this.el.jpDisplay3, status);
    this.toggleFilter(this.el.jpDisplay4, status);
    this.toggleFilter(this.el.jpDisplay5, status);
  },
  toggleFilter: function toggleFilter(el) {
    var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var filterClass = ' char-display-filter';

    if (status && !el.className.includes(filterClass)) {
      el.className += filterClass;
    } else if (!status) {
      el.className = el.className.replace(filterClass, '');
    }
  }
});

export { page };
