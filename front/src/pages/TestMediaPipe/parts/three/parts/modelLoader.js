import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

export const modelLoader = (filename, mtlFile, mtlPath) => {
    const objLoader = new OBJLoader();
    const mtlLoad =  new MTLLoader()
    return new Promise(resolve => {
        mtlLoad.load(mtlPath+''+mtlFile, (materials) => {
            materials.preload();
            objLoader.setMaterials( materials );
            objLoader.load(mtlPath+''+filename, (object) => {
                  resolve(object)
            });
        });
    });
}