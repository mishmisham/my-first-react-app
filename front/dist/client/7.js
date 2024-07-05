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

  // делаем зеркальное отражение координат
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
        const thumbTip = {
          finger: 'THUMB_TIP',
          ...getTranslatedXYZ(hand[4])
        };
        newPointers.push(thumbTip);

        // кончик указательного пальца
        const indexFingerTip = {
          finger: 'INDEX_FINGER_TIP',
          ...getTranslatedXYZ(hand[8])
        };
        newPointers.push(indexFingerTip);
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
    pointers: pointers,
    width: width,
    height: height
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
  }))));
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
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/rapier */ "./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js");
/* harmony import */ var _parts_LightsComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/LightsComponent */ "./src/pages/TestMediaPipe/parts/three/parts/LightsComponent.jsx");
/* harmony import */ var _parts_EffectsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/EffectsComponent */ "./src/pages/TestMediaPipe/parts/three/parts/EffectsComponent.jsx");
/* harmony import */ var _parts_CameraComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/CameraComponent */ "./src/pages/TestMediaPipe/parts/three/parts/CameraComponent.jsx");
/* harmony import */ var _components_fingers_FingersComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/fingers/FingersComponent */ "./src/pages/TestMediaPipe/parts/three/components/fingers/FingersComponent.jsx");
/* harmony import */ var _components_rocks_RocksComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/rocks/RocksComponent */ "./src/pages/TestMediaPipe/parts/three/components/rocks/RocksComponent.jsx");
/* harmony import */ var _components_Terrain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Terrain */ "./src/pages/TestMediaPipe/parts/three/components/Terrain.jsx");











// import Ocean from './components/Ocean'
// {/* <Ocean /> */}
function TestWebGLComponent({
  pointers,
  width,
  height
}) {
  const [isMouseDown, setIsMouseDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isKeyPressed, setIsKeyPressed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [keyCode, setKeyCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const rocksComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const getRocksScreenPositions = () => {
    rocksComponent.current.setNeedNewData(true);
  };
  const setMouseDown = value => {
    setIsMouseDown(value);
  };
  const setKeyPressed = (isPressed, value) => {
    setIsKeyPressed(isPressed);
    setKeyCode(value);
  };
  const onKeyPress = e => {
    setKeyPressed(true, e.keyCode);
  };
  const onKeyUp = e => {
    setKeyPressed(false, '');
  };
  if (typeof window !== undefined) {
    document.addEventListener('keydown', onKeyPress);
    document.addEventListener('keyup', onKeyUp);
  }
  const onGetItems = rocks => {
    console.log('rocks', rocks);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: height + 'px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.Canvas, {
    shadows: true,
    onMouseDown: e => setMouseDown(true),
    onMouseUp: e => setMouseDown(false),
    onMouseLeave: e => setMouseDown(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_CameraComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isMouseDown: isMouseDown,
    isKeyPressed: isKeyPressed,
    keyCode: keyCode,
    width: width,
    height: height,
    position: [1, 9, 12],
    rotation: [-0.7, -0.2, 0]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_rapier__WEBPACK_IMPORTED_MODULE_1__.Physics, {
    gravity: [0, -10, 0],
    timeStep: 1 / 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_rocks_RocksComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onGetItems: onGetItems,
    width: width,
    height: height,
    ref: rocksComponent
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Terrain__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_fingers_FingersComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pointers: pointers,
    distance: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_LightsComponent__WEBPACK_IMPORTED_MODULE_2__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: getRocksScreenPositions
  }, " get Rocks Screen Positions "));
}

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
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/index-99983b2d.esm.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _parts_SphereComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/SphereComponent */ "./src/pages/TestMediaPipe/parts/three/components/fingers/parts/SphereComponent.jsx");
/* harmony import */ var _parts_CylinderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/CylinderComponent */ "./src/pages/TestMediaPipe/parts/three/components/fingers/parts/CylinderComponent.jsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }





function FingersComponent({
  pointers,
  distance
}) {
  let cameraDirection = null;
  const objectPosition = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
  const euler = new three__WEBPACK_IMPORTED_MODULE_3__.Euler();
  const wordDirectionVector = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
  const forViewPortSizeVector = new three__WEBPACK_IMPORTED_MODULE_3__.Vector2();
  const [camera, setCamera] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [viewPortSize, setViewPortSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0,
    y: 0
  });
  const [absoluteXY, setAbsoluteXY] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0,
    y: 0
  });
  const [fingers, setFingers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const fingerRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const fingerStickRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const getViewportSize = camera => {
    // размеры видимой области "на заданной дистанции"
    const viewPort = camera.getViewSize(distance, forViewPortSizeVector);
    setViewPortSize(viewPort);
    // абсолютные x / y краев вьюпорта
    setAbsoluteXY({
      x: viewPort.x / 2,
      y: viewPort.y / 2
    });
  };
  const refreshPointers = () => {
    if (!camera) {
      return;
    }
    const {
      rotation,
      position
    } = camera;
    // куда смотрит камера
    cameraDirection = camera.getWorldDirection(wordDirectionVector);
    const items = [];
    pointers.forEach(pointer => {
      // плоские координаты
      const flatCoords = {
        x: viewPortSize.x * pointer.x + absoluteXY.x,
        y: viewPortSize.y * pointer.y + absoluteXY.y,
        z: pointer.z
      };
      // добавляем абсолютные координаты пальца 
      objectPosition.copy(flatCoords);
      // вращение вокруг камеры
      euler.copy(rotation);
      objectPosition.applyEuler(euler);
      // относительно камеры удаленность пальца
      const zPositioner = distance; // + pointer.z;
      // проецируем координаты перед камерой
      objectPosition.addScaledVector(cameraDirection, zPositioner);
      items.push({
        position: [objectPosition.x + position.x, objectPosition.y + position.y, objectPosition.z + position.z],
        finger: pointer.finger
      });
    });
    return items;
  };
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.C)(frame => {
    if (!camera) {
      setCamera(frame.camera);
      getViewportSize(frame.camera);
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (pointers && pointers.length !== fingers.length) {
      const items = refreshPointers();
      setFingers(items);
    }
    if (fingerRefs !== null && fingerRefs !== void 0 && fingerRefs.current.length) {
      const items = refreshPointers();
      items.forEach((item, i) => {
        if (fingerRefs.current[i]) {
          fingerRefs.current[i].position.x = item.position[0];
          fingerRefs.current[i].position.y = item.position[1];
          fingerRefs.current[i].position.z = item.position[2];
        }
        if (fingerStickRefs.current[i]) {
          fingerStickRefs.current[i].position.x = item.position[0];
          fingerStickRefs.current[i].position.y = item.position[1];
          fingerStickRefs.current[i].position.z = item.position[2];

          // console.log(fingerStickRefs.current[i])

          // fingerStickRefs.current[i].rotation.copy(camera.rotation);
          // fingerStickRefs.current[i].quaternion.copy(camera.quaternion.invert());
        }
      });
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, fingers.map((props, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_SphereComponent__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    ref: element => fingerRefs.current[i] = element,
    key: 'finger-' + i
  }, props))), fingers.map((props, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_CylinderComponent__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    ref: element => fingerStickRefs.current[i] = element,
    key: 'finger-stick-' + i
  }, props))));
}

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/components/fingers/parts/CylinderComponent.jsx":
/*!********************************************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/components/fingers/parts/CylinderComponent.jsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }


const CylinderComponent = (props, ref) => {
  const cylinderHeight = 1;
  const startWidth = 0.05;
  const endWidth = 0.1;
  const smoothness = 12;
  const globalGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(startWidth, endWidth, cylinderHeight, smoothness);
  globalGeometry.translate(0, -cylinderHeight / 2, 0);
  let color = '#fff';
  if ((props === null || props === void 0 ? void 0 : props.finger) === 'THUMB_TIP') {
    color = '#e60d0d';
  }
  if ((props === null || props === void 0 ? void 0 : props.finger) === 'INDEX_FINGER_TIP') {
    color = '#80ff00';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mesh", _extends({
    ref: ref,
    visible: true,
    geometry: globalGeometry
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meshBasicMaterial", {
    attach: "material",
    color: color,
    transparent: true,
    opacity: 0.3
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(CylinderComponent));

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


const SphereComponent = (props, ref) => {
  let color = '#fff';
  if ((props === null || props === void 0 ? void 0 : props.finger) === 'THUMB_TIP') {
    color = '#e60d0d';
  }
  if ((props === null || props === void 0 ? void 0 : props.finger) === 'INDEX_FINGER_TIP') {
    color = '#80ff00';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mesh", _extends({
    ref: ref,
    visible: true
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("sphereGeometry", {
    attach: "geometry",
    args: [0.1, 0.1, 0.1, 10]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meshStandardMaterial", {
    attach: "material",
    color: color
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(SphereComponent));

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/components/rocks/RocksComponent.jsx":
/*!*********************************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/components/rocks/RocksComponent.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/index-99983b2d.esm.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _parts_stoneOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/stoneOne */ "./src/pages/TestMediaPipe/parts/three/components/rocks/parts/stoneOne.jsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }




function get2DCoordinates(position, camera, width, height) {
  const vector = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(position.x, position.y, position.z);
  vector.project(camera);
  const x = (vector.x + 1) / 2 * width;
  const y = -(vector.y - 1) / 2 * height;
  return {
    cameraX: vector.x,
    cameraY: vector.y,
    canvasX: x,
    canvasY: y
  };
}
const RocksComponent = ({
  width,
  height,
  onGetItems
}, ref) => {
  const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [rocks, setRocks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [camera, setCamera] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [needNewData, setNeedNewData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    setNeedNewData
  }));
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
      return result;
    });
    setRocks(items);
    setReady(true);
  };
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.C)(frame => {
    if (!camera) {
      setCamera(frame.camera);
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!needNewData || !camera) {
      return;
    }
    const positionedRocks = [...rocks];
    positionedRocks.forEach(rock => {
      // 2D координаты каждого камня
      rock.xy = get2DCoordinates(rock.position, camera, width, height);
    });
    setNeedNewData(false);
    onGetItems(positionedRocks);
  });
  initStartRandomPositions();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, rocks.map((props, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_stoneOne__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    key: props._id
  }, props, {
    i: i
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(RocksComponent));

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
    // console.log('mouse over on rock', e)
  };
  const handlePointerClick = e => {
    // console.log('mouse click on rock', e)
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
  height,
  keyCode,
  isKeyPressed,
  position,
  rotation
  // onUpdateCamera
}) {
  const [camera, setCamera] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [pointer, setPointer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const refreshCameraRotation = () => {
    if (!isMouseDown) {
      return;
    }
    const {
      x,
      y
    } = pointer;
    const rotationX = y / height * Math.PI * 2;
    const rotationY = x / width * Math.PI * 2;
    camera.rotation.x += rotationX;
    camera.rotation.y -= rotationY;
  };
  const onseStepMoveValue = 0.1;
  const refreshCameraPosiiton = () => {
    if (!isKeyPressed) {
      return;
    }

    // w
    if (keyCode === 87) {
      camera.position.z -= onseStepMoveValue;
    }
    // s
    if (keyCode === 83) {
      camera.position.z += onseStepMoveValue;
    }
    // a
    if (keyCode === 65) {
      camera.position.x -= onseStepMoveValue;
    }
    // d
    if (keyCode === 68) {
      camera.position.x += onseStepMoveValue;
    }
    // q
    if (keyCode === 81) {
      const minYPos = Math.max(0, camera.position.y - onseStepMoveValue);
      camera.position.y = minYPos;
    }
    // e
    if (keyCode === 69) {
      camera.position.y += onseStepMoveValue;
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (camera) {
      refreshCameraRotation();
      refreshCameraPosiiton();
    }
  });
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.C)(frame => {
    if (!camera) {
      setCamera(frame.camera);
      setPointer(frame.pointer);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera, {
    makeDefault: true,
    position: position,
    rotation: rotation
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