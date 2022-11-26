/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");


function openMenu() {
  return new Promise(function (resolve) {
    $('.js-burger').addClass('is-disabled').attr('disabled', true);
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(true, _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.find('.header__menu'), 'header');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.addClass('is-menu-opened');
    $('.header__menu').removeClass('is-hidden');
    setImmediate(function () {
      _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$body.css('padding-right', "".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].getScrollbarWidth(), "px"));
      _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.css('right', "".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].getScrollbarWidth(), "px"));
    });
    setTimeout(function () {
      $('.header__menu').addClass('is-active');
      $('.js-burger').removeClass('is-disabled').attr('disabled', false);
      resolve();
    }, 100);
  });
}

function closeMenu() {
  return new Promise(function (resolve) {
    $('.js-burger').addClass('is-disabled').attr('disabled', true);
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(false, _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.find('.header__menu'), 'header');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$body.css('padding-right', '');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.css('right', '');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.removeClass('is-menu-opened');
    $('.header__menu').removeClass('is-active');
    setTimeout(function () {
      $('.header__menu').addClass('is-hidden');
      $('.js-burger').removeClass('is-disabled').attr('disabled', false);
      resolve();
    }, 500);
  });
}

function toggleMenu(event) {
  event.preventDefault();
  event.stopPropagation();

  if ($(event.currentTarget).hasClass('is-active')) {
    $(event.currentTarget).removeClass('is-active');
    closeMenu();
  } else {
    $(event.currentTarget).addClass('is-active');
    openMenu();
  }
}

function init() {
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header = $('.header');
  $('.js-burger').on('click.header', toggleMenu);
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$document.on('click.header', function (e) {
    var $container = $('.header__menu');

    if ($container.is(e.target) && $container.has(e.target).length === 0 && $container.hasClass('is-active')) {
      closeMenu();
      $('.js-burger').removeClass('is-active');
    }
  }).on('keyup.header', function (e) {
    if ((e.key === 'Escape' || e.key === 'Esc') && $('.header__menu').hasClass('is-active')) {
      closeMenu();
      $('.js-burger').removeClass('is-active');
    }
  });
}

function destroy() {
  $('.js-burger').off('.header');
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$document.off('.header');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  destroy: destroy,
  openMenu: openMenu,
  closeMenu: closeMenu
});
document.addEventListener("DOMContentLoaded", function () {
  var menu = new MmenuLight(document.querySelector("#mmenu"));
  var navigator = menu.navigation();
  var drawer = menu.offcanvas();
  document.querySelector('a[href="#mmenu"]').addEventListener('click', function (evnt) {
    evnt.preventDefault();
    drawer.open();
  });
  var mmenuCloseBtns = document.querySelectorAll('.js-mmenu-close'),
      index;
  Array.prototype.forEach.call(mmenuCloseBtns, function (mmenuClose) {
    mmenuClose.addEventListener('click', function (e) {
      mmenuCloseBtns.forEach(function (mmenuItem) {
        if (mmenuItem.classList.contains('active')) {
          mmenuItem.classList.remove('active');
        }
      });

      if (!e.target.classList.contains('active')) {
        drawer.close();
        e.target.classList.add('active');
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/js/components/langs.js":
/*!************************************!*\
  !*** ./src/js/components/langs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


var _ru, _en, _sg, _fr, _ng;

/* harmony default export */ __webpack_exports__["default"] = ({
  'ru': (_ru = {
    'page_title': 'Скоростные проходы PERCo',
    'advantages': 'Преимущества',
    'products': 'Продукция',
    'gallery': 'Фотогалерея',
    'about_us': 'О компании',
    'speed_gates': 'Скоростные проходы',
    'hero_slide1': 'Решение для бизнес-центров',
    'hero_slide2': 'Решение для офисов',
    'hero_slide3': 'Решение для спортивно-развлекательных объектов',
    'hero_slide4': 'Решение для учебных заведений',
    'hero_slide5': 'Решение для транспортных объектов',
    'hero_slide6': 'Решение для банков'
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, "advantages", 'Преимущества'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'touch_free', 'Бесконтактность'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'safe_passage', 'Безопасность прохода с детьми'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'passage_of_people', 'Проезд маломобильных групп населения'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'safety_in_case', 'Безопасность в аварийной ситуации'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'convenient_luggage', 'Комфортный провоз багажа'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, '5_years_of_warranty', '5 лет гарантии'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'st-01_speed_gate', 'Скоростной проход ST‑01'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'st-11_speed_gate', 'Скоростной проход ST‑11'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'st-02_speed_gate', 'Скоростной проход ST‑02'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'wmd-06_swing_gate', 'Калитка WMD‑06, ограждение ВН06'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'prod_slide0__text', 'Скоростной проход ST‑01'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'prod_slide0__subtext', 'Универсальный скоростной проход с распашными створками'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'prod_slide1__text', 'Скоростной проход ST‑11'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'prod_slide1__subtext', 'Компактный скоростной проход с распашными створками'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'prod_slide2__text', 'Скоростной проход ST‑02'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'prod_slide2__subtext', 'Скоростной проход с раздвижными створками'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'prod_slide3__text', 'Калитка WMD‑06'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'prod_slide3__subtext', 'Автоматическая калитка со створкой из закаленного стекла'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'prod_slide4__text', 'Ограждение ВН06'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'prod_slide4__subtext', 'Ограждение из закаленного стекла'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'sublist_prod_1', 'Универсальный скоростной проход с распашными створками'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'sublist_prod_2', 'Компактный скоростной проход с распашными створками'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'sublist_prod_3', 'Скоростной проход с раздвижными створками'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'sublist_prod_4', 'Калитка и ограждение'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'operating_voltage', 'напряжение питания'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'emergency_exit', 'аварийный выход'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'persons-min', 'человек в минуту'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'temperature_range', 'диапазон температур'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'ip_rating', 'степень защиты'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'watch_video', 'смотреть видео'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'overview', 'Ракурсы'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'access', 'Доступ'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'dimensions', 'Габариты'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'safety', 'Безопасность'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'design', 'Исполнение'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'integration', 'Интеграция'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'installation_of_additional', 'Установка дополнительного оборудования'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'dop_slide0__name', 'Биометрические считыватели'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'dop_slide1__name', 'Пирометр'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'dop_slide2__name', 'Терминал распознавания лиц Suprema'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'dop_slide3__name', 'Терминал распознавания лиц ZKTeco'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'dop_slide4__name', 'Штрихкод'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'dop_slide5__name', 'Картоприемник'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'dop_slide0__signature', 'Кронштейн для биометрических считывателей '), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'dop_slide1__signature', 'Пирометр'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'dop_slide2__signature', 'Кронштейны для терминалов распознавания лиц Suprema'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'dop_slide3__signature', 'Терминал распознавания лиц ZKTeco'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'dop_slide4__signature', 'Стойка для сканера штрихкода'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'dop_slide5__signature', 'Стойка с картоприемником'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, "gallery", 'Фотогалерея'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide1', 'Скоростные проходы ST‑01, офис компании Latécoère, Франция'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide2', 'Скоростные проходы ST‑01, кинотеатр Cinamon Kosmos, Эстония'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide3', 'Скоростные проходы ST‑01, бизнес-школа Emlyon, Франция'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide4', 'Скоростные проходы ST‑01, коворкинг SOK, Москва'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide5', ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide6', 'Скоростные проходы ST‑01 в составе системы контроля доступа PERCo, бизнес-центр West East, Одинцово, Московская область'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide7', ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide8', 'Скоростные проходы ST‑01, фитнес-клуб L\'Appart Fitness, Франция'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide9', 'Скоростные проходы ST‑01, офис компании Student Loans Company, Шотландия'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide10', 'Скоростные проходы ST‑01, офис компании PepsiCo, Мексика'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide11', 'Скоростные проходы ST‑01, жилой комплекс «Мосфильмовский», Москва'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide12', 'Скоростные проходы ST‑01 и калитки WMD‑06, Назарбаев Университет, Нур-Султан'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide13', 'Калитки WMD‑06, детский игровой комплекс KABONK, Нидерланды'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide14', 'Автоматическая калитка WMD‑06, музей железных дорог России, Санкт-Петербург'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'gallery_slide15', 'Автоматическая калитка WMD‑06, главный офис компании JYSK,Брабранд, Дания'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'about', 'Почему PERCo'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'about1', '  PERCo - ведущий российский производитель систем и оборудования безопасности.\nPERCo разрабатывает и выпускает: шлагбаумы, турникеты, замки, контроллеры и считыватели, системы контроля доступа.\n'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'about2', 'PERCo - ведущий российский производитель систем и оборудования безопасности\nPERCo разрабатывает и выпускает:\n'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'aboutli1', 'шлагбаумы'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'aboutli2', 'турникеты'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'aboutli3', 'замки'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'aboutli4', 'контроллеры и считыватели'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'aboutli5', 'системы контроля доступа'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'icon-about-1', '34 года работы на рынке'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'icon-about-2', 'Разветвленная дилерская сеть, сервисные центры во всех регионах России'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'icon-about-3', 'Продажи в 92 странах мира'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'icon-about-4', 'Склады готовой продукции в Москве, Санкт‑Петербурге, Пскове и ЕС'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'icon-about-5', '5-летний гарантийный срок на оборудование'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'icon-about-6', 'Техническая поддержка и бесплатное обучение в Учебном центре'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'headquarters', 'Главный офис PERCo'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'manufacturing_plant', 'Завод PERCo'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'contact_us', 'Напишите нам'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'contact_us_name', 'Имя*'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'contact_us_company', 'Компания'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'contact_us_phone', 'Телефон'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'contact_us_e-mail', 'Email*'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'contact_us_message', 'Сообщение'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'contact_us_privacy_policy1', ' Я прочитал(а) '), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'contact_us_privacy_policy2', ' политику конфиденциальности'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'contact_us_privacy_policy3', ' и соглас(на)ен на обработку данных '), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'contact_us_send', 'Отправить'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'contact', 'Контакты'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'mm_advantages', 'Преимущества'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'mm_products', 'Продукция'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'mm_gallery', 'Фотогалерея'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'mm_about', 'О компании'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'mm_write-us', 'Обратная связь'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'mm_contacts', 'Контакты'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'thanks', 'Спасибо!'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ru, 'message_sent', 'Ваше сообщение\nотправлено'), _ru),
  'en': (_en = {
    'page_title': 'Speed gates PERCo',
    'advantages': 'Advantages',
    'products': 'Products',
    'gallery': 'Gallery',
    'about_us': 'About Us',
    'speed_gates': 'Speed gates',
    'hero_slide1': 'Solution for business centers',
    'hero_slide2': 'Solution for office buildings',
    'hero_slide3': 'Solution for sports and entertainment facilities',
    'hero_slide4': 'Solution for educational institutions',
    'hero_slide5': 'Solution for transportation facilities',
    'hero_slide6': 'Solution for banks'
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, "advantages", 'Advantages'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'touch_free', 'Touch-free'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'safe_passage', 'Safe passage with children'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'passage_of_people', 'Passage of people with reduced mobility'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'safety_in_case', 'Safety in case of an emergency'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'convenient_luggage', 'Convenient luggage transportation'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, '5_years_of_warranty', '5 years of warranty'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'st-01_speed_gate', 'ST‑01 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'st-11_speed_gate', 'ST‑11 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'st-02_speed_gate', 'ST‑02 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'wmd-06_swing_gate', 'WMD‑06 Motorized swing gate, BH‑06 Tempered glass railing'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'prod_slide0__text', 'ST‑01 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'prod_slide0__subtext', 'Multi-purpose speed gate with swing panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'prod_slide1__text', 'ST‑11 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'prod_slide1__subtext', 'Compact speed gate with swing panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'prod_slide2__text', 'ST‑02 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'prod_slide2__subtext', 'Speed gate with sliding panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'prod_slide3__text', 'WMD‑06 Swing gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'prod_slide3__subtext', 'Motorized swing gate with tempered glass swing panel'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'prod_slide4__text', 'BH‑06 Railing'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'prod_slide4__subtext', 'Tempered glass railing'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'operating_voltage', 'operating voltage'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'emergency_exit', 'emergency exit'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'persons-min', 'persons/min'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'temperature_range', 'temperature range'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'ip_rating', 'IP rating'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'sublist_prod_1', 'Multi-purpose speed gate with swing panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'sublist_prod_2', 'Compact speed gate with swing panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'sublist_prod_3', 'Speed gate with sliding panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'sublist_prod_4', 'Swing gate and railing'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'watch_video', 'VIDEO'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'overview', 'Overview'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'access', 'Access'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'dimensions', 'Dimensions'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'safety', 'Safety'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'design', 'Design'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'integration', 'Integration'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'installation_of_additional', 'Installation of additional equipment'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'dop_slide0__name', 'Biometric readers'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'dop_slide1__name', 'Pyrometer'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'dop_slide2__name', 'Suprema face recognition terminal'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'dop_slide3__name', 'ZKTeco face recognition terminal'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'dop_slide4__name', 'Barcode'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'dop_slide5__name', 'Card capture reader'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'dop_slide0__signature', 'Bracket for biometric readers'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'dop_slide1__signature', 'Pyrometer'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'dop_slide2__signature', 'Bracket for Suprema face recognition terminal'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'dop_slide3__signature', 'ZKTeco face recognition terminal'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'dop_slide4__signature', 'The front panel with built-in card capture reader'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'dop_slide5__signature', 'The front panel with barcode scanner'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, "gallery", 'Gallery'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide1', 'ST‑01 Speed gates, Latécoère company office, France'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide2', 'ST‑01 Speed gates, The Cinamon Kosmos Cinema, Estonia'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide3', 'ST‑01 Speed gates, Emlyon Business School, France'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide4', 'ST‑01 Speed gates, SOK coworking space, Russia'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide5', ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide6', 'ST‑01 Speed gates, West-East business center, Russia'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide7', ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide8', 'ST‑01 Speed gates, L\'Appart Fitness, France'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide9', 'ST‑01 Speed gates, Student Loans company office, Scotland'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide10', 'ST‑01 Speed gates, PepsiCo company office, Mexico'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide11', 'ST‑01 Speed gates, Residential complex, Russia'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide12', 'ST‑01 Speed gates and WMD‑06 Swing gates, Nazarbaev University, Kazakhstan'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide13', 'WMD‑06 Swing gates, KABONK Amusement Park, the Netherlands'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide14', 'WMD‑06 Motorized swing gate, The Railway Museum, Russia'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'gallery_slide15', 'WMD‑06 Motorized swing gate, JYSK Headquarters, Denmark'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'about', 'About PERCo'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'about1', 'PERCo is a leading Russian manufacturer of security systems and equipment.\nPERCo develops and manufactures turnstiles, boom barriers, locks, controllers, readers, and access control systems.\n'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'about2', 'PERCo is a leading Russian manufacturer of security systems and equipment.\nPERCo develops:\n'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'aboutli1', 'boom barriers'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'aboutli2', 'turnstiles'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'aboutli3', 'locks'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'aboutli4', 'controllers and readers'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'aboutli5', 'access control systems'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'icon-about-1', '34 years in the security market'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'icon-about-2', 'Extensive dealer network'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'icon-about-3', 'Export to 92 countries worldwide'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'icon-about-4', 'Warehouses in Russia and EU (The Netherlands and Estonia)'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'icon-about-5', 'Warranty period - 5 years'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'icon-about-6', 'Technical support and training'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'headquarters', 'PERCo Headquarters'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'manufacturing_plant', 'PERCo Manufacturing plant'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'contact_us', 'Contact us'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'contact_us_name', 'Name*'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'contact_us_company', 'Company'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'contact_us_phone', 'Phone'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'contact_us_e-mail', 'E-mail*'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'contact_us_message', 'Message'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'contact_us_privacy_policy1', 'I have read the '), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'contact_us_privacy_policy2', 'Privacy Policy'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'contact_us_privacy_policy3', ' and agree to processing of my personal data.'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'contact_us_send', 'Send'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'contact', 'Contacts'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'mm_advantages', 'Advantages'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'mm_products', 'Products'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'mm_gallery', 'Gallery'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'mm_about', 'About Us'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'mm_write-us', 'Contact us'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'mm_contacts', 'Contacts'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'thanks', 'Thank you!'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_en, 'message_sent', 'Your message has been sent'), _en),
  'sg': (_sg = {
    'page_title': 'Speed gates PERCo',
    'advantages': 'Advantages',
    'products': 'Products',
    'gallery': 'Gallery',
    'about_us': 'About Us',
    'speed_gates': 'Speed gates',
    'hero_slide1': 'Solution for business centers',
    'hero_slide2': 'Solution for office buildings',
    'hero_slide3': 'Solution for sports and entertainment facilities',
    'hero_slide4': 'Solution for educational institutions',
    'hero_slide5': 'Solution for transportation facilities',
    'hero_slide6': 'Solution for banks'
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, "advantages", 'Advantages'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'touch_free', 'Touch-free'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'safe_passage', 'Safe passage with children'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'passage_of_people', 'Passage of people with reduced mobility'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'safety_in_case', 'Safety in case of an emergency'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'convenient_luggage', 'Convenient luggage transportation'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, '5_years_of_warranty', '5 years of warranty'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'st-01_speed_gate', 'ST‑01 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'st-11_speed_gate', 'ST‑11 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'st-02_speed_gate', 'ST‑02 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'wmd-06_swing_gate', 'WMD‑06 Motorized swing gate, BH‑06 Tempered glass railing'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'prod_slide0__text', 'ST‑01 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'prod_slide0__subtext', 'Multi-purpose speed gate with swing panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'prod_slide1__text', 'ST‑11 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'prod_slide1__subtext', 'Compact speed gate with swing panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'prod_slide2__text', 'ST‑02 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'prod_slide2__subtext', 'Speed gate with sliding panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'prod_slide3__text', 'WMD‑06 Swing gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'prod_slide3__subtext', 'Motorized swing gate with tempered glass swing panel'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'prod_slide4__text', 'BH‑06 Railing'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'prod_slide4__subtext', 'Tempered glass railing'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'operating_voltage', 'operating voltage'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'emergency_exit', 'emergency exit'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'persons-min', 'persons/min'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'temperature_range', 'temperature range'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'ip_rating', 'IP rating'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'sublist_prod_1', 'Multi-purpose speed gate with swing panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'sublist_prod_2', 'Compact speed gate with swing panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'sublist_prod_3', 'Speed gate with sliding panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'sublist_prod_4', 'Swing gate and railing'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'watch_video', 'VIDEO'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'overview', 'Overview'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'access', 'Access'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'dimensions', 'Dimensions'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'safety', 'Safety'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'design', 'Design'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'integration', 'Integration'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'installation_of_additional', 'Installation of additional equipment'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'dop_slide0__name', 'Biometric readers'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'dop_slide1__name', 'Pyrometer'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'dop_slide2__name', 'Suprema face recognition terminal'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'dop_slide3__name', 'ZKTeco face recognition terminal'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'dop_slide4__name', 'Barcode'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'dop_slide5__name', 'Card capture reader'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'dop_slide0__signature', 'Bracket for biometric readers'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'dop_slide1__signature', 'Pyrometer'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'dop_slide2__signature', 'Bracket for Suprema face recognition terminal'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'dop_slide3__signature', 'ZKTeco face recognition terminal'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'dop_slide4__signature', 'The front panel with built-in card capture reader'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'dop_slide5__signature', 'The front panel with barcode scanner'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, "gallery", 'Gallery'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide1', 'ST‑01 Speed gates, Latécoère company office, France'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide2', 'ST‑01 Speed gates, The Cinamon Kosmos Cinema, Estonia'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide3', 'ST‑01 Speed gates, Emlyon Business School, France'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide4', 'ST‑01 Speed gates, SOK coworking space'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide5', ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide6', 'ST‑01 Speed gates, West-East business center'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide7', ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide8', 'ST‑01 Speed gates, L\'Appart Fitness, France'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide9', 'ST‑01 Speed gates, Student Loans company office, Scotland'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide10', 'ST‑01 Speed gates, PepsiCo company office, Mexico'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide11', 'ST‑01 Speed gates, Residential complex'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide12', 'ST‑01 Speed gates and WMD‑06 Swing gates, Nazarbaev University, Kazakhstan'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide13', 'WMD‑06 Swing gates, KABONK Amusement Park, the Netherlands'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide14', 'WMD‑06 Motorized swing gate, The Railway Museum'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'gallery_slide15', 'WMD‑06 Motorized swing gate, JYSK Headquarters, Denmark'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'about', 'About PERCo'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'about1', 'PERCo is a leading Russian manufacturer of security systems and equipment.\nPERCo develops and manufactures turnstiles, boom barriers, locks, controllers, readers, and access control systems.\n'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'about2', 'PERCo is a leading Russian manufacturer of security systems and equipment.\nPERCo develops:\n'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'aboutli1', 'boom barriers'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'aboutli2', 'turnstiles'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'aboutli3', 'locks'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'aboutli4', 'controllers and readers'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'aboutli5', 'access control systems'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'icon-about-1', '34 years in the security market'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'icon-about-2', 'Extensive dealer network'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'icon-about-3', 'Export to 92 countries worldwide'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'icon-about-4', 'Warehouses in Russia and EU (The Netherlands and Estonia)'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'icon-about-5', 'Warranty period - 5 years'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'icon-about-6', 'Technical support and training'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'headquarters', 'PERCo Headquarters'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'manufacturing_plant', 'PERCo Manufacturing plant'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'contact_us', 'Contact us'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'contact_us_name', 'Name*'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'contact_us_company', 'Company'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'contact_us_phone', 'Phone'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'contact_us_e-mail', 'E-mail*'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'contact_us_message', 'Message'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'contact_us_privacy_policy1', 'I have read the '), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'contact_us_privacy_policy2', 'Privacy Policy'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'contact_us_privacy_policy3', ' and agree to processing of my personal data.'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'contact_us_send', 'Send'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'contact', 'Contacts'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'mm_advantages', 'Advantages'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'mm_products', 'Products'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'mm_gallery', 'Gallery'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'mm_about', 'About Us'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'mm_write-us', 'Contact us'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'mm_contacts', 'Contacts'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'thanks', 'Thank you!'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sg, 'message_sent', 'Your message has been sent'), _sg),
  'fr': (_fr = {
    'page_title': 'Couloirs de contrôle d’accès PERCo',
    'advantages': 'Avantages',
    'products': 'Produits',
    'gallery': 'Galerie photos',
    'about_us': 'La société',
    'speed_gates': 'Couloirs de contrôle d’accès',
    'hero_slide1': 'Solutions pour centres d’affaires',
    'hero_slide2': 'Solutions pour bureau et sièges sociaux',
    'hero_slide3': 'Solutions pour centres sportifs et culturels',
    'hero_slide4': 'Solutions pour établissements d’enseignement',
    'hero_slide5': 'Solutions pour bâtiments logistiques',
    'hero_slide6': 'Solution pour établissements bancaires'
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, "advantages", 'Avantages'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'touch_free', 'Solution sans contact'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'safe_passage', 'Passage sécurisé pour les enfants'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'passage_of_people', 'Passage pour personnes à mobilité réduite'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'safety_in_case', 'Sécurité en cas d’urgence'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'convenient_luggage', 'Transport des bagages aisé'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, '5_years_of_warranty', '5 années de garantie'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'st-01_speed_gate', 'Couloir rapide ST-01'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'st-11_speed_gate', 'Couloir rapide ST-11'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'st-02_speed_gate', 'Couloir rapide ST-02'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'wmd-06_swing_gate', 'Portillon pivotant motorisé WMD-06, garde-corps en verre trempé BH-06'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'prod_slide0__text', 'Couloir rapide ST-01'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'prod_slide0__subtext', 'Couloir rapide de contrôle d’accès à vantaux battants multiusage'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'prod_slide1__text', 'Couloir rapide ST-11'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'prod_slide1__subtext', 'Couloir rapide compact à vantaux battants'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'prod_slide2__text', 'Couloir rapide ST-02'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'prod_slide2__subtext', 'Couloir rapide compact à vantaux coulissants'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'prod_slide3__text', 'Portillon pivotant WMD-06'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'prod_slide3__subtext', 'Portillon pivotant motorisé avec vantail en verre trempé'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'prod_slide4__text', 'Garde-corps BH-06'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'prod_slide4__subtext', 'Garde-corps en verre trempé'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'operating_voltage', 'operating voltage'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'emergency_exit', 'emergency exit'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'persons-min', 'persons/min'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'temperature_range', 'temperature range'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'ip_rating', 'IP rating'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'sublist_prod_1', 'Couloir rapide de contrôle d’accès à vantaux battants multiusage'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'sublist_prod_2', 'Couloir rapide compact à vantaux battants'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'sublist_prod_3', 'Couloir rapide à vantaux coulissants'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'sublist_prod_4', 'Portillon pivotant et garde-corps'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'watch_video', 'VIDEO'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'overview', 'Vue d’ensemble'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'access', 'Accès'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'dimensions', 'Dimensions'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'safety', 'Sécurité'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'design', 'Design'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'integration', 'Integration'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'installation_of_additional', 'Installation d’équipements additionnels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'dop_slide0__name', 'Terminaux biométriques'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'dop_slide1__name', 'Capteur de temperature'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'dop_slide2__name', 'Terminal de reconnaissance faciale Suprema'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'dop_slide3__name', 'Terminal de reconnaissance faciale ZKTeco'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'dop_slide4__name', 'Code barre'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'dop_slide5__name', 'Lecteur de carte avec avaleur'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'dop_slide0__signature', 'Support pour lecteurs biométriques'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'dop_slide1__signature', 'Capteur de température'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'dop_slide2__signature', 'Support pour terminal de reconnaissance faciale Suprema'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'dop_slide3__signature', 'Terminal de reconnaissance faciale ZKTeco'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'dop_slide4__signature', 'Façade avec lecteur de carte et avaleur'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'dop_slide5__signature', 'Façade avec scanner de code barre'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, "gallery", 'Galerie photos'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide1', 'Couloirs rapides ST-01, siege social Latécoère, France'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide2', 'Couloirs rapides ST-01, cinéma The Cinamon Kosmos, Estonie'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide3', 'Couloirs rapides ST-01, Business School EmLyon, France'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide4', 'Couloirs rapides ST-01, espace de coworking, Russie'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide5', ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide6', 'Couloirs rapides ST-01, centre d’affaires West-East, Russie'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide7', ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide8', 'Couloirs rapides ST-01, L’Appart Fitness, France'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide9', 'Couloirs rapides ST-01, société de prêts aux étudiants, Ecosse'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide10', 'Couloirs rapides ST-01, bureaux société PepsiCo, Mexico'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide11', 'Couloirs rapides ST-01, complexe residential, Russie'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide12', 'Couloirs rapides ST-01 et portillons pivotants WMD-06, Université Nazarbaev, Kazakhstan'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide13', 'Portillons pivotants WMD-06, parc d’attractions, Hollande'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide14', 'Portillons pivotants WMD-06, Musée du rail, Russie'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'gallery_slide15', 'Portillons pivotants WMD-06, sige social JYSK, Danemark'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'about', 'A propos de PERCo'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'about1', 'PERCo est un leader russe de la fabrication d’équipements et systèmes de sécurité.\nPERco conçoit et fabrique des tourniquets, des barriers levantes, des serrures, des contrôleurs, des lecteurs et des systèmes de contrôle d’accès.\n'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'about2', 'PERCo est un leader russe de la fabrication d’équipements et systèmes de sécurité.\nPERco conçoit et fabrique:\n'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'aboutli1', 'des tourniquets'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'aboutli2', 'des barriers levantes'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'aboutli3', 'des serrures'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'aboutli4', 'des contrôleurs'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'aboutli5', 'des lecteurs et des systèmes de contrôle d’accès'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'icon-about-1', '34 années d’expérience sur le marché de la sécurité'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'icon-about-2', 'Un réseau de revendeurs étendu'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'icon-about-3', 'Des exportations dans 92 pays partout dans le monde'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'icon-about-4', 'Des stocks centraux en Russie et en Estonie'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'icon-about-5', '5 années de garantie'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'icon-about-6', 'Des formations et un support technique'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'headquarters', 'Siège social PERCo'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'manufacturing_plant', 'Usine PERCo'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'contact_us', 'Contactez-nous'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'contact_us_name', 'Nom*'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'contact_us_company', 'Société'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'contact_us_phone', 'Tél'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'contact_us_e-mail', 'E-mail*'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'contact_us_message', 'Message'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'contact_us_privacy_policy1', 'J’ai lu la '), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'contact_us_privacy_policy2', 'Politique de confidentialité'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'contact_us_privacy_policy3', ' et j’accepte le traitement de mes données personnelles.'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'contact_us_send', 'Envoyer'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'contact', 'Contacts'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'mm_advantages', 'Avantages'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'mm_products', 'Produits'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'mm_gallery', 'Galerie photos'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'mm_about', 'La société'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'mm_write-us', 'Contactez-nous'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'mm_contacts', 'Contacts'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'thanks', 'Merci !'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_fr, 'message_sent', 'Votre message a été envoyé'), _fr),
  'ng': (_ng = {
    'page_title': 'Speed gates PERCo',
    'advantages': 'Advantages',
    'products': 'Products',
    'gallery': 'Gallery',
    'about_us': 'About Us',
    'speed_gates': 'Speed gates',
    'hero_slide1': 'Solution for business centers',
    'hero_slide2': 'Solution for office buildings',
    'hero_slide3': 'Solution for sports and entertainment facilities',
    'hero_slide4': 'Solution for educational institutions',
    'hero_slide5': 'Solution for transportation facilities',
    'hero_slide6': 'Solution for banks'
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, "advantages", 'Advantages'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'touch_free', 'Touch-free'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'safe_passage', 'Safe passage with children'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'passage_of_people', 'Passage of people with reduced mobility'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'safety_in_case', 'Safety in case of an emergency'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'convenient_luggage', 'Convenient luggage transportation'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, '5_years_of_warranty', '5 years of warranty'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'st-01_speed_gate', 'ST‑01 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'st-11_speed_gate', 'ST‑11 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'st-02_speed_gate', 'ST‑02 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'wmd-06_swing_gate', 'WMD‑06 Motorized swing gate, BH‑06 Tempered glass railing'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'prod_slide0__text', 'ST‑01 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'prod_slide0__subtext', 'Multi-purpose speed gate with swing panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'prod_slide1__text', 'ST‑11 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'prod_slide1__subtext', 'Compact speed gate with swing panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'prod_slide2__text', 'ST‑02 Speed gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'prod_slide2__subtext', 'Speed gate with sliding panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'prod_slide3__text', 'WMD‑06 Swing gate'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'prod_slide3__subtext', 'Motorized swing gate with tempered glass swing panel'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'prod_slide4__text', 'BH‑06 Railing'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'prod_slide4__subtext', 'Tempered glass railing'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'operating_voltage', 'operating voltage'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'emergency_exit', 'emergency exit'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'persons-min', 'persons/min'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'temperature_range', 'temperature range'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'ip_rating', 'IP rating'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'sublist_prod_1', 'Multi-purpose speed gate with swing panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'sublist_prod_2', 'Compact speed gate with swing panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'sublist_prod_3', 'Speed gate with sliding panels'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'sublist_prod_4', 'Swing gate and railing'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'watch_video', 'VIDEO'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'overview', 'Overview'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'access', 'Access'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'dimensions', 'Dimensions'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'safety', 'Safety'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'design', 'Design'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'integration', 'Integration'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'installation_of_additional', 'Installation of additional equipment'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'dop_slide0__name', 'Biometric readers'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'dop_slide1__name', 'Pyrometer'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'dop_slide2__name', 'Suprema face recognition terminal'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'dop_slide3__name', 'ZKTeco face recognition terminal'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'dop_slide4__name', 'Barcode'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'dop_slide5__name', 'Card capture reader'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'dop_slide0__signature', 'Bracket for biometric readers'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'dop_slide1__signature', 'Pyrometer'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'dop_slide2__signature', 'Bracket for Suprema face recognition terminal'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'dop_slide3__signature', 'ZKTeco face recognition terminal'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'dop_slide4__signature', 'The front panel with built-in card capture reader'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'dop_slide5__signature', 'The front panel with barcode scanner'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, "gallery", 'Gallery'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide1', 'ST‑01 Speed gates, Latécoère company office, France'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide2', 'ST‑01 Speed gates, The Cinamon Kosmos Cinema, Estonia'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide3', 'ST‑01 Speed gates, Emlyon Business School, France'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide4', 'ST‑01 Speed gates, SOK coworking space, Russia'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide5', ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide6', 'ST‑01 Speed gates, West-East business center, Russia'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide7', ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide8', 'ST‑01 Speed gates, L\'Appart Fitness, France'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide9', 'ST‑01 Speed gates, Student Loans company office, Scotland'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide10', 'ST‑01 Speed gates, PepsiCo company office, Mexico'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide11', 'ST‑01 Speed gates, Residential complex, Russia'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide12', 'ST‑01 Speed gates and WMD‑06 Swing gates, Nazarbaev University, Kazakhstan'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide13', 'WMD‑06 Swing gates, KABONK Amusement Park, the Netherlands'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide14', 'WMD‑06 Motorized swing gate, The Railway Museum, Russia'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'gallery_slide15', 'WMD‑06 Motorized swing gate, JYSK Headquarters, Denmark'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'about', 'About PERCo'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'about1', 'PERCo is a leading Russian manufacturer of security systems and equipment.\nPERCo develops and manufactures turnstiles, boom barriers, locks, controllers, readers, and access control systems.\n'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'about2', 'PERCo is a leading Russian manufacturer of security systems and equipment.\nPERCo develops:\n'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'aboutli1', 'boom barriers'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'aboutli2', 'turnstiles'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'aboutli3', 'locks'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'aboutli4', 'controllers and readers'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'aboutli5', 'access control systems'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'icon-about-1', '34 years in the security market'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'icon-about-2', 'Extensive dealer network'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'icon-about-3', 'Export to 92 countries worldwide'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'icon-about-4', 'Warehouses in Russia and EU (The Netherlands and Estonia)'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'icon-about-5', 'Warranty period - 5 years'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'icon-about-6', 'Technical support and training'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'headquarters', 'PERCo Headquarters'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'manufacturing_plant', 'PERCo Manufacturing plant'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'contact_us', 'Contact us'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'contact_us_name', 'Name*'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'contact_us_company', 'Company'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'contact_us_phone', 'Phone'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'contact_us_e-mail', 'E-mail*'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'contact_us_message', 'Message'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'contact_us_privacy_policy1', 'I have read the '), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'contact_us_privacy_policy2', 'Privacy Policy'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'contact_us_privacy_policy3', ' and agree to processing of my personal data.'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'contact_us_send', 'Send'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'contact', 'Contacts'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'mm_advantages', 'Advantages'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'mm_products', 'Products'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'mm_gallery', 'Gallery'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'mm_about', 'About Us'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'mm_write-us', 'Contact us'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'mm_contacts', 'Contacts'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'thanks', 'Thank you!'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ng, 'message_sent', 'Your message has been sent'), _ng)
});

/***/ }),

/***/ "./src/js/components/social.js":
/*!*************************************!*\
  !*** ./src/js/components/social.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ninelines-sharing */ "./node_modules/ninelines-sharing/dist/ninelines-sharing.js");
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__);


if (document.querySelector('[data-social]')) {
  var list = document.querySelectorAll('[data-social]');
  Array.prototype.forEach.call(list, function (item) {
    item.addEventListener('click', function (e) {
      var social = e.currentTarget.dataset.social;
      var url = location.origin + location.pathname;
      ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default.a[social](url);
    });
  });
}

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");

var vars = {};
vars.$document = $(document);
vars.$window = $(window);
vars.$body = $(document.body);
vars.$html = $(document.documentElement);

vars.isMobile = function () {
  return innerWidth <= 1024;
};

vars.isIE = function () {
  return vars.$html.hasClass('is-browser-ie');
};

vars.isIOS = function () {
  return vars.$html.hasClass('is-os-ios');
};

vars.winWidth = window.innerWidth;
/**
* Очистить текст от спецсимволов
* @param {string} text Обязательное, строка для очистки
* @returns {string} Очищенная строка
*/

vars.clearText = function (text) {
  return text.trim().replace(/\s+/g, ' ');
};
/**
* Создать куки запись
* @param {string} name Обязательное, название записи
* @param {string} value Обязательное, значение записи
* @param {string} days Обязательное, время для жизни
*/


vars.setCookie = function (name, value, days) {
  var expires = '';

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=".concat(date.toUTCString());
  }

  document.cookie = "".concat(name, "=").concat(value || '').concat(expires, "; path=/");
};
/**
* Получить куки запись
* @param {string} name Обязательное, название записи
*/


vars.getCookie = function (name) {
  var nameEQ = "".concat(name, "=");
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
};
/**
* Удалить куки запись
* @param {string} name Обязательное, название записи
*/


vars.eraseCookie = function (name) {
  document.cookie = "".concat(name, "=; Max-Age=-99999999;");
};

var dataScrollLocks;
/**
* Блокирует скролл страницы
* Необходим для использования модальных окон
* @param {boolean} state Обязательное
* @param {string} element Обязательное, элемент которому нужно разрешить скролл
* @param {string} name Необязательное, ключ,
* чтобы была возможность открывать окно поверх другого окна
*/

vars.lockScroll = function (state, $element, name) {
  var element = $element.get(0) ? $element.get(0) : $element;

  if (typeof dataScrollLocks === 'undefined') {
    dataScrollLocks = new Set();
  }

  var scrollLocks = dataScrollLocks;

  if (state) {
    if (typeof name === 'string') {
      scrollLocks.add(name);
    }

    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableBodyScroll"](element, {
      reserveScrollBarGap: true
    });
    setImmediate(function () {
      vars.$html.addClass('is-lock-scroll');
    });
  } else {
    if (typeof name === 'string') {
      scrollLocks["delete"](name);
    }

    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableBodyScroll"](element);

    if (!scrollLocks.size) {
      body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["clearAllBodyScrollLocks"]();
      vars.$html.removeClass('is-lock-scroll');
    }
  }
};
/**
* Скролл до элемента
* @param {string} $container Обязательное, элемент к которому нужно скроллить
* @param {string|number} time Необязательное, время скролла
* @param {string|number} offset Необязательное, смещение скролла может быть + или -
*/


vars.scrollTo = function ($container) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  vars.$html.css('scroll-behavior', 'initial');
  $('html, body').stop().animate({
    scrollTop: "".concat($container.offset().top + parseInt(offset, 10))
  }, parseInt(time, 10));
  setTimeout(function () {
    vars.$html.css('scroll-behavior', '');
  }, parseInt(time, 10) + 100);
};

var scrollDiv;
/**
* Получить размер скроллбара если он есть
* @returns {number} размер скроллбара
*/

vars.getScrollbarWidth = function () {
  var width = window.innerWidth - vars.$html.get(0).clientWidth;

  if (width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
    return width;
  } // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it


  if (!scrollDiv) {
    scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
    document.body.appendChild(scrollDiv);
  }

  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};
/**
* Узнать есть доступен ли ховер
* @returns {boolean}
*/


function hasHoverSupport() {
  var hoverSupport;

  if (vars.isIE && vars.getScrollbarWidth()) {
    // On touch devices scrollbar width is usually 0
    hoverSupport = true;
  } else if (vars.isMobile()) {
    hoverSupport = false;
  } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
    hoverSupport = true;
  } else if (window.matchMedia('(hover: none)').matches) {
    hoverSupport = false;
  } else {
    hoverSupport = typeof vars.$html.ontouchstart === 'undefined';
  }

  return hoverSupport;
}

if (!hasHoverSupport()) {
  vars.$html.removeClass('has-hover').addClass('no-hover');
} else {
  vars.$html.removeClass('no-hover').addClass('has-hover');
}
/**
* Переопределение доступности ховера
*/


function resize() {
  setTimeout(function () {
    if (vars.winWidth !== window.innerWidth) {
      if (!hasHoverSupport()) {
        vars.$html.removeClass('has-hover').addClass('no-hover');
      } else {
        vars.$html.removeClass('no-hover').addClass('has-hover');
      }

      vars.winWidth = window.innerWidth;
    }
  }, 300);
}

vars.$window.on('resize', resize);
/* harmony default export */ __webpack_exports__["default"] = (vars);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _components_social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/social */ "./src/js/components/social.js");
/* harmony import */ var _components_langs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/langs */ "./src/js/components/langs.js");
/* harmony import */ var _vendor_ie_fix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor/ie-fix */ "./src/js/vendor/ie-fix.js");
/* harmony import */ var _vendor_vh_fix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor/vh-fix */ "./src/js/vendor/vh-fix.js");
/* harmony import */ var _modules_actualYear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/actualYear */ "./src/js/modules/actualYear.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _modules_lazyLoading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/lazyLoading */ "./src/js/modules/lazyLoading.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! in-view */ "./node_modules/in-view/dist/in-view.min.js");
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(in_view__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var mmenu_light__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! mmenu-light */ "./node_modules/mmenu-light/src/mmenu-light.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_21__);


















 // import SplitText from './modules/splitText';





Object(_vendor_ie_fix__WEBPACK_IMPORTED_MODULE_6__["ieFix"])();
Object(_vendor_vh_fix__WEBPACK_IMPORTED_MODULE_7__["vhFix"])();
Object(_modules_actualYear__WEBPACK_IMPORTED_MODULE_8__["actualYear"])();
_components_header__WEBPACK_IMPORTED_MODULE_9__["default"].init();
_modules_lazyLoading__WEBPACK_IMPORTED_MODULE_10__["default"].init();
swiper__WEBPACK_IMPORTED_MODULE_13__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_13__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_13__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_13__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_13__["EffectFade"], swiper__WEBPACK_IMPORTED_MODULE_13__["EffectCube"], swiper__WEBPACK_IMPORTED_MODULE_13__["Mousewheel"], swiper__WEBPACK_IMPORTED_MODULE_13__["Lazy"], swiper__WEBPACK_IMPORTED_MODULE_13__["Controller"]]);
gsap__WEBPACK_IMPORTED_MODULE_15__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_16__["ScrollTrigger"], gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_17__["ScrollToPlugin"]);
var resolution_s = "320x182";
var resolution_lg = "586x330";
var resolution_wide = "990x560";
var intViewportHeight = window.innerHeight;
var intViewportWidth = window.innerWidth;
var prohodDone = false;

function InsertCorrectVideo(_x, _x2, _x3) {
  return _InsertCorrectVideo.apply(this, arguments);
}

function _InsertCorrectVideo() {
  _InsertCorrectVideo = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(videoOptions, resolution, curr_lang) {
    var videos, videosList, promises, responsePromises;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            videos = document.getElementsByTagName("video");
            videosList = Array.prototype.slice.call(videos);
            promises = [];
            responsePromises = [];
            videosList.forEach(function (value) {
              videoOptions.forEach(function (id) {
                var model = id[1][0];
                var video_name = id[1][1];

                if (value.id == "index-".concat(id[0])) {
                  var video = document.getElementById(value.id);
                  var vidSource = document.createElement('source');

                  if (video.canPlayType('video/mp4').length > 0) {
                    var typeVid = 'video/mp4; codecs="avc1.4D401E, mp4a.40.2"';
                    var pathToVid = "https://speedgate.perco.ru/video/".concat(curr_lang, "/").concat(model, "/").concat(resolution, "/").concat(video_name, ".mp4");
                  } else if (video.canPlayType('video/webm').length > 0) {
                    var typeVid = 'video/webm';
                    var pathToVid = "https://speedgate.perco.ru/video/".concat(curr_lang, "/").concat(resolution, "/webm/").concat(video_name, ".webm");
                  } else {
                    var pathToVid = "";
                  }

                  if (video.getElementsByTagName('source').length > 0) {
                    var sourceEl = video.getElementsByTagName("source"),
                        index;

                    for (index = sourceEl.length - 1; index >= 0; index--) {
                      sourceEl[index].parentNode.removeChild(sourceEl[index]);
                    }

                    ;
                  }

                  vidSource.setAttribute('data-src', pathToVid);
                  vidSource.setAttribute('type', typeVid);
                  video.appendChild(vidSource);
                  promises.push(video);
                }
              });
            });
            _context2.next = 7;
            return Promise.all(promises).then(function () {// console.log('The Promise.all fulfilled for videos');
              // for (let index = 0; index < promises.length; index++) {
              //     console.log(promises[index].id)
              // }
            })["catch"](function (error) {
              console.log('The Promise.all rejected');
              console.log(error); // console.log('Use the Play button instead.');
              // var playButton = document.querySelector('#play');
            });

          case 7:
            responsePromises = _context2.sent;

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _InsertCorrectVideo.apply(this, arguments);
}

function startPlayback(video) {
  return video.play();
}

function asyncPlay(_x4, _x5) {
  return _asyncPlay.apply(this, arguments);
}

function _asyncPlay() {
  _asyncPlay = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(video, swiperCubeActiveIndex) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.info('[info] > Try media - ' + video.id); // проверка на активность слайда в котором запускается видео

            if (video.id[6] == swiperCubeActiveIndex) {
              startPlayback(video).then(function () {
                function removeZ() {
                  $(".poster-custom-resize").removeClass("poster-z");
                }

                setTimeout(removeZ, 500); // проходимся по всем слайдам и добавляем класс для удаления постера именно в конце анимации

                $(".remove-poster").removeClass("remove-poster");
                $(".slider-cube > .swiper-wrapper > .swiper-slide-active").addClass("remove-poster");

                function addZ() {
                  $(".slider-cube > .swiper-wrapper > .swiper-slide.swiper-slide-active .poster-custom-resize").addClass("poster-z");
                }

                setTimeout(addZ, 500);

                if (document.getElementById(video.id).nextElementSibling.classList.contains("reveal-loader")) {
                  document.getElementById(video.id).nextElementSibling.classList.remove("reveal-loader");
                }

                ;
              })["catch"](function (error) {
                console.log('The play() Promise rejected!');
                console.log(error); // document.getElementById(video.id).nextElementSibling.classList.add("reveal-loader");
                // doRecoverOnError(video, swiperCubeActiveIndex, 1500);
              });
            }

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _asyncPlay.apply(this, arguments);
}

function InsertTitlesInTime(sectioncube, currVid, timeframes) {
  currVid.addEventListener('timeupdate', function () {
    var time = timeframes.find(function (i) {
      return i.time * 10 <= Math.floor(Math.round(currVid.currentTime * 10)) && !i.triggered;
    });

    if (time) {
      time.triggered = true;

      if (currVid.id == "index-" + sectioncube + "_" + time.slisevid) {
        window.dispatchEvent(new CustomEvent('VideoTimelapse', {
          detail: time
        }));
      }
    }
  });
  window.addEventListener('VideoTimelapse', function (e) {
    if (document.querySelector(".titles-index-" + sectioncube + "_" + e.detail.slisevid)) {
      document.querySelector(".titles-index-" + sectioncube + "_" + e.detail.slisevid).innerHTML = e.detail.textContent;
    }
  });
  currVid.addEventListener('seeked', function () {
    return timeframes.forEach(function (i) {
      i.triggered = false;
    });
  });
}

function anchorPhotoGallery() {
  var galleryToScrollElHeight = document.querySelector(".slider-gallery").offsetHeight / 2;
  var galleryConst = intViewportHeight / 2 - galleryToScrollElHeight + 90;
  document.getElementById("gallery").style.top = "-" + galleryConst + "px";
}

function positionArrowsCube() {
  var cubeWrapVideoHeight = document.querySelector(".js-sliderdemo-0").offsetHeight / 2;
  var cubeWrapVideoOffset = document.querySelector(".js-sliderdemo-0").offsetTop; // var cubeBtnHeight = document.querySelector(".header-demo__video-btn").offsetHeight / 2;
  // var cubeBtnOffset = document.querySelector(".header-demo__video-btn").offsetTop;

  var cubeProdSection = document.getElementById("prod-section-0");
  var styleProdSection = cubeProdSection.currentStyle || window.getComputedStyle(cubeProdSection);
  styleProdSection = styleProdSection.paddingTop;
  styleProdSection = parseInt(styleProdSection.replace('px', ''), 10);

  if (intViewportWidth > 1024) {
    // для десктопа 
    document.querySelector(".slider-cube-nav").style.top = cubeWrapVideoHeight + cubeWrapVideoOffset + styleProdSection + "px";
  } else {// для планшета
    // document.querySelector(".slider-cube-nav").style.top = (cubeWrapVideoHeight + cubeWrapVideoOffset + styleProdSection) + "21px";
    // console.log("cubeBtnHeight: " + cubeBtnHeight + " cubeBtnOffset: " + cubeBtnOffset + " styleProdSection: " + styleProdSection);
    // document.querySelector(".slider-cube-nav").style.top = (cubeBtnHeight + cubeBtnOffset + styleProdSection) + "px";
  }
}

function positionArrowsGallery() {
  if (intViewportWidth < 480) {
    var galleryButtonsNext = document.querySelector(".slider-gallery .swiper-button-next");
    var galleryButtonsPrev = document.querySelector(".slider-gallery .swiper-button-prev");
    var gallerySlideElHeight = document.querySelector(".slider-gallery .swiper-slide picture").offsetHeight / 2 - galleryButtonsPrev.offsetHeight / 2;
    galleryButtonsNext.style.top = gallerySlideElHeight + "px";
    galleryButtonsPrev.style.top = gallerySlideElHeight + "px";
  }
}

function showHidedSections() {
  if (!$(".site").hasClass("add-sections")) {
    $(".site").addClass("add-sections");
    prohodDone = true;
    anchorPhotoGallery();
    aos__WEBPACK_IMPORTED_MODULE_19___default.a.refresh();
  }
}

function hideHidedSections() {
  if ($(".site").hasClass("add-sections")) {
    $(".site").removeClass("add-sections");
    anchorPhotoGallery();
    aos__WEBPACK_IMPORTED_MODULE_19___default.a.refresh();
  }
}

function smoothBulletsScrollLeft(activeBullet, bulletsWrap, intViewportWidth) {
  var posX = activeBullet.offsetWidth / 2 + activeBullet.offsetLeft - intViewportWidth / 2;
  bulletsWrap.scroll({
    left: posX,
    behavior: 'smooth'
  });
}

var isCookie = getCookie("firstVisit");

function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options) {
  options = options || {};
  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }

  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);
  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];

    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

window.onload = function () {
  var inputsR = document.querySelectorAll(".js-input-require");
  var inptName = document.getElementById("js-input-name");
  var inptEmail = document.getElementById("js-input-email");
  var inptCheck = document.getElementById("js-input-check");

  if ('actualYear' in document.getElementById("data-actual-year").dataset) {
    var work_years = parseInt(document.getElementById("data-actual-year").textContent) - 1988;
    var work_years_el = document.createElement("p");
    work_years_el.classList.add("work_years");
    var node1 = document.createTextNode(work_years);
    work_years_el.appendChild(node1);
    console.log(work_years_el);
    document.querySelector(".icon-about-1").appendChild(work_years_el);
  }

  var workCapcha = true;
  var verifyInputs;
  inputsR.forEach(function (input) {
    input.oninput = function () {
      if (checkValidnost(inptName) && checkValidnost(inptEmail) && checkValidnost(inptCheck)) {
        verifyInputs = true;
      } else {
        verifyInputs = false;
      }

      checkValidAndCapcha(verifyInputs, workCapcha);
    };
  }); // let curr_lang = "ru";
  // let curr_lang = "en";
  // console.log(curr_lang);
  // порядок подгрузки видео

  var refactorProdMap = [['0_0', ['st01', '1']], ['1_0', ['st11', '1']], ['2_0', ['st02', '1']], ['3_0', ['wmd06_bh06', '1']], ['0_1', ['st01', '2']], ['0_2', ['st01', '3']], ['0_3', ['st01', '4']], ['0_4', ['st01', '5']], ['0_5', ['st01', '6']], ['1_1', ['st11', '2']], ['1_2', ['st11', '3']], ['1_3', ['st11', '4']], ['1_4', ['st11', '5']], ['1_5', ['st11', '6']], ['2_1', ['st02', '2']], ['2_2', ['st02', '3']], ['2_3', ['st02', '4']], ['2_4', ['st02', '5']], ['3_1', ['wmd06_bh06', '2']], ['3_2', ['wmd06_bh06', '3']], ['3_3', ['wmd06_bh06', '4']]];
  $(".init-loader").hide(); // let tl = gsap.timeline();
  // if (document.querySelector(".hero").offsetHeight > intViewportHeight) {
  //     tl.from(".hero", { height: "100vh" })
  //         .to(".init-loader", { opacity: 0, duration: .7 })
  //         .from(".nav-container__link", { opacity: 0, stagger: .2 })
  //         .from(".slider-hero .swiper-pagination", { opacity: 0 })
  //         .to(".init-loader", { top: "-1000%", duration: .5 })
  //         .to(".hero", { height: "auto" })
  // } else {
  //     tl.to(".init-loader", { opacity: 0, duration: .7 })
  //         .from(".nav-container__link", { opacity: 0, stagger: .2 })
  //         .from(".slider-hero .swiper-pagination", { opacity: 0 })
  //         .to(".init-loader", { top: "-1000%", duration: .5 })
  // }

  var temp_lang = curr_lang;

  if (curr_lang == "sg" || curr_lang == "ng") {
    // склеиваем sg/ng и en видео
    temp_lang = "en";
  } else if (curr_lang == "fr") {
    temp_lang = "fr";
  }

  ;

  if (intViewportWidth < 480) {
    InsertCorrectVideo(refactorProdMap, resolution_s, temp_lang);
  } else if (intViewportWidth > 480 && intViewportWidth < 2000) {
    InsertCorrectVideo(refactorProdMap, resolution_lg, temp_lang);
  } else if (intViewportWidth > 2000) {
    InsertCorrectVideo(refactorProdMap, resolution_wide, temp_lang);
  }

  var $sliderVideosAll = $("#products-cube .swiper-slide video");
  $sliderVideosAll.each(function (index) {
    var _this = this;

    this.addEventListener('play', function (event) {
      var elActiveTitlesSide = document.querySelector("#prod-section-" + swiperCube.realIndex + " > div");
      elActiveTitlesSide.setAttribute("id", "showTitlesTo_" + event.target.id);
      console.log("show titles to vid: " + event.target.id); // setTimeout(function() {
      //     event.target.pause();
      // }, 3000);
    });
    this.addEventListener('loadstart', function (event) {
      console.log("loadstart vid: " + event.target.id);
      _this.currentTime = 0.1; // скипаем чёрные экраны на 0.0001 сек видео
    });
    this.addEventListener('pause', function (event) {
      console.log("pause vid: " + event.target.id);
      _this.currentTime = 0.1; // скипаем чёрные экраны на 0.0001 сек видео
    });
  });
  aos__WEBPACK_IMPORTED_MODULE_19___default.a.init({
    once: true
  });
  history.pushState('', document.title, window.location.pathname + window.location.search);

  if (document.getElementsByTagName("body").length > 0) {
    document.getElementsByTagName("body")[0].classList.add("init-body"); // let promise1 = new Promise(resolve => {
    //     setTimeout(resolve, 2500, 'one');
    // });
    // let promise2 = new Promise(resolve => {
    //     window.addEventListener('scroll', () => {
    //         if (window.pageYOffset > 0) {
    //             resolve;
    //         }
    //     });
    // });
    // Promise.race([promise1, promise2]).then(function(value) {
    //     var sectionToShow = document.getElementById("advantages");
    //     sectionToShow.classList.add('show-to-AOS-animate');
    // }, function(reason) {
    //     console.log(reason);
    // });
  }

  ;
  _fancyapps_ui__WEBPACK_IMPORTED_MODULE_14__["Fancybox"].bind("[data-fancybox-plyr]", {
    mainClass: 'fullVid',
    on: {
      done: function done(fancybox, slide) {
        var $sliderVideos = $("#prod-section-" + swiperCube.realIndex + " video");
        $sliderVideos.each(function () {
          if (!this.paused) {
            this.pause();
          }
        });
      },
      closing: function closing(fancybox, slide) {
        if (swiperCube.activeIndex == 0) {
          var currentVideo = swiper3prod0.slides[swiper3prod0.activeIndex].children[0].children[0];
        } else if (swiperCube.activeIndex == 1) {
          var currentVideo = swiper3prod1.slides[swiper3prod1.activeIndex].children[0].children[0];
        } else if (swiperCube.activeIndex == 2) {
          var currentVideo = swiper3prod2.slides[swiper3prod2.activeIndex].children[0].children[0];
        } else if (swiperCube.activeIndex == 3) {
          var currentVideo = swiper3prod3.slides[swiper3prod3.activeIndex].children[0].children[0];
        } else {}

        asyncPlay(currentVideo, swiperCube.realIndex);
      }
    }
  });
  var type_speed = 35;
  in_view__WEBPACK_IMPORTED_MODULE_12___default()('#js-dynamic-text-1').once('enter', function (el) {
    el.innerHTML = "";
    new typed_js__WEBPACK_IMPORTED_MODULE_11___default.a(el, {
      strings: [_components_langs__WEBPACK_IMPORTED_MODULE_5__["default"][curr_lang]["speed_gates"]],
      typeSpeed: type_speed,
      showCursor: false,
      onBegin: function onBegin(self) {
        el.parentNode.classList.add("visible");
      },
      onComplete: function onComplete(self) {
        el.classList.add("lang");
      }
    });
    positionArrowsCube();
  });
  in_view__WEBPACK_IMPORTED_MODULE_12___default()('#js-dynamic-text-2').once('enter', function (el) {
    el.innerHTML = "";
    new typed_js__WEBPACK_IMPORTED_MODULE_11___default.a(el, {
      strings: [_components_langs__WEBPACK_IMPORTED_MODULE_5__["default"][curr_lang]["advantages"]],
      typeSpeed: type_speed,
      showCursor: false,
      onBegin: function onBegin(self) {
        el.parentNode.classList.add("visible");
      }
    });
    positionArrowsCube();
  });
  in_view__WEBPACK_IMPORTED_MODULE_12___default()('#js-dynamic-text-3').once('enter', function (el) {
    el.innerHTML = "";
    new typed_js__WEBPACK_IMPORTED_MODULE_11___default.a(el, {
      strings: [_components_langs__WEBPACK_IMPORTED_MODULE_5__["default"][curr_lang]["st-01_speed_gate"]],
      typeSpeed: type_speed,
      showCursor: false,
      onBegin: function onBegin(self) {
        el.parentNode.classList.add("visible");
      },
      onComplete: function onComplete() {
        // клёвый костыль что бы не накладывался inview + typed на подставленный текст при прокрутке из подменю товаров 
        var dynamicText = document.getElementById("js-dynamic-text-3");
        var dynamicTextDouble = document.getElementById("js-dynamic-text-3-double");
        dynamicText.classList.add("hide");
        dynamicTextDouble.classList.remove("hide");
      }
    });
  });
  in_view__WEBPACK_IMPORTED_MODULE_12___default()('#js-dynamic-text-4').once('enter', function (el) {
    el.innerHTML = "";
    new typed_js__WEBPACK_IMPORTED_MODULE_11___default.a(el, {
      strings: [_components_langs__WEBPACK_IMPORTED_MODULE_5__["default"][curr_lang]["installation_of_additional"]],
      typeSpeed: type_speed,
      showCursor: false,
      onBegin: function onBegin(self) {
        swiperDop.init();
        el.parentNode.classList.add("visible");
      },
      onComplete: function onComplete() {
        $('.swiper-dop-arrows-container').css("top", $(".dop-prod__image").height() / 2); // var buttonsToAnimate = document.querySelectorAll(".centered-v-container .swiper-pagination-btn"); 
        // recourseAnimate(buttonsToAnimate, 0);
      }
    }); // setTimeout(() => swiperDop.autoplay.start(), 3000);

    positionArrowsCube();
  });
  in_view__WEBPACK_IMPORTED_MODULE_12___default()('.slider-dop__wrap').once('enter', function (el) {
    swiperDop.autoplay.start();
    document.querySelector(".centered-v-container").classList.add("init-anim-ended");
  });
  in_view__WEBPACK_IMPORTED_MODULE_12___default()('#js-dynamic-text-5').once('enter', function (el) {
    el.innerHTML = "";
    new typed_js__WEBPACK_IMPORTED_MODULE_11___default.a(el, {
      strings: [_components_langs__WEBPACK_IMPORTED_MODULE_5__["default"][curr_lang]["gallery"]],
      typeSpeed: type_speed,
      showCursor: false,
      onBegin: function onBegin(self) {
        el.parentNode.classList.add("visible");
      }
    });
    swiper4.init();
    swiper4.on('afterInit', function () {
      // якорь по центру фотогалереи
      anchorPhotoGallery();
    });
    swiper4.autoplay.stop();
  });
  in_view__WEBPACK_IMPORTED_MODULE_12___default()('#js-dynamic-text-6').once('enter', function (el) {
    el.innerHTML = "";
    new typed_js__WEBPACK_IMPORTED_MODULE_11___default.a(el, {
      strings: [_components_langs__WEBPACK_IMPORTED_MODULE_5__["default"][curr_lang]["about"]],
      typeSpeed: type_speed,
      showCursor: false,
      onBegin: function onBegin(self) {
        el.parentNode.classList.add("visible");
      }
    });
  });
  in_view__WEBPACK_IMPORTED_MODULE_12___default()('#js-dynamic-text-7').once('enter', function (el) {
    el.innerHTML = "";
    new typed_js__WEBPACK_IMPORTED_MODULE_11___default.a(el, {
      strings: [_components_langs__WEBPACK_IMPORTED_MODULE_5__["default"][curr_lang]["contact_us"]],
      typeSpeed: type_speed,
      showCursor: false,
      onBegin: function onBegin(self) {
        el.parentNode.classList.add("visible");
      }
    });
  }); // Скоростной проход ST‑01

  in_view__WEBPACK_IMPORTED_MODULE_12___default()('#js-dynamic-prod1').once('enter', function (el) {
    document.getElementById("js-dynamic-prod1").innerHTML = "";
    new typed_js__WEBPACK_IMPORTED_MODULE_11___default.a(el, {
      strings: [_components_langs__WEBPACK_IMPORTED_MODULE_5__["default"][curr_lang]["st-01_speed_gate"]],
      typeSpeed: type_speed,
      showCursor: false,
      onBegin: function onBegin(self) {
        el.parentNode.classList.add("visible");
      },
      onComplete: function onComplete(self) {
        // убираем постеры
        $(".slider-cube > .swiper-wrapper > .swiper-slide-active").addClass("remove-poster");

        function addZ() {
          $(".slider-cube > .swiper-wrapper > .swiper-slide.swiper-slide-active .poster-custom-resize").addClass("poster-z");
        }

        setTimeout(addZ, 500);
      }
    });
  });
  in_view__WEBPACK_IMPORTED_MODULE_12___default()('.slider-gallery').once('enter', function (el) {
    swiper4.autoplay.start(); // якорь по центру фотогалереи

    anchorPhotoGallery();
    positionArrowsGallery();
  });

  var ShowScrollToTop = function ShowScrollToTop(btnScrollTop) {
    var offsetToTrigger = document.getElementById("advantages").offsetTop + 250;
    window.addEventListener('scroll', function () {
      var shouldBeVisible = window.pageYOffset + intViewportHeight > offsetToTrigger;
      btnScrollTop.classList.toggle('visible', shouldBeVisible);

      if (window.location.href.split('#').length > 1) {
        try {
          history.replaceState(window.location.href.split('#')[0], 'Заголовок', window.location.href.split('#')[0]);
        } catch (z) {
          console.log(z);
        }
      }
    });
  };

  ShowScrollToTop(document.getElementById('scroll-top'));

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  if (window.pageYOffset > 0) {
    var $hash = $(this).attr("href");
    window.scrollTo({
      top: 0
    });
    window.location.hash = '#';
    window.location.href.replace('#', '');
    $("html, body").animate({
      scrollTop: 0
    }, 0, function () {
      window.location.hash = "";
    });
  }

  if (intViewportHeight < 851) {
    console.log("test height < 851");
    window.dispatchEvent(new Event('resize'));
  } else {
    console.log("test height > 851");
  }

  var swiperCubeOptions = {
    loop: false,
    slidesPerView: 1,
    speed: 300,
    allowTouchMove: false,
    navigation: {
      nextEl: '.slider-cube__arrows .swiper-button-next',
      prevEl: '.slider-cube__arrows .swiper-button-prev'
    },
    pagination: {
      el: ".slider-cube-nav .swiper-pagination",
      clickable: true
    },
    spaceBetween: 140,
    // breakpoints: {
    //     1024: {
    //         spaceBetween: 140
    //     }
    // },
    on: {
      init: function init() {
        $('.poster-custom').addClass("poster-custom-resize");
        $('.poster-custom-resize').css("height", $(".slider-cube video").height());
      },
      // afterInit: function() {
      // },
      slideChangeTransitionStart: function slideChangeTransitionStart() {
        $('.poster-custom-resize').css("height", $(".slider-cube video").height());

        if (this.activeIndex == 0) {
          swiper2.slideTo(1);
        } else if (this.activeIndex == 1) {
          swiper2.slideTo(2);
        } else if (this.activeIndex == 2) {
          swiper2.slideTo(3);
        } else if (this.activeIndex == 3) {
          swiper2.slideTo(4);
        }

        if (this.activeIndex == 0) {
          swiper3prod0.slideTo(0);
          var prevVid = document.getElementById("prod-section-0").getElementsByTagName("video")[swiper3prod0.activeIndex];
        } else if (this.activeIndex == 1) {
          swiper3prod1.slideTo(0);
          var prevVid = document.getElementById("prod-section-1").getElementsByTagName("video")[swiper3prod1.activeIndex];
        } else if (this.activeIndex == 2) {
          swiper3prod2.slideTo(0);
          var prevVid = document.getElementById("prod-section-2").getElementsByTagName("video")[swiper3prod2.activeIndex];
        } else if (this.activeIndex == 3) {
          swiper3prod3.slideTo(0);
          var prevVid = document.getElementById("prod-section-3").getElementsByTagName("video")[swiper3prod3.activeIndex];
        }

        prevVid.pause();
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        if (this.activeIndex == 0) {
          var targetVid = document.getElementById("prod-section-0").getElementsByTagName("video")[0];
        } else if (this.activeIndex == 1) {
          var targetVid = document.getElementById("prod-section-1").getElementsByTagName("video")[0];
        } else if (this.activeIndex == 2) {
          var targetVid = document.getElementById("prod-section-2").getElementsByTagName("video")[0];
        } else if (this.activeIndex == 3) {
          var targetVid = document.getElementById("prod-section-3").getElementsByTagName("video")[0];
        } // if (intViewportWidth > 640) {


        asyncPlay(targetVid, this.activeIndex); // }
      }
    }
  };
  var swiperCube = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"](".slider-cube", swiperCubeOptions);
  var swiper2 = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"](".slider-prod", {
    speed: 300,
    preloadImages: false,
    lazy: {
      loadPrevNext: true
    },
    loop: true,
    pagination: {
      el: "#slider-prod__pagination.swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: '.slider-prod__main-arrows .swiper-button-next',
      prevEl: '.slider-prod__main-arrows .swiper-button-prev'
    },
    on: {
      init: function init() {
        var dynamicTextDouble = document.getElementById("js-dynamic-text-3-double");
        var dynamicTextReserve = document.getElementById("js-dynamic-reserve");
        var dynamicSubtext = document.getElementById("js-dynamic-subtext-3");
        dynamicTextDouble.innerHTML = this.slides[this.activeIndex].querySelector(".text").innerHTML;
        dynamicTextDouble.setAttribute("translate", this.slides[this.activeIndex].querySelector(".text").attributes["translate"].value);
        dynamicTextReserve.innerHTML = this.slides[this.activeIndex].querySelector(".text").innerHTML;
        dynamicTextReserve.setAttribute("translate", this.slides[this.activeIndex].querySelector(".text").attributes["translate"].value);
        dynamicSubtext.innerHTML = this.slides[this.activeIndex].querySelector(".subtext").innerHTML;
        dynamicSubtext.setAttribute("translate", this.slides[this.activeIndex].querySelector(".subtext").attributes["translate"].value);
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        var dynamicTextDouble = document.getElementById("js-dynamic-text-3-double");
        var dynamicTextReserve = document.getElementById("js-dynamic-reserve");
        var dynamicSubtext = document.getElementById("js-dynamic-subtext-3");
        dynamicTextDouble.innerHTML = this.slides[this.activeIndex].querySelector(".text").innerHTML;
        dynamicTextDouble.setAttribute("translate", this.slides[this.activeIndex].querySelector(".text").attributes["translate"].value);
        dynamicTextReserve.innerHTML = this.slides[this.activeIndex].querySelector(".text").innerHTML;
        dynamicTextReserve.setAttribute("translate", this.slides[this.activeIndex].querySelector(".text").attributes["translate"].value);
        dynamicSubtext.innerHTML = this.slides[this.activeIndex].querySelector(".subtext").innerHTML;
        dynamicSubtext.setAttribute("translate", this.slides[this.activeIndex].querySelector(".subtext").attributes["translate"].value);
        var $sliderCharsRefactor = $(".characteristics");
        $sliderCharsRefactor.removeClass("prodIcons-index-0");
        $sliderCharsRefactor.removeClass("prodIcons-index-1");
        $sliderCharsRefactor.removeClass("prodIcons-index-2");
        $sliderCharsRefactor.removeClass("prodIcons-index-3");
        $sliderCharsRefactor.removeClass("prodIcons-index-4");
        $sliderCharsRefactor.removeClass("prodIcons-index-5");
        $sliderCharsRefactor.removeClass("prodIcons-index-6"); // $sliderCharsRefactor.removeClass("prodIcons-index-" + this.slides[this.previousIndex].dataset.swiperSlideIndex);

        $sliderCharsRefactor.addClass("prodIcons-index-" + this.slides[this.activeIndex].dataset.swiperSlideIndex);
      }
    }
  });
  swiper2.on('slideChangeTransitionStart', function () {
    if (this.activeIndex == 1 || this.activeIndex == 6) {
      swiperCube.slideTo(0);
    } else if (this.activeIndex == 2) {
      swiperCube.slideTo(1);
    } else if (this.activeIndex == 3) {
      swiperCube.slideTo(2);
    } else if (this.activeIndex == 4 || this.activeIndex == 5) {
      swiperCube.slideTo(3);
    }
  }); // swiper2.controller.control = [swiperCube];

  var swiperDop = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"](".slider-dop", {
    init: false,
    preloadImages: false,
    lazy: {
      loadPrevNext: true
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    // autoplay: false,
    autoplay: {
      disableOnInteraction: false,
      delay: 2000
    },
    loop: true,
    slidesPerView: 1,
    speed: 500,
    pagination: {
      el: '.slider-dop__wrap + .swiper-pagination-container .swiper-pagination',
      type: 'custom',
      clickable: true,
      renderCustom: function renderCustom(swiper, current, total) {
        var namesDop = [];
        $(".js-sliderdemo-dop .swiper-slide .name").each(function (i) {
          namesDop.push($(this).html());
        });
        var text = "";

        for (var _i = 1; _i <= total; _i++) {
          var j = _i;

          if (current == _i) {
            text += "<span class='cell-6 cell-4-lg cell-2-xs swiper-pagination-btn swiper-pagination-bullet swiper-pagination-btn-active'><div class='centered-btn'>" + namesDop[j] + "</div></span>";
          } else {
            text += "<span class='cell-6 cell-4-lg cell-2-xs swiper-pagination-btn swiper-pagination-bullet'><div class='centered-btn'>" + namesDop[j] + "</div></span>";
          }
        }

        return text;
      }
    },
    navigation: {
      nextEl: '.swiper-dop-arrows-container .swiper-button-next',
      prevEl: '.swiper-dop-arrows-container .swiper-button-prev'
    },
    on: {
      // paginationRender: function() { 
      //     $(".js-btn-animate").removeClass("js-btn-animate");
      //     $(".slider-dop__wrap .swiper-pagination-btn-active").addClass("js-btn-animate");
      // },
      init: function init() {// console.log("swiperDop init");
      }
    }
  });
  var swiper4 = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"](".slider-gallery", {
    init: false,
    preloadImages: false,
    lazy: {
      loadPrevNext: true
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.slider-gallery .swiper-button-next',
      prevEl: '.slider-gallery .swiper-button-prev'
    }
  });
  swiper4.autoplay.stop(); // ST‑01 

  var ended0 = [];
  $(".js-sliderdemo-0 .swiper-slide").each(function (i) {
    ended0.push($(this).data("ended"));
  });
  var swiper3prod0 = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.js-sliderdemo-0', {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    loop: false,
    speed: 300,
    pagination: {
      el: '.js-sliderdemo-0 + .swiper-pagination',
      type: 'custom',
      clickable: true,
      renderCustom: function renderCustom(swiper, current, total) {
        var text = "";
        var names0 = [];
        $(".js-sliderdemo-0 .swiper-slide .videoname").each(function (i) {
          names0.push($(this).html());
        });

        for (var _i2 = 1; _i2 <= total; _i2++) {
          var j = _i2 - 1;

          if (current == _i2) {
            text += "<span data-played='" + ended0[j] + "' class='swiper-pagination-bullet swiper-pagination-bullet-active'><div class='centered-bullet'>" + names0[j] + "</div></span>";
          } else {
            text += "<span data-played='" + ended0[j] + "' class='swiper-pagination-bullet'><div class='centered-bullet'>" + names0[j] + "</div></span>";
          }
        }

        return text;
      }
    },
    on: {
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        // startCurVideo(); 
        var currentVideo = document.querySelector("#index-0_" + this.activeIndex);
        var prevVideo = document.querySelector("#index-0_" + this.previousIndex);
        setTimeout(function () {
          prevVideo.pause();
        }, 500);
        asyncPlay(currentVideo, swiperCube.realIndex);

        if (intViewportWidth < 640) {
          smoothBulletsScrollLeft(this, intViewportWidth);
        }
      }
    }
  });
  var $sliderVideos0 = $(".js-sliderdemo-0 .swiper-slide video");
  $sliderVideos0.each(function (index) {
    var elToInsertTitles = document.querySelector("#prod-section-0 .slider-demonstration .aTitlesToVideo");
    var text_row = document.createElement('div');
    var sectioncube = 0;

    if (index == 0) {
      text_row.className = "currTitles titles-index-" + sectioncube + "_" + index;
      elToInsertTitles.appendChild(text_row);
      var timeframes = [{
        slisevid: index,
        time: 0,
        triggered: false,
        textContent: "Il est concu pour une installation interieure"
      }];
      InsertTitlesInTime(sectioncube, this, timeframes);
    }

    if (index == 1) {
      text_row.className = "currTitles titles-index-" + sectioncube + "_" + index;
      elToInsertTitles.appendChild(text_row);
      var _timeframes = [{
        slisevid: index,
        time: 0,
        triggered: false,
        textContent: "2 directions de passage"
      }];
      InsertTitlesInTime(sectioncube, this, _timeframes);
    }

    if (index == 3) {
      text_row.className = "currTitles titles-index-" + sectioncube + "_" + index;
      elToInsertTitles.appendChild(text_row);
      var _timeframes2 = [{
        slisevid: index,
        time: 0,
        triggered: false,
        textContent: "Détecteurs infrarouges <br /> 28 detecteurs du niveau infrieur"
      }, {
        slisevid: index,
        time: 5,
        triggered: false,
        textContent: "Détecteurs infrarouges <br /> 14 detecteus du niveau superiur"
      }];
      InsertTitlesInTime(sectioncube, this, _timeframes2);
    }

    if (index == 4) {
      text_row.className = "currTitles titles-index-" + sectioncube + "_" + index;
      elToInsertTitles.appendChild(text_row);
      var _timeframes3 = [{
        slisevid: index,
        time: 0,
        triggered: false,
        textContent: "Poteaux: <br /> acier inoxydable"
      }, {
        slisevid: index,
        time: 3,
        triggered: false,
        textContent: "Vantaux: <br /> verre trempé"
      }, {
        slisevid: index,
        time: 9,
        triggered: false,
        textContent: "Plaques de recouvrement: <br /> verre trempé"
      }, {
        slisevid: index,
        time: 11,
        triggered: false,
        textContent: "Plaques de recouvrement: <br /> acier inoxydable"
      }, {
        slisevid: index,
        time: 14,
        triggered: false,
        textContent: "Plaques de recouvrement: <br /> verre trempé avec inserts en acier inoxydable"
      }];
      InsertTitlesInTime(sectioncube, this, _timeframes3);
    }

    if (index == 5) {
      text_row.className = "currTitles titles-index-" + sectioncube + "_" + index;
      elToInsertTitles.appendChild(text_row);
      var _timeframes4 = [{
        slisevid: index,
        time: 0,
        triggered: false,
        textContent: "Poteaux et supports pour l’installation <br /> d’équipements complémentaires"
      }, {
        slisevid: index,
        time: 2.7,
        triggered: false,
        textContent: "lecteur de codes à barres"
      }, {
        slisevid: index,
        time: 4,
        triggered: false,
        textContent: "récepteur de cartes"
      }, {
        slisevid: index,
        time: 6.7,
        triggered: false,
        textContent: "terminal de reconnaissance faciale"
      }];
      InsertTitlesInTime(sectioncube, this, _timeframes4);
    }

    this.addEventListener('ended', function () {
      // if slider-cube .swiper-wrapper .swiper-slide-active have video0 { 
      if (swiper3prod0.activeIndex == swiper3prod0.slides.length - 1) {
        swiper3prod0.slideTo(0);
      } else {
        swiper3prod0.slideNext();
      } // }

    });
    this.addEventListener('playing', function () {
      ended0[swiper3prod0.activeIndex] = 1;
      swiper3prod0.pagination.update();
    });

    if (!this.paused) {
      this.pause();
    }
  }); // ST‑11  

  var ended1 = [];
  $(".js-sliderdemo-1 .swiper-slide").each(function (i) {
    ended1.push($(this).data("ended"));
  });
  var swiper3prod1 = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.js-sliderdemo-1', {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    loop: false,
    speed: 300,
    pagination: {
      el: '.js-sliderdemo-1 + .swiper-pagination',
      type: 'custom',
      clickable: true,
      renderCustom: function renderCustom(swiper, current, total) {
        var names1 = [];
        $(".js-sliderdemo-1 .swiper-slide .videoname").each(function (i) {
          names1.push($(this).html());
        });
        var text = "";

        for (var _i3 = 1; _i3 <= total; _i3++) {
          var j = _i3 - 1;

          if (current == _i3) {
            text += "<span data-played='" + ended1[j] + "' class='swiper-pagination-bullet swiper-pagination-bullet-active'><div class='centered-bullet'>" + names1[j] + "</div></span>";
          } else {
            text += "<span data-played='" + ended1[j] + "' class='swiper-pagination-bullet'><div class='centered-bullet'>" + names1[j] + "</div></span>";
          }
        }

        return text;
      }
    },
    on: {
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        // startCurVideo(); 
        var currentVideo = document.querySelector("#index-1_" + this.activeIndex);
        var prevVideo = document.querySelector("#index-1_" + this.previousIndex);
        setTimeout(function () {
          prevVideo.pause();
        }, 500);
        asyncPlay(currentVideo, swiperCube.realIndex);

        if (intViewportWidth < 640) {
          smoothBulletsScrollLeft(this, intViewportWidth);
        }
      }
    }
  });
  var $sliderVideos1 = $(".js-sliderdemo-1 .swiper-slide video");
  $sliderVideos1.each(function (index) {
    var elToInsertTitles = document.querySelector("#prod-section-1 .slider-demonstration .aTitlesToVideo");
    var text_row = document.createElement('div');
    var sectioncube = 1;

    if (index == 3) {
      text_row.className = "currTitles titles-index-" + sectioncube + "_" + index;
      elToInsertTitles.appendChild(text_row);
      var timeframes = [{
        slisevid: index,
        time: 0,
        triggered: false,
        textContent: "Détecteurs infrarouges <br /> 30 détecteurs du niveau inférieur"
      }, {
        slisevid: index,
        time: 5.5,
        triggered: false,
        textContent: "Détecteurs infrarouges <br /> 30 détecteurs du niveau supérieur"
      }];
      InsertTitlesInTime(sectioncube, this, timeframes);
    }

    if (index == 4) {
      text_row.className = "currTitles titles-index-" + sectioncube + "_" + index;
      elToInsertTitles.appendChild(text_row);
      var _timeframes5 = [{
        slisevid: index,
        time: 0,
        triggered: false,
        textContent: "Plaques de recouvrement et vantaux: <br /> verre trempé"
      }, {
        slisevid: index,
        time: 6,
        triggered: false,
        textContent: "Poteaux: <br /> acier inoxydable"
      }];
      InsertTitlesInTime(sectioncube, this, _timeframes5);
    }

    this.addEventListener('ended', function () {
      if (swiper3prod1.activeIndex == swiper3prod1.slides.length - 1) {
        swiper3prod1.slideTo(0);
      } else {
        swiper3prod1.slideNext();
      }
    });
    this.addEventListener('playing', function () {
      ended1[swiper3prod1.activeIndex] = 1;
      swiper3prod1.pagination.update();
    });

    if (!this.paused) {
      this.pause();
    }
  }); // ST‑02 

  var ended2 = [];
  $(".js-sliderdemo-2 .swiper-slide").each(function (i) {
    ended2.push($(this).data("ended"));
  });
  var swiper3prod2 = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.js-sliderdemo-2', {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    loop: false,
    speed: 300,
    pagination: {
      el: '.js-sliderdemo-2 + .swiper-pagination',
      type: 'custom',
      clickable: true,
      renderCustom: function renderCustom(swiper, current, total) {
        var names2 = [];
        $(".js-sliderdemo-2 .swiper-slide .videoname").each(function (i) {
          names2.push($(this).html());
        });
        var text = "";

        for (var _i4 = 1; _i4 <= total; _i4++) {
          var j = _i4 - 1;

          if (current == _i4) {
            text += "<span data-played='" + ended2[j] + "' class='swiper-pagination-bullet swiper-pagination-bullet-active'><div class='centered-bullet'>" + names2[j] + "</div></span>";
          } else {
            text += "<span data-played='" + ended2[j] + "' class='swiper-pagination-bullet'><div class='centered-bullet'>" + names2[j] + "</div></span>";
          }
        }

        return text;
      }
    },
    on: {
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        // startCurVideo(); 
        var currentVideo = document.querySelector("#index-2_" + this.activeIndex);
        var prevVideo = document.querySelector("#index-2_" + this.previousIndex);
        setTimeout(function () {
          prevVideo.pause();
        }, 500);
        asyncPlay(currentVideo, swiperCube.realIndex);

        if (intViewportWidth < 640) {
          smoothBulletsScrollLeft(this, intViewportWidth);
        }
      }
    }
  });
  var $sliderVideos2 = $(".js-sliderdemo-2 .swiper-slide video");
  $sliderVideos2.each(function (index) {
    var elToInsertTitles = document.querySelector("#prod-section-2 .slider-demonstration .aTitlesToVideo");
    var text_row = document.createElement('div');
    var sectioncube = 2;

    if (index == 3) {
      text_row.className = "currTitles titles-index-" + sectioncube + "_" + index;
      elToInsertTitles.appendChild(text_row);
      var timeframes = [{
        slisevid: index,
        time: 0,
        triggered: false,
        textContent: "Détecteurs infrarouges <br /> 24 detecteurs du niveau infrieur"
      }, {
        slisevid: index,
        time: 5,
        triggered: false,
        textContent: "Détecteurs infrarouges <br /> 24 détecteurs du niveau supérieur"
      }];
      InsertTitlesInTime(sectioncube, this, timeframes);
    }

    if (index == 4) {
      text_row.className = "currTitles titles-index-" + sectioncube + "_" + index;
      elToInsertTitles.appendChild(text_row);
      var _timeframes6 = [{
        slisevid: index,
        time: 0,
        triggered: false,
        textContent: "Poteaux: <br /> acier inoxydable"
      }, {
        slisevid: index,
        time: 3.8,
        triggered: false,
        textContent: "Vantaux: <br /> verre trempé"
      }, {
        slisevid: index,
        time: 8.7,
        triggered: false,
        textContent: "Plaques de recouvrement: <br /> supérieure faite en pierre de quartz artificiel"
      }, {
        slisevid: index,
        time: 12.9,
        triggered: false,
        textContent: "Plaques de recouvrement: <br /> acier inoxydable"
      }];
      InsertTitlesInTime(sectioncube, this, _timeframes6);
    }

    this.addEventListener('ended', function () {
      if (swiper3prod2.activeIndex == swiper3prod2.slides.length - 1) {
        swiper3prod2.slideTo(0);
      } else {
        swiper3prod2.slideNext();
      }
    });
    this.addEventListener('playing', function () {
      ended2[swiper3prod2.activeIndex] = 1;
      swiper3prod2.pagination.update();
    });

    if (!this.paused) {
      this.pause();
    }
  }); // Калитка

  var ended3 = [];
  $(".js-sliderdemo-3 .swiper-slide").each(function (i) {
    ended3.push($(this).data("ended"));
  });
  var swiper3prod3 = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.js-sliderdemo-3', {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    loop: false,
    speed: 300,
    pagination: {
      el: '.js-sliderdemo-3 + .swiper-pagination',
      type: 'custom',
      clickable: true,
      renderCustom: function renderCustom(swiper, current, total) {
        var text = "";
        var names3 = [];
        $(".js-sliderdemo-3 .swiper-slide .videoname").each(function (i) {
          names3.push($(this).html());
        });

        for (var _i5 = 1; _i5 <= total; _i5++) {
          var j = _i5 - 1;

          if (current == _i5) {
            text += "<span data-played='" + ended3[j] + "' class='swiper-pagination-bullet swiper-pagination-bullet-active'><div class='centered-bullet'>" + names3[j] + "</div></span>";
          } else {
            text += "<span data-played='" + ended3[j] + "' class='swiper-pagination-bullet'><div class='centered-bullet'>" + names3[j] + "</div></span>";
          }
        }

        return text;
      }
    },
    on: {
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        // startCurVideo(); 
        var currentVideo = document.querySelector("#index-3_" + this.activeIndex);
        var prevVideo = document.querySelector("#index-3_" + this.previousIndex);
        setTimeout(function () {
          prevVideo.pause();
        }, 500);
        asyncPlay(currentVideo, swiperCube.realIndex);

        if (intViewportWidth < 640) {
          smoothBulletsScrollLeft(this, intViewportWidth);
        }
      }
    }
  });
  var $sliderVideos3 = $(".js-sliderdemo-3 .swiper-slide video");
  $sliderVideos3.each(function (index) {
    var elToInsertTitles = document.querySelector("#prod-section-3 .slider-demonstration .aTitlesToVideo");
    var text_row = document.createElement('div');
    var sectioncube = 3;

    if (index == 3) {
      text_row.className = "currTitles titles-index-" + sectioncube + "_" + index;
      elToInsertTitles.appendChild(text_row);
      var timeframes = [{
        slisevid: index,
        time: 0,
        triggered: false,
        textContent: "Bâti du portillon pivotant <br /> acier inoxydable"
      }, {
        slisevid: index,
        time: 5,
        triggered: false,
        textContent: "Vantail du portillon <br /> verre trempé"
      }];
      InsertTitlesInTime(sectioncube, this, timeframes);
    }

    this.addEventListener('ended', function () {
      if (swiper3prod3.activeIndex == swiper3prod3.slides.length - 1) {
        swiper3prod3.slideTo(0);
      } else {
        swiper3prod3.slideNext();
      }
    });
    this.addEventListener('playing', function () {
      ended3[swiper3prod3.activeIndex] = 1;
      swiper3prod3.pagination.update();
    });

    if (!this.paused) {
      this.pause();
    }
  });
  in_view__WEBPACK_IMPORTED_MODULE_12___default.a.threshold(.5);
  in_view__WEBPACK_IMPORTED_MODULE_12___default()('#products-cube').on('enter', function (el) {
    swiperCube.init();

    if (!swiperCube.el.classList.contains("anim-end")) {
      swiperCube.el.classList.add("anim-end");
    }

    if (swiperCube.realIndex == 0) {
      var currentVideo = swiper3prod0.slides[swiper3prod0.activeIndex].children[0].children[0];
    } else if (swiperCube.realIndex == 1) {
      var currentVideo = swiper3prod1.slides[swiper3prod1.activeIndex].children[0].children[0];
    } else if (swiperCube.realIndex == 2) {
      var currentVideo = swiper3prod2.slides[swiper3prod2.activeIndex].children[0].children[0];
    } else if (swiperCube.realIndex == 3) {
      var currentVideo = swiper3prod3.slides[swiper3prod3.activeIndex].children[0].children[0];
    } else {
      var currentVideo = swiper3prod0.slides[swiper3prod0.activeIndex].children[0].children[0];
    } // currentVideo.play();


    asyncPlay(currentVideo, swiperCube.realIndex); // убираем постеры

    $(".slider-cube > .swiper-wrapper > .swiper-slide-active").addClass("remove-poster");

    function addZ() {
      $(".slider-cube > .swiper-wrapper > .swiper-slide.swiper-slide-active .poster-custom-resize").addClass("poster-z");
    }

    setTimeout(addZ, 500);
  }).on('exit', function (el) {
    if (swiperCube.activeIndex == 0) {
      var currentVideo = swiper3prod0.slides[swiper3prod0.activeIndex].children[0].children[0];
    } else if (swiperCube.activeIndex == 1) {
      var currentVideo = swiper3prod1.slides[swiper3prod1.activeIndex].children[0].children[0];
    } else if (swiperCube.activeIndex == 2) {
      var currentVideo = swiper3prod2.slides[swiper3prod2.activeIndex].children[0].children[0];
    } else if (swiperCube.activeIndex == 3) {
      var currentVideo = swiper3prod3.slides[swiper3prod3.activeIndex].children[0].children[0];
    } else {
      var currentVideo = swiper3prod0.slides[swiper3prod0.activeIndex].children[0].children[0];
    }

    currentVideo.pause(); // возвращаем постеры

    function removeZ() {
      $(".poster-custom-resize").removeClass("poster-z");
    }

    setTimeout(removeZ, 500);
    $(".remove-poster").removeClass("remove-poster");
  });

  if (intViewportWidth < 640) {
    var cubeContainer = document.querySelector("#products-cube");
    var itemsToDisableSwiperTouch = cubeContainer.querySelectorAll("#products-cube .swiper-pagination-custom");
    itemsToDisableSwiperTouch.forEach(function (item) {
      var disableTouchEvent = function disableTouchEvent(event) {
        if (swiperCube.allowTouchMove) {
          swiperCube.allowTouchMove = false;
        }
      };

      var enableTouchEvent = function enableTouchEvent(event) {
        if (!swiperCube.allowTouchMove) {
          swiperCube.allowTouchMove = true;
        }
      };

      item.addEventListener('touchstart', disableTouchEvent, false);
      item.addEventListener('touchmove', disableTouchEvent, false);
      item.addEventListener('touchend', enableTouchEvent, false);
      item.addEventListener('touchcancel', enableTouchEvent, false);
    });
    var vidsForMobile = document.getElementsByTagName("video");

    for (var i = 0; i < vidsForMobile.length; i++) {
      vidsForMobile[i].removeAttribute("autoplay");
    }
  } // grecaptcha.ready(function() { 
  // 	grecaptcha.execute('__PUBKEY__', {action: 'homepage'}).then(function(token) { 
  // 	}); 
  // });


  document.querySelector('.feedback-form').addEventListener('input', function () {
    checkValidAndCapcha(verifyInputs, workCapcha);
  });
  document.querySelector('.feedback-form').addEventListener('submit', /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return fetch('/', {
                method: 'POST',
                body: new FormData(this)
              });

            case 3:
              response = _context.sent;

              if (response.ok) {
                _context.next = 8;
                break;
              }

              console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0444\u043E\u0440\u043C\u044B, \u0441\u0442\u0430\u0442\u0443\u0441 \u043E\u0442\u0432\u0435\u0442\u0430: ".concat(response.status));
              console.error(response);
              return _context.abrupt("return");

            case 8:
              _context.next = 10;
              return response.text();

            case 10:
              _context.t0 = _context.sent;

              if (!(_context.t0 != '0')) {
                _context.next = 14;
                break;
              }

              _fancyapps_ui__WEBPACK_IMPORTED_MODULE_14__["Fancybox"].show([{
                html: document.getElementById('form-result-content')
              }], {
                on: {
                  done: function done(fancybox, slide) {
                    document.querySelector(".feedback-form-btn").classList.remove("btn-active");
                    document.querySelector(".feedback-form-btn").classList.add("btn-block");
                    setTimeout(function () {
                      fancybox.close();
                    }, 5000);
                  }
                }
              });
              return _context.abrupt("return");

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x6) {
      return _ref.apply(this, arguments);
    };
  }());
  var easeTime = .3;
  $("[data-prod-slide]").on("click", function (e) {
    e.preventDefault;
    gsap__WEBPACK_IMPORTED_MODULE_15__["gsap"].to(window, {
      delay: 0,
      duration: easeTime,
      scrollTo: "#products"
    });
    swiper2.slideTo($(this).data("prod-slide"));
  });
  $("[data-prod-section]").on("click", function (e) {
    e.preventDefault;
    gsap__WEBPACK_IMPORTED_MODULE_15__["gsap"].to(window, {
      delay: 0,
      duration: easeTime,
      scrollTo: "#products-cube"
    });
    swiperCube.slideTo($(this).data("prod-section"));
  }); // делаем свой loop по клику на swiper-button-disabled

  var deferredActiveIndex = 0;
  $(".slider-cube__arrows .swiper-button-prev").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(deferredActiveIndex);

    if (deferredActiveIndex == 0) {
      deferredActiveIndex = swiperCube.activeIndex;
      console.log(swiperCube.activeIndex);
      console.log($(this).hasClass("swiper-button-disabled"));

      if (swiperCube.activeIndex == 0 && $(this).hasClass("swiper-button-disabled")) {
        swiperCube.slideTo(5).on('slideChangeTransitionEnd', function () {
          deferredActiveIndex = swiperCube.activeIndex;
        });
      }
    }
  });
  $(".slider-cube__arrows .swiper-button-next").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(deferredActiveIndex);

    if (deferredActiveIndex == 3) {
      console.log(swiperCube.activeIndex);
      console.log($(this).hasClass("swiper-button-disabled"));

      if (swiperCube.activeIndex == 3 && $(this).hasClass("swiper-button-disabled")) {
        swiperCube.slideTo(0).on('slideChangeTransitionEnd', function () {
          deferredActiveIndex = swiperCube.activeIndex;
        });
      }
    }
  });
  $('[href="#gallery"], [href="#about"], [href="#write-us"]').on("click", function () {
    swiper4.init();
    swiper4.on('afterInit', function () {
      // якорь по центру фотогалереи
      anchorPhotoGallery();
      positionArrowsGallery();
    });
  });
  $("video").on("click", function (e) {
    if (this.paused) {
      this.play();
    } else {
      this.pause();
    }
  });
  var maskRu = "8(999)999-9999"; // русская маска

  var maskEn = "+99999999999{1,5}"; // зарубежная маска

  if (curr_lang == "ru") {
    var inptPhoneMask = new inputmask__WEBPACK_IMPORTED_MODULE_20___default.a(maskRu);
  } else {
    var inptPhoneMask = new inputmask__WEBPACK_IMPORTED_MODULE_20___default.a(maskEn);
  }

  var inptEmaiMask = new inputmask__WEBPACK_IMPORTED_MODULE_20___default.a({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function onBeforePaste(pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        casing: "lower"
      }
    }
  });
  inptPhoneMask.mask(document.getElementById("js-input-phone"));
  inptEmaiMask.mask(document.getElementById("js-input-email")); //   input.oninput = function() {
  //     result.innerHTML = input.value;
  //   }; 
  // $('.play-button__link').on("click", function(e) {
  //     console.log(e.currentTarget.offsetParent.children[0].children[0].play());
  //     var targetPlay = e.currentTarget.offsetParent.children[0].children[0]
  //     targetPlay.play().catch((e) => {
  //         console.log(e); 
  //     });
  //     $("#products-cube").addClass("playback-started");
  // });

  var sectionHero = document.querySelector(".slider-hero");
  var sectionGallery = document.querySelector(".three");
  var sectionDopProd = document.querySelector(".slider-dop");
  sectionHero.addEventListener('click', function (event) {
    console.log(swiper1.slideNext());
  });
  sectionGallery.addEventListener('click', function (event) {
    console.log(swiper4.slideNext());
  });
  sectionDopProd.addEventListener('click', function (event) {
    console.log(swiperDop.slideNext());
  });
  var swiper1 = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"](".slider-hero", {
    preloadImages: false,
    lazy: {
      loadPrevNext: true
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".slider-hero .swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: '.slider-hero .swiper-button-next',
      prevEl: '.slider-hero .swiper-button-prev'
    },
    on: {
      init: function init() {
        setTimeout(function () {
          document.querySelector(".hero").classList.add("swiper-initted");
        }, 1000);
      },
      slideChange: function slideChange(swiper) {
        var dynamicSubtext = document.getElementById("js-dynamic-subtext-1");
        dynamicSubtext.innerHTML = swiper.slides[swiper.realIndex].querySelector(".subtext").innerHTML;
        dynamicSubtext.setAttribute("translate", swiper.slides[swiper.realIndex].querySelector(".subtext").attributes["translate"].value);
      }
    }
  }); // Перевод страницы по клику

  $(function () {
    $('.select-lang__item').on('click', function (e) {
      e.preventDefault();
      $(".select-lang__name").html($(this).attr('id').toUpperCase());
      curr_lang = $(this).attr('id');
      var inptPhoneMask = new inputmask__WEBPACK_IMPORTED_MODULE_20___default.a("8(999)999-9999");
      var matches = $('body').attr('class').match(/\blang-is-\S+/g);
      $.each(matches, function () {
        var className = this;
        $('body').removeClass(className.toString());
      });
      $("body").addClass("lang-is-" + curr_lang);
      $('.lang').each(function () {
        $(this).text(_components_langs__WEBPACK_IMPORTED_MODULE_5__["default"][curr_lang][$(this).attr('translate')]);
      });
      var names0 = [];
      var names1 = [];
      var names2 = [];
      var names3 = [];
      var namesDop = [];
      $(".js-sliderdemo-dop .swiper-slide").each(function (i) {
        namesDop.push($(this).data("name"));
      });
      $(".js-sliderdemo-0 .swiper-slide .videoname").each(function (i) {
        names0[i] = $(this).html();
      });
      swiper3prod0.pagination.update();
      $(".js-sliderdemo-1 .swiper-slide .videoname").each(function (i) {
        names1[i] = $(this).html();
      });
      swiper3prod1.pagination.update();
      $(".js-sliderdemo-2 .swiper-slide .videoname").each(function (i) {
        names2[i] = $(this).html();
      });
      swiper3prod2.pagination.update();
      $(".js-sliderdemo-3 .swiper-slide .videoname").each(function (i) {
        names3[i] = $(this).html();
      });

      if (swiperDop.params.init == false) {
        swiperDop.init();
        swiperDop.autoplay.stop();
      }

      swiper3prod3.pagination.update();
      $(".js-sliderdemo-dop .swiper-slide .name").each(function (i) {
        namesDop[i] = $(this).html();
      });
      swiperDop.pagination.update();
      $(".feedback-form-label__input").each(function (i) {
        $(this)[0].placeholder = _components_langs__WEBPACK_IMPORTED_MODULE_5__["default"][curr_lang][$(this).attr('translate')];
      });
    });
  }); // Перевод страницы при загрузке

  $(function () {
    // curr_lang = "ru";
    // curr_lang = "en";
    var matches = $('body').attr('class').match(/\blang-is-\S+/g);
    $.each(matches, function () {
      var className = this;
      $('body').removeClass(className.toString());
    });
    $("body").addClass("lang-is-" + curr_lang);
    $('.lang').each(function () {
      $(this).text(_components_langs__WEBPACK_IMPORTED_MODULE_5__["default"][curr_lang][$(this).attr('translate')]);
    });
    var names0 = [];
    var names1 = [];
    var names2 = [];
    var names3 = [];
    var namesDop = [];
    $(".js-sliderdemo-dop .swiper-slide").each(function (i) {
      namesDop.push($(this).data("name"));
    });
    $(".js-sliderdemo-0 .swiper-slide .videoname").each(function (i) {
      names0[i] = $(this).html();
    });
    swiper3prod0.pagination.update();
    $(".js-sliderdemo-1 .swiper-slide .videoname").each(function (i) {
      names1[i] = $(this).html();
    });
    swiper3prod1.pagination.update();
    $(".js-sliderdemo-2 .swiper-slide .videoname").each(function (i) {
      names2[i] = $(this).html();
    });
    swiper3prod2.pagination.update();
    $(".js-sliderdemo-3 .swiper-slide .videoname").each(function (i) {
      names3[i] = $(this).html();
    });

    if (swiperDop.params.init == false) {
      swiperDop.init();
      swiperDop.autoplay.stop();
    }

    swiper3prod3.pagination.update();
    $(".js-sliderdemo-dop .swiper-slide .name").each(function (i) {
      namesDop[i] = $(this).html();
    });
    swiperDop.pagination.update();
    $(".feedback-form-label__input").each(function (i) {
      $(this)[0].placeholder = _components_langs__WEBPACK_IMPORTED_MODULE_5__["default"][curr_lang][$(this).attr('translate')];
    });
  });

  if (location.hostname == "localhost") {
    if (isCookie == undefined) {
      document.getElementById('js-cookie-warning').style.display = "block";
      setCookie("firstVisit", "", {
        expires: 86400 * 365
      });
    }
  }

  if (location.hostname == "perco.local" || location.hostname == "www.perco.local") {
    if (isCookie == undefined) {
      document.getElementById('js-cookie-warning').style.display = "block";
      setCookie("firstVisit", "", {
        expires: 86400 * 365
      });
    }
  }

  if (location.hostname == "speedgate.perco.ru") {
    if (isCookie == undefined) {
      document.getElementById('js-cookie-warning').style.display = "block";
      setCookie("firstVisit", "", {
        expires: 86400 * 365
      });
    }
  }

  if (location.hostname == "speedgate.perco.com") {
    if (isCookie == undefined) {
      document.getElementById('js-cookie-warning').style.display = "block";
      setCookie("firstVisit", "", {
        expires: 86400 * 365
      });
    }
  }
};

window.addEventListener("resize", function (event) {
  var intViewportHeight = window.innerHeight;
  var elsToResize = document.querySelectorAll(".js-video-main-wrap");

  if (intViewportHeight < 851) {
    elsToResize.forEach(function (node) {
      node.classList.add('push-3', 'cell-6', 'post-3');
      node.classList.remove('push-2', 'cell-8', 'post-2');
    });
  } else {
    elsToResize.forEach(function (node) {
      node.classList.add('push-2', 'cell-8', 'post-2');
      node.classList.remove('push-3', 'cell-6', 'post-3');
    });
  } // якорь по центру фотогалереи


  anchorPhotoGallery();
}, false);

/***/ }),

/***/ "./src/js/modules/actualYear.js":
/*!**************************************!*\
  !*** ./src/js/modules/actualYear.js ***!
  \**************************************/
/*! exports provided: actualYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actualYear", function() { return actualYear; });
/**
* Модуль "Актуальный год"
*/
var actualYear = function actualYear() {
  var year = new Date().getFullYear();

  if (document.querySelector('[data-actual-year]')) {
    document.querySelector('[data-actual-year]').textContent = year;
  }
};

/***/ }),

/***/ "./src/js/modules/lazyLoading.js":
/*!***************************************!*\
  !*** ./src/js/modules/lazyLoading.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_0__);

var observer;
/**
* Модуль "Отложенная загрузка изображений"
* https://github.com/ApoorvSaxena/lozad.js
*/

var init = function init() {
  observer = lozad__WEBPACK_IMPORTED_MODULE_0___default()('.js-lazy', {
    rootMargin: '10px 0px',
    // syntax similar to that of CSS Margin
    threshold: 0.1,
    // ratio of element convergence
    enableAutoReload: true,
    // it will reload the new image when validating attributes changes
    loaded: function loaded(el) {
      el.classList.add('is-loaded');
    }
  });
  observer.observe();
};
/**
* Тригер для загрузки изображений до того, как оно появится в наблюдателе области просмотра
* @param {string} img Обязательное, элемент img
*/


var trigger = function trigger(img) {
  observer.triggerLoad(img);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  trigger: trigger
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_4__);





svg4everybody__WEBPACK_IMPORTED_MODULE_2___default()();
object_fit_images__WEBPACK_IMPORTED_MODULE_4___default()(); // objectFitVideos();

window.$ = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.objectFitImages = object_fit_images__WEBPACK_IMPORTED_MODULE_4___default.a; // window.objectFitVideos = objectFitVideos;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ }),

/***/ "./src/js/vendor/ie-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/ie-fix.js ***!
  \*********************************/
/*! exports provided: ieFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ieFix", function() { return ieFix; });
/* eslint-disable */

/**
* Много разных фиксов для ie,
* чтобы не было лишних проблем
* Performance.now()
* forEach
* CustomEvent
* includes
* matches
* closest
* prepend
* append
* before
* remove
* startsWith
* Performance.now()
* https://gist.github.com/paulirish/5438650
*/
var ieFix = function ieFix() {
  (function () {
    if ("performance" in window == false) {
      window.performance = {};
    } // thanks IE8


    Date.now = Date.now || function () {
      return new Date().getTime();
    };

    if ("now" in window.performance == false) {
      var nowOffset = Date.now();

      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }

      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    }
  })(); // forEach


  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } // CustomEvent


  (function () {
    if (typeof window.CustomEvent === 'function') return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })(); // includes


  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function value(searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);
        var len = o.length >>> 0;

        if (len === 0) {
          return false;
        }

        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        }

        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }

          k++;
        }

        return false;
      }
    });
  } // matches


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = matches.length; // eslint-disable-next-line no-empty

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  }

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  } // closest


  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  } // prepend


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("prepend")) {
        return;
      }

      Object.defineProperty(item, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // append


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("append")) {
        return;
      }

      Object.defineProperty(item, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // before


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("before")) {
        return;
      }

      Object.defineProperty(item, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // remove


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("remove")) {
        return;
      }

      Object.defineProperty(item, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // startsWith


  if (!String.prototype.startsWith) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(String.prototype, "startsWith", {
      value: function value(search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }
    });
  } // Fixes
  //---------------------------------
  // ie download


  var ie11Download = function ie11Download(el) {
    if (el.href === "") {
      throw Error("The element has no href value.");
    }

    var filename = el.getAttribute("download");

    if (filename === null || filename === "") {
      var tmp = el.href.split("/");
      filename = tmp[tmp.length - 1];
    }

    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      var xhr = new XMLHttpRequest();

      xhr.onloadstart = function () {
        xhr.responseType = "blob";
      };

      xhr.onload = function () {
        navigator.msSaveOrOpenBlob(xhr.response, filename);
      };

      xhr.open("GET", el.href, true);
      xhr.send();
    });
  };

  if (window.navigator.msSaveBlob) {
    var downloadLinks = document.querySelectorAll("a[download]");

    if (downloadLinks.length) {
      downloadLinks.forEach(function (el) {
        ie11Download(el);
      });
    }
  } // ie svg focus fix


  var unfocusableSvg = function unfocusableSvg() {
    if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var svg = document.querySelectorAll('svg');
    svg.forEach(function (el) {
      el.setAttribute('focusable', 'false');
    });
  };

  unfocusableSvg(); //ie footer nailing

  var ieFooterNailing = function ieFooterNailing() {
    var main = document.querySelector('main');
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');
    var headerH;
    var footerH;
    var mainHMin;

    if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var mainHeight = function mainHeight() {
      // eslint-disable-next-line no-unused-expressions
      header ? headerH = header.getBoundingClientRect().height : headerH = 0; // eslint-disable-next-line no-unused-expressions

      footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
      mainHMin = window.innerHeight;
      main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
    };

    document.addEventListener('loadDOMContentLoaded', mainHeight());
    window.addEventListener('resize', mainHeight);
  };

  ieFooterNailing();
};



/***/ }),

/***/ "./src/js/vendor/vh-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/vh-fix.js ***!
  \*********************************/
/*! exports provided: vhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vhFix", function() { return vhFix; });
/**
* Модуль исправления багов на iOs устройствах
* определяет высоту экрана и при любом изменении переопределяет её
* в стилях используйте кастомные стили var(--vh)
*/
var vhFix = function vhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    var vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    window.addEventListener('resize', function () {
      vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    });
  }
};



/***/ })

/******/ });
//# sourceMappingURL=main.js.map