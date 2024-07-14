import React, { useMemo, useState, useRef, createRef } from 'react';

const PathComponent = ({
    type,
    id,
    cssClass,
    cssID,
    line,
    styles,
}) => {

    const coordinates = line.map(path=>{
        const {
            start,
            end,
            bend
        } = path;

        const startCoords = `M${start.x},${start.y}`;
        const endCoords = `${end.x},${end.y}`;
        const bendCoords = bend && bend.hasOwnProperty('start') || bend.hasOwnProperty('end') ? `C${bend.start.x},${bend.start.y} ${bend.end.x},${bend.end.y}` : '';
        return `${startCoords} ${bendCoords} ${endCoords}`;
    }).join(' ');
    
    return (
        <path
            d={coordinates}
            className={cssClass}
            id={cssID}
            {...styles}
        />
    )
}

export default PathComponent;