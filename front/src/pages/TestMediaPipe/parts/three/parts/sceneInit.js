import * as THREE from 'three';
import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
} from 'three';


const initLights = (scene) => {
    
    const ambientLight = new AmbientLight('#e3d5c9', 2);

    const mainLight = new DirectionalLight('#f7e0e4', 5);
    mainLight.position.set(10, 10, 10);

    const hemisphereLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategrey', // dim ground color
        3, // intensity
    );

    scene.add(ambientLight);
    scene.add(mainLight);
    scene.add(hemisphereLight);

    return {
        ambientLight,
        mainLight,
        hemisphereLight
    }
}

const createCamera = (params) => {
    const { width, height } = params;
    const camera = new THREE.PerspectiveCamera( 45, width / height, 0.01, 20 );
    camera.position.z = 1;

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

    return renderer;
}

export const sceneInit = (params) => {
    const camera = createCamera(params);
    const scene = createScene();
    const lights = initLights(scene);
    const renderer = createRenderer(params)

    return {
        scene,
        renderer,
        camera,
        lights,
    }
}