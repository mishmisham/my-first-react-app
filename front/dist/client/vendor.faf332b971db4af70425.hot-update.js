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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLmZhZjMzMmI5NzFkYjRhZjcwNDI1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7Ozs7Ozs7OztBQzd4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvdHF1ZXN0cy9qd3QvZnJvbnQvbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9ub2RlX21vZHVsZXMvcmVhY3QtZmFzdC1jb21wYXJlL2luZGV4LmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9ub2RlX21vZHVsZXMvcmVhY3QtaGVsbWV0LWFzeW5jL2xpYi9pbmRleC5lc20uanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3RxdWVzdHMvand0L2Zyb250L25vZGVfbW9kdWxlcy9zaGFsbG93ZXF1YWwvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiLyogZ2xvYmFsIE1hcDpyZWFkb25seSwgU2V0OnJlYWRvbmx5LCBBcnJheUJ1ZmZlcjpyZWFkb25seSAqL1xuXG52YXIgaGFzRWxlbWVudFR5cGUgPSB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgaGFzTWFwID0gdHlwZW9mIE1hcCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBoYXNTZXQgPSB0eXBlb2YgU2V0ID09PSAnZnVuY3Rpb24nO1xudmFyIGhhc0FycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nICYmICEhQXJyYXlCdWZmZXIuaXNWaWV3O1xuXG4vLyBOb3RlOiBXZSAqKmRvbid0KiogbmVlZCBgZW52SGFzQmlnSW50NjRBcnJheWAgaW4gZmRlIGVzNi9pbmRleC5qc1xuXG5mdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gIC8vIFNUQVJUOiBmYXN0LWRlZXAtZXF1YWwgZXM2L2luZGV4LmpzIDMuMS4zXG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEuY29uc3RydWN0b3IgIT09IGIuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBsZW5ndGgsIGksIGtleXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBTVEFSVDogTW9kaWZpY2F0aW9uczpcbiAgICAvLyAxLiBFeHRyYSBgaGFzPFR5cGU+ICYmYCBoZWxwZXJzIGluIGluaXRpYWwgY29uZGl0aW9uIGFsbG93IGVzNiBjb2RlXG4gICAgLy8gICAgdG8gY28tZXhpc3Qgd2l0aCBlczUuXG4gICAgLy8gMi4gUmVwbGFjZSBgZm9yIG9mYCB3aXRoIGVzNSBjb21wbGlhbnQgaXRlcmF0aW9uIHVzaW5nIGBmb3JgLlxuICAgIC8vICAgIEJhc2ljYWxseSwgdGFrZTpcbiAgICAvL1xuICAgIC8vICAgIGBgYGpzXG4gICAgLy8gICAgZm9yIChpIG9mIGEuZW50cmllcygpKVxuICAgIC8vICAgICAgaWYgKCFiLmhhcyhpWzBdKSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vICAgIGBgYFxuICAgIC8vXG4gICAgLy8gICAgLi4uIGFuZCBjb252ZXJ0IHRvOlxuICAgIC8vXG4gICAgLy8gICAgYGBganNcbiAgICAvLyAgICBpdCA9IGEuZW50cmllcygpO1xuICAgIC8vICAgIHdoaWxlICghKGkgPSBpdC5uZXh0KCkpLmRvbmUpXG4gICAgLy8gICAgICBpZiAoIWIuaGFzKGkudmFsdWVbMF0pKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gICAgYGBgXG4gICAgLy9cbiAgICAvLyAgICAqKk5vdGUqKjogYGlgIGFjY2VzcyBzd2l0Y2hlcyB0byBgaS52YWx1ZWAuXG4gICAgdmFyIGl0O1xuICAgIGlmIChoYXNNYXAgJiYgKGEgaW5zdGFuY2VvZiBNYXApICYmIChiIGluc3RhbmNlb2YgTWFwKSkge1xuICAgICAgaWYgKGEuc2l6ZSAhPT0gYi5zaXplKSByZXR1cm4gZmFsc2U7XG4gICAgICBpdCA9IGEuZW50cmllcygpO1xuICAgICAgd2hpbGUgKCEoaSA9IGl0Lm5leHQoKSkuZG9uZSlcbiAgICAgICAgaWYgKCFiLmhhcyhpLnZhbHVlWzBdKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaXQgPSBhLmVudHJpZXMoKTtcbiAgICAgIHdoaWxlICghKGkgPSBpdC5uZXh0KCkpLmRvbmUpXG4gICAgICAgIGlmICghZXF1YWwoaS52YWx1ZVsxXSwgYi5nZXQoaS52YWx1ZVswXSkpKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaGFzU2V0ICYmIChhIGluc3RhbmNlb2YgU2V0KSAmJiAoYiBpbnN0YW5jZW9mIFNldCkpIHtcbiAgICAgIGlmIChhLnNpemUgIT09IGIuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaXQgPSBhLmVudHJpZXMoKTtcbiAgICAgIHdoaWxlICghKGkgPSBpdC5uZXh0KCkpLmRvbmUpXG4gICAgICAgIGlmICghYi5oYXMoaS52YWx1ZVswXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBFTkQ6IE1vZGlmaWNhdGlvbnNcblxuICAgIGlmIChoYXNBcnJheUJ1ZmZlciAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcoYSkgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KGIpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncztcbiAgICAvLyBTVEFSVDogTW9kaWZpY2F0aW9uczpcbiAgICAvLyBBcHBseSBndWFyZHMgZm9yIGBPYmplY3QuY3JlYXRlKG51bGwpYCBoYW5kbGluZy4gU2VlOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL0Zvcm1pZGFibGVMYWJzL3JlYWN0LWZhc3QtY29tcGFyZS9pc3N1ZXMvNjRcbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9lcG9iZXJlemtpbi9mYXN0LWRlZXAtZXF1YWwvaXNzdWVzLzQ5XG4gICAgaWYgKGEudmFsdWVPZiAhPT0gT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mICYmIHR5cGVvZiBhLnZhbHVlT2YgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIudmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGEudmFsdWVPZigpID09PSBiLnZhbHVlT2YoKTtcbiAgICBpZiAoYS50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAmJiB0eXBlb2YgYS50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYi50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICAgIC8vIEVORDogTW9kaWZpY2F0aW9uc1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICAvLyBFTkQ6IGZhc3QtZGVlcC1lcXVhbFxuXG4gICAgLy8gU1RBUlQ6IHJlYWN0LWZhc3QtY29tcGFyZVxuICAgIC8vIGN1c3RvbSBoYW5kbGluZyBmb3IgRE9NIGVsZW1lbnRzXG4gICAgaWYgKGhhc0VsZW1lbnRUeXBlICYmIGEgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjdXN0b20gaGFuZGxpbmcgZm9yIFJlYWN0L1ByZWFjdFxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgaWYgKChrZXlzW2ldID09PSAnX293bmVyJyB8fCBrZXlzW2ldID09PSAnX192JyB8fCBrZXlzW2ldID09PSAnX19vJykgJiYgYS4kJHR5cGVvZikge1xuICAgICAgICAvLyBSZWFjdC1zcGVjaWZpYzogYXZvaWQgdHJhdmVyc2luZyBSZWFjdCBlbGVtZW50cycgX293bmVyXG4gICAgICAgIC8vIFByZWFjdC1zcGVjaWZpYzogYXZvaWQgdHJhdmVyc2luZyBQcmVhY3QgZWxlbWVudHMnIF9fdiBhbmQgX19vXG4gICAgICAgIC8vICAgIF9fdiA9ICRfb3JpZ2luYWwgLyAkX3Zub2RlXG4gICAgICAgIC8vICAgIF9fbyA9ICRfb3duZXJcbiAgICAgICAgLy8gVGhlc2UgcHJvcGVydGllcyBjb250YWluIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIGFyZSBub3QgbmVlZGVkIHdoZW5cbiAgICAgICAgLy8gY29tcGFyaW5nIHRoZSBhY3R1YWwgZWxlbWVudHMgKGFuZCBub3QgdGhlaXIgb3duZXJzKVxuICAgICAgICAvLyAuJCR0eXBlb2YgYW5kIC5fc3RvcmUgb24ganVzdCByZWFzb25hYmxlIG1hcmtlcnMgb2YgZWxlbWVudHNcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gYWxsIG90aGVyIHByb3BlcnRpZXMgc2hvdWxkIGJlIHRyYXZlcnNlZCBhcyB1c3VhbFxuICAgICAgaWYgKCFlcXVhbChhW2tleXNbaV1dLCBiW2tleXNbaV1dKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBFTkQ6IHJlYWN0LWZhc3QtY29tcGFyZVxuXG4gICAgLy8gU1RBUlQ6IGZhc3QtZGVlcC1lcXVhbFxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgIT09IGEgJiYgYiAhPT0gYjtcbn1cbi8vIGVuZCBmYXN0LWRlZXAtZXF1YWxcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0VxdWFsKGEsIGIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZXF1YWwoYSwgYik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKCgoZXJyb3IubWVzc2FnZSB8fCAnJykubWF0Y2goL3N0YWNrfHJlY3Vyc2lvbi9pKSkpIHtcbiAgICAgIC8vIHdhcm4gb24gY2lyY3VsYXIgcmVmZXJlbmNlcywgZG9uJ3QgY3Jhc2hcbiAgICAgIC8vIGJyb3dzZXJzIGdpdmUgdGhpcyBkaWZmZXJlbnQgZXJyb3JzIG5hbWUgYW5kIG1lc3NhZ2VzOlxuICAgICAgLy8gY2hyb21lL3NhZmFyaTogXCJSYW5nZUVycm9yXCIsIFwiTWF4aW11bSBjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIlxuICAgICAgLy8gZmlyZWZveDogXCJJbnRlcm5hbEVycm9yXCIsIHRvbyBtdWNoIHJlY3Vyc2lvblwiXG4gICAgICAvLyBlZGdlOiBcIkVycm9yXCIsIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCJcbiAgICAgIGNvbnNvbGUud2FybigncmVhY3QtZmFzdC1jb21wYXJlIGNhbm5vdCBoYW5kbGUgY2lyY3VsYXIgcmVmcycpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBzb21lIG90aGVyIGVycm9yLiB3ZSBzaG91bGQgZGVmaW5pdGVseSBrbm93IGFib3V0IHRoZXNlXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCIvLyBzcmMvaW5kZXgudHN4XG5pbXBvcnQgUmVhY3QzLCB7IENvbXBvbmVudCBhcyBDb21wb25lbnQzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmFzdENvbXBhcmUgZnJvbSBcInJlYWN0LWZhc3QtY29tcGFyZVwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwiaW52YXJpYW50XCI7XG5cbi8vIHNyYy9Qcm92aWRlci50c3hcbmltcG9ydCBSZWFjdDIsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIHNyYy9zZXJ2ZXIudHNcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gc3JjL2NvbnN0YW50cy50c1xudmFyIFRBR19OQU1FUyA9IC8qIEBfX1BVUkVfXyAqLyAoKFRBR19OQU1FUzIpID0+IHtcbiAgVEFHX05BTUVTMltcIkJBU0VcIl0gPSBcImJhc2VcIjtcbiAgVEFHX05BTUVTMltcIkJPRFlcIl0gPSBcImJvZHlcIjtcbiAgVEFHX05BTUVTMltcIkhFQURcIl0gPSBcImhlYWRcIjtcbiAgVEFHX05BTUVTMltcIkhUTUxcIl0gPSBcImh0bWxcIjtcbiAgVEFHX05BTUVTMltcIkxJTktcIl0gPSBcImxpbmtcIjtcbiAgVEFHX05BTUVTMltcIk1FVEFcIl0gPSBcIm1ldGFcIjtcbiAgVEFHX05BTUVTMltcIk5PU0NSSVBUXCJdID0gXCJub3NjcmlwdFwiO1xuICBUQUdfTkFNRVMyW1wiU0NSSVBUXCJdID0gXCJzY3JpcHRcIjtcbiAgVEFHX05BTUVTMltcIlNUWUxFXCJdID0gXCJzdHlsZVwiO1xuICBUQUdfTkFNRVMyW1wiVElUTEVcIl0gPSBcInRpdGxlXCI7XG4gIFRBR19OQU1FUzJbXCJGUkFHTUVOVFwiXSA9IFwiU3ltYm9sKHJlYWN0LmZyYWdtZW50KVwiO1xuICByZXR1cm4gVEFHX05BTUVTMjtcbn0pKFRBR19OQU1FUyB8fCB7fSk7XG52YXIgU0VPX1BSSU9SSVRZX1RBR1MgPSB7XG4gIGxpbms6IHsgcmVsOiBbXCJhbXBodG1sXCIsIFwiY2Fub25pY2FsXCIsIFwiYWx0ZXJuYXRlXCJdIH0sXG4gIHNjcmlwdDogeyB0eXBlOiBbXCJhcHBsaWNhdGlvbi9sZCtqc29uXCJdIH0sXG4gIG1ldGE6IHtcbiAgICBjaGFyc2V0OiBcIlwiLFxuICAgIG5hbWU6IFtcImdlbmVyYXRvclwiLCBcInJvYm90c1wiLCBcImRlc2NyaXB0aW9uXCJdLFxuICAgIHByb3BlcnR5OiBbXG4gICAgICBcIm9nOnR5cGVcIixcbiAgICAgIFwib2c6dGl0bGVcIixcbiAgICAgIFwib2c6dXJsXCIsXG4gICAgICBcIm9nOmltYWdlXCIsXG4gICAgICBcIm9nOmltYWdlOmFsdFwiLFxuICAgICAgXCJvZzpkZXNjcmlwdGlvblwiLFxuICAgICAgXCJ0d2l0dGVyOnVybFwiLFxuICAgICAgXCJ0d2l0dGVyOnRpdGxlXCIsXG4gICAgICBcInR3aXR0ZXI6ZGVzY3JpcHRpb25cIixcbiAgICAgIFwidHdpdHRlcjppbWFnZVwiLFxuICAgICAgXCJ0d2l0dGVyOmltYWdlOmFsdFwiLFxuICAgICAgXCJ0d2l0dGVyOmNhcmRcIixcbiAgICAgIFwidHdpdHRlcjpzaXRlXCJcbiAgICBdXG4gIH1cbn07XG52YXIgVkFMSURfVEFHX05BTUVTID0gT2JqZWN0LnZhbHVlcyhUQUdfTkFNRVMpO1xudmFyIFJFQUNUX1RBR19NQVAgPSB7XG4gIGFjY2Vzc2tleTogXCJhY2Nlc3NLZXlcIixcbiAgY2hhcnNldDogXCJjaGFyU2V0XCIsXG4gIGNsYXNzOiBcImNsYXNzTmFtZVwiLFxuICBjb250ZW50ZWRpdGFibGU6IFwiY29udGVudEVkaXRhYmxlXCIsXG4gIGNvbnRleHRtZW51OiBcImNvbnRleHRNZW51XCIsXG4gIFwiaHR0cC1lcXVpdlwiOiBcImh0dHBFcXVpdlwiLFxuICBpdGVtcHJvcDogXCJpdGVtUHJvcFwiLFxuICB0YWJpbmRleDogXCJ0YWJJbmRleFwiXG59O1xudmFyIEhUTUxfVEFHX01BUCA9IE9iamVjdC5lbnRyaWVzKFJFQUNUX1RBR19NQVApLnJlZHVjZShcbiAgKGNhcnJ5LCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBjYXJyeVt2YWx1ZV0gPSBrZXk7XG4gICAgcmV0dXJuIGNhcnJ5O1xuICB9LFxuICB7fVxuKTtcbnZhciBIRUxNRVRfQVRUUklCVVRFID0gXCJkYXRhLXJoXCI7XG5cbi8vIHNyYy91dGlscy50c1xudmFyIEhFTE1FVF9QUk9QUyA9IHtcbiAgREVGQVVMVF9USVRMRTogXCJkZWZhdWx0VGl0bGVcIixcbiAgREVGRVI6IFwiZGVmZXJcIixcbiAgRU5DT0RFX1NQRUNJQUxfQ0hBUkFDVEVSUzogXCJlbmNvZGVTcGVjaWFsQ2hhcmFjdGVyc1wiLFxuICBPTl9DSEFOR0VfQ0xJRU5UX1NUQVRFOiBcIm9uQ2hhbmdlQ2xpZW50U3RhdGVcIixcbiAgVElUTEVfVEVNUExBVEU6IFwidGl0bGVUZW1wbGF0ZVwiLFxuICBQUklPUklUSVpFX1NFT19UQUdTOiBcInByaW9yaXRpemVTZW9UYWdzXCJcbn07XG52YXIgZ2V0SW5uZXJtb3N0UHJvcGVydHkgPSAocHJvcHNMaXN0LCBwcm9wZXJ0eSkgPT4ge1xuICBmb3IgKGxldCBpID0gcHJvcHNMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgY29uc3QgcHJvcHMgPSBwcm9wc0xpc3RbaV07XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgcHJvcGVydHkpKSB7XG4gICAgICByZXR1cm4gcHJvcHNbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG52YXIgZ2V0VGl0bGVGcm9tUHJvcHNMaXN0ID0gKHByb3BzTGlzdCkgPT4ge1xuICBsZXQgaW5uZXJtb3N0VGl0bGUgPSBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIFwidGl0bGVcIiAvKiBUSVRMRSAqLyk7XG4gIGNvbnN0IGlubmVybW9zdFRlbXBsYXRlID0gZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBIRUxNRVRfUFJPUFMuVElUTEVfVEVNUExBVEUpO1xuICBpZiAoQXJyYXkuaXNBcnJheShpbm5lcm1vc3RUaXRsZSkpIHtcbiAgICBpbm5lcm1vc3RUaXRsZSA9IGlubmVybW9zdFRpdGxlLmpvaW4oXCJcIik7XG4gIH1cbiAgaWYgKGlubmVybW9zdFRlbXBsYXRlICYmIGlubmVybW9zdFRpdGxlKSB7XG4gICAgcmV0dXJuIGlubmVybW9zdFRlbXBsYXRlLnJlcGxhY2UoLyVzL2csICgpID0+IGlubmVybW9zdFRpdGxlKTtcbiAgfVxuICBjb25zdCBpbm5lcm1vc3REZWZhdWx0VGl0bGUgPSBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIEhFTE1FVF9QUk9QUy5ERUZBVUxUX1RJVExFKTtcbiAgcmV0dXJuIGlubmVybW9zdFRpdGxlIHx8IGlubmVybW9zdERlZmF1bHRUaXRsZSB8fCB2b2lkIDA7XG59O1xudmFyIGdldE9uQ2hhbmdlQ2xpZW50U3RhdGUgPSAocHJvcHNMaXN0KSA9PiBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIEhFTE1FVF9QUk9QUy5PTl9DSEFOR0VfQ0xJRU5UX1NUQVRFKSB8fCAoKCkgPT4ge1xufSk7XG52YXIgZ2V0QXR0cmlidXRlc0Zyb21Qcm9wc0xpc3QgPSAodGFnVHlwZSwgcHJvcHNMaXN0KSA9PiBwcm9wc0xpc3QuZmlsdGVyKChwcm9wcykgPT4gdHlwZW9mIHByb3BzW3RhZ1R5cGVdICE9PSBcInVuZGVmaW5lZFwiKS5tYXAoKHByb3BzKSA9PiBwcm9wc1t0YWdUeXBlXSkucmVkdWNlKCh0YWdBdHRycywgY3VycmVudCkgPT4gKHsgLi4udGFnQXR0cnMsIC4uLmN1cnJlbnQgfSksIHt9KTtcbnZhciBnZXRCYXNlVGFnRnJvbVByb3BzTGlzdCA9IChwcmltYXJ5QXR0cmlidXRlcywgcHJvcHNMaXN0KSA9PiBwcm9wc0xpc3QuZmlsdGVyKChwcm9wcykgPT4gdHlwZW9mIHByb3BzW1wiYmFzZVwiIC8qIEJBU0UgKi9dICE9PSBcInVuZGVmaW5lZFwiKS5tYXAoKHByb3BzKSA9PiBwcm9wc1tcImJhc2VcIiAvKiBCQVNFICovXSkucmV2ZXJzZSgpLnJlZHVjZSgoaW5uZXJtb3N0QmFzZVRhZywgdGFnKSA9PiB7XG4gIGlmICghaW5uZXJtb3N0QmFzZVRhZy5sZW5ndGgpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGFnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZUtleSA9IGtleXNbaV07XG4gICAgICBjb25zdCBsb3dlckNhc2VBdHRyaWJ1dGVLZXkgPSBhdHRyaWJ1dGVLZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChwcmltYXJ5QXR0cmlidXRlcy5pbmRleE9mKGxvd2VyQ2FzZUF0dHJpYnV0ZUtleSkgIT09IC0xICYmIHRhZ1tsb3dlckNhc2VBdHRyaWJ1dGVLZXldKSB7XG4gICAgICAgIHJldHVybiBpbm5lcm1vc3RCYXNlVGFnLmNvbmNhdCh0YWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gaW5uZXJtb3N0QmFzZVRhZztcbn0sIFtdKTtcbnZhciB3YXJuID0gKG1zZykgPT4gY29uc29sZSAmJiB0eXBlb2YgY29uc29sZS53YXJuID09PSBcImZ1bmN0aW9uXCIgJiYgY29uc29sZS53YXJuKG1zZyk7XG52YXIgZ2V0VGFnc0Zyb21Qcm9wc0xpc3QgPSAodGFnTmFtZSwgcHJpbWFyeUF0dHJpYnV0ZXMsIHByb3BzTGlzdCkgPT4ge1xuICBjb25zdCBhcHByb3ZlZFNlZW5UYWdzID0ge307XG4gIHJldHVybiBwcm9wc0xpc3QuZmlsdGVyKChwcm9wcykgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BzW3RhZ05hbWVdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcHJvcHNbdGFnTmFtZV0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIGBIZWxtZXQ6ICR7dGFnTmFtZX0gc2hvdWxkIGJlIG9mIHR5cGUgXCJBcnJheVwiLiBJbnN0ZWFkIGZvdW5kIHR5cGUgXCIke3R5cGVvZiBwcm9wc1t0YWdOYW1lXX1cImBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSkubWFwKChwcm9wcykgPT4gcHJvcHNbdGFnTmFtZV0pLnJldmVyc2UoKS5yZWR1Y2UoKGFwcHJvdmVkVGFncywgaW5zdGFuY2VUYWdzKSA9PiB7XG4gICAgY29uc3QgaW5zdGFuY2VTZWVuVGFncyA9IHt9O1xuICAgIGluc3RhbmNlVGFncy5maWx0ZXIoKHRhZykgPT4ge1xuICAgICAgbGV0IHByaW1hcnlBdHRyaWJ1dGVLZXk7XG4gICAgICBjb25zdCBrZXlzMiA9IE9iamVjdC5rZXlzKHRhZyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZUtleSA9IGtleXMyW2ldO1xuICAgICAgICBjb25zdCBsb3dlckNhc2VBdHRyaWJ1dGVLZXkgPSBhdHRyaWJ1dGVLZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHByaW1hcnlBdHRyaWJ1dGVzLmluZGV4T2YobG93ZXJDYXNlQXR0cmlidXRlS2V5KSAhPT0gLTEgJiYgIShwcmltYXJ5QXR0cmlidXRlS2V5ID09PSBcInJlbFwiIC8qIFJFTCAqLyAmJiB0YWdbcHJpbWFyeUF0dHJpYnV0ZUtleV0udG9Mb3dlckNhc2UoKSA9PT0gXCJjYW5vbmljYWxcIikgJiYgIShsb3dlckNhc2VBdHRyaWJ1dGVLZXkgPT09IFwicmVsXCIgLyogUkVMICovICYmIHRhZ1tsb3dlckNhc2VBdHRyaWJ1dGVLZXldLnRvTG93ZXJDYXNlKCkgPT09IFwic3R5bGVzaGVldFwiKSkge1xuICAgICAgICAgIHByaW1hcnlBdHRyaWJ1dGVLZXkgPSBsb3dlckNhc2VBdHRyaWJ1dGVLZXk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW1hcnlBdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlS2V5KSAhPT0gLTEgJiYgKGF0dHJpYnV0ZUtleSA9PT0gXCJpbm5lckhUTUxcIiAvKiBJTk5FUl9IVE1MICovIHx8IGF0dHJpYnV0ZUtleSA9PT0gXCJjc3NUZXh0XCIgLyogQ1NTX1RFWFQgKi8gfHwgYXR0cmlidXRlS2V5ID09PSBcIml0ZW1wcm9wXCIgLyogSVRFTV9QUk9QICovKSkge1xuICAgICAgICAgIHByaW1hcnlBdHRyaWJ1dGVLZXkgPSBhdHRyaWJ1dGVLZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghcHJpbWFyeUF0dHJpYnV0ZUtleSB8fCAhdGFnW3ByaW1hcnlBdHRyaWJ1dGVLZXldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlID0gdGFnW3ByaW1hcnlBdHRyaWJ1dGVLZXldLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIWFwcHJvdmVkU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV0pIHtcbiAgICAgICAgYXBwcm92ZWRTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XSA9IHt9O1xuICAgICAgfVxuICAgICAgaWYgKCFpbnN0YW5jZVNlZW5UYWdzW3ByaW1hcnlBdHRyaWJ1dGVLZXldKSB7XG4gICAgICAgIGluc3RhbmNlU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGlmICghYXBwcm92ZWRTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XVt2YWx1ZV0pIHtcbiAgICAgICAgaW5zdGFuY2VTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XVt2YWx1ZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KS5yZXZlcnNlKCkuZm9yRWFjaCgodGFnKSA9PiBhcHByb3ZlZFRhZ3MucHVzaCh0YWcpKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoaW5zdGFuY2VTZWVuVGFncyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVLZXkgPSBrZXlzW2ldO1xuICAgICAgY29uc3QgdGFnVW5pb24gPSB7XG4gICAgICAgIC4uLmFwcHJvdmVkU2VlblRhZ3NbYXR0cmlidXRlS2V5XSxcbiAgICAgICAgLi4uaW5zdGFuY2VTZWVuVGFnc1thdHRyaWJ1dGVLZXldXG4gICAgICB9O1xuICAgICAgYXBwcm92ZWRTZWVuVGFnc1thdHRyaWJ1dGVLZXldID0gdGFnVW5pb247XG4gICAgfVxuICAgIHJldHVybiBhcHByb3ZlZFRhZ3M7XG4gIH0sIFtdKS5yZXZlcnNlKCk7XG59O1xudmFyIGdldEFueVRydWVGcm9tUHJvcHNMaXN0ID0gKHByb3BzTGlzdCwgY2hlY2tlZFRhZykgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wc0xpc3QpICYmIHByb3BzTGlzdC5sZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvcHNMaXN0Lmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgY29uc3QgcHJvcCA9IHByb3BzTGlzdFtpbmRleF07XG4gICAgICBpZiAocHJvcFtjaGVja2VkVGFnXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbnZhciByZWR1Y2VQcm9wc1RvU3RhdGUgPSAocHJvcHNMaXN0KSA9PiAoe1xuICBiYXNlVGFnOiBnZXRCYXNlVGFnRnJvbVByb3BzTGlzdChbXCJocmVmXCIgLyogSFJFRiAqL10sIHByb3BzTGlzdCksXG4gIGJvZHlBdHRyaWJ1dGVzOiBnZXRBdHRyaWJ1dGVzRnJvbVByb3BzTGlzdChcImJvZHlBdHRyaWJ1dGVzXCIgLyogQk9EWSAqLywgcHJvcHNMaXN0KSxcbiAgZGVmZXI6IGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgSEVMTUVUX1BST1BTLkRFRkVSKSxcbiAgZW5jb2RlOiBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIEhFTE1FVF9QUk9QUy5FTkNPREVfU1BFQ0lBTF9DSEFSQUNURVJTKSxcbiAgaHRtbEF0dHJpYnV0ZXM6IGdldEF0dHJpYnV0ZXNGcm9tUHJvcHNMaXN0KFwiaHRtbEF0dHJpYnV0ZXNcIiAvKiBIVE1MICovLCBwcm9wc0xpc3QpLFxuICBsaW5rVGFnczogZ2V0VGFnc0Zyb21Qcm9wc0xpc3QoXG4gICAgXCJsaW5rXCIgLyogTElOSyAqLyxcbiAgICBbXCJyZWxcIiAvKiBSRUwgKi8sIFwiaHJlZlwiIC8qIEhSRUYgKi9dLFxuICAgIHByb3BzTGlzdFxuICApLFxuICBtZXRhVGFnczogZ2V0VGFnc0Zyb21Qcm9wc0xpc3QoXG4gICAgXCJtZXRhXCIgLyogTUVUQSAqLyxcbiAgICBbXG4gICAgICBcIm5hbWVcIiAvKiBOQU1FICovLFxuICAgICAgXCJjaGFyc2V0XCIgLyogQ0hBUlNFVCAqLyxcbiAgICAgIFwiaHR0cC1lcXVpdlwiIC8qIEhUVFBFUVVJViAqLyxcbiAgICAgIFwicHJvcGVydHlcIiAvKiBQUk9QRVJUWSAqLyxcbiAgICAgIFwiaXRlbXByb3BcIiAvKiBJVEVNX1BST1AgKi9cbiAgICBdLFxuICAgIHByb3BzTGlzdFxuICApLFxuICBub3NjcmlwdFRhZ3M6IGdldFRhZ3NGcm9tUHJvcHNMaXN0KFwibm9zY3JpcHRcIiAvKiBOT1NDUklQVCAqLywgW1wiaW5uZXJIVE1MXCIgLyogSU5ORVJfSFRNTCAqL10sIHByb3BzTGlzdCksXG4gIG9uQ2hhbmdlQ2xpZW50U3RhdGU6IGdldE9uQ2hhbmdlQ2xpZW50U3RhdGUocHJvcHNMaXN0KSxcbiAgc2NyaXB0VGFnczogZ2V0VGFnc0Zyb21Qcm9wc0xpc3QoXG4gICAgXCJzY3JpcHRcIiAvKiBTQ1JJUFQgKi8sXG4gICAgW1wic3JjXCIgLyogU1JDICovLCBcImlubmVySFRNTFwiIC8qIElOTkVSX0hUTUwgKi9dLFxuICAgIHByb3BzTGlzdFxuICApLFxuICBzdHlsZVRhZ3M6IGdldFRhZ3NGcm9tUHJvcHNMaXN0KFwic3R5bGVcIiAvKiBTVFlMRSAqLywgW1wiY3NzVGV4dFwiIC8qIENTU19URVhUICovXSwgcHJvcHNMaXN0KSxcbiAgdGl0bGU6IGdldFRpdGxlRnJvbVByb3BzTGlzdChwcm9wc0xpc3QpLFxuICB0aXRsZUF0dHJpYnV0ZXM6IGdldEF0dHJpYnV0ZXNGcm9tUHJvcHNMaXN0KFwidGl0bGVBdHRyaWJ1dGVzXCIgLyogVElUTEUgKi8sIHByb3BzTGlzdCksXG4gIHByaW9yaXRpemVTZW9UYWdzOiBnZXRBbnlUcnVlRnJvbVByb3BzTGlzdChwcm9wc0xpc3QsIEhFTE1FVF9QUk9QUy5QUklPUklUSVpFX1NFT19UQUdTKVxufSk7XG52YXIgZmxhdHRlbkFycmF5ID0gKHBvc3NpYmxlQXJyYXkpID0+IEFycmF5LmlzQXJyYXkocG9zc2libGVBcnJheSkgPyBwb3NzaWJsZUFycmF5LmpvaW4oXCJcIikgOiBwb3NzaWJsZUFycmF5O1xudmFyIGNoZWNrSWZQcm9wc01hdGNoID0gKHByb3BzLCB0b01hdGNoKSA9PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0b01hdGNoW2tleXNbaV1dICYmIHRvTWF0Y2hba2V5c1tpXV0uaW5jbHVkZXMocHJvcHNba2V5c1tpXV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbnZhciBwcmlvcml0aXplciA9IChlbGVtZW50c0xpc3QsIHByb3BzVG9NYXRjaCkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50c0xpc3QpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRzTGlzdC5yZWR1Y2UoXG4gICAgICAoYWNjLCBlbGVtZW50QXR0cnMpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrSWZQcm9wc01hdGNoKGVsZW1lbnRBdHRycywgcHJvcHNUb01hdGNoKSkge1xuICAgICAgICAgIGFjYy5wcmlvcml0eS5wdXNoKGVsZW1lbnRBdHRycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWNjLmRlZmF1bHQucHVzaChlbGVtZW50QXR0cnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LFxuICAgICAgeyBwcmlvcml0eTogW10sIGRlZmF1bHQ6IFtdIH1cbiAgICApO1xuICB9XG4gIHJldHVybiB7IGRlZmF1bHQ6IGVsZW1lbnRzTGlzdCwgcHJpb3JpdHk6IFtdIH07XG59O1xudmFyIHdpdGhvdXQgPSAob2JqLCBrZXkpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5vYmosXG4gICAgW2tleV06IHZvaWQgMFxuICB9O1xufTtcblxuLy8gc3JjL3NlcnZlci50c1xudmFyIFNFTEZfQ0xPU0lOR19UQUdTID0gW1wibm9zY3JpcHRcIiAvKiBOT1NDUklQVCAqLywgXCJzY3JpcHRcIiAvKiBTQ1JJUFQgKi8sIFwic3R5bGVcIiAvKiBTVFlMRSAqL107XG52YXIgZW5jb2RlU3BlY2lhbENoYXJhY3RlcnMgPSAoc3RyLCBlbmNvZGUgPSB0cnVlKSA9PiB7XG4gIGlmIChlbmNvZGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHIpO1xuICB9XG4gIHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIikucmVwbGFjZSgvPi9nLCBcIiZndDtcIikucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIikucmVwbGFjZSgvJy9nLCBcIiYjeDI3O1wiKTtcbn07XG52YXIgZ2VuZXJhdGVFbGVtZW50QXR0cmlidXRlc0FzU3RyaW5nID0gKGF0dHJpYnV0ZXMpID0+IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLnJlZHVjZSgoc3RyLCBrZXkpID0+IHtcbiAgY29uc3QgYXR0ciA9IHR5cGVvZiBhdHRyaWJ1dGVzW2tleV0gIT09IFwidW5kZWZpbmVkXCIgPyBgJHtrZXl9PVwiJHthdHRyaWJ1dGVzW2tleV19XCJgIDogYCR7a2V5fWA7XG4gIHJldHVybiBzdHIgPyBgJHtzdHJ9ICR7YXR0cn1gIDogYXR0cjtcbn0sIFwiXCIpO1xudmFyIGdlbmVyYXRlVGl0bGVBc1N0cmluZyA9ICh0eXBlLCB0aXRsZSwgYXR0cmlidXRlcywgZW5jb2RlKSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZVN0cmluZyA9IGdlbmVyYXRlRWxlbWVudEF0dHJpYnV0ZXNBc1N0cmluZyhhdHRyaWJ1dGVzKTtcbiAgY29uc3QgZmxhdHRlbmVkVGl0bGUgPSBmbGF0dGVuQXJyYXkodGl0bGUpO1xuICByZXR1cm4gYXR0cmlidXRlU3RyaW5nID8gYDwke3R5cGV9ICR7SEVMTUVUX0FUVFJJQlVURX09XCJ0cnVlXCIgJHthdHRyaWJ1dGVTdHJpbmd9PiR7ZW5jb2RlU3BlY2lhbENoYXJhY3RlcnMoXG4gICAgZmxhdHRlbmVkVGl0bGUsXG4gICAgZW5jb2RlXG4gICl9PC8ke3R5cGV9PmAgOiBgPCR7dHlwZX0gJHtIRUxNRVRfQVRUUklCVVRFfT1cInRydWVcIj4ke2VuY29kZVNwZWNpYWxDaGFyYWN0ZXJzKFxuICAgIGZsYXR0ZW5lZFRpdGxlLFxuICAgIGVuY29kZVxuICApfTwvJHt0eXBlfT5gO1xufTtcbnZhciBnZW5lcmF0ZVRhZ3NBc1N0cmluZyA9ICh0eXBlLCB0YWdzLCBlbmNvZGUgPSB0cnVlKSA9PiB0YWdzLnJlZHVjZSgoc3RyLCB0KSA9PiB7XG4gIGNvbnN0IHRhZyA9IHQ7XG4gIGNvbnN0IGF0dHJpYnV0ZUh0bWwgPSBPYmplY3Qua2V5cyh0YWcpLmZpbHRlcihcbiAgICAoYXR0cmlidXRlKSA9PiAhKGF0dHJpYnV0ZSA9PT0gXCJpbm5lckhUTUxcIiAvKiBJTk5FUl9IVE1MICovIHx8IGF0dHJpYnV0ZSA9PT0gXCJjc3NUZXh0XCIgLyogQ1NTX1RFWFQgKi8pXG4gICkucmVkdWNlKChzdHJpbmcsIGF0dHJpYnV0ZSkgPT4ge1xuICAgIGNvbnN0IGF0dHIgPSB0eXBlb2YgdGFnW2F0dHJpYnV0ZV0gPT09IFwidW5kZWZpbmVkXCIgPyBhdHRyaWJ1dGUgOiBgJHthdHRyaWJ1dGV9PVwiJHtlbmNvZGVTcGVjaWFsQ2hhcmFjdGVycyh0YWdbYXR0cmlidXRlXSwgZW5jb2RlKX1cImA7XG4gICAgcmV0dXJuIHN0cmluZyA/IGAke3N0cmluZ30gJHthdHRyfWAgOiBhdHRyO1xuICB9LCBcIlwiKTtcbiAgY29uc3QgdGFnQ29udGVudCA9IHRhZy5pbm5lckhUTUwgfHwgdGFnLmNzc1RleHQgfHwgXCJcIjtcbiAgY29uc3QgaXNTZWxmQ2xvc2luZyA9IFNFTEZfQ0xPU0lOR19UQUdTLmluZGV4T2YodHlwZSkgPT09IC0xO1xuICByZXR1cm4gYCR7c3RyfTwke3R5cGV9ICR7SEVMTUVUX0FUVFJJQlVURX09XCJ0cnVlXCIgJHthdHRyaWJ1dGVIdG1sfSR7aXNTZWxmQ2xvc2luZyA/IGAvPmAgOiBgPiR7dGFnQ29udGVudH08LyR7dHlwZX0+YH1gO1xufSwgXCJcIik7XG52YXIgY29udmVydEVsZW1lbnRBdHRyaWJ1dGVzVG9SZWFjdFByb3BzID0gKGF0dHJpYnV0ZXMsIGluaXRQcm9wcyA9IHt9KSA9PiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gIGNvbnN0IG1hcHBlZCA9IFJFQUNUX1RBR19NQVBba2V5XTtcbiAgb2JqW21hcHBlZCB8fCBrZXldID0gYXR0cmlidXRlc1trZXldO1xuICByZXR1cm4gb2JqO1xufSwgaW5pdFByb3BzKTtcbnZhciBnZW5lcmF0ZVRpdGxlQXNSZWFjdENvbXBvbmVudCA9IChfdHlwZSwgdGl0bGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgY29uc3QgaW5pdFByb3BzID0ge1xuICAgIGtleTogdGl0bGUsXG4gICAgW0hFTE1FVF9BVFRSSUJVVEVdOiB0cnVlXG4gIH07XG4gIGNvbnN0IHByb3BzID0gY29udmVydEVsZW1lbnRBdHRyaWJ1dGVzVG9SZWFjdFByb3BzKGF0dHJpYnV0ZXMsIGluaXRQcm9wcyk7XG4gIHJldHVybiBbUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIgLyogVElUTEUgKi8sIHByb3BzLCB0aXRsZSldO1xufTtcbnZhciBnZW5lcmF0ZVRhZ3NBc1JlYWN0Q29tcG9uZW50ID0gKHR5cGUsIHRhZ3MpID0+IHRhZ3MubWFwKCh0YWcsIGkpID0+IHtcbiAgY29uc3QgbWFwcGVkVGFnID0ge1xuICAgIGtleTogaSxcbiAgICBbSEVMTUVUX0FUVFJJQlVURV06IHRydWVcbiAgfTtcbiAgT2JqZWN0LmtleXModGFnKS5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICBjb25zdCBtYXBwZWQgPSBSRUFDVF9UQUdfTUFQW2F0dHJpYnV0ZV07XG4gICAgY29uc3QgbWFwcGVkQXR0cmlidXRlID0gbWFwcGVkIHx8IGF0dHJpYnV0ZTtcbiAgICBpZiAobWFwcGVkQXR0cmlidXRlID09PSBcImlubmVySFRNTFwiIC8qIElOTkVSX0hUTUwgKi8gfHwgbWFwcGVkQXR0cmlidXRlID09PSBcImNzc1RleHRcIiAvKiBDU1NfVEVYVCAqLykge1xuICAgICAgY29uc3QgY29udGVudCA9IHRhZy5pbm5lckhUTUwgfHwgdGFnLmNzc1RleHQ7XG4gICAgICBtYXBwZWRUYWcuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPSB7IF9faHRtbDogY29udGVudCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXBwZWRUYWdbbWFwcGVkQXR0cmlidXRlXSA9IHRhZ1thdHRyaWJ1dGVdO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHR5cGUsIG1hcHBlZFRhZyk7XG59KTtcbnZhciBnZXRNZXRob2RzRm9yVGFnID0gKHR5cGUsIHRhZ3MsIGVuY29kZSA9IHRydWUpID0+IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcInRpdGxlXCIgLyogVElUTEUgKi86XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b0NvbXBvbmVudDogKCkgPT4gZ2VuZXJhdGVUaXRsZUFzUmVhY3RDb21wb25lbnQodHlwZSwgdGFncy50aXRsZSwgdGFncy50aXRsZUF0dHJpYnV0ZXMpLFxuICAgICAgICB0b1N0cmluZzogKCkgPT4gZ2VuZXJhdGVUaXRsZUFzU3RyaW5nKHR5cGUsIHRhZ3MudGl0bGUsIHRhZ3MudGl0bGVBdHRyaWJ1dGVzLCBlbmNvZGUpXG4gICAgICB9O1xuICAgIGNhc2UgXCJib2R5QXR0cmlidXRlc1wiIC8qIEJPRFkgKi86XG4gICAgY2FzZSBcImh0bWxBdHRyaWJ1dGVzXCIgLyogSFRNTCAqLzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvQ29tcG9uZW50OiAoKSA9PiBjb252ZXJ0RWxlbWVudEF0dHJpYnV0ZXNUb1JlYWN0UHJvcHModGFncyksXG4gICAgICAgIHRvU3RyaW5nOiAoKSA9PiBnZW5lcmF0ZUVsZW1lbnRBdHRyaWJ1dGVzQXNTdHJpbmcodGFncylcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvQ29tcG9uZW50OiAoKSA9PiBnZW5lcmF0ZVRhZ3NBc1JlYWN0Q29tcG9uZW50KHR5cGUsIHRhZ3MpLFxuICAgICAgICB0b1N0cmluZzogKCkgPT4gZ2VuZXJhdGVUYWdzQXNTdHJpbmcodHlwZSwgdGFncywgZW5jb2RlKVxuICAgICAgfTtcbiAgfVxufTtcbnZhciBnZXRQcmlvcml0eU1ldGhvZHMgPSAoeyBtZXRhVGFncywgbGlua1RhZ3MsIHNjcmlwdFRhZ3MsIGVuY29kZSB9KSA9PiB7XG4gIGNvbnN0IG1ldGEgPSBwcmlvcml0aXplcihtZXRhVGFncywgU0VPX1BSSU9SSVRZX1RBR1MubWV0YSk7XG4gIGNvbnN0IGxpbmsgPSBwcmlvcml0aXplcihsaW5rVGFncywgU0VPX1BSSU9SSVRZX1RBR1MubGluayk7XG4gIGNvbnN0IHNjcmlwdCA9IHByaW9yaXRpemVyKHNjcmlwdFRhZ3MsIFNFT19QUklPUklUWV9UQUdTLnNjcmlwdCk7XG4gIGNvbnN0IHByaW9yaXR5TWV0aG9kcyA9IHtcbiAgICB0b0NvbXBvbmVudDogKCkgPT4gW1xuICAgICAgLi4uZ2VuZXJhdGVUYWdzQXNSZWFjdENvbXBvbmVudChcIm1ldGFcIiAvKiBNRVRBICovLCBtZXRhLnByaW9yaXR5KSxcbiAgICAgIC4uLmdlbmVyYXRlVGFnc0FzUmVhY3RDb21wb25lbnQoXCJsaW5rXCIgLyogTElOSyAqLywgbGluay5wcmlvcml0eSksXG4gICAgICAuLi5nZW5lcmF0ZVRhZ3NBc1JlYWN0Q29tcG9uZW50KFwic2NyaXB0XCIgLyogU0NSSVBUICovLCBzY3JpcHQucHJpb3JpdHkpXG4gICAgXSxcbiAgICB0b1N0cmluZzogKCkgPT4gKFxuICAgICAgLy8gZ2VuZXJhdGUgYWxsIHRoZSB0YWdzIGFzIHN0cmluZ3MgYW5kIGNvbmNhdGVuYXRlIHRoZW1cbiAgICAgIGAke2dldE1ldGhvZHNGb3JUYWcoXCJtZXRhXCIgLyogTUVUQSAqLywgbWV0YS5wcmlvcml0eSwgZW5jb2RlKX0gJHtnZXRNZXRob2RzRm9yVGFnKFxuICAgICAgICBcImxpbmtcIiAvKiBMSU5LICovLFxuICAgICAgICBsaW5rLnByaW9yaXR5LFxuICAgICAgICBlbmNvZGVcbiAgICAgICl9ICR7Z2V0TWV0aG9kc0ZvclRhZyhcInNjcmlwdFwiIC8qIFNDUklQVCAqLywgc2NyaXB0LnByaW9yaXR5LCBlbmNvZGUpfWBcbiAgICApXG4gIH07XG4gIHJldHVybiB7XG4gICAgcHJpb3JpdHlNZXRob2RzLFxuICAgIG1ldGFUYWdzOiBtZXRhLmRlZmF1bHQsXG4gICAgbGlua1RhZ3M6IGxpbmsuZGVmYXVsdCxcbiAgICBzY3JpcHRUYWdzOiBzY3JpcHQuZGVmYXVsdFxuICB9O1xufTtcbnZhciBtYXBTdGF0ZU9uU2VydmVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBiYXNlVGFnLFxuICAgIGJvZHlBdHRyaWJ1dGVzLFxuICAgIGVuY29kZSA9IHRydWUsXG4gICAgaHRtbEF0dHJpYnV0ZXMsXG4gICAgbm9zY3JpcHRUYWdzLFxuICAgIHN0eWxlVGFncyxcbiAgICB0aXRsZSA9IFwiXCIsXG4gICAgdGl0bGVBdHRyaWJ1dGVzLFxuICAgIHByaW9yaXRpemVTZW9UYWdzXG4gIH0gPSBwcm9wcztcbiAgbGV0IHsgbGlua1RhZ3MsIG1ldGFUYWdzLCBzY3JpcHRUYWdzIH0gPSBwcm9wcztcbiAgbGV0IHByaW9yaXR5TWV0aG9kcyA9IHtcbiAgICB0b0NvbXBvbmVudDogKCkgPT4ge1xuICAgIH0sXG4gICAgdG9TdHJpbmc6ICgpID0+IFwiXCJcbiAgfTtcbiAgaWYgKHByaW9yaXRpemVTZW9UYWdzKSB7XG4gICAgKHsgcHJpb3JpdHlNZXRob2RzLCBsaW5rVGFncywgbWV0YVRhZ3MsIHNjcmlwdFRhZ3MgfSA9IGdldFByaW9yaXR5TWV0aG9kcyhwcm9wcykpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJpb3JpdHk6IHByaW9yaXR5TWV0aG9kcyxcbiAgICBiYXNlOiBnZXRNZXRob2RzRm9yVGFnKFwiYmFzZVwiIC8qIEJBU0UgKi8sIGJhc2VUYWcsIGVuY29kZSksXG4gICAgYm9keUF0dHJpYnV0ZXM6IGdldE1ldGhvZHNGb3JUYWcoXCJib2R5QXR0cmlidXRlc1wiIC8qIEJPRFkgKi8sIGJvZHlBdHRyaWJ1dGVzLCBlbmNvZGUpLFxuICAgIGh0bWxBdHRyaWJ1dGVzOiBnZXRNZXRob2RzRm9yVGFnKFwiaHRtbEF0dHJpYnV0ZXNcIiAvKiBIVE1MICovLCBodG1sQXR0cmlidXRlcywgZW5jb2RlKSxcbiAgICBsaW5rOiBnZXRNZXRob2RzRm9yVGFnKFwibGlua1wiIC8qIExJTksgKi8sIGxpbmtUYWdzLCBlbmNvZGUpLFxuICAgIG1ldGE6IGdldE1ldGhvZHNGb3JUYWcoXCJtZXRhXCIgLyogTUVUQSAqLywgbWV0YVRhZ3MsIGVuY29kZSksXG4gICAgbm9zY3JpcHQ6IGdldE1ldGhvZHNGb3JUYWcoXCJub3NjcmlwdFwiIC8qIE5PU0NSSVBUICovLCBub3NjcmlwdFRhZ3MsIGVuY29kZSksXG4gICAgc2NyaXB0OiBnZXRNZXRob2RzRm9yVGFnKFwic2NyaXB0XCIgLyogU0NSSVBUICovLCBzY3JpcHRUYWdzLCBlbmNvZGUpLFxuICAgIHN0eWxlOiBnZXRNZXRob2RzRm9yVGFnKFwic3R5bGVcIiAvKiBTVFlMRSAqLywgc3R5bGVUYWdzLCBlbmNvZGUpLFxuICAgIHRpdGxlOiBnZXRNZXRob2RzRm9yVGFnKFwidGl0bGVcIiAvKiBUSVRMRSAqLywgeyB0aXRsZSwgdGl0bGVBdHRyaWJ1dGVzIH0sIGVuY29kZSlcbiAgfTtcbn07XG52YXIgc2VydmVyX2RlZmF1bHQgPSBtYXBTdGF0ZU9uU2VydmVyO1xuXG4vLyBzcmMvSGVsbWV0RGF0YS50c1xudmFyIGluc3RhbmNlcyA9IFtdO1xudmFyIGlzRG9jdW1lbnQgPSAhISh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG52YXIgSGVsbWV0RGF0YSA9IGNsYXNzIHtcbiAgaW5zdGFuY2VzID0gW107XG4gIGNhblVzZURPTSA9IGlzRG9jdW1lbnQ7XG4gIGNvbnRleHQ7XG4gIHZhbHVlID0ge1xuICAgIHNldEhlbG1ldDogKHNlcnZlclN0YXRlKSA9PiB7XG4gICAgICB0aGlzLmNvbnRleHQuaGVsbWV0ID0gc2VydmVyU3RhdGU7XG4gICAgfSxcbiAgICBoZWxtZXRJbnN0YW5jZXM6IHtcbiAgICAgIGdldDogKCkgPT4gdGhpcy5jYW5Vc2VET00gPyBpbnN0YW5jZXMgOiB0aGlzLmluc3RhbmNlcyxcbiAgICAgIGFkZDogKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICh0aGlzLmNhblVzZURPTSA/IGluc3RhbmNlcyA6IHRoaXMuaW5zdGFuY2VzKS5wdXNoKGluc3RhbmNlKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9ICh0aGlzLmNhblVzZURPTSA/IGluc3RhbmNlcyA6IHRoaXMuaW5zdGFuY2VzKS5pbmRleE9mKGluc3RhbmNlKTtcbiAgICAgICAgKHRoaXMuY2FuVXNlRE9NID8gaW5zdGFuY2VzIDogdGhpcy5pbnN0YW5jZXMpLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW5Vc2VET00pIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuY2FuVXNlRE9NID0gY2FuVXNlRE9NIHx8IGZhbHNlO1xuICAgIGlmICghY2FuVXNlRE9NKSB7XG4gICAgICBjb250ZXh0LmhlbG1ldCA9IHNlcnZlcl9kZWZhdWx0KHtcbiAgICAgICAgYmFzZVRhZzogW10sXG4gICAgICAgIGJvZHlBdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgZW5jb2RlU3BlY2lhbENoYXJhY3RlcnM6IHRydWUsXG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgbGlua1RhZ3M6IFtdLFxuICAgICAgICBtZXRhVGFnczogW10sXG4gICAgICAgIG5vc2NyaXB0VGFnczogW10sXG4gICAgICAgIHNjcmlwdFRhZ3M6IFtdLFxuICAgICAgICBzdHlsZVRhZ3M6IFtdLFxuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgdGl0bGVBdHRyaWJ1dGVzOiB7fVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBzcmMvUHJvdmlkZXIudHN4XG52YXIgZGVmYXVsdFZhbHVlID0ge307XG52YXIgQ29udGV4dCA9IFJlYWN0Mi5jcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSk7XG52YXIgSGVsbWV0UHJvdmlkZXIgPSBjbGFzcyBfSGVsbWV0UHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY2FuVXNlRE9NID0gaXNEb2N1bWVudDtcbiAgaGVsbWV0RGF0YTtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oZWxtZXREYXRhID0gbmV3IEhlbG1ldERhdGEodGhpcy5wcm9wcy5jb250ZXh0IHx8IHt9LCBfSGVsbWV0UHJvdmlkZXIuY2FuVXNlRE9NKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDIuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB0aGlzLmhlbG1ldERhdGEudmFsdWUgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH1cbn07XG5cbi8vIHNyYy9EaXNwYXRjaGVyLnRzeFxuaW1wb3J0IHsgQ29tcG9uZW50IGFzIENvbXBvbmVudDIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSBcInNoYWxsb3dlcXVhbFwiO1xuXG4vLyBzcmMvY2xpZW50LnRzXG52YXIgdXBkYXRlVGFncyA9ICh0eXBlLCB0YWdzKSA9PiB7XG4gIGNvbnN0IGhlYWRFbGVtZW50ID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiIC8qIEhFQUQgKi8pO1xuICBjb25zdCB0YWdOb2RlcyA9IGhlYWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7dHlwZX1bJHtIRUxNRVRfQVRUUklCVVRFfV1gKTtcbiAgY29uc3Qgb2xkVGFncyA9IFtdLnNsaWNlLmNhbGwodGFnTm9kZXMpO1xuICBjb25zdCBuZXdUYWdzID0gW107XG4gIGxldCBpbmRleFRvRGVsZXRlO1xuICBpZiAodGFncyAmJiB0YWdzLmxlbmd0aCkge1xuICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIGluIHRhZykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhZywgYXR0cmlidXRlKSkge1xuICAgICAgICAgIGlmIChhdHRyaWJ1dGUgPT09IFwiaW5uZXJIVE1MXCIgLyogSU5ORVJfSFRNTCAqLykge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSB0YWcuaW5uZXJIVE1MO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSBcImNzc1RleHRcIiAvKiBDU1NfVEVYVCAqLykge1xuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgICAgICAgICAgICBuZXdFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHRhZy5jc3NUZXh0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YWcuY3NzVGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gYXR0cmlidXRlO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgdGFnW2F0dHJdID09PSBcInVuZGVmaW5lZFwiID8gXCJcIiA6IHRhZ1thdHRyXTtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoSEVMTUVUX0FUVFJJQlVURSwgXCJ0cnVlXCIpO1xuICAgICAgaWYgKG9sZFRhZ3Muc29tZSgoZXhpc3RpbmdUYWcsIGluZGV4KSA9PiB7XG4gICAgICAgIGluZGV4VG9EZWxldGUgPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQuaXNFcXVhbE5vZGUoZXhpc3RpbmdUYWcpO1xuICAgICAgfSkpIHtcbiAgICAgICAgb2xkVGFncy5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdUYWdzLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb2xkVGFncy5mb3JFYWNoKCh0YWcpID0+IHRhZy5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZCh0YWcpKTtcbiAgbmV3VGFncy5mb3JFYWNoKCh0YWcpID0+IGhlYWRFbGVtZW50LmFwcGVuZENoaWxkKHRhZykpO1xuICByZXR1cm4ge1xuICAgIG9sZFRhZ3MsXG4gICAgbmV3VGFnc1xuICB9O1xufTtcbnZhciB1cGRhdGVBdHRyaWJ1dGVzID0gKHRhZ05hbWUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgY29uc3QgZWxlbWVudFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpWzBdO1xuICBpZiAoIWVsZW1lbnRUYWcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgaGVsbWV0QXR0cmlidXRlU3RyaW5nID0gZWxlbWVudFRhZy5nZXRBdHRyaWJ1dGUoSEVMTUVUX0FUVFJJQlVURSk7XG4gIGNvbnN0IGhlbG1ldEF0dHJpYnV0ZXMgPSBoZWxtZXRBdHRyaWJ1dGVTdHJpbmcgPyBoZWxtZXRBdHRyaWJ1dGVTdHJpbmcuc3BsaXQoXCIsXCIpIDogW107XG4gIGNvbnN0IGF0dHJpYnV0ZXNUb1JlbW92ZSA9IFsuLi5oZWxtZXRBdHRyaWJ1dGVzXTtcbiAgY29uc3QgYXR0cmlidXRlS2V5cyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpO1xuICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVLZXlzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gfHwgXCJcIjtcbiAgICBpZiAoZWxlbWVudFRhZy5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSAhPT0gdmFsdWUpIHtcbiAgICAgIGVsZW1lbnRUYWcuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIH1cbiAgICBpZiAoaGVsbWV0QXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZSkgPT09IC0xKSB7XG4gICAgICBoZWxtZXRBdHRyaWJ1dGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhUb1NhdmUgPSBhdHRyaWJ1dGVzVG9SZW1vdmUuaW5kZXhPZihhdHRyaWJ1dGUpO1xuICAgIGlmIChpbmRleFRvU2F2ZSAhPT0gLTEpIHtcbiAgICAgIGF0dHJpYnV0ZXNUb1JlbW92ZS5zcGxpY2UoaW5kZXhUb1NhdmUsIDEpO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gYXR0cmlidXRlc1RvUmVtb3ZlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgZWxlbWVudFRhZy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlc1RvUmVtb3ZlW2ldKTtcbiAgfVxuICBpZiAoaGVsbWV0QXR0cmlidXRlcy5sZW5ndGggPT09IGF0dHJpYnV0ZXNUb1JlbW92ZS5sZW5ndGgpIHtcbiAgICBlbGVtZW50VGFnLnJlbW92ZUF0dHJpYnV0ZShIRUxNRVRfQVRUUklCVVRFKTtcbiAgfSBlbHNlIGlmIChlbGVtZW50VGFnLmdldEF0dHJpYnV0ZShIRUxNRVRfQVRUUklCVVRFKSAhPT0gYXR0cmlidXRlS2V5cy5qb2luKFwiLFwiKSkge1xuICAgIGVsZW1lbnRUYWcuc2V0QXR0cmlidXRlKEhFTE1FVF9BVFRSSUJVVEUsIGF0dHJpYnV0ZUtleXMuam9pbihcIixcIikpO1xuICB9XG59O1xudmFyIHVwZGF0ZVRpdGxlID0gKHRpdGxlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gIGlmICh0eXBlb2YgdGl0bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQudGl0bGUgIT09IHRpdGxlKSB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSBmbGF0dGVuQXJyYXkodGl0bGUpO1xuICB9XG4gIHVwZGF0ZUF0dHJpYnV0ZXMoXCJ0aXRsZVwiIC8qIFRJVExFICovLCBhdHRyaWJ1dGVzKTtcbn07XG52YXIgY29tbWl0VGFnQ2hhbmdlcyA9IChuZXdTdGF0ZSwgY2IpID0+IHtcbiAgY29uc3Qge1xuICAgIGJhc2VUYWcsXG4gICAgYm9keUF0dHJpYnV0ZXMsXG4gICAgaHRtbEF0dHJpYnV0ZXMsXG4gICAgbGlua1RhZ3MsXG4gICAgbWV0YVRhZ3MsXG4gICAgbm9zY3JpcHRUYWdzLFxuICAgIG9uQ2hhbmdlQ2xpZW50U3RhdGUsXG4gICAgc2NyaXB0VGFncyxcbiAgICBzdHlsZVRhZ3MsXG4gICAgdGl0bGUsXG4gICAgdGl0bGVBdHRyaWJ1dGVzXG4gIH0gPSBuZXdTdGF0ZTtcbiAgdXBkYXRlQXR0cmlidXRlcyhcImJvZHlcIiAvKiBCT0RZICovLCBib2R5QXR0cmlidXRlcyk7XG4gIHVwZGF0ZUF0dHJpYnV0ZXMoXCJodG1sXCIgLyogSFRNTCAqLywgaHRtbEF0dHJpYnV0ZXMpO1xuICB1cGRhdGVUaXRsZSh0aXRsZSwgdGl0bGVBdHRyaWJ1dGVzKTtcbiAgY29uc3QgdGFnVXBkYXRlcyA9IHtcbiAgICBiYXNlVGFnOiB1cGRhdGVUYWdzKFwiYmFzZVwiIC8qIEJBU0UgKi8sIGJhc2VUYWcpLFxuICAgIGxpbmtUYWdzOiB1cGRhdGVUYWdzKFwibGlua1wiIC8qIExJTksgKi8sIGxpbmtUYWdzKSxcbiAgICBtZXRhVGFnczogdXBkYXRlVGFncyhcIm1ldGFcIiAvKiBNRVRBICovLCBtZXRhVGFncyksXG4gICAgbm9zY3JpcHRUYWdzOiB1cGRhdGVUYWdzKFwibm9zY3JpcHRcIiAvKiBOT1NDUklQVCAqLywgbm9zY3JpcHRUYWdzKSxcbiAgICBzY3JpcHRUYWdzOiB1cGRhdGVUYWdzKFwic2NyaXB0XCIgLyogU0NSSVBUICovLCBzY3JpcHRUYWdzKSxcbiAgICBzdHlsZVRhZ3M6IHVwZGF0ZVRhZ3MoXCJzdHlsZVwiIC8qIFNUWUxFICovLCBzdHlsZVRhZ3MpXG4gIH07XG4gIGNvbnN0IGFkZGVkVGFncyA9IHt9O1xuICBjb25zdCByZW1vdmVkVGFncyA9IHt9O1xuICBPYmplY3Qua2V5cyh0YWdVcGRhdGVzKS5mb3JFYWNoKCh0YWdUeXBlKSA9PiB7XG4gICAgY29uc3QgeyBuZXdUYWdzLCBvbGRUYWdzIH0gPSB0YWdVcGRhdGVzW3RhZ1R5cGVdO1xuICAgIGlmIChuZXdUYWdzLmxlbmd0aCkge1xuICAgICAgYWRkZWRUYWdzW3RhZ1R5cGVdID0gbmV3VGFncztcbiAgICB9XG4gICAgaWYgKG9sZFRhZ3MubGVuZ3RoKSB7XG4gICAgICByZW1vdmVkVGFnc1t0YWdUeXBlXSA9IHRhZ1VwZGF0ZXNbdGFnVHlwZV0ub2xkVGFncztcbiAgICB9XG4gIH0pO1xuICBpZiAoY2IpIHtcbiAgICBjYigpO1xuICB9XG4gIG9uQ2hhbmdlQ2xpZW50U3RhdGUobmV3U3RhdGUsIGFkZGVkVGFncywgcmVtb3ZlZFRhZ3MpO1xufTtcbnZhciBfaGVsbWV0Q2FsbGJhY2sgPSBudWxsO1xudmFyIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQgPSAobmV3U3RhdGUpID0+IHtcbiAgaWYgKF9oZWxtZXRDYWxsYmFjaykge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKF9oZWxtZXRDYWxsYmFjayk7XG4gIH1cbiAgaWYgKG5ld1N0YXRlLmRlZmVyKSB7XG4gICAgX2hlbG1ldENhbGxiYWNrID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGNvbW1pdFRhZ0NoYW5nZXMobmV3U3RhdGUsICgpID0+IHtcbiAgICAgICAgX2hlbG1ldENhbGxiYWNrID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbW1pdFRhZ0NoYW5nZXMobmV3U3RhdGUpO1xuICAgIF9oZWxtZXRDYWxsYmFjayA9IG51bGw7XG4gIH1cbn07XG52YXIgY2xpZW50X2RlZmF1bHQgPSBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50O1xuXG4vLyBzcmMvRGlzcGF0Y2hlci50c3hcbnZhciBIZWxtZXREaXNwYXRjaGVyID0gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQyIHtcbiAgcmVuZGVyZWQgPSBmYWxzZTtcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgaGVsbWV0SW5zdGFuY2VzIH0gPSB0aGlzLnByb3BzLmNvbnRleHQ7XG4gICAgaGVsbWV0SW5zdGFuY2VzLnJlbW92ZSh0aGlzKTtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgfVxuICBlbWl0Q2hhbmdlKCkge1xuICAgIGNvbnN0IHsgaGVsbWV0SW5zdGFuY2VzLCBzZXRIZWxtZXQgfSA9IHRoaXMucHJvcHMuY29udGV4dDtcbiAgICBsZXQgc2VydmVyU3RhdGUgPSBudWxsO1xuICAgIGNvbnN0IHN0YXRlID0gcmVkdWNlUHJvcHNUb1N0YXRlKFxuICAgICAgaGVsbWV0SW5zdGFuY2VzLmdldCgpLm1hcCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7IC4uLmluc3RhbmNlLnByb3BzIH07XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jb250ZXh0O1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICB9KVxuICAgICk7XG4gICAgaWYgKEhlbG1ldFByb3ZpZGVyLmNhblVzZURPTSkge1xuICAgICAgY2xpZW50X2RlZmF1bHQoc3RhdGUpO1xuICAgIH0gZWxzZSBpZiAoc2VydmVyX2RlZmF1bHQpIHtcbiAgICAgIHNlcnZlclN0YXRlID0gc2VydmVyX2RlZmF1bHQoc3RhdGUpO1xuICAgIH1cbiAgICBzZXRIZWxtZXQoc2VydmVyU3RhdGUpO1xuICB9XG4gIC8vIGNvbXBvbmVudFdpbGxNb3VudCB3aWxsIGJlIGRlcHJlY2F0ZWRcbiAgLy8gZm9yIFNTUiwgaW5pdGlhbGl6ZSBvbiBmaXJzdCByZW5kZXJcbiAgLy8gY29uc3RydWN0b3IgaXMgYWxzbyB1bnNhZmUgaW4gU3RyaWN0TW9kZVxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLnJlbmRlcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZWQgPSB0cnVlO1xuICAgIGNvbnN0IHsgaGVsbWV0SW5zdGFuY2VzIH0gPSB0aGlzLnByb3BzLmNvbnRleHQ7XG4gICAgaGVsbWV0SW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbi8vIHNyYy9pbmRleC50c3hcbnZhciBIZWxtZXQgPSBjbGFzcyBleHRlbmRzIENvbXBvbmVudDMge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlZmVyOiB0cnVlLFxuICAgIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlLFxuICAgIHByaW9yaXRpemVTZW9UYWdzOiBmYWxzZVxuICB9O1xuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgcmV0dXJuICFmYXN0Q29tcGFyZSh3aXRob3V0KHRoaXMucHJvcHMsIFwiaGVsbWV0RGF0YVwiKSwgd2l0aG91dChuZXh0UHJvcHMsIFwiaGVsbWV0RGF0YVwiKSk7XG4gIH1cbiAgbWFwTmVzdGVkQ2hpbGRyZW5Ub1Byb3BzKGNoaWxkLCBuZXN0ZWRDaGlsZHJlbikge1xuICAgIGlmICghbmVzdGVkQ2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzd2l0Y2ggKGNoaWxkLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzY3JpcHRcIiAvKiBTQ1JJUFQgKi86XG4gICAgICBjYXNlIFwibm9zY3JpcHRcIiAvKiBOT1NDUklQVCAqLzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbm5lckhUTUw6IG5lc3RlZENoaWxkcmVuXG4gICAgICAgIH07XG4gICAgICBjYXNlIFwic3R5bGVcIiAvKiBTVFlMRSAqLzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjc3NUZXh0OiBuZXN0ZWRDaGlsZHJlblxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGA8JHtjaGlsZC50eXBlfSAvPiBlbGVtZW50cyBhcmUgc2VsZi1jbG9zaW5nIGFuZCBjYW4gbm90IGNvbnRhaW4gY2hpbGRyZW4uIFJlZmVyIHRvIG91ciBBUEkgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgICApO1xuICAgIH1cbiAgfVxuICBmbGF0dGVuQXJyYXlUeXBlQ2hpbGRyZW4oY2hpbGQsIGFycmF5VHlwZUNoaWxkcmVuLCBuZXdDaGlsZFByb3BzLCBuZXN0ZWRDaGlsZHJlbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5hcnJheVR5cGVDaGlsZHJlbixcbiAgICAgIFtjaGlsZC50eXBlXTogW1xuICAgICAgICAuLi5hcnJheVR5cGVDaGlsZHJlbltjaGlsZC50eXBlXSB8fCBbXSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLm5ld0NoaWxkUHJvcHMsXG4gICAgICAgICAgLi4udGhpcy5tYXBOZXN0ZWRDaGlsZHJlblRvUHJvcHMoY2hpbGQsIG5lc3RlZENoaWxkcmVuKVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuICBtYXBPYmplY3RUeXBlQ2hpbGRyZW4oY2hpbGQsIG5ld1Byb3BzLCBuZXdDaGlsZFByb3BzLCBuZXN0ZWRDaGlsZHJlbikge1xuICAgIHN3aXRjaCAoY2hpbGQudHlwZSkge1xuICAgICAgY2FzZSBcInRpdGxlXCIgLyogVElUTEUgKi86XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ubmV3UHJvcHMsXG4gICAgICAgICAgW2NoaWxkLnR5cGVdOiBuZXN0ZWRDaGlsZHJlbixcbiAgICAgICAgICB0aXRsZUF0dHJpYnV0ZXM6IHsgLi4ubmV3Q2hpbGRQcm9wcyB9XG4gICAgICAgIH07XG4gICAgICBjYXNlIFwiYm9keVwiIC8qIEJPRFkgKi86XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ubmV3UHJvcHMsXG4gICAgICAgICAgYm9keUF0dHJpYnV0ZXM6IHsgLi4ubmV3Q2hpbGRQcm9wcyB9XG4gICAgICAgIH07XG4gICAgICBjYXNlIFwiaHRtbFwiIC8qIEhUTUwgKi86XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ubmV3UHJvcHMsXG4gICAgICAgICAgaHRtbEF0dHJpYnV0ZXM6IHsgLi4ubmV3Q2hpbGRQcm9wcyB9XG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLm5ld1Byb3BzLFxuICAgICAgICAgIFtjaGlsZC50eXBlXTogeyAuLi5uZXdDaGlsZFByb3BzIH1cbiAgICAgICAgfTtcbiAgICB9XG4gIH1cbiAgbWFwQXJyYXlUeXBlQ2hpbGRyZW5Ub1Byb3BzKGFycmF5VHlwZUNoaWxkcmVuLCBuZXdQcm9wcykge1xuICAgIGxldCBuZXdGbGF0dGVuZWRQcm9wcyA9IHsgLi4ubmV3UHJvcHMgfTtcbiAgICBPYmplY3Qua2V5cyhhcnJheVR5cGVDaGlsZHJlbikuZm9yRWFjaCgoYXJyYXlDaGlsZE5hbWUpID0+IHtcbiAgICAgIG5ld0ZsYXR0ZW5lZFByb3BzID0ge1xuICAgICAgICAuLi5uZXdGbGF0dGVuZWRQcm9wcyxcbiAgICAgICAgW2FycmF5Q2hpbGROYW1lXTogYXJyYXlUeXBlQ2hpbGRyZW5bYXJyYXlDaGlsZE5hbWVdXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdGbGF0dGVuZWRQcm9wcztcbiAgfVxuICB3YXJuT25JbnZhbGlkQ2hpbGRyZW4oY2hpbGQsIG5lc3RlZENoaWxkcmVuKSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgVkFMSURfVEFHX05BTUVTLnNvbWUoKG5hbWUpID0+IGNoaWxkLnR5cGUgPT09IG5hbWUpLFxuICAgICAgdHlwZW9mIGNoaWxkLnR5cGUgPT09IFwiZnVuY3Rpb25cIiA/IGBZb3UgbWF5IGJlIGF0dGVtcHRpbmcgdG8gbmVzdCA8SGVsbWV0PiBjb21wb25lbnRzIHdpdGhpbiBlYWNoIG90aGVyLCB3aGljaCBpcyBub3QgYWxsb3dlZC4gUmVmZXIgdG8gb3VyIEFQSSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gIDogYE9ubHkgZWxlbWVudHMgdHlwZXMgJHtWQUxJRF9UQUdfTkFNRVMuam9pbihcbiAgICAgICAgXCIsIFwiXG4gICAgICApfSBhcmUgYWxsb3dlZC4gSGVsbWV0IGRvZXMgbm90IHN1cHBvcnQgcmVuZGVyaW5nIDwke2NoaWxkLnR5cGV9PiBlbGVtZW50cy4gUmVmZXIgdG8gb3VyIEFQSSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgKTtcbiAgICBpbnZhcmlhbnQoXG4gICAgICAhbmVzdGVkQ2hpbGRyZW4gfHwgdHlwZW9mIG5lc3RlZENoaWxkcmVuID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkobmVzdGVkQ2hpbGRyZW4pICYmICFuZXN0ZWRDaGlsZHJlbi5zb21lKChuZXN0ZWRDaGlsZCkgPT4gdHlwZW9mIG5lc3RlZENoaWxkICE9PSBcInN0cmluZ1wiKSxcbiAgICAgIGBIZWxtZXQgZXhwZWN0cyBhIHN0cmluZyBhcyBhIGNoaWxkIG9mIDwke2NoaWxkLnR5cGV9Pi4gRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIGNoaWxkcmVuIGluIGJyYWNlcz8gKCA8JHtjaGlsZC50eXBlfT57XFxgXFxgfTwvJHtjaGlsZC50eXBlfT4gKSBSZWZlciB0byBvdXIgQVBJIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIG1hcENoaWxkcmVuVG9Qcm9wcyhjaGlsZHJlbiwgbmV3UHJvcHMpIHtcbiAgICBsZXQgYXJyYXlUeXBlQ2hpbGRyZW4gPSB7fTtcbiAgICBSZWFjdDMuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoIWNoaWxkIHx8ICFjaGlsZC5wcm9wcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IGNoaWxkcmVuOiBuZXN0ZWRDaGlsZHJlbiwgLi4uY2hpbGRQcm9wcyB9ID0gY2hpbGQucHJvcHM7XG4gICAgICBjb25zdCBuZXdDaGlsZFByb3BzID0gT2JqZWN0LmtleXMoY2hpbGRQcm9wcykucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgICAgICBvYmpbSFRNTF9UQUdfTUFQW2tleV0gfHwga2V5XSA9IGNoaWxkUHJvcHNba2V5XTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0sIHt9KTtcbiAgICAgIGxldCB7IHR5cGUgfSA9IGNoaWxkO1xuICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgIHR5cGUgPSB0eXBlLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndhcm5PbkludmFsaWRDaGlsZHJlbihjaGlsZCwgbmVzdGVkQ2hpbGRyZW4pO1xuICAgICAgfVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJTeW1ib2wocmVhY3QuZnJhZ21lbnQpXCIgLyogRlJBR01FTlQgKi86XG4gICAgICAgICAgbmV3UHJvcHMgPSB0aGlzLm1hcENoaWxkcmVuVG9Qcm9wcyhuZXN0ZWRDaGlsZHJlbiwgbmV3UHJvcHMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibGlua1wiIC8qIExJTksgKi86XG4gICAgICAgIGNhc2UgXCJtZXRhXCIgLyogTUVUQSAqLzpcbiAgICAgICAgY2FzZSBcIm5vc2NyaXB0XCIgLyogTk9TQ1JJUFQgKi86XG4gICAgICAgIGNhc2UgXCJzY3JpcHRcIiAvKiBTQ1JJUFQgKi86XG4gICAgICAgIGNhc2UgXCJzdHlsZVwiIC8qIFNUWUxFICovOlxuICAgICAgICAgIGFycmF5VHlwZUNoaWxkcmVuID0gdGhpcy5mbGF0dGVuQXJyYXlUeXBlQ2hpbGRyZW4oXG4gICAgICAgICAgICBjaGlsZCxcbiAgICAgICAgICAgIGFycmF5VHlwZUNoaWxkcmVuLFxuICAgICAgICAgICAgbmV3Q2hpbGRQcm9wcyxcbiAgICAgICAgICAgIG5lc3RlZENoaWxkcmVuXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBuZXdQcm9wcyA9IHRoaXMubWFwT2JqZWN0VHlwZUNoaWxkcmVuKGNoaWxkLCBuZXdQcm9wcywgbmV3Q2hpbGRQcm9wcywgbmVzdGVkQ2hpbGRyZW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLm1hcEFycmF5VHlwZUNoaWxkcmVuVG9Qcm9wcyhhcnJheVR5cGVDaGlsZHJlbiwgbmV3UHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbmV3UHJvcHMgPSB7IC4uLnByb3BzIH07XG4gICAgbGV0IHsgaGVsbWV0RGF0YSB9ID0gcHJvcHM7XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBuZXdQcm9wcyA9IHRoaXMubWFwQ2hpbGRyZW5Ub1Byb3BzKGNoaWxkcmVuLCBuZXdQcm9wcyk7XG4gICAgfVxuICAgIGlmIChoZWxtZXREYXRhICYmICEoaGVsbWV0RGF0YSBpbnN0YW5jZW9mIEhlbG1ldERhdGEpKSB7XG4gICAgICBjb25zdCBkYXRhID0gaGVsbWV0RGF0YTtcbiAgICAgIGhlbG1ldERhdGEgPSBuZXcgSGVsbWV0RGF0YShkYXRhLmNvbnRleHQsIHRydWUpO1xuICAgICAgZGVsZXRlIG5ld1Byb3BzLmhlbG1ldERhdGE7XG4gICAgfVxuICAgIHJldHVybiBoZWxtZXREYXRhID8gLyogQF9fUFVSRV9fICovIFJlYWN0My5jcmVhdGVFbGVtZW50KEhlbG1ldERpc3BhdGNoZXIsIHsgLi4ubmV3UHJvcHMsIGNvbnRleHQ6IGhlbG1ldERhdGEudmFsdWUgfSkgOiAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Db25zdW1lciwgbnVsbCwgKGNvbnRleHQpID0+IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDMuY3JlYXRlRWxlbWVudChIZWxtZXREaXNwYXRjaGVyLCB7IC4uLm5ld1Byb3BzLCBjb250ZXh0IH0pKTtcbiAgfVxufTtcbmV4cG9ydCB7XG4gIEhlbG1ldCxcbiAgSGVsbWV0RGF0YSxcbiAgSGVsbWV0UHJvdmlkZXJcbn07XG4iLCIvL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCLCBjb21wYXJlLCBjb21wYXJlQ29udGV4dCkge1xuICB2YXIgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgb2JqQSwgb2JqQikgOiB2b2lkIDA7XG5cbiAgaWYgKHJldCAhPT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuICEhcmV0O1xuICB9XG5cbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gXCJvYmplY3RcIiB8fCAhb2JqQSB8fCB0eXBlb2Ygb2JqQiAhPT0gXCJvYmplY3RcIiB8fCAhb2JqQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgYkhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5iaW5kKG9iakIpO1xuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGtleXNBLmxlbmd0aDsgaWR4KyspIHtcbiAgICB2YXIga2V5ID0ga2V5c0FbaWR4XTtcblxuICAgIGlmICghYkhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVBID0gb2JqQVtrZXldO1xuICAgIHZhciB2YWx1ZUIgPSBvYmpCW2tleV07XG5cbiAgICByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCB2YWx1ZUEsIHZhbHVlQiwga2V5KSA6IHZvaWQgMDtcblxuICAgIGlmIChyZXQgPT09IGZhbHNlIHx8IChyZXQgPT09IHZvaWQgMCAmJiB2YWx1ZUEgIT09IHZhbHVlQikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=