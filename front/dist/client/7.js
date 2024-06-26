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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_client_only__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-client-only */ "./node_modules/react-client-only/index.mjs");
/* harmony import */ var _parts_modelLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/modelLoader */ "./src/pages/TestMediaPipe/parts/three/parts/modelLoader.js");
/* harmony import */ var _parts_sceneInit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/sceneInit */ "./src/pages/TestMediaPipe/parts/three/parts/sceneInit.js");
/* harmony import */ var _testWebGLComponent_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testWebGLComponent.sass */ "./src/pages/TestMediaPipe/parts/three/testWebGLComponent.sass");






const TestWebGLComponent = props => {
  const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const canvas = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const canvasWrapper = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const init = async () => {
    const {
      width,
      height
    } = canvasWrapper.current.getBoundingClientRect();
    const {
      scene,
      renderer,
      camera
    } = (0,_parts_sceneInit__WEBPACK_IMPORTED_MODULE_3__.sceneInit)({
      width,
      height,
      canvas: canvas.current
    });

    // текстура
    // const material = new THREE.MeshNormalMaterial();

    // const loader = new THREE.TextureLoader();
    // const texture = loader.load( './client/textures/stones/1.jpg' );
    // texture.needsUpdate = true;

    // const material = new THREE.MeshBasicMaterial({
    //     map: texture,
    // });

    // load model
    const stoneOne = await (0,_parts_modelLoader__WEBPACK_IMPORTED_MODULE_2__.modelLoader)('1.obj', './client/stone-models/', '1.mtl', scene);
    // stoneOne.scale.set(0.25, 0.25, 0.25)
    // x, y, z координаты
    stoneOne.position.set(0, 0, 1);
    // add texture
    // stoneOne.traverse( function ( node ) {
    //     if ( node.isMesh ) {
    //         node.material = material;
    //     }
    // });

    // scene.add(stoneOne);

    renderer.setAnimationLoop(animate);

    // animation
    function animate(time) {
      if (stoneOne) {
        stoneOne.rotation.x = time / 5000;
        stoneOne.rotation.y = time / 1000;
        stoneOne.rotation.z = time / 10000;
      }
      renderer.render(scene, camera);
    }
    setReady(true);
  };
  if (typeof window !== undefined) {
    setTimeout(() => {
      if (ready) {
        return;
      }
      init();
    }, 100);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_client_only__WEBPACK_IMPORTED_MODULE_1__.ClientOnly, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "test-web-gl-component",
    ref: canvasWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", {
    ref: canvas
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestWebGLComponent);

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/parts/modelLoader.js":
/*!******************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/parts/modelLoader.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modelLoader: () => (/* binding */ modelLoader)
/* harmony export */ });
/* harmony import */ var three_addons_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/addons/loaders/OBJLoader.js */ "./node_modules/three/examples/jsm/loaders/OBJLoader.js");
/* harmony import */ var three_addons_loaders_MTLLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/addons/loaders/MTLLoader.js */ "./node_modules/three/examples/jsm/loaders/MTLLoader.js");


const modelLoader = (filename, mtlPath, mtlFile, scene) => {
  const objLoader = new three_addons_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_0__.OBJLoader();
  const mtlLoad = new three_addons_loaders_MTLLoader_js__WEBPACK_IMPORTED_MODULE_1__.MTLLoader();
  return new Promise(resolve => {
    mtlLoad.load(mtlPath + '' + mtlFile, materials => {
      materials.preload();
      objLoader.setMaterials(materials);
      objLoader.load(mtlPath + '' + filename, object => {
        scene.add(object);
        resolve(object);
      });
    });
  });
};

/***/ }),

/***/ "./src/pages/TestMediaPipe/parts/three/parts/sceneInit.js":
/*!****************************************************************!*\
  !*** ./src/pages/TestMediaPipe/parts/three/parts/sceneInit.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sceneInit: () => (/* binding */ sceneInit)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


const sceneInit = params => {
  const {
    width,
    height,
    canvas
  } = params;
  const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, width / height, 0.01, 20);
  camera.position.z = 1;
  const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
  const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight('white', 2);
  const mainLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight('white', 5);
  mainLight.position.set(10, 10, 10);
  scene.add(ambientLight);
  scene.add(mainLight);
  const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
    antialias: true,
    canvas: canvas
  });
  renderer.setSize(width, height);
  return {
    scene,
    renderer,
    camera
    // light,
  };
};

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