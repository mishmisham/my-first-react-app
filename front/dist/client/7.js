"use strict";
(Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] = Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] || []).push([[7],{

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




const TestMediaPipe = () => {
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





const HandDetectionComponent = props => {
  const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [handLandmarker, setHandLandmarker] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const [lastVideoTime, setLastVideoTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1);
  const [webcamRunning, setWebcamRunning] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let runningMode = 'VIDEO';
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
    if (runningMode === "IMAGE") {
      runningMode = "VIDEO";
      await handLandmarker.setOptions({
        runningMode: "VIDEO"
      });
    }
    let startTimeMs = performance.now();
    let res = {};
    if (lastVideoTime !== webcam.current.currentTime) {
      setLastVideoTime(webcam.current.currentTime);
      res = handLandmarker.detectForVideo(webcam.current, startTimeMs);
    }
    canvasCtx.save();

    // if (res.landmarks.length) {
    //     console.log(res)
    //     console.log(HAND_CONNECTIONS)
    // }

    canvasCtx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    if (res.landmarks) {
      const color = "#FF0000";
      const lineWidth = 20;
      const canvasXPersent = webcam.current.videoWidth;
      const canvasYPersent = webcam.current.videoHeight;
      for (const landmarks of res.landmarks) {
        // drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
        //   color: "#00FF00",
        //   lineWidth: 5
        // });
        // drawLandmarks(canvasCtx, landmarks, { color: "#FF0000", lineWidth: 2 });

        landmarks.forEach(coords => {
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
          canvasCtx.lineTo(realX + 2, realY + 2);
          canvasCtx.stroke();
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
    if (!handLandmarker) {
      console.log("Wait! objectDetector not loaded yet.");
      return;
    }
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
    }, 100);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_client_only__WEBPACK_IMPORTED_MODULE_3__.ClientOnly, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_client_only__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-client-only */ "./node_modules/react-client-only/index.mjs");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _testWebGLComponent_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testWebGLComponent.sass */ "./src/pages/TestMediaPipe/parts/three/testWebGLComponent.sass");




const TestWebGLComponent = props => {
  const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const canvas = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const init = async () => {
    const width = window.innerWidth,
      height = window.innerHeight;
    const camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(70, width / height, 0.01, 10);
    camera.position.z = 1;
    const scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();
    const geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(0.2, 0.2, 0.2);
    const material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshNormalMaterial();
    const mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);
    scene.add(mesh);
    const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setAnimationLoop(animate);
    document.body.appendChild(renderer.domElement);
    console.log(renderer.domElement);
    // animation

    function animate(time) {
      mesh.rotation.x = time / 2000;
      mesh.rotation.y = time / 1000;
      renderer.render(scene, camera);
    }
  };
  if (typeof window !== undefined) {
    setTimeout(() => {
      if (ready) {
        return;
      }
      init();
      setReady(true);
    }, 100);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_client_only__WEBPACK_IMPORTED_MODULE_1__.ClientOnly, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "test-web-gl-component"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", {
    ref: canvas
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestWebGLComponent);

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/HandDetection/handDetectionComponent.sass":
/*!*********************************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/HandDetection/handDetectionComponent.sass ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/testWebGLComponent.sass":
/*!*********************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/testWebGLComponent.sass ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=7.js.map