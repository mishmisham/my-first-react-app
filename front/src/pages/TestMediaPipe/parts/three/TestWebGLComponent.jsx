import React, { useRef, useState } from 'react';
import { ClientOnly } from "react-client-only";
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

import './testWebGLComponent.sass';

const TestWebGLComponent = (props) => {

    const [ready, setReady] = useState(false);
    const canvas = useRef(null);
    const canvasWrapper = useRef(null);


    const init = async () => {
        const { width, height } = canvasWrapper.current.getBoundingClientRect();
        const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
        camera.position.z = 1;

        const scene = new THREE.Scene();
        // текстура
        const material = new THREE.MeshNormalMaterial();
        
        const objLoader = new OBJLoader();
        let stoneOne = null;
        // load model
        objLoader.load('./client/stone-models/1.obj', (object) => {

            // add texture
            object.traverse( function ( node ) {
                if ( node.isMesh ) node.material = material;
            } );

            // x, y, z координаты
            object.position.set(0,0,-2.15)

            stoneOne = object;
            
            scene.add(stoneOne);
            // console.log(stoneOne)
        });

        const renderer = new THREE.WebGLRenderer( { 
            antialias: true,
            canvas: canvas.current
        } );
        renderer.setSize( width, height );
        renderer.setAnimationLoop( animate );

        // animation
        function animate( time ) {
            if (stoneOne) {
                stoneOne.rotation.x = time / 5000;
                stoneOne.rotation.y = time / 1000;
            }
          
            renderer.render( scene, camera );
        }
    }

    if (typeof window !== undefined) {
        setTimeout(() => {
            if (ready) {
                return;
            }
            init()
            setReady(true)
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