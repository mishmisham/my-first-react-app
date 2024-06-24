import React, { useRef, useState } from 'react';
import './handDetectionComponent.sass';
import { HandLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
import { HAND_CONNECTIONS } from  '@mediapipe/hands';
import { ClientOnly } from "react-client-only";


const HandDetectionComponent = (props) => { 

    const [ready, setReady] = useState(false);
    const [handLandmarker, setHandLandmarker] = useState(undefined);
    const [lastVideoTime, setLastVideoTime] = useState(-1);

    const [webcamRunning, setWebcamRunning] = useState(false);

    let runningMode = 'VIDEO';

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
      
        if (runningMode === "IMAGE") {
            runningMode = "VIDEO";
            await handLandmarker.setOptions({ runningMode: "VIDEO" });
        }

        let startTimeMs = performance.now();
        let res = {}
        if (lastVideoTime !== webcam.current.currentTime) {
            setLastVideoTime(webcam.current.currentTime)
            res = handLandmarker.detectForVideo(webcam.current, startTimeMs)
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

            const canvasXPersent = webcam.current.videoWidth
            const canvasYPersent = webcam.current.videoHeight
           
          for (const landmarks of res.landmarks) {
            // drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
            //   color: "#00FF00",
            //   lineWidth: 5
            // });
            // drawLandmarks(canvasCtx, landmarks, { color: "#FF0000", lineWidth: 2 });

            landmarks.forEach(coords => {
               
                const { x, y, z, visibility } = coords;

                // minVisibility = 0
                // if (visibility > minVisibility) {
                    const realX = x * canvasXPersent;
                    const realY = y * canvasYPersent;
    
                    canvasCtx.beginPath();
                    canvasCtx.strokeStyle = color;
                    canvasCtx.lineWidth = lineWidth;
                    canvasCtx.moveTo(realX,realY);
                    canvasCtx.lineTo(realX+2, realY+2);
                    canvasCtx.stroke();
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
        if (!handLandmarker) {
            console.log("Wait! objectDetector not loaded yet.");
            return;
        }

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
        }, 100)
    }

    return (<div>

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
    </div>);
};

export default HandDetectionComponent;
