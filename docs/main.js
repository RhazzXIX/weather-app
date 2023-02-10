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
    unitBtn.textContent = data.unit;
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 16px;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 70px 1fr 70px;\n  background-color: #56666b;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffb748;\n}\n\nmain {\n  display: grid;\n  grid-template-rows: 76px 1fr;\n  row-gap: 54px;\n  justify-items: center;\n  background-color: skyblue;\n  padding-top: 12px;\n}\n\nform {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  row-gap: 6px;\n  padding: 0 6px;\n}\n\nform\ndiv#search {\n  display: flex;\n  align-items: center;\n  column-gap: 16px;\n  border-bottom: 2px solid black;\n  padding: 0 6px;\n}\n\nform\ndiv#unit {\n  display: grid;\n  grid-template: auto auto / auto auto;\n  row-gap: 6px;\n  column-gap: 12px;\n}\n\ninput[type=radio] {\n  vertical-align: -1px;\n}\n\nform\ndiv#unit\np {\n  grid-column: 1 / -1;\n}\n\nform div \ninput[type=text] {\n  appearance: none;\n  border: 0;\n  padding: 2px 6px;\n  background-color: transparent;\n  color: black\n}\n\nform \ninput::placeholder {\n  color: black;\n}\n\nform button {\n  appearance: none;\n  border: none;\n  height: max-content;\n  width: max-content;\n  background: none;\n  cursor: pointer;\n}\n\nimg#search {\n  width: 20px;\n}\n\ndiv#card {\n  border: 2px solid #f0341f;\n  background-color: #cdf9ff;\n  box-shadow: 2px 2px 12px #4d150e;\n  height: 260px;\n  width: 220px;\n  border-radius: 8px;\n}\n\ndiv#card\nh3 {\n  padding: 12px;\n  border-radius: 8px 8px 0 0 ;\n  background-color: #fbed63;\n  box-shadow: 0 2px 4px #b4a946;\n  margin-bottom: 6px;\n  \n}\n\ndiv#card\ndiv#weather {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  column-gap: 16px;\n  background-color: #6ac6f9;\n}\n\nimg#gitHub {\n  width: 26px;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,aAAa;EACb,qBAAqB;EACrB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,cAAc;AAChB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,8BAA8B;EAC9B,cAAc;AAChB;;AAEA;;EAEE,aAAa;EACb,oCAAoC;EACpC,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;;EAEE,gBAAgB;EAChB,SAAS;EACT,gBAAgB;EAChB,6BAA6B;EAC7B;AACF;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,gCAAgC;EAChC,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,kBAAkB;;AAEpB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 16px;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 70px 1fr 70px;\n  background-color: #56666b;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffb748;\n}\n\nmain {\n  display: grid;\n  grid-template-rows: 76px 1fr;\n  row-gap: 54px;\n  justify-items: center;\n  background-color: skyblue;\n  padding-top: 12px;\n}\n\nform {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  row-gap: 6px;\n  padding: 0 6px;\n}\n\nform\ndiv#search {\n  display: flex;\n  align-items: center;\n  column-gap: 16px;\n  border-bottom: 2px solid black;\n  padding: 0 6px;\n}\n\nform\ndiv#unit {\n  display: grid;\n  grid-template: auto auto / auto auto;\n  row-gap: 6px;\n  column-gap: 12px;\n}\n\ninput[type=radio] {\n  vertical-align: -1px;\n}\n\nform\ndiv#unit\np {\n  grid-column: 1 / -1;\n}\n\nform div \ninput[type=text] {\n  appearance: none;\n  border: 0;\n  padding: 2px 6px;\n  background-color: transparent;\n  color: black\n}\n\nform \ninput::placeholder {\n  color: black;\n}\n\nform button {\n  appearance: none;\n  border: none;\n  height: max-content;\n  width: max-content;\n  background: none;\n  cursor: pointer;\n}\n\nimg#search {\n  width: 20px;\n}\n\ndiv#card {\n  border: 2px solid #f0341f;\n  background-color: #cdf9ff;\n  box-shadow: 2px 2px 12px #4d150e;\n  height: 260px;\n  width: 220px;\n  border-radius: 8px;\n}\n\ndiv#card\nh3 {\n  padding: 12px;\n  border-radius: 8px 8px 0 0 ;\n  background-color: #fbed63;\n  box-shadow: 0 2px 4px #b4a946;\n  margin-bottom: 6px;\n  \n}\n\ndiv#card\ndiv#weather {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  column-gap: 16px;\n  background-color: #6ac6f9;\n}\n\nimg#gitHub {\n  width: 26px;\n}"],"sourceRoot":""}]);
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
  _scripts_current_weather__WEBPACK_IMPORTED_MODULE_3__["default"].setLocation('narra');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLE1BQU0sR0FBSSxZQUFZO0VBQzFCLFNBQVNDLFdBQVcsQ0FBQ0MsSUFBSSxFQUFFO0lBQ3pCLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDRixJQUFJLENBQUNHLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO0lBRS9CLE1BQU1DLElBQUksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3pDRSxJQUFJLENBQUNDLFdBQVcsR0FBR04sSUFBSSxDQUFDTyxRQUFRO0lBQ2hDTixJQUFJLENBQUNPLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDO0lBRXRCLE1BQU1JLGFBQWEsR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ25ETSxhQUFhLENBQUNMLFlBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO0lBQzNDSCxJQUFJLENBQUNPLFdBQVcsQ0FBQ0MsYUFBYSxDQUFDO0lBRS9CLE1BQU1DLE9BQU8sR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzVDTyxPQUFPLENBQUNKLFdBQVcsR0FBR04sSUFBSSxDQUFDVyxXQUFXLENBQ25DQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ1ZDLEdBQUcsQ0FBRUMsTUFBTSxJQUFLQSxNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0csS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2pFQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ1pULGFBQWEsQ0FBQ0QsV0FBVyxDQUFDRSxPQUFPLENBQUM7SUFFbEMsTUFBTVMsVUFBVSxHQUFHLElBQUlDLEtBQUssRUFBRTtJQUM5QkQsVUFBVSxDQUFDRSxHQUFHLEdBQUdyQixJQUFJLENBQUNzQixPQUFPO0lBQzdCSCxVQUFVLENBQUNmLFlBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO0lBQ3hDSyxhQUFhLENBQUNELFdBQVcsQ0FBQ1csVUFBVSxDQUFDO0lBRXJDLEtBQUssSUFBSUksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUM5QixNQUFNQyxjQUFjLEdBQUd0QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7TUFDbEQsUUFBUW9CLENBQUM7UUFDUCxLQUFLLENBQUM7VUFDSkMsY0FBYyxDQUFDcEIsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7VUFDekNvQixjQUFjLENBQUNsQixXQUFXLEdBQUksZUFBY04sSUFBSSxDQUFDeUIsU0FBVSxFQUFDO1VBQzVEO1FBQ0YsS0FBSyxDQUFDO1VBQ0pELGNBQWMsQ0FBQ3BCLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO1VBQ3pDb0IsY0FBYyxDQUFDbEIsV0FBVyxHQUFJLGVBQWNOLElBQUksQ0FBQzBCLFNBQVUsRUFBQztVQUM1RDtRQUNGLEtBQUssQ0FBQztVQUNKRixjQUFjLENBQUNwQixZQUFZLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQztVQUM5Q29CLGNBQWMsQ0FBQ2xCLFdBQVcsR0FBSSxxQkFBb0I7VUFDbEQ7UUFDRjtVQUNFa0IsY0FBYyxDQUFDcEIsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7VUFDekNvQixjQUFjLENBQUNsQixXQUFXLEdBQUksZ0JBQWVOLElBQUksQ0FBQzJCLElBQUssRUFBQztNQUFDO01BRTdEMUIsSUFBSSxDQUFDTyxXQUFXLENBQUNnQixjQUFjLENBQUM7SUFDbEM7SUFFQSxNQUFNSSxPQUFPLEdBQUcxQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDaER5QixPQUFPLENBQUN4QixZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztJQUNsQ3dCLE9BQU8sQ0FBQ3RCLFdBQVcsR0FBR04sSUFBSSxDQUFDNkIsSUFBSTtJQUMvQjVCLElBQUksQ0FBQ08sV0FBVyxDQUFDb0IsT0FBTyxDQUFDO0lBRXpCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQy9CLElBQUksQ0FBQztJQUNqQixPQUFPO01BQUVDLElBQUk7TUFBRTJCO0lBQVEsQ0FBQztFQUMxQjtFQUVBLE9BQU87SUFBRTdCO0VBQVksQ0FBQztBQUN4QixDQUFDLEVBQUc7QUFFSixpRUFBZUQsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUMzRHJCLE1BQU1rQyxjQUFjLEdBQUksWUFBWTtFQUNsQyxJQUFJQyxRQUFRO0VBQ1osSUFBSUMsR0FBRztFQUNQLElBQUlDLEtBQUssR0FBRyxRQUFRO0VBQ3BCLElBQUlDLEtBQUssR0FBRyxLQUFLO0VBRWpCLFNBQVNDLE1BQU0sR0FBRztJQUNoQkgsR0FBRyxHQUFJLHFEQUFvREQsUUFBUyxpREFBZ0RFLEtBQU0sRUFBQztJQUMzSEwsT0FBTyxDQUFDQyxHQUFHLENBQUNHLEdBQUcsQ0FBQztFQUNsQjtFQUVBLFNBQVNJLFdBQVcsR0FBRztJQUNyQixJQUFJSCxLQUFLLEtBQUssUUFBUSxFQUFFO01BQ3RCQSxLQUFLLEdBQUcsVUFBVTtJQUNwQixDQUFDLE1BQU07TUFDTEEsS0FBSyxHQUFHLFFBQVE7SUFDbEI7SUFDQUUsTUFBTSxFQUFFO0VBQ1Y7RUFFQSxTQUFTRSxXQUFXLENBQUNDLFlBQVksRUFBRTtJQUNqQ1AsUUFBUSxHQUFHTyxZQUFZO0lBQ3ZCVixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsUUFBUSxDQUFDO0lBQ3JCSSxNQUFNLEVBQUU7RUFDVjtFQUVBLFNBQVNJLFlBQVksR0FBRztJQUN0QixPQUFPQyxLQUFLLENBQUNSLEdBQUcsRUFBRTtNQUFFUyxJQUFJLEVBQUU7SUFBTyxDQUFDLENBQUMsQ0FDaENDLElBQUksQ0FBRUMsUUFBUSxJQUFLO01BQ2xCLElBQUksQ0FBQ0EsUUFBUSxDQUFDQyxFQUFFLEVBQUVWLEtBQUssR0FBRyxJQUFJO01BQzlCTixPQUFPLENBQUNDLEdBQUcsQ0FBQ2MsUUFBUSxDQUFDO01BQ3JCLE9BQU9BLFFBQVEsQ0FBQ0UsSUFBSSxFQUFFO0lBQ3hCLENBQUMsQ0FBQyxDQUNEQyxPQUFPLENBQUVELElBQUksSUFBSztNQUNqQmpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxLQUFLLENBQUM7TUFDbEIsSUFBSUEsS0FBSyxFQUFFO1FBQ1RBLEtBQUssR0FBRyxLQUFLO1FBQ2IsTUFBTSxJQUFJYSxLQUFLLENBQUNGLElBQUksQ0FBQ0csT0FBTyxDQUFDO01BQy9CO01BQ0EsTUFBTUMsV0FBVyxHQUFHSixJQUFJO01BQ3hCLE9BQU9JLFdBQVc7SUFDcEIsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBRUMsR0FBRyxJQUFLO01BQ2R2QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3NCLEdBQUcsQ0FBQztJQUNsQixDQUFDLENBQUM7RUFDTjtFQUVBLGVBQWVDLGNBQWMsR0FBRztJQUM5QixJQUFJO01BQ0YsTUFBTXRELElBQUksR0FBRztRQUFFLElBQUksTUFBTXlDLFlBQVksRUFBRTtNQUFFLENBQUM7TUFDMUMsTUFBTS9CLE9BQU8sR0FBRztRQUNkNkMsZUFBZSxFQUFFdkQsSUFBSSxDQUFDd0QsTUFBTSxDQUFDQyxHQUFHO1FBRWhDbEQsUUFBUSxFQUFFUCxJQUFJLENBQUMwRCxJQUFJO1FBQ25CakMsU0FBUyxFQUFFekIsSUFBSSxDQUFDMkQsSUFBSSxDQUFDQyxVQUFVO1FBQy9CQyxPQUFPLEVBQUU3RCxJQUFJLENBQUMyRCxJQUFJLENBQUNHLFFBQVE7UUFDM0JDLE9BQU8sRUFBRS9ELElBQUksQ0FBQzJELElBQUksQ0FBQ0ssUUFBUTtRQUMzQkMsUUFBUSxFQUFFakUsSUFBSSxDQUFDMkQsSUFBSSxDQUFDTSxRQUFRO1FBQzVCQyxXQUFXLEVBQUVsRSxJQUFJLENBQUNVLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ2lELElBQUk7UUFDakNoRCxXQUFXLEVBQUVYLElBQUksQ0FBQ1UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXO1FBQ3hDVyxPQUFPLEVBQUcsb0NBQW1DdEIsSUFBSSxDQUFDVSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUN5RCxJQUFLLFNBQVE7UUFDMUV0QyxJQUFJLEVBQUVNO01BQ1IsQ0FBQztNQUVELFFBQVFBLEtBQUs7UUFDWCxLQUFLLFVBQVU7VUFDYnpCLE9BQU8sQ0FBQ2lCLElBQUksR0FBSSxHQUFFM0IsSUFBSSxDQUFDMkQsSUFBSSxDQUFDaEMsSUFBSyxHQUFFO1VBQ25DakIsT0FBTyxDQUFDZSxTQUFTLEdBQUksR0FBRXpCLElBQUksQ0FBQzJELElBQUksQ0FBQ0MsVUFBVyxHQUFFO1VBQzlDbEQsT0FBTyxDQUFDbUQsT0FBTyxHQUFJLEdBQUU3RCxJQUFJLENBQUMyRCxJQUFJLENBQUNHLFFBQVMsR0FBRTtVQUMxQ3BELE9BQU8sQ0FBQ3FELE9BQU8sR0FBSSxHQUFFL0QsSUFBSSxDQUFDMkQsSUFBSSxDQUFDSyxRQUFTLEdBQUU7VUFDMUN0RCxPQUFPLENBQUNnQixTQUFTLEdBQUksR0FBRTFCLElBQUksQ0FBQ29FLElBQUksQ0FBQ0MsS0FBTSxNQUFLO1VBQzVDO1FBQ0Y7VUFDRTNELE9BQU8sQ0FBQ2lCLElBQUksR0FBSSxHQUFFM0IsSUFBSSxDQUFDMkQsSUFBSSxDQUFDaEMsSUFBSyxHQUFFO1VBQ25DakIsT0FBTyxDQUFDZSxTQUFTLEdBQUksR0FBRXpCLElBQUksQ0FBQzJELElBQUksQ0FBQ0MsVUFBVyxHQUFFO1VBQzlDbEQsT0FBTyxDQUFDbUQsT0FBTyxHQUFJLEdBQUU3RCxJQUFJLENBQUMyRCxJQUFJLENBQUNHLFFBQVMsR0FBRTtVQUMxQ3BELE9BQU8sQ0FBQ3FELE9BQU8sR0FBSSxHQUFFL0QsSUFBSSxDQUFDMkQsSUFBSSxDQUFDSyxRQUFTLEdBQUU7VUFDMUN0RCxPQUFPLENBQUNnQixTQUFTLEdBQUksR0FBRTFCLElBQUksQ0FBQ29FLElBQUksQ0FBQ0MsS0FBTSxNQUFLO01BQUM7TUFHakQsT0FBTzNELE9BQU87SUFDaEIsQ0FBQyxDQUFDLE9BQU8yQyxHQUFHLEVBQUU7TUFDWnZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsR0FBRyxDQUFDO01BQ2hCLE9BQU9BLEdBQUc7SUFDWjtFQUNGO0VBRUEsT0FBTztJQUFFZCxXQUFXO0lBQUVlLGNBQWM7SUFBRWhCO0VBQVksQ0FBQztBQUNyRCxDQUFDLEVBQUc7QUFFSixpRUFBZU4sY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUY3QjtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxXQUFXLG9CQUFvQixHQUFHLFVBQVUsa0JBQWtCLGtCQUFrQixzQ0FBc0MsOEJBQThCLEdBQUcsWUFBWSxrQkFBa0Isd0JBQXdCLDRCQUE0Qiw4QkFBOEIsR0FBRyxVQUFVLGtCQUFrQixpQ0FBaUMsa0JBQWtCLDBCQUEwQiw4QkFBOEIsc0JBQXNCLEdBQUcsVUFBVSxrQkFBa0Isd0JBQXdCLDJCQUEyQixpQkFBaUIsbUJBQW1CLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IscUJBQXFCLG1DQUFtQyxtQkFBbUIsR0FBRyxvQkFBb0Isa0JBQWtCLHlDQUF5QyxpQkFBaUIscUJBQXFCLEdBQUcsdUJBQXVCLHlCQUF5QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxpQ0FBaUMscUJBQXFCLGNBQWMscUJBQXFCLGtDQUFrQyxtQkFBbUIsK0JBQStCLGlCQUFpQixHQUFHLGlCQUFpQixxQkFBcUIsaUJBQWlCLHdCQUF3Qix1QkFBdUIscUJBQXFCLG9CQUFvQixHQUFHLGdCQUFnQixnQkFBZ0IsR0FBRyxjQUFjLDhCQUE4Qiw4QkFBOEIscUNBQXFDLGtCQUFrQixpQkFBaUIsdUJBQXVCLEdBQUcsa0JBQWtCLGtCQUFrQixnQ0FBZ0MsOEJBQThCLGtDQUFrQyx1QkFBdUIsT0FBTywyQkFBMkIsa0JBQWtCLHdCQUF3QixrQ0FBa0MsR0FBRyxZQUFZLGtCQUFrQix3QkFBd0Isa0NBQWtDLHFCQUFxQiw4QkFBOEIsR0FBRyxnQkFBZ0IsZ0JBQWdCLEdBQUcsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSw0QkFBNEIsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsVUFBVSxrQkFBa0Isa0JBQWtCLHNDQUFzQyw4QkFBOEIsR0FBRyxZQUFZLGtCQUFrQix3QkFBd0IsNEJBQTRCLDhCQUE4QixHQUFHLFVBQVUsa0JBQWtCLGlDQUFpQyxrQkFBa0IsMEJBQTBCLDhCQUE4QixzQkFBc0IsR0FBRyxVQUFVLGtCQUFrQix3QkFBd0IsMkJBQTJCLGlCQUFpQixtQkFBbUIsR0FBRyxzQkFBc0Isa0JBQWtCLHdCQUF3QixxQkFBcUIsbUNBQW1DLG1CQUFtQixHQUFHLG9CQUFvQixrQkFBa0IseUNBQXlDLGlCQUFpQixxQkFBcUIsR0FBRyx1QkFBdUIseUJBQXlCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGlDQUFpQyxxQkFBcUIsY0FBYyxxQkFBcUIsa0NBQWtDLG1CQUFtQiwrQkFBK0IsaUJBQWlCLEdBQUcsaUJBQWlCLHFCQUFxQixpQkFBaUIsd0JBQXdCLHVCQUF1QixxQkFBcUIsb0JBQW9CLEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLGNBQWMsOEJBQThCLDhCQUE4QixxQ0FBcUMsa0JBQWtCLGlCQUFpQix1QkFBdUIsR0FBRyxrQkFBa0Isa0JBQWtCLGdDQUFnQyw4QkFBOEIsa0NBQWtDLHVCQUF1QixPQUFPLDJCQUEyQixrQkFBa0Isd0JBQXdCLGtDQUFrQyxHQUFHLFlBQVksa0JBQWtCLHdCQUF3QixrQ0FBa0MscUJBQXFCLDhCQUE4QixHQUFHLGdCQUFnQixnQkFBZ0IsR0FBRyxtQkFBbUI7QUFDeCtKO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUN1QjtBQUNSO0FBQ1k7QUFDbkI7QUFFcEMsQ0FBQyxZQUFXO0VBQ1YsTUFBTXdDLElBQUksR0FBR3RFLFFBQVEsQ0FBQ3VFLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDM0MsTUFBTUMsU0FBUyxHQUFHRixJQUFJLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDbEQsTUFBTUUsTUFBTSxHQUFHSCxJQUFJLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDL0MsTUFBTUcsS0FBSyxHQUFHSixJQUFJLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDOUMsTUFBTWQsSUFBSSxHQUFHYSxJQUFJLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFFdkNFLE1BQU0sQ0FBQ3RELEdBQUcsR0FBR2lELHlEQUFNO0VBQ25CLFNBQVNPLFNBQVMsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ3BCQSxDQUFDLENBQUNDLGVBQWUsRUFBRTtJQUNuQmpELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDK0MsQ0FBQyxDQUFDO0lBQ2QsSUFBSUYsS0FBSyxDQUFDSSxLQUFLLEVBQUVGLENBQUMsQ0FBQ0csY0FBYyxFQUFFO0VBQ3JDO0VBQ0FQLFNBQVMsQ0FBQ1EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFTCxTQUFTLENBQUM7RUFDOUNILFNBQVMsQ0FBQ3JELEdBQUcsR0FBR2tELGdEQUFPO0VBRXZCdkMsNEVBQTBCLENBQUMsT0FBTyxDQUFDO0VBQ25DOztFQUVBQSwrRUFBNkIsRUFBRSxDQUM1QlksSUFBSSxDQUFDTyxXQUFXLElBQUk7SUFDbkIsTUFBTWdDLElBQUksR0FBR3JGLGlFQUFrQixDQUFDcUQsV0FBVyxDQUFDO0lBQzVDLElBQUdRLElBQUksQ0FBQ2MsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQ2pDLE1BQU1XLFdBQVcsR0FBR3pCLElBQUksQ0FBQ2MsYUFBYSxDQUFDLFVBQVUsQ0FBQztNQUNsRGQsSUFBSSxDQUFDMEIsV0FBVyxDQUFDRCxXQUFXLENBQUM7SUFDL0I7SUFDQXpCLElBQUksQ0FBQ25ELFdBQVcsQ0FBQzJFLElBQUksQ0FBQ2xGLElBQUksQ0FBQztFQUM3QixDQUFDLENBQUMsQ0FDRG1ELEtBQUssQ0FBQ0MsR0FBRyxJQUFJdkIsT0FBTyxDQUFDQyxHQUFHLENBQUNzQixHQUFHLENBQUMsQ0FBQztBQUVuQyxDQUFDLEdBQUksQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdHMvY2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL2N1cnJlbnQtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gd2VhdGhlckNhcmQoZGF0YSkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYXJkXCIpO1xuXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjaXR5LnRleHRDb250ZW50ID0gZGF0YS5jaXR5TmFtZTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNpdHkpO1xuXG4gICAgY29uc3Qgd2VhdGhlckhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VhdGhlckhvbGRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXJcIik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZCh3ZWF0aGVySG9sZGVyKTtcblxuICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgd2VhdGhlci50ZXh0Q29udGVudCA9IGRhdGEuZGVzY3JpcHRpb25cbiAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgIC5tYXAoKHN0cmluZykgPT4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIHdlYXRoZXJIb2xkZXIuYXBwZW5kQ2hpbGQod2VhdGhlcik7XG5cbiAgICBjb25zdCB3ZWF0aGVySW1nID0gbmV3IEltYWdlKCk7XG4gICAgd2VhdGhlckltZy5zcmMgPSBkYXRhLmljb25TcmM7XG4gICAgd2VhdGhlckltZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltZ0ljb25cIik7XG4gICAgd2VhdGhlckhvbGRlci5hcHBlbmRDaGlsZCh3ZWF0aGVySW1nKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYWRkaXRpb25hbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmZWVsXCIpO1xuICAgICAgICAgIGFkZGl0aW9uYWxJbmZvLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7ZGF0YS5mZWVsc0xpa2V9YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGFkZGl0aW9uYWxJbmZvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVtcFwiKTtcbiAgICAgICAgICBhZGRpdGlvbmFsSW5mby50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke2RhdGEud2luZFNwZWVkfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBhZGRpdGlvbmFsSW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVuaXRMYWJlbFwiKTtcbiAgICAgICAgICBhZGRpdGlvbmFsSW5mby50ZXh0Q29udGVudCA9IGBEaXNwbGF5ZWQgdW5pdHMgaW46YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBhZGRpdGlvbmFsSW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbXBcIik7XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8udGV4dENvbnRlbnQgPSBgVGVtcGVyYXR1cmU6ICR7ZGF0YS50ZW1wfWA7XG4gICAgICB9XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZGl0aW9uYWxJbmZvKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bml0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB1bml0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidW5pdFwiKTtcbiAgICB1bml0QnRuLnRleHRDb250ZW50ID0gZGF0YS51bml0O1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQodW5pdEJ0bilcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiB7IGNhcmQsIHVuaXRCdG4gfTtcbiAgfVxuXG4gIHJldHVybiB7IHdlYXRoZXJDYXJkIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGU7XG4iLCJjb25zdCBjdXJyZW50V2VhdGhlciA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBsb2NhdGlvbjtcbiAgbGV0IHVybDtcbiAgbGV0IHVuaXRzID0gXCJtZXRyaWNcIjtcbiAgbGV0IGVycm9yID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gc2V0VXJsKCkge1xuICAgIHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPWZiYjY0NTRlNGUwNmQ4OWI0NjllNTdlMjk4YWIyNzM2JnVuaXRzPSR7dW5pdHN9YDtcbiAgICBjb25zb2xlLmxvZyh1cmwpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlVW5pdHMoKSB7XG4gICAgaWYgKHVuaXRzID09PSBcIm1ldHJpY1wiKSB7XG4gICAgICB1bml0cyA9IFwiaW1wZXJpYWxcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdHMgPSBcIm1ldHJpY1wiO1xuICAgIH1cbiAgICBzZXRVcmwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldExvY2F0aW9uKGxvY2F0aW9uTmFtZSkge1xuICAgIGxvY2F0aW9uID0gbG9jYXRpb25OYW1lO1xuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcbiAgICBzZXRVcmwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoV2VhdGhlcigpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgZXJyb3IgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKGpzb24pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBlcnJvciA9IGZhbHNlO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihqc29uLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0ganNvbjtcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGxheVdlYXRoZXJEYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0geyAuLi4oYXdhaXQgZmV0Y2hXZWF0aGVyKCkpIH07XG4gICAgICBjb25zdCB3ZWF0aGVyID0ge1xuICAgICAgICBjbG91ZFBlcmNlbnRhZ2U6IGRhdGEuY2xvdWRzLmFsbCxcblxuICAgICAgICBjaXR5TmFtZTogZGF0YS5uYW1lLFxuICAgICAgICBmZWVsc0xpa2U6IGRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgICBtYXhUZW1wOiBkYXRhLm1haW4udGVtcF9tYXgsXG4gICAgICAgIG1pblRlbXA6IGRhdGEubWFpbi50ZW1wX21pbixcbiAgICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgICAgbWFpbldlYXRoZXI6IGRhdGEud2VhdGhlclswXS5tYWluLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICBpY29uU3JjOiBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYCxcbiAgICAgICAgdW5pdDogdW5pdHMsXG4gICAgICB9O1xuXG4gICAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgIGNhc2UgXCJpbXBlcmlhbFwiOlxuICAgICAgICAgIHdlYXRoZXIudGVtcCA9IGAke2RhdGEubWFpbi50ZW1wfeKEiWA7XG4gICAgICAgICAgd2VhdGhlci5mZWVsc0xpa2UgPSBgJHtkYXRhLm1haW4uZmVlbHNfbGlrZX3ihIlgO1xuICAgICAgICAgIHdlYXRoZXIubWF4VGVtcCA9IGAke2RhdGEubWFpbi50ZW1wX21heH3ihIlgO1xuICAgICAgICAgIHdlYXRoZXIubWluVGVtcCA9IGAke2RhdGEubWFpbi50ZW1wX21pbn3ihIlgO1xuICAgICAgICAgIHdlYXRoZXIud2luZFNwZWVkID0gYCR7ZGF0YS53aW5kLnNwZWVkfSBtcGhgO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHdlYXRoZXIudGVtcCA9IGAke2RhdGEubWFpbi50ZW1wfeKEg2A7XG4gICAgICAgICAgd2VhdGhlci5mZWVsc0xpa2UgPSBgJHtkYXRhLm1haW4uZmVlbHNfbGlrZX3ihINgO1xuICAgICAgICAgIHdlYXRoZXIubWF4VGVtcCA9IGAke2RhdGEubWFpbi50ZW1wX21heH3ihINgO1xuICAgICAgICAgIHdlYXRoZXIubWluVGVtcCA9IGAke2RhdGEubWFpbi50ZW1wX21pbn3ihINgO1xuICAgICAgICAgIHdlYXRoZXIud2luZFNwZWVkID0gYCR7ZGF0YS53aW5kLnNwZWVkfSBtL3NgO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2VhdGhlcjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICByZXR1cm4gZXJyO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHNldExvY2F0aW9uLCBsYXlXZWF0aGVyRGF0YSwgdG9nZ2xlVW5pdHMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRXZWF0aGVyO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY2NjZiO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NDg7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzZweCAxZnI7XFxuICByb3ctZ2FwOiA1NHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJvdy1nYXA6IDZweDtcXG4gIHBhZGRpbmc6IDAgNnB4O1xcbn1cXG5cXG5mb3JtXFxuZGl2I3NlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbHVtbi1nYXA6IDE2cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAwIDZweDtcXG59XFxuXFxuZm9ybVxcbmRpdiN1bml0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIGF1dG8gLyBhdXRvIGF1dG87XFxuICByb3ctZ2FwOiA2cHg7XFxuICBjb2x1bW4tZ2FwOiAxMnB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTFweDtcXG59XFxuXFxuZm9ybVxcbmRpdiN1bml0XFxucCB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5cXG5mb3JtIGRpdiBcXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAycHggNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogYmxhY2tcXG59XFxuXFxuZm9ybSBcXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmltZyNzZWFyY2gge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbmRpdiNjYXJkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMDM0MWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RmOWZmO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4ICM0ZDE1MGU7XFxuICBoZWlnaHQ6IDI2MHB4O1xcbiAgd2lkdGg6IDIyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5kaXYjY2FyZFxcbmgzIHtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMCA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJlZDYzO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4ICNiNGE5NDY7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICBcXG59XFxuXFxuZGl2I2NhcmRcXG5kaXYjd2VhdGhlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbHVtbi1nYXA6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFjNmY5O1xcbn1cXG5cXG5pbWcjZ2l0SHViIHtcXG4gIHdpZHRoOiAyNnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBOzs7RUFHRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCO0FBQ0Y7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGtCQUFrQjs7QUFFcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnIgNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjY2NmI7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc0ODtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3NnB4IDFmcjtcXG4gIHJvdy1nYXA6IDU0cHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbiAgcGFkZGluZy10b3A6IDEycHg7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcm93LWdhcDogNnB4O1xcbiAgcGFkZGluZzogMCA2cHg7XFxufVxcblxcbmZvcm1cXG5kaXYjc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogMTZweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDAgNnB4O1xcbn1cXG5cXG5mb3JtXFxuZGl2I3VuaXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0byAvIGF1dG8gYXV0bztcXG4gIHJvdy1nYXA6IDZweDtcXG4gIGNvbHVtbi1nYXA6IDEycHg7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMXB4O1xcbn1cXG5cXG5mb3JtXFxuZGl2I3VuaXRcXG5wIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbmZvcm0gZGl2IFxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDJweCA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG5cXG5mb3JtIFxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW1nI3NlYXJjaCB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuZGl2I2NhcmQge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2YwMzQxZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGY5ZmY7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEycHggIzRkMTUwZTtcXG4gIGhlaWdodDogMjYwcHg7XFxuICB3aWR0aDogMjIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmRpdiNjYXJkXFxuaDMge1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwIDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmVkNjM7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggI2I0YTk0NjtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIFxcbn1cXG5cXG5kaXYjY2FyZFxcbmRpdiN3ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgY29sdW1uLWdhcDogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWM2Zjk7XFxufVxcblxcbmltZyNnaXRIdWIge1xcbiAgd2lkdGg6IDI2cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2l0SHViIGZyb20gJy4vaW1hZ2VzL0dpdEh1Yi1NYXJrLTY0cHgucG5nJztcbmltcG9ydCBtYWduaWZ5IGZyb20gJy4vaW1hZ2VzL21hZ25pZnkuc3ZnJztcbmltcG9ydCBjdXJyZW50V2VhdGhlciBmcm9tICcuL3NjcmlwdHMvY3VycmVudC13ZWF0aGVyJztcbmltcG9ydCBjcmVhdGUgZnJvbSAnLi9zY3JpcHRzL2NhcmQnO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IHNlYXJjaEJ0biA9IGJvZHkucXVlcnlTZWxlY3RvcignaW1nI3NlYXJjaCcpO1xuICBjb25zdCBnaXRodWIgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJ2ltZyNnaXRIdWInKTtcbiAgY29uc3QgaW5wdXQgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2NpdHknKTtcbiAgY29uc3QgbWFpbiA9IGJvZHkucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gIGdpdGh1Yi5zcmMgPSBnaXRIdWI7XG4gIGZ1bmN0aW9uIGNoZWNrRm9ybShlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBpZiAoaW5wdXQudmFsdWUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0Zvcm0pO1xuICBzZWFyY2hCdG4uc3JjID0gbWFnbmlmeTtcblxuICBjdXJyZW50V2VhdGhlci5zZXRMb2NhdGlvbignbmFycmEnKTtcbiAgLy8gY3VycmVudFdlYXRoZXIudG9nZ2xlVW5pdHMoKTtcbiAgXG4gIGN1cnJlbnRXZWF0aGVyLmxheVdlYXRoZXJEYXRhKClcbiAgICAudGhlbih3ZWF0aGVyRGF0YSA9PiB7XG4gICAgICBjb25zdCBwb3N0ID0gY3JlYXRlLndlYXRoZXJDYXJkKHdlYXRoZXJEYXRhKTtcbiAgICAgIGlmKG1haW4ucXVlcnlTZWxlY3RvcignZGl2I2NhcmQnKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50Q2FyZCA9IG1haW4ucXVlcnlTZWxlY3RvcignZGl2I2NhcmQnKTtcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChjdXJyZW50Q2FyZCk7XG4gICAgICB9XG4gICAgICBtYWluLmFwcGVuZENoaWxkKHBvc3QuY2FyZCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG59KSAoKVxuXG4iXSwibmFtZXMiOlsiY3JlYXRlIiwid2VhdGhlckNhcmQiLCJkYXRhIiwiY2FyZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNpdHkiLCJ0ZXh0Q29udGVudCIsImNpdHlOYW1lIiwiYXBwZW5kQ2hpbGQiLCJ3ZWF0aGVySG9sZGVyIiwid2VhdGhlciIsImRlc2NyaXB0aW9uIiwic3BsaXQiLCJtYXAiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIndlYXRoZXJJbWciLCJJbWFnZSIsInNyYyIsImljb25TcmMiLCJpIiwiYWRkaXRpb25hbEluZm8iLCJmZWVsc0xpa2UiLCJ3aW5kU3BlZWQiLCJ0ZW1wIiwidW5pdEJ0biIsInVuaXQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFdlYXRoZXIiLCJsb2NhdGlvbiIsInVybCIsInVuaXRzIiwiZXJyb3IiLCJzZXRVcmwiLCJ0b2dnbGVVbml0cyIsInNldExvY2F0aW9uIiwibG9jYXRpb25OYW1lIiwiZmV0Y2hXZWF0aGVyIiwiZmV0Y2giLCJtb2RlIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZmluYWxseSIsIkVycm9yIiwibWVzc2FnZSIsIndlYXRoZXJEYXRhIiwiY2F0Y2giLCJlcnIiLCJsYXlXZWF0aGVyRGF0YSIsImNsb3VkUGVyY2VudGFnZSIsImNsb3VkcyIsImFsbCIsIm5hbWUiLCJtYWluIiwiZmVlbHNfbGlrZSIsIm1heFRlbXAiLCJ0ZW1wX21heCIsIm1pblRlbXAiLCJ0ZW1wX21pbiIsImh1bWlkaXR5IiwibWFpbldlYXRoZXIiLCJpY29uIiwid2luZCIsInNwZWVkIiwiZ2l0SHViIiwibWFnbmlmeSIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoQnRuIiwiZ2l0aHViIiwiaW5wdXQiLCJjaGVja0Zvcm0iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwb3N0IiwiY3VycmVudENhcmQiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=