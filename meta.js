module.exports = `// ==UserScript==
// @name            ${require('./package.json').name}
// @namespace       https://example.com/userscript-boilerplate
// @version         ${require('./package.json').version}
// @author          ${require('./package.json').author}
// @description     ${require('./package.json').description}
// @homepage        https://example.com/
// @icon            https://example.com/icon.png
// @match           *://*.example.com/*
// @require         https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @resource        css https://example.com/inject.css
// @run-at          document-start
// @grant           GM.getValue
// @grant           GM.setValue
// @grant           GM.getResourceUrl
// @grant           GM.xmlHttpRequest
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_getResourceURL
// @grant           GM_xmlhttpRequest
// ==/UserScript==`
