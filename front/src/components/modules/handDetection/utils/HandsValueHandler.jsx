import React, {useEffect, useMemo} from 'react';

const HandsValueHandler = ({setPointers, rawValues}) => {

    // делаем зеркальное отражение координат
    const getTranslatedXYZ = (xyz) => {
        const {
        x,
        y, 
        z
        } = xyz;
        return {
        x: x * -1,
        y: y * -1, 
        z: z * -1
        }
    }
    
    const onValues = (handData) => {
        /*
        const maxDistance = getDistance(THUMB_CMC, PINKY_MCP);
        const catchDistance = getDistance(THUMB_TIP, INDEX_FINGER_TIP);
        console.log('max, catch', maxDistance, catchDistance)
        */

        if (!handData.hasOwnProperty('landmarks')) {
            return;
        }

        if (handData?.landmarks.length) {
            const { landmarks } = handData;

            const newPointers = [];

            // обе руки
            landmarks.forEach(hand => {
            // кончик большого пальца
            const thumbTip = {
                finger: 'THUMB_TIP',
                ...getTranslatedXYZ(hand[4]),
            }
            newPointers.push( thumbTip );

            // кончик указательного пальца
            const indexFingerTip = {
                finger: 'INDEX_FINGER_TIP',
                ...getTranslatedXYZ(hand[8])
            }
            newPointers.push( indexFingerTip )
            });

            setPointers(newPointers);
        } else {
            setPointers([]);
        }
    }

    useMemo(() => {
        onValues(rawValues);
    }, [rawValues]);

    return null;
}

export default HandsValueHandler;