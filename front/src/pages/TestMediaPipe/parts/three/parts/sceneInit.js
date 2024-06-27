import * as THREE from 'three';
import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const initLights = (scene) => {
    
    const mainLight = new DirectionalLight('#f7e0e4', 5);
    mainLight.position.set(10, 10, 10);

    mainLight.castShadow = true;
    const d = 20;
    mainLight.shadow.camera.left = - d;
    mainLight.shadow.camera.right = d;
    mainLight.shadow.camera.top = d;
    mainLight.shadow.camera.bottom = - d;

    mainLight.shadow.camera.near = 2;
    mainLight.shadow.camera.far = 50;

    mainLight.shadow.mapSize.x = 1024;
    mainLight.shadow.mapSize.y = 1024;


    // const ambientLight = new AmbientLight('#e3d5c9', 2);

    // const hemisphereLight = new HemisphereLight(
    //     'white', // bright sky color
    //     'darkslategrey', // dim ground color
    //     3, // intensity
    // );

    

    // scene.add(ambientLight);
    scene.add(mainLight);
    // scene.add(hemisphereLight);

    return {
        // ambientLight,
        mainLight,
        // hemisphereLight
    }
}

const createCamera = (params) => {
    const { width, height } = params;
    const camera = new THREE.PerspectiveCamera( 45, width / height, 0.01, 30 );
    camera.position.z = 2;
    camera.lookAt( 0, 0, 0 );

    return camera;
}

const createScene = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('rgb(157, 144, 133)');
    return scene;
}

const createRenderer = (params) => {
    const { width, height, canvas } = params;

    const renderer = new THREE.WebGLRenderer( { 
        antialias: true,
        canvas: canvas
    });

    renderer.setSize( width, height );
    renderer.shadowMap.enabled = true;

    return renderer;
}

export const sceneInit = (params) => {
    const camera = createCamera(params);
    const scene = createScene();
    const lights = initLights(scene);
    const renderer = createRenderer(params);



    const planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffff10
    })

    const planeGeometry = new THREE.PlaneGeometry(
        0.5,
        0.5,
        1,
        1,
    )

    const plane = new THREE.Mesh(planeGeometry, planeMaterial)

    scene.add( plane );

//     const geometry = new THREE.PlaneGeometry( 1, 1 );
// const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
// const plane = new THREE.Mesh( geometry, material );
// 

    const controls = new OrbitControls( camera, params.canvas );
			controls.target.set( 0,0, 0 );
			controls.update();

    return {
        scene,
        renderer,
        camera,
        lights,
    }
}