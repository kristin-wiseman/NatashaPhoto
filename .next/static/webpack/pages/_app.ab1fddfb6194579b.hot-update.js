"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[9].use[4]!./styles/global.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[9].use[4]!./styles/global.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nheader {\\n  font-size: 3rem;\\n  background-color: darkseagreen;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  z-index: 1;\\n}\\nheader .item {\\n  display: inline-block;\\n}\\nheader #menu {\\n  background-color: darkseagreen;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  position: absolute;\\n  top: 8.4375rem;\\n  width: 100%;\\n  font-size: 2rem;\\n  padding-bottom: 10px;\\n}\\nheader #menu a {\\n  display: block;\\n  color: black;\\n  margin-right: 30px;\\n}\\nheader #menuButton {\\n  margin-right: 30px;\\n}\\nheader #siteTitle {\\n  margin-left: 80px;\\n  padding-bottom: 10px;\\n}\\n\\n.serif {\\n  font-family: \\\"Kiwi Maru\\\", serif;\\n  font-weight: 300;\\n}\\n\\n.script {\\n  font-family: \\\"Seaweed Script\\\", cursive;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.scss\"],\"names\":[],\"mappings\":\"AAKA;EACI,sBAAA;AAJJ;;AAMA;EACI,qBAAA;AAHJ;;AAKA;EAGI,eAFY;EAGZ,8BAdO;EAeP,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,UAAA;AAJJ;AAKI;EACI,qBAAA;AAHR;AAKI;EACI,8BA3BG;EA4BH,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;EACA,oBAAA;AAHR;AAIQ;EACI,cAAA;EACA,YAAA;EACA,kBA3BK;AAyBjB;AAKI;EACI,kBA/BS;AA4BjB;AAKI;EACI,iBAAA;EACA,oBAAA;AAHR;;AAOA;EACI,+BAnDO;EAoDP,gBAAA;AAJJ;;AAMA;EACI,sCAtDQ;AAmDZ\",\"sourcesContent\":[\"//GLOBAL CSS ONLY\\r\\n$np-green: darkseagreen; //lightgreen / palegreen\\r\\n$np-serif: 'Kiwi Maru', serif; //OR Zilla Slab / Solway\\r\\n$np-script: 'Seaweed Script', cursive; //OR Meie Script / Satisfy\\r\\n\\r\\n* {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\na {\\r\\n    text-decoration: none;\\r\\n}\\r\\nheader {\\r\\n    $mobile-fs: 3rem; //mobile font size\\r\\n    $menu-right: 30px; //R margin for button & items\\r\\n    font-size: $mobile-fs;\\r\\n    background-color: $np-green;\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    z-index: 1;\\r\\n    .item {\\r\\n        display: inline-block;\\r\\n    }\\r\\n    #menu {\\r\\n        background-color: $np-green;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: flex-end;\\r\\n        position: absolute;\\r\\n        top: calc($mobile-fs*2.8125); //should be 2.8125 * header font size\\r\\n        width: 100%;\\r\\n        font-size: 2rem;\\r\\n        padding-bottom: 10px;\\r\\n        a {\\r\\n            display: block;\\r\\n            color: black;\\r\\n            margin-right: $menu-right;\\r\\n        }\\r\\n    }\\r\\n    #menuButton {\\r\\n        margin-right: $menu-right;\\r\\n    }\\r\\n    #siteTitle {\\r\\n        margin-left: 80px;\\r\\n        padding-bottom: 10px;\\r\\n    }\\r\\n}\\r\\n\\r\\n.serif {\\r\\n    font-family: $np-serif;\\r\\n    font-weight: 300;\\r\\n}\\r\\n.script {\\r\\n    font-family: $np-script;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy9nbG9iYWwuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNkNBQTZDLDJCQUEyQixHQUFHLE9BQU8sMEJBQTBCLEdBQUcsWUFBWSxvQkFBb0IsbUNBQW1DLG9CQUFvQixXQUFXLFlBQVksZ0JBQWdCLGtCQUFrQix3QkFBd0IsbUNBQW1DLGVBQWUsR0FBRyxnQkFBZ0IsMEJBQTBCLEdBQUcsZ0JBQWdCLG1DQUFtQyxrQkFBa0IsMkJBQTJCLDBCQUEwQix1QkFBdUIsbUJBQW1CLGdCQUFnQixvQkFBb0IseUJBQXlCLEdBQUcsa0JBQWtCLG1CQUFtQixpQkFBaUIsdUJBQXVCLEdBQUcsc0JBQXNCLHVCQUF1QixHQUFHLHFCQUFxQixzQkFBc0IseUJBQXlCLEdBQUcsWUFBWSxzQ0FBc0MscUJBQXFCLEdBQUcsYUFBYSw2Q0FBNkMsR0FBRyxPQUFPLG1GQUFtRixXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLHdFQUF3RSwyREFBMkQsbUVBQW1FLHFDQUFxQywrQkFBK0IsS0FBSyxPQUFPLDhCQUE4QixLQUFLLFlBQVksMEJBQTBCLDZDQUE2QywyREFBMkQsb0NBQW9DLHdCQUF3QixlQUFlLGdCQUFnQixvQkFBb0Isc0JBQXNCLDRCQUE0Qix1Q0FBdUMsbUJBQW1CLGVBQWUsa0NBQWtDLFNBQVMsZUFBZSx3Q0FBd0MsMEJBQTBCLG1DQUFtQyxrQ0FBa0MsK0JBQStCLDBDQUEwQyw2REFBNkQsNEJBQTRCLGlDQUFpQyxlQUFlLCtCQUErQiw2QkFBNkIsMENBQTBDLGFBQWEsU0FBUyxxQkFBcUIsc0NBQXNDLFNBQVMsb0JBQW9CLDhCQUE4QixpQ0FBaUMsU0FBUyxLQUFLLGdCQUFnQiwrQkFBK0IseUJBQXlCLEtBQUssYUFBYSxnQ0FBZ0MsS0FBSyxtQkFBbUI7QUFDNzZGO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5zY3NzPzM1ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHotaW5kZXg6IDE7XFxufVxcbmhlYWRlciAuaXRlbSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbmhlYWRlciAjbWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogOC40Mzc1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuaGVhZGVyICNtZW51IGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcbmhlYWRlciAjbWVudUJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcbmhlYWRlciAjc2l0ZVRpdGxlIHtcXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zZXJpZiB7XFxuICBmb250LWZhbWlseTogXFxcIktpd2kgTWFydVxcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnNjcmlwdCB7XFxuICBmb250LWZhbWlseTogXFxcIlNlYXdlZWQgU2NyaXB0XFxcIiwgY3Vyc2l2ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtFQUNJLHNCQUFBO0FBSko7O0FBTUE7RUFDSSxxQkFBQTtBQUhKOztBQUtBO0VBR0ksZUFGWTtFQUdaLDhCQWRPO0VBZVAsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQUpKO0FBS0k7RUFDSSxxQkFBQTtBQUhSO0FBS0k7RUFDSSw4QkEzQkc7RUE0QkgsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBSFI7QUFJUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBM0JLO0FBeUJqQjtBQUtJO0VBQ0ksa0JBL0JTO0FBNEJqQjtBQUtJO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUhSOztBQU9BO0VBQ0ksK0JBbkRPO0VBb0RQLGdCQUFBO0FBSko7O0FBTUE7RUFDSSxzQ0F0RFE7QUFtRFpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy9HTE9CQUwgQ1NTIE9OTFlcXHJcXG4kbnAtZ3JlZW46IGRhcmtzZWFncmVlbjsgLy9saWdodGdyZWVuIC8gcGFsZWdyZWVuXFxyXFxuJG5wLXNlcmlmOiAnS2l3aSBNYXJ1Jywgc2VyaWY7IC8vT1IgWmlsbGEgU2xhYiAvIFNvbHdheVxcclxcbiRucC1zY3JpcHQ6ICdTZWF3ZWVkIFNjcmlwdCcsIGN1cnNpdmU7IC8vT1IgTWVpZSBTY3JpcHQgLyBTYXRpc2Z5XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbmhlYWRlciB7XFxyXFxuICAgICRtb2JpbGUtZnM6IDNyZW07IC8vbW9iaWxlIGZvbnQgc2l6ZVxcclxcbiAgICAkbWVudS1yaWdodDogMzBweDsgLy9SIG1hcmdpbiBmb3IgYnV0dG9uICYgaXRlbXNcXHJcXG4gICAgZm9udC1zaXplOiAkbW9iaWxlLWZzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbnAtZ3JlZW47XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICAuaXRlbSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgI21lbnUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5wLWdyZWVuO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoJG1vYmlsZS1mcyoyLjgxMjUpOyAvL3Nob3VsZCBiZSAyLjgxMjUgKiBoZWFkZXIgZm9udCBzaXplXFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJG1lbnUtcmlnaHQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgI21lbnVCdXR0b24ge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWVudS1yaWdodDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2l0ZVRpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNlcmlmIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRucC1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuLnNjcmlwdCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkbnAtc2NyaXB0O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[9].use[4]!./styles/global.scss\n");

/***/ })

});