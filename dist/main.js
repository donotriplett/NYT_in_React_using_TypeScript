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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DisplayResults.tsx":
/*!***************************************!*\
  !*** ./components/DisplayResults.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
exports.DisplayResults = (props) => (react_1.default.createElement("div", null,
    props.results.map((result) => (react_1.default.createElement("div", { key: result._id },
        react_1.default.createElement("h2", null, result.headline.main),
        result.multimedia.length > 1 ? (react_1.default.createElement("img", { alt: "article", src: `http://www.nytimes.com/${result.multimedia[1].url}` })) : (null),
        react_1.default.createElement("p", null,
            result.snippet,
            react_1.default.createElement("br", null),
            result.keywords.length > 0 ? " Keywords: " : ""),
        react_1.default.createElement("ul", null, result.keywords.map((keyword) => (react_1.default.createElement("li", { key: keyword.value },
            " ",
            keyword.value,
            " ")))),
        react_1.default.createElement("a", { href: result.web_url },
            react_1.default.createElement("button", null, "Read It"))))),
    react_1.default.createElement("div", null,
        react_1.default.createElement("button", { onClick: (e) => props.changePageNumber(e, "down") },
            react_1.default.createElement("h4", null, "Previous 10")),
        react_1.default.createElement("h4", null,
            "page number: ",
            props.pageNumber + 1),
        react_1.default.createElement("button", { onClick: (e) => props.changePageNumber(e, "up") },
            react_1.default.createElement("h4", null, "Next 10")))));


/***/ }),

/***/ "./components/FetchResults.tsx":
/*!*************************************!*\
  !*** ./components/FetchResults.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const DisplayResults_1 = __webpack_require__(/*! ./DisplayResults */ "./components/DisplayResults.tsx");
const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const key = "b2e02612e179494c9f1f57577b582a0a";
exports.FetchResults = () => {
    const emptyResults = [];
    const [search, setSearch] = react_1.useState("");
    const [startDate, setStartDate] = react_1.useState("");
    const [endDate, setEndDate] = react_1.useState("");
    const [pageNumber, setPageNumber] = react_1.useState(0);
    const [results, setResults] = react_1.useState(emptyResults);
    const fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;
        url = startDate ? `${url}&begin_date=${startDate}` : url;
        url = endDate ? `${url}&end_date=${endDate}` : url;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then((data) => {
            setResults(data.response.docs);
            console.log(data);
        })
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        if (search) {
            fetchResults();
        }
    }, [pageNumber]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setPageNumber(0);
        fetchResults();
    };
    const changePageNumber = (event, direction) => {
        event.preventDefault();
        if (direction === "down") {
            if (pageNumber > 0) {
                setPageNumber(pageNumber - 1);
            }
        }
        if (direction === "up") {
            setPageNumber(pageNumber + 1);
        }
    };
    return (react_1.default.createElement("div", { className: "main" },
        react_1.default.createElement("div", { className: "mainDiv" },
            react_1.default.createElement("form", { onSubmit: (e) => handleSubmit(e) },
                react_1.default.createElement("span", null, "Enter a single search term (required):"),
                react_1.default.createElement("input", { type: "text", name: "search", onChange: (e) => {
                        setSearch(e.target.value);
                        console.log(e.target);
                    }, required: true }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("span", null, "Enter a start date:"),
                react_1.default.createElement("input", { type: "date", name: "startDate", pattern: "[0-9]{8}", onChange: (e) => setStartDate(e.target.value) }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("span", null, "Enter an end date:"),
                react_1.default.createElement("input", { type: "date", name: "endDate", pattern: "[0-9]{8}", onChange: (e) => setEndDate(e.target.value) }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("button", { className: "submit" }, "Submit Search")),
            results.length > 0 ? (react_1.default.createElement(DisplayResults_1.DisplayResults, { results: results, changePageNumber: changePageNumber, pageNumber: pageNumber })) : null)));
};


/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "react-dom"));
const FetchResults_1 = __webpack_require__(/*! ./components/FetchResults */ "./components/FetchResults.tsx");
const Index = () => (react_1.default.createElement("div", null,
    react_1.default.createElement(FetchResults_1.FetchResults, null)));
react_dom_1.default.render(react_1.default.createElement(Index, null), document.getElementById('root'));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map