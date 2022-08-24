/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apikey.js":
/*!***********************!*\
  !*** ./src/apikey.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apikey = "72af2e94a10b0700c380ca1367d20cae";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apikey);


/***/ }),

/***/ "./src/functions/generateResults.js":
/*!******************************************!*\
  !*** ./src/functions/generateResults.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTempC": () => (/* binding */ displayTempC),
/* harmony export */   "displayTempF": () => (/* binding */ displayTempF),
/* harmony export */   "generateResults": () => (/* binding */ generateResults)
/* harmony export */ });
/* harmony import */ var _tempConversion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempConversion.js */ "./src/functions/tempConversion.js");


//assigning constants
const location = document.getElementById("location");
const temp = document.getElementById("current-temp");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feels-like");
const maxTemp = document.getElementById("max-temp");
const minTemp = document.getElementById("min-temp");

async function generateResults(data) {
  //adding text content
  location.textContent = `${data.city}, ${data.country}`;
  temp.textContent = `${(0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ctof)((0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ktoc)(data.temp))}\u00B0`;
  description.textContent = `${data.description}`;
  feelsLike.textContent = `Feels like: ${(0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ctof)((0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ktoc)(data.feelsLike))}\u00B0`;
  maxTemp.textContent = `Hi ${(0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ctof)((0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ktoc)(data.maxTemp))}\u00B0`;
  minTemp.textContent = `Lo ${(0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ctof)((0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ktoc)(data.minTemp))}\u00B0`;
}

//Display temp in different units
function displayTempF(data) {
  console.log(data);
  temp.textContent = `${(0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ctof)((0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ktoc)(data.temp))}\u00B0`;
  feelsLike.textContent = `Feels like: ${(0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ctof)((0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ktoc)(data.feelsLike))}\u00B0`;
  maxTemp.textContent = `Hi ${(0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ctof)((0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ktoc)(data.maxTemp))}\u00B0`;
  minTemp.textContent = `Lo ${(0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ctof)((0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ktoc)(data.minTemp))}\u00B0`;
}

function displayTempC(data) {
  console.log(data);
  temp.textContent = `${(0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ktoc)(data.temp)}\u00B0`;
  feelsLike.textContent = `Feels like: ${(0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ktoc)(data.feelsLike)}\u00B0`;
  maxTemp.textContent = `Hi ${(0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ktoc)(data.maxTemp)}\u00B0`;
  minTemp.textContent = `Lo ${(0,_tempConversion_js__WEBPACK_IMPORTED_MODULE_0__.ktoc)(data.minTemp)}\u00B0`;
}


/***/ }),

/***/ "./src/functions/getData.js":
/*!**********************************!*\
  !*** ./src/functions/getData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _apikey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apikey.js */ "./src/apikey.js");

const loader = document.getElementById("loader");
const tempConverter = document.getElementById("temp-converter");

async function getData(location) {
  const key = _apikey_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  loader.style.display = "block";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`,
    { mode: "cors" }
  );
  loader.style.display = "none";
  tempConverter.style.display = "block";
  const data = await response.json();
  return data;
}


/***/ }),

/***/ "./src/functions/processData.js":
/*!**************************************!*\
  !*** ./src/functions/processData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ processData)
/* harmony export */ });
async function processData(data) {
  const cleanData = {
    city: await data.name,
    country: await data.sys.country,
    description: await data.weather[0].description,
    maxTemp: await data.main.temp_max,
    minTemp: await data.main.temp_min,
    feelsLike: await data.main.feels_like,
    humidity: await data.main.humidity,
    temp: await data.main.temp,
    timezone: await data.timezone,
    visibility: await data.visibility,
    windSpeed: await data.wind.speed,
    windDirection: await data.wind.deg,
  };
  return cleanData;
}


/***/ }),

/***/ "./src/functions/tempConversion.js":
/*!*****************************************!*\
  !*** ./src/functions/tempConversion.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ctof": () => (/* binding */ ctof),
/* harmony export */   "ftoc": () => (/* binding */ ftoc),
/* harmony export */   "ktoc": () => (/* binding */ ktoc)
/* harmony export */ });
function ftoc(temp) {
  const cels = (temp - 32) * (5 / 9);
  const result = parseFloat(cels.toFixed(0));
  return result;
}

function ctof(temp) {
  const far = temp * (9 / 5) + 32;
  const result = parseFloat(far.toFixed(0));
  return result;
}

function ktoc(temp) {
  const cels = temp - 273.15;
  const result = parseFloat(cels.toFixed(0));
  return result;
}




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
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/getData.js */ "./src/functions/getData.js");
/* harmony import */ var _functions_processData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/processData.js */ "./src/functions/processData.js");
/* harmony import */ var _functions_generateResults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/generateResults.js */ "./src/functions/generateResults.js");




//DOM elements
const button = document.querySelector("button");
const searchBar = document.getElementById("search");
const tempConverter = document.getElementById("slider");
//Init
let cleanData;

//getWeather
const getWeather = async () => {
  const allData = await (0,_functions_getData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(searchBar.value);
  cleanData = await (0,_functions_processData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allData);
  (0,_functions_generateResults_js__WEBPACK_IMPORTED_MODULE_2__.generateResults)(cleanData);
  searchBar.value = "";
};

button.addEventListener("click", getWeather);
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});

tempConverter.addEventListener("click", () => {
  if (tempConverter.classList.contains("temp-f")) {
    (0,_functions_generateResults_js__WEBPACK_IMPORTED_MODULE_2__.displayTempC)(cleanData);
    tempConverter.classList.remove("temp-f");
    tempConverter.classList.add("temp-c");
  } else if (tempConverter.classList.contains("temp-c")) {
    (0,_functions_generateResults_js__WEBPACK_IMPORTED_MODULE_2__.displayTempF)(cleanData);
    tempConverter.classList.remove("temp-c");
    tempConverter.classList.add("temp-f");
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEaUM7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSw0QkFBNEIsVUFBVSxJQUFJLGFBQWE7QUFDdkQsd0JBQXdCLHdEQUFJLENBQUMsd0RBQUksYUFBYTtBQUM5QywrQkFBK0IsaUJBQWlCO0FBQ2hELHlDQUF5Qyx3REFBSSxDQUFDLHdEQUFJLGtCQUFrQjtBQUNwRSw4QkFBOEIsd0RBQUksQ0FBQyx3REFBSSxnQkFBZ0I7QUFDdkQsOEJBQThCLHdEQUFJLENBQUMsd0RBQUksZ0JBQWdCO0FBQ3ZEOztBQUVBO0FBQ087QUFDUDtBQUNBLHdCQUF3Qix3REFBSSxDQUFDLHdEQUFJLGFBQWE7QUFDOUMseUNBQXlDLHdEQUFJLENBQUMsd0RBQUksa0JBQWtCO0FBQ3BFLDhCQUE4Qix3REFBSSxDQUFDLHdEQUFJLGdCQUFnQjtBQUN2RCw4QkFBOEIsd0RBQUksQ0FBQyx3REFBSSxnQkFBZ0I7QUFDdkQ7O0FBRU87QUFDUDtBQUNBLHdCQUF3Qix3REFBSSxZQUFZO0FBQ3hDLHlDQUF5Qyx3REFBSSxpQkFBaUI7QUFDOUQsOEJBQThCLHdEQUFJLGVBQWU7QUFDakQsOEJBQThCLHdEQUFJLGVBQWU7QUFDakQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ2tDO0FBQ2xDO0FBQ0E7O0FBRWU7QUFDZixjQUFjLGtEQUFNO0FBQ3BCO0FBQ0E7QUFDQSx5REFBeUQsU0FBUyxTQUFTLElBQUk7QUFDL0UsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRCOzs7Ozs7O1VDbEI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDUTtBQUtiOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixpRUFBTztBQUMvQixvQkFBb0IscUVBQVc7QUFDL0IsRUFBRSw4RUFBZTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLDJFQUFZO0FBQ2hCO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSUFBSSwyRUFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpa2V5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9nZW5lcmF0ZVJlc3VsdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL3Byb2Nlc3NEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy90ZW1wQ29udmVyc2lvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaWtleSA9IFwiNzJhZjJlOTRhMTBiMDcwMGMzODBjYTEzNjdkMjBjYWVcIjtcbmV4cG9ydCBkZWZhdWx0IGFwaWtleTtcbiIsImltcG9ydCB7IGZ0b2MsIGt0b2MsIGN0b2YgfSBmcm9tIFwiLi90ZW1wQ29udmVyc2lvbi5qc1wiO1xuXG4vL2Fzc2lnbmluZyBjb25zdGFudHNcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdGVtcFwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHMtbGlrZVwiKTtcbmNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1heC10ZW1wXCIpO1xuY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWluLXRlbXBcIik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVJlc3VsdHMoZGF0YSkge1xuICAvL2FkZGluZyB0ZXh0IGNvbnRlbnRcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtkYXRhLmNpdHl9LCAke2RhdGEuY291bnRyeX1gO1xuICB0ZW1wLnRleHRDb250ZW50ID0gYCR7Y3RvZihrdG9jKGRhdGEudGVtcCkpfVxcdTAwQjBgO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEuZGVzY3JpcHRpb259YDtcbiAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7Y3RvZihrdG9jKGRhdGEuZmVlbHNMaWtlKSl9XFx1MDBCMGA7XG4gIG1heFRlbXAudGV4dENvbnRlbnQgPSBgSGkgJHtjdG9mKGt0b2MoZGF0YS5tYXhUZW1wKSl9XFx1MDBCMGA7XG4gIG1pblRlbXAudGV4dENvbnRlbnQgPSBgTG8gJHtjdG9mKGt0b2MoZGF0YS5taW5UZW1wKSl9XFx1MDBCMGA7XG59XG5cbi8vRGlzcGxheSB0ZW1wIGluIGRpZmZlcmVudCB1bml0c1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUZW1wRihkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICB0ZW1wLnRleHRDb250ZW50ID0gYCR7Y3RvZihrdG9jKGRhdGEudGVtcCkpfVxcdTAwQjBgO1xuICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtjdG9mKGt0b2MoZGF0YS5mZWVsc0xpa2UpKX1cXHUwMEIwYDtcbiAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGBIaSAke2N0b2Yoa3RvYyhkYXRhLm1heFRlbXApKX1cXHUwMEIwYDtcbiAgbWluVGVtcC50ZXh0Q29udGVudCA9IGBMbyAke2N0b2Yoa3RvYyhkYXRhLm1pblRlbXApKX1cXHUwMEIwYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUZW1wQyhkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICB0ZW1wLnRleHRDb250ZW50ID0gYCR7a3RvYyhkYXRhLnRlbXApfVxcdTAwQjBgO1xuICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtrdG9jKGRhdGEuZmVlbHNMaWtlKX1cXHUwMEIwYDtcbiAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGBIaSAke2t0b2MoZGF0YS5tYXhUZW1wKX1cXHUwMEIwYDtcbiAgbWluVGVtcC50ZXh0Q29udGVudCA9IGBMbyAke2t0b2MoZGF0YS5taW5UZW1wKX1cXHUwMEIwYDtcbn1cbiIsImltcG9ydCBhcGlrZXkgZnJvbSBcIi4uL2FwaWtleS5qc1wiO1xuY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXJcIik7XG5jb25zdCB0ZW1wQ29udmVydGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wLWNvbnZlcnRlclwiKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShsb2NhdGlvbikge1xuICBjb25zdCBrZXkgPSBhcGlrZXk7XG4gIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPSR7a2V5fWAsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHRlbXBDb252ZXJ0ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XG4gIGNvbnN0IGNsZWFuRGF0YSA9IHtcbiAgICBjaXR5OiBhd2FpdCBkYXRhLm5hbWUsXG4gICAgY291bnRyeTogYXdhaXQgZGF0YS5zeXMuY291bnRyeSxcbiAgICBkZXNjcmlwdGlvbjogYXdhaXQgZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgIG1heFRlbXA6IGF3YWl0IGRhdGEubWFpbi50ZW1wX21heCxcbiAgICBtaW5UZW1wOiBhd2FpdCBkYXRhLm1haW4udGVtcF9taW4sXG4gICAgZmVlbHNMaWtlOiBhd2FpdCBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICBodW1pZGl0eTogYXdhaXQgZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgIHRlbXA6IGF3YWl0IGRhdGEubWFpbi50ZW1wLFxuICAgIHRpbWV6b25lOiBhd2FpdCBkYXRhLnRpbWV6b25lLFxuICAgIHZpc2liaWxpdHk6IGF3YWl0IGRhdGEudmlzaWJpbGl0eSxcbiAgICB3aW5kU3BlZWQ6IGF3YWl0IGRhdGEud2luZC5zcGVlZCxcbiAgICB3aW5kRGlyZWN0aW9uOiBhd2FpdCBkYXRhLndpbmQuZGVnLFxuICB9O1xuICByZXR1cm4gY2xlYW5EYXRhO1xufVxuIiwiZnVuY3Rpb24gZnRvYyh0ZW1wKSB7XG4gIGNvbnN0IGNlbHMgPSAodGVtcCAtIDMyKSAqICg1IC8gOSk7XG4gIGNvbnN0IHJlc3VsdCA9IHBhcnNlRmxvYXQoY2Vscy50b0ZpeGVkKDApKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY3RvZih0ZW1wKSB7XG4gIGNvbnN0IGZhciA9IHRlbXAgKiAoOSAvIDUpICsgMzI7XG4gIGNvbnN0IHJlc3VsdCA9IHBhcnNlRmxvYXQoZmFyLnRvRml4ZWQoMCkpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBrdG9jKHRlbXApIHtcbiAgY29uc3QgY2VscyA9IHRlbXAgLSAyNzMuMTU7XG4gIGNvbnN0IHJlc3VsdCA9IHBhcnNlRmxvYXQoY2Vscy50b0ZpeGVkKDApKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IHsgZnRvYywgY3RvZiwga3RvYyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0RGF0YSBmcm9tIFwiLi9mdW5jdGlvbnMvZ2V0RGF0YS5qc1wiO1xuaW1wb3J0IHByb2Nlc3NEYXRhIGZyb20gXCIuL2Z1bmN0aW9ucy9wcm9jZXNzRGF0YS5qc1wiO1xuaW1wb3J0IHtcbiAgZ2VuZXJhdGVSZXN1bHRzLFxuICBkaXNwbGF5VGVtcEMsXG4gIGRpc3BsYXlUZW1wRixcbn0gZnJvbSBcIi4vZnVuY3Rpb25zL2dlbmVyYXRlUmVzdWx0cy5qc1wiO1xuXG4vL0RPTSBlbGVtZW50c1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xuY29uc3QgdGVtcENvbnZlcnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpZGVyXCIpO1xuLy9Jbml0XG5sZXQgY2xlYW5EYXRhO1xuXG4vL2dldFdlYXRoZXJcbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbERhdGEgPSBhd2FpdCBnZXREYXRhKHNlYXJjaEJhci52YWx1ZSk7XG4gIGNsZWFuRGF0YSA9IGF3YWl0IHByb2Nlc3NEYXRhKGFsbERhdGEpO1xuICBnZW5lcmF0ZVJlc3VsdHMoY2xlYW5EYXRhKTtcbiAgc2VhcmNoQmFyLnZhbHVlID0gXCJcIjtcbn07XG5cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0V2VhdGhlcik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBnZXRXZWF0aGVyKCk7XG4gIH1cbn0pO1xuXG50ZW1wQ29udmVydGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmICh0ZW1wQ29udmVydGVyLmNsYXNzTGlzdC5jb250YWlucyhcInRlbXAtZlwiKSkge1xuICAgIGRpc3BsYXlUZW1wQyhjbGVhbkRhdGEpO1xuICAgIHRlbXBDb252ZXJ0ZXIuY2xhc3NMaXN0LnJlbW92ZShcInRlbXAtZlwiKTtcbiAgICB0ZW1wQ29udmVydGVyLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLWNcIik7XG4gIH0gZWxzZSBpZiAodGVtcENvbnZlcnRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJ0ZW1wLWNcIikpIHtcbiAgICBkaXNwbGF5VGVtcEYoY2xlYW5EYXRhKTtcbiAgICB0ZW1wQ29udmVydGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZW1wLWNcIik7XG4gICAgdGVtcENvbnZlcnRlci5jbGFzc0xpc3QuYWRkKFwidGVtcC1mXCIpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==