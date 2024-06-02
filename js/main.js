/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 514:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ 322:
/***/ (() => {

document.addEventListener('DOMContentLoaded', () => {
  let pageWidth = window.innerWidth;
  const linksToSec = document.querySelectorAll('a[href^="#"]');
  linksToSec.forEach(item => {
    const link = item;
    link.onclick = e => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      let scrollTop = section.offsetTop;
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    };
  });

  // apps
  const appsEl = document.querySelector('.apps');
  const appsColl = appsEl.querySelectorAll('.apps__card');
  let appsGrid;
  const createAppsGrid = size => {
    return handleAppsGrid(appsEl, appsColl, size);
  };
  const resizeAppsGrid = () => {
    if (!appsGrid) {
      appsGrid = createAppsGrid(3);
    }
    if (pageWidth >= 1024 && appsGrid.columns !== 3) {
      appsGrid = createAppsGrid(3);
      return;
    }
    if (pageWidth >= 650 && pageWidth < 1024 && appsGrid.columns !== 2) {
      appsGrid = createAppsGrid(2);
      return;
    }
    if (pageWidth < 650 && appsGrid.columns !== 1) {
      appsGrid = createAppsGrid(1);
      return;
    }
  };
  resizeAppsGrid();
  window.onresize = e => {
    pageWidth = e.target.innerWidth;
    resizeAppsGrid();
  };
});
function handleAppsGrid(wrapper, coll, size) {
  let chunkApps = [];
  let tempArray = [];
  coll.forEach((app, i) => {
    const colors = app.dataset.colors;
    if (colors) {
      const colorsArr = colors.replace(' ', '').split(',');
      app.style.setProperty('--colors', `${colorsArr.map(color => '#' + color)}`);
    }
    let timeout;
    app.onclick = e => {
      if (e.target.classList.contains('btn')) return;
      clearTimeout(timeout);
      if (app.classList.contains('apps__card_active')) {
        app.classList.add('apps__card_close');
        app.classList.remove('apps__card_active');
        timeout = setTimeout(() => {
          app.classList.remove('apps__card_close');
        }, 600);
        return;
      }
      const curr = document.querySelector('.apps__card_active');
      if (curr) curr.classList.remove('apps__card_active');
      app.classList.add('apps__card_open');
      setTimeout(() => app.classList.add('apps__card_active'), 0);
      timeout = setTimeout(() => {
        app.classList.remove('apps__card_open');
      }, 300);
    };
    tempArray.push(app);
    if (!(tempArray.length === size || i === coll.length - 1)) return;
    chunkApps.push(tempArray);
    tempArray = [];
  });
  wrapper.innerHTML = '';
  chunkApps.forEach(chunk => {
    const div = document.createElement('div');
    div.classList.add('apps__row');
    div.style.setProperty('--width', `calc(100% / ${chunk.length})`);
    chunk.forEach(appCard => {
      div.appendChild(appCard);
    });
    wrapper.appendChild(div);
  });
  return {
    wrapper,
    rows: chunkApps.length,
    columns: size
  };
}

/***/ }),

/***/ 521:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cardTracker/cardTracker.avif";

/***/ }),

/***/ 762:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cardTracker/cardTracker.jpg";

/***/ }),

/***/ 39:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cardTracker/cardTracker.webp";

/***/ }),

/***/ 8:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cardTracker/screen1.avif";

/***/ }),

/***/ 842:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cardTracker/screen1.webp";

/***/ }),

/***/ 5:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cardTracker/screen2.avif";

/***/ }),

/***/ 686:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cardTracker/screen2.jpg";

/***/ }),

/***/ 939:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cardTracker/screen2.webp";

/***/ }),

/***/ 253:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/cashSense.avif";

/***/ }),

/***/ 734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/cashSense.jpg";

/***/ }),

/***/ 971:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/cashSense.webp";

/***/ }),

/***/ 317:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/screen1.avif";

/***/ }),

/***/ 902:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/screen1.jpg";

/***/ }),

/***/ 883:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/screen1.webp";

/***/ }),

/***/ 240:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/screen2.avif";

/***/ }),

/***/ 633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/screen2.jpg";

/***/ }),

/***/ 538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/screen2.webp";

/***/ }),

/***/ 439:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/screen3.avif";

/***/ }),

/***/ 940:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/screen3.jpg";

/***/ }),

/***/ 405:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/screen3.webp";

/***/ }),

/***/ 690:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/screen4.avif";

/***/ }),

/***/ 783:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/screen4.jpg";

/***/ }),

/***/ 324:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cashSense/screen4.webp";

/***/ }),

/***/ 177:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "49b238c8d1e747b4cee4.ico";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(514);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/pages/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(177), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(521), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(39), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(762), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(8), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(842), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(5), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(939), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(686), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(253), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(971), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(734), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(317), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(883), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(902), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(240), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(538), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(633), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(439), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(405), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(940), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(690), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(324), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(783), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = getUrl_default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = getUrl_default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = getUrl_default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = getUrl_default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = getUrl_default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = getUrl_default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = getUrl_default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = getUrl_default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = getUrl_default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = getUrl_default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = getUrl_default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = getUrl_default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = getUrl_default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = getUrl_default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = getUrl_default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = getUrl_default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = getUrl_default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = getUrl_default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = getUrl_default()(___HTML_LOADER_IMPORT_23___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <title>Resodo Studios – Innovative Apps for a Better Future</title> <meta name=\"description\" content=\"Explore the unique and innovative apps from Resodo Studios. Discover tools designed to inspire, simplify, and enhance your daily life. Join us in creating the future together!\"> <meta name=\"keywords\" content=\"Resodo Studios, innovative apps, personal finance management, Card Tracker, Cash Sense, app development, mobile applications, financial goals, expense tracking, subscription management, creative apps, tech innovation.\"> <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\"> <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0\"/> </head> <body> <header class=\"header\"> <div class=\"container\"> <div class=\"header__wrapper\"> <div class=\"header__logo\"> <a href=\"/\" class=\"logo\"> Resodo Studios </a> </div> <nav class=\"header__nav\"> <ul class=\"navMenu\"> <li class=\"navMenu__item\"> <a href=\"#apps\" class=\"navMenu__link\">Apps</a> </li> </ul> </nav> </div> </div> </header> <main> <section class=\"welcome\"> <div class=\"container\"> <div class=\"welcome__wrapper\"> <h1 class=\"welcome__title\">Resodo Studios</h1> <p class=\"welcome__descr\">Creating the future together. Discover our unique apps and find what resonates with you. Ready to explore?</p> <a href=\"#apps\" class=\"iconBtn welcome__btn\"> <span class=\"material-symbols-outlined\"> keyboard_double_arrow_down </span> </a> </div> </div> </section> <section class=\"secApps\" id=\"apps\"> <div class=\"container\"> <div class=\"secName\"><span>Apps</span></div> <h2 class=\"secTitle secTitle_center\">Dive into Our Creations</h2> <p class=\"secDescr secDescr_center secDescr_mt10\">Discover the unique collection of apps from Resodo Studios, designed to inspire and simplify your life. Each app is crafted with love and attention to detail to offer you the best possible experience. Explore, find your favorites, and enjoy unparalleled quality and innovation.</p> <ul class=\"apps secApps__apps\"> <li class=\"apps__card\" data-colors=\"f1e29c, f6dbd3\"> <div class=\"apps__content\"> <div class=\"apps__header\"> <div class=\"apps__icon\"> <picture> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/avif\"> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" type=\"image/webp\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Card Tracker\" class=\"apps__iconImg\"> </picture> </div> <h3 class=\"apps__name\">Card Tracker</h3> </div> </div> <p class=\"apps__descr\">With Card Tracker, users can easily identify their cards by simply entering the first 6 digits of their bank card into the designated query field. The application provides information about the issuing country, bank, card type, and other characteristics.</p> <div class=\"apps__screenshotes\"> <div class=\"apps__screensList\"> <picture> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" type=\"image/avif\"> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" type=\"image/webp\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Card Tracker - Screen 1\" class=\"apps__screen\" loading=\"lazy\"> </picture> <picture> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" type=\"image/avif\"> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" type=\"image/webp\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Card Tracker - Screen 2\" class=\"apps__screen\" loading=\"lazy\"> </picture> </div> </div> <div class=\"apps__footer\"> <a href=\"https://play.google.com/store/apps/details?id=ru.resodostudios.cardtracker\" class=\"btn\" target=\"_blank\">Download</a> </div> <div class=\"apps__closeBan\"> <div class=\"apps__closeIcon\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Card Tracker\" class=\"apps__iconImg\"> </div> <div class=\"apps__closeName\">Card Tracker</div> </div> </li> <li class=\"apps__card\" data-colors=\"c1ecc3, f1ded9\"> <div class=\"apps__content\"> <div class=\"apps__header\"> <div class=\"apps__icon\"> <picture> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" type=\"image/avif\"> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" type=\"image/webp\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Cash Sense\" class=\"apps__closeImg\"> </picture> </div> <h3 class=\"apps__name\">Cash Sense</h3> </div> </div> <p class=\"apps__descr\">Cash Sense is a multifunctional personal finance management app designed to help you budget, track, and achieve your financial goals effortlessly. With Cash Sense, you can easily monitor your finances across various wallets, including cash, bank accounts, credit cards, and investment accounts. </p> <div class=\"apps__screenshotes\"> <div class=\"apps__screensList\"> <picture> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" type=\"image/avif\"> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" type=\"image/webp\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Card Tracker - Screen 1\" class=\"apps__screen\" loading=\"lazy\"> </picture> <picture> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" type=\"image/avif\"> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" type=\"image/webp\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"Card Tracker - Screen 2\" class=\"apps__screen\" loading=\"lazy\"> </picture> <picture> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" type=\"image/avif\"> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" type=\"image/webp\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"Card Tracker - Screen 3\" class=\"apps__screen\" loading=\"lazy\"> </picture> <picture> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" type=\"image/avif\"> <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" type=\"image/webp\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"Card Tracker - Screen 4\" class=\"apps__screen\" loading=\"lazy\"> </picture> </div> </div> <div class=\"apps__footer\"><a href=\"https://play.google.com/store/apps/details?id=ru.resodostudios.cashsense\" class=\"btn\" target=\"_blank\">Download</a></div> <div class=\"apps__closeBan\"> <div class=\"apps__closeIcon\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Card Tracker\" class=\"apps__iconImg\"> </div> <div class=\"apps__closeName\">Cash Sense</div> </div> </li> </ul> </div> </section> </main> <footer class=\"footer\"> <div class=\"container\"> <div class=\"footer__copyright\"> All rights reserved. © Resodo Studios. </div> </div> </footer> </body> </html>";
// Exports
/* harmony default export */ const pages = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./src/pages/pages.js

// EXTERNAL MODULE: ./src/js/script.js
var script = __webpack_require__(322);
;// CONCATENATED MODULE: ./src/index.js



})();

/******/ })()
;