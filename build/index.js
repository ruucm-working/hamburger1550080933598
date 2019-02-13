(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"));
	else if(typeof define === 'function' && define.amd)
		define(["framer"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer")) : factory(root["Framer"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App.tsx": "./code/App.tsx",
	"./Examples.tsx": "./code/Examples.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/App.tsx":
/*!**********************!*\
  !*** ./code/App.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst ruucm_util_1 = __webpack_require__(/*! ruucm-util */ \"./node_modules/ruucm-util/index.js\");\nconst data = framer_1.Data({\n    // Menu\n    menuScale: framer_1.Animatable(1),\n    //lineOne\n    rightOne: framer_1.Animatable(0),\n    topOne: framer_1.Animatable(0),\n    rotationOne: framer_1.Animatable(0),\n    widthOne: framer_1.Animatable(21),\n    //lineThree\n    bottomThree: framer_1.Animatable(0),\n    rightThree: framer_1.Animatable(0),\n    rotationThree: framer_1.Animatable(0),\n    widthThree: framer_1.Animatable(28),\n    //lineTwo\n    widthTwo: framer_1.Animatable(33),\n    rightTwo: framer_1.Animatable(0),\n    leftTwo: framer_1.Animatable(0),\n    // textOne\n    textLeftOne: framer_1.Animatable(-30),\n    textOpacityOne: framer_1.Animatable(0),\n    textLeftTwo: framer_1.Animatable(-30),\n    textOpacityTwo: framer_1.Animatable(0),\n});\n// switch\nvar isOpened = false;\n// anim options\nconst springOptionsOne = {\n    tension: 100,\n    friction: 10,\n};\n// Lines\nexports.lineOne = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        right: data.rightOne,\n        top: data.topOne,\n        rotation: data.rotationOne,\n        width: data.widthOne,\n        originX: 0,\n        originY: 0,\n    };\n};\nexports.lineThree = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        right: data.rightThree,\n        bottom: data.bottomThree,\n        rotation: data.rotationThree,\n        width: data.widthThree,\n        originX: 0,\n        originY: 0,\n    };\n};\nexports.lineTwo = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        width: data.widthTwo,\n        right: data.rightTwo,\n        left: data.leftTwo,\n    };\n};\n// Texts\nexports.textOne = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        left: data.textLeftOne,\n        opacity: data.textOpacityOne,\n    };\n};\nexports.textTwo = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        left: data.textLeftTwo,\n        opacity: data.textOpacityTwo,\n    };\n};\nexports.Menu = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: data.menuScale,\n        // Actions\n        onTap() {\n            return __awaiter(this, void 0, void 0, function* () {\n                window[\"__checkBudget__\"]();\n                if (!isOpened) {\n                    ruucm_util_1.log('open !');\n                    // with & height\n                    framer_1.animate.easeInOut(data.widthOne, 45.5);\n                    framer_1.animate.easeInOut(data.widthThree, 45.5);\n                    framer_1.animate.spring(data.topOne, -3);\n                    framer_1.animate.easeInOut(data.bottomThree, -3);\n                    framer_1.animate.easeInOut(data.rotationOne, 45);\n                    framer_1.animate.easeInOut(data.rotationThree, -45);\n                    // hide lineTwo\n                    framer_1.animate.easeIn(data.leftTwo, 2, {\n                        duration: 0.8,\n                    });\n                    framer_1.animate.easeIn(data.rightTwo, 30, {\n                        duration: 0.8,\n                    });\n                    // scale down menu\n                    framer_1.animate.ease(data.menuScale, 0.85);\n                    // text anims\n                    framer_1.animate.spring(data.textLeftOne, 0, springOptionsOne);\n                    yield framer_1.animate.spring(data.textOpacityOne, 1, springOptionsOne).finished;\n                    framer_1.animate.spring(data.textLeftTwo, 0, springOptionsOne);\n                    framer_1.animate.spring(data.textOpacityTwo, 1, springOptionsOne);\n                }\n                else {\n                    ruucm_util_1.log('close !');\n                    // show lineTwo\n                    framer_1.animate.easeIn(data.leftTwo, 0, {\n                        duration: 0.8,\n                    });\n                    framer_1.animate.easeIn(data.rightTwo, 0, {\n                        duration: 0.8,\n                    });\n                    // with & height\n                    framer_1.animate.easeInOut(data.widthOne, 21);\n                    framer_1.animate.easeInOut(data.widthThree, 28);\n                    framer_1.animate.spring(data.topOne, 0);\n                    framer_1.animate.spring(data.bottomThree, 0);\n                    framer_1.animate.easeInOut(data.rotationOne, 0);\n                    framer_1.animate.easeInOut(data.rotationThree, 0);\n                    // scale up menu\n                    framer_1.animate.ease(data.menuScale, 1);\n                    // text anims\n                    framer_1.animate.spring(data.textLeftTwo, -30, springOptionsOne);\n                    yield framer_1.animate.spring(data.textOpacityTwo, 0, springOptionsOne).finished;\n                    framer_1.animate.spring(data.textLeftOne, -30, springOptionsOne);\n                    framer_1.animate.spring(data.textOpacityOne, 0, springOptionsOne);\n                }\n                isOpened = !isOpened;\n            });\n        },\n    };\n};\nexports.__info__ = [{ name: \"lineOne\", type: \"override\" }, { name: \"lineThree\", type: \"override\" }, { name: \"lineTwo\", type: \"override\" }, { name: \"textOne\", type: \"override\" }, { name: \"textTwo\", type: \"override\" }, { name: \"Menu\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EscUJBQXFCLG9DQUFvQyxHQUFHLHNDQUFzQyxHQUFHLG9DQUFvQyxHQUFHLG9DQUFvQyxHQUFHLG9DQUFvQyxHQUFHLGlDQUFpQyIsImZpbGUiOiIuL2NvZGUvQXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmcmFtZXJfMSA9IHJlcXVpcmUoXCJmcmFtZXJcIik7XG5jb25zdCBydXVjbV91dGlsXzEgPSByZXF1aXJlKFwicnV1Y20tdXRpbFwiKTtcbmNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHtcbiAgICAvLyBNZW51XG4gICAgbWVudVNjYWxlOiBmcmFtZXJfMS5BbmltYXRhYmxlKDEpLFxuICAgIC8vbGluZU9uZVxuICAgIHJpZ2h0T25lOiBmcmFtZXJfMS5BbmltYXRhYmxlKDApLFxuICAgIHRvcE9uZTogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSxcbiAgICByb3RhdGlvbk9uZTogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSxcbiAgICB3aWR0aE9uZTogZnJhbWVyXzEuQW5pbWF0YWJsZSgyMSksXG4gICAgLy9saW5lVGhyZWVcbiAgICBib3R0b21UaHJlZTogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSxcbiAgICByaWdodFRocmVlOiBmcmFtZXJfMS5BbmltYXRhYmxlKDApLFxuICAgIHJvdGF0aW9uVGhyZWU6IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksXG4gICAgd2lkdGhUaHJlZTogZnJhbWVyXzEuQW5pbWF0YWJsZSgyOCksXG4gICAgLy9saW5lVHdvXG4gICAgd2lkdGhUd286IGZyYW1lcl8xLkFuaW1hdGFibGUoMzMpLFxuICAgIHJpZ2h0VHdvOiBmcmFtZXJfMS5BbmltYXRhYmxlKDApLFxuICAgIGxlZnRUd286IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksXG4gICAgLy8gdGV4dE9uZVxuICAgIHRleHRMZWZ0T25lOiBmcmFtZXJfMS5BbmltYXRhYmxlKC0zMCksXG4gICAgdGV4dE9wYWNpdHlPbmU6IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksXG4gICAgdGV4dExlZnRUd286IGZyYW1lcl8xLkFuaW1hdGFibGUoLTMwKSxcbiAgICB0ZXh0T3BhY2l0eVR3bzogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSxcbn0pO1xuLy8gc3dpdGNoXG52YXIgaXNPcGVuZWQgPSBmYWxzZTtcbi8vIGFuaW0gb3B0aW9uc1xuY29uc3Qgc3ByaW5nT3B0aW9uc09uZSA9IHtcbiAgICB0ZW5zaW9uOiAxMDAsXG4gICAgZnJpY3Rpb246IDEwLFxufTtcbi8vIExpbmVzXG5leHBvcnRzLmxpbmVPbmUgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmlnaHQ6IGRhdGEucmlnaHRPbmUsXG4gICAgICAgIHRvcDogZGF0YS50b3BPbmUsXG4gICAgICAgIHJvdGF0aW9uOiBkYXRhLnJvdGF0aW9uT25lLFxuICAgICAgICB3aWR0aDogZGF0YS53aWR0aE9uZSxcbiAgICAgICAgb3JpZ2luWDogMCxcbiAgICAgICAgb3JpZ2luWTogMCxcbiAgICB9O1xufTtcbmV4cG9ydHMubGluZVRocmVlID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJpZ2h0OiBkYXRhLnJpZ2h0VGhyZWUsXG4gICAgICAgIGJvdHRvbTogZGF0YS5ib3R0b21UaHJlZSxcbiAgICAgICAgcm90YXRpb246IGRhdGEucm90YXRpb25UaHJlZSxcbiAgICAgICAgd2lkdGg6IGRhdGEud2lkdGhUaHJlZSxcbiAgICAgICAgb3JpZ2luWDogMCxcbiAgICAgICAgb3JpZ2luWTogMCxcbiAgICB9O1xufTtcbmV4cG9ydHMubGluZVR3byA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogZGF0YS53aWR0aFR3byxcbiAgICAgICAgcmlnaHQ6IGRhdGEucmlnaHRUd28sXG4gICAgICAgIGxlZnQ6IGRhdGEubGVmdFR3byxcbiAgICB9O1xufTtcbi8vIFRleHRzXG5leHBvcnRzLnRleHRPbmUgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogZGF0YS50ZXh0TGVmdE9uZSxcbiAgICAgICAgb3BhY2l0eTogZGF0YS50ZXh0T3BhY2l0eU9uZSxcbiAgICB9O1xufTtcbmV4cG9ydHMudGV4dFR3byA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiBkYXRhLnRleHRMZWZ0VHdvLFxuICAgICAgICBvcGFjaXR5OiBkYXRhLnRleHRPcGFjaXR5VHdvLFxuICAgIH07XG59O1xuZXhwb3J0cy5NZW51ID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNjYWxlOiBkYXRhLm1lbnVTY2FsZSxcbiAgICAgICAgLy8gQWN0aW9uc1xuICAgICAgICBvblRhcCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc09wZW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBydXVjbV91dGlsXzEubG9nKCdvcGVuICEnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCAmIGhlaWdodFxuICAgICAgICAgICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmVhc2VJbk91dChkYXRhLndpZHRoT25lLCA0NS41KTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5lYXNlSW5PdXQoZGF0YS53aWR0aFRocmVlLCA0NS41KTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS50b3BPbmUsIC0zKTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5lYXNlSW5PdXQoZGF0YS5ib3R0b21UaHJlZSwgLTMpO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmVhc2VJbk91dChkYXRhLnJvdGF0aW9uT25lLCA0NSk7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuZWFzZUluT3V0KGRhdGEucm90YXRpb25UaHJlZSwgLTQ1KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZSBsaW5lVHdvXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuZWFzZUluKGRhdGEubGVmdFR3bywgMiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuZWFzZUluKGRhdGEucmlnaHRUd28sIDMwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2NhbGUgZG93biBtZW51XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuZWFzZShkYXRhLm1lbnVTY2FsZSwgMC44NSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHQgYW5pbXNcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS50ZXh0TGVmdE9uZSwgMCwgc3ByaW5nT3B0aW9uc09uZSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGZyYW1lcl8xLmFuaW1hdGUuc3ByaW5nKGRhdGEudGV4dE9wYWNpdHlPbmUsIDEsIHNwcmluZ09wdGlvbnNPbmUpLmZpbmlzaGVkO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnRleHRMZWZ0VHdvLCAwLCBzcHJpbmdPcHRpb25zT25lKTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS50ZXh0T3BhY2l0eVR3bywgMSwgc3ByaW5nT3B0aW9uc09uZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBydXVjbV91dGlsXzEubG9nKCdjbG9zZSAhJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3cgbGluZVR3b1xuICAgICAgICAgICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmVhc2VJbihkYXRhLmxlZnRUd28sIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmVhc2VJbihkYXRhLnJpZ2h0VHdvLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCAmIGhlaWdodFxuICAgICAgICAgICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmVhc2VJbk91dChkYXRhLndpZHRoT25lLCAyMSk7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuZWFzZUluT3V0KGRhdGEud2lkdGhUaHJlZSwgMjgpO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnRvcE9uZSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuc3ByaW5nKGRhdGEuYm90dG9tVGhyZWUsIDApO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmVhc2VJbk91dChkYXRhLnJvdGF0aW9uT25lLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5lYXNlSW5PdXQoZGF0YS5yb3RhdGlvblRocmVlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2NhbGUgdXAgbWVudVxuICAgICAgICAgICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmVhc2UoZGF0YS5tZW51U2NhbGUsIDEpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0IGFuaW1zXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuc3ByaW5nKGRhdGEudGV4dExlZnRUd28sIC0zMCwgc3ByaW5nT3B0aW9uc09uZSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGZyYW1lcl8xLmFuaW1hdGUuc3ByaW5nKGRhdGEudGV4dE9wYWNpdHlUd28sIDAsIHNwcmluZ09wdGlvbnNPbmUpLmZpbmlzaGVkO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnRleHRMZWZ0T25lLCAtMzAsIHNwcmluZ09wdGlvbnNPbmUpO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnRleHRPcGFjaXR5T25lLCAwLCBzcHJpbmdPcHRpb25zT25lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXNPcGVuZWQgPSAhaXNPcGVuZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcImxpbmVPbmVcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJsaW5lVGhyZWVcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJsaW5lVHdvXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwidGV4dE9uZVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcInRleHRUd29cIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJNZW51XCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9XTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/App.tsx\n");

/***/ }),

/***/ "./code/Examples.tsx":
/*!***************************!*\
  !*** ./code/Examples.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst data = framer_1.Data({ toggle: true, scale: framer_1.Animatable(1), opacity: framer_1.Animatable(1), rotation: framer_1.Animatable(0), rotationY: framer_1.Animatable(0) });\nexports.Scale = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: data.scale,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            data.scale.set(0.6);\n            framer_1.animate.spring(data.scale, 1);\n        },\n    };\n};\nexports.Rotate = props => {\n    window[\"__checkBudget__\"]();\n    data.rotation.set(props.rotation);\n    return {\n        rotation: data.rotation,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.spring(data.rotation, data.rotation.get() + 90, {\n                tension: 250,\n                friction: 20,\n            });\n        },\n    };\n};\nexports.Fade = props => {\n    window[\"__checkBudget__\"]();\n    data.opacity.set(props.opacity);\n    return {\n        opacity: data.opacity,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.linear(data.opacity, 0, 0.2);\n        },\n    };\n};\nexports.FlipOutput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        rotationY: data.rotationY,\n    };\n};\nexports.FlipInput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        onTap() {\n            window[\"__checkBudget__\"]();\n            const toggle = data.toggle;\n            framer_1.animate.spring({ rotationY: data.rotationY }, {\n                rotationY: toggle ? 360 : 0,\n            }, { tension: 200, friction: 20 });\n            data.toggle = !toggle;\n        },\n    };\n};\nexports.__info__ = [{ name: \"Scale\", type: \"override\" }, { name: \"Rotate\", type: \"override\" }, { name: \"Fade\", type: \"override\" }, { name: \"FlipOutput\", type: \"override\" }, { name: \"FlipInput\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0V4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsNEJBQTRCLG9KQUFvSjtBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw0QkFBNEI7QUFDakU7QUFDQSxhQUFhLEdBQUcsNkJBQTZCO0FBQzdDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsa0NBQWtDLEdBQUcsbUNBQW1DLEdBQUcsaUNBQWlDLEdBQUcsdUNBQXVDLEdBQUcsc0NBQXNDIiwiZmlsZSI6Ii4vY29kZS9FeGFtcGxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHsgdG9nZ2xlOiB0cnVlLCBzY2FsZTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgb3BhY2l0eTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgcm90YXRpb246IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksIHJvdGF0aW9uWTogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSB9KTtcbmV4cG9ydHMuU2NhbGUgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NhbGU6IGRhdGEuc2NhbGUsXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBkYXRhLnNjYWxlLnNldCgwLjYpO1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS5zY2FsZSwgMSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLlJvdGF0ZSA9IHByb3BzID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBkYXRhLnJvdGF0aW9uLnNldChwcm9wcy5yb3RhdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb246IGRhdGEucm90YXRpb24sXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnJvdGF0aW9uLCBkYXRhLnJvdGF0aW9uLmdldCgpICsgOTAsIHtcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAyNTAsXG4gICAgICAgICAgICAgICAgZnJpY3Rpb246IDIwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZhZGUgPSBwcm9wcyA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgZGF0YS5vcGFjaXR5LnNldChwcm9wcy5vcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLm9wYWNpdHksXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmxpbmVhcihkYXRhLm9wYWNpdHksIDAsIDAuMik7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZsaXBPdXRwdXQgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSxcbiAgICB9O1xufTtcbmV4cG9ydHMuRmxpcElucHV0ID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSBkYXRhLnRvZ2dsZTtcbiAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuc3ByaW5nKHsgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSB9LCB7XG4gICAgICAgICAgICAgICAgcm90YXRpb25ZOiB0b2dnbGUgPyAzNjAgOiAwLFxuICAgICAgICAgICAgfSwgeyB0ZW5zaW9uOiAyMDAsIGZyaWN0aW9uOiAyMCB9KTtcbiAgICAgICAgICAgIGRhdGEudG9nZ2xlID0gIXRvZ2dsZTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlNjYWxlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiUm90YXRlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiRmFkZVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkZsaXBPdXRwdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJGbGlwSW5wdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Examples.tsx\n");

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./node_modules/ruucm-util/index.js":
/*!******************************************!*\
  !*** ./node_modules/ruucm-util/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * Usage\n */\n// import util from '../../../../../ruucm-util/';\n// import { log } from '../../../../../ruucm-util/';\n\nvar environment = {\n  production: false\n};\nvar log = exports.log = function log(name, data) {\n  if (data === void 0) {\n    data = null;\n  }\n\n  if (!environment.production) {\n    if (data) {\n      console.log(name + \" ->\", data);\n      if (data === false || data === true || data === null || data === undefined) {\n        console.log(data);\n      }\n    } else console.log(name);\n  }\n};\nvar objectValue = exports.objectValue = function objectValue(func, defaultValue) {\n  try {\n    return func();\n  } catch (err) {\n    return defaultValue;\n  }\n};\nvar ArrayToObject = exports.ArrayToObject = function ArrayToObject(arr) {\n  var rv = {};\n  for (var i = 0; i < arr.length; ++i) {\n    rv[arr[i]] = true;\n  }return rv;\n};\nvar ObjectToArray = exports.ObjectToArray = function ObjectToArray(obj) {\n  var result = Object.values(obj);\n  return result;\n};\n\nvar commaPipe = exports.commaPipe = function commaPipe(number) {\n  if (number != null) return number.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\n};\n\nvar getParameterByName = exports.getParameterByName = function getParameterByName(name, url) {\n  if (!url) url = window.location.href;\n  name = name.replace(/[\\[\\]]/g, \"\\\\$&\");\n  var regex = new RegExp(\"[?&]\" + name + \"(=([^&#]*)|&|#|$)\"),\n      results = regex.exec(url);\n  if (!results) return null;\n  if (!results[2]) return \"\";\n  return decodeURIComponent(results[2].replace(/\\+/g, \" \"));\n};\n\nexports.default = {\n  log: log,\n  getParameterByName: getParameterByName,\n  objectValue: objectValue,\n  ArrayToObject: ArrayToObject,\n  ObjectToArray: ObjectToArray\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnV1Y20tdXRpbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFLEVBQUU7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3J1dWNtLXV0aWwvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxuICogVXNhZ2VcbiAqL1xuLy8gaW1wb3J0IHV0aWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vcnV1Y20tdXRpbC8nO1xuLy8gaW1wb3J0IHsgbG9nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcnV1Y20tdXRpbC8nO1xuXG52YXIgZW52aXJvbm1lbnQgPSB7XG4gIHByb2R1Y3Rpb246IGZhbHNlXG59O1xudmFyIGxvZyA9IGV4cG9ydHMubG9nID0gZnVuY3Rpb24gbG9nKG5hbWUsIGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IHZvaWQgMCkge1xuICAgIGRhdGEgPSBudWxsO1xuICB9XG5cbiAgaWYgKCFlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKG5hbWUgKyBcIiAtPlwiLCBkYXRhKTtcbiAgICAgIGlmIChkYXRhID09PSBmYWxzZSB8fCBkYXRhID09PSB0cnVlIHx8IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgfVxuICAgIH0gZWxzZSBjb25zb2xlLmxvZyhuYW1lKTtcbiAgfVxufTtcbnZhciBvYmplY3RWYWx1ZSA9IGV4cG9ydHMub2JqZWN0VmFsdWUgPSBmdW5jdGlvbiBvYmplY3RWYWx1ZShmdW5jLCBkZWZhdWx0VmFsdWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnVuYygpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9XG59O1xudmFyIEFycmF5VG9PYmplY3QgPSBleHBvcnRzLkFycmF5VG9PYmplY3QgPSBmdW5jdGlvbiBBcnJheVRvT2JqZWN0KGFycikge1xuICB2YXIgcnYgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICBydlthcnJbaV1dID0gdHJ1ZTtcbiAgfXJldHVybiBydjtcbn07XG52YXIgT2JqZWN0VG9BcnJheSA9IGV4cG9ydHMuT2JqZWN0VG9BcnJheSA9IGZ1bmN0aW9uIE9iamVjdFRvQXJyYXkob2JqKSB7XG4gIHZhciByZXN1bHQgPSBPYmplY3QudmFsdWVzKG9iaik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgY29tbWFQaXBlID0gZXhwb3J0cy5jb21tYVBpcGUgPSBmdW5jdGlvbiBjb21tYVBpcGUobnVtYmVyKSB7XG4gIGlmIChudW1iZXIgIT0gbnVsbCkgcmV0dXJuIG51bWJlci50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbn07XG5cbnZhciBnZXRQYXJhbWV0ZXJCeU5hbWUgPSBleHBvcnRzLmdldFBhcmFtZXRlckJ5TmFtZSA9IGZ1bmN0aW9uIGdldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIG5hbWUgKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxuICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcbiAgaWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcbiAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gXCJcIjtcbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBsb2c6IGxvZyxcbiAgZ2V0UGFyYW1ldGVyQnlOYW1lOiBnZXRQYXJhbWV0ZXJCeU5hbWUsXG4gIG9iamVjdFZhbHVlOiBvYmplY3RWYWx1ZSxcbiAgQXJyYXlUb09iamVjdDogQXJyYXlUb09iamVjdCxcbiAgT2JqZWN0VG9BcnJheTogT2JqZWN0VG9BcnJheVxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/ruucm-util/index.js\n");

/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.8.1","main":"build/framer.js","types":"build/framer.d.ts","author":"Framer","license":"MIT","devDependencies":{"@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"16.3.12","@types/react-dom":"^16.0.5","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","dts-bundle":"^0.7.3","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.3.2","react-dev-utils":"^5.0.1","react-dom":"^16.3.2","ts-jest":"^22.4.5","ts-loader":"^4.1.0","tslint":"^5.10.0","tslint-microsoft-contrib":"^5.0.3","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3.2","react-dom":"^16.3.2"},"dependencies":{"draft-js":"0.10.4","eventemitter3":"^3.1.0","hsluv":"^0.0.3","immutable":"^3.8.2"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page","children":true},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneX","type":"device"},{"name":"FramerGoogleNexus4","type":"device"},{"name":"FramerGoogleNexus5X","type":"device"},{"name":"FramerGoogleNexus6","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerHTCOneA9","type":"device"},{"name":"FramerMicrosoftLumia950","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS8","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"}]},"scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, default */
/***/ (function(module) {

module.exports = {"main":"build/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","framer":"^0.8.1"},"peerDependencies":{"framer":"^0.8.1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"d6674467-df75-47f8-9e63-06c40ee1745a"},"author":"te te","dependencies":{"ruucm-util":"^0.12.0"}};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ })

/******/ });
});