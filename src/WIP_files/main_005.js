(this["webpackJsonporcawolfsecrets"] = this["webpackJsonporcawolfsecrets"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/stylesheets/main.scss":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/stylesheets/main.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_6_1_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_5_oneOf_6_3_node_modules_sass_loader_dist_cjs_js_ref_5_oneOf_6_4_node_modules_sn_stylekit_dist_stylekit_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!../../node_modules/sn-stylekit/dist/stylekit.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sn-stylekit/dist/stylekit.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_6_1_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_5_oneOf_6_3_node_modules_sass_loader_dist_cjs_js_ref_5_oneOf_6_4_node_modules_sn_stylekit_dist_stylekit_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body,\nhtml {\n  font-family: var(--sn-stylekit-sans-serif-font);\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: var(--sn-stylekit-base-font-size);\n  background-color: transparent; }\n\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n.sn-component {\n  display: flex;\n  flex-direction: column;\n  height: 100vh; }\n  .sn-component .sk-panel-content {\n    height: inherit !important; }\n\n#header {\n  border-bottom: 1px solid var(--sn-stylekit-border-color);\n  background-color: var(--sn-stylekit-background-color);\n  color: var(--sn-stylekit-foreground-color);\n  padding: 13px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end; }\n\n#content {\n  background-color: var(--sn-stylekit-contrast-background-color);\n  flex: 1 1;\n  padding: 0 10px; }\n\n.auth-dialog {\n  width: 450px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 200; }\n\n.auth-overlay {\n  position: fixed !important;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100; }\n\n.auth-list {\n  display: flex;\n  flex-direction: column; }\n\n.auth-edit {\n  margin: 10px 0; }\n\n.sk-notification {\n  overflow: visible !important;\n  margin: 10px 0 0 0 !important;\n  padding: 28px 14px 28px 28px !important; }\n\n.auth-notes-row .auth-notes {\n  font-size: var(--sn-stylekit-base-font-size);\n  font-style: italic;\n  overflow: hidden; }\n\n.auth-copy-notification {\n  position: absolute;\n  left: 50%;\n  bottom: 20px;\n  transform: translateX(-50%);\n  z-index: 200; }\n  .auth-copy-notification .sk-panel {\n    border-radius: 4px;\n    padding: 4px; }\n  .auth-copy-notification.visible {\n    visibility: visible;\n    opacity: 1;\n    transition: opacity 200ms ease-in; }\n  .auth-copy-notification.hidden {\n    visibility: hidden;\n    opacity: 0;\n    transition: visibility 0s 500ms, opacity 500ms ease-out; }\n\n/* entry default styles */\n.auth-entry {\n  display: flex;\n  align-items: center; }\n  @media screen and (max-width: 480px) {\n    .auth-entry .auth-details {\n      flex-direction: column !important;\n      align-items: flex-start !important; } }\n  .auth-entry .auth-details {\n    margin-bottom: 8px;\n    flex: 1 1;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    min-width: 0; }\n    .auth-entry .auth-details .auth-info {\n      margin: 4px 0;\n      min-width: inherit; }\n      .auth-entry .auth-details .auth-info .auth-service {\n        font-size: var(--sn-stylekit-font-size-h1);\n        font-weight: bold;\n        line-height: 1.9rem; }\n      .auth-entry .auth-details .auth-info .auth-account {\n        line-height: 1.5rem;\n        font-size: var(--sn-stylekit-font-size-p);\n        text-align: left;\n        font-weight: normal;\n        word-wrap: break-word; }\n    .auth-entry .auth-details .auth-token-info {\n      display: flex;\n      align-items: center;\n      padding-right: 12px; }\n      .auth-entry .auth-details .auth-token-info .auth-token {\n        font-size: 2rem;\n        align-self: center;\n        font-weight: bold;\n        color: var(--sn-stylekit-info-color);\n        display: flex;\n        justify-content: space-between;\n        width: 8.2rem;\n        cursor: pointer; }\n      .auth-entry .auth-details .auth-token-info .auth-countdown {\n        padding: 0 12px; }\n        .auth-entry .auth-details .auth-token-info .auth-countdown #countdown {\n          transform: rotateY(-180deg) rotateZ(-90deg);\n          height: 1.8rem;\n          width: 1.8rem;\n          align-self: center; }\n          .auth-entry .auth-details .auth-token-info .auth-countdown #countdown circle {\n            stroke-dasharray: 113px;\n            stroke-dashoffset: 0px;\n            stroke-width: 4px;\n            stroke: var(--sn-stylekit-success-color);\n            fill: none;\n            animation: countdown 10s linear infinite forwards; }\n  .auth-entry .auth-options {\n    color: var(--sn-stylekit-contrast-foreground-color);\n    overflow: visible;\n    margin-bottom: 8px;\n    align-self: flex-start; }\n    .auth-entry .auth-options .sk-menu-panel {\n      position: absolute;\n      right: 0;\n      z-index: 200; }\n\n/* spinner */\n.countdown-pie {\n  position: relative;\n  width: 24px;\n  height: 24px;\n  background: var(--sn-stylekit-background-color); }\n\n.countdown-pie,\n.countdown-pie * {\n  box-sizing: border-box; }\n\n.countdown-pie .pie {\n  width: 50%;\n  height: 100%;\n  transform-origin: 100% 50%;\n  position: absolute !important;\n  background: var(--sn-stylekit-info-color); }\n\n.countdown-pie .spinner {\n  border-radius: 100% 0 0 100% / 50% 0 0 50%;\n  z-index: 20;\n  border-right: none; }\n\n.countdown-pie .background {\n  border-radius: 50%;\n  width: 100%;\n  z-index: 40;\n  color: var(--sn-stylekit-info-color);\n  opacity: 0.4; }\n\n.countdown-pie .filler {\n  border-radius: 0 100% 100% 0 / 0 50% 50% 0;\n  left: 50%;\n  opacity: 0;\n  z-index: 10;\n  border-left: none; }\n\n.countdown-pie .mask {\n  width: 50%;\n  height: 100%;\n  position: absolute;\n  background: inherit;\n  opacity: 1;\n  z-index: 30; }\n\n#header-search-container {\n  position: relative;\n  min-width: 100%; }\n\n.filter-bar {\n  background-color: var(--sn-stylekit-contrast-background-color);\n  border-radius: var(--sn-stylekit-general-border-radius);\n  height: 100%;\n  color: #909090;\n  text-align: center;\n  font-weight: normal;\n  font-size: var(--sn-stylekit-font-size-h3);\n  border-style: solid;\n  border-color: transparent;\n  width: 100%;\n  position: relative; }\n\n#search-clear-button {\n  border-radius: 50%;\n  width: 17px;\n  height: 17px;\n  cursor: default;\n  background-color: var(--sn-stylekit-neutral-color);\n  color: var(--sn-stylekit-neutral-contrast-color);\n  font-size: 10px;\n  line-height: 17px;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 8px;\n  transition: background-color 0.15s linear; }\n\n#search-clear-button:hover {\n  background-color: var(--sn-stylekit-info-color); }\n\n.section-title-bar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 100%;\n  font-weight: 800; }\n\n.sk-button.constrast {\n  color: var(--sn-stylekit-contrast-foreground-color);\n  position: relative;\n  background-color: var(--sn-stylekit-contrast-background-color);\n  overflow: hidden;\n  border-radius: var(--sn-stylekit-general-border-radius);\n  border-color: var(--sn-stylekit-contrast-background-color);\n  font-weight: normal; }\n\n.sk-button.wide {\n  padding: 0.3rem 1.7rem; }\n\nsvg {\n  fill: var(--sn-stylekit-info-color); }\n", "",{"version":3,"sources":["webpack://src/stylesheets/main.scss"],"names":[],"mappings":"AAEA;;EAEE,+CAA+C;EAC/C,YAAY;EACZ,WAAW;EACX,SAAS;EACT,UAAU;EACV,4CAA4C;EAC5C,6BAA6B,EAAA;;AAG/B;EAEE,6CAA6C,EAAA;;AAG/C;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa,EAAA;EAHf;IAMI,0BAA0B,EAAA;;AAI9B;EACE,wDAAwD;EACxD,qDAAqD;EACrD,0CAA0C;EAC1C,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,qBAAqB,EAAA;;AAGvB;EACE,8DAA8D;EAC9D,SAAO;EACP,eAAe,EAAA;;AAGjB;EACE,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY,EAAA;;AAGd;EACE,0BAA0B;EAC1B,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,YAAY,EAAA;;AAGd;EACE,aAAa;EACb,sBAAsB,EAAA;;AAGxB;EACE,cAAc,EAAA;;AAGhB;EAEE,4BAA4B;EAC5B,6BAA6B;EAC7B,uCAAuC,EAAA;;AAGzC;EAEI,4CAA4C;EAC5C,kBAAkB;EAClB,gBAAgB,EAAA;;AAKpB;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,2BAA2B;EAC3B,YAAY,EAAA;EALd;IAQI,kBAAkB;IAClB,YAAY,EAAA;EAThB;IAaI,mBAAmB;IACnB,UAAU;IACV,iCAAiC,EAAA;EAfrC;IAmBI,kBAAkB;IAClB,UAAU;IACV,uDAAuD,EAAA;;AAK3D,yBAAA;AACA;EACE,aAAa;EACb,mBAAmB,EAAA;EAGnB;IALF;MAOM,iCAAiC;MACjC,kCAAkC,EAAA,EACnC;EATL;IAaI,kBAAkB;IAClB,SAAO;IACP,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY,EAAA;IAnBhB;MAsBM,aAAa;MACb,kBAAkB,EAAA;MAvBxB;QA0BQ,0CAA0C;QAC1C,iBAAiB;QACjB,mBAAmB,EAAA;MA5B3B;QAgCQ,mBAAmB;QACnB,yCAAyC;QACzC,gBAAgB;QAChB,mBAAmB;QACnB,qBAAqB,EAAA;IApC7B;MAyCM,aAAa;MACb,mBAAmB;MACnB,mBAAmB,EAAA;MA3CzB;QA8CQ,eAAe;QACf,kBAAkB;QAClB,iBAAiB;QACjB,oCAAoC;QACpC,aAAa;QACb,8BAA8B;QAC9B,aAAa;QACb,eAAe,EAAA;MArDvB;QAyDQ,eAAe,EAAA;QAzDvB;UA6DU,2CAA2C;UAC3C,cAAc;UACd,aAAa;UACb,kBAAkB,EAAA;UAhE5B;YAmEY,uBAAuB;YACvB,sBAAsB;YACtB,iBAAiB;YACjB,wCAAwC;YACxC,UAAU;YACV,iDAAiD,EAAA;EAxE7D;IAgFI,mDAAmD;IACnD,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB,EAAA;IAnF1B;MAsFM,kBAAkB;MAClB,QAAQ;MACR,YAAY,EAAA;;AAKlB,YAAA;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,+CAA+C,EAAA;;AAGjD;;EAEE,sBAAsB,EAAA;;AAGxB;EACE,UAAU;EACV,YAAY;EACZ,0BAA0B;EAC1B,6BAA6B;EAC7B,yCAAyC,EAAA;;AAG3C;EACE,0CAA0C;EAC1C,WAAW;EACX,kBAAkB,EAAA;;AAKpB;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,oCAAoC;EACpC,YAAY,EAAA;;AAGd;EACE,0CAA0C;EAC1C,SAAS;EACT,UAAU;EACV,WAAW;EAGX,iBAAiB,EAAA;;AAGnB;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,WAAW,EAAA;;AA4Bb;EACE,kBAAkB;EAClB,eAAe,EAAA;;AAGjB;EACE,8DAA8D;EAC9D,uDAAuD;EACvD,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,0CAA0C;EAC1C,mBAAmB;EACnB,yBAAyB;EACzB,WAAW;EACX,kBAAkB,EAAA;;AAGpB;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kDAAkD;EAClD,gDAAgD;EAChD,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,UAAU;EACV,yCAAyC,EAAA;;AAG3C;EACE,+CAA+C,EAAA;;AAGjD;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,gBAAgB,EAAA;;AAGlB;EACI,mDAAmD;EACnD,kBAAkB;EAClB,8DAA8D;EAC9D,gBAAgB;EAChB,uDAAuD;EACvD,0DAA0D;EAC1D,mBAAmB,EAAA;;AAGvB;EACE,sBAAsB,EAAA;;AAExB;EACE,mCAAmC,EAAA","sourcesContent":["@import '../../node_modules/sn-stylekit/dist/stylekit.css';\n\nbody,\nhtml {\n  font-family: var(--sn-stylekit-sans-serif-font);\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: var(--sn-stylekit-base-font-size);\n  background-color: transparent;\n}\n\n* {\n  // To prevent gray flash when focusing input on mobile Safari\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.sn-component {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n\n  .sk-panel-content {\n    height: inherit !important;\n  }\n}\n\n#header {\n  border-bottom: 1px solid var(--sn-stylekit-border-color);\n  background-color: var(--sn-stylekit-background-color);\n  color: var(--sn-stylekit-foreground-color);\n  padding: 13px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n#content {\n  background-color: var(--sn-stylekit-contrast-background-color);\n  flex: 1;\n  padding: 0 10px;\n}\n\n.auth-dialog {\n  width: 450px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 200;\n}\n\n.auth-overlay {\n  position: fixed !important;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n}\n\n.auth-list {\n  display: flex;\n  flex-direction: column;\n}\n\n.auth-edit {\n  margin: 10px 0;\n}\n\n.sk-notification {\n  // Hacking sk-notification style\n  overflow: visible !important; // We need this for the dropdown menu\n  margin: 10px 0 0 0 !important;\n  padding: 28px 14px 28px 28px !important;\n}\n\n.auth-notes-row {\n  .auth-notes {\n    font-size: var(--sn-stylekit-base-font-size);\n    font-style: italic;\n    overflow: hidden;\n  }\n}\n\n// Copy token notification\n.auth-copy-notification {\n  position: absolute;\n  left: 50%;\n  bottom: 20px;\n  transform: translateX(-50%);\n  z-index: 200;\n\n  .sk-panel {\n    border-radius: 4px;\n    padding: 4px;\n  }\n\n  &.visible {\n    visibility: visible;\n    opacity: 1;\n    transition: opacity 200ms ease-in;\n  }\n\n  &.hidden {\n    visibility: hidden;\n    opacity: 0;\n    transition: visibility 0s 500ms, opacity 500ms ease-out;\n  }\n}\n\n\n/* entry default styles */\n.auth-entry {\n  display: flex;\n  align-items: center;\n\n  // Collapse on mobile\n  @media screen and (max-width: 480px) {\n    .auth-details {\n      flex-direction: column !important;\n      align-items: flex-start !important;\n    }\n  }\n\n  .auth-details {\n    margin-bottom: 8px;\n    flex: 1;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    min-width: 0;\n\n    .auth-info {\n      margin: 4px 0;\n      min-width: inherit;\n\n      .auth-service {\n        font-size: var(--sn-stylekit-font-size-h1);\n        font-weight: bold;\n        line-height: 1.9rem;\n      }\n\n      .auth-account {\n        line-height: 1.5rem;\n        font-size: var(--sn-stylekit-font-size-p);\n        text-align: left;\n        font-weight: normal;\n        word-wrap: break-word;\n      }\n    }\n\n    .auth-token-info {\n      display: flex;\n      align-items: center;\n      padding-right: 12px;\n\n      .auth-token {\n        font-size: 2rem;\n        align-self: center;\n        font-weight: bold;\n        color: var(--sn-stylekit-info-color);\n        display: flex;\n        justify-content: space-between;\n        width: 8.2rem;\n        cursor: pointer;\n      }\n\n      .auth-countdown {\n        padding: 0 12px;\n\n        // Countdown animation\n        #countdown {\n          transform: rotateY(-180deg) rotateZ(-90deg);\n          height: 1.8rem;\n          width: 1.8rem;\n          align-self: center;\n\n          circle {\n            stroke-dasharray: 113px;\n            stroke-dashoffset: 0px;\n            stroke-width: 4px;\n            stroke: var(--sn-stylekit-success-color);\n            fill: none;\n            animation: countdown 10s linear infinite forwards;\n          }\n        }\n      }\n    }\n  }\n\n  .auth-options {\n    color: var(--sn-stylekit-contrast-foreground-color);\n    overflow: visible;\n    margin-bottom: 8px;\n    align-self: flex-start;\n\n    .sk-menu-panel {\n      position: absolute;\n      right: 0;\n      z-index: 200;\n    }\n  }\n}\n\n/* spinner */\n.countdown-pie {\n  position: relative;\n  width: 24px;\n  height: 24px;\n  background: var(--sn-stylekit-background-color);\n}\n\n.countdown-pie,\n.countdown-pie * {\n  box-sizing: border-box;\n}\n\n.countdown-pie .pie {\n  width: 50%;\n  height: 100%;\n  transform-origin: 100% 50%;\n  position: absolute !important;\n  background: var(--sn-stylekit-info-color);\n}\n\n.countdown-pie .spinner {\n  border-radius: 100% 0 0 100% / 50% 0 0 50%;\n  z-index: 20;\n  border-right: none;\n  // Injected in CountdownPie.js\n  // animation: rota 30s linear infinite;\n}\n\n.countdown-pie .background {\n  border-radius: 50%;\n  width: 100%;\n  z-index: 40;\n  color: var(--sn-stylekit-info-color);\n  opacity: 0.4;\n}\n\n.countdown-pie .filler {\n  border-radius: 0 100% 100% 0 / 0 50% 50% 0;\n  left: 50%;\n  opacity: 0;\n  z-index: 10;\n  // Injected in CountdownPie.js\n  // animation: opa 30s steps(1, end) infinite reverse;\n  border-left: none;\n}\n\n.countdown-pie .mask {\n  width: 50%;\n  height: 100%;\n  position: absolute;\n  background: inherit;\n  opacity: 1;\n  z-index: 30;\n  // Injected in CountdownPie.js\n  // animation: opa 30s steps(1, end) infinite;\n}\n\n// Injected in CountdownPie.js\n// @keyframes rota {\n//   0% {\n//     transform: rotate(0deg);\n//   }\n\n//   100% {\n//     transform: rotate(360deg);\n//   }\n// }\n\n// Injected in CountdownPie.js\n// @keyframes opa {\n//   0% {\n//     opacity: 1;\n//   }\n\n//   50%,\n//   100% {\n//     opacity: 0;\n//   }\n// }\n\n#header-search-container{\n  position: relative;\n  min-width: 100%;\n}\n\n.filter-bar {\n  background-color: var(--sn-stylekit-contrast-background-color);\n  border-radius: var(--sn-stylekit-general-border-radius);\n  height: 100%;\n  color: #909090;\n  text-align: center;\n  font-weight: normal;\n  font-size: var(--sn-stylekit-font-size-h3);\n  border-style: solid;\n  border-color: transparent;\n  width: 100%;\n  position: relative;\n}\n\n#search-clear-button {\n  border-radius: 50%;\n  width: 17px;\n  height: 17px;\n  cursor: default;\n  background-color: var(--sn-stylekit-neutral-color);\n  color: var(--sn-stylekit-neutral-contrast-color);\n  font-size: 10px;\n  line-height: 17px;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 8px;\n  transition: background-color 0.15s linear;\n}\n\n#search-clear-button:hover {\n  background-color: var(--sn-stylekit-info-color);\n}\n\n.section-title-bar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 100%;\n  font-weight: 800;\n}\n\n.sk-button.constrast {\n    color: var(--sn-stylekit-contrast-foreground-color);\n    position: relative;\n    background-color: var(--sn-stylekit-contrast-background-color);\n    overflow: hidden;\n    border-radius: var(--sn-stylekit-general-border-radius);\n    border-color: var(--sn-stylekit-contrast-background-color);\n    font-weight: normal;\n}\n\n.sk-button.wide {\n  padding: 0.3rem 1.7rem;\n}\nsvg {\n  fill: var(--sn-stylekit-info-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _components_EditEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/EditEntry */ "./src/components/EditEntry.js");
/* harmony import */ var _components_ViewEntries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ViewEntries */ "./src/components/ViewEntries.js");
/* harmony import */ var _components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ConfirmDialog */ "./src/components/ConfirmDialog.js");
/* harmony import */ var _components_DataErrorAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/DataErrorAlert */ "./src/components/DataErrorAlert.js");
/* harmony import */ var _components_HeaderEntry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/HeaderEntry */ "./src/components/HeaderEntry.js");
/* harmony import */ var sn_editor_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sn-editor-kit */ "./node_modules/sn-editor-kit/dist/editor-kit.js");
/* harmony import */ var sn_editor_kit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sn_editor_kit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_DataImportEntry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/DataImportEntry */ "./src/components/DataImportEntry.js");
/* harmony import */ var _datatransformation_import_import__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datatransformation/import/import */ "./src/datatransformation/import/import.ts");
/* harmony import */ var _datatransformation_verification_verification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datatransformation/verification/verification */ "./src/datatransformation/verification/verification.ts");
/* harmony import */ var _datatransformation_migration_v0Migration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./datatransformation/migration/v0Migration */ "./src/datatransformation/migration/v0Migration.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/src/App.js";














const initialState = {
  filterText: '',
  text: '',
  jsonPrepImport: '',
  entries: [],
  parseError: false,
  importMode: false,
  editMode: false,
  editEntry: null,
  confirmRemove: false,
  displayCopy: false
};
class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.addEntry = entry => {
      //Currently we know the entry doesn't have a UUID
      //Let's generate one now for the entry
      entry['uuid'] = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
      this.setState(state => {
        const entries = state.entries.concat([entry]);
        this.saveNote(entries);
        return {
          editMode: false,
          editEntry: null,
          entries
        };
      });
    };

    this.addEntries = newEntries => {
      this.setState(state => {
        const entries = state.entries.concat(newEntries);
        this.saveNote(entries);
        return {
          editMode: false,
          editEntry: null,
          entries
        };
      });
    };

    this.editEntry = ({
      uuid,
      entry
    }) => {
      this.setState(state => {
        let index = this.getIndexFromUUID(uuid, this.state.entries);
        const entries = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state.entries, {
          [index]: {
            $set: entry
          }
        });
        this.saveNote(entries);
        return {
          editMode: false,
          editEntry: null,
          entries
        };
      });
    };

    this.removeEntry = id => {
      this.setState(state => {
        const entries = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state.entries, {
          $splice: [[id, 1]]
        });
        this.saveNote(entries);
        return {
          confirmRemove: false,
          editEntry: null,
          entries
        };
      });
    };

    this.onAddNew = () => {
      this.setState({
        editMode: true,
        editEntry: null
      });
    };

    this.onImportNew = () => {
      this.setState({
        importMode: true,
        editMode: false
      });
    };

    this.attemptImport = () => {
      let rawJSON = null;

      try {
        rawJSON = JSON.parse(this.state.jsonPrepImport);
      } catch (error) {
        console.log("Error occured parsing a note");
      }

      if (rawJSON) {
        let importStatusAndcontent = Object(_datatransformation_import_import__WEBPACK_IMPORTED_MODULE_10__["importJSON"])(rawJSON);

        if (importStatusAndcontent[1]) {
          this.addEntries(importStatusAndcontent[0]);
        }
      }

      this.setState({
        importMode: false
      });
    };

    this.updateTextState = text => {
      this.setState({
        jsonPrepImport: text
      });
    };

    this.onEdit = uuid => {
      this.setState(state => ({
        editMode: true,
        importMode: false,
        editEntry: {
          uuid,
          entry: this.getByUUID(uuid, this.state.entries)
        }
      }));
    };

    this.getByUUID = (uuid, entries) => {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].uuid === uuid) {
          return entries[i];
        }
      }
    };

    this.getIndexFromUUID = (uuid, entries) => {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].uuid === uuid) {
          return i;
        }
      }

      return -1;
    };

    this.onSearch = text => {
      this.setState(state => ({
        filterText: text
      }));
    };

    this.onUpdateSearch = text => {
      this.setState(state => ({
        filterText: text
      }));
    };

    this.onCancel = () => {
      this.setState({
        confirmRemove: false,
        editMode: false,
        editEntry: null
      });
    };

    this.onRemove = id => {
      this.setState(state => ({
        confirmRemove: true,
        editEntry: {
          id,
          entry: state.entries[id]
        }
      }));
    };

    this.onSave = ({
      uuid,
      entry
    }) => {
      // If there's no ID it's a new note
      debugger;

      if (uuid != null) {
        this.editEntry({
          uuid,
          entry
        });
      } else {
        this.addEntry(entry);
      }
    };

    this.onCopyToken = () => {
      this.setState({
        displayCopy: true
      });

      if (this.clearTooltipTimer) {
        clearTimeout(this.clearTooltipTimer);
      }

      this.clearTooltipTimer = setTimeout(() => {
        this.setState({
          displayCopy: false
        });
      }, 2000);
    };

    this.configureEditorKit();
    this.state = initialState;
    this.attemptImport = this.attemptImport.bind(this);
    this.updateTextState = this.updateTextState.bind(this);
  }
  /**
   * Link to standard notes.
   */


  configureEditorKit() {
    let delegate = new sn_editor_kit__WEBPACK_IMPORTED_MODULE_8__["EditorKitDelegate"]({
      setEditorRawText: text => {
        let parseError = false;
        let entries = [];
        debugger;

        if (text) {
          try {
            entries = JSON.parse(text); //If not a valid format and can not upgrade THEN we have a parse error

            if (!Object(_datatransformation_verification_verification__WEBPACK_IMPORTED_MODULE_11__["isValidFormat"])(entries) && Object(_datatransformation_verification_verification__WEBPACK_IMPORTED_MODULE_11__["canUpgrade"])(entries)) {
              entries = Object(_datatransformation_migration_v0Migration__WEBPACK_IMPORTED_MODULE_12__["migrateFromV0"])(entries); // We need to write changes so we're not in an constant migration every single time
              // that client opens up app (assuming that rarely edit entries)

              this.saveNote(entries);
            } else if (!Object(_datatransformation_verification_verification__WEBPACK_IMPORTED_MODULE_11__["isValidFormat"])(entries)) {
              parseError = true;
              entries = []; //We need to make sure entries is empty array otherwise we'll get a
              // blank screen (side effect of converting JSON object that's valid but not correct format)
            }
          } catch (e) {
            // Couldn't parse the content
            parseError = true;
          }
        }

        this.setState({ ...initialState,
          text,
          parseError,
          entries
        });
      },
      generateCustomPreview: text => {
        let entries = [];

        try {
          entries = JSON.parse(text);
        } finally {
          return {
            html: `<div><strong>${entries.length}</strong> TokenVault Entries </div>`,
            plain: `${entries.length} TokenVault Entries`
          };
        }
      },
      clearUndoHistory: () => {},
      getElementsBySelector: () => []
    });
    this.editorKit = new sn_editor_kit__WEBPACK_IMPORTED_MODULE_8__["EditorKit"]({
      delegate: delegate,
      mode: 'json',
      supportsFilesafe: false
    });
  }

  saveNote(entries) {
    this.editorKit.onEditorValueChanged(JSON.stringify(entries, null, 2));
  } // Entry operations


  render() {
    const editEntry = this.state.editEntry || {};
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      className: "sn-component",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
        className: `auth-copy-notification ${this.state.displayCopy ? 'visible' : 'hidden'}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: "sk-panel",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
            className: "sk-font-small sk-bold",
            children: "Copied token to clipboard."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 9
      }, this), this.state.parseError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_DataErrorAlert__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 35
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_HeaderEntry__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onAddNew: this.onAddNew,
        onUpdateSearch: text => this.onUpdateSearch(text)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
        id: "content",
        children: [this.state.importMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_DataImportEntry__WEBPACK_IMPORTED_MODULE_9__["default"], {
          onUpdate: text => this.updateTextState(text),
          onConfirm: () => this.attemptImport,
          onCancel: () => this.setState({
            importMode: false
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 13
        }, this), this.state.editMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_EditEntry__WEBPACK_IMPORTED_MODULE_3__["default"], {
          uuid: editEntry.uuid,
          entry: editEntry.entry,
          onSave: this.onSave,
          onCancel: this.onCancel,
          onImport: this.onImportNew
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_ViewEntries__WEBPACK_IMPORTED_MODULE_4__["default"], {
          entries: this.state.entries,
          onEdit: this.onEdit,
          onRemove: this.onRemove,
          onCopyToken: this.onCopyToken
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 13
        }, this), this.state.confirmRemove && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: `Remove ${editEntry.entry.service}`,
          message: "Are you sure you want to remove this entry?",
          onConfirm: () => this.removeEntry(editEntry.id),
          onCancel: this.onCancel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }, this);
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/AuthEntry.js":
/*!*************************************!*\
  !*** ./src/components/AuthEntry.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthEntry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_otp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/otp */ "./src/lib/otp.js");
/* harmony import */ var _CountdownPie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CountdownPie */ "./src/components/CountdownPie.js");
/* harmony import */ var _AuthMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthMenu */ "./src/components/AuthMenu.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/src/components/AuthEntry.js";





class AuthEntry extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.updateToken = async () => {
      const secret = this.props.entry['secondFactor']['secret'];
      const shouldContinue = this.props.entry['secondFactor']['isTrue2FA'];
      if (!secret || !shouldContinue) return; //In the event of undefined we return

      const token = await _lib_otp__WEBPACK_IMPORTED_MODULE_1__["totp"].gen(secret);
      const timeLeft = this.getTimeLeft();
      this.setState({
        token
      });
      this.timer = setTimeout(this.updateToken, timeLeft * 1000);
    };

    this.handleInputChange = event => {
      const target = event.target;
      const name = target.name;
      this.props.onEntryChange({
        id: this.props.id,
        name,
        value: target.value
      });
    };

    this.copyToken = event => {
      const textField = document.createElement('textarea');
      textField.innerText = this.state.token;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand('copy');
      textField.remove();
      this.props.onCopyToken();
    };

    this.state = {
      token: ''
    };
    this.updateToken();
  }

  getTimeLeft() {
    const seconds = new Date().getSeconds();
    return seconds > 29 ? 60 - seconds : 30 - seconds;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // If the secret changed make sure to recalculate token
    if (nextProps.entry.secret !== this.props.entry.secret) {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.updateToken, 0);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const {
      service,
      account,
      notes
    } = this.props.entry;
    const {
      id,
      onEdit,
      onRemove
    } = this.props;
    const {
      token
    } = this.state;
    const timeLeft = this.getTimeLeft();
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "sk-notification sk-base",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "auth-entry",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "auth-details",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "auth-info",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "auth-service",
              children: service
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "auth-account",
              children: account
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "auth-options",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_AuthMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onEdit: onEdit.bind(this, id),
            onRemove: onRemove.bind(this, id)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), notes && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "auth-notes-row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "auth-notes",
          children: notes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this);
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/AuthMenu.js":
/*!************************************!*\
  !*** ./src/components/AuthMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/src/components/AuthMenu.js";


class AuthMenu extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.onToggle = () => {
      this.setState({
        show: !this.state.show
      });
    };

    this.onEdit = () => {
      this.onToggle();
      this.props.onEdit();
    };

    this.onRemove = () => {
      this.onToggle();
      this.props.onRemove();
    };

    this.state = {
      show: false
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "auth-menu",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "sk-button",
        onClick: this.onToggle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sk-label",
          children: "\u2022\u2022\u2022"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), this.state.show && [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "auth-overlay",
        onClick: this.onToggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "sk-menu-panel",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sk-menu-panel-row",
          onClick: this.onEdit,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "sk-label",
            children: "Edit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sk-menu-panel-row",
          onClick: this.onRemove,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "sk-label",
            children: "Remove"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this)]]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this);
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ConfirmDialog.js":
/*!*****************************************!*\
  !*** ./src/components/ConfirmDialog.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/src/components/ConfirmDialog.js";



const ConfirmDialog = ({
  title,
  message,
  onConfirm,
  onCancel
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
  className: "auth-overlay",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "auth-dialog sk-panel",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "sk-panel-header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "sk-panel-header-title",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "sk-panel-content",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "sk-panel-section sk-panel-hero",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sk-panel-row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "sk-h1",
            children: message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "sk-panel-footer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "sk-button-group stretch",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sk-button neutral",
          onClick: onCancel,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "sk-label",
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sk-button info",
          onClick: onConfirm,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "sk-label",
            children: "Confirm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

_c = ConfirmDialog;
/* harmony default export */ __webpack_exports__["default"] = (ConfirmDialog);

var _c;

__webpack_require__.$Refresh$.register(_c, "ConfirmDialog");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/CountdownPie.js":
/*!****************************************!*\
  !*** ./src/components/CountdownPie.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/src/components/CountdownPie.js";



const animationName = token => `countdown${token}`;

const rotaAnimation = (token, offset) => `@keyframes rota_${animationName(token)} {
  0% {
    transform: rotate(${offset}deg);
  }

  100% {
    transform: rotate(360deg);
  }
}`;

const opaAnimation = (token, offset) => `@keyframes opa_${animationName(token)} {
  0% {
    opacity: 1;
  }

  ${offset}%,
  100% {
    opacity: 0;
  }
}`;

const opaReverseAnimation = (token, offset) => `@keyframes opa_r_${animationName(token)} {
  0% {
    opacity: 0;
  }

  ${offset}%,
  100% {
    opacity: 1;
  }
}`;

class CountdownPie extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  calculateRotaOffset(left, total) {
    return this.calculatePercentage(left, total) * 360;
  }

  calculateOpaOffset(left, total) {
    const percentage = this.calculatePercentage(left, total) * 100;
    const percTo50 = 50 - percentage; // 8 is an offset because the animation is not in sync otherwise

    return percTo50 < 0 ? 0 : Math.ceil(Math.min(percTo50 + 8, 50));
  }

  calculatePercentage(left, total) {
    return (total - left) / total;
  }

  updateCountdown(left, total) {
    const {
      token
    } = this.props;
    const styleSheet = document.styleSheets[0];
    const rotaKeyframes = rotaAnimation(token, this.calculateRotaOffset(left, total));
    const opaKeyframes = opaAnimation(token, this.calculateOpaOffset(left, total));
    const opaReverseKeyframes = opaReverseAnimation(token, this.calculateOpaOffset(left, total));
    styleSheet.insertRule(rotaKeyframes, styleSheet.cssRules.length);
    styleSheet.insertRule(opaKeyframes, styleSheet.cssRules.length);
    styleSheet.insertRule(opaReverseKeyframes, styleSheet.cssRules.length);
    this.timer = setTimeout(this.removeRules.bind(this, token), left * 1000);
  }

  removeRules(token) {
    const ruleNames = [`rota_${animationName(token)}`, `opa_${animationName(token)}`, `opa_r_${animationName(token)}`];
    ruleNames.forEach(r => this.removeRule(r));
  }

  removeRule(ruleName) {
    const styleSheet = document.styleSheets[0];
    const rules = styleSheet.cssRules;

    for (const idx in rules) {
      if (rules[idx].name === ruleName) {
        styleSheet.removeRule(idx);
        break;
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    // Only update the animation if the token changed
    if (nextProps.token === this.props.token) {
      return false;
    }

    return true;
  }

  render() {
    const {
      left,
      total
    } = this.props;
    this.updateCountdown(left, total);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "countdown-pie",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "pie spinner",
        style: {
          animation: `rota_${animationName(this.props.token)} ${left}s linear`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "pie background"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "pie filler",
        style: {
          animation: `opa_r_${animationName(this.props.token)} ${left}s steps(1, end)`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "mask",
        style: {
          animation: `opa_${animationName(this.props.token)} ${left}s steps(1, end)`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CountdownPie);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/DataErrorAlert.js":
/*!******************************************!*\
  !*** ./src/components/DataErrorAlert.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/src/components/DataErrorAlert.js";



const DataErrorAlert = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
  className: "auth-overlay",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "auth-dialog sk-panel",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "sk-panel-header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "sk-panel-header-title",
        children: "Invalid Note"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "sk-panel-content",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "sk-panel-section sk-panel-hero",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sk-panel-row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "sk-h1",
            children: "The note you selected already has existing data that is not valid with this editor. Please clear the note, or select a new one, and try again."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

_c = DataErrorAlert;
/* harmony default export */ __webpack_exports__["default"] = (DataErrorAlert);

var _c;

__webpack_require__.$Refresh$.register(_c, "DataErrorAlert");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/DataImportEntry.js":
/*!*******************************************!*\
  !*** ./src/components/DataImportEntry.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/src/components/DataImportEntry.js";


const initialState = {
  jsonResponse: {}
};

class DataImportDialog extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.updateText = this.updateText.bind(this);
  }

  updateText(event) {
    this.props.onUpdate(event.target.value);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "auth-edit sk-panel",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "sk-panel-content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sk-panel-section",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "sk-panel-section-title sk-panel-row",
            children: "Please paste .JSON from your password manager below"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sk-panel-section sk-panel-hero",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
            id: "jsonImport",
            rows: "15",
            style: {
              "resize": "none"
            },
            className: "sk-input contrast",
            onChange: this.updateText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "sk-panel-footer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sk-button-group stretch",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "sk-button neutral",
            onClick: this.props.onCancel,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "sk-label",
              children: "Cancel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "sk-button info",
            onClick: this.props.onConfirm(this.state.jsonResponse),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "sk-label",
              children: "Import"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DataImportDialog);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/EditEntry.js":
/*!*************************************!*\
  !*** ./src/components/EditEntry.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditEntry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/src/components/EditEntry.js";


class EditEntry extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = event => {
      const target = event.target;
      const name = target.name;
      const value = name === 'secret' ? this.formatSecret(target.value) : target.value;

      if (name === 'secret') {
        this.setState(state => ({
          entry: { ...state.entry,
            'secondFactor': {
              'isTrue2FA': true,
              'secret': value
            }
          }
        }));
      } else {
        this.setState(state => ({
          entry: { ...state.entry,
            [name]: value
          }
        }));
      }
    };

    this.onSave = e => {
      e.preventDefault();
      let {
        uuid,
        entry
      } = this.state; // Need to make sure entry has secondFactor/secret set to '' if undefined
      // Which will occur if the client didn't enter a second factor

      if (!entry['secondFactor']) {
        entry['secondFactor'] = {
          'secret': '',
          'isTrue2FA': false
        };
      } else if (!entry['secondFactor']['secret']) {
        entry['secondFactor']['secret'] = '';
      } //Updating as expected


      this.props.onSave({
        uuid,
        entry
      });
    };

    this.state = {
      uuid: this.props.uuid,
      entry: this.props.entry
    };
  }

  formatSecret(secret) {
    return secret.replace(/\s/g, '').toUpperCase();
  }

  render() {
    const {
      uuid,
      entry
    } = this.state;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "auth-edit sk-panel",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "sk-panel-content",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sk-panel-section",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "sk-panel-section-title sk-panel-row",
            children: [uuid != null ? 'Edit entry' : 'Add new entry', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              onClick: this.props.onImport,
              className: "sk-button constrast wide",
              children: "Import"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
            onSubmit: this.onSave,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              name: "service",
              className: "sk-input contrast",
              placeholder: "Name",
              value: entry.service,
              onChange: this.handleInputChange,
              type: "text",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              name: "account",
              className: "sk-input contrast",
              placeholder: "Account",
              value: entry.account,
              onChange: this.handleInputChange,
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              name: "secret",
              className: "sk-input contrast",
              placeholder: "TOTP",
              onChange: this.handleInputChange,
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              name: "notes",
              className: "sk-input contrast",
              placeholder: "Notes",
              value: entry.notes,
              onChange: this.handleInputChange,
              type: "text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "sk-panel-row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "sk-button-group stretch",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
                  type: "button",
                  onClick: this.props.onCancel,
                  className: "sk-button neutral",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "sk-label",
                    children: "Cancel"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
                  type: "submit",
                  className: "sk-button info",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "sk-label",
                    children: uuid != null ? 'Save' : 'Create'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this);
  }

}
EditEntry.defaultProps = {
  entry: {}
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/HeaderEntry.js":
/*!***************************************!*\
  !*** ./src/components/HeaderEntry.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderEntry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/src/components/HeaderEntry.js";

/**
 * Provides the unified search and quick information that stays constant regardless of the state the rest of the application is in.
 * @prop {onAddNew} function to call when person clicks the '+' button
 * @prop {onUpdateSearch} function to call when the person changes text input field
 */


class HeaderEntry extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.onSearch = event => {
      this.setState(state => ({
        text: event.target.value
      }));
      this.props.onUpdateSearch(event.target.value);
    };

    this.onClear = () => {
      document.getElementById('header-bar-search').value = '';
      this.setState(state => ({
        text: ''
      }));
      this.props.onUpdateSearch('');
    };

    this.state = {
      text: this.props.text
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      id: "header",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "section-title-bar-header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: "Orcawolf Secrets"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          class: "sk-button constrast wide",
          style: {
            "font-size": "larger"
          },
          onClick: this.props.onAddNew,
          children: "+"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        id: "header-search-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          className: "sk-input constrast filter-bar",
          type: "text",
          id: "header-bar-search",
          placeholder: "Search secrets",
          onChange: this.onSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), this.state.text !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          id: "search-clear-button",
          onClick: this.onClear,
          children: "\u2715"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 40
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", {
        width: "100px",
        height: "100px",
        viewBox: "0 0 100 100",
        version: "1.1",
        id: "svg8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("defs", {
          id: "defs2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
          id: "layer1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("rect", {
            id: "rect10",
            width: "80",
            height: "80",
            x: "10",
            y: "10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", {
        width: "100px",
        height: "100px",
        viewBox: "0 0 100 100",
        version: "1.1",
        id: "svg8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("defs", {
          id: "defs2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
          id: "layer1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("circle", {
            id: "path36",
            cx: "50",
            cy: "50",
            r: "40",
            x: "10",
            y: "10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", {
        width: "100px",
        height: "100px",
        viewBox: "0 0 100 100",
        version: "1.1",
        id: "svg8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("defs", {
          id: "defs2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
          id: "layer1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
            id: "path18",
            d: "m 60.211778,53.484676 -50.2117793,0 L 35.105888,10 Z",
            transform: "matrix(1.5932516,0,0,1.8397285,-5.9325157,-8.3972853)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 1
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this);
  }

}
HeaderEntry.defaultProps = {
  text: ''
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ViewEntries.js":
/*!***************************************!*\
  !*** ./src/components/ViewEntries.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthEntry */ "./src/components/AuthEntry.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/src/components/ViewEntries.js";




const ViewEntries = ({
  entries,
  onEdit,
  onRemove,
  onCopyToken
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
  className: "auth-list",
  children: entries.map(entry => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_AuthEntry__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: entry.uuid,
    entry: entry,
    onEdit: onEdit,
    onRemove: onRemove,
    onCopyToken: onCopyToken
  }, entry.uuid, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }, undefined))
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

_c = ViewEntries;
/* harmony default export */ __webpack_exports__["default"] = (ViewEntries);

var _c;

__webpack_require__.$Refresh$.register(_c, "ViewEntries");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/datatransformation/import/bitwarden.ts":
/*!****************************************************!*\
  !*** ./src/datatransformation/import/bitwarden.ts ***!
  \****************************************************/
/*! exports provided: isBitwardenFormat, convertFromBitwardenFormat, convertToUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBitwardenFormat", function() { return isBitwardenFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFromBitwardenFormat", function() { return convertFromBitwardenFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToUrls", function() { return convertToUrls; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

/**
 * Utilities to detect and convert from the legendary bitwarden password manager JSON format.
 */

function isBitwardenFormat(jsonObject) {
  return jsonObject["folders"] && jsonObject["items"];
}
function convertFromBitwardenFormat(jsonObject) {
  let v1Entries = [];
  let folderMapping = {}; //We construct folder mapping

  for (let i = 0; i < jsonObject["folders"].length; i++) {
    folderMapping[jsonObject["folders"][i]["id"]] = jsonObject["folders"][i]["name"];
  }

  for (let i = 0; i < jsonObject["items"].length; i++) {
    let entry = {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      service: jsonObject["items"][i]["name"] || '',
      account: jsonObject["items"][i]["login"]["username"] || '',
      password: jsonObject["items"][i]["login"]["password"] || '',
      secondFactor: {
        isTrue2FA: jsonObject["items"][i]['login']['totp'] ? true : false,
        secret: jsonObject["items"][i]['login']['totp'] || ''
      },
      notes: jsonObject["items"][i]["notes"] || '',
      urls: convertToUrls(jsonObject['items'][i]['login']['uris']),
      raw: {
        partial: jsonObject["items"][i]
      },
      version: 1
    };
    entry.raw.partial["folder"] = folderMapping[entry.raw.partial["folderId"]];
    v1Entries.push(entry);
  }

  return v1Entries;
}

/**
 * Returns list of url's [url1, url2... urlN]
 * @param jsonSubset the Bitwarden URI's format
 */
function convertToUrls(jsonSubset) {
  if (!jsonSubset) return [];
  let returned = [];

  for (let i = 0; i < jsonSubset.length; i++) {
    returned.push(jsonSubset[i]['uri']);
  }

  return returned;
} // figure out render issue AFTER migration
// make sure adding works correctly
// make sure UI still works (plug in from new locations)

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/datatransformation/import/import.ts":
/*!*************************************************!*\
  !*** ./src/datatransformation/import/import.ts ***!
  \*************************************************/
/*! exports provided: importJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importJSON", function() { return importJSON; });
/* harmony import */ var _bitwarden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bitwarden */ "./src/datatransformation/import/bitwarden.ts");
/* harmony import */ var _tokensafe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokensafe */ "./src/datatransformation/import/tokensafe.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



function importJSON(jsonObject) {
  let output = [];
  let foundParser = true;

  if (Object(_bitwarden__WEBPACK_IMPORTED_MODULE_0__["isBitwardenFormat"])(jsonObject)) {
    output = Object(_bitwarden__WEBPACK_IMPORTED_MODULE_0__["convertFromBitwardenFormat"])(jsonObject);
  } else if (Object(_tokensafe__WEBPACK_IMPORTED_MODULE_1__["isTokenSafeFormat"])(jsonObject)) {
    output = Object(_tokensafe__WEBPACK_IMPORTED_MODULE_1__["convertFromTokenSafe"])(jsonObject);
  } else {
    foundParser = false;
  }

  return [output, foundParser];
}
/**
 * @exported {10} The exported content. Note this is extra stage here setups of the rest 
 * of the program to be extremely flexible in parsing and changes in the future
 * 
 * @didSucceedAtParsing {boolean} In the event that it didn't exported value is []
 */

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/datatransformation/import/tokensafe.ts":
/*!****************************************************!*\
  !*** ./src/datatransformation/import/tokensafe.ts ***!
  \****************************************************/
/*! exports provided: isTokenSafeFormat, convertFromTokenSafe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTokenSafeFormat", function() { return isTokenSafeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFromTokenSafe", function() { return convertFromTokenSafe; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


function isTokenSafeFormat(jsonObject) {
  return jsonObject[0]["service"] && jsonObject[0]["secret"];
}
function convertFromTokenSafe(jsonObject) {
  let v1Entries = [];

  for (let i = 0; i < jsonObject.length; i++) {
    let entry = {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      service: jsonObject[i]['service'] || '',
      account: jsonObject[i]['account'] || '',
      password: '',
      secondFactor: {
        isTrue2FA: true,
        secret: jsonObject[i]['secret'] || ''
      },
      raw: {
        partial: null
      },
      notes: jsonObject[i]['notes'] || '',
      urls: [],
      version: 1
    };
    v1Entries.push(entry);
  }

  return v1Entries;
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/datatransformation/migration/v0Migration.ts":
/*!*********************************************************!*\
  !*** ./src/datatransformation/migration/v0Migration.ts ***!
  \*********************************************************/
/*! exports provided: migrateFromV0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migrateFromV0", function() { return migrateFromV0; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _import_bitwarden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../import/bitwarden */ "./src/datatransformation/import/bitwarden.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



function migrateFromV0(oldFormat) {
  //Currently no way to lock data in a way that promises data will be in consistent state.
  //Update to SNBridge required to make this possible
  //Look at blog.sapphirepack.org/
  let newFormat = [];

  for (let i = 0; i < oldFormat.length; i++) {
    let v1Item = {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      service: oldFormat[i].service || '',
      account: oldFormat[i].account || '',
      password: oldFormat[i].raw.truely.login.password || '',
      secondFactor: convertToSecondFactor(oldFormat[i].secret, oldFormat[i].raw.partial.login.totp),
      notes: oldFormat[i].notes || '',
      urls: Object(_import_bitwarden__WEBPACK_IMPORTED_MODULE_1__["convertToUrls"])(oldFormat[i].raw.truely.login.uris),
      raw: {
        partial: oldFormat[i].raw.partial
      },
      version: 1
    };
    newFormat.push(v1Item);
  }

  return newFormat;
}

function convertToSecondFactor(secret, totp) {
  if (!totp) {
    return {
      isTrue2FA: false,
      secret: secret || ''
    };
  } else {
    return {
      isTrue2FA: true,
      secret: secret || ''
    };
  }
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/datatransformation/verification/verification.ts":
/*!*************************************************************!*\
  !*** ./src/datatransformation/verification/verification.ts ***!
  \*************************************************************/
/*! exports provided: isValidFormat, canUpgrade, v1Format, isStringArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidFormat", function() { return isValidFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUpgrade", function() { return canUpgrade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v1Format", function() { return v1Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStringArray", function() { return isStringArray; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


/**
 * Verify valid format
 * @param jsonObject 
 * @returns 
 */

function isValidFormat(jsonObject) {
  return v1Format(jsonObject);
}
function canUpgrade(jsonObject) {
  return v0Format(jsonObject);
}
/**
 * @deprecated Will be removed in 0.1.0
 * @param jsonObject JSON array to test
 * @returns true if valid v0 foramt and false otherwise
 */

function v0Format(jsonObject) {
  if (Array.isArray(jsonObject)) {
    let arrayOfJsonObjects = jsonObject; // Quick check to see if first object is correct type, assume rest of objects
    // are also same. 

    if (arrayOfJsonObjects.length === 0) return true;
    return typeof arrayOfJsonObjects[0].account === 'string' && typeof arrayOfJsonObjects[0].service === 'string' && (typeof arrayOfJsonObjects[0].notes === 'string' || arrayOfJsonObjects[0].notes == null) && Number(arrayOfJsonObjects[0].version) === 0;
  } else {
    return false;
  }
}
/**
 * @private currently exported to allow testing until @see v0Format is removed.
 * @param jsonObject JSON array to test
 * @returns true if a valid v1 format and false otherwise
 */


function v1Format(jsonObject) {
  if (Array.isArray(jsonObject)) {
    let arrayOfJsonObjects = jsonObject; // Quick check to see if first object is correct type, assume rest are also
    // the same

    if (arrayOfJsonObjects.length === 0) return true;
    let firstItem = arrayOfJsonObjects[0];
    return isUUID(firstItem.uuid) && typeof firstItem.service === 'string' && typeof firstItem.account === 'string' && typeof firstItem.password === 'string' && isSecondFactor(firstItem.secondFactor) && typeof firstItem.notes === 'string' && isStringArray(firstItem.urls) && Number(firstItem.version) === 1;
  } else {
    return false;
  }
}

function isUUID(uuid) {
  return Object(uuid__WEBPACK_IMPORTED_MODULE_0__["validate"])(uuid) && Object(uuid__WEBPACK_IMPORTED_MODULE_0__["version"])(uuid) === 4;
}

function isSecondFactor(item) {
  return typeof item.isTrue2FA === 'boolean' && typeof item.secret === 'string';
}

function isStringArray(stringArray) {
  if (Array.isArray(stringArray)) {
    if (stringArray.length === 0) {
      return true;
    } else {
      for (let i = 0; i < stringArray.length; i++) {
        if (typeof stringArray[i] !== 'string') {
          return false;
        }
      }

      return true;
    }
  } else {
    return false;
  }
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheets/main.scss */ "./src/stylesheets/main.scss");
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById('root'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/lib/otp.js":
/*!************************!*\
  !*** ./src/lib/otp.js ***!
  \************************/
/*! exports provided: secretPattern, parseKeyUri, hotp, totp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotp", function() { return hotp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totp", function() { return totp; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/lib/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "secretPattern", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["secretPattern"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseKeyUri", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["parseKeyUri"]; });

__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




class Hotp {
  /**
   * Generate a counter based One Time Password
   *
   * @return {String} the one time password
   *
   * Arguments:
   *
   *  args
   *     key - Key for the one time password.  This should be unique and secret for
   *         every user as this is the seed that is used to calculate the HMAC
   *
   *     counter - Counter value.  This should be stored by the application, must
   *         be user specific, and be incremented for each request.
   *
   */
  async gen(secret, opt) {
    var key = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["base32ToHex"])(secret) || '';
    opt = opt || {};
    var counter = opt.counter || 0;
    var hexCounter = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["leftpad"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["decToHex"])(counter), 16, '0');
    var digest = await this.createHmac('SHA-1', key, hexCounter);
    var h = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hexToBytes"])(digest); // Truncate

    var offset = h[h.length - 1] & 0xf;
    var v = (h[offset] & 0x7f) << 24 | (h[offset + 1] & 0xff) << 16 | (h[offset + 2] & 0xff) << 8 | h[offset + 3] & 0xff;
    v = v % 1000000 + '';
    return Array(7 - v.length).join('0') + v;
  }
  /**
   * Check a One Time Password based on a counter.
   *
   * @return {Object} null if failure, { delta: # } on success
   * delta is the time step difference between the client and the server
   *
   * Arguments:
   *
   *  args
   *     key - Key for the one time password.  This should be unique and secret for
   *         every user as it is the seed used to calculate the HMAC
   *
   *     token - Passcode to validate.
   *
   *     window - The allowable margin for the counter.  The function will check
   *         'W' codes in the future against the provided passcode.  Note,
   *         it is the calling applications responsibility to keep track of
   *         'W' and increment it for each password check, and also to adjust
   *         it accordingly in the case where the client and server become
   *         out of sync (second argument returns non zero).
   *         E.g. if W = 100, and C = 5, this function will check the passcode
   *         against all One Time Passcodes between 5 and 105.
   *
   *         Default - 50
   *
   *     counter - Counter value.  This should be stored by the application, must
   *         be user specific, and be incremented for each request.
   *
   */


  async verify(token, key, opt) {
    opt = opt || {};
    var window = opt.window || 50;
    var counter = opt.counter || 0; // Now loop through from C to C + W to determine if there is
    // a correct code

    for (var i = counter - window; i <= counter + window; ++i) {
      opt.counter = i;

      if ((await this.gen(key, opt)) === token) {
        // We have found a matching code, trigger callback
        // and pass offset
        return {
          delta: i - counter
        };
      }
    } // If we get to here then no codes have matched, return null


    return null;
  }

  async createHmac(alg, key, str) {
    const hmacKey = await window.crypto.subtle.importKey('raw', // raw format of the key - should be Uint8Array
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hextoBuf"])(key), {
      // algorithm details
      name: 'HMAC',
      hash: {
        name: alg
      }
    }, false, // export = false
    ['sign'] // what this key can do
    );
    const sig = await window.crypto.subtle.sign('HMAC', hmacKey, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hextoBuf"])(str));
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["bufToHex"])(sig);
  }

}

const hotp = new Hotp();

class Totp {
  /**
   * Generate a time based One Time Password
   *
   * @return {String} the one time password
   *
   * Arguments:
   *
   *  args
   *     key - Key for the one time password.  This should be unique and secret for
   *         every user as it is the seed used to calculate the HMAC
   *
   *     time - The time step of the counter.  This must be the same for
   *         every request and is used to calculat C.
   *
   *         Default - 30
   *
   */
  async gen(key, opt) {
    opt = opt || {};
    var time = opt.time || 30;

    var _t = Date.now(); // Determine the value of the counter, C
    // This is the number of time steps in seconds since T0


    opt.counter = Math.floor(_t / 1000 / time);
    return hotp.gen(key, opt);
  }
  /**
   * Check a One Time Password based on a timer.
   *
   * @return {Object} null if failure, { delta: # } on success
   * delta is the time step difference between the client and the server
   *
   * Arguments:
   *
   *  args
   *     key - Key for the one time password.  This should be unique and secret for
   *         every user as it is the seed used to calculate the HMAC
   *
   *     token - Passcode to validate.
   *
   *     window - The allowable margin for the counter.  The function will check
   *         'W' codes either side of the provided counter.  Note,
   *         it is the calling applications responsibility to keep track of
   *         'W' and increment it for each password check, and also to adjust
   *         it accordingly in the case where the client and server become
   *         out of sync (second argument returns non zero).
   *         E.g. if W = 5, and C = 1000, this function will check the passcode
   *         against all One Time Passcodes between 995 and 1005.
   *
   *         Default - 6
   *
   *     time - The time step of the counter.  This must be the same for
   *         every request and is used to calculate C.
   *
   *         Default - 30
   *
   */


  async verify(token, key, opt) {
    opt = opt || {};
    var time = opt.time || 30;

    var _t = Date.now(); // Determine the value of the counter, C
    // This is the number of time steps in seconds since T0


    opt.counter = Math.floor(_t / 1000 / time);
    return hotp.verify(token, key, opt);
  }

}

const totp = new Totp();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/*! exports provided: secretPattern, hexToBytes, decToHex, bufToHex, hextoBuf, base32ToHex, leftpad, parseKeyUri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secretPattern", function() { return secretPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToBytes", function() { return hexToBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decToHex", function() { return decToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufToHex", function() { return bufToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hextoBuf", function() { return hextoBuf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base32ToHex", function() { return base32ToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftpad", function() { return leftpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseKeyUri", function() { return parseKeyUri; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
const secretPattern = `^[${base32chars}]{16,}$`;
function hexToBytes(hex) {
  var bytes = [];

  for (var c = 0, C = hex.length; c < C; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }

  return bytes;
}
function decToHex(s) {
  return (s < 15.5 ? '0' : '') + Math.round(s).toString(16);
}
function bufToHex(buf) {
  return Array.prototype.map.call(new Uint8Array(buf), x => ('00' + x.toString(16)).slice(-2)).join('');
}
function hextoBuf(hex) {
  var view = new Uint8Array(hex.length / 2);

  for (var i = 0; i < hex.length; i += 2) {
    view[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }

  return view.buffer;
}
function base32ToHex(base32) {
  var bits, chunk, hex, i, val;
  bits = '';
  hex = '';
  i = 0;

  while (i < base32.length) {
    val = base32chars.indexOf(base32.charAt(i).toUpperCase());
    bits += leftpad(val.toString(2), 5, '0');
    i++;
  }

  i = 0;

  while (i + 4 <= bits.length) {
    chunk = bits.substr(i, 4);
    hex = hex + parseInt(chunk, 2).toString(16);
    i += 4;
  }

  return hex;
}
function leftpad(str, len, pad) {
  if (len + 1 >= str.length) {
    str = Array(len + 1 - str.length).join(pad) + str;
  }

  return str;
}
/**
 * This function takes an otpauth:// style key URI and parses it into an object with keys for the
 * various parts of the URI
 *
 * @param {String} uri The otpauth:// uri that you want to parse
 *
 * @return {Object} The parsed URI or null on failure. The URI object looks like this:
 *
 * {
 *  type: 'totp',
 *  label: { issuer: 'ACME Co', account: 'jane@example.com' },
 *  query: {
 *   secret: 'JBSWY3DPEHPK3PXP',
 *   digits: '6'
 *  }
 * }
 *
 * @see <a href="https://github.com/google/google-authenticator/wiki/Key-Uri-Format">otpauth Key URI Format</a>
 */

function parseKeyUri(uri) {
  // Quick sanity check
  if (typeof uri !== 'string' || uri.length < 7) return null; // I would like to just use new URL(), but the behavior is different between node and browsers, so
  // we have to do some of the work manually with regex.

  const parts = /otpauth:\/\/([A-Za-z]+)\/([^?]+)\??(.*)?/i.exec(uri);

  if (!parts || parts.length < 3) {
    return null;
  } // eslint-disable-next-line no-unused-vars


  const [fullUri, type, fullLabel] = parts; // Sanity check type and label

  if (!type || !fullLabel) {
    return null;
  } // Parse the label


  const decodedLabel = decodeURIComponent(fullLabel);
  const labelParts = decodedLabel.split(/: ?/);
  const label = labelParts && labelParts.length === 2 ? {
    issuer: labelParts[0],
    account: labelParts[1]
  } : {
    issuer: '',
    account: decodedLabel
  }; // Parse query string

  const qs = parts[3] ? new URLSearchParams(parts[3]) : [];
  const query = [...qs].reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {}); // Returned the parsed parts of the URI

  return {
    type: type.toLowerCase(),
    label,
    query
  };
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/stylesheets/main.scss":
/*!***********************************!*\
  !*** ./src/stylesheets/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/stylesheets/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/stylesheets/main.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/stylesheets/main.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/cubesendurance/Standard Notes/Workspace/orcawolfsecrets/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map