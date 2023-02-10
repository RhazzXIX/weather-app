/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/createDom.js":
/*!**********************************!*\
  !*** ./src/scripts/createDom.js ***!
  \**********************************/
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
    return {
      card,
      unitBtn
    };
  }
  function errorSection(err) {
    const section = document.createElement('section');
    section.setAttribute('id', 'error');
    const errorCard = document.createElement('div');
    errorCard.setAttribute('id', 'error');
    errorCard.textContent = err;
    section.appendChild(errorCard);
    return section;
  }
  return {
    weatherCard,
    errorSection
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
  let errorValue;
  function setUrl() {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fbb6454e4e06d89b469e57e298ab2736&units=${units}`;
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
    setUrl();
  }
  function fetchWeather() {
    return fetch(url, {
      mode: "cors"
    }).then(response => {
      if (!response.ok) error = true;
      return response.json();
    }).then(json => {
      if (error) {
        throw new Error(json.message);
      } else {
        const weatherData = json;
        return weatherData;
      }
    }).catch(err => {
      errorValue = err.message;
    });
  }
  async function layWeatherData() {
    try {
      const data = {
        ...(await fetchWeather())
      };
      if (error) {
        throw new Error(errorValue);
      }
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
      error = false;
      throw new Error(err.message);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 16px;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 70px 1fr 60px;\n  background-color: #56666b;\n  position: relative;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffb748;\n}\n\nmain {\n  display: grid;\n  grid-template-rows: 50px 1fr;\n  row-gap: 54px;\n  justify-items: center;\n  background-color: skyblue;\n  padding-top: 12px;\n}\n\nform {\n  display: flex;\n  align-items: flex-end;\n  column-gap: 16px;\n  border-bottom: 2px solid black;\n  padding: 6px  ;\n}\n\n\nform\ninput[type=text] {\n  appearance: none;\n  border: 0;\n  padding: 2px 6px;\n  background-color: transparent;\n  color: black\n}\n\n\nform \ninput::placeholder {\n  color: black;\n}\n\nform button {\n  appearance: none;\n  border: none;\n  height: max-content;\n  width: max-content;\n  background: none;\n  cursor: pointer;\n}\n\nimg#search {\n  width: 20px;\n}\n\nimg#search:active{\n  filter: invert(100);\n}\n\ndiv#card {\n  display: grid;\n  border: 2px solid #f0341f;\n  background-color: #cdf9ff;\n  box-shadow: 2px 2px 12px #4d150e;\n  height: 260px;\n  width: 220px;\n  border-radius: 8px;\n}\n\ndiv#card\nh3 {\n  padding: 12px;\n  border-radius: 8px 8px 0 0 ;\n  background-color: #fbed63;\n  box-shadow: 0 2px 4px #b4a946;\n  margin-bottom: 6px;\n  \n}\n\ndiv#card\ndiv#weather {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nimg#imgIcon {\n  width: 66px;\n}\n\ndiv#card\np {\n  margin-left: 12px;\n}\n\ndiv#card\nbutton#unit {\n  appearance: none;\n  margin: auto;\n  margin-bottom: 12px;\n  width: 100px;\n  padding: 4px;\n  border-radius: 8px;\n  background-color: white;\n  border: 2px solid;\n  border-color: #f0341f #8d2317 #8d2317 #f0341f;\n}\n\ndiv#card\nbutton#unit:active {\n  border-color: #8d2317 #f0341f #f0341f #8d2317;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  column-gap: 16px;\n  background-color: #6ac6f9;\n}\n\nimg#gitHub {\n  width: 26px;\n}\n\nsection#error {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\ndiv#error {\n  width: 220px;\n  height: 260px;\n  background-color: antiquewhite;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  padding: 20px;\n  border: 4px solid red;  \n  color: red;\n  font-size: 1.8rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,iCAAiC;EACjC,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,aAAa;EACb,qBAAqB;EACrB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,8BAA8B;EAC9B,cAAc;AAChB;;;AAGA;;EAEE,gBAAgB;EAChB,SAAS;EACT,gBAAgB;EAChB,6BAA6B;EAC7B;AACF;;;AAGA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,yBAAyB;EACzB,gCAAgC;EAChC,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,kBAAkB;;AAEpB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;EACjB,6CAA6C;AAC/C;;AAEA;;EAEE,6CAA6C;AAC/C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,UAAU;EACV,iBAAiB;AACnB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 16px;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 70px 1fr 60px;\n  background-color: #56666b;\n  position: relative;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffb748;\n}\n\nmain {\n  display: grid;\n  grid-template-rows: 50px 1fr;\n  row-gap: 54px;\n  justify-items: center;\n  background-color: skyblue;\n  padding-top: 12px;\n}\n\nform {\n  display: flex;\n  align-items: flex-end;\n  column-gap: 16px;\n  border-bottom: 2px solid black;\n  padding: 6px  ;\n}\n\n\nform\ninput[type=text] {\n  appearance: none;\n  border: 0;\n  padding: 2px 6px;\n  background-color: transparent;\n  color: black\n}\n\n\nform \ninput::placeholder {\n  color: black;\n}\n\nform button {\n  appearance: none;\n  border: none;\n  height: max-content;\n  width: max-content;\n  background: none;\n  cursor: pointer;\n}\n\nimg#search {\n  width: 20px;\n}\n\nimg#search:active{\n  filter: invert(100);\n}\n\ndiv#card {\n  display: grid;\n  border: 2px solid #f0341f;\n  background-color: #cdf9ff;\n  box-shadow: 2px 2px 12px #4d150e;\n  height: 260px;\n  width: 220px;\n  border-radius: 8px;\n}\n\ndiv#card\nh3 {\n  padding: 12px;\n  border-radius: 8px 8px 0 0 ;\n  background-color: #fbed63;\n  box-shadow: 0 2px 4px #b4a946;\n  margin-bottom: 6px;\n  \n}\n\ndiv#card\ndiv#weather {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nimg#imgIcon {\n  width: 66px;\n}\n\ndiv#card\np {\n  margin-left: 12px;\n}\n\ndiv#card\nbutton#unit {\n  appearance: none;\n  margin: auto;\n  margin-bottom: 12px;\n  width: 100px;\n  padding: 4px;\n  border-radius: 8px;\n  background-color: white;\n  border: 2px solid;\n  border-color: #f0341f #8d2317 #8d2317 #f0341f;\n}\n\ndiv#card\nbutton#unit:active {\n  border-color: #8d2317 #f0341f #f0341f #8d2317;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  column-gap: 16px;\n  background-color: #6ac6f9;\n}\n\nimg#gitHub {\n  width: 26px;\n}\n\nsection#error {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\ndiv#error {\n  width: 220px;\n  height: 260px;\n  background-color: antiquewhite;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  padding: 20px;\n  border: 4px solid red;  \n  color: red;\n  font-size: 1.8rem;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _scripts_createDom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/createDom */ "./src/scripts/createDom.js");





(function () {
  const body = document.querySelector("body");
  const input = body.querySelector("input#city");
  const main = body.querySelector("main");
  const form = body.querySelector("form");
  let cityInput;
  const github = body.querySelector("img#gitHub");
  github.src = _images_GitHub_Mark_64px_png__WEBPACK_IMPORTED_MODULE_1__;
  const searchBtn = body.querySelector("img#search");
  searchBtn.src = _images_magnify_svg__WEBPACK_IMPORTED_MODULE_2__;
  function clearForm() {
    input.value = "";
  }
  function postCard(weatherData) {
    const post = _scripts_createDom__WEBPACK_IMPORTED_MODULE_4__["default"].weatherCard(weatherData);
    if (main.querySelector("div#card")) {
      const currentCard = main.querySelector("div#card");
      main.removeChild(currentCard);
    }
    post.unitBtn.onclick = switchUnits;
    main.appendChild(post.card);
  }
  function removeError(e) {
    e.stopPropagation();
    const currentError = body.querySelector("section#error");
    body.removeChild(currentError);
  }
  function postError(err) {
    const error = _scripts_createDom__WEBPACK_IMPORTED_MODULE_4__["default"].errorSection(err);
    body.appendChild(error);
    error.addEventListener("click", removeError);
    body.addEventListener("keypress", removeError, {
      once: true
    });
  }
  async function getWeather(city) {
    try {
      _scripts_current_weather__WEBPACK_IMPORTED_MODULE_3__["default"].setLocation(city);
      return _scripts_current_weather__WEBPACK_IMPORTED_MODULE_3__["default"].layWeatherData();
    } catch (err) {
      return err;
    }
  }
  async function facilitateSubmission() {
    try {
      const weather = await getWeather(cityInput);
      postCard(weather);
      clearForm();
    } catch (err) {
      postError(err);
      clearForm();
    }
  }
  function switchUnits(e) {
    e.stopPropagation();
    _scripts_current_weather__WEBPACK_IMPORTED_MODULE_3__["default"].toggleUnits();
    facilitateSubmission();
  }
  function submitForm(e) {
    e.stopPropagation();
    if (input.value) {
      e.preventDefault();
      cityInput = input.value;
      facilitateSubmission();
    }
  }
  cityInput = "Switzerland";
  facilitateSubmission();
  form.addEventListener("submit", submitForm);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2xCLFNBQVMsQ0FBQztNQUMzQ0ssUUFBUSxDQUFDeEUsT0FBTyxDQUFDO01BQ2pCc0UsU0FBUyxFQUFFO0lBQ2IsQ0FBQyxDQUFDLE9BQU9qRCxHQUFHLEVBQUU7TUFDWjZELFNBQVMsQ0FBQzdELEdBQUcsQ0FBQztNQUNkaUQsU0FBUyxFQUFFO0lBQ2I7RUFDRjtFQUVBLFNBQVNPLFdBQVcsQ0FBQ0UsQ0FBQyxFQUFFO0lBQ3RCQSxDQUFDLENBQUNDLGVBQWUsRUFBRTtJQUNuQnhELDRFQUEwQixFQUFFO0lBQzVCOEQsb0JBQW9CLEVBQUU7RUFDeEI7RUFFQSxTQUFTQyxVQUFVLENBQUNSLENBQUMsRUFBRTtJQUNyQkEsQ0FBQyxDQUFDQyxlQUFlLEVBQUU7SUFDbkIsSUFBSWYsS0FBSyxDQUFDTSxLQUFLLEVBQUU7TUFDZlEsQ0FBQyxDQUFDUyxjQUFjLEVBQUU7TUFDbEJyQixTQUFTLEdBQUdGLEtBQUssQ0FBQ00sS0FBSztNQUN2QmUsb0JBQW9CLEVBQUU7SUFDeEI7RUFDRjtFQUVBbkIsU0FBUyxHQUFHLGFBQWE7RUFDekJtQixvQkFBb0IsRUFBRTtFQUV0QnBCLElBQUksQ0FBQ2lCLGdCQUFnQixDQUFDLFFBQVEsRUFBRUksVUFBVSxDQUFDO0FBQzdDLENBQUMsR0FBRyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9jcmVhdGVEb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9jdXJyZW50LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHdlYXRoZXJDYXJkKGRhdGEpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FyZFwiKTtcblxuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY2l0eS50ZXh0Q29udGVudCA9IGRhdGEuY2l0eU5hbWU7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjaXR5KTtcblxuICAgIGNvbnN0IHdlYXRoZXJIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlYXRoZXJIb2xkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyXCIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQod2VhdGhlckhvbGRlcik7XG5cbiAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIHdlYXRoZXIudGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uXG4gICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAubWFwKChzdHJpbmcpID0+IHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSlcbiAgICAgIC5qb2luKFwiIFwiKTtcbiAgICB3ZWF0aGVySG9sZGVyLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuXG4gICAgY29uc3Qgd2VhdGhlckltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHdlYXRoZXJJbWcuc3JjID0gZGF0YS5pY29uU3JjO1xuICAgIHdlYXRoZXJJbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWdJY29uXCIpO1xuICAgIHdlYXRoZXJIb2xkZXIuYXBwZW5kQ2hpbGQod2VhdGhlckltZyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGFkZGl0aW9uYWxJbmZvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZmVlbFwiKTtcbiAgICAgICAgICBhZGRpdGlvbmFsSW5mby50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2RhdGEuZmVlbHNMaWtlfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBhZGRpdGlvbmFsSW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbXBcIik7XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8udGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHtkYXRhLndpbmRTcGVlZH1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1bml0TGFiZWxcIik7XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8udGV4dENvbnRlbnQgPSBgRGlzcGxheWVkIHVuaXRzIGluOmA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW1wXCIpO1xuICAgICAgICAgIGFkZGl0aW9uYWxJbmZvLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke2RhdGEudGVtcH1gO1xuICAgICAgfVxuICAgICAgY2FyZC5hcHBlbmRDaGlsZChhZGRpdGlvbmFsSW5mbyk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdW5pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVuaXRcIik7XG4gICAgdW5pdEJ0bi50ZXh0Q29udGVudCA9IGRhdGEudW5pdC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGRhdGEudW5pdC5zbGljZSgxKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHVuaXRCdG4pXG5cbiAgICByZXR1cm4geyBjYXJkLCB1bml0QnRuIH07XG4gIH1cblxuICBmdW5jdGlvbiBlcnJvclNlY3Rpb24gKGVycikge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Vycm9yJyk7XG4gICAgY29uc3QgZXJyb3JDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXJyb3JDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXJyb3InKTtcbiAgICBlcnJvckNhcmQudGV4dENvbnRlbnQgPSBlcnI7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChlcnJvckNhcmQpO1xuXG4gICAgcmV0dXJuIHNlY3Rpb25cbiAgfVxuXG4gIHJldHVybiB7IHdlYXRoZXJDYXJkICwgZXJyb3JTZWN0aW9uIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGU7XG4iLCJjb25zdCBjdXJyZW50V2VhdGhlciA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBsb2NhdGlvbjtcbiAgbGV0IHVybDtcbiAgbGV0IHVuaXRzID0gXCJtZXRyaWNcIjtcbiAgbGV0IGVycm9yID0gZmFsc2U7XG4gIGxldCBlcnJvclZhbHVlO1xuXG4gIGZ1bmN0aW9uIHNldFVybCgpIHtcbiAgICB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD1mYmI2NDU0ZTRlMDZkODliNDY5ZTU3ZTI5OGFiMjczNiZ1bml0cz0ke3VuaXRzfWA7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVVbml0cygpIHtcbiAgICBpZiAodW5pdHMgPT09IFwibWV0cmljXCIpIHtcbiAgICAgIHVuaXRzID0gXCJpbXBlcmlhbFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0cyA9IFwibWV0cmljXCI7XG4gICAgfVxuICAgIHNldFVybCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TG9jYXRpb24obG9jYXRpb25OYW1lKSB7XG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbk5hbWU7XG4gICAgc2V0VXJsKCk7XG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFdlYXRoZXIoKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIGVycm9yID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGpzb247XG4gICAgICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZXJyb3JWYWx1ZSA9IGVyci5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBsYXlXZWF0aGVyRGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IHsgLi4uKGF3YWl0IGZldGNoV2VhdGhlcigpKSB9O1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdlYXRoZXIgPSB7XG4gICAgICAgIGNsb3VkUGVyY2VudGFnZTogZGF0YS5jbG91ZHMuYWxsLFxuICAgICAgICBjaXR5TmFtZTogZGF0YS5uYW1lLFxuICAgICAgICBmZWVsc0xpa2U6IGRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgICBtYXhUZW1wOiBkYXRhLm1haW4udGVtcF9tYXgsXG4gICAgICAgIG1pblRlbXA6IGRhdGEubWFpbi50ZW1wX21pbixcbiAgICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgICAgbWFpbldlYXRoZXI6IGRhdGEud2VhdGhlclswXS5tYWluLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICBpY29uU3JjOiBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYCxcbiAgICAgICAgdW5pdDogdW5pdHMsXG4gICAgICB9O1xuXG4gICAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgIGNhc2UgXCJpbXBlcmlhbFwiOlxuICAgICAgICAgIHdlYXRoZXIudGVtcCA9IGAke2RhdGEubWFpbi50ZW1wfeKEiWA7XG4gICAgICAgICAgd2VhdGhlci5mZWVsc0xpa2UgPSBgJHtkYXRhLm1haW4uZmVlbHNfbGlrZX3ihIlgO1xuICAgICAgICAgIHdlYXRoZXIubWF4VGVtcCA9IGAke2RhdGEubWFpbi50ZW1wX21heH3ihIlgO1xuICAgICAgICAgIHdlYXRoZXIubWluVGVtcCA9IGAke2RhdGEubWFpbi50ZW1wX21pbn3ihIlgO1xuICAgICAgICAgIHdlYXRoZXIud2luZFNwZWVkID0gYCR7ZGF0YS53aW5kLnNwZWVkfSBtcGhgO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHdlYXRoZXIudGVtcCA9IGAke2RhdGEubWFpbi50ZW1wfeKEg2A7XG4gICAgICAgICAgd2VhdGhlci5mZWVsc0xpa2UgPSBgJHtkYXRhLm1haW4uZmVlbHNfbGlrZX3ihINgO1xuICAgICAgICAgIHdlYXRoZXIubWF4VGVtcCA9IGAke2RhdGEubWFpbi50ZW1wX21heH3ihINgO1xuICAgICAgICAgIHdlYXRoZXIubWluVGVtcCA9IGAke2RhdGEubWFpbi50ZW1wX21pbn3ihINgO1xuICAgICAgICAgIHdlYXRoZXIud2luZFNwZWVkID0gYCR7ZGF0YS53aW5kLnNwZWVkfSBtL3NgO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2VhdGhlcjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGVycm9yID0gZmFsc2U7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHNldExvY2F0aW9uLCBsYXlXZWF0aGVyRGF0YSwgdG9nZ2xlVW5pdHMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRXZWF0aGVyO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY2NjZiO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NDg7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxuICByb3ctZ2FwOiA1NHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBjb2x1bW4tZ2FwOiAxNnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNnB4ICA7XFxufVxcblxcblxcbmZvcm1cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAycHggNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogYmxhY2tcXG59XFxuXFxuXFxuZm9ybSBcXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmltZyNzZWFyY2gge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbmltZyNzZWFyY2g6YWN0aXZle1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwKTtcXG59XFxuXFxuZGl2I2NhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMDM0MWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RmOWZmO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4ICM0ZDE1MGU7XFxuICBoZWlnaHQ6IDI2MHB4O1xcbiAgd2lkdGg6IDIyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5kaXYjY2FyZFxcbmgzIHtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMCA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJlZDYzO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4ICNiNGE5NDY7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICBcXG59XFxuXFxuZGl2I2NhcmRcXG5kaXYjd2VhdGhlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5pbWcjaW1nSWNvbiB7XFxuICB3aWR0aDogNjZweDtcXG59XFxuXFxuZGl2I2NhcmRcXG5wIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbn1cXG5cXG5kaXYjY2FyZFxcbmJ1dHRvbiN1bml0IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogI2YwMzQxZiAjOGQyMzE3ICM4ZDIzMTcgI2YwMzQxZjtcXG59XFxuXFxuZGl2I2NhcmRcXG5idXR0b24jdW5pdDphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjOGQyMzE3ICNmMDM0MWYgI2YwMzQxZiAjOGQyMzE3O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbHVtbi1nYXA6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFjNmY5O1xcbn1cXG5cXG5pbWcjZ2l0SHViIHtcXG4gIHdpZHRoOiAyNnB4O1xcbn1cXG5cXG5zZWN0aW9uI2Vycm9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2I2Vycm9yIHtcXG4gIHdpZHRoOiAyMjBweDtcXG4gIGhlaWdodDogMjYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDRweCBzb2xpZCByZWQ7ICBcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7O0FBR0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCO0FBQ0Y7OztBQUdBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0Isa0JBQWtCOztBQUVwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiw2Q0FBNkM7QUFDL0M7O0FBRUE7O0VBRUUsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA2MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NjY2YjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzQ4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgcm93LWdhcDogNTRweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxuICBwYWRkaW5nLXRvcDogMTJweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgY29sdW1uLWdhcDogMTZweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDZweCAgO1xcbn1cXG5cXG5cXG5mb3JtXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMnB4IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IGJsYWNrXFxufVxcblxcblxcbmZvcm0gXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbWcjc2VhcmNoIHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG5pbWcjc2VhcmNoOmFjdGl2ZXtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCk7XFxufVxcblxcbmRpdiNjYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZjAzNDFmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkZjlmZjtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTJweCAjNGQxNTBlO1xcbiAgaGVpZ2h0OiAyNjBweDtcXG4gIHdpZHRoOiAyMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuZGl2I2NhcmRcXG5oMyB7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDAgO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZWQ2MztcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjYjRhOTQ2O1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgXFxufVxcblxcbmRpdiNjYXJkXFxuZGl2I3dlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuaW1nI2ltZ0ljb24ge1xcbiAgd2lkdGg6IDY2cHg7XFxufVxcblxcbmRpdiNjYXJkXFxucCB7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG59XFxuXFxuZGl2I2NhcmRcXG5idXR0b24jdW5pdCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNmMDM0MWYgIzhkMjMxNyAjOGQyMzE3ICNmMDM0MWY7XFxufVxcblxcbmRpdiNjYXJkXFxuYnV0dG9uI3VuaXQ6YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogIzhkMjMxNyAjZjAzNDFmICNmMDM0MWYgIzhkMjMxNztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBjb2x1bW4tZ2FwOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhYzZmOTtcXG59XFxuXFxuaW1nI2dpdEh1YiB7XFxuICB3aWR0aDogMjZweDtcXG59XFxuXFxuc2VjdGlvbiNlcnJvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdiNlcnJvciB7XFxuICB3aWR0aDogMjIwcHg7XFxuICBoZWlnaHQ6IDI2MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiA0cHggc29saWQgcmVkOyAgXFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBnaXRIdWIgZnJvbSBcIi4vaW1hZ2VzL0dpdEh1Yi1NYXJrLTY0cHgucG5nXCI7XG5pbXBvcnQgbWFnbmlmeSBmcm9tIFwiLi9pbWFnZXMvbWFnbmlmeS5zdmdcIjtcbmltcG9ydCBjdXJyZW50V2VhdGhlciBmcm9tIFwiLi9zY3JpcHRzL2N1cnJlbnQtd2VhdGhlclwiO1xuaW1wb3J0IGNyZWF0ZSBmcm9tIFwiLi9zY3JpcHRzL2NyZWF0ZURvbVwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGlucHV0ID0gYm9keS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjY2l0eVwiKTtcbiAgY29uc3QgbWFpbiA9IGJvZHkucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGNvbnN0IGZvcm0gPSBib2R5LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICBsZXQgY2l0eUlucHV0O1xuXG4gIGNvbnN0IGdpdGh1YiA9IGJvZHkucXVlcnlTZWxlY3RvcihcImltZyNnaXRIdWJcIik7XG4gIGdpdGh1Yi5zcmMgPSBnaXRIdWI7XG5cbiAgY29uc3Qgc2VhcmNoQnRuID0gYm9keS5xdWVyeVNlbGVjdG9yKFwiaW1nI3NlYXJjaFwiKTtcbiAgc2VhcmNoQnRuLnNyYyA9IG1hZ25pZnk7XG5cbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvc3RDYXJkKHdlYXRoZXJEYXRhKSB7XG4gICAgY29uc3QgcG9zdCA9IGNyZWF0ZS53ZWF0aGVyQ2FyZCh3ZWF0aGVyRGF0YSk7XG4gICAgaWYgKG1haW4ucXVlcnlTZWxlY3RvcihcImRpdiNjYXJkXCIpKSB7XG4gICAgICBjb25zdCBjdXJyZW50Q2FyZCA9IG1haW4ucXVlcnlTZWxlY3RvcihcImRpdiNjYXJkXCIpO1xuICAgICAgbWFpbi5yZW1vdmVDaGlsZChjdXJyZW50Q2FyZCk7XG4gICAgfVxuICAgIHBvc3QudW5pdEJ0bi5vbmNsaWNrID0gc3dpdGNoVW5pdHM7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwb3N0LmNhcmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRXJyb3IoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY3VycmVudEVycm9yID0gYm9keS5xdWVyeVNlbGVjdG9yKFwic2VjdGlvbiNlcnJvclwiKTtcbiAgICBib2R5LnJlbW92ZUNoaWxkKGN1cnJlbnRFcnJvcik7XG4gIH1cblxuICBmdW5jdGlvbiBwb3N0RXJyb3IoZXJyKSB7XG4gICAgY29uc3QgZXJyb3IgPSBjcmVhdGUuZXJyb3JTZWN0aW9uKGVycik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChlcnJvcik7XG4gICAgZXJyb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUVycm9yKTtcbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCByZW1vdmVFcnJvciwge29uY2U6IHRydWV9ICkgO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gICAgdHJ5IHtcbiAgICAgIGN1cnJlbnRXZWF0aGVyLnNldExvY2F0aW9uKGNpdHkpO1xuICAgICAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyLmxheVdlYXRoZXJEYXRhKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gZXJyO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZhY2lsaXRhdGVTdWJtaXNzaW9uKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5SW5wdXQpO1xuICAgICAgcG9zdENhcmQod2VhdGhlcik7XG4gICAgICBjbGVhckZvcm0oKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHBvc3RFcnJvcihlcnIpO1xuICAgICAgY2xlYXJGb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoVW5pdHMoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY3VycmVudFdlYXRoZXIudG9nZ2xlVW5pdHMoKTtcbiAgICBmYWNpbGl0YXRlU3VibWlzc2lvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3VibWl0Rm9ybShlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoaW5wdXQudmFsdWUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNpdHlJbnB1dCA9IGlucHV0LnZhbHVlO1xuICAgICAgZmFjaWxpdGF0ZVN1Ym1pc3Npb24oKTtcbiAgICB9XG4gIH1cblxuICBjaXR5SW5wdXQgPSBcIlN3aXR6ZXJsYW5kXCI7XG4gIGZhY2lsaXRhdGVTdWJtaXNzaW9uKCk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEZvcm0pO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJ3ZWF0aGVyQ2FyZCIsImRhdGEiLCJjYXJkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2l0eSIsInRleHRDb250ZW50IiwiY2l0eU5hbWUiLCJhcHBlbmRDaGlsZCIsIndlYXRoZXJIb2xkZXIiLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJzcGxpdCIsIm1hcCIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwid2VhdGhlckltZyIsIkltYWdlIiwic3JjIiwiaWNvblNyYyIsImkiLCJhZGRpdGlvbmFsSW5mbyIsImZlZWxzTGlrZSIsIndpbmRTcGVlZCIsInRlbXAiLCJ1bml0QnRuIiwidW5pdCIsImVycm9yU2VjdGlvbiIsImVyciIsInNlY3Rpb24iLCJlcnJvckNhcmQiLCJjdXJyZW50V2VhdGhlciIsImxvY2F0aW9uIiwidXJsIiwidW5pdHMiLCJlcnJvciIsImVycm9yVmFsdWUiLCJzZXRVcmwiLCJ0b2dnbGVVbml0cyIsInNldExvY2F0aW9uIiwibG9jYXRpb25OYW1lIiwiZmV0Y2hXZWF0aGVyIiwiZmV0Y2giLCJtb2RlIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiRXJyb3IiLCJtZXNzYWdlIiwid2VhdGhlckRhdGEiLCJjYXRjaCIsImxheVdlYXRoZXJEYXRhIiwiY2xvdWRQZXJjZW50YWdlIiwiY2xvdWRzIiwiYWxsIiwibmFtZSIsIm1haW4iLCJmZWVsc19saWtlIiwibWF4VGVtcCIsInRlbXBfbWF4IiwibWluVGVtcCIsInRlbXBfbWluIiwiaHVtaWRpdHkiLCJtYWluV2VhdGhlciIsImljb24iLCJ3aW5kIiwic3BlZWQiLCJnaXRIdWIiLCJtYWduaWZ5IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsImZvcm0iLCJjaXR5SW5wdXQiLCJnaXRodWIiLCJzZWFyY2hCdG4iLCJjbGVhckZvcm0iLCJ2YWx1ZSIsInBvc3RDYXJkIiwicG9zdCIsImN1cnJlbnRDYXJkIiwicmVtb3ZlQ2hpbGQiLCJvbmNsaWNrIiwic3dpdGNoVW5pdHMiLCJyZW1vdmVFcnJvciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50RXJyb3IiLCJwb3N0RXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwib25jZSIsImdldFdlYXRoZXIiLCJmYWNpbGl0YXRlU3VibWlzc2lvbiIsInN1Ym1pdEZvcm0iLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=