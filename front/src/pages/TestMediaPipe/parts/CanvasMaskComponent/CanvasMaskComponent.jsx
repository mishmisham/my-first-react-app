import React, { Suspense, useRef, useEffect } from 'react';

import './canvasMaskComponent.sass'


const CanvasMaskComponent = (props) => {

    const canvas = useRef(null);

    const pointerPXHalfSize = 5;

    const drawPoints = () => {
        if (!canvas.current) {
            return;
        }

        const {
            width, height, pointers
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

        if (pointers?.length) {
           
            pointers.forEach(pointer => {
                const {
                    x, y
                } = pointer;

                const xPercent = x * width;
                const yPercent = y * height;

                canvasCtx.beginPath();
                canvasCtx.rect(
                    xPercent - pointerPXHalfSize,
                    yPercent - pointerPXHalfSize,
                    pointerPXHalfSize * 2,
                    pointerPXHalfSize * 2
                );
                canvasCtx.fill();
            });
        }

        canvasCtx.restore();
    }

    // if (typeof window !== undefined) {
    //     setTimeout(() => {
    //         init()
    //     }, 1000)
    // }

    useEffect(() => {
        drawPoints();
    })

    return (
        <canvas ref={canvas} className='canvas-mask-component'/>
    )
}

export default CanvasMaskComponent;