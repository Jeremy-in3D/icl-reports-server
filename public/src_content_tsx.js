"use strict";
(self["webpackChunkicl_reports"] = self["webpackChunkicl_reports"] || []).push([["src_content_tsx"],{

/***/ "./src/components/misc/home-selection.tsx":
/*!************************************************!*\
  !*** ./src/components/misc/home-selection.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSelection": () => (/* binding */ HomeSelection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const HomeSelection = ({ text, imgPath, onClick, pathTo }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "block-item", onClick: onClick }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: "block-item-icon", src: imgPath }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: text })] })));
};


/***/ }),

/***/ "./src/content.tsx":
/*!*************************!*\
  !*** ./src/content.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.tsx");
/* harmony import */ var _classes_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/route */ "./src/classes/route.ts");
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/context */ "./src/context/context.tsx");





const Content = () => {
    const reportInstance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new _classes_route__WEBPACK_IMPORTED_MODULE_3__.Route());
    const appContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_4__["default"]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!appContext.reports.length) {
            fetch("get-current-reports", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: "",
            })
                .then((response) => response.json())
                .then((data) => {
                const reportsContextCopy = [...appContext.reports, ...data];
                appContext.setReports(reportsContextCopy);
            })
                .catch((error) => {
                console.log("error: ", error);
            });
            appContext.setReportInstance(reportInstance);
        }
    }, [appContext.user]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "app " }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_home__WEBPACK_IMPORTED_MODULE_2__.Home, { reportInstanceRef: reportInstance, appContext: appContext }) })));
};


/***/ }),

/***/ "./src/home.tsx":
/*!**********************!*\
  !*** ./src/home.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _classes_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/route */ "./src/classes/route.ts");
/* harmony import */ var _components_misc_home_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/misc/home-selection */ "./src/components/misc/home-selection.tsx");
/* harmony import */ var _data_imports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/imports */ "./src/data/imports.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const Home = ({ reportInstanceRef, appContext }) => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    //What the different buttons in home are, their image, and onClick event
    const buttons = [
        {
            text: 'יצור דו"ח',
            imgPath: _data_imports__WEBPACK_IMPORTED_MODULE_3__.createIcon.href,
            onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                reportInstanceRef.current = new _classes_route__WEBPACK_IMPORTED_MODULE_1__.Route();
                const extra = Object.assign({}, appContext.extra);
                appContext.setExtra(Object.assign(Object.assign({}, extra), { screen: "report" }));
                navigate("/reports");
            }),
            pathTo: "reports",
        },
        {
            text: "חיפוש דוחות",
            imgPath: _data_imports__WEBPACK_IMPORTED_MODULE_3__.searchIcon.href,
            onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                const extra = Object.assign({}, appContext.extra);
                appContext.setExtra(Object.assign(Object.assign({}, extra), { screen: "search" }));
                navigate("/search-reports");
            }),
            pathTo: "search-reports",
        },
        {
            text: "מסך סטטוס",
            imgPath: _data_imports__WEBPACK_IMPORTED_MODULE_3__.viewIcon.href,
            onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                const extra = Object.assign({}, appContext.extra);
                appContext.setExtra(Object.assign(Object.assign({}, extra), { screen: "status" }));
                navigate("/alerts");
            }),
            pathTo: "alerts",
        },
    ];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "home-screen" }, { children: buttons.map((item, idx) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_misc_home_selection__WEBPACK_IMPORTED_MODULE_2__.HomeSelection, { text: item.text, imgPath: item.imgPath, onClick: item.onClick, pathTo: item.pathTo }, idx))) })));
};


/***/ })

}]);
//# sourceMappingURL=src_content_tsx.js.map