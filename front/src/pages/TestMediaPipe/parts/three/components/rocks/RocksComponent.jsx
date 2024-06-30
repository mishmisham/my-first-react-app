import React, { Suspense, useRef, useState } from 'react';

import StoneOne from './parts/stoneOne'


function toScreenXY( position, camera, div ) {
    var pos = position.clone();
    projScreenMat = new THREE.Matrix4();
    projScreenMat.multiply( camera.projectionMatrix, camera.matrixWorldInverse );
    projScreenMat.multiplyVector3( pos );
  
    var offset = findOffset(div);
  
    return { x: ( pos.x + 1 ) * div.width / 2 + offset.left,
         y: ( - pos.y + 1) * div.height / 2 + offset.top };
  
  }
  function findOffset(element) { 
  var pos = new Object();
  pos.left = pos.top = 0;        
  if (element.offsetParent)  
  { 
    do  
    { 
      pos.left += element.offsetLeft; 
      pos.top += element.offsetTop; 
    } while (element = element.offsetParent); 
  } 
  return pos;
} 


export default function RocksComponent({camera, canvas}) {

    const [ready, setReady] = useState(false)
    const [items, setItems] = useState([]);

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
                sizeMulti: size,
            }
            
            // result.xyPosiiton = toScreenXY( result.position, camera, canvas )

            return result
        });

        console.log(items)
        setItems(items);
        setReady(true);
    }

    initStartRandomPositions();

    return (
        <>
            {items.map((props, i) => (
                <StoneOne key={i} {...props} i={i} />
            ))}
        </>
    )
}