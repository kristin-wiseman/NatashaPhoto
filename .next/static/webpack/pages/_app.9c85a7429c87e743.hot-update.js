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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nheader {\\n  font-size: 3rem;\\n  background-color: darkseagreen;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  z-index: 1;\\n}\\nheader .item {\\n  display: inline-block;\\n}\\nheader #menu {\\n  background-color: darkseagreen;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  position: absolute;\\n  top: 8.4375rem;\\n  width: 100%;\\n  font-size: 2rem;\\n  padding-bottom: 10px;\\n}\\nheader #menu a {\\n  display: block;\\n  color: black;\\n  margin-right: 30px;\\n}\\nheader #menuButton {\\n  margin-right: 30px;\\n}\\nheader #siteTitle {\\n  margin-left: 80px;\\n  padding-bottom: 10px;\\n}\\n\\n.serif {\\n  font-family: \\\"Kiwi Maru\\\", serif;\\n  font-weight: 300;\\n}\\n\\n.script {\\n  font-family: \\\"Seaweed Script\\\", cursive;\\n}\\n\\n:export {\\n  np-green: darkseagreen;\\n  np-serif: \\\"Kiwi Maru\\\", serif;\\n  np-script: \\\"Seaweed Script\\\", cursive;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.scss\"],\"names\":[],\"mappings\":\"AAKA;EACI,sBAAA;AAJJ;;AAMA;EACI,qBAAA;AAHJ;;AAKA;EAGI,eAFY;EAGZ,8BAdO;EAeP,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,UAAA;AAJJ;AAKI;EACI,qBAAA;AAHR;AAKI;EACI,8BA3BG;EA4BH,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;EACA,oBAAA;AAHR;AAIQ;EACI,cAAA;EACA,YAAA;EACA,kBA3BK;AAyBjB;AAKI;EACI,kBA/BS;AA4BjB;AAKI;EACI,iBAAA;EACA,oBAAA;AAHR;;AAOA;EACI,+BAnDO;EAoDP,gBAAA;AAJJ;;AAMA;EACI,sCAtDQ;AAmDZ;;AAMA;EACI,sBA5DO;EA6DP,4BA5DO;EA6DP,oCA5DQ;AAyDZ\",\"sourcesContent\":[\"//GLOBAL CSS ONLY\\r\\n$np-green: darkseagreen; //lightgreen / palegreen\\r\\n$np-serif: 'Kiwi Maru', serif; //OR Zilla Slab / Solway\\r\\n$np-script: 'Seaweed Script', cursive; //OR Meie Script / Satisfy\\r\\n\\r\\n* {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\na {\\r\\n    text-decoration: none;\\r\\n}\\r\\nheader {\\r\\n    $mobile-fs: 3rem; //mobile font size\\r\\n    $menu-right: 30px; //R margin for button & items\\r\\n    font-size: $mobile-fs;\\r\\n    background-color: $np-green;\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    z-index: 1;\\r\\n    .item {\\r\\n        display: inline-block;\\r\\n    }\\r\\n    #menu {\\r\\n        background-color: $np-green;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: flex-end;\\r\\n        position: absolute;\\r\\n        top: calc($mobile-fs*2.8125); //should be 2.8125 * header font size\\r\\n        width: 100%;\\r\\n        font-size: 2rem;\\r\\n        padding-bottom: 10px;\\r\\n        a {\\r\\n            display: block;\\r\\n            color: black;\\r\\n            margin-right: $menu-right;\\r\\n        }\\r\\n    }\\r\\n    #menuButton {\\r\\n        margin-right: $menu-right;\\r\\n    }\\r\\n    #siteTitle {\\r\\n        margin-left: 80px;\\r\\n        padding-bottom: 10px;\\r\\n    }\\r\\n}\\r\\n\\r\\n.serif {\\r\\n    font-family: $np-serif;\\r\\n    font-weight: 300;\\r\\n}\\r\\n.script {\\r\\n    font-family: $np-script;\\r\\n}\\r\\n\\r\\n:export {\\r\\n    np-green: $np-green;\\r\\n    np-serif: $np-serif;\\r\\n    np-script: $np-script;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy9nbG9iYWwuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNkNBQTZDLDJCQUEyQixHQUFHLE9BQU8sMEJBQTBCLEdBQUcsWUFBWSxvQkFBb0IsbUNBQW1DLG9CQUFvQixXQUFXLFlBQVksZ0JBQWdCLGtCQUFrQix3QkFBd0IsbUNBQW1DLGVBQWUsR0FBRyxnQkFBZ0IsMEJBQTBCLEdBQUcsZ0JBQWdCLG1DQUFtQyxrQkFBa0IsMkJBQTJCLDBCQUEwQix1QkFBdUIsbUJBQW1CLGdCQUFnQixvQkFBb0IseUJBQXlCLEdBQUcsa0JBQWtCLG1CQUFtQixpQkFBaUIsdUJBQXVCLEdBQUcsc0JBQXNCLHVCQUF1QixHQUFHLHFCQUFxQixzQkFBc0IseUJBQXlCLEdBQUcsWUFBWSxzQ0FBc0MscUJBQXFCLEdBQUcsYUFBYSw2Q0FBNkMsR0FBRyxhQUFhLDJCQUEyQixtQ0FBbUMsMkNBQTJDLEdBQUcsT0FBTyxtRkFBbUYsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsd0VBQXdFLDJEQUEyRCxtRUFBbUUscUNBQXFDLCtCQUErQixLQUFLLE9BQU8sOEJBQThCLEtBQUssWUFBWSwwQkFBMEIsNkNBQTZDLDJEQUEyRCxvQ0FBb0Msd0JBQXdCLGVBQWUsZ0JBQWdCLG9CQUFvQixzQkFBc0IsNEJBQTRCLHVDQUF1QyxtQkFBbUIsZUFBZSxrQ0FBa0MsU0FBUyxlQUFlLHdDQUF3QywwQkFBMEIsbUNBQW1DLGtDQUFrQywrQkFBK0IsMENBQTBDLDZEQUE2RCw0QkFBNEIsaUNBQWlDLGVBQWUsK0JBQStCLDZCQUE2QiwwQ0FBMEMsYUFBYSxTQUFTLHFCQUFxQixzQ0FBc0MsU0FBUyxvQkFBb0IsOEJBQThCLGlDQUFpQyxTQUFTLEtBQUssZ0JBQWdCLCtCQUErQix5QkFBeUIsS0FBSyxhQUFhLGdDQUFnQyxLQUFLLGlCQUFpQiw0QkFBNEIsNEJBQTRCLDhCQUE4QixLQUFLLG1CQUFtQjtBQUNwc0c7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLnNjc3M/MzVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgei1pbmRleDogMTtcXG59XFxuaGVhZGVyIC5pdGVtIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuaGVhZGVyICNtZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4LjQzNzVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5oZWFkZXIgI21lbnUgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuaGVhZGVyICNtZW51QnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuaGVhZGVyICNzaXRlVGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnNlcmlmIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2l3aSBNYXJ1XFxcIiwgc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uc2NyaXB0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vhd2VlZCBTY3JpcHRcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG46ZXhwb3J0IHtcXG4gIG5wLWdyZWVuOiBkYXJrc2VhZ3JlZW47XFxuICBucC1zZXJpZjogXFxcIktpd2kgTWFydVxcXCIsIHNlcmlmO1xcbiAgbnAtc2NyaXB0OiBcXFwiU2Vhd2VlZCBTY3JpcHRcXFwiLCBjdXJzaXZlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0ksc0JBQUE7QUFKSjs7QUFNQTtFQUNJLHFCQUFBO0FBSEo7O0FBS0E7RUFHSSxlQUZZO0VBR1osOEJBZE87RUFlUCxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBSko7QUFLSTtFQUNJLHFCQUFBO0FBSFI7QUFLSTtFQUNJLDhCQTNCRztFQTRCSCxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFIUjtBQUlRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkEzQks7QUF5QmpCO0FBS0k7RUFDSSxrQkEvQlM7QUE0QmpCO0FBS0k7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBSFI7O0FBT0E7RUFDSSwrQkFuRE87RUFvRFAsZ0JBQUE7QUFKSjs7QUFNQTtFQUNJLHNDQXREUTtBQW1EWjs7QUFNQTtFQUNJLHNCQTVETztFQTZEUCw0QkE1RE87RUE2RFAsb0NBNURRO0FBeURaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vR0xPQkFMIENTUyBPTkxZXFxyXFxuJG5wLWdyZWVuOiBkYXJrc2VhZ3JlZW47IC8vbGlnaHRncmVlbiAvIHBhbGVncmVlblxcclxcbiRucC1zZXJpZjogJ0tpd2kgTWFydScsIHNlcmlmOyAvL09SIFppbGxhIFNsYWIgLyBTb2x3YXlcXHJcXG4kbnAtc2NyaXB0OiAnU2Vhd2VlZCBTY3JpcHQnLCBjdXJzaXZlOyAvL09SIE1laWUgU2NyaXB0IC8gU2F0aXNmeVxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5oZWFkZXIge1xcclxcbiAgICAkbW9iaWxlLWZzOiAzcmVtOyAvL21vYmlsZSBmb250IHNpemVcXHJcXG4gICAgJG1lbnUtcmlnaHQ6IDMwcHg7IC8vUiBtYXJnaW4gZm9yIGJ1dHRvbiAmIGl0ZW1zXFxyXFxuICAgIGZvbnQtc2l6ZTogJG1vYmlsZS1mcztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5wLWdyZWVuO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgLml0ZW0ge1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB9XFxyXFxuICAgICNtZW51IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRucC1ncmVlbjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiBjYWxjKCRtb2JpbGUtZnMqMi44MTI1KTsgLy9zaG91bGQgYmUgMi44MTI1ICogaGVhZGVyIGZvbnQgc2l6ZVxcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRtZW51LXJpZ2h0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICNtZW51QnV0dG9uIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogJG1lbnUtcmlnaHQ7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpdGVUaXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zZXJpZiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkbnAtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcbi5zY3JpcHQge1xcclxcbiAgICBmb250LWZhbWlseTogJG5wLXNjcmlwdDtcXHJcXG59XFxyXFxuXFxyXFxuOmV4cG9ydCB7XFxyXFxuICAgIG5wLWdyZWVuOiAkbnAtZ3JlZW47XFxyXFxuICAgIG5wLXNlcmlmOiAkbnAtc2VyaWY7XFxyXFxuICAgIG5wLXNjcmlwdDogJG5wLXNjcmlwdDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[9].use[4]!./styles/global.scss\n");

/***/ })

});