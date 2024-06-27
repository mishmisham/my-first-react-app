import React, { useRef, useState } from 'react';
import { ClientOnly } from "react-client-only";

import { modelsDict } from './parts/modelsDict'
import { modelLoader } from './parts/modelLoader';
import { sceneInit } from './parts/sceneInit';

import './testWebGLComponent.sass';

const TestWebGLComponent = (props) => {

    const [ready, setReady] = useState(false);
    const canvas = useRef(null);
    const canvasWrapper = useRef(null);

    const init = async () => {
        const { width, height } = canvasWrapper.current.getBoundingClientRect();
        
        const {
            scene,
            renderer,
            camera,
            lights,
        } = sceneInit({
            width,
            height,
            canvas: canvas.current
        });

        // load model
        const stoneOne = await modelLoader(modelsDict[0].file, modelsDict[0].mtl, modelsDict[0].path);
        // масштаб
        stoneOne.scale.set(0.15, 0.15, 0.15)
        // x, y, z координаты
        stoneOne.position.set(0,0,0.5)

        scene.add(stoneOne);

        // animation
        function animate( time ) {
            if (stoneOne) {
                stoneOne.rotation.x = time / 5000;
                stoneOne.rotation.y = time / 2000;
            }
          
            renderer.render( scene, camera );
        }

        renderer.setAnimationLoop( animate );

        setReady(true);
    }

    if (typeof window !== undefined) {
        setTimeout(() => {
            if (ready) {
                return;
            }
            init()
        }, 100);
    }

    return (
    <ClientOnly>
        <div className='test-web-gl-component' ref={canvasWrapper}>
            <canvas ref={canvas}></canvas>
        </div>
    </ClientOnly>
    )
}

export default TestWebGLComponent;