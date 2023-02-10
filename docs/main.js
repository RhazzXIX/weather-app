/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const create = function () {
  function weatherCard(data) {
    const card = document.createElement("div");
    card.setAttribute("id", "card");
    const city = document.createElement("h3");
    city.textContent = data.cityName;
    card.appendChild(city);
    const weatherHolder = document.createElement("div");
    weatherHolder.setAttribute("id", "weather");
    card.appendChild(weatherHolder);
    const weather = document.createElement("h4");
    weather.textContent = data.description.split(" ").map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(" ");
    weatherHolder.appendChild(weather);
    const weatherImg = new Image();
    weatherImg.src = data.iconSrc;
    weatherImg.setAttribute("id", "imgIcon");
    weatherHolder.appendChild(weatherImg);
    for (let i = 0; i <= 3; i += 1) {
      const additionalInfo = document.createElement("p");
      switch (i) {
        case 1:
          additionalInfo.setAttribute("id", "feel");
          additionalInfo.textContent = `Feels Like: ${data.feelsLike}`;
          break;
        case 2:
          additionalInfo.setAttribute("id", "temp");
          additionalInfo.textContent = `Wind Speed: ${data.windSpeed}`;
          break;
        case 3:
          additionalInfo.setAttribute("id", "unitLabel");
          additionalInfo.textContent = `Displayed units in:`;
          break;
        default:
          additionalInfo.setAttribute("id", "temp");
          additionalInfo.textContent = `Temperature: ${data.temp}`;
      }
      card.appendChild(additionalInfo);
    }
    const unitBtn = document.createElement("button");
    unitBtn.setAttribute("id", "unit");
    unitBtn.textContent = data.unit.charAt(0).toUpperCase() + data.unit.slice(1);
    card.appendChild(unitBtn);
    console.log(data);
    return {
      card,
      unitBtn
    };
  }
  return {
    weatherCard
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);

/***/ }),

/***/ "./src/scripts/current-weather.js":
/*!****************************************!*\
  !*** ./src/scripts/current-weather.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const currentWeather = function () {
  let location;
  let url;
  let units = "metric";
  let error = false;
  function setUrl() {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fbb6454e4e06d89b469e57e298ab2736&units=${units}`;
    console.log(url);
  }
  function toggleUnits() {
    if (units === "metric") {
      units = "imperial";
    } else {
      units = "metric";
    }
    setUrl();
  }
  function setLocation(locationName) {
    location = locationName;
    console.log(location);
    setUrl();
  }
  function fetchWeather() {
    return fetch(url, {
      mode: "cors"
    }).then(response => {
      if (!response.ok) error = true;
      console.log(response);
      return response.json();
    }).finally(json => {
      console.log(error);
      if (error) {
        error = false;
        throw new Error(json.message);
      }
      const weatherData = json;
      return weatherData;
    }).catch(err => {
      console.log(err);
    });
  }
  async function layWeatherData() {
    try {
      const data = {
        ...(await fetchWeather())
      };
      const weather = {
        cloudPercentage: data.clouds.all,
        cityName: data.name,
        feelsLike: data.main.feels_like,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        humidity: data.main.humidity,
        mainWeather: data.weather[0].main,
        description: data.weather[0].description,
        iconSrc: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        unit: units
      };
      switch (units) {
        case "imperial":
          weather.temp = `${data.main.temp}℉`;
          weather.feelsLike = `${data.main.feels_like}℉`;
          weather.maxTemp = `${data.main.temp_max}℉`;
          weather.minTemp = `${data.main.temp_min}℉`;
          weather.windSpeed = `${data.wind.speed} mph`;
          break;
        default:
          weather.temp = `${data.main.temp}℃`;
          weather.feelsLike = `${data.main.feels_like}℃`;
          weather.maxTemp = `${data.main.temp_max}℃`;
          weather.minTemp = `${data.main.temp_min}℃`;
          weather.windSpeed = `${data.wind.speed} m/s`;
      }
      return weather;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  return {
    setLocation,
    layWeatherData,
    toggleUnits
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentWeather);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 16px;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 70px 1fr 70px;\n  background-color: #56666b;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffb748;\n}\n\nmain {\n  display: grid;\n  grid-template-rows: 76px 1fr;\n  row-gap: 54px;\n  justify-items: center;\n  background-color: skyblue;\n  padding-top: 12px;\n}\n\nform {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  row-gap: 6px;\n  padding: 0 6px;\n}\n\nform\ndiv#search {\n  display: flex;\n  align-items: center;\n  column-gap: 16px;\n  border-bottom: 2px solid black;\n  padding: 0 6px;\n}\n\nform\ndiv#unit {\n  display: grid;\n  grid-template: auto auto / auto auto;\n  row-gap: 6px;\n  column-gap: 12px;\n}\n\ninput[type=radio] {\n  vertical-align: -1px;\n}\n\nform\ndiv#unit\np {\n  grid-column: 1 / -1;\n}\n\nform div \ninput[type=text] {\n  appearance: none;\n  border: 0;\n  padding: 2px 6px;\n  background-color: transparent;\n  color: black\n}\n\nform \ninput::placeholder {\n  color: black;\n}\n\nform button {\n  appearance: none;\n  border: none;\n  height: max-content;\n  width: max-content;\n  background: none;\n  cursor: pointer;\n}\n\nimg#search {\n  width: 20px;\n}\n\ndiv#card {\n  display: grid;\n  border: 2px solid #f0341f;\n  background-color: #cdf9ff;\n  box-shadow: 2px 2px 12px #4d150e;\n  height: 260px;\n  width: 220px;\n  border-radius: 8px;\n}\n\ndiv#card\nh3 {\n  padding: 12px;\n  border-radius: 8px 8px 0 0 ;\n  background-color: #fbed63;\n  box-shadow: 0 2px 4px #b4a946;\n  margin-bottom: 6px;\n  \n}\n\ndiv#card\ndiv#weather {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nimg#imgIcon {\n  width: 66px;\n}\n\ndiv#card\np {\n  margin-left: 12px;\n}\n\ndiv#card\nbutton#unit {\n  appearance: none;\n  margin: auto;\n  margin-bottom: 12px;\n  width: 100px;\n  padding: 4px;\n  border-radius: 8px;\n  background-color: white;\n  border: 2px solid;\n  border-color: #f0341f #8d2317 #8d2317 #f0341f;\n}\n\ndiv#card\nbutton#unit:active {\n  border-color: #8d2317 #f0341f #f0341f #8d2317;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  column-gap: 16px;\n  background-color: #6ac6f9;\n}\n\nimg#gitHub {\n  width: 26px;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,aAAa;EACb,qBAAqB;EACrB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,cAAc;AAChB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,8BAA8B;EAC9B,cAAc;AAChB;;AAEA;;EAEE,aAAa;EACb,oCAAoC;EACpC,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;;EAEE,gBAAgB;EAChB,SAAS;EACT,gBAAgB;EAChB,6BAA6B;EAC7B;AACF;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,yBAAyB;EACzB,gCAAgC;EAChC,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,kBAAkB;;AAEpB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;EACjB,6CAA6C;AAC/C;;AAEA;;EAEE,6CAA6C;AAC/C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 16px;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 70px 1fr 70px;\n  background-color: #56666b;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffb748;\n}\n\nmain {\n  display: grid;\n  grid-template-rows: 76px 1fr;\n  row-gap: 54px;\n  justify-items: center;\n  background-color: skyblue;\n  padding-top: 12px;\n}\n\nform {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  row-gap: 6px;\n  padding: 0 6px;\n}\n\nform\ndiv#search {\n  display: flex;\n  align-items: center;\n  column-gap: 16px;\n  border-bottom: 2px solid black;\n  padding: 0 6px;\n}\n\nform\ndiv#unit {\n  display: grid;\n  grid-template: auto auto / auto auto;\n  row-gap: 6px;\n  column-gap: 12px;\n}\n\ninput[type=radio] {\n  vertical-align: -1px;\n}\n\nform\ndiv#unit\np {\n  grid-column: 1 / -1;\n}\n\nform div \ninput[type=text] {\n  appearance: none;\n  border: 0;\n  padding: 2px 6px;\n  background-color: transparent;\n  color: black\n}\n\nform \ninput::placeholder {\n  color: black;\n}\n\nform button {\n  appearance: none;\n  border: none;\n  height: max-content;\n  width: max-content;\n  background: none;\n  cursor: pointer;\n}\n\nimg#search {\n  width: 20px;\n}\n\ndiv#card {\n  display: grid;\n  border: 2px solid #f0341f;\n  background-color: #cdf9ff;\n  box-shadow: 2px 2px 12px #4d150e;\n  height: 260px;\n  width: 220px;\n  border-radius: 8px;\n}\n\ndiv#card\nh3 {\n  padding: 12px;\n  border-radius: 8px 8px 0 0 ;\n  background-color: #fbed63;\n  box-shadow: 0 2px 4px #b4a946;\n  margin-bottom: 6px;\n  \n}\n\ndiv#card\ndiv#weather {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nimg#imgIcon {\n  width: 66px;\n}\n\ndiv#card\np {\n  margin-left: 12px;\n}\n\ndiv#card\nbutton#unit {\n  appearance: none;\n  margin: auto;\n  margin-bottom: 12px;\n  width: 100px;\n  padding: 4px;\n  border-radius: 8px;\n  background-color: white;\n  border: 2px solid;\n  border-color: #f0341f #8d2317 #8d2317 #f0341f;\n}\n\ndiv#card\nbutton#unit:active {\n  border-color: #8d2317 #f0341f #f0341f #8d2317;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  column-gap: 16px;\n  background-color: #6ac6f9;\n}\n\nimg#gitHub {\n  width: 26px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/GitHub-Mark-64px.png":
/*!*****************************************!*\
  !*** ./src/images/GitHub-Mark-64px.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b039b2d83982c8256af3.png";

/***/ }),

/***/ "./src/images/magnify.svg":
/*!********************************!*\
  !*** ./src/images/magnify.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54ff7732bb1a5ff166c6.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _images_GitHub_Mark_64px_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/GitHub-Mark-64px.png */ "./src/images/GitHub-Mark-64px.png");
/* harmony import */ var _images_magnify_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/magnify.svg */ "./src/images/magnify.svg");
/* harmony import */ var _scripts_current_weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/current-weather */ "./src/scripts/current-weather.js");
/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/card */ "./src/scripts/card.js");





(function () {
  const body = document.querySelector('body');
  const searchBtn = body.querySelector('img#search');
  const github = body.querySelector('img#gitHub');
  const input = body.querySelector('input#city');
  const main = body.querySelector('main');
  github.src = _images_GitHub_Mark_64px_png__WEBPACK_IMPORTED_MODULE_1__;
  function checkForm(e) {
    e.stopPropagation();
    console.log(e);
    if (input.value) e.preventDefault();
  }
  searchBtn.addEventListener('click', checkForm);
  searchBtn.src = _images_magnify_svg__WEBPACK_IMPORTED_MODULE_2__;
  _scripts_current_weather__WEBPACK_IMPORTED_MODULE_3__["default"].setLocation('taguig');
  // currentWeather.toggleUnits();

  _scripts_current_weather__WEBPACK_IMPORTED_MODULE_3__["default"].layWeatherData().then(weatherData => {
    const post = _scripts_card__WEBPACK_IMPORTED_MODULE_4__["default"].weatherCard(weatherData);
    if (main.querySelector('div#card')) {
      const currentCard = main.querySelector('div#card');
      main.removeChild(currentCard);
    }
    main.appendChild(post.card);
  }).catch(err => console.log(err));
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLE1BQU0sR0FBSSxZQUFZO0VBQzFCLFNBQVNDLFdBQVcsQ0FBQ0MsSUFBSSxFQUFFO0lBQ3pCLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDRixJQUFJLENBQUNHLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO0lBRS9CLE1BQU1DLElBQUksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3pDRSxJQUFJLENBQUNDLFdBQVcsR0FBR04sSUFBSSxDQUFDTyxRQUFRO0lBQ2hDTixJQUFJLENBQUNPLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDO0lBRXRCLE1BQU1JLGFBQWEsR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ25ETSxhQUFhLENBQUNMLFlBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO0lBQzNDSCxJQUFJLENBQUNPLFdBQVcsQ0FBQ0MsYUFBYSxDQUFDO0lBRS9CLE1BQU1DLE9BQU8sR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzVDTyxPQUFPLENBQUNKLFdBQVcsR0FBR04sSUFBSSxDQUFDVyxXQUFXLENBQ25DQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ1ZDLEdBQUcsQ0FBRUMsTUFBTSxJQUFLQSxNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0csS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2pFQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ1pULGFBQWEsQ0FBQ0QsV0FBVyxDQUFDRSxPQUFPLENBQUM7SUFFbEMsTUFBTVMsVUFBVSxHQUFHLElBQUlDLEtBQUssRUFBRTtJQUM5QkQsVUFBVSxDQUFDRSxHQUFHLEdBQUdyQixJQUFJLENBQUNzQixPQUFPO0lBQzdCSCxVQUFVLENBQUNmLFlBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO0lBQ3hDSyxhQUFhLENBQUNELFdBQVcsQ0FBQ1csVUFBVSxDQUFDO0lBRXJDLEtBQUssSUFBSUksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUM5QixNQUFNQyxjQUFjLEdBQUd0QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7TUFDbEQsUUFBUW9CLENBQUM7UUFDUCxLQUFLLENBQUM7VUFDSkMsY0FBYyxDQUFDcEIsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7VUFDekNvQixjQUFjLENBQUNsQixXQUFXLEdBQUksZUFBY04sSUFBSSxDQUFDeUIsU0FBVSxFQUFDO1VBQzVEO1FBQ0YsS0FBSyxDQUFDO1VBQ0pELGNBQWMsQ0FBQ3BCLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO1VBQ3pDb0IsY0FBYyxDQUFDbEIsV0FBVyxHQUFJLGVBQWNOLElBQUksQ0FBQzBCLFNBQVUsRUFBQztVQUM1RDtRQUNGLEtBQUssQ0FBQztVQUNKRixjQUFjLENBQUNwQixZQUFZLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQztVQUM5Q29CLGNBQWMsQ0FBQ2xCLFdBQVcsR0FBSSxxQkFBb0I7VUFDbEQ7UUFDRjtVQUNFa0IsY0FBYyxDQUFDcEIsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7VUFDekNvQixjQUFjLENBQUNsQixXQUFXLEdBQUksZ0JBQWVOLElBQUksQ0FBQzJCLElBQUssRUFBQztNQUFDO01BRTdEMUIsSUFBSSxDQUFDTyxXQUFXLENBQUNnQixjQUFjLENBQUM7SUFDbEM7SUFFQSxNQUFNSSxPQUFPLEdBQUcxQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDaER5QixPQUFPLENBQUN4QixZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztJQUNsQ3dCLE9BQU8sQ0FBQ3RCLFdBQVcsR0FBR04sSUFBSSxDQUFDNkIsSUFBSSxDQUFDZCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRSxHQUFHaEIsSUFBSSxDQUFDNkIsSUFBSSxDQUFDWixLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVFaEIsSUFBSSxDQUFDTyxXQUFXLENBQUNvQixPQUFPLENBQUM7SUFFekJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDL0IsSUFBSSxDQUFDO0lBQ2pCLE9BQU87TUFBRUMsSUFBSTtNQUFFMkI7SUFBUSxDQUFDO0VBQzFCO0VBRUEsT0FBTztJQUFFN0I7RUFBWSxDQUFDO0FBQ3hCLENBQUMsRUFBRztBQUVKLGlFQUFlRCxNQUFNOzs7Ozs7Ozs7Ozs7OztBQzNEckIsTUFBTWtDLGNBQWMsR0FBSSxZQUFZO0VBQ2xDLElBQUlDLFFBQVE7RUFDWixJQUFJQyxHQUFHO0VBQ1AsSUFBSUMsS0FBSyxHQUFHLFFBQVE7RUFDcEIsSUFBSUMsS0FBSyxHQUFHLEtBQUs7RUFFakIsU0FBU0MsTUFBTSxHQUFHO0lBQ2hCSCxHQUFHLEdBQUkscURBQW9ERCxRQUFTLGlEQUFnREUsS0FBTSxFQUFDO0lBQzNITCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csR0FBRyxDQUFDO0VBQ2xCO0VBRUEsU0FBU0ksV0FBVyxHQUFHO0lBQ3JCLElBQUlILEtBQUssS0FBSyxRQUFRLEVBQUU7TUFDdEJBLEtBQUssR0FBRyxVQUFVO0lBQ3BCLENBQUMsTUFBTTtNQUNMQSxLQUFLLEdBQUcsUUFBUTtJQUNsQjtJQUNBRSxNQUFNLEVBQUU7RUFDVjtFQUVBLFNBQVNFLFdBQVcsQ0FBQ0MsWUFBWSxFQUFFO0lBQ2pDUCxRQUFRLEdBQUdPLFlBQVk7SUFDdkJWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxRQUFRLENBQUM7SUFDckJJLE1BQU0sRUFBRTtFQUNWO0VBRUEsU0FBU0ksWUFBWSxHQUFHO0lBQ3RCLE9BQU9DLEtBQUssQ0FBQ1IsR0FBRyxFQUFFO01BQUVTLElBQUksRUFBRTtJQUFPLENBQUMsQ0FBQyxDQUNoQ0MsSUFBSSxDQUFFQyxRQUFRLElBQUs7TUFDbEIsSUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQUUsRUFBRVYsS0FBSyxHQUFHLElBQUk7TUFDOUJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxRQUFRLENBQUM7TUFDckIsT0FBT0EsUUFBUSxDQUFDRSxJQUFJLEVBQUU7SUFDeEIsQ0FBQyxDQUFDLENBQ0RDLE9BQU8sQ0FBRUQsSUFBSSxJQUFLO01BQ2pCakIsT0FBTyxDQUFDQyxHQUFHLENBQUNLLEtBQUssQ0FBQztNQUNsQixJQUFJQSxLQUFLLEVBQUU7UUFDVEEsS0FBSyxHQUFHLEtBQUs7UUFDYixNQUFNLElBQUlhLEtBQUssQ0FBQ0YsSUFBSSxDQUFDRyxPQUFPLENBQUM7TUFDL0I7TUFDQSxNQUFNQyxXQUFXLEdBQUdKLElBQUk7TUFDeEIsT0FBT0ksV0FBVztJQUNwQixDQUFDLENBQUMsQ0FDREMsS0FBSyxDQUFFQyxHQUFHLElBQUs7TUFDZHZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsR0FBRyxDQUFDO0lBQ2xCLENBQUMsQ0FBQztFQUNOO0VBRUEsZUFBZUMsY0FBYyxHQUFHO0lBQzlCLElBQUk7TUFDRixNQUFNdEQsSUFBSSxHQUFHO1FBQUUsSUFBSSxNQUFNeUMsWUFBWSxFQUFFO01BQUUsQ0FBQztNQUMxQyxNQUFNL0IsT0FBTyxHQUFHO1FBQ2Q2QyxlQUFlLEVBQUV2RCxJQUFJLENBQUN3RCxNQUFNLENBQUNDLEdBQUc7UUFFaENsRCxRQUFRLEVBQUVQLElBQUksQ0FBQzBELElBQUk7UUFDbkJqQyxTQUFTLEVBQUV6QixJQUFJLENBQUMyRCxJQUFJLENBQUNDLFVBQVU7UUFDL0JDLE9BQU8sRUFBRTdELElBQUksQ0FBQzJELElBQUksQ0FBQ0csUUFBUTtRQUMzQkMsT0FBTyxFQUFFL0QsSUFBSSxDQUFDMkQsSUFBSSxDQUFDSyxRQUFRO1FBQzNCQyxRQUFRLEVBQUVqRSxJQUFJLENBQUMyRCxJQUFJLENBQUNNLFFBQVE7UUFDNUJDLFdBQVcsRUFBRWxFLElBQUksQ0FBQ1UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDaUQsSUFBSTtRQUNqQ2hELFdBQVcsRUFBRVgsSUFBSSxDQUFDVSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVc7UUFDeENXLE9BQU8sRUFBRyxvQ0FBbUN0QixJQUFJLENBQUNVLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ3lELElBQUssU0FBUTtRQUMxRXRDLElBQUksRUFBRU07TUFDUixDQUFDO01BRUQsUUFBUUEsS0FBSztRQUNYLEtBQUssVUFBVTtVQUNiekIsT0FBTyxDQUFDaUIsSUFBSSxHQUFJLEdBQUUzQixJQUFJLENBQUMyRCxJQUFJLENBQUNoQyxJQUFLLEdBQUU7VUFDbkNqQixPQUFPLENBQUNlLFNBQVMsR0FBSSxHQUFFekIsSUFBSSxDQUFDMkQsSUFBSSxDQUFDQyxVQUFXLEdBQUU7VUFDOUNsRCxPQUFPLENBQUNtRCxPQUFPLEdBQUksR0FBRTdELElBQUksQ0FBQzJELElBQUksQ0FBQ0csUUFBUyxHQUFFO1VBQzFDcEQsT0FBTyxDQUFDcUQsT0FBTyxHQUFJLEdBQUUvRCxJQUFJLENBQUMyRCxJQUFJLENBQUNLLFFBQVMsR0FBRTtVQUMxQ3RELE9BQU8sQ0FBQ2dCLFNBQVMsR0FBSSxHQUFFMUIsSUFBSSxDQUFDb0UsSUFBSSxDQUFDQyxLQUFNLE1BQUs7VUFDNUM7UUFDRjtVQUNFM0QsT0FBTyxDQUFDaUIsSUFBSSxHQUFJLEdBQUUzQixJQUFJLENBQUMyRCxJQUFJLENBQUNoQyxJQUFLLEdBQUU7VUFDbkNqQixPQUFPLENBQUNlLFNBQVMsR0FBSSxHQUFFekIsSUFBSSxDQUFDMkQsSUFBSSxDQUFDQyxVQUFXLEdBQUU7VUFDOUNsRCxPQUFPLENBQUNtRCxPQUFPLEdBQUksR0FBRTdELElBQUksQ0FBQzJELElBQUksQ0FBQ0csUUFBUyxHQUFFO1VBQzFDcEQsT0FBTyxDQUFDcUQsT0FBTyxHQUFJLEdBQUUvRCxJQUFJLENBQUMyRCxJQUFJLENBQUNLLFFBQVMsR0FBRTtVQUMxQ3RELE9BQU8sQ0FBQ2dCLFNBQVMsR0FBSSxHQUFFMUIsSUFBSSxDQUFDb0UsSUFBSSxDQUFDQyxLQUFNLE1BQUs7TUFBQztNQUdqRCxPQUFPM0QsT0FBTztJQUNoQixDQUFDLENBQUMsT0FBTzJDLEdBQUcsRUFBRTtNQUNadkIsT0FBTyxDQUFDQyxHQUFHLENBQUNzQixHQUFHLENBQUM7TUFDaEIsT0FBT0EsR0FBRztJQUNaO0VBQ0Y7RUFFQSxPQUFPO0lBQUVkLFdBQVc7SUFBRWUsY0FBYztJQUFFaEI7RUFBWSxDQUFDO0FBQ3JELENBQUMsRUFBRztBQUVKLGlFQUFlTixjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRjdCO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsVUFBVSxrQkFBa0Isa0JBQWtCLHNDQUFzQyw4QkFBOEIsR0FBRyxZQUFZLGtCQUFrQix3QkFBd0IsNEJBQTRCLDhCQUE4QixHQUFHLFVBQVUsa0JBQWtCLGlDQUFpQyxrQkFBa0IsMEJBQTBCLDhCQUE4QixzQkFBc0IsR0FBRyxVQUFVLGtCQUFrQix3QkFBd0IsMkJBQTJCLGlCQUFpQixtQkFBbUIsR0FBRyxzQkFBc0Isa0JBQWtCLHdCQUF3QixxQkFBcUIsbUNBQW1DLG1CQUFtQixHQUFHLG9CQUFvQixrQkFBa0IseUNBQXlDLGlCQUFpQixxQkFBcUIsR0FBRyx1QkFBdUIseUJBQXlCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGlDQUFpQyxxQkFBcUIsY0FBYyxxQkFBcUIsa0NBQWtDLG1CQUFtQiwrQkFBK0IsaUJBQWlCLEdBQUcsaUJBQWlCLHFCQUFxQixpQkFBaUIsd0JBQXdCLHVCQUF1QixxQkFBcUIsb0JBQW9CLEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLGNBQWMsa0JBQWtCLDhCQUE4Qiw4QkFBOEIscUNBQXFDLGtCQUFrQixpQkFBaUIsdUJBQXVCLEdBQUcsa0JBQWtCLGtCQUFrQixnQ0FBZ0MsOEJBQThCLGtDQUFrQyx1QkFBdUIsT0FBTywyQkFBMkIsa0JBQWtCLHdCQUF3QixrQ0FBa0MsR0FBRyxpQkFBaUIsZ0JBQWdCLEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLDJCQUEyQixxQkFBcUIsaUJBQWlCLHdCQUF3QixpQkFBaUIsaUJBQWlCLHVCQUF1Qiw0QkFBNEIsc0JBQXNCLGtEQUFrRCxHQUFHLGtDQUFrQyxrREFBa0QsR0FBRyxZQUFZLGtCQUFrQix3QkFBd0Isa0NBQWtDLHFCQUFxQiw4QkFBOEIsR0FBRyxnQkFBZ0IsZ0JBQWdCLEdBQUcsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSw0QkFBNEIsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsVUFBVSxrQkFBa0Isa0JBQWtCLHNDQUFzQyw4QkFBOEIsR0FBRyxZQUFZLGtCQUFrQix3QkFBd0IsNEJBQTRCLDhCQUE4QixHQUFHLFVBQVUsa0JBQWtCLGlDQUFpQyxrQkFBa0IsMEJBQTBCLDhCQUE4QixzQkFBc0IsR0FBRyxVQUFVLGtCQUFrQix3QkFBd0IsMkJBQTJCLGlCQUFpQixtQkFBbUIsR0FBRyxzQkFBc0Isa0JBQWtCLHdCQUF3QixxQkFBcUIsbUNBQW1DLG1CQUFtQixHQUFHLG9CQUFvQixrQkFBa0IseUNBQXlDLGlCQUFpQixxQkFBcUIsR0FBRyx1QkFBdUIseUJBQXlCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGlDQUFpQyxxQkFBcUIsY0FBYyxxQkFBcUIsa0NBQWtDLG1CQUFtQiwrQkFBK0IsaUJBQWlCLEdBQUcsaUJBQWlCLHFCQUFxQixpQkFBaUIsd0JBQXdCLHVCQUF1QixxQkFBcUIsb0JBQW9CLEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLGNBQWMsa0JBQWtCLDhCQUE4Qiw4QkFBOEIscUNBQXFDLGtCQUFrQixpQkFBaUIsdUJBQXVCLEdBQUcsa0JBQWtCLGtCQUFrQixnQ0FBZ0MsOEJBQThCLGtDQUFrQyx1QkFBdUIsT0FBTywyQkFBMkIsa0JBQWtCLHdCQUF3QixrQ0FBa0MsR0FBRyxpQkFBaUIsZ0JBQWdCLEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLDJCQUEyQixxQkFBcUIsaUJBQWlCLHdCQUF3QixpQkFBaUIsaUJBQWlCLHVCQUF1Qiw0QkFBNEIsc0JBQXNCLGtEQUFrRCxHQUFHLGtDQUFrQyxrREFBa0QsR0FBRyxZQUFZLGtCQUFrQix3QkFBd0Isa0NBQWtDLHFCQUFxQiw4QkFBOEIsR0FBRyxnQkFBZ0IsZ0JBQWdCLEdBQUcsbUJBQW1CO0FBQ2poTTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDdUI7QUFDUjtBQUNZO0FBQ25CO0FBRXBDLENBQUMsWUFBVztFQUNWLE1BQU13QyxJQUFJLEdBQUd0RSxRQUFRLENBQUN1RSxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQzNDLE1BQU1DLFNBQVMsR0FBR0YsSUFBSSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0VBQ2xELE1BQU1FLE1BQU0sR0FBR0gsSUFBSSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0VBQy9DLE1BQU1HLEtBQUssR0FBR0osSUFBSSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0VBQzlDLE1BQU1kLElBQUksR0FBR2EsSUFBSSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBRXZDRSxNQUFNLENBQUN0RCxHQUFHLEdBQUdpRCx5REFBTTtFQUNuQixTQUFTTyxTQUFTLENBQUNDLENBQUMsRUFBRTtJQUNwQkEsQ0FBQyxDQUFDQyxlQUFlLEVBQUU7SUFDbkJqRCxPQUFPLENBQUNDLEdBQUcsQ0FBQytDLENBQUMsQ0FBQztJQUNkLElBQUlGLEtBQUssQ0FBQ0ksS0FBSyxFQUFFRixDQUFDLENBQUNHLGNBQWMsRUFBRTtFQUNyQztFQUNBUCxTQUFTLENBQUNRLGdCQUFnQixDQUFDLE9BQU8sRUFBRUwsU0FBUyxDQUFDO0VBQzlDSCxTQUFTLENBQUNyRCxHQUFHLEdBQUdrRCxnREFBTztFQUV2QnZDLDRFQUEwQixDQUFDLFFBQVEsQ0FBQztFQUNwQzs7RUFFQUEsK0VBQTZCLEVBQUUsQ0FDNUJZLElBQUksQ0FBQ08sV0FBVyxJQUFJO0lBQ25CLE1BQU1nQyxJQUFJLEdBQUdyRixpRUFBa0IsQ0FBQ3FELFdBQVcsQ0FBQztJQUM1QyxJQUFHUSxJQUFJLENBQUNjLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNqQyxNQUFNVyxXQUFXLEdBQUd6QixJQUFJLENBQUNjLGFBQWEsQ0FBQyxVQUFVLENBQUM7TUFDbERkLElBQUksQ0FBQzBCLFdBQVcsQ0FBQ0QsV0FBVyxDQUFDO0lBQy9CO0lBQ0F6QixJQUFJLENBQUNuRCxXQUFXLENBQUMyRSxJQUFJLENBQUNsRixJQUFJLENBQUM7RUFDN0IsQ0FBQyxDQUFDLENBQ0RtRCxLQUFLLENBQUNDLEdBQUcsSUFBSXZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsR0FBRyxDQUFDLENBQUM7QUFFbkMsQ0FBQyxHQUFJLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9jdXJyZW50LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHdlYXRoZXJDYXJkKGRhdGEpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FyZFwiKTtcblxuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY2l0eS50ZXh0Q29udGVudCA9IGRhdGEuY2l0eU5hbWU7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjaXR5KTtcblxuICAgIGNvbnN0IHdlYXRoZXJIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlYXRoZXJIb2xkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyXCIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQod2VhdGhlckhvbGRlcik7XG5cbiAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIHdlYXRoZXIudGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uXG4gICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAubWFwKChzdHJpbmcpID0+IHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSlcbiAgICAgIC5qb2luKFwiIFwiKTtcbiAgICB3ZWF0aGVySG9sZGVyLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuXG4gICAgY29uc3Qgd2VhdGhlckltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHdlYXRoZXJJbWcuc3JjID0gZGF0YS5pY29uU3JjO1xuICAgIHdlYXRoZXJJbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWdJY29uXCIpO1xuICAgIHdlYXRoZXJIb2xkZXIuYXBwZW5kQ2hpbGQod2VhdGhlckltZyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGFkZGl0aW9uYWxJbmZvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZmVlbFwiKTtcbiAgICAgICAgICBhZGRpdGlvbmFsSW5mby50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2RhdGEuZmVlbHNMaWtlfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBhZGRpdGlvbmFsSW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbXBcIik7XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8udGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHtkYXRhLndpbmRTcGVlZH1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1bml0TGFiZWxcIik7XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8udGV4dENvbnRlbnQgPSBgRGlzcGxheWVkIHVuaXRzIGluOmA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW1wXCIpO1xuICAgICAgICAgIGFkZGl0aW9uYWxJbmZvLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke2RhdGEudGVtcH1gO1xuICAgICAgfVxuICAgICAgY2FyZC5hcHBlbmRDaGlsZChhZGRpdGlvbmFsSW5mbyk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdW5pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVuaXRcIik7XG4gICAgdW5pdEJ0bi50ZXh0Q29udGVudCA9IGRhdGEudW5pdC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGRhdGEudW5pdC5zbGljZSgxKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHVuaXRCdG4pXG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4geyBjYXJkLCB1bml0QnRuIH07XG4gIH1cblxuICByZXR1cm4geyB3ZWF0aGVyQ2FyZCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlO1xuIiwiY29uc3QgY3VycmVudFdlYXRoZXIgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgbG9jYXRpb247XG4gIGxldCB1cmw7XG4gIGxldCB1bml0cyA9IFwibWV0cmljXCI7XG4gIGxldCBlcnJvciA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHNldFVybCgpIHtcbiAgICB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD1mYmI2NDU0ZTRlMDZkODliNDY5ZTU3ZTI5OGFiMjczNiZ1bml0cz0ke3VuaXRzfWA7XG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVVuaXRzKCkge1xuICAgIGlmICh1bml0cyA9PT0gXCJtZXRyaWNcIikge1xuICAgICAgdW5pdHMgPSBcImltcGVyaWFsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXRzID0gXCJtZXRyaWNcIjtcbiAgICB9XG4gICAgc2V0VXJsKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRMb2NhdGlvbihsb2NhdGlvbk5hbWUpIHtcbiAgICBsb2NhdGlvbiA9IGxvY2F0aW9uTmFtZTtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gICAgc2V0VXJsKCk7XG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFdlYXRoZXIoKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIGVycm9yID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KChqc29uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGpzb247XG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBsYXlXZWF0aGVyRGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IHsgLi4uKGF3YWl0IGZldGNoV2VhdGhlcigpKSB9O1xuICAgICAgY29uc3Qgd2VhdGhlciA9IHtcbiAgICAgICAgY2xvdWRQZXJjZW50YWdlOiBkYXRhLmNsb3Vkcy5hbGwsXG5cbiAgICAgICAgY2l0eU5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgZmVlbHNMaWtlOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgbWF4VGVtcDogZGF0YS5tYWluLnRlbXBfbWF4LFxuICAgICAgICBtaW5UZW1wOiBkYXRhLm1haW4udGVtcF9taW4sXG4gICAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgICAgIG1haW5XZWF0aGVyOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgaWNvblNyYzogYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2AsXG4gICAgICAgIHVuaXQ6IHVuaXRzLFxuICAgICAgfTtcblxuICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICBjYXNlIFwiaW1wZXJpYWxcIjpcbiAgICAgICAgICB3ZWF0aGVyLnRlbXAgPSBgJHtkYXRhLm1haW4udGVtcH3ihIlgO1xuICAgICAgICAgIHdlYXRoZXIuZmVlbHNMaWtlID0gYCR7ZGF0YS5tYWluLmZlZWxzX2xpa2V94oSJYDtcbiAgICAgICAgICB3ZWF0aGVyLm1heFRlbXAgPSBgJHtkYXRhLm1haW4udGVtcF9tYXh94oSJYDtcbiAgICAgICAgICB3ZWF0aGVyLm1pblRlbXAgPSBgJHtkYXRhLm1haW4udGVtcF9taW594oSJYDtcbiAgICAgICAgICB3ZWF0aGVyLndpbmRTcGVlZCA9IGAke2RhdGEud2luZC5zcGVlZH0gbXBoYDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB3ZWF0aGVyLnRlbXAgPSBgJHtkYXRhLm1haW4udGVtcH3ihINgO1xuICAgICAgICAgIHdlYXRoZXIuZmVlbHNMaWtlID0gYCR7ZGF0YS5tYWluLmZlZWxzX2xpa2V94oSDYDtcbiAgICAgICAgICB3ZWF0aGVyLm1heFRlbXAgPSBgJHtkYXRhLm1haW4udGVtcF9tYXh94oSDYDtcbiAgICAgICAgICB3ZWF0aGVyLm1pblRlbXAgPSBgJHtkYXRhLm1haW4udGVtcF9taW594oSDYDtcbiAgICAgICAgICB3ZWF0aGVyLndpbmRTcGVlZCA9IGAke2RhdGEud2luZC5zcGVlZH0gbS9zYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdlYXRoZXI7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmV0dXJuIGVycjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBzZXRMb2NhdGlvbiwgbGF5V2VhdGhlckRhdGEsIHRvZ2dsZVVuaXRzIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50V2VhdGhlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NjY2YjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzQ4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDc2cHggMWZyO1xcbiAgcm93LWdhcDogNTRweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxuICBwYWRkaW5nLXRvcDogMTJweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICByb3ctZ2FwOiA2cHg7XFxuICBwYWRkaW5nOiAwIDZweDtcXG59XFxuXFxuZm9ybVxcbmRpdiNzZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiAxNnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMCA2cHg7XFxufVxcblxcbmZvcm1cXG5kaXYjdW5pdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIC8gYXV0byBhdXRvO1xcbiAgcm93LWdhcDogNnB4O1xcbiAgY29sdW1uLWdhcDogMTJweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgdmVydGljYWwtYWxpZ246IC0xcHg7XFxufVxcblxcbmZvcm1cXG5kaXYjdW5pdFxcbnAge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuZm9ybSBkaXYgXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMnB4IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IGJsYWNrXFxufVxcblxcbmZvcm0gXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbWcjc2VhcmNoIHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG5kaXYjY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2YwMzQxZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGY5ZmY7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEycHggIzRkMTUwZTtcXG4gIGhlaWdodDogMjYwcHg7XFxuICB3aWR0aDogMjIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmRpdiNjYXJkXFxuaDMge1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwIDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmVkNjM7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggI2I0YTk0NjtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIFxcbn1cXG5cXG5kaXYjY2FyZFxcbmRpdiN3ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbmltZyNpbWdJY29uIHtcXG4gIHdpZHRoOiA2NnB4O1xcbn1cXG5cXG5kaXYjY2FyZFxcbnAge1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxufVxcblxcbmRpdiNjYXJkXFxuYnV0dG9uI3VuaXQge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjZjAzNDFmICM4ZDIzMTcgIzhkMjMxNyAjZjAzNDFmO1xcbn1cXG5cXG5kaXYjY2FyZFxcbmJ1dHRvbiN1bml0OmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6ICM4ZDIzMTcgI2YwMzQxZiAjZjAzNDFmICM4ZDIzMTc7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgY29sdW1uLWdhcDogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWM2Zjk7XFxufVxcblxcbmltZyNnaXRIdWIge1xcbiAgd2lkdGg6IDI2cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7OztFQUdFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0I7QUFDRjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGtCQUFrQjs7QUFFcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsNkNBQTZDO0FBQy9DOztBQUVBOztFQUVFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NjY2YjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzQ4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDc2cHggMWZyO1xcbiAgcm93LWdhcDogNTRweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxuICBwYWRkaW5nLXRvcDogMTJweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICByb3ctZ2FwOiA2cHg7XFxuICBwYWRkaW5nOiAwIDZweDtcXG59XFxuXFxuZm9ybVxcbmRpdiNzZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiAxNnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMCA2cHg7XFxufVxcblxcbmZvcm1cXG5kaXYjdW5pdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIC8gYXV0byBhdXRvO1xcbiAgcm93LWdhcDogNnB4O1xcbiAgY29sdW1uLWdhcDogMTJweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgdmVydGljYWwtYWxpZ246IC0xcHg7XFxufVxcblxcbmZvcm1cXG5kaXYjdW5pdFxcbnAge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuZm9ybSBkaXYgXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMnB4IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IGJsYWNrXFxufVxcblxcbmZvcm0gXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbWcjc2VhcmNoIHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG5kaXYjY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2YwMzQxZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGY5ZmY7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEycHggIzRkMTUwZTtcXG4gIGhlaWdodDogMjYwcHg7XFxuICB3aWR0aDogMjIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmRpdiNjYXJkXFxuaDMge1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwIDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmVkNjM7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggI2I0YTk0NjtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIFxcbn1cXG5cXG5kaXYjY2FyZFxcbmRpdiN3ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbmltZyNpbWdJY29uIHtcXG4gIHdpZHRoOiA2NnB4O1xcbn1cXG5cXG5kaXYjY2FyZFxcbnAge1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxufVxcblxcbmRpdiNjYXJkXFxuYnV0dG9uI3VuaXQge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjZjAzNDFmICM4ZDIzMTcgIzhkMjMxNyAjZjAzNDFmO1xcbn1cXG5cXG5kaXYjY2FyZFxcbmJ1dHRvbiN1bml0OmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6ICM4ZDIzMTcgI2YwMzQxZiAjZjAzNDFmICM4ZDIzMTc7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgY29sdW1uLWdhcDogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWM2Zjk7XFxufVxcblxcbmltZyNnaXRIdWIge1xcbiAgd2lkdGg6IDI2cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2l0SHViIGZyb20gJy4vaW1hZ2VzL0dpdEh1Yi1NYXJrLTY0cHgucG5nJztcbmltcG9ydCBtYWduaWZ5IGZyb20gJy4vaW1hZ2VzL21hZ25pZnkuc3ZnJztcbmltcG9ydCBjdXJyZW50V2VhdGhlciBmcm9tICcuL3NjcmlwdHMvY3VycmVudC13ZWF0aGVyJztcbmltcG9ydCBjcmVhdGUgZnJvbSAnLi9zY3JpcHRzL2NhcmQnO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IHNlYXJjaEJ0biA9IGJvZHkucXVlcnlTZWxlY3RvcignaW1nI3NlYXJjaCcpO1xuICBjb25zdCBnaXRodWIgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJ2ltZyNnaXRIdWInKTtcbiAgY29uc3QgaW5wdXQgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2NpdHknKTtcbiAgY29uc3QgbWFpbiA9IGJvZHkucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gIGdpdGh1Yi5zcmMgPSBnaXRIdWI7XG4gIGZ1bmN0aW9uIGNoZWNrRm9ybShlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBpZiAoaW5wdXQudmFsdWUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0Zvcm0pO1xuICBzZWFyY2hCdG4uc3JjID0gbWFnbmlmeTtcblxuICBjdXJyZW50V2VhdGhlci5zZXRMb2NhdGlvbigndGFndWlnJyk7XG4gIC8vIGN1cnJlbnRXZWF0aGVyLnRvZ2dsZVVuaXRzKCk7XG4gIFxuICBjdXJyZW50V2VhdGhlci5sYXlXZWF0aGVyRGF0YSgpXG4gICAgLnRoZW4od2VhdGhlckRhdGEgPT4ge1xuICAgICAgY29uc3QgcG9zdCA9IGNyZWF0ZS53ZWF0aGVyQ2FyZCh3ZWF0aGVyRGF0YSk7XG4gICAgICBpZihtYWluLnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjYXJkJykpIHtcbiAgICAgICAgY29uc3QgY3VycmVudENhcmQgPSBtYWluLnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjYXJkJyk7XG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQoY3VycmVudENhcmQpO1xuICAgICAgfVxuICAgICAgbWFpbi5hcHBlbmRDaGlsZChwb3N0LmNhcmQpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxufSkgKClcblxuIl0sIm5hbWVzIjpbImNyZWF0ZSIsIndlYXRoZXJDYXJkIiwiZGF0YSIsImNhcmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjaXR5IiwidGV4dENvbnRlbnQiLCJjaXR5TmFtZSIsImFwcGVuZENoaWxkIiwid2VhdGhlckhvbGRlciIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsInNwbGl0IiwibWFwIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJ3ZWF0aGVySW1nIiwiSW1hZ2UiLCJzcmMiLCJpY29uU3JjIiwiaSIsImFkZGl0aW9uYWxJbmZvIiwiZmVlbHNMaWtlIiwid2luZFNwZWVkIiwidGVtcCIsInVuaXRCdG4iLCJ1bml0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRXZWF0aGVyIiwibG9jYXRpb24iLCJ1cmwiLCJ1bml0cyIsImVycm9yIiwic2V0VXJsIiwidG9nZ2xlVW5pdHMiLCJzZXRMb2NhdGlvbiIsImxvY2F0aW9uTmFtZSIsImZldGNoV2VhdGhlciIsImZldGNoIiwibW9kZSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImZpbmFsbHkiLCJFcnJvciIsIm1lc3NhZ2UiLCJ3ZWF0aGVyRGF0YSIsImNhdGNoIiwiZXJyIiwibGF5V2VhdGhlckRhdGEiLCJjbG91ZFBlcmNlbnRhZ2UiLCJjbG91ZHMiLCJhbGwiLCJuYW1lIiwibWFpbiIsImZlZWxzX2xpa2UiLCJtYXhUZW1wIiwidGVtcF9tYXgiLCJtaW5UZW1wIiwidGVtcF9taW4iLCJodW1pZGl0eSIsIm1haW5XZWF0aGVyIiwiaWNvbiIsIndpbmQiLCJzcGVlZCIsImdpdEh1YiIsIm1hZ25pZnkiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsInNlYXJjaEJ0biIsImdpdGh1YiIsImlucHV0IiwiY2hlY2tGb3JtIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwicG9zdCIsImN1cnJlbnRDYXJkIiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9