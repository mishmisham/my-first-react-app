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
/* harmony import */ var _parts_CanvasMaskComponent_CanvasMaskComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/CanvasMaskComponent/CanvasMaskComponent */ "./src/pages/TestMediaPipe/parts/CanvasMaskComponent/CanvasMaskComponent.jsx");
/* harmony import */ var _utils_getDistance_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/getDistance.js */ "./src/utils/getDistance.js");






const TestMediaPipe = () => {
  const width = 472;
  const height = 354;
  const [pointers, setPointers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const getTranslatedXYZ = xyz => {
    const {
      x,
      y,
      z
    } = xyz;
    return {
      x: x * -1,
      y: y * -1,
      z: z * -1
    };
  };
  const onValues = handData => {
    /*
      const maxDistance = getDistance(THUMB_CMC, PINKY_MCP);
      const catchDistance = getDistance(THUMB_TIP, INDEX_FINGER_TIP);
      console.log('max, catch', maxDistance, catchDistance)
    */

    if (handData !== null && handData !== void 0 && handData.landmarks.length) {
      const {
        landmarks
      } = handData;
      const newPointers = [];

      // обе руки
      landmarks.forEach(hand => {
        // кончик большого пальца
        newPointers.push(getTranslatedXYZ(hand[4]));
        // кончик указательного пальца
        newPointers.push(getTranslatedXYZ(hand[8]));
      });
      setPointers(newPointers);
    } else {
      setPointers([]);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_client_only__WEBPACK_IMPORTED_MODULE_1__.ClientOnly, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_three_TestWebGLComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pointers: pointers
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_HandDetection_HandDetectionComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onValues: onValues
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestMediaPipe);

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/CanvasMaskComponent/CanvasMaskComponent.jsx":
/*!***********************************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/CanvasMaskComponent/CanvasMaskComponent.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _canvasMaskComponent_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvasMaskComponent.sass */ "./src/pages/TestMediaPipe/parts/CanvasMaskComponent/canvasMaskComponent.sass");


const CanvasMaskComponent = props => {
  const canvas = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const pointerPXHalfSize = 5;
  const drawPoints = () => {
    if (!canvas.current) {
      return;
    }
    const {
      width,
      height,
      pointers
    } = props;
    const canvasCtx = canvas.current.getContext("2d");
    canvasCtx.fillStyle = "#94d505";
    canvasCtx.strokeStyle = "#94d505";
    canvasCtx.lineWidth = 10;
    canvas.current.style.width = width;
    canvas.current.style.height = height;
    canvas.current.width = width;
    canvas.current.height = height;
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, width, height);
    if (pointers !== null && pointers !== void 0 && pointers.length) {
      pointers.forEach(pointer => {
        const {
          x,
          y
        } = pointer;
        const xPercent = x * width;
        const yPercent = y * height;
        canvasCtx.beginPath();
        canvasCtx.rect(xPercent - pointerPXHalfSize, yPercent - pointerPXHalfSize, pointerPXHalfSize * 2, pointerPXHalfSize * 2);
        canvasCtx.fill();
      });
    }
    canvasCtx.restore();
  };

  // if (typeof window !== undefined) {
  //     setTimeout(() => {
  //         init()
  //     }, 1000)
  // }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    drawPoints();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", {
    ref: canvas,
    className: "canvas-mask-component"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasMaskComponent);

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
    if (document.querySelector('[src="./client/wasm/vision_wasm_internal.js"]')) {
      return;
    }

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
    if (lastVideoTime !== webcam.current.currentTime && handLandmarker) {
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
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/rapier */ "./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js");
/* harmony import */ var leva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leva */ "./node_modules/leva/dist/leva.esm.js");
/* harmony import */ var _parts_LightsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/LightsComponent */ "./src/pages/TestMediaPipe/parts/three/parts/LightsComponent.jsx");
/* harmony import */ var _parts_EffectsComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/EffectsComponent */ "./src/pages/TestMediaPipe/parts/three/parts/EffectsComponent.jsx");
/* harmony import */ var _parts_CameraComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/CameraComponent */ "./src/pages/TestMediaPipe/parts/three/parts/CameraComponent.jsx");
/* harmony import */ var _components_fingers_FingersComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fingers/FingersComponent */ "./src/pages/TestMediaPipe/parts/three/components/fingers/FingersComponent.jsx");
/* harmony import */ var _components_rocks_RocksComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/rocks/RocksComponent */ "./src/pages/TestMediaPipe/parts/three/components/rocks/RocksComponent.jsx");
/* harmony import */ var _components_Terrain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Terrain */ "./src/pages/TestMediaPipe/parts/three/components/Terrain.jsx");
/* harmony import */ var _components_Ocean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Ocean */ "./src/pages/TestMediaPipe/parts/three/components/Ocean.jsx");













const width = 472;
const height = 354;
function TestWebGLComponent({
  pointers
}) {
  const [isMouseDown, setIsMouseDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const setMouseDown = value => {
    setIsMouseDown(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: height + 'px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_fiber__WEBPACK_IMPORTED_MODULE_10__.Canvas, {
    shadows: true,
    onMouseDown: e => setMouseDown(true),
    onMouseUp: e => setMouseDown(false),
    onMouseLeave: e => setMouseDown(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_CameraComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isMouseDown: isMouseDown,
    width: width,
    height: height
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_rapier__WEBPACK_IMPORTED_MODULE_1__.Physics, {
    gravity: [0, -10, 0],
    timeStep: 1 / 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_rocks_RocksComponent__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Ocean__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Terrain__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_fingers_FingersComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    pointers: pointers,
    width: width,
    height: height
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_LightsComponent__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_EffectsComponent__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
}

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/components/Ocean.jsx":
/*!******************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/components/Ocean.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/index-99983b2d.esm.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_objects_Water_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/objects/Water.js */ "./node_modules/three/examples/jsm/objects/Water.js");




(0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.e)({
  Water: three_examples_jsm_objects_Water_js__WEBPACK_IMPORTED_MODULE_2__.Water
});
function Ocean() {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const gl = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.A)(state => state.gl);
  const waterNormals = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.F)(three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader, "./client/images/waternormals.jpg");
  waterNormals.wrapS = waterNormals.wrapT = three__WEBPACK_IMPORTED_MODULE_3__.RepeatWrapping;
  const geom = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new three__WEBPACK_IMPORTED_MODULE_3__.PlaneGeometry(30000, 30000), []);
  const config = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    textureWidth: 512,
    textureHeight: 512,
    waterNormals,
    sunDirection: new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(),
    //   sunColor: 0xeb8934,
    waterColor: '#054040',
    distortionScale: 1,
    fog: true,
    format: gl.encoding
  }),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [waterNormals]);
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.C)((state, delta) => ref.current.material.uniforms.time.value += delta / 2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("water", {
    receiveShadow: true,
    ref: ref,
    args: [geom, config],
    "rotation-x": -Math.PI / 2,
    position: [0, 0, 0]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ocean);

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/components/Terrain.jsx":
/*!********************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/components/Terrain.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/rapier */ "./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js");



const Terrain = () => {
  const mesh = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  // Raf loop
  // useFrame(() => {
  //   mesh.current.rotation.z += 0.01;
  // });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_rapier__WEBPACK_IMPORTED_MODULE_1__.RigidBody, {
    type: "static",
    mass: 999999000
    // collider='auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("group", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mesh", {
    ref: mesh,
    position: [0, -0.35, 0],
    rotation: [-Math.PI / 2, 0, 0],
    receiveShadow: true,
    sensor: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("planeGeometry", {
    attach: "geometry",
    args: [199, 199, 199, 199]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meshPhongMaterial", {
    attach: "material",
    color: "#ac9b84",
    shininess: 3,
    flatShading: true
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Terrain);

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/components/fingers/FingersComponent.jsx":
/*!*************************************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/components/fingers/FingersComponent.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FingersComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/index-99983b2d.esm.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _parts_SphereComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/SphereComponent */ "./src/pages/TestMediaPipe/parts/three/components/fingers/parts/SphereComponent.jsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }




function FingersComponent({
  pointers,
  width,
  height
}) {
  const [fingers, setFingers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const state = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)();
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.C)(frame => {
    const {
      camera
    } = frame;
    if (!camera || !pointers.length) {
      return;
    }
    const {
      rotation
    } = camera;
    const cameraPosition = camera.position;
    const cameraDirection = camera.getWorldDirection(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3());
    const distance = 4;
    const objectPosition = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
    objectPosition.copy(cameraPosition);
    objectPosition.addScaledVector(cameraDirection, distance);
    const {
      x,
      y,
      z
    } = objectPosition;

    // console.log(objectPosition, camera)

    const items = [];
    pointers.forEach(pointer => {
      const pointerX = 4.72 * pointer.x + 2.1 + x;
      const pointerY = 3.53 * pointer.y + 1.4 + y;
      items.push({
        // position: [
        //     x, y, z
        // ]
        position: [pointerX, pointerY, pointer.z + z],
        rotation: [rotation.x, rotation.y, rotation.z]
      });
    });
    setFingers(items);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, fingers.map((props, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_SphereComponent__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    key: i
  }, props, {
    i: i
  }))));
}

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/components/fingers/parts/SphereComponent.jsx":
/*!******************************************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/components/fingers/parts/SphereComponent.jsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const SphereComponent = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mesh", _extends({
    visible: true // object gets render if true
    ,
    castShadow: true // Sets whether or not the object cats a shadow
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("sphereGeometry", {
    attach: "geometry",
    args: [0.25, 0.25, 0.25]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meshStandardMaterial", {
    attach: "material" // How the element should attach itself to its parent
    ,
    color: "#f9c80a" // The color of the material
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SphereComponent);

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/components/rocks/RocksComponent.jsx":
/*!*********************************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/components/rocks/RocksComponent.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RocksComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parts_stoneOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/stoneOne */ "./src/pages/TestMediaPipe/parts/three/components/rocks/parts/stoneOne.jsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }


function toScreenXY(position, camera, div) {
  var pos = position.clone();
  projScreenMat = new THREE.Matrix4();
  projScreenMat.multiply(camera.projectionMatrix, camera.matrixWorldInverse);
  projScreenMat.multiplyVector3(pos);
  var offset = findOffset(div);
  return {
    x: (pos.x + 1) * div.width / 2 + offset.left,
    y: (-pos.y + 1) * div.height / 2 + offset.top
  };
}
function findOffset(element) {
  var pos = new Object();
  pos.left = pos.top = 0;
  if (element.offsetParent) {
    do {
      pos.left += element.offsetLeft;
      pos.top += element.offsetTop;
    } while (element = element.offsetParent);
  }
  return pos;
}
function RocksComponent({
  camera,
  canvas
}) {
  const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const initStartRandomPositions = () => {
    if (ready) {
      return;
    }
    const sizeBases = [5, 0, 5];
    const n = 15;
    const n2 = n / 3;
    const items = [...Array(10)].map((_, i) => {
      const size = sizeBases[i % 3].toFixed();
      const x = Math.random() * n - n2;
      const y = Math.random();
      const z = Math.random() * n - n2;
      const result = {
        _id: i,
        position: [x, y, z],
        sizeMulti: size
      };

      // result.xyPosiiton = toScreenXY( result.position, camera, canvas )

      return result;
    });
    console.log(items);
    setItems(items);
    setReady(true);
  };
  initStartRandomPositions();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, items.map((props, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_stoneOne__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    key: i
  }, props, {
    i: i
  }))));
}

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/components/rocks/parts/stoneOne.jsx":
/*!*********************************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/components/rocks/parts/stoneOne.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoneOne)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/Gltf.js");
/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/rapier */ "./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }



const stonePath = './client/stone-models/1.glb';
function StoneOne(props) {
  const groupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    nodes,
    materials
  } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF)(stonePath);
  const handlePointerOver = e => {
    // console.log(e)
  };
  const handlePointerClick = e => {
    console.log(e);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_rapier__WEBPACK_IMPORTED_MODULE_1__.RigidBody, _extends({}, props, {
    type: "dynamic",
    mass: 1,
    collider: "hull",
    onPointerOver: handlePointerOver,
    onClick: handlePointerClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("group", {
    ref: groupRef,
    dispose: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mesh", {
    rotation: [-Math.PI / 2, 0, 0],
    castShadow: true,
    receiveShadow: true,
    geometry: nodes[1].geometry,
    material: materials["Материал"]
  })));
}
_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF.preload(stonePath);

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/parts/CameraComponent.jsx":
/*!***********************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/parts/CameraComponent.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CameraComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/index-99983b2d.esm.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/PerspectiveCamera.js");



function CameraComponent({
  isMouseDown,
  width,
  height
  // onUpdateCamera
}) {
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.C)(frame => {
    if (!isMouseDown) {
      return;
    }
    const {
      x,
      y
    } = frame.pointer;
    const rotationX = y / height * Math.PI * 2;
    const rotationY = x / width * Math.PI * 2;
    frame.camera.rotation.x += rotationX;
    frame.camera.rotation.y -= rotationY;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera, {
    makeDefault: true,
    position: [0, 0, 0]
  });
}

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/parts/EffectsComponent.jsx":
/*!************************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/parts/EffectsComponent.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectsComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_postprocessing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/postprocessing */ "./node_modules/@react-three/postprocessing/dist/EffectComposer.js");
/* harmony import */ var _react_three_postprocessing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/postprocessing */ "./node_modules/@react-three/postprocessing/dist/effects/Bloom.js");


function EffectsComponent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_1__.EffectComposer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_2__.Bloom, {
    luminanceThreshold: 1,
    luminanceSmoothing: 1.9,
    height: 300
  }));
}

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/parts/LightsComponent.jsx":
/*!***********************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/parts/LightsComponent.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LigtsComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/Sky.js");



function LigtsComponent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("directionalLight", {
    position: [5, 5, 5],
    castShadow: {
      visible: true,
      position: {
        x: 2,
        y: 2,
        z: 2
      },
      castShadow: true
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ambientLight", {
    intensity: 0.35
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__.Sky, {
    sunPosition: [10, 2, 10]
  }));
}

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

/***/ "./src/pages/TestMediaPipe/parts/CanvasMaskComponent/canvasMaskComponent.sass":
/*!************************************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/CanvasMaskComponent/canvasMaskComponent.sass ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
//# sourceMappingURL=7.js.map