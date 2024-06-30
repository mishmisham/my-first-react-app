import React, { useRef, useState } from 'react';
import './handDetectionComponent.sass';
import { HandLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
import { ClientOnly } from "react-client-only";
import { getDistance } from '@/utils/getDistance.js'

const HandDetectionComponent = ({onValues}) => { 

    const [ready, setReady] = useState(false);
    const [handLandmarker, setHandLandmarker] = useState(undefined);
    const [lastVideoTime, setLastVideoTime] = useState(-1);
    const [webcamRunning, setWebcamRunning] = useState(false);

    const webcam = useRef(null);
    const canvas = useRef(null);

    const createHandLandmarker = async () => {
        // копируется при сборке из public в dist/client
        const vision = await FilesetResolver.forVisionTasks(
            "./client/wasm"
        );
        const handLandmarkerLoad = await HandLandmarker.createFromOptions(vision, {
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
        canvas.current.style.width = webcam.current.videoWidth;;
        canvas.current.style.height = webcam.current.videoHeight;
        canvas.current.width = webcam.current.videoWidth;
        canvas.current.height = webcam.current.videoHeight;

        canvasCtx.fillStyle = "#94d505";
        canvasCtx.font = "14px sans-serif";

        let startTimeMs = performance.now();
        let res = {}

        if (lastVideoTime !== webcam.current.currentTime && handLandmarker) {
            setLastVideoTime(webcam.current.currentTime)
            res = handLandmarker.detectForVideo(webcam.current, startTimeMs)
        }
        
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvas.current.width, canvas.current.height);

        if (res.landmarks) {

            onValues(res);

            const color = "#94d505";
            const lineWidth = 5;
            const canvasXPersent = webcam.current.videoWidth
            const canvasYPersent = webcam.current.videoHeight
                
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
               
                const { x, y, z, visibility } = coords;

                // minVisibility = 0
                // if (visibility > minVisibility) {
                    const realX = x * canvasXPersent;
                    const realY = y * canvasYPersent;
    
                    canvasCtx.beginPath();
                    canvasCtx.strokeStyle = color;
                    canvasCtx.lineWidth = lineWidth;
                    canvasCtx.moveTo(realX,realY);
                    canvasCtx.lineTo(realX+4, realY+4);
                    canvasCtx.stroke();
                    canvasCtx.fillText(i, realX,realY);
                // }
               
            })
          }
        }

        canvasCtx.restore();

        if (webcamRunning === true) {
            window.requestAnimationFrame(predictWebcam);
        }
    }

    const enableCam = (event) => {
        setWebcamRunning(true);
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
        navigator.mediaDevices.getUserMedia({
            video: true
        }, predictWebcam, e=>console.log(e)).then((stream) => {
            webcam.current.srcObject = stream;
            webcam.current.addEventListener("loadeddata", predictWebcam)
            setReady(true);
        });
    }

    const init = async () => {
        if (ready) {
            return
        }

        await createHandLandmarker();
        enableCam();
    }

    if (typeof window !== undefined) {
        setTimeout(() => {
            init()
        }, 1000)
    }

    return (<>
        <ClientOnly>
            <div className='hand-detection'>
                <video
                    ref={webcam}
                    autoPlay
                    playsInline
                ></video>
                <canvas ref={canvas}></canvas>
            </div>
        </ClientOnly>
        <button onClick={enableCam}>setEnabledCamera</button>
    </>);
};

export default HandDetectionComponent;
