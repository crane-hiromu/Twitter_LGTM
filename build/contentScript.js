/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/contentScript.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contentScript.js":
/*!******************************!*\
  !*** ./src/contentScript.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RESOURCES = RESOURCES || {};

RESOURCES = {

    TARGET: {
        WRAPPER_NAME: 'r-1mdbhws',
        ICON_NAME: "r-xoduu5"
    },

    IS_NOT_SELECTED: {
        NAME: 'r-1re7ezh',
        COLOR: '#657786',
        VIEW_BOX: '0 0 392.81 429',
        SVG: 'M14.19 5.4h53.86v149.45h90.05v44.87H14.19zM288.4 93.77h100.79q1.29 25-5.66 45.39a96.79 96.79 0 01-20.33 34.89 92 92 0 01-32.13 22.45 104 104 0 01-40.95 7.93 109.71 109.71 0 01-76-29.92 104.05 104.05 0 01-23-32.56 95.46 95.46 0 01-8.47-39.88 94.78 94.78 0 018.47-39.87 104.38 104.38 0 0123-32.42A107.71 107.71 0 01248.23 8a110.79 110.79 0 01118.48 22.49l-35.07 35.08a51.25 51.25 0 00-17.75-15 52.83 52.83 0 00-44.67-1.23 52.92 52.92 0 00-17 12 57.07 57.07 0 00-11.45 18.11 60 60 0 00-4.23 22.77 60 60 0 004.23 22.68 56.57 56.57 0 0011.45 18.19 52.62 52.62 0 0017 12 50.5 50.5 0 0020.9 4.36q20.19 0 31.07-7.51a35.75 35.75 0 0014.46-20.55h-47.39zM51.29 279.55H0v-44.86h156v44.86h-51.13V429H51.29zM283.36 381.71l-41.72-62V429h-53.86V234.69h47.47L290 312l55.9-77.29h46.9V429h-53.86V320.27l-42.43 61.44z'
    },

    IS_SELECTED: {　
        NAME: 'r-daml9f',
        COLOR: '#55c500',
        VIEW_BOX: '0 0 271.61 199.3',
        SVG: 'M115.57 199.3L0 83.73l36-36L108.34 120l120-120 43.26 43.26z'
    }
}

function replaceLikeWithLgtm() {
    const elements = document.getElementsByClassName(RESOURCES.TARGET.WRAPPER_NAME);

    while(elements.length != 0) {
        const wrapperDom = elements[0];
        if(!wrapperDom) { return; }

        const likeDom = wrapperDom.children[2];
        if(!likeDom) { return; }

        const svgDom = likeDom.querySelector('svg');
        const pathDom = likeDom.querySelector('path');
        if(!svgDom || !pathDom) { return; }


        const nonSelectedDom = likeDom.getElementsByClassName(RESOURCES.IS_NOT_SELECTED.NAME)[0];
        const selectedDom = likeDom.getElementsByClassName(RESOURCES.IS_SELECTED.NAME)[0];

        if (nonSelectedDom) {
            svgDom.setAttribute('viewBox', RESOURCES.IS_NOT_SELECTED.VIEW_BOX);
            pathDom.setAttribute('d', RESOURCES.IS_NOT_SELECTED.SVG);
            nonSelectedDom.style.color = RESOURCES.IS_NOT_SELECTED.COLOR;
            nonSelectedDom.addEventListener('click', function() { onClick(nonSelectedDom); });
        } else if (selectedDom) {
            svgDom.setAttribute('viewBox', RESOURCES.IS_SELECTED.VIEW_BOX);
            pathDom.setAttribute('d', RESOURCES.IS_SELECTED.SVG);
            selectedDom.style.color = RESOURCES.IS_SELECTED.COLOR;
            selectedDom.addEventListener('click', function() { onClick(selectedDom); });
        }

        wrapperDom.classList.remove(RESOURCES.TARGET.WRAPPER_NAME);
    }
}

function toHex(col) {
    return '#' + col.match(/\d+/g).map(function(a){return ('0' + parseInt(a).toString(16)).slice(-2)}).join('');
}

function onClick(btn) {
    const icon = btn.getElementsByClassName(RESOURCES.TARGET.ICON_NAME)[0];
    if(!icon) { return; }

    const isSelected = (toHex(btn.style.color) == RESOURCES.IS_SELECTED.COLOR);
    btn.style.color = (isSelected ? RESOURCES.IS_NOT_SELECTED.COLOR : RESOURCES.IS_SELECTED.COLOR);    

    if (!isSelected) {
        setTimeout(function(){ icon.style.opacity = 0.0; }, 350);
    }

    setTimeout(function(){ 
        const svgDom = btn.querySelector('svg');
        const pathDom = btn.querySelector('path');
        if(!svgDom || !pathDom) { return; }

        svgDom.setAttribute('viewBox', (isSelected ? RESOURCES.IS_NOT_SELECTED.VIEW_BOX : RESOURCES.IS_SELECTED.VIEW_BOX));
        pathDom.setAttribute('d', (isSelected ? RESOURCES.IS_NOT_SELECTED.SVG : RESOURCES.IS_SELECTED.SVG));
        icon.style.opacity = 1.0;
    }, (isSelected ? 0 : 900));
}

function execObserve() {
    const target = document.getElementsByClassName(RESOURCES.TARGET.WRAPPER_NAME)[0];
    if(!target) {
        window.setTimeout(execObserve, 500);
        return;
    }

    observer.observe(target, {
        attributes: true,
        childList:  true
    });
    replaceLikeWithLgtm();
    execObserve();
}

const observer = new MutationObserver(replaceLikeWithLgtm);

console.log('replace like with lgtm');

execObserve();


/***/ })

/******/ });
//# sourceMappingURL=contentScript.js.map