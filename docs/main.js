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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 16px;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 70px 1fr 70px;\n  background-color: #56666b;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffb748;\n}\n\nmain {\n  display: grid;\n  grid-template-rows: 50px 1fr;\n  row-gap: 54px;\n  justify-items: center;\n  background-color: skyblue;\n  padding-top: 12px;\n}\n\nform {\n  display: flex;\n  align-items: flex-end;\n  column-gap: 16px;\n  border-bottom: 2px solid black;\n  padding: 6px  ;\n}\n\n\nform\ninput[type=text] {\n  appearance: none;\n  border: 0;\n  padding: 2px 6px;\n  background-color: transparent;\n  color: black\n}\n\n\nform \ninput::placeholder {\n  color: black;\n}\n\nform button {\n  appearance: none;\n  border: none;\n  height: max-content;\n  width: max-content;\n  background: none;\n  cursor: pointer;\n}\n\nimg#search {\n  width: 20px;\n}\n\ndiv#card {\n  display: grid;\n  border: 2px solid #f0341f;\n  background-color: #cdf9ff;\n  box-shadow: 2px 2px 12px #4d150e;\n  height: 260px;\n  width: 220px;\n  border-radius: 8px;\n}\n\ndiv#card\nh3 {\n  padding: 12px;\n  border-radius: 8px 8px 0 0 ;\n  background-color: #fbed63;\n  box-shadow: 0 2px 4px #b4a946;\n  margin-bottom: 6px;\n  \n}\n\ndiv#card\ndiv#weather {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nimg#imgIcon {\n  width: 66px;\n}\n\ndiv#card\np {\n  margin-left: 12px;\n}\n\ndiv#card\nbutton#unit {\n  appearance: none;\n  margin: auto;\n  margin-bottom: 12px;\n  width: 100px;\n  padding: 4px;\n  border-radius: 8px;\n  background-color: white;\n  border: 2px solid;\n  border-color: #f0341f #8d2317 #8d2317 #f0341f;\n}\n\ndiv#card\nbutton#unit:active {\n  border-color: #8d2317 #f0341f #f0341f #8d2317;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  column-gap: 16px;\n  background-color: #6ac6f9;\n}\n\nimg#gitHub {\n  width: 26px;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,aAAa;EACb,qBAAqB;EACrB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,8BAA8B;EAC9B,cAAc;AAChB;;;AAGA;;EAEE,gBAAgB;EAChB,SAAS;EACT,gBAAgB;EAChB,6BAA6B;EAC7B;AACF;;;AAGA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,yBAAyB;EACzB,gCAAgC;EAChC,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,kBAAkB;;AAEpB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;EACjB,6CAA6C;AAC/C;;AAEA;;EAEE,6CAA6C;AAC/C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 16px;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 70px 1fr 70px;\n  background-color: #56666b;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffb748;\n}\n\nmain {\n  display: grid;\n  grid-template-rows: 50px 1fr;\n  row-gap: 54px;\n  justify-items: center;\n  background-color: skyblue;\n  padding-top: 12px;\n}\n\nform {\n  display: flex;\n  align-items: flex-end;\n  column-gap: 16px;\n  border-bottom: 2px solid black;\n  padding: 6px  ;\n}\n\n\nform\ninput[type=text] {\n  appearance: none;\n  border: 0;\n  padding: 2px 6px;\n  background-color: transparent;\n  color: black\n}\n\n\nform \ninput::placeholder {\n  color: black;\n}\n\nform button {\n  appearance: none;\n  border: none;\n  height: max-content;\n  width: max-content;\n  background: none;\n  cursor: pointer;\n}\n\nimg#search {\n  width: 20px;\n}\n\ndiv#card {\n  display: grid;\n  border: 2px solid #f0341f;\n  background-color: #cdf9ff;\n  box-shadow: 2px 2px 12px #4d150e;\n  height: 260px;\n  width: 220px;\n  border-radius: 8px;\n}\n\ndiv#card\nh3 {\n  padding: 12px;\n  border-radius: 8px 8px 0 0 ;\n  background-color: #fbed63;\n  box-shadow: 0 2px 4px #b4a946;\n  margin-bottom: 6px;\n  \n}\n\ndiv#card\ndiv#weather {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nimg#imgIcon {\n  width: 66px;\n}\n\ndiv#card\np {\n  margin-left: 12px;\n}\n\ndiv#card\nbutton#unit {\n  appearance: none;\n  margin: auto;\n  margin-bottom: 12px;\n  width: 100px;\n  padding: 4px;\n  border-radius: 8px;\n  background-color: white;\n  border: 2px solid;\n  border-color: #f0341f #8d2317 #8d2317 #f0341f;\n}\n\ndiv#card\nbutton#unit:active {\n  border-color: #8d2317 #f0341f #f0341f #8d2317;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  column-gap: 16px;\n  background-color: #6ac6f9;\n}\n\nimg#gitHub {\n  width: 26px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLEdBQUcsQ0FBQytDLENBQUMsQ0FBQztJQUNkLElBQUlGLEtBQUssQ0FBQ0ksS0FBSyxFQUFFRixDQUFDLENBQUNHLGNBQWMsRUFBRTtFQUNyQztFQUNBUCxTQUFTLENBQUNRLGdCQUFnQixDQUFDLE9BQU8sRUFBRUwsU0FBUyxDQUFDO0VBQzlDSCxTQUFTLENBQUNyRCxHQUFHLEdBQUdrRCxnREFBTztFQUV2QnZDLDRFQUEwQixDQUFDLFFBQVEsQ0FBQztFQUNwQzs7RUFFQUEsK0VBQTZCLEVBQUUsQ0FDNUJZLElBQUksQ0FBQ08sV0FBVyxJQUFJO0lBQ25CLE1BQU1nQyxJQUFJLEdBQUdyRixpRUFBa0IsQ0FBQ3FELFdBQVcsQ0FBQztJQUM1QyxJQUFHUSxJQUFJLENBQUNjLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNqQyxNQUFNVyxXQUFXLEdBQUd6QixJQUFJLENBQUNjLGFBQWEsQ0FBQyxVQUFVLENBQUM7TUFDbERkLElBQUksQ0FBQzBCLFdBQVcsQ0FBQ0QsV0FBVyxDQUFDO0lBQy9CO0lBQ0F6QixJQUFJLENBQUNuRCxXQUFXLENBQUMyRSxJQUFJLENBQUNsRixJQUFJLENBQUM7RUFDN0IsQ0FBQyxDQUFDLENBQ0RtRCxLQUFLLENBQUNDLEdBQUcsSUFBSXZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsR0FBRyxDQUFDLENBQUM7QUFFbkMsQ0FBQyxHQUFJLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9jdXJyZW50LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHdlYXRoZXJDYXJkKGRhdGEpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FyZFwiKTtcblxuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY2l0eS50ZXh0Q29udGVudCA9IGRhdGEuY2l0eU5hbWU7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjaXR5KTtcblxuICAgIGNvbnN0IHdlYXRoZXJIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlYXRoZXJIb2xkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyXCIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQod2VhdGhlckhvbGRlcik7XG5cbiAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIHdlYXRoZXIudGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uXG4gICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAubWFwKChzdHJpbmcpID0+IHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSlcbiAgICAgIC5qb2luKFwiIFwiKTtcbiAgICB3ZWF0aGVySG9sZGVyLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuXG4gICAgY29uc3Qgd2VhdGhlckltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHdlYXRoZXJJbWcuc3JjID0gZGF0YS5pY29uU3JjO1xuICAgIHdlYXRoZXJJbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWdJY29uXCIpO1xuICAgIHdlYXRoZXJIb2xkZXIuYXBwZW5kQ2hpbGQod2VhdGhlckltZyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGFkZGl0aW9uYWxJbmZvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZmVlbFwiKTtcbiAgICAgICAgICBhZGRpdGlvbmFsSW5mby50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2RhdGEuZmVlbHNMaWtlfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBhZGRpdGlvbmFsSW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbXBcIik7XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8udGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHtkYXRhLndpbmRTcGVlZH1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1bml0TGFiZWxcIik7XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8udGV4dENvbnRlbnQgPSBgRGlzcGxheWVkIHVuaXRzIGluOmA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYWRkaXRpb25hbEluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW1wXCIpO1xuICAgICAgICAgIGFkZGl0aW9uYWxJbmZvLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke2RhdGEudGVtcH1gO1xuICAgICAgfVxuICAgICAgY2FyZC5hcHBlbmRDaGlsZChhZGRpdGlvbmFsSW5mbyk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdW5pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVuaXRcIik7XG4gICAgdW5pdEJ0bi50ZXh0Q29udGVudCA9IGRhdGEudW5pdC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGRhdGEudW5pdC5zbGljZSgxKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHVuaXRCdG4pXG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4geyBjYXJkLCB1bml0QnRuIH07XG4gIH1cblxuICByZXR1cm4geyB3ZWF0aGVyQ2FyZCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlO1xuIiwiY29uc3QgY3VycmVudFdlYXRoZXIgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgbG9jYXRpb247XG4gIGxldCB1cmw7XG4gIGxldCB1bml0cyA9IFwibWV0cmljXCI7XG4gIGxldCBlcnJvciA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHNldFVybCgpIHtcbiAgICB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD1mYmI2NDU0ZTRlMDZkODliNDY5ZTU3ZTI5OGFiMjczNiZ1bml0cz0ke3VuaXRzfWA7XG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVVuaXRzKCkge1xuICAgIGlmICh1bml0cyA9PT0gXCJtZXRyaWNcIikge1xuICAgICAgdW5pdHMgPSBcImltcGVyaWFsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXRzID0gXCJtZXRyaWNcIjtcbiAgICB9XG4gICAgc2V0VXJsKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRMb2NhdGlvbihsb2NhdGlvbk5hbWUpIHtcbiAgICBsb2NhdGlvbiA9IGxvY2F0aW9uTmFtZTtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gICAgc2V0VXJsKCk7XG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFdlYXRoZXIoKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIGVycm9yID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KChqc29uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGpzb247XG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBsYXlXZWF0aGVyRGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IHsgLi4uKGF3YWl0IGZldGNoV2VhdGhlcigpKSB9O1xuICAgICAgY29uc3Qgd2VhdGhlciA9IHtcbiAgICAgICAgY2xvdWRQZXJjZW50YWdlOiBkYXRhLmNsb3Vkcy5hbGwsXG5cbiAgICAgICAgY2l0eU5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgZmVlbHNMaWtlOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgbWF4VGVtcDogZGF0YS5tYWluLnRlbXBfbWF4LFxuICAgICAgICBtaW5UZW1wOiBkYXRhLm1haW4udGVtcF9taW4sXG4gICAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgICAgIG1haW5XZWF0aGVyOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgaWNvblNyYzogYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2AsXG4gICAgICAgIHVuaXQ6IHVuaXRzLFxuICAgICAgfTtcblxuICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICBjYXNlIFwiaW1wZXJpYWxcIjpcbiAgICAgICAgICB3ZWF0aGVyLnRlbXAgPSBgJHtkYXRhLm1haW4udGVtcH3ihIlgO1xuICAgICAgICAgIHdlYXRoZXIuZmVlbHNMaWtlID0gYCR7ZGF0YS5tYWluLmZlZWxzX2xpa2V94oSJYDtcbiAgICAgICAgICB3ZWF0aGVyLm1heFRlbXAgPSBgJHtkYXRhLm1haW4udGVtcF9tYXh94oSJYDtcbiAgICAgICAgICB3ZWF0aGVyLm1pblRlbXAgPSBgJHtkYXRhLm1haW4udGVtcF9taW594oSJYDtcbiAgICAgICAgICB3ZWF0aGVyLndpbmRTcGVlZCA9IGAke2RhdGEud2luZC5zcGVlZH0gbXBoYDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB3ZWF0aGVyLnRlbXAgPSBgJHtkYXRhLm1haW4udGVtcH3ihINgO1xuICAgICAgICAgIHdlYXRoZXIuZmVlbHNMaWtlID0gYCR7ZGF0YS5tYWluLmZlZWxzX2xpa2V94oSDYDtcbiAgICAgICAgICB3ZWF0aGVyLm1heFRlbXAgPSBgJHtkYXRhLm1haW4udGVtcF9tYXh94oSDYDtcbiAgICAgICAgICB3ZWF0aGVyLm1pblRlbXAgPSBgJHtkYXRhLm1haW4udGVtcF9taW594oSDYDtcbiAgICAgICAgICB3ZWF0aGVyLndpbmRTcGVlZCA9IGAke2RhdGEud2luZC5zcGVlZH0gbS9zYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdlYXRoZXI7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmV0dXJuIGVycjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBzZXRMb2NhdGlvbiwgbGF5V2VhdGhlckRhdGEsIHRvZ2dsZVVuaXRzIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50V2VhdGhlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NjY2YjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzQ4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgcm93LWdhcDogNTRweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxuICBwYWRkaW5nLXRvcDogMTJweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgY29sdW1uLWdhcDogMTZweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDZweCAgO1xcbn1cXG5cXG5cXG5mb3JtXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMnB4IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IGJsYWNrXFxufVxcblxcblxcbmZvcm0gXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbWcjc2VhcmNoIHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG5kaXYjY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2YwMzQxZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGY5ZmY7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEycHggIzRkMTUwZTtcXG4gIGhlaWdodDogMjYwcHg7XFxuICB3aWR0aDogMjIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmRpdiNjYXJkXFxuaDMge1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwIDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmVkNjM7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggI2I0YTk0NjtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIFxcbn1cXG5cXG5kaXYjY2FyZFxcbmRpdiN3ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbmltZyNpbWdJY29uIHtcXG4gIHdpZHRoOiA2NnB4O1xcbn1cXG5cXG5kaXYjY2FyZFxcbnAge1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxufVxcblxcbmRpdiNjYXJkXFxuYnV0dG9uI3VuaXQge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjZjAzNDFmICM4ZDIzMTcgIzhkMjMxNyAjZjAzNDFmO1xcbn1cXG5cXG5kaXYjY2FyZFxcbmJ1dHRvbiN1bml0OmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6ICM4ZDIzMTcgI2YwMzQxZiAjZjAzNDFmICM4ZDIzMTc7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgY29sdW1uLWdhcDogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWM2Zjk7XFxufVxcblxcbmltZyNnaXRIdWIge1xcbiAgd2lkdGg6IDI2cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7O0FBR0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCO0FBQ0Y7OztBQUdBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0Isa0JBQWtCOztBQUVwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiw2Q0FBNkM7QUFDL0M7O0FBRUE7O0VBRUUsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY2NjZiO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NDg7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxuICByb3ctZ2FwOiA1NHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBjb2x1bW4tZ2FwOiAxNnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNnB4ICA7XFxufVxcblxcblxcbmZvcm1cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAycHggNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogYmxhY2tcXG59XFxuXFxuXFxuZm9ybSBcXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmltZyNzZWFyY2gge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbmRpdiNjYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZjAzNDFmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkZjlmZjtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTJweCAjNGQxNTBlO1xcbiAgaGVpZ2h0OiAyNjBweDtcXG4gIHdpZHRoOiAyMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuZGl2I2NhcmRcXG5oMyB7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDAgO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZWQ2MztcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjYjRhOTQ2O1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgXFxufVxcblxcbmRpdiNjYXJkXFxuZGl2I3dlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuaW1nI2ltZ0ljb24ge1xcbiAgd2lkdGg6IDY2cHg7XFxufVxcblxcbmRpdiNjYXJkXFxucCB7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG59XFxuXFxuZGl2I2NhcmRcXG5idXR0b24jdW5pdCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNmMDM0MWYgIzhkMjMxNyAjOGQyMzE3ICNmMDM0MWY7XFxufVxcblxcbmRpdiNjYXJkXFxuYnV0dG9uI3VuaXQ6YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogIzhkMjMxNyAjZjAzNDFmICNmMDM0MWYgIzhkMjMxNztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBjb2x1bW4tZ2FwOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhYzZmOTtcXG59XFxuXFxuaW1nI2dpdEh1YiB7XFxuICB3aWR0aDogMjZweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBnaXRIdWIgZnJvbSAnLi9pbWFnZXMvR2l0SHViLU1hcmstNjRweC5wbmcnO1xuaW1wb3J0IG1hZ25pZnkgZnJvbSAnLi9pbWFnZXMvbWFnbmlmeS5zdmcnO1xuaW1wb3J0IGN1cnJlbnRXZWF0aGVyIGZyb20gJy4vc2NyaXB0cy9jdXJyZW50LXdlYXRoZXInO1xuaW1wb3J0IGNyZWF0ZSBmcm9tICcuL3NjcmlwdHMvY2FyZCc7XG5cbihmdW5jdGlvbigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3Qgc2VhcmNoQnRuID0gYm9keS5xdWVyeVNlbGVjdG9yKCdpbWcjc2VhcmNoJyk7XG4gIGNvbnN0IGdpdGh1YiA9IGJvZHkucXVlcnlTZWxlY3RvcignaW1nI2dpdEh1YicpO1xuICBjb25zdCBpbnB1dCA9IGJvZHkucXVlcnlTZWxlY3RvcignaW5wdXQjY2l0eScpO1xuICBjb25zdCBtYWluID0gYm9keS5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgZ2l0aHViLnNyYyA9IGdpdEh1YjtcbiAgZnVuY3Rpb24gY2hlY2tGb3JtKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGlmIChpbnB1dC52YWx1ZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrRm9ybSk7XG4gIHNlYXJjaEJ0bi5zcmMgPSBtYWduaWZ5O1xuXG4gIGN1cnJlbnRXZWF0aGVyLnNldExvY2F0aW9uKCd0YWd1aWcnKTtcbiAgLy8gY3VycmVudFdlYXRoZXIudG9nZ2xlVW5pdHMoKTtcbiAgXG4gIGN1cnJlbnRXZWF0aGVyLmxheVdlYXRoZXJEYXRhKClcbiAgICAudGhlbih3ZWF0aGVyRGF0YSA9PiB7XG4gICAgICBjb25zdCBwb3N0ID0gY3JlYXRlLndlYXRoZXJDYXJkKHdlYXRoZXJEYXRhKTtcbiAgICAgIGlmKG1haW4ucXVlcnlTZWxlY3RvcignZGl2I2NhcmQnKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50Q2FyZCA9IG1haW4ucXVlcnlTZWxlY3RvcignZGl2I2NhcmQnKTtcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChjdXJyZW50Q2FyZCk7XG4gICAgICB9XG4gICAgICBtYWluLmFwcGVuZENoaWxkKHBvc3QuY2FyZCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG59KSAoKVxuXG4iXSwibmFtZXMiOlsiY3JlYXRlIiwid2VhdGhlckNhcmQiLCJkYXRhIiwiY2FyZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNpdHkiLCJ0ZXh0Q29udGVudCIsImNpdHlOYW1lIiwiYXBwZW5kQ2hpbGQiLCJ3ZWF0aGVySG9sZGVyIiwid2VhdGhlciIsImRlc2NyaXB0aW9uIiwic3BsaXQiLCJtYXAiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIndlYXRoZXJJbWciLCJJbWFnZSIsInNyYyIsImljb25TcmMiLCJpIiwiYWRkaXRpb25hbEluZm8iLCJmZWVsc0xpa2UiLCJ3aW5kU3BlZWQiLCJ0ZW1wIiwidW5pdEJ0biIsInVuaXQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFdlYXRoZXIiLCJsb2NhdGlvbiIsInVybCIsInVuaXRzIiwiZXJyb3IiLCJzZXRVcmwiLCJ0b2dnbGVVbml0cyIsInNldExvY2F0aW9uIiwibG9jYXRpb25OYW1lIiwiZmV0Y2hXZWF0aGVyIiwiZmV0Y2giLCJtb2RlIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZmluYWxseSIsIkVycm9yIiwibWVzc2FnZSIsIndlYXRoZXJEYXRhIiwiY2F0Y2giLCJlcnIiLCJsYXlXZWF0aGVyRGF0YSIsImNsb3VkUGVyY2VudGFnZSIsImNsb3VkcyIsImFsbCIsIm5hbWUiLCJtYWluIiwiZmVlbHNfbGlrZSIsIm1heFRlbXAiLCJ0ZW1wX21heCIsIm1pblRlbXAiLCJ0ZW1wX21pbiIsImh1bWlkaXR5IiwibWFpbldlYXRoZXIiLCJpY29uIiwid2luZCIsInNwZWVkIiwiZ2l0SHViIiwibWFnbmlmeSIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoQnRuIiwiZ2l0aHViIiwiaW5wdXQiLCJjaGVja0Zvcm0iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwb3N0IiwiY3VycmVudENhcmQiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=