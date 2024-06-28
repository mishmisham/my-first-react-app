"use strict";
(Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] = Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] || []).push([[8],{

/***/ "./src/pages/TestMediaPipe/TestMediaPipe.jsx":
/*!***************************************************!*\
  !*** ./src/pages/TestMediaPipe/TestMediaPipe.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_client_only__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-client-only */ "./node_modules/react-client-only/index.mjs");
/* harmony import */ var _parts_HandDetection_HandDetectionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/HandDetection/HandDetectionComponent */ "./src/pages/TestMediaPipe/parts/HandDetection/HandDetectionComponent.jsx");
/* harmony import */ var _parts_three_TestWebGLComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/three/TestWebGLComponent */ "./src/pages/TestMediaPipe/parts/three/TestWebGLComponent.jsx");
/* harmony import */ var _utils_getDistance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/getDistance.js */ "./src/utils/getDistance.js");





const TestMediaPipe = () => {
  const onValues = hand => {
    /*
      const maxDistance = getDistance(THUMB_CMC, PINKY_MCP);
      const catchDistance = getDistance(THUMB_TIP, INDEX_FINGER_TIP);
      console.log('max, catch', maxDistance, catchDistance)
    */
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_client_only__WEBPACK_IMPORTED_MODULE_1__.ClientOnly, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_three_TestWebGLComponent__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestMediaPipe);

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/HandDetection/HandDetectionComponent.jsx":
/*!********************************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/HandDetection/HandDetectionComponent.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handDetectionComponent_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handDetectionComponent.sass */ "./src/pages/TestMediaPipe/parts/HandDetection/handDetectionComponent.sass");
/* harmony import */ var _mediapipe_tasks_vision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mediapipe/tasks-vision */ "./node_modules/@mediapipe/tasks-vision/vision_bundle.mjs");
/* harmony import */ var react_client_only__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-client-only */ "./node_modules/react-client-only/index.mjs");
/* harmony import */ var _utils_getDistance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/getDistance.js */ "./src/utils/getDistance.js");





const HandDetectionComponent = ({
  onValues
}) => {
  const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [handLandmarker, setHandLandmarker] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const [lastVideoTime, setLastVideoTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1);
  const [webcamRunning, setWebcamRunning] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const webcam = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const canvas = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const createHandLandmarker = async () => {
    // копируется при сборке из public в dist/client
    const vision = await _mediapipe_tasks_vision__WEBPACK_IMPORTED_MODULE_2__.FilesetResolver.forVisionTasks("./client/wasm");
    const handLandmarkerLoad = await _mediapipe_tasks_vision__WEBPACK_IMPORTED_MODULE_2__.HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        // копируется при сборке из public в dist/client
        modelAssetPath: "./client/hand_landmarker.task",
        delegate: "GPU"
      },
      runningMode: "VIDEO",
      numHands: 2
    });
    setHandLandmarker(handLandmarkerLoad);
  };
  async function predictWebcam() {
    const canvasCtx = canvas.current.getContext("2d");
    canvas.current.style.width = webcam.current.videoWidth;
    ;
    canvas.current.style.height = webcam.current.videoHeight;
    canvas.current.width = webcam.current.videoWidth;
    canvas.current.height = webcam.current.videoHeight;
    canvasCtx.fillStyle = "#94d505";
    canvasCtx.font = "14px sans-serif";
    let startTimeMs = performance.now();
    let res = {};
    if (lastVideoTime !== webcam.current.currentTime) {
      setLastVideoTime(webcam.current.currentTime);
      res = handLandmarker.detectForVideo(webcam.current, startTimeMs);
    }
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    if (res.landmarks) {
      onValues(res);
      const color = "#94d505";
      const lineWidth = 5;
      const canvasXPersent = webcam.current.videoWidth;
      const canvasYPersent = webcam.current.videoHeight;
      for (const landmarks of res.landmarks) {
        /*
            0 - основание ладони
            1 - большой палец -1
            2 - большой палец -2
            3 - большой палец -3
            4 - большой палец -4
            5 - указательный палец -1
            6 - указательный палец -2
            7 - указательный палец -3
            8 - указательный палец -4
            9 - средний палец -1
            10 - средний палец -2
            11 - средний палец -3
            12 - средний палец -4
            13 - безымянный палец -1
            14 - безымянный палец -2
            15 - безымянный палец -3
            16 - безымянный палец -4
            17 - мизинец -1
            18 - мизинец -2
            19 - мизинец -3
            20 - мизинец -4
        */

        // const WRIST = landmarks[0];
        const THUMB_CMC = landmarks[1];
        // const THUMB_MCP = landmarks[2];
        // const THUMB_IP = landmarks[3];
        const THUMB_TIP = landmarks[4];
        // const INDEX_FINGER_MCP = landmarks[5];
        // const INDEX_FINGER_PIP = landmarks[6];
        // const INDEX_FINGER_DIP = landmarks[7];
        const INDEX_FINGER_TIP = landmarks[8];
        // const MIDDLE_FINGER_MCP = landmarks[9];
        // const MIDDLE_FINGER_PIP = landmarks[10];
        // const MIDDLE_FINGER_DIP = landmarks[11];
        // const MIDDLE_FINGER_TIP = landmarks[12];
        // const RING_FINGER_MCP = landmarks[13];
        // const RING_FINGER_PIP = landmarks[14];
        // const RING_FINGER_DIP = landmarks[15];
        // const RING_FINGER_TIP = landmarks[16];
        const PINKY_MCP = landmarks[17];
        // const PINKY_PIP = landmarks[18];
        // const PINKY_DIP = landmarks[19];
        // const PINKY_TIP = landmarks[20];

        landmarks.forEach((coords, i) => {
          const {
            x,
            y,
            z,
            visibility
          } = coords;

          // minVisibility = 0
          // if (visibility > minVisibility) {
          const realX = x * canvasXPersent;
          const realY = y * canvasYPersent;
          canvasCtx.beginPath();
          canvasCtx.strokeStyle = color;
          canvasCtx.lineWidth = lineWidth;
          canvasCtx.moveTo(realX, realY);
          canvasCtx.lineTo(realX + 4, realY + 4);
          canvasCtx.stroke();
          canvasCtx.fillText(i, realX, realY);
          // }
        });
      }
    }
    canvasCtx.restore();
    if (webcamRunning === true) {
      window.requestAnimationFrame(predictWebcam);
    }
  }
  const enableCam = event => {
    setWebcamRunning(true);
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    navigator.mediaDevices.getUserMedia({
      video: true
    }, predictWebcam, e => console.log(e)).then(stream => {
      webcam.current.srcObject = stream;
      webcam.current.addEventListener("loadeddata", predictWebcam);
      setReady(true);
    });
  };
  const init = async () => {
    if (ready) {
      return;
    }
    await createHandLandmarker();
    enableCam();
  };
  if (typeof window !== undefined) {
    setTimeout(() => {
      init();
    }, 1000);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_client_only__WEBPACK_IMPORTED_MODULE_3__.ClientOnly, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hand-detection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video", {
    ref: webcam,
    autoPlay: true,
    playsInline: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", {
    ref: canvas
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: enableCam
  }, "setEnabledCamera"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HandDetectionComponent);

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/TestWebGLComponent.jsx":
/*!********************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/TestWebGLComponent.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestWebGLComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/OrbitControls.js");
/* harmony import */ var _react_three_postprocessing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/postprocessing */ "../node_modules/@react-three/postprocessing/dist/EffectComposer.js");
/* harmony import */ var _react_three_postprocessing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/postprocessing */ "../node_modules/@react-three/postprocessing/dist/effects/DepthOfField.js");
/* harmony import */ var _react_three_postprocessing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/postprocessing */ "../node_modules/@react-three/postprocessing/dist/effects/Bloom.js");
/* harmony import */ var _react_three_postprocessing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/postprocessing */ "../node_modules/@react-three/postprocessing/dist/effects/Noise.js");
/* harmony import */ var _react_three_postprocessing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/postprocessing */ "../node_modules/@react-three/postprocessing/dist/effects/Vignette.js");
/* harmony import */ var _stoneOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stoneOne */ "./src/pages/TestMediaPipe/parts/three/stoneOne.js");





function TestWebGLComponent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '400px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
    camera: {
      position: [0, 0, 4.2]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_stoneOne__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__.OrbitControls, {
    enablePan: true,
    enableZoom: true,
    enableRotate: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ambientLight", {
    intensity: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_4__.EffectComposer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_5__.DepthOfField, {
    focusDistance: 0,
    focalLength: 0.02,
    bokehScale: 2,
    height: 480
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_6__.Bloom, {
    luminanceThreshold: 0,
    luminanceSmoothing: 0.9,
    height: 300
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_7__.Noise, {
    opacity: 0.02
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_8__.Vignette, {
    eskil: false,
    offset: 0.1,
    darkness: 1.1
  })))));
}

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/stoneOne.js":
/*!*********************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/stoneOne.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoneOne)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/Gltf.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }


const stonePath = './client/stone-models/1.glb';
function StoneOne(props) {
  const groupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    nodes,
    materials
  } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_1__.useGLTF)(stonePath);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("group", _extends({
    ref: groupRef
  }, props, {
    dispose: null
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mesh", {
    castShadow: true,
    receiveShadow: true,
    geometry: nodes[1].geometry,
    material: materials["Материал"]
  }));
}
_react_three_drei__WEBPACK_IMPORTED_MODULE_1__.useGLTF.preload(stonePath);

/***/ }),

/***/ "./src/utils/getDistance.js":
/*!**********************************!*\
  !*** ./src/utils/getDistance.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDistance: () => (/* binding */ getDistance)
/* harmony export */ });
/*
    расстояние по координатам
    d = √[(x2 − x1)² + (y2 − y1)²]
*/

const getDistance = (a, b) => {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/HandDetection/handDetectionComponent.sass":
/*!*********************************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/HandDetection/handDetectionComponent.sass ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=8.js.map