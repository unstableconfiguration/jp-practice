import { l as lite } from './index-aa6b2341.js';
import { F as FingerPaint, h as hiragana } from './hiragana-d8a17763.js';

var page = lite.extend({
  contentUrl: 'pages/random-characters/random-characters.html',
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
      charDisplayLeft: get('eng-display'),
      charDisplayRight: get('jp-display'),
      btnRandomCharacter: get('btn-random-character'),
      canvasContainer: get('canvas-container')
    };
  },
  addEventListeners: function addEventListeners() {
    this.el.btnRandomCharacter.addEventListener('click', this.onRandomCharacterClick.bind(this));
    this.el.charDisplayRight.addEventListener('click', this.onCharDisplayClick.bind(this));
  },
  addCanvas: function addCanvas() {
    this.fingerPaint = new FingerPaint();
    this.el.canvasContainer.appendChild(this.fingerPaint.canvas);
  },
  onRandomCharacterClick: function onRandomCharacterClick(ev) {
    var randChar = this.getRandomCharacter(hiragana);
    this.el.charDisplayLeft.innerHTML = randChar.english;
    this.el.charDisplayRight.innerHTML = randChar.japanese;
    this.fingerPaint.clear();
    this.toggleFilter(this.el.charDisplayRight, true);
  },
  onCharDisplayClick: function onCharDisplayClick(ev) {
    this.toggleFilter(this.el.charDisplayRight, false);
  },
  toggleFilter: function toggleFilter(el, filterStatus) {
    var filterClass = ' char-display-filter';

    if (filterStatus && !el.className.includes(filterClass)) {
      el.className += filterClass;
    } else if (!filterStatus) {
      el.className = el.className.replace(filterClass, '');
    }
  },
  getRandomCharacter: function getRandomCharacter(alphabet) {
    var chars = Object.keys(alphabet);
    var rand = Math.floor(Math.random() * chars.length);
    var randChar = chars[rand];

    if (!alphabet[randChar]) {
      return this.getRandomCharacter(alphabet);
    }

    return {
      english: randChar,
      japanese: alphabet[randChar]
    };
  }
});

export { page };
