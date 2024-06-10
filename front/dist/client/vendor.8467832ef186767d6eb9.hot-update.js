self["webpackHotUpdateapp"]("vendor",{

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint-env browser */
/*
  eslint-disable
  no-console,
  func-names
*/

/** @typedef {any} TODO */

var normalizeUrl = __webpack_require__(/*! ./normalize-url */ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js");
var srcByModuleId = Object.create(null);
var noDocument = typeof document === "undefined";
var forEach = Array.prototype.forEach;

/**
 * @param {function} fn
 * @param {number} time
 * @returns {(function(): void)|*}
 */
function debounce(fn, time) {
  var timeout = 0;
  return function () {
    // @ts-ignore
    var self = this;
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    var functionCall = function functionCall() {
      return fn.apply(self, args);
    };
    clearTimeout(timeout);

    // @ts-ignore
    timeout = setTimeout(functionCall, time);
  };
}
function noop() {}

/**
 * @param {TODO} moduleId
 * @returns {TODO}
 */
function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];
  if (!src) {
    if (document.currentScript) {
      src = ( /** @type {HTMLScriptElement} */document.currentScript).src;
    } else {
      var scripts = document.getElementsByTagName("script");
      var lastScriptTag = scripts[scripts.length - 1];
      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }
    srcByModuleId[moduleId] = src;
  }

  /**
   * @param {string} fileMap
   * @returns {null | string[]}
   */
  return function (fileMap) {
    if (!src) {
      return null;
    }
    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];
    if (!filename) {
      return [src.replace(".js", ".css")];
    }
    if (!fileMap) {
      return [src.replace(".js", ".css")];
    }
    return fileMap.split(",").map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), "g");
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}

/**
 * @param {TODO} el
 * @param {string} [url]
 */
function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    }

    // eslint-disable-next-line
    url = el.href.split("?")[0];
  }
  if (!isUrlRequest( /** @type {string} */url)) {
    return;
  }
  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }
  if (!url || !(url.indexOf(".css") > -1)) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener("error", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());
  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}

/**
 * @param {string} href
 * @param {TODO} src
 * @returns {TODO}
 */
function getReloadUrl(href, src) {
  var ret;

  // eslint-disable-next-line no-param-reassign
  href = normalizeUrl(href);
  src.some(
  /**
   * @param {string} url
   */
  // eslint-disable-next-line array-callback-return
  function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}

/**
 * @param {string} [src]
 * @returns {boolean}
 */
function reloadStyle(src) {
  if (!src) {
    return false;
  }
  var elements = document.querySelectorAll("link");
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }
    var url = getReloadUrl(el.href, src);
    if (!isUrlRequest(url)) {
      return;
    }
    if (el.visited === true) {
      return;
    }
    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}
function reloadAll() {
  var elements = document.querySelectorAll("link");
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }
    updateCss(el);
  });
}

/**
 * @param {string} url
 * @returns {boolean}
 */
function isUrlRequest(url) {
  // An URL is not an request if

  // It is not http or https
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }
  return true;
}

/**
 * @param {TODO} moduleId
 * @param {TODO} options
 * @returns {TODO}
 */
module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log("no window.document found, will not HMR CSS");
    return noop;
  }
  var getScriptSrc = getCurrentScriptUrl(moduleId);
  function update() {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);
    if (options.locals) {
      console.log("[HMR] Detected local css modules. Reload all css");
      reloadAll();
      return;
    }
    if (reloaded) {
      console.log("[HMR] css reload %s", src.join(" "));
    } else {
      console.log("[HMR] Reload all css");
      reloadAll();
    }
  }
  return debounce(update, 50);
};

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


/* eslint-disable */

/**
 * @param {string[]} pathComponents
 * @returns {string}
 */
function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case "..":
        accumulator.pop();
        break;
      case ".":
        break;
      default:
        accumulator.push(item);
    }
    return accumulator;
  }, /** @type {string[]} */[]).join("/");
}

/**
 * @param {string} urlString
 * @returns {string}
 */
module.exports = function (urlString) {
  urlString = urlString.trim();
  if (/^data:/i.test(urlString)) {
    return urlString;
  }
  var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
  var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  var host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  var path = normalizeUrl(components);
  return protocol + host + path;
};

/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-helmet-async/lib/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-helmet-async/lib/index.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Helmet: () => (/* binding */ Helmet),
/* harmony export */   HelmetData: () => (/* binding */ HelmetData),
/* harmony export */   HelmetProvider: () => (/* binding */ HelmetProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_3__);
// src/index.tsx




// src/Provider.tsx


// src/server.ts


// src/constants.ts
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
  return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
  (carry, [key, value]) => {
    carry[value] = key;
    return carry;
  },
  {}
);
var HELMET_ATTRIBUTE = "data-rh";

// src/utils.ts
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
  for (let i = propsList.length - 1; i >= 0; i -= 1) {
    const props = propsList[i];
    if (Object.prototype.hasOwnProperty.call(props, property)) {
      return props[property];
    }
  }
  return null;
};
var getTitleFromPropsList = (propsList) => {
  let innermostTitle = getInnermostProperty(propsList, "title" /* TITLE */);
  const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (Array.isArray(innermostTitle)) {
    innermostTitle = innermostTitle.join("");
  }
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, () => innermostTitle);
  }
  const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props["base" /* BASE */] !== "undefined").map((props) => props["base" /* BASE */]).reverse().reduce((innermostBaseTag, tag) => {
  if (!innermostBaseTag.length) {
    const keys = Object.keys(tag);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const lowerCaseAttributeKey = attributeKey.toLowerCase();
      if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
        return innermostBaseTag.concat(tag);
      }
    }
  }
  return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
  const approvedSeenTags = {};
  return propsList.filter((props) => {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn(
        `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
      );
    }
    return false;
  }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
    const instanceSeenTags = {};
    instanceTags.filter((tag) => {
      let primaryAttributeKey;
      const keys2 = Object.keys(tag);
      for (let i = 0; i < keys2.length; i += 1) {
        const attributeKey = keys2[i];
        const lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" /* REL */ && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" /* REL */ && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" /* INNER_HTML */ || attributeKey === "cssText" /* CSS_TEXT */ || attributeKey === "itemprop" /* ITEM_PROP */)) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      const value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach((tag) => approvedTags.push(tag));
    const keys = Object.keys(instanceSeenTags);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const tagUnion = {
        ...approvedSeenTags[attributeKey],
        ...instanceSeenTags[attributeKey]
      };
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
  if (Array.isArray(propsList) && propsList.length) {
    for (let index = 0; index < propsList.length; index += 1) {
      const prop = propsList[index];
      if (prop[checkedTag]) {
        return true;
      }
    }
  }
  return false;
};
var reducePropsToState = (propsList) => ({
  baseTag: getBaseTagFromPropsList(["href" /* HREF */], propsList),
  bodyAttributes: getAttributesFromPropsList("bodyAttributes" /* BODY */, propsList),
  defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
  encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: getAttributesFromPropsList("htmlAttributes" /* HTML */, propsList),
  linkTags: getTagsFromPropsList(
    "link" /* LINK */,
    ["rel" /* REL */, "href" /* HREF */],
    propsList
  ),
  metaTags: getTagsFromPropsList(
    "meta" /* META */,
    [
      "name" /* NAME */,
      "charset" /* CHARSET */,
      "http-equiv" /* HTTPEQUIV */,
      "property" /* PROPERTY */,
      "itemprop" /* ITEM_PROP */
    ],
    propsList
  ),
  noscriptTags: getTagsFromPropsList("noscript" /* NOSCRIPT */, ["innerHTML" /* INNER_HTML */], propsList),
  onChangeClientState: getOnChangeClientState(propsList),
  scriptTags: getTagsFromPropsList(
    "script" /* SCRIPT */,
    ["src" /* SRC */, "innerHTML" /* INNER_HTML */],
    propsList
  ),
  styleTags: getTagsFromPropsList("style" /* STYLE */, ["cssText" /* CSS_TEXT */], propsList),
  title: getTitleFromPropsList(propsList),
  titleAttributes: getAttributesFromPropsList("titleAttributes" /* TITLE */, propsList),
  prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i += 1) {
    if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
      return true;
    }
  }
  return false;
};
var prioritizer = (elementsList, propsToMatch) => {
  if (Array.isArray(elementsList)) {
    return elementsList.reduce(
      (acc, elementAttrs) => {
        if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
          acc.priority.push(elementAttrs);
        } else {
          acc.default.push(elementAttrs);
        }
        return acc;
      },
      { priority: [], default: [] }
    );
  }
  return { default: elementsList, priority: [] };
};
var without = (obj, key) => {
  return {
    ...obj,
    [key]: void 0
  };
};

// src/server.ts
var SELF_CLOSING_TAGS = ["noscript" /* NOSCRIPT */, "script" /* SCRIPT */, "style" /* STYLE */];
var encodeSpecialCharacters = (str, encode = true) => {
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
  const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
  return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title, attributes, encode) => {
  const attributeString = generateElementAttributesAsString(attributes);
  const flattenedTitle = flattenArray(title);
  return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
  const tag = t;
  const attributeHtml = Object.keys(tag).filter(
    (attribute) => !(attribute === "innerHTML" /* INNER_HTML */ || attribute === "cssText" /* CSS_TEXT */)
  ).reduce((string, attribute) => {
    const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
    return string ? `${string} ${attr}` : attr;
  }, "");
  const tagContent = tag.innerHTML || tag.cssText || "";
  const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
  return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
  const mapped = REACT_TAG_MAP[key];
  obj[mapped || key] = attributes[key];
  return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title, attributes) => {
  const initProps = {
    key: title,
    [HELMET_ATTRIBUTE]: true
  };
  const props = convertElementAttributesToReactProps(attributes, initProps);
  return [react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title" /* TITLE */, props, title)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
  const mappedTag = {
    key: i,
    [HELMET_ATTRIBUTE]: true
  };
  Object.keys(tag).forEach((attribute) => {
    const mapped = REACT_TAG_MAP[attribute];
    const mappedAttribute = mapped || attribute;
    if (mappedAttribute === "innerHTML" /* INNER_HTML */ || mappedAttribute === "cssText" /* CSS_TEXT */) {
      const content = tag.innerHTML || tag.cssText;
      mappedTag.dangerouslySetInnerHTML = { __html: content };
    } else {
      mappedTag[mappedAttribute] = tag[attribute];
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
  switch (type) {
    case "title" /* TITLE */:
      return {
        toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
        toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
      };
    case "bodyAttributes" /* BODY */:
    case "htmlAttributes" /* HTML */:
      return {
        toComponent: () => convertElementAttributesToReactProps(tags),
        toString: () => generateElementAttributesAsString(tags)
      };
    default:
      return {
        toComponent: () => generateTagsAsReactComponent(type, tags),
        toString: () => generateTagsAsString(type, tags, encode)
      };
  }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
  const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
  const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
  const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
  const priorityMethods = {
    toComponent: () => [
      ...generateTagsAsReactComponent("meta" /* META */, meta.priority),
      ...generateTagsAsReactComponent("link" /* LINK */, link.priority),
      ...generateTagsAsReactComponent("script" /* SCRIPT */, script.priority)
    ],
    toString: () => (
      // generate all the tags as strings and concatenate them
      `${getMethodsForTag("meta" /* META */, meta.priority, encode)} ${getMethodsForTag(
        "link" /* LINK */,
        link.priority,
        encode
      )} ${getMethodsForTag("script" /* SCRIPT */, script.priority, encode)}`
    )
  };
  return {
    priorityMethods,
    metaTags: meta.default,
    linkTags: link.default,
    scriptTags: script.default
  };
};
var mapStateOnServer = (props) => {
  const {
    baseTag,
    bodyAttributes,
    encode = true,
    htmlAttributes,
    noscriptTags,
    styleTags,
    title = "",
    titleAttributes,
    prioritizeSeoTags
  } = props;
  let { linkTags, metaTags, scriptTags } = props;
  let priorityMethods = {
    toComponent: () => {
    },
    toString: () => ""
  };
  if (prioritizeSeoTags) {
    ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
  }
  return {
    priority: priorityMethods,
    base: getMethodsForTag("base" /* BASE */, baseTag, encode),
    bodyAttributes: getMethodsForTag("bodyAttributes" /* BODY */, bodyAttributes, encode),
    htmlAttributes: getMethodsForTag("htmlAttributes" /* HTML */, htmlAttributes, encode),
    link: getMethodsForTag("link" /* LINK */, linkTags, encode),
    meta: getMethodsForTag("meta" /* META */, metaTags, encode),
    noscript: getMethodsForTag("noscript" /* NOSCRIPT */, noscriptTags, encode),
    script: getMethodsForTag("script" /* SCRIPT */, scriptTags, encode),
    style: getMethodsForTag("style" /* STYLE */, styleTags, encode),
    title: getMethodsForTag("title" /* TITLE */, { title, titleAttributes }, encode)
  };
};
var server_default = mapStateOnServer;

// src/HelmetData.ts
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
  instances = [];
  canUseDOM = isDocument;
  context;
  value = {
    setHelmet: (serverState) => {
      this.context.helmet = serverState;
    },
    helmetInstances: {
      get: () => this.canUseDOM ? instances : this.instances,
      add: (instance) => {
        (this.canUseDOM ? instances : this.instances).push(instance);
      },
      remove: (instance) => {
        const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
        (this.canUseDOM ? instances : this.instances).splice(index, 1);
      }
    }
  };
  constructor(context, canUseDOM) {
    this.context = context;
    this.canUseDOM = canUseDOM || false;
    if (!canUseDOM) {
      context.helmet = server_default({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
  }
};

// src/Provider.tsx
var defaultValue = {};
var Context = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(defaultValue);
var HelmetProvider = class _HelmetProvider extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static canUseDOM = isDocument;
  helmetData;
  constructor(props) {
    super(props);
    this.helmetData = new HelmetData(this.props.context || {}, _HelmetProvider.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
  }
};

// src/Dispatcher.tsx



// src/client.ts
var updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector("head" /* HEAD */);
  const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;
  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);
      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === "innerHTML" /* INNER_HTML */) {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === "cssText" /* CSS_TEXT */) {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some((existingTag, index) => {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach((tag) => tag.parentNode?.removeChild(tag));
  newTags.forEach((tag) => headElement.appendChild(tag));
  return {
    oldTags,
    newTags
  };
};
var updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  const attributesToRemove = [...helmetAttributes];
  const attributeKeys = Object.keys(attributes);
  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTitle = (title, attributes) => {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes("title" /* TITLE */, attributes);
};
var commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title,
    titleAttributes
  } = newState;
  updateAttributes("body" /* BODY */, bodyAttributes);
  updateAttributes("html" /* HTML */, htmlAttributes);
  updateTitle(title, titleAttributes);
  const tagUpdates = {
    baseTag: updateTags("base" /* BASE */, baseTag),
    linkTags: updateTags("link" /* LINK */, linkTags),
    metaTags: updateTags("meta" /* META */, metaTags),
    noscriptTags: updateTags("noscript" /* NOSCRIPT */, noscriptTags),
    scriptTags: updateTags("script" /* SCRIPT */, scriptTags),
    styleTags: updateTags("style" /* STYLE */, styleTags)
  };
  const addedTags = {};
  const removedTags = {};
  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  if (cb) {
    cb();
  }
  onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var client_default = handleStateChangeOnClient;

// src/Dispatcher.tsx
var HelmetDispatcher = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  rendered = false;
  shouldComponentUpdate(nextProps) {
    return !shallowequal__WEBPACK_IMPORTED_MODULE_3___default()(nextProps, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances } = this.props.context;
    helmetInstances.remove(this);
    this.emitChange();
  }
  emitChange() {
    const { helmetInstances, setHelmet } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      helmetInstances.get().map((instance) => {
        const props = { ...instance.props };
        delete props.context;
        return props;
      })
    );
    if (HelmetProvider.canUseDOM) {
      client_default(state);
    } else if (server_default) {
      serverState = server_default(state);
    }
    setHelmet(serverState);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;
    const { helmetInstances } = this.props.context;
    helmetInstances.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};

// src/index.tsx
var Helmet = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static defaultProps = {
    defer: true,
    encodeSpecialCharacters: true,
    prioritizeSeoTags: false
  };
  shouldComponentUpdate(nextProps) {
    return !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(without(this.props, "helmetData"), without(nextProps, "helmetData"));
  }
  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }
    switch (child.type) {
      case "script" /* SCRIPT */:
      case "noscript" /* NOSCRIPT */:
        return {
          innerHTML: nestedChildren
        };
      case "style" /* STYLE */:
        return {
          cssText: nestedChildren
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...arrayTypeChildren[child.type] || [],
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren)
        }
      ]
    };
  }
  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case "title" /* TITLE */:
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps }
        };
      case "body" /* BODY */:
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps }
        };
      case "html" /* HTML */:
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps }
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps }
        };
    }
  }
  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };
    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName]
      };
    });
    return newFlattenedProps;
  }
  warnOnInvalidChildren(child, nestedChildren) {
    invariant__WEBPACK_IMPORTED_MODULE_2___default()(
      VALID_TAG_NAMES.some((name) => child.type === name),
      typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
        ", "
      )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
    );
    invariant__WEBPACK_IMPORTED_MODULE_2___default()(
      !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
      `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );
    return true;
  }
  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};
    react__WEBPACK_IMPORTED_MODULE_0___default().Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }
      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});
      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }
      switch (type) {
        case "Symbol(react.fragment)" /* FRAGMENT */:
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;
        case "link" /* LINK */:
        case "meta" /* META */:
        case "noscript" /* NOSCRIPT */:
        case "script" /* SCRIPT */:
        case "style" /* STYLE */:
          arrayTypeChildren = this.flattenArrayTypeChildren(
            child,
            arrayTypeChildren,
            newChildProps,
            nestedChildren
          );
          break;
        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });
    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }
  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { helmetData } = props;
    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }
    if (helmetData && !(helmetData instanceof HelmetData)) {
      const data = helmetData;
      helmetData = new HelmetData(data.context, true);
      delete newProps.helmetData;
    }
    return helmetData ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Consumer, null, (context) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HelmetDispatcher, { ...newProps, context }));
  }
};



/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLjg0Njc4MzJlZjE4Njc2N2Q2ZWI5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7Ozs7Ozs7OztBQzd4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvdHF1ZXN0cy9qd3QvZnJvbnQvbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3RxdWVzdHMvand0L2Zyb250L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ub3JtYWxpemUtdXJsLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9ub2RlX21vZHVsZXMvcmVhY3QtZmFzdC1jb21wYXJlL2luZGV4LmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9ub2RlX21vZHVsZXMvcmVhY3QtaGVsbWV0LWFzeW5jL2xpYi9pbmRleC5lc20uanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3RxdWVzdHMvand0L2Zyb250L25vZGVfbW9kdWxlcy9zaGFsbG93ZXF1YWwvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuLypcbiAgZXNsaW50LWRpc2FibGVcbiAgbm8tY29uc29sZSxcbiAgZnVuYy1uYW1lc1xuKi9cblxuLyoqIEB0eXBlZGVmIHthbnl9IFRPRE8gKi9cblxudmFyIG5vcm1hbGl6ZVVybCA9IHJlcXVpcmUoXCIuL25vcm1hbGl6ZS11cmxcIik7XG52YXIgc3JjQnlNb2R1bGVJZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgbm9Eb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIjtcbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXG4gKiBAcmV0dXJucyB7KGZ1bmN0aW9uKCk6IHZvaWQpfCp9XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCB0aW1lKSB7XG4gIHZhciB0aW1lb3V0ID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgZnVuY3Rpb25DYWxsID0gZnVuY3Rpb24gZnVuY3Rpb25DYWxsKCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uQ2FsbCwgdGltZSk7XG4gIH07XG59XG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IG1vZHVsZUlkXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCkge1xuICB2YXIgc3JjID0gc3JjQnlNb2R1bGVJZFttb2R1bGVJZF07XG4gIGlmICghc3JjKSB7XG4gICAgaWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICAgIHNyYyA9ICggLyoqIEB0eXBlIHtIVE1MU2NyaXB0RWxlbWVudH0gKi9kb2N1bWVudC5jdXJyZW50U2NyaXB0KS5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG4gICAgICB2YXIgbGFzdFNjcmlwdFRhZyA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChsYXN0U2NyaXB0VGFnKSB7XG4gICAgICAgIHNyYyA9IGxhc3RTY3JpcHRUYWcuc3JjO1xuICAgICAgfVxuICAgIH1cbiAgICBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXSA9IHNyYztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU1hcFxuICAgKiBAcmV0dXJucyB7bnVsbCB8IHN0cmluZ1tdfVxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIChmaWxlTWFwKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgc3BsaXRSZXN1bHQgPSBzcmMuc3BsaXQoLyhbXlxcXFwvXSspXFwuanMkLyk7XG4gICAgdmFyIGZpbGVuYW1lID0gc3BsaXRSZXN1bHQgJiYgc3BsaXRSZXN1bHRbMV07XG4gICAgaWYgKCFmaWxlbmFtZSkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cbiAgICBpZiAoIWZpbGVNYXApIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGVNYXAuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAobWFwUnVsZSkge1xuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoZmlsZW5hbWUsIFwiXFxcXC5qcyRcIiksIFwiZ1wiKTtcbiAgICAgIHJldHVybiBub3JtYWxpemVVcmwoc3JjLnJlcGxhY2UocmVnLCBcIlwiLmNvbmNhdChtYXBSdWxlLnJlcGxhY2UoL3tmaWxlTmFtZX0vZywgZmlsZW5hbWUpLCBcIi5jc3NcIikpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF1cbiAqL1xuZnVuY3Rpb24gdXBkYXRlQ3NzKGVsLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB1cmwgPSBlbC5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgfVxuICBpZiAoIWlzVXJsUmVxdWVzdCggLyoqIEB0eXBlIHtzdHJpbmd9ICovdXJsKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZWwuaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgLy8gV2Ugc2VlbSB0byBiZSBhYm91dCB0byByZXBsYWNlIGEgY3NzIGxpbmsgdGhhdCBoYXNuJ3QgbG9hZGVkIHlldC5cbiAgICAvLyBXZSdyZSBwcm9iYWJseSBjaGFuZ2luZyB0aGUgc2FtZSBmaWxlIG1vcmUgdGhhbiBvbmNlLlxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXVybCB8fCAhKHVybC5pbmRleE9mKFwiLmNzc1wiKSA+IC0xKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBlbC52aXNpdGVkID0gdHJ1ZTtcbiAgdmFyIG5ld0VsID0gZWwuY2xvbmVOb2RlKCk7XG4gIG5ld0VsLmlzTG9hZGVkID0gZmFsc2U7XG4gIG5ld0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuaHJlZiA9IFwiXCIuY29uY2F0KHVybCwgXCI/XCIpLmNvbmNhdChEYXRlLm5vdygpKTtcbiAgaWYgKGVsLm5leHRTaWJsaW5nKSB7XG4gICAgZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWwsIGVsLm5leHRTaWJsaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld0VsKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBocmVmXG4gKiBAcGFyYW0ge1RPRE99IHNyY1xuICogQHJldHVybnMge1RPRE99XG4gKi9cbmZ1bmN0aW9uIGdldFJlbG9hZFVybChocmVmLCBzcmMpIHtcbiAgdmFyIHJldDtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgaHJlZiA9IG5vcm1hbGl6ZVVybChocmVmKTtcbiAgc3JjLnNvbWUoXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gIGZ1bmN0aW9uICh1cmwpIHtcbiAgICBpZiAoaHJlZi5pbmRleE9mKHNyYykgPiAtMSkge1xuICAgICAgcmV0ID0gdXJsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtzcmNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gcmVsb2FkU3R5bGUoc3JjKSB7XG4gIGlmICghc3JjKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICB2YXIgbG9hZGVkID0gZmFsc2U7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB1cmwgPSBnZXRSZWxvYWRVcmwoZWwuaHJlZiwgc3JjKTtcbiAgICBpZiAoIWlzVXJsUmVxdWVzdCh1cmwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh1cmwpIHtcbiAgICAgIHVwZGF0ZUNzcyhlbCwgdXJsKTtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxvYWRlZDtcbn1cbmZ1bmN0aW9uIHJlbG9hZEFsbCgpIHtcbiAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtcIik7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLnZpc2l0ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdXBkYXRlQ3NzKGVsKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVXJsUmVxdWVzdCh1cmwpIHtcbiAgLy8gQW4gVVJMIGlzIG5vdCBhbiByZXF1ZXN0IGlmXG5cbiAgLy8gSXQgaXMgbm90IGh0dHAgb3IgaHR0cHNcbiAgaWYgKCEvXlthLXpBLVpdW2EtekEtWlxcZCtcXC0uXSo6Ly50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBtb2R1bGVJZFxuICogQHBhcmFtIHtUT0RPfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIG9wdGlvbnMpIHtcbiAgaWYgKG5vRG9jdW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5vIHdpbmRvdy5kb2N1bWVudCBmb3VuZCwgd2lsbCBub3QgSE1SIENTU1wiKTtcbiAgICByZXR1cm4gbm9vcDtcbiAgfVxuICB2YXIgZ2V0U2NyaXB0U3JjID0gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCk7XG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgc3JjID0gZ2V0U2NyaXB0U3JjKG9wdGlvbnMuZmlsZW5hbWUpO1xuICAgIHZhciByZWxvYWRlZCA9IHJlbG9hZFN0eWxlKHNyYyk7XG4gICAgaWYgKG9wdGlvbnMubG9jYWxzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIERldGVjdGVkIGxvY2FsIGNzcyBtb2R1bGVzLiBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVsb2FkZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gY3NzIHJlbG9hZCAlc1wiLCBzcmMuam9pbihcIiBcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJvdW5jZSh1cGRhdGUsIDUwKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aENvbXBvbmVudHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVybChwYXRoQ29tcG9uZW50cykge1xuICByZXR1cm4gcGF0aENvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaXRlbSkge1xuICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgY2FzZSBcIi4uXCI6XG4gICAgICAgIGFjY3VtdWxhdG9yLnBvcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIuXCI6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYWNjdW11bGF0b3IucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9LCAvKiogQHR5cGUge3N0cmluZ1tdfSAqL1tdKS5qb2luKFwiL1wiKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsU3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmxTdHJpbmcpIHtcbiAgdXJsU3RyaW5nID0gdXJsU3RyaW5nLnRyaW0oKTtcbiAgaWYgKC9eZGF0YTovaS50ZXN0KHVybFN0cmluZykpIHtcbiAgICByZXR1cm4gdXJsU3RyaW5nO1xuICB9XG4gIHZhciBwcm90b2NvbCA9IHVybFN0cmluZy5pbmRleE9mKFwiLy9cIikgIT09IC0xID8gdXJsU3RyaW5nLnNwbGl0KFwiLy9cIilbMF0gKyBcIi8vXCIgOiBcIlwiO1xuICB2YXIgY29tcG9uZW50cyA9IHVybFN0cmluZy5yZXBsYWNlKG5ldyBSZWdFeHAocHJvdG9jb2wsIFwiaVwiKSwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICB2YXIgaG9zdCA9IGNvbXBvbmVudHNbMF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC4kLywgXCJcIik7XG4gIGNvbXBvbmVudHNbMF0gPSBcIlwiO1xuICB2YXIgcGF0aCA9IG5vcm1hbGl6ZVVybChjb21wb25lbnRzKTtcbiAgcmV0dXJuIHByb3RvY29sICsgaG9zdCArIHBhdGg7XG59OyIsIi8qIGdsb2JhbCBNYXA6cmVhZG9ubHksIFNldDpyZWFkb25seSwgQXJyYXlCdWZmZXI6cmVhZG9ubHkgKi9cblxudmFyIGhhc0VsZW1lbnRUeXBlID0gdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnO1xudmFyIGhhc01hcCA9IHR5cGVvZiBNYXAgPT09ICdmdW5jdGlvbic7XG52YXIgaGFzU2V0ID0gdHlwZW9mIFNldCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBoYXNBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiAhIUFycmF5QnVmZmVyLmlzVmlldztcblxuLy8gTm90ZTogV2UgKipkb24ndCoqIG5lZWQgYGVudkhhc0JpZ0ludDY0QXJyYXlgIGluIGZkZSBlczYvaW5kZXguanNcblxuZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICAvLyBTVEFSVDogZmFzdC1kZWVwLWVxdWFsIGVzNi9pbmRleC5qcyAzLjEuM1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgbGVuZ3RoLCBpLCBrZXlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gU1RBUlQ6IE1vZGlmaWNhdGlvbnM6XG4gICAgLy8gMS4gRXh0cmEgYGhhczxUeXBlPiAmJmAgaGVscGVycyBpbiBpbml0aWFsIGNvbmRpdGlvbiBhbGxvdyBlczYgY29kZVxuICAgIC8vICAgIHRvIGNvLWV4aXN0IHdpdGggZXM1LlxuICAgIC8vIDIuIFJlcGxhY2UgYGZvciBvZmAgd2l0aCBlczUgY29tcGxpYW50IGl0ZXJhdGlvbiB1c2luZyBgZm9yYC5cbiAgICAvLyAgICBCYXNpY2FsbHksIHRha2U6XG4gICAgLy9cbiAgICAvLyAgICBgYGBqc1xuICAgIC8vICAgIGZvciAoaSBvZiBhLmVudHJpZXMoKSlcbiAgICAvLyAgICAgIGlmICghYi5oYXMoaVswXSkpIHJldHVybiBmYWxzZTtcbiAgICAvLyAgICBgYGBcbiAgICAvL1xuICAgIC8vICAgIC4uLiBhbmQgY29udmVydCB0bzpcbiAgICAvL1xuICAgIC8vICAgIGBgYGpzXG4gICAgLy8gICAgaXQgPSBhLmVudHJpZXMoKTtcbiAgICAvLyAgICB3aGlsZSAoIShpID0gaXQubmV4dCgpKS5kb25lKVxuICAgIC8vICAgICAgaWYgKCFiLmhhcyhpLnZhbHVlWzBdKSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vICAgIGBgYFxuICAgIC8vXG4gICAgLy8gICAgKipOb3RlKio6IGBpYCBhY2Nlc3Mgc3dpdGNoZXMgdG8gYGkudmFsdWVgLlxuICAgIHZhciBpdDtcbiAgICBpZiAoaGFzTWFwICYmIChhIGluc3RhbmNlb2YgTWFwKSAmJiAoYiBpbnN0YW5jZW9mIE1hcCkpIHtcbiAgICAgIGlmIChhLnNpemUgIT09IGIuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaXQgPSBhLmVudHJpZXMoKTtcbiAgICAgIHdoaWxlICghKGkgPSBpdC5uZXh0KCkpLmRvbmUpXG4gICAgICAgIGlmICghYi5oYXMoaS52YWx1ZVswXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIGl0ID0gYS5lbnRyaWVzKCk7XG4gICAgICB3aGlsZSAoIShpID0gaXQubmV4dCgpKS5kb25lKVxuICAgICAgICBpZiAoIWVxdWFsKGkudmFsdWVbMV0sIGIuZ2V0KGkudmFsdWVbMF0pKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGhhc1NldCAmJiAoYSBpbnN0YW5jZW9mIFNldCkgJiYgKGIgaW5zdGFuY2VvZiBTZXQpKSB7XG4gICAgICBpZiAoYS5zaXplICE9PSBiLnNpemUpIHJldHVybiBmYWxzZTtcbiAgICAgIGl0ID0gYS5lbnRyaWVzKCk7XG4gICAgICB3aGlsZSAoIShpID0gaXQubmV4dCgpKS5kb25lKVxuICAgICAgICBpZiAoIWIuaGFzKGkudmFsdWVbMF0pKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gRU5EOiBNb2RpZmljYXRpb25zXG5cbiAgICBpZiAoaGFzQXJyYXlCdWZmZXIgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KGEpICYmIEFycmF5QnVmZmVyLmlzVmlldyhiKSkge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwKSByZXR1cm4gYS5zb3VyY2UgPT09IGIuc291cmNlICYmIGEuZmxhZ3MgPT09IGIuZmxhZ3M7XG4gICAgLy8gU1RBUlQ6IE1vZGlmaWNhdGlvbnM6XG4gICAgLy8gQXBwbHkgZ3VhcmRzIGZvciBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaGFuZGxpbmcuIFNlZTpcbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3JtaWRhYmxlTGFicy9yZWFjdC1mYXN0LWNvbXBhcmUvaXNzdWVzLzY0XG4gICAgLy8gLSBodHRwczovL2dpdGh1Yi5jb20vZXBvYmVyZXpraW4vZmFzdC1kZWVwLWVxdWFsL2lzc3Vlcy80OVxuICAgIGlmIChhLnZhbHVlT2YgIT09IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZiAmJiB0eXBlb2YgYS52YWx1ZU9mID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiLnZhbHVlT2YgPT09ICdmdW5jdGlvbicpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgaWYgKGEudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgdHlwZW9mIGEudG9TdHJpbmcgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIudG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgICAvLyBFTkQ6IE1vZGlmaWNhdGlvbnNcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gRU5EOiBmYXN0LWRlZXAtZXF1YWxcblxuICAgIC8vIFNUQVJUOiByZWFjdC1mYXN0LWNvbXBhcmVcbiAgICAvLyBjdXN0b20gaGFuZGxpbmcgZm9yIERPTSBlbGVtZW50c1xuICAgIGlmIChoYXNFbGVtZW50VHlwZSAmJiBhIGluc3RhbmNlb2YgRWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gY3VzdG9tIGhhbmRsaW5nIGZvciBSZWFjdC9QcmVhY3RcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGlmICgoa2V5c1tpXSA9PT0gJ19vd25lcicgfHwga2V5c1tpXSA9PT0gJ19fdicgfHwga2V5c1tpXSA9PT0gJ19fbycpICYmIGEuJCR0eXBlb2YpIHtcbiAgICAgICAgLy8gUmVhY3Qtc3BlY2lmaWM6IGF2b2lkIHRyYXZlcnNpbmcgUmVhY3QgZWxlbWVudHMnIF9vd25lclxuICAgICAgICAvLyBQcmVhY3Qtc3BlY2lmaWM6IGF2b2lkIHRyYXZlcnNpbmcgUHJlYWN0IGVsZW1lbnRzJyBfX3YgYW5kIF9fb1xuICAgICAgICAvLyAgICBfX3YgPSAkX29yaWdpbmFsIC8gJF92bm9kZVxuICAgICAgICAvLyAgICBfX28gPSAkX293bmVyXG4gICAgICAgIC8vIFRoZXNlIHByb3BlcnRpZXMgY29udGFpbiBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCBhcmUgbm90IG5lZWRlZCB3aGVuXG4gICAgICAgIC8vIGNvbXBhcmluZyB0aGUgYWN0dWFsIGVsZW1lbnRzIChhbmQgbm90IHRoZWlyIG93bmVycylcbiAgICAgICAgLy8gLiQkdHlwZW9mIGFuZCAuX3N0b3JlIG9uIGp1c3QgcmVhc29uYWJsZSBtYXJrZXJzIG9mIGVsZW1lbnRzXG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGFsbCBvdGhlciBwcm9wZXJ0aWVzIHNob3VsZCBiZSB0cmF2ZXJzZWQgYXMgdXN1YWxcbiAgICAgIGlmICghZXF1YWwoYVtrZXlzW2ldXSwgYltrZXlzW2ldXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gRU5EOiByZWFjdC1mYXN0LWNvbXBhcmVcblxuICAgIC8vIFNUQVJUOiBmYXN0LWRlZXAtZXF1YWxcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhICE9PSBhICYmIGIgIT09IGI7XG59XG4vLyBlbmQgZmFzdC1kZWVwLWVxdWFsXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNFcXVhbChhLCBiKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVxdWFsKGEsIGIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmICgoKGVycm9yLm1lc3NhZ2UgfHwgJycpLm1hdGNoKC9zdGFja3xyZWN1cnNpb24vaSkpKSB7XG4gICAgICAvLyB3YXJuIG9uIGNpcmN1bGFyIHJlZmVyZW5jZXMsIGRvbid0IGNyYXNoXG4gICAgICAvLyBicm93c2VycyBnaXZlIHRoaXMgZGlmZmVyZW50IGVycm9ycyBuYW1lIGFuZCBtZXNzYWdlczpcbiAgICAgIC8vIGNocm9tZS9zYWZhcmk6IFwiUmFuZ2VFcnJvclwiLCBcIk1heGltdW0gY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCJcbiAgICAgIC8vIGZpcmVmb3g6IFwiSW50ZXJuYWxFcnJvclwiLCB0b28gbXVjaCByZWN1cnNpb25cIlxuICAgICAgLy8gZWRnZTogXCJFcnJvclwiLCBcIk91dCBvZiBzdGFjayBzcGFjZVwiXG4gICAgICBjb25zb2xlLndhcm4oJ3JlYWN0LWZhc3QtY29tcGFyZSBjYW5ub3QgaGFuZGxlIGNpcmN1bGFyIHJlZnMnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gc29tZSBvdGhlciBlcnJvci4gd2Ugc2hvdWxkIGRlZmluaXRlbHkga25vdyBhYm91dCB0aGVzZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuIiwiLy8gc3JjL2luZGV4LnRzeFxuaW1wb3J0IFJlYWN0MywgeyBDb21wb25lbnQgYXMgQ29tcG9uZW50MyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZhc3RDb21wYXJlIGZyb20gXCJyZWFjdC1mYXN0LWNvbXBhcmVcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcImludmFyaWFudFwiO1xuXG4vLyBzcmMvUHJvdmlkZXIudHN4XG5pbXBvcnQgUmVhY3QyLCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBzcmMvc2VydmVyLnRzXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIHNyYy9jb25zdGFudHMudHNcbnZhciBUQUdfTkFNRVMgPSAvKiBAX19QVVJFX18gKi8gKChUQUdfTkFNRVMyKSA9PiB7XG4gIFRBR19OQU1FUzJbXCJCQVNFXCJdID0gXCJiYXNlXCI7XG4gIFRBR19OQU1FUzJbXCJCT0RZXCJdID0gXCJib2R5XCI7XG4gIFRBR19OQU1FUzJbXCJIRUFEXCJdID0gXCJoZWFkXCI7XG4gIFRBR19OQU1FUzJbXCJIVE1MXCJdID0gXCJodG1sXCI7XG4gIFRBR19OQU1FUzJbXCJMSU5LXCJdID0gXCJsaW5rXCI7XG4gIFRBR19OQU1FUzJbXCJNRVRBXCJdID0gXCJtZXRhXCI7XG4gIFRBR19OQU1FUzJbXCJOT1NDUklQVFwiXSA9IFwibm9zY3JpcHRcIjtcbiAgVEFHX05BTUVTMltcIlNDUklQVFwiXSA9IFwic2NyaXB0XCI7XG4gIFRBR19OQU1FUzJbXCJTVFlMRVwiXSA9IFwic3R5bGVcIjtcbiAgVEFHX05BTUVTMltcIlRJVExFXCJdID0gXCJ0aXRsZVwiO1xuICBUQUdfTkFNRVMyW1wiRlJBR01FTlRcIl0gPSBcIlN5bWJvbChyZWFjdC5mcmFnbWVudClcIjtcbiAgcmV0dXJuIFRBR19OQU1FUzI7XG59KShUQUdfTkFNRVMgfHwge30pO1xudmFyIFNFT19QUklPUklUWV9UQUdTID0ge1xuICBsaW5rOiB7IHJlbDogW1wiYW1waHRtbFwiLCBcImNhbm9uaWNhbFwiLCBcImFsdGVybmF0ZVwiXSB9LFxuICBzY3JpcHQ6IHsgdHlwZTogW1wiYXBwbGljYXRpb24vbGQranNvblwiXSB9LFxuICBtZXRhOiB7XG4gICAgY2hhcnNldDogXCJcIixcbiAgICBuYW1lOiBbXCJnZW5lcmF0b3JcIiwgXCJyb2JvdHNcIiwgXCJkZXNjcmlwdGlvblwiXSxcbiAgICBwcm9wZXJ0eTogW1xuICAgICAgXCJvZzp0eXBlXCIsXG4gICAgICBcIm9nOnRpdGxlXCIsXG4gICAgICBcIm9nOnVybFwiLFxuICAgICAgXCJvZzppbWFnZVwiLFxuICAgICAgXCJvZzppbWFnZTphbHRcIixcbiAgICAgIFwib2c6ZGVzY3JpcHRpb25cIixcbiAgICAgIFwidHdpdHRlcjp1cmxcIixcbiAgICAgIFwidHdpdHRlcjp0aXRsZVwiLFxuICAgICAgXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIsXG4gICAgICBcInR3aXR0ZXI6aW1hZ2VcIixcbiAgICAgIFwidHdpdHRlcjppbWFnZTphbHRcIixcbiAgICAgIFwidHdpdHRlcjpjYXJkXCIsXG4gICAgICBcInR3aXR0ZXI6c2l0ZVwiXG4gICAgXVxuICB9XG59O1xudmFyIFZBTElEX1RBR19OQU1FUyA9IE9iamVjdC52YWx1ZXMoVEFHX05BTUVTKTtcbnZhciBSRUFDVF9UQUdfTUFQID0ge1xuICBhY2Nlc3NrZXk6IFwiYWNjZXNzS2V5XCIsXG4gIGNoYXJzZXQ6IFwiY2hhclNldFwiLFxuICBjbGFzczogXCJjbGFzc05hbWVcIixcbiAgY29udGVudGVkaXRhYmxlOiBcImNvbnRlbnRFZGl0YWJsZVwiLFxuICBjb250ZXh0bWVudTogXCJjb250ZXh0TWVudVwiLFxuICBcImh0dHAtZXF1aXZcIjogXCJodHRwRXF1aXZcIixcbiAgaXRlbXByb3A6IFwiaXRlbVByb3BcIixcbiAgdGFiaW5kZXg6IFwidGFiSW5kZXhcIlxufTtcbnZhciBIVE1MX1RBR19NQVAgPSBPYmplY3QuZW50cmllcyhSRUFDVF9UQUdfTUFQKS5yZWR1Y2UoXG4gIChjYXJyeSwgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgY2FycnlbdmFsdWVdID0ga2V5O1xuICAgIHJldHVybiBjYXJyeTtcbiAgfSxcbiAge31cbik7XG52YXIgSEVMTUVUX0FUVFJJQlVURSA9IFwiZGF0YS1yaFwiO1xuXG4vLyBzcmMvdXRpbHMudHNcbnZhciBIRUxNRVRfUFJPUFMgPSB7XG4gIERFRkFVTFRfVElUTEU6IFwiZGVmYXVsdFRpdGxlXCIsXG4gIERFRkVSOiBcImRlZmVyXCIsXG4gIEVOQ09ERV9TUEVDSUFMX0NIQVJBQ1RFUlM6IFwiZW5jb2RlU3BlY2lhbENoYXJhY3RlcnNcIixcbiAgT05fQ0hBTkdFX0NMSUVOVF9TVEFURTogXCJvbkNoYW5nZUNsaWVudFN0YXRlXCIsXG4gIFRJVExFX1RFTVBMQVRFOiBcInRpdGxlVGVtcGxhdGVcIixcbiAgUFJJT1JJVElaRV9TRU9fVEFHUzogXCJwcmlvcml0aXplU2VvVGFnc1wiXG59O1xudmFyIGdldElubmVybW9zdFByb3BlcnR5ID0gKHByb3BzTGlzdCwgcHJvcGVydHkpID0+IHtcbiAgZm9yIChsZXQgaSA9IHByb3BzTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgIGNvbnN0IHByb3BzID0gcHJvcHNMaXN0W2ldO1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIHByb3BlcnR5KSkge1xuICAgICAgcmV0dXJuIHByb3BzW3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xudmFyIGdldFRpdGxlRnJvbVByb3BzTGlzdCA9IChwcm9wc0xpc3QpID0+IHtcbiAgbGV0IGlubmVybW9zdFRpdGxlID0gZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBcInRpdGxlXCIgLyogVElUTEUgKi8pO1xuICBjb25zdCBpbm5lcm1vc3RUZW1wbGF0ZSA9IGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgSEVMTUVUX1BST1BTLlRJVExFX1RFTVBMQVRFKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaW5uZXJtb3N0VGl0bGUpKSB7XG4gICAgaW5uZXJtb3N0VGl0bGUgPSBpbm5lcm1vc3RUaXRsZS5qb2luKFwiXCIpO1xuICB9XG4gIGlmIChpbm5lcm1vc3RUZW1wbGF0ZSAmJiBpbm5lcm1vc3RUaXRsZSkge1xuICAgIHJldHVybiBpbm5lcm1vc3RUZW1wbGF0ZS5yZXBsYWNlKC8lcy9nLCAoKSA9PiBpbm5lcm1vc3RUaXRsZSk7XG4gIH1cbiAgY29uc3QgaW5uZXJtb3N0RGVmYXVsdFRpdGxlID0gZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBIRUxNRVRfUFJPUFMuREVGQVVMVF9USVRMRSk7XG4gIHJldHVybiBpbm5lcm1vc3RUaXRsZSB8fCBpbm5lcm1vc3REZWZhdWx0VGl0bGUgfHwgdm9pZCAwO1xufTtcbnZhciBnZXRPbkNoYW5nZUNsaWVudFN0YXRlID0gKHByb3BzTGlzdCkgPT4gZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBIRUxNRVRfUFJPUFMuT05fQ0hBTkdFX0NMSUVOVF9TVEFURSkgfHwgKCgpID0+IHtcbn0pO1xudmFyIGdldEF0dHJpYnV0ZXNGcm9tUHJvcHNMaXN0ID0gKHRhZ1R5cGUsIHByb3BzTGlzdCkgPT4gcHJvcHNMaXN0LmZpbHRlcigocHJvcHMpID0+IHR5cGVvZiBwcm9wc1t0YWdUeXBlXSAhPT0gXCJ1bmRlZmluZWRcIikubWFwKChwcm9wcykgPT4gcHJvcHNbdGFnVHlwZV0pLnJlZHVjZSgodGFnQXR0cnMsIGN1cnJlbnQpID0+ICh7IC4uLnRhZ0F0dHJzLCAuLi5jdXJyZW50IH0pLCB7fSk7XG52YXIgZ2V0QmFzZVRhZ0Zyb21Qcm9wc0xpc3QgPSAocHJpbWFyeUF0dHJpYnV0ZXMsIHByb3BzTGlzdCkgPT4gcHJvcHNMaXN0LmZpbHRlcigocHJvcHMpID0+IHR5cGVvZiBwcm9wc1tcImJhc2VcIiAvKiBCQVNFICovXSAhPT0gXCJ1bmRlZmluZWRcIikubWFwKChwcm9wcykgPT4gcHJvcHNbXCJiYXNlXCIgLyogQkFTRSAqL10pLnJldmVyc2UoKS5yZWR1Y2UoKGlubmVybW9zdEJhc2VUYWcsIHRhZykgPT4ge1xuICBpZiAoIWlubmVybW9zdEJhc2VUYWcubGVuZ3RoKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRhZyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVLZXkgPSBrZXlzW2ldO1xuICAgICAgY29uc3QgbG93ZXJDYXNlQXR0cmlidXRlS2V5ID0gYXR0cmlidXRlS2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAocHJpbWFyeUF0dHJpYnV0ZXMuaW5kZXhPZihsb3dlckNhc2VBdHRyaWJ1dGVLZXkpICE9PSAtMSAmJiB0YWdbbG93ZXJDYXNlQXR0cmlidXRlS2V5XSkge1xuICAgICAgICByZXR1cm4gaW5uZXJtb3N0QmFzZVRhZy5jb25jYXQodGFnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlubmVybW9zdEJhc2VUYWc7XG59LCBbXSk7XG52YXIgd2FybiA9IChtc2cpID0+IGNvbnNvbGUgJiYgdHlwZW9mIGNvbnNvbGUud2FybiA9PT0gXCJmdW5jdGlvblwiICYmIGNvbnNvbGUud2Fybihtc2cpO1xudmFyIGdldFRhZ3NGcm9tUHJvcHNMaXN0ID0gKHRhZ05hbWUsIHByaW1hcnlBdHRyaWJ1dGVzLCBwcm9wc0xpc3QpID0+IHtcbiAgY29uc3QgYXBwcm92ZWRTZWVuVGFncyA9IHt9O1xuICByZXR1cm4gcHJvcHNMaXN0LmZpbHRlcigocHJvcHMpID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wc1t0YWdOYW1lXSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHByb3BzW3RhZ05hbWVdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBgSGVsbWV0OiAke3RhZ05hbWV9IHNob3VsZCBiZSBvZiB0eXBlIFwiQXJyYXlcIi4gSW5zdGVhZCBmb3VuZCB0eXBlIFwiJHt0eXBlb2YgcHJvcHNbdGFnTmFtZV19XCJgXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pLm1hcCgocHJvcHMpID0+IHByb3BzW3RhZ05hbWVdKS5yZXZlcnNlKCkucmVkdWNlKChhcHByb3ZlZFRhZ3MsIGluc3RhbmNlVGFncykgPT4ge1xuICAgIGNvbnN0IGluc3RhbmNlU2VlblRhZ3MgPSB7fTtcbiAgICBpbnN0YW5jZVRhZ3MuZmlsdGVyKCh0YWcpID0+IHtcbiAgICAgIGxldCBwcmltYXJ5QXR0cmlidXRlS2V5O1xuICAgICAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyh0YWcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzMi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVLZXkgPSBrZXlzMltpXTtcbiAgICAgICAgY29uc3QgbG93ZXJDYXNlQXR0cmlidXRlS2V5ID0gYXR0cmlidXRlS2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChwcmltYXJ5QXR0cmlidXRlcy5pbmRleE9mKGxvd2VyQ2FzZUF0dHJpYnV0ZUtleSkgIT09IC0xICYmICEocHJpbWFyeUF0dHJpYnV0ZUtleSA9PT0gXCJyZWxcIiAvKiBSRUwgKi8gJiYgdGFnW3ByaW1hcnlBdHRyaWJ1dGVLZXldLnRvTG93ZXJDYXNlKCkgPT09IFwiY2Fub25pY2FsXCIpICYmICEobG93ZXJDYXNlQXR0cmlidXRlS2V5ID09PSBcInJlbFwiIC8qIFJFTCAqLyAmJiB0YWdbbG93ZXJDYXNlQXR0cmlidXRlS2V5XS50b0xvd2VyQ2FzZSgpID09PSBcInN0eWxlc2hlZXRcIikpIHtcbiAgICAgICAgICBwcmltYXJ5QXR0cmlidXRlS2V5ID0gbG93ZXJDYXNlQXR0cmlidXRlS2V5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmltYXJ5QXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZUtleSkgIT09IC0xICYmIChhdHRyaWJ1dGVLZXkgPT09IFwiaW5uZXJIVE1MXCIgLyogSU5ORVJfSFRNTCAqLyB8fCBhdHRyaWJ1dGVLZXkgPT09IFwiY3NzVGV4dFwiIC8qIENTU19URVhUICovIHx8IGF0dHJpYnV0ZUtleSA9PT0gXCJpdGVtcHJvcFwiIC8qIElURU1fUFJPUCAqLykpIHtcbiAgICAgICAgICBwcmltYXJ5QXR0cmlidXRlS2V5ID0gYXR0cmlidXRlS2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXByaW1hcnlBdHRyaWJ1dGVLZXkgfHwgIXRhZ1twcmltYXJ5QXR0cmlidXRlS2V5XSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhZ1twcmltYXJ5QXR0cmlidXRlS2V5XS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFhcHByb3ZlZFNlZW5UYWdzW3ByaW1hcnlBdHRyaWJ1dGVLZXldKSB7XG4gICAgICAgIGFwcHJvdmVkU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGlmICghaW5zdGFuY2VTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XSkge1xuICAgICAgICBpbnN0YW5jZVNlZW5UYWdzW3ByaW1hcnlBdHRyaWJ1dGVLZXldID0ge307XG4gICAgICB9XG4gICAgICBpZiAoIWFwcHJvdmVkU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV1bdmFsdWVdKSB7XG4gICAgICAgIGluc3RhbmNlU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV1bdmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkucmV2ZXJzZSgpLmZvckVhY2goKHRhZykgPT4gYXBwcm92ZWRUYWdzLnB1c2godGFnKSk7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGluc3RhbmNlU2VlblRhZ3MpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYXR0cmlidXRlS2V5ID0ga2V5c1tpXTtcbiAgICAgIGNvbnN0IHRhZ1VuaW9uID0ge1xuICAgICAgICAuLi5hcHByb3ZlZFNlZW5UYWdzW2F0dHJpYnV0ZUtleV0sXG4gICAgICAgIC4uLmluc3RhbmNlU2VlblRhZ3NbYXR0cmlidXRlS2V5XVxuICAgICAgfTtcbiAgICAgIGFwcHJvdmVkU2VlblRhZ3NbYXR0cmlidXRlS2V5XSA9IHRhZ1VuaW9uO1xuICAgIH1cbiAgICByZXR1cm4gYXBwcm92ZWRUYWdzO1xuICB9LCBbXSkucmV2ZXJzZSgpO1xufTtcbnZhciBnZXRBbnlUcnVlRnJvbVByb3BzTGlzdCA9IChwcm9wc0xpc3QsIGNoZWNrZWRUYWcpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHNMaXN0KSAmJiBwcm9wc0xpc3QubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByb3BzTGlzdC5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgIGNvbnN0IHByb3AgPSBwcm9wc0xpc3RbaW5kZXhdO1xuICAgICAgaWYgKHByb3BbY2hlY2tlZFRhZ10pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG52YXIgcmVkdWNlUHJvcHNUb1N0YXRlID0gKHByb3BzTGlzdCkgPT4gKHtcbiAgYmFzZVRhZzogZ2V0QmFzZVRhZ0Zyb21Qcm9wc0xpc3QoW1wiaHJlZlwiIC8qIEhSRUYgKi9dLCBwcm9wc0xpc3QpLFxuICBib2R5QXR0cmlidXRlczogZ2V0QXR0cmlidXRlc0Zyb21Qcm9wc0xpc3QoXCJib2R5QXR0cmlidXRlc1wiIC8qIEJPRFkgKi8sIHByb3BzTGlzdCksXG4gIGRlZmVyOiBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIEhFTE1FVF9QUk9QUy5ERUZFUiksXG4gIGVuY29kZTogZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBIRUxNRVRfUFJPUFMuRU5DT0RFX1NQRUNJQUxfQ0hBUkFDVEVSUyksXG4gIGh0bWxBdHRyaWJ1dGVzOiBnZXRBdHRyaWJ1dGVzRnJvbVByb3BzTGlzdChcImh0bWxBdHRyaWJ1dGVzXCIgLyogSFRNTCAqLywgcHJvcHNMaXN0KSxcbiAgbGlua1RhZ3M6IGdldFRhZ3NGcm9tUHJvcHNMaXN0KFxuICAgIFwibGlua1wiIC8qIExJTksgKi8sXG4gICAgW1wicmVsXCIgLyogUkVMICovLCBcImhyZWZcIiAvKiBIUkVGICovXSxcbiAgICBwcm9wc0xpc3RcbiAgKSxcbiAgbWV0YVRhZ3M6IGdldFRhZ3NGcm9tUHJvcHNMaXN0KFxuICAgIFwibWV0YVwiIC8qIE1FVEEgKi8sXG4gICAgW1xuICAgICAgXCJuYW1lXCIgLyogTkFNRSAqLyxcbiAgICAgIFwiY2hhcnNldFwiIC8qIENIQVJTRVQgKi8sXG4gICAgICBcImh0dHAtZXF1aXZcIiAvKiBIVFRQRVFVSVYgKi8sXG4gICAgICBcInByb3BlcnR5XCIgLyogUFJPUEVSVFkgKi8sXG4gICAgICBcIml0ZW1wcm9wXCIgLyogSVRFTV9QUk9QICovXG4gICAgXSxcbiAgICBwcm9wc0xpc3RcbiAgKSxcbiAgbm9zY3JpcHRUYWdzOiBnZXRUYWdzRnJvbVByb3BzTGlzdChcIm5vc2NyaXB0XCIgLyogTk9TQ1JJUFQgKi8sIFtcImlubmVySFRNTFwiIC8qIElOTkVSX0hUTUwgKi9dLCBwcm9wc0xpc3QpLFxuICBvbkNoYW5nZUNsaWVudFN0YXRlOiBnZXRPbkNoYW5nZUNsaWVudFN0YXRlKHByb3BzTGlzdCksXG4gIHNjcmlwdFRhZ3M6IGdldFRhZ3NGcm9tUHJvcHNMaXN0KFxuICAgIFwic2NyaXB0XCIgLyogU0NSSVBUICovLFxuICAgIFtcInNyY1wiIC8qIFNSQyAqLywgXCJpbm5lckhUTUxcIiAvKiBJTk5FUl9IVE1MICovXSxcbiAgICBwcm9wc0xpc3RcbiAgKSxcbiAgc3R5bGVUYWdzOiBnZXRUYWdzRnJvbVByb3BzTGlzdChcInN0eWxlXCIgLyogU1RZTEUgKi8sIFtcImNzc1RleHRcIiAvKiBDU1NfVEVYVCAqL10sIHByb3BzTGlzdCksXG4gIHRpdGxlOiBnZXRUaXRsZUZyb21Qcm9wc0xpc3QocHJvcHNMaXN0KSxcbiAgdGl0bGVBdHRyaWJ1dGVzOiBnZXRBdHRyaWJ1dGVzRnJvbVByb3BzTGlzdChcInRpdGxlQXR0cmlidXRlc1wiIC8qIFRJVExFICovLCBwcm9wc0xpc3QpLFxuICBwcmlvcml0aXplU2VvVGFnczogZ2V0QW55VHJ1ZUZyb21Qcm9wc0xpc3QocHJvcHNMaXN0LCBIRUxNRVRfUFJPUFMuUFJJT1JJVElaRV9TRU9fVEFHUylcbn0pO1xudmFyIGZsYXR0ZW5BcnJheSA9IChwb3NzaWJsZUFycmF5KSA9PiBBcnJheS5pc0FycmF5KHBvc3NpYmxlQXJyYXkpID8gcG9zc2libGVBcnJheS5qb2luKFwiXCIpIDogcG9zc2libGVBcnJheTtcbnZhciBjaGVja0lmUHJvcHNNYXRjaCA9IChwcm9wcywgdG9NYXRjaCkgPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodG9NYXRjaFtrZXlzW2ldXSAmJiB0b01hdGNoW2tleXNbaV1dLmluY2x1ZGVzKHByb3BzW2tleXNbaV1dKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG52YXIgcHJpb3JpdGl6ZXIgPSAoZWxlbWVudHNMaXN0LCBwcm9wc1RvTWF0Y2gpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudHNMaXN0KSkge1xuICAgIHJldHVybiBlbGVtZW50c0xpc3QucmVkdWNlKFxuICAgICAgKGFjYywgZWxlbWVudEF0dHJzKSA9PiB7XG4gICAgICAgIGlmIChjaGVja0lmUHJvcHNNYXRjaChlbGVtZW50QXR0cnMsIHByb3BzVG9NYXRjaCkpIHtcbiAgICAgICAgICBhY2MucHJpb3JpdHkucHVzaChlbGVtZW50QXR0cnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjYy5kZWZhdWx0LnB1c2goZWxlbWVudEF0dHJzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSxcbiAgICAgIHsgcHJpb3JpdHk6IFtdLCBkZWZhdWx0OiBbXSB9XG4gICAgKTtcbiAgfVxuICByZXR1cm4geyBkZWZhdWx0OiBlbGVtZW50c0xpc3QsIHByaW9yaXR5OiBbXSB9O1xufTtcbnZhciB3aXRob3V0ID0gKG9iaiwga2V5KSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4ub2JqLFxuICAgIFtrZXldOiB2b2lkIDBcbiAgfTtcbn07XG5cbi8vIHNyYy9zZXJ2ZXIudHNcbnZhciBTRUxGX0NMT1NJTkdfVEFHUyA9IFtcIm5vc2NyaXB0XCIgLyogTk9TQ1JJUFQgKi8sIFwic2NyaXB0XCIgLyogU0NSSVBUICovLCBcInN0eWxlXCIgLyogU1RZTEUgKi9dO1xudmFyIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzID0gKHN0ciwgZW5jb2RlID0gdHJ1ZSkgPT4ge1xuICBpZiAoZW5jb2RlID09PSBmYWxzZSkge1xuICAgIHJldHVybiBTdHJpbmcoc3RyKTtcbiAgfVxuICByZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpLnJlcGxhY2UoLycvZywgXCImI3gyNztcIik7XG59O1xudmFyIGdlbmVyYXRlRWxlbWVudEF0dHJpYnV0ZXNBc1N0cmluZyA9IChhdHRyaWJ1dGVzKSA9PiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5yZWR1Y2UoKHN0ciwga2V5KSA9PiB7XG4gIGNvbnN0IGF0dHIgPSB0eXBlb2YgYXR0cmlidXRlc1trZXldICE9PSBcInVuZGVmaW5lZFwiID8gYCR7a2V5fT1cIiR7YXR0cmlidXRlc1trZXldfVwiYCA6IGAke2tleX1gO1xuICByZXR1cm4gc3RyID8gYCR7c3RyfSAke2F0dHJ9YCA6IGF0dHI7XG59LCBcIlwiKTtcbnZhciBnZW5lcmF0ZVRpdGxlQXNTdHJpbmcgPSAodHlwZSwgdGl0bGUsIGF0dHJpYnV0ZXMsIGVuY29kZSkgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVTdHJpbmcgPSBnZW5lcmF0ZUVsZW1lbnRBdHRyaWJ1dGVzQXNTdHJpbmcoYXR0cmlidXRlcyk7XG4gIGNvbnN0IGZsYXR0ZW5lZFRpdGxlID0gZmxhdHRlbkFycmF5KHRpdGxlKTtcbiAgcmV0dXJuIGF0dHJpYnV0ZVN0cmluZyA/IGA8JHt0eXBlfSAke0hFTE1FVF9BVFRSSUJVVEV9PVwidHJ1ZVwiICR7YXR0cmlidXRlU3RyaW5nfT4ke2VuY29kZVNwZWNpYWxDaGFyYWN0ZXJzKFxuICAgIGZsYXR0ZW5lZFRpdGxlLFxuICAgIGVuY29kZVxuICApfTwvJHt0eXBlfT5gIDogYDwke3R5cGV9ICR7SEVMTUVUX0FUVFJJQlVURX09XCJ0cnVlXCI+JHtlbmNvZGVTcGVjaWFsQ2hhcmFjdGVycyhcbiAgICBmbGF0dGVuZWRUaXRsZSxcbiAgICBlbmNvZGVcbiAgKX08LyR7dHlwZX0+YDtcbn07XG52YXIgZ2VuZXJhdGVUYWdzQXNTdHJpbmcgPSAodHlwZSwgdGFncywgZW5jb2RlID0gdHJ1ZSkgPT4gdGFncy5yZWR1Y2UoKHN0ciwgdCkgPT4ge1xuICBjb25zdCB0YWcgPSB0O1xuICBjb25zdCBhdHRyaWJ1dGVIdG1sID0gT2JqZWN0LmtleXModGFnKS5maWx0ZXIoXG4gICAgKGF0dHJpYnV0ZSkgPT4gIShhdHRyaWJ1dGUgPT09IFwiaW5uZXJIVE1MXCIgLyogSU5ORVJfSFRNTCAqLyB8fCBhdHRyaWJ1dGUgPT09IFwiY3NzVGV4dFwiIC8qIENTU19URVhUICovKVxuICApLnJlZHVjZSgoc3RyaW5nLCBhdHRyaWJ1dGUpID0+IHtcbiAgICBjb25zdCBhdHRyID0gdHlwZW9mIHRhZ1thdHRyaWJ1dGVdID09PSBcInVuZGVmaW5lZFwiID8gYXR0cmlidXRlIDogYCR7YXR0cmlidXRlfT1cIiR7ZW5jb2RlU3BlY2lhbENoYXJhY3RlcnModGFnW2F0dHJpYnV0ZV0sIGVuY29kZSl9XCJgO1xuICAgIHJldHVybiBzdHJpbmcgPyBgJHtzdHJpbmd9ICR7YXR0cn1gIDogYXR0cjtcbiAgfSwgXCJcIik7XG4gIGNvbnN0IHRhZ0NvbnRlbnQgPSB0YWcuaW5uZXJIVE1MIHx8IHRhZy5jc3NUZXh0IHx8IFwiXCI7XG4gIGNvbnN0IGlzU2VsZkNsb3NpbmcgPSBTRUxGX0NMT1NJTkdfVEFHUy5pbmRleE9mKHR5cGUpID09PSAtMTtcbiAgcmV0dXJuIGAke3N0cn08JHt0eXBlfSAke0hFTE1FVF9BVFRSSUJVVEV9PVwidHJ1ZVwiICR7YXR0cmlidXRlSHRtbH0ke2lzU2VsZkNsb3NpbmcgPyBgLz5gIDogYD4ke3RhZ0NvbnRlbnR9PC8ke3R5cGV9PmB9YDtcbn0sIFwiXCIpO1xudmFyIGNvbnZlcnRFbGVtZW50QXR0cmlidXRlc1RvUmVhY3RQcm9wcyA9IChhdHRyaWJ1dGVzLCBpbml0UHJvcHMgPSB7fSkgPT4gT2JqZWN0LmtleXMoYXR0cmlidXRlcykucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICBjb25zdCBtYXBwZWQgPSBSRUFDVF9UQUdfTUFQW2tleV07XG4gIG9ialttYXBwZWQgfHwga2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgcmV0dXJuIG9iajtcbn0sIGluaXRQcm9wcyk7XG52YXIgZ2VuZXJhdGVUaXRsZUFzUmVhY3RDb21wb25lbnQgPSAoX3R5cGUsIHRpdGxlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gIGNvbnN0IGluaXRQcm9wcyA9IHtcbiAgICBrZXk6IHRpdGxlLFxuICAgIFtIRUxNRVRfQVRUUklCVVRFXTogdHJ1ZVxuICB9O1xuICBjb25zdCBwcm9wcyA9IGNvbnZlcnRFbGVtZW50QXR0cmlidXRlc1RvUmVhY3RQcm9wcyhhdHRyaWJ1dGVzLCBpbml0UHJvcHMpO1xuICByZXR1cm4gW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiIC8qIFRJVExFICovLCBwcm9wcywgdGl0bGUpXTtcbn07XG52YXIgZ2VuZXJhdGVUYWdzQXNSZWFjdENvbXBvbmVudCA9ICh0eXBlLCB0YWdzKSA9PiB0YWdzLm1hcCgodGFnLCBpKSA9PiB7XG4gIGNvbnN0IG1hcHBlZFRhZyA9IHtcbiAgICBrZXk6IGksXG4gICAgW0hFTE1FVF9BVFRSSUJVVEVdOiB0cnVlXG4gIH07XG4gIE9iamVjdC5rZXlzKHRhZykuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkID0gUkVBQ1RfVEFHX01BUFthdHRyaWJ1dGVdO1xuICAgIGNvbnN0IG1hcHBlZEF0dHJpYnV0ZSA9IG1hcHBlZCB8fCBhdHRyaWJ1dGU7XG4gICAgaWYgKG1hcHBlZEF0dHJpYnV0ZSA9PT0gXCJpbm5lckhUTUxcIiAvKiBJTk5FUl9IVE1MICovIHx8IG1hcHBlZEF0dHJpYnV0ZSA9PT0gXCJjc3NUZXh0XCIgLyogQ1NTX1RFWFQgKi8pIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0YWcuaW5uZXJIVE1MIHx8IHRhZy5jc3NUZXh0O1xuICAgICAgbWFwcGVkVGFnLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0geyBfX2h0bWw6IGNvbnRlbnQgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFwcGVkVGFnW21hcHBlZEF0dHJpYnV0ZV0gPSB0YWdbYXR0cmlidXRlXTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0eXBlLCBtYXBwZWRUYWcpO1xufSk7XG52YXIgZ2V0TWV0aG9kc0ZvclRhZyA9ICh0eXBlLCB0YWdzLCBlbmNvZGUgPSB0cnVlKSA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgXCJ0aXRsZVwiIC8qIFRJVExFICovOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9Db21wb25lbnQ6ICgpID0+IGdlbmVyYXRlVGl0bGVBc1JlYWN0Q29tcG9uZW50KHR5cGUsIHRhZ3MudGl0bGUsIHRhZ3MudGl0bGVBdHRyaWJ1dGVzKSxcbiAgICAgICAgdG9TdHJpbmc6ICgpID0+IGdlbmVyYXRlVGl0bGVBc1N0cmluZyh0eXBlLCB0YWdzLnRpdGxlLCB0YWdzLnRpdGxlQXR0cmlidXRlcywgZW5jb2RlKVxuICAgICAgfTtcbiAgICBjYXNlIFwiYm9keUF0dHJpYnV0ZXNcIiAvKiBCT0RZICovOlxuICAgIGNhc2UgXCJodG1sQXR0cmlidXRlc1wiIC8qIEhUTUwgKi86XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b0NvbXBvbmVudDogKCkgPT4gY29udmVydEVsZW1lbnRBdHRyaWJ1dGVzVG9SZWFjdFByb3BzKHRhZ3MpLFxuICAgICAgICB0b1N0cmluZzogKCkgPT4gZ2VuZXJhdGVFbGVtZW50QXR0cmlidXRlc0FzU3RyaW5nKHRhZ3MpXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b0NvbXBvbmVudDogKCkgPT4gZ2VuZXJhdGVUYWdzQXNSZWFjdENvbXBvbmVudCh0eXBlLCB0YWdzKSxcbiAgICAgICAgdG9TdHJpbmc6ICgpID0+IGdlbmVyYXRlVGFnc0FzU3RyaW5nKHR5cGUsIHRhZ3MsIGVuY29kZSlcbiAgICAgIH07XG4gIH1cbn07XG52YXIgZ2V0UHJpb3JpdHlNZXRob2RzID0gKHsgbWV0YVRhZ3MsIGxpbmtUYWdzLCBzY3JpcHRUYWdzLCBlbmNvZGUgfSkgPT4ge1xuICBjb25zdCBtZXRhID0gcHJpb3JpdGl6ZXIobWV0YVRhZ3MsIFNFT19QUklPUklUWV9UQUdTLm1ldGEpO1xuICBjb25zdCBsaW5rID0gcHJpb3JpdGl6ZXIobGlua1RhZ3MsIFNFT19QUklPUklUWV9UQUdTLmxpbmspO1xuICBjb25zdCBzY3JpcHQgPSBwcmlvcml0aXplcihzY3JpcHRUYWdzLCBTRU9fUFJJT1JJVFlfVEFHUy5zY3JpcHQpO1xuICBjb25zdCBwcmlvcml0eU1ldGhvZHMgPSB7XG4gICAgdG9Db21wb25lbnQ6ICgpID0+IFtcbiAgICAgIC4uLmdlbmVyYXRlVGFnc0FzUmVhY3RDb21wb25lbnQoXCJtZXRhXCIgLyogTUVUQSAqLywgbWV0YS5wcmlvcml0eSksXG4gICAgICAuLi5nZW5lcmF0ZVRhZ3NBc1JlYWN0Q29tcG9uZW50KFwibGlua1wiIC8qIExJTksgKi8sIGxpbmsucHJpb3JpdHkpLFxuICAgICAgLi4uZ2VuZXJhdGVUYWdzQXNSZWFjdENvbXBvbmVudChcInNjcmlwdFwiIC8qIFNDUklQVCAqLywgc2NyaXB0LnByaW9yaXR5KVxuICAgIF0sXG4gICAgdG9TdHJpbmc6ICgpID0+IChcbiAgICAgIC8vIGdlbmVyYXRlIGFsbCB0aGUgdGFncyBhcyBzdHJpbmdzIGFuZCBjb25jYXRlbmF0ZSB0aGVtXG4gICAgICBgJHtnZXRNZXRob2RzRm9yVGFnKFwibWV0YVwiIC8qIE1FVEEgKi8sIG1ldGEucHJpb3JpdHksIGVuY29kZSl9ICR7Z2V0TWV0aG9kc0ZvclRhZyhcbiAgICAgICAgXCJsaW5rXCIgLyogTElOSyAqLyxcbiAgICAgICAgbGluay5wcmlvcml0eSxcbiAgICAgICAgZW5jb2RlXG4gICAgICApfSAke2dldE1ldGhvZHNGb3JUYWcoXCJzY3JpcHRcIiAvKiBTQ1JJUFQgKi8sIHNjcmlwdC5wcmlvcml0eSwgZW5jb2RlKX1gXG4gICAgKVxuICB9O1xuICByZXR1cm4ge1xuICAgIHByaW9yaXR5TWV0aG9kcyxcbiAgICBtZXRhVGFnczogbWV0YS5kZWZhdWx0LFxuICAgIGxpbmtUYWdzOiBsaW5rLmRlZmF1bHQsXG4gICAgc2NyaXB0VGFnczogc2NyaXB0LmRlZmF1bHRcbiAgfTtcbn07XG52YXIgbWFwU3RhdGVPblNlcnZlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYmFzZVRhZyxcbiAgICBib2R5QXR0cmlidXRlcyxcbiAgICBlbmNvZGUgPSB0cnVlLFxuICAgIGh0bWxBdHRyaWJ1dGVzLFxuICAgIG5vc2NyaXB0VGFncyxcbiAgICBzdHlsZVRhZ3MsXG4gICAgdGl0bGUgPSBcIlwiLFxuICAgIHRpdGxlQXR0cmlidXRlcyxcbiAgICBwcmlvcml0aXplU2VvVGFnc1xuICB9ID0gcHJvcHM7XG4gIGxldCB7IGxpbmtUYWdzLCBtZXRhVGFncywgc2NyaXB0VGFncyB9ID0gcHJvcHM7XG4gIGxldCBwcmlvcml0eU1ldGhvZHMgPSB7XG4gICAgdG9Db21wb25lbnQ6ICgpID0+IHtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiAoKSA9PiBcIlwiXG4gIH07XG4gIGlmIChwcmlvcml0aXplU2VvVGFncykge1xuICAgICh7IHByaW9yaXR5TWV0aG9kcywgbGlua1RhZ3MsIG1ldGFUYWdzLCBzY3JpcHRUYWdzIH0gPSBnZXRQcmlvcml0eU1ldGhvZHMocHJvcHMpKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByaW9yaXR5OiBwcmlvcml0eU1ldGhvZHMsXG4gICAgYmFzZTogZ2V0TWV0aG9kc0ZvclRhZyhcImJhc2VcIiAvKiBCQVNFICovLCBiYXNlVGFnLCBlbmNvZGUpLFxuICAgIGJvZHlBdHRyaWJ1dGVzOiBnZXRNZXRob2RzRm9yVGFnKFwiYm9keUF0dHJpYnV0ZXNcIiAvKiBCT0RZICovLCBib2R5QXR0cmlidXRlcywgZW5jb2RlKSxcbiAgICBodG1sQXR0cmlidXRlczogZ2V0TWV0aG9kc0ZvclRhZyhcImh0bWxBdHRyaWJ1dGVzXCIgLyogSFRNTCAqLywgaHRtbEF0dHJpYnV0ZXMsIGVuY29kZSksXG4gICAgbGluazogZ2V0TWV0aG9kc0ZvclRhZyhcImxpbmtcIiAvKiBMSU5LICovLCBsaW5rVGFncywgZW5jb2RlKSxcbiAgICBtZXRhOiBnZXRNZXRob2RzRm9yVGFnKFwibWV0YVwiIC8qIE1FVEEgKi8sIG1ldGFUYWdzLCBlbmNvZGUpLFxuICAgIG5vc2NyaXB0OiBnZXRNZXRob2RzRm9yVGFnKFwibm9zY3JpcHRcIiAvKiBOT1NDUklQVCAqLywgbm9zY3JpcHRUYWdzLCBlbmNvZGUpLFxuICAgIHNjcmlwdDogZ2V0TWV0aG9kc0ZvclRhZyhcInNjcmlwdFwiIC8qIFNDUklQVCAqLywgc2NyaXB0VGFncywgZW5jb2RlKSxcbiAgICBzdHlsZTogZ2V0TWV0aG9kc0ZvclRhZyhcInN0eWxlXCIgLyogU1RZTEUgKi8sIHN0eWxlVGFncywgZW5jb2RlKSxcbiAgICB0aXRsZTogZ2V0TWV0aG9kc0ZvclRhZyhcInRpdGxlXCIgLyogVElUTEUgKi8sIHsgdGl0bGUsIHRpdGxlQXR0cmlidXRlcyB9LCBlbmNvZGUpXG4gIH07XG59O1xudmFyIHNlcnZlcl9kZWZhdWx0ID0gbWFwU3RhdGVPblNlcnZlcjtcblxuLy8gc3JjL0hlbG1ldERhdGEudHNcbnZhciBpbnN0YW5jZXMgPSBbXTtcbnZhciBpc0RvY3VtZW50ID0gISEodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xudmFyIEhlbG1ldERhdGEgPSBjbGFzcyB7XG4gIGluc3RhbmNlcyA9IFtdO1xuICBjYW5Vc2VET00gPSBpc0RvY3VtZW50O1xuICBjb250ZXh0O1xuICB2YWx1ZSA9IHtcbiAgICBzZXRIZWxtZXQ6IChzZXJ2ZXJTdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5jb250ZXh0LmhlbG1ldCA9IHNlcnZlclN0YXRlO1xuICAgIH0sXG4gICAgaGVsbWV0SW5zdGFuY2VzOiB7XG4gICAgICBnZXQ6ICgpID0+IHRoaXMuY2FuVXNlRE9NID8gaW5zdGFuY2VzIDogdGhpcy5pbnN0YW5jZXMsXG4gICAgICBhZGQ6IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAodGhpcy5jYW5Vc2VET00gPyBpbnN0YW5jZXMgOiB0aGlzLmluc3RhbmNlcykucHVzaChpbnN0YW5jZSk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlOiAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSAodGhpcy5jYW5Vc2VET00gPyBpbnN0YW5jZXMgOiB0aGlzLmluc3RhbmNlcykuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgICAgICh0aGlzLmNhblVzZURPTSA/IGluc3RhbmNlcyA6IHRoaXMuaW5zdGFuY2VzKS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgY2FuVXNlRE9NKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmNhblVzZURPTSA9IGNhblVzZURPTSB8fCBmYWxzZTtcbiAgICBpZiAoIWNhblVzZURPTSkge1xuICAgICAgY29udGV4dC5oZWxtZXQgPSBzZXJ2ZXJfZGVmYXVsdCh7XG4gICAgICAgIGJhc2VUYWc6IFtdLFxuICAgICAgICBib2R5QXR0cmlidXRlczoge30sXG4gICAgICAgIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlLFxuICAgICAgICBodG1sQXR0cmlidXRlczoge30sXG4gICAgICAgIGxpbmtUYWdzOiBbXSxcbiAgICAgICAgbWV0YVRhZ3M6IFtdLFxuICAgICAgICBub3NjcmlwdFRhZ3M6IFtdLFxuICAgICAgICBzY3JpcHRUYWdzOiBbXSxcbiAgICAgICAgc3R5bGVUYWdzOiBbXSxcbiAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgIHRpdGxlQXR0cmlidXRlczoge31cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuLy8gc3JjL1Byb3ZpZGVyLnRzeFxudmFyIGRlZmF1bHRWYWx1ZSA9IHt9O1xudmFyIENvbnRleHQgPSBSZWFjdDIuY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpO1xudmFyIEhlbG1ldFByb3ZpZGVyID0gY2xhc3MgX0hlbG1ldFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNhblVzZURPTSA9IGlzRG9jdW1lbnQ7XG4gIGhlbG1ldERhdGE7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGVsbWV0RGF0YSA9IG5ldyBIZWxtZXREYXRhKHRoaXMucHJvcHMuY29udGV4dCB8fCB7fSwgX0hlbG1ldFByb3ZpZGVyLmNhblVzZURPTSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QyLmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogdGhpcy5oZWxtZXREYXRhLnZhbHVlIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9XG59O1xuXG4vLyBzcmMvRGlzcGF0Y2hlci50c3hcbmltcG9ydCB7IENvbXBvbmVudCBhcyBDb21wb25lbnQyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gXCJzaGFsbG93ZXF1YWxcIjtcblxuLy8gc3JjL2NsaWVudC50c1xudmFyIHVwZGF0ZVRhZ3MgPSAodHlwZSwgdGFncykgPT4ge1xuICBjb25zdCBoZWFkRWxlbWVudCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIiAvKiBIRUFEICovKTtcbiAgY29uc3QgdGFnTm9kZXMgPSBoZWFkRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3R5cGV9WyR7SEVMTUVUX0FUVFJJQlVURX1dYCk7XG4gIGNvbnN0IG9sZFRhZ3MgPSBbXS5zbGljZS5jYWxsKHRhZ05vZGVzKTtcbiAgY29uc3QgbmV3VGFncyA9IFtdO1xuICBsZXQgaW5kZXhUb0RlbGV0ZTtcbiAgaWYgKHRhZ3MgJiYgdGFncy5sZW5ndGgpIHtcbiAgICB0YWdzLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiB0YWcpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YWcsIGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICBpZiAoYXR0cmlidXRlID09PSBcImlubmVySFRNTFwiIC8qIElOTkVSX0hUTUwgKi8pIHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuaW5uZXJIVE1MID0gdGFnLmlubmVySFRNTDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZSA9PT0gXCJjc3NUZXh0XCIgLyogQ1NTX1RFWFQgKi8pIHtcbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICAgICAgbmV3RWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSB0YWcuY3NzVGV4dDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFnLmNzc1RleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IGF0dHJpYnV0ZTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIHRhZ1thdHRyXSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiXCIgOiB0YWdbYXR0cl07XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKEhFTE1FVF9BVFRSSUJVVEUsIFwidHJ1ZVwiKTtcbiAgICAgIGlmIChvbGRUYWdzLnNvbWUoKGV4aXN0aW5nVGFnLCBpbmRleCkgPT4ge1xuICAgICAgICBpbmRleFRvRGVsZXRlID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50LmlzRXF1YWxOb2RlKGV4aXN0aW5nVGFnKTtcbiAgICAgIH0pKSB7XG4gICAgICAgIG9sZFRhZ3Muc3BsaWNlKGluZGV4VG9EZWxldGUsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VGFncy5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG9sZFRhZ3MuZm9yRWFjaCgodGFnKSA9PiB0YWcucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQodGFnKSk7XG4gIG5ld1RhZ3MuZm9yRWFjaCgodGFnKSA9PiBoZWFkRWxlbWVudC5hcHBlbmRDaGlsZCh0YWcpKTtcbiAgcmV0dXJuIHtcbiAgICBvbGRUYWdzLFxuICAgIG5ld1RhZ3NcbiAgfTtcbn07XG52YXIgdXBkYXRlQXR0cmlidXRlcyA9ICh0YWdOYW1lLCBhdHRyaWJ1dGVzKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKVswXTtcbiAgaWYgKCFlbGVtZW50VGFnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGhlbG1ldEF0dHJpYnV0ZVN0cmluZyA9IGVsZW1lbnRUYWcuZ2V0QXR0cmlidXRlKEhFTE1FVF9BVFRSSUJVVEUpO1xuICBjb25zdCBoZWxtZXRBdHRyaWJ1dGVzID0gaGVsbWV0QXR0cmlidXRlU3RyaW5nID8gaGVsbWV0QXR0cmlidXRlU3RyaW5nLnNwbGl0KFwiLFwiKSA6IFtdO1xuICBjb25zdCBhdHRyaWJ1dGVzVG9SZW1vdmUgPSBbLi4uaGVsbWV0QXR0cmlidXRlc107XG4gIGNvbnN0IGF0dHJpYnV0ZUtleXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKTtcbiAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlS2V5cykge1xuICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1thdHRyaWJ1dGVdIHx8IFwiXCI7XG4gICAgaWYgKGVsZW1lbnRUYWcuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKSB7XG4gICAgICBlbGVtZW50VGFnLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGhlbG1ldEF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpID09PSAtMSkge1xuICAgICAgaGVsbWV0QXR0cmlidXRlcy5wdXNoKGF0dHJpYnV0ZSk7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4VG9TYXZlID0gYXR0cmlidXRlc1RvUmVtb3ZlLmluZGV4T2YoYXR0cmlidXRlKTtcbiAgICBpZiAoaW5kZXhUb1NhdmUgIT09IC0xKSB7XG4gICAgICBhdHRyaWJ1dGVzVG9SZW1vdmUuc3BsaWNlKGluZGV4VG9TYXZlLCAxKTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IGF0dHJpYnV0ZXNUb1JlbW92ZS5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgIGVsZW1lbnRUYWcucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXNUb1JlbW92ZVtpXSk7XG4gIH1cbiAgaWYgKGhlbG1ldEF0dHJpYnV0ZXMubGVuZ3RoID09PSBhdHRyaWJ1dGVzVG9SZW1vdmUubGVuZ3RoKSB7XG4gICAgZWxlbWVudFRhZy5yZW1vdmVBdHRyaWJ1dGUoSEVMTUVUX0FUVFJJQlVURSk7XG4gIH0gZWxzZSBpZiAoZWxlbWVudFRhZy5nZXRBdHRyaWJ1dGUoSEVMTUVUX0FUVFJJQlVURSkgIT09IGF0dHJpYnV0ZUtleXMuam9pbihcIixcIikpIHtcbiAgICBlbGVtZW50VGFnLnNldEF0dHJpYnV0ZShIRUxNRVRfQVRUUklCVVRFLCBhdHRyaWJ1dGVLZXlzLmpvaW4oXCIsXCIpKTtcbiAgfVxufTtcbnZhciB1cGRhdGVUaXRsZSA9ICh0aXRsZSwgYXR0cmlidXRlcykgPT4ge1xuICBpZiAodHlwZW9mIHRpdGxlICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LnRpdGxlICE9PSB0aXRsZSkge1xuICAgIGRvY3VtZW50LnRpdGxlID0gZmxhdHRlbkFycmF5KHRpdGxlKTtcbiAgfVxuICB1cGRhdGVBdHRyaWJ1dGVzKFwidGl0bGVcIiAvKiBUSVRMRSAqLywgYXR0cmlidXRlcyk7XG59O1xudmFyIGNvbW1pdFRhZ0NoYW5nZXMgPSAobmV3U3RhdGUsIGNiKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBiYXNlVGFnLFxuICAgIGJvZHlBdHRyaWJ1dGVzLFxuICAgIGh0bWxBdHRyaWJ1dGVzLFxuICAgIGxpbmtUYWdzLFxuICAgIG1ldGFUYWdzLFxuICAgIG5vc2NyaXB0VGFncyxcbiAgICBvbkNoYW5nZUNsaWVudFN0YXRlLFxuICAgIHNjcmlwdFRhZ3MsXG4gICAgc3R5bGVUYWdzLFxuICAgIHRpdGxlLFxuICAgIHRpdGxlQXR0cmlidXRlc1xuICB9ID0gbmV3U3RhdGU7XG4gIHVwZGF0ZUF0dHJpYnV0ZXMoXCJib2R5XCIgLyogQk9EWSAqLywgYm9keUF0dHJpYnV0ZXMpO1xuICB1cGRhdGVBdHRyaWJ1dGVzKFwiaHRtbFwiIC8qIEhUTUwgKi8sIGh0bWxBdHRyaWJ1dGVzKTtcbiAgdXBkYXRlVGl0bGUodGl0bGUsIHRpdGxlQXR0cmlidXRlcyk7XG4gIGNvbnN0IHRhZ1VwZGF0ZXMgPSB7XG4gICAgYmFzZVRhZzogdXBkYXRlVGFncyhcImJhc2VcIiAvKiBCQVNFICovLCBiYXNlVGFnKSxcbiAgICBsaW5rVGFnczogdXBkYXRlVGFncyhcImxpbmtcIiAvKiBMSU5LICovLCBsaW5rVGFncyksXG4gICAgbWV0YVRhZ3M6IHVwZGF0ZVRhZ3MoXCJtZXRhXCIgLyogTUVUQSAqLywgbWV0YVRhZ3MpLFxuICAgIG5vc2NyaXB0VGFnczogdXBkYXRlVGFncyhcIm5vc2NyaXB0XCIgLyogTk9TQ1JJUFQgKi8sIG5vc2NyaXB0VGFncyksXG4gICAgc2NyaXB0VGFnczogdXBkYXRlVGFncyhcInNjcmlwdFwiIC8qIFNDUklQVCAqLywgc2NyaXB0VGFncyksXG4gICAgc3R5bGVUYWdzOiB1cGRhdGVUYWdzKFwic3R5bGVcIiAvKiBTVFlMRSAqLywgc3R5bGVUYWdzKVxuICB9O1xuICBjb25zdCBhZGRlZFRhZ3MgPSB7fTtcbiAgY29uc3QgcmVtb3ZlZFRhZ3MgPSB7fTtcbiAgT2JqZWN0LmtleXModGFnVXBkYXRlcykuZm9yRWFjaCgodGFnVHlwZSkgPT4ge1xuICAgIGNvbnN0IHsgbmV3VGFncywgb2xkVGFncyB9ID0gdGFnVXBkYXRlc1t0YWdUeXBlXTtcbiAgICBpZiAobmV3VGFncy5sZW5ndGgpIHtcbiAgICAgIGFkZGVkVGFnc1t0YWdUeXBlXSA9IG5ld1RhZ3M7XG4gICAgfVxuICAgIGlmIChvbGRUYWdzLmxlbmd0aCkge1xuICAgICAgcmVtb3ZlZFRhZ3NbdGFnVHlwZV0gPSB0YWdVcGRhdGVzW3RhZ1R5cGVdLm9sZFRhZ3M7XG4gICAgfVxuICB9KTtcbiAgaWYgKGNiKSB7XG4gICAgY2IoKTtcbiAgfVxuICBvbkNoYW5nZUNsaWVudFN0YXRlKG5ld1N0YXRlLCBhZGRlZFRhZ3MsIHJlbW92ZWRUYWdzKTtcbn07XG52YXIgX2hlbG1ldENhbGxiYWNrID0gbnVsbDtcbnZhciBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50ID0gKG5ld1N0YXRlKSA9PiB7XG4gIGlmIChfaGVsbWV0Q2FsbGJhY2spIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShfaGVsbWV0Q2FsbGJhY2spO1xuICB9XG4gIGlmIChuZXdTdGF0ZS5kZWZlcikge1xuICAgIF9oZWxtZXRDYWxsYmFjayA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjb21taXRUYWdDaGFuZ2VzKG5ld1N0YXRlLCAoKSA9PiB7XG4gICAgICAgIF9oZWxtZXRDYWxsYmFjayA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb21taXRUYWdDaGFuZ2VzKG5ld1N0YXRlKTtcbiAgICBfaGVsbWV0Q2FsbGJhY2sgPSBudWxsO1xuICB9XG59O1xudmFyIGNsaWVudF9kZWZhdWx0ID0gaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudDtcblxuLy8gc3JjL0Rpc3BhdGNoZXIudHN4XG52YXIgSGVsbWV0RGlzcGF0Y2hlciA9IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50MiB7XG4gIHJlbmRlcmVkID0gZmFsc2U7XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICByZXR1cm4gIXNoYWxsb3dFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGhlbG1ldEluc3RhbmNlcyB9ID0gdGhpcy5wcm9wcy5jb250ZXh0O1xuICAgIGhlbG1ldEluc3RhbmNlcy5yZW1vdmUodGhpcyk7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gIH1cbiAgZW1pdENoYW5nZSgpIHtcbiAgICBjb25zdCB7IGhlbG1ldEluc3RhbmNlcywgc2V0SGVsbWV0IH0gPSB0aGlzLnByb3BzLmNvbnRleHQ7XG4gICAgbGV0IHNlcnZlclN0YXRlID0gbnVsbDtcbiAgICBjb25zdCBzdGF0ZSA9IHJlZHVjZVByb3BzVG9TdGF0ZShcbiAgICAgIGhlbG1ldEluc3RhbmNlcy5nZXQoKS5tYXAoKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BzID0geyAuLi5pbnN0YW5jZS5wcm9wcyB9O1xuICAgICAgICBkZWxldGUgcHJvcHMuY29udGV4dDtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgfSlcbiAgICApO1xuICAgIGlmIChIZWxtZXRQcm92aWRlci5jYW5Vc2VET00pIHtcbiAgICAgIGNsaWVudF9kZWZhdWx0KHN0YXRlKTtcbiAgICB9IGVsc2UgaWYgKHNlcnZlcl9kZWZhdWx0KSB7XG4gICAgICBzZXJ2ZXJTdGF0ZSA9IHNlcnZlcl9kZWZhdWx0KHN0YXRlKTtcbiAgICB9XG4gICAgc2V0SGVsbWV0KHNlcnZlclN0YXRlKTtcbiAgfVxuICAvLyBjb21wb25lbnRXaWxsTW91bnQgd2lsbCBiZSBkZXByZWNhdGVkXG4gIC8vIGZvciBTU1IsIGluaXRpYWxpemUgb24gZmlyc3QgcmVuZGVyXG4gIC8vIGNvbnN0cnVjdG9yIGlzIGFsc28gdW5zYWZlIGluIFN0cmljdE1vZGVcbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5yZW5kZXJlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVkID0gdHJ1ZTtcbiAgICBjb25zdCB7IGhlbG1ldEluc3RhbmNlcyB9ID0gdGhpcy5wcm9wcy5jb250ZXh0O1xuICAgIGhlbG1ldEluc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vLyBzcmMvaW5kZXgudHN4XG52YXIgSGVsbWV0ID0gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQzIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWZlcjogdHJ1ZSxcbiAgICBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVyczogdHJ1ZSxcbiAgICBwcmlvcml0aXplU2VvVGFnczogZmFsc2VcbiAgfTtcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIHJldHVybiAhZmFzdENvbXBhcmUod2l0aG91dCh0aGlzLnByb3BzLCBcImhlbG1ldERhdGFcIiksIHdpdGhvdXQobmV4dFByb3BzLCBcImhlbG1ldERhdGFcIikpO1xuICB9XG4gIG1hcE5lc3RlZENoaWxkcmVuVG9Qcm9wcyhjaGlsZCwgbmVzdGVkQ2hpbGRyZW4pIHtcbiAgICBpZiAoIW5lc3RlZENoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3dpdGNoIChjaGlsZC50eXBlKSB7XG4gICAgICBjYXNlIFwic2NyaXB0XCIgLyogU0NSSVBUICovOlxuICAgICAgY2FzZSBcIm5vc2NyaXB0XCIgLyogTk9TQ1JJUFQgKi86XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW5uZXJIVE1MOiBuZXN0ZWRDaGlsZHJlblxuICAgICAgICB9O1xuICAgICAgY2FzZSBcInN0eWxlXCIgLyogU1RZTEUgKi86XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY3NzVGV4dDogbmVzdGVkQ2hpbGRyZW5cbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgPCR7Y2hpbGQudHlwZX0gLz4gZWxlbWVudHMgYXJlIHNlbGYtY2xvc2luZyBhbmQgY2FuIG5vdCBjb250YWluIGNoaWxkcmVuLiBSZWZlciB0byBvdXIgQVBJIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZmxhdHRlbkFycmF5VHlwZUNoaWxkcmVuKGNoaWxkLCBhcnJheVR5cGVDaGlsZHJlbiwgbmV3Q2hpbGRQcm9wcywgbmVzdGVkQ2hpbGRyZW4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uYXJyYXlUeXBlQ2hpbGRyZW4sXG4gICAgICBbY2hpbGQudHlwZV06IFtcbiAgICAgICAgLi4uYXJyYXlUeXBlQ2hpbGRyZW5bY2hpbGQudHlwZV0gfHwgW10sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5uZXdDaGlsZFByb3BzLFxuICAgICAgICAgIC4uLnRoaXMubWFwTmVzdGVkQ2hpbGRyZW5Ub1Byb3BzKGNoaWxkLCBuZXN0ZWRDaGlsZHJlbilcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbiAgbWFwT2JqZWN0VHlwZUNoaWxkcmVuKGNoaWxkLCBuZXdQcm9wcywgbmV3Q2hpbGRQcm9wcywgbmVzdGVkQ2hpbGRyZW4pIHtcbiAgICBzd2l0Y2ggKGNoaWxkLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJ0aXRsZVwiIC8qIFRJVExFICovOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLm5ld1Byb3BzLFxuICAgICAgICAgIFtjaGlsZC50eXBlXTogbmVzdGVkQ2hpbGRyZW4sXG4gICAgICAgICAgdGl0bGVBdHRyaWJ1dGVzOiB7IC4uLm5ld0NoaWxkUHJvcHMgfVxuICAgICAgICB9O1xuICAgICAgY2FzZSBcImJvZHlcIiAvKiBCT0RZICovOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLm5ld1Byb3BzLFxuICAgICAgICAgIGJvZHlBdHRyaWJ1dGVzOiB7IC4uLm5ld0NoaWxkUHJvcHMgfVxuICAgICAgICB9O1xuICAgICAgY2FzZSBcImh0bWxcIiAvKiBIVE1MICovOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLm5ld1Byb3BzLFxuICAgICAgICAgIGh0bWxBdHRyaWJ1dGVzOiB7IC4uLm5ld0NoaWxkUHJvcHMgfVxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5uZXdQcm9wcyxcbiAgICAgICAgICBbY2hpbGQudHlwZV06IHsgLi4ubmV3Q2hpbGRQcm9wcyB9XG4gICAgICAgIH07XG4gICAgfVxuICB9XG4gIG1hcEFycmF5VHlwZUNoaWxkcmVuVG9Qcm9wcyhhcnJheVR5cGVDaGlsZHJlbiwgbmV3UHJvcHMpIHtcbiAgICBsZXQgbmV3RmxhdHRlbmVkUHJvcHMgPSB7IC4uLm5ld1Byb3BzIH07XG4gICAgT2JqZWN0LmtleXMoYXJyYXlUeXBlQ2hpbGRyZW4pLmZvckVhY2goKGFycmF5Q2hpbGROYW1lKSA9PiB7XG4gICAgICBuZXdGbGF0dGVuZWRQcm9wcyA9IHtcbiAgICAgICAgLi4ubmV3RmxhdHRlbmVkUHJvcHMsXG4gICAgICAgIFthcnJheUNoaWxkTmFtZV06IGFycmF5VHlwZUNoaWxkcmVuW2FycmF5Q2hpbGROYW1lXVxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3RmxhdHRlbmVkUHJvcHM7XG4gIH1cbiAgd2Fybk9uSW52YWxpZENoaWxkcmVuKGNoaWxkLCBuZXN0ZWRDaGlsZHJlbikge1xuICAgIGludmFyaWFudChcbiAgICAgIFZBTElEX1RBR19OQU1FUy5zb21lKChuYW1lKSA9PiBjaGlsZC50eXBlID09PSBuYW1lKSxcbiAgICAgIHR5cGVvZiBjaGlsZC50eXBlID09PSBcImZ1bmN0aW9uXCIgPyBgWW91IG1heSBiZSBhdHRlbXB0aW5nIHRvIG5lc3QgPEhlbG1ldD4gY29tcG9uZW50cyB3aXRoaW4gZWFjaCBvdGhlciwgd2hpY2ggaXMgbm90IGFsbG93ZWQuIFJlZmVyIHRvIG91ciBBUEkgZm9yIG1vcmUgaW5mb3JtYXRpb24uYCA6IGBPbmx5IGVsZW1lbnRzIHR5cGVzICR7VkFMSURfVEFHX05BTUVTLmpvaW4oXG4gICAgICAgIFwiLCBcIlxuICAgICAgKX0gYXJlIGFsbG93ZWQuIEhlbG1ldCBkb2VzIG5vdCBzdXBwb3J0IHJlbmRlcmluZyA8JHtjaGlsZC50eXBlfT4gZWxlbWVudHMuIFJlZmVyIHRvIG91ciBBUEkgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICk7XG4gICAgaW52YXJpYW50KFxuICAgICAgIW5lc3RlZENoaWxkcmVuIHx8IHR5cGVvZiBuZXN0ZWRDaGlsZHJlbiA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KG5lc3RlZENoaWxkcmVuKSAmJiAhbmVzdGVkQ2hpbGRyZW4uc29tZSgobmVzdGVkQ2hpbGQpID0+IHR5cGVvZiBuZXN0ZWRDaGlsZCAhPT0gXCJzdHJpbmdcIiksXG4gICAgICBgSGVsbWV0IGV4cGVjdHMgYSBzdHJpbmcgYXMgYSBjaGlsZCBvZiA8JHtjaGlsZC50eXBlfT4uIERpZCB5b3UgZm9yZ2V0IHRvIHdyYXAgeW91ciBjaGlsZHJlbiBpbiBicmFjZXM/ICggPCR7Y2hpbGQudHlwZX0+e1xcYFxcYH08LyR7Y2hpbGQudHlwZX0+ICkgUmVmZXIgdG8gb3VyIEFQSSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBtYXBDaGlsZHJlblRvUHJvcHMoY2hpbGRyZW4sIG5ld1Byb3BzKSB7XG4gICAgbGV0IGFycmF5VHlwZUNoaWxkcmVuID0ge307XG4gICAgUmVhY3QzLkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCFjaGlsZCB8fCAhY2hpbGQucHJvcHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBjaGlsZHJlbjogbmVzdGVkQ2hpbGRyZW4sIC4uLmNoaWxkUHJvcHMgfSA9IGNoaWxkLnByb3BzO1xuICAgICAgY29uc3QgbmV3Q2hpbGRQcm9wcyA9IE9iamVjdC5rZXlzKGNoaWxkUHJvcHMpLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcbiAgICAgICAgb2JqW0hUTUxfVEFHX01BUFtrZXldIHx8IGtleV0gPSBjaGlsZFByb3BzW2tleV07XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9LCB7fSk7XG4gICAgICBsZXQgeyB0eXBlIH0gPSBjaGlsZDtcbiAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgICB0eXBlID0gdHlwZS50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53YXJuT25JbnZhbGlkQ2hpbGRyZW4oY2hpbGQsIG5lc3RlZENoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwiU3ltYm9sKHJlYWN0LmZyYWdtZW50KVwiIC8qIEZSQUdNRU5UICovOlxuICAgICAgICAgIG5ld1Byb3BzID0gdGhpcy5tYXBDaGlsZHJlblRvUHJvcHMobmVzdGVkQ2hpbGRyZW4sIG5ld1Byb3BzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImxpbmtcIiAvKiBMSU5LICovOlxuICAgICAgICBjYXNlIFwibWV0YVwiIC8qIE1FVEEgKi86XG4gICAgICAgIGNhc2UgXCJub3NjcmlwdFwiIC8qIE5PU0NSSVBUICovOlxuICAgICAgICBjYXNlIFwic2NyaXB0XCIgLyogU0NSSVBUICovOlxuICAgICAgICBjYXNlIFwic3R5bGVcIiAvKiBTVFlMRSAqLzpcbiAgICAgICAgICBhcnJheVR5cGVDaGlsZHJlbiA9IHRoaXMuZmxhdHRlbkFycmF5VHlwZUNoaWxkcmVuKFxuICAgICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgICBhcnJheVR5cGVDaGlsZHJlbixcbiAgICAgICAgICAgIG5ld0NoaWxkUHJvcHMsXG4gICAgICAgICAgICBuZXN0ZWRDaGlsZHJlblxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgbmV3UHJvcHMgPSB0aGlzLm1hcE9iamVjdFR5cGVDaGlsZHJlbihjaGlsZCwgbmV3UHJvcHMsIG5ld0NoaWxkUHJvcHMsIG5lc3RlZENoaWxkcmVuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5tYXBBcnJheVR5cGVDaGlsZHJlblRvUHJvcHMoYXJyYXlUeXBlQ2hpbGRyZW4sIG5ld1Byb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG5ld1Byb3BzID0geyAuLi5wcm9wcyB9O1xuICAgIGxldCB7IGhlbG1ldERhdGEgfSA9IHByb3BzO1xuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgbmV3UHJvcHMgPSB0aGlzLm1hcENoaWxkcmVuVG9Qcm9wcyhjaGlsZHJlbiwgbmV3UHJvcHMpO1xuICAgIH1cbiAgICBpZiAoaGVsbWV0RGF0YSAmJiAhKGhlbG1ldERhdGEgaW5zdGFuY2VvZiBIZWxtZXREYXRhKSkge1xuICAgICAgY29uc3QgZGF0YSA9IGhlbG1ldERhdGE7XG4gICAgICBoZWxtZXREYXRhID0gbmV3IEhlbG1ldERhdGEoZGF0YS5jb250ZXh0LCB0cnVlKTtcbiAgICAgIGRlbGV0ZSBuZXdQcm9wcy5oZWxtZXREYXRhO1xuICAgIH1cbiAgICByZXR1cm4gaGVsbWV0RGF0YSA/IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDMuY3JlYXRlRWxlbWVudChIZWxtZXREaXNwYXRjaGVyLCB7IC4uLm5ld1Byb3BzLCBjb250ZXh0OiBoZWxtZXREYXRhLnZhbHVlIH0pIDogLyogQF9fUFVSRV9fICovIFJlYWN0My5jcmVhdGVFbGVtZW50KENvbnRleHQuQ29uc3VtZXIsIG51bGwsIChjb250ZXh0KSA9PiAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoSGVsbWV0RGlzcGF0Y2hlciwgeyAuLi5uZXdQcm9wcywgY29udGV4dCB9KSk7XG4gIH1cbn07XG5leHBvcnQge1xuICBIZWxtZXQsXG4gIEhlbG1ldERhdGEsXG4gIEhlbG1ldFByb3ZpZGVyXG59O1xuIiwiLy9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQiwgY29tcGFyZSwgY29tcGFyZUNvbnRleHQpIHtcbiAgdmFyIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIG9iakEsIG9iakIpIDogdm9pZCAwO1xuXG4gIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgIHJldHVybiAhIXJldDtcbiAgfVxuXG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgIW9iakEgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG5cbiAgICBpZiAoIWJIYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlQSA9IG9iakFba2V5XTtcbiAgICB2YXIgdmFsdWVCID0gb2JqQltrZXldO1xuXG4gICAgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgdmFsdWVBLCB2YWx1ZUIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICBpZiAocmV0ID09PSBmYWxzZSB8fCAocmV0ID09PSB2b2lkIDAgJiYgdmFsdWVBICE9PSB2YWx1ZUIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9