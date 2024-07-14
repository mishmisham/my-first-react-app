import React, { useMemo, useState, useRef, createRef } from 'react';

const ControlsComponent = (props) => {

    const {
        line
    } = props;

    const defaultPointRadius = 30;
    const defaultBezierPointRadius = 20;

    /*
        TODO 
        перетащить расчет координат для контролов
    */

    return (
        <>
            {line.map(path=>{
                const {
                    start,
                    end,
                    bend
                } = path;
                return (
                    <>
                        <circle
                            cx={start.x}
                            cy={start.y}
                            r={defaultPointRadius}
                            className="point"
                        />
                        <circle
                            cx={end.x}
                            cy={end.y}
                            r={defaultPointRadius}
                            className="point"
                        />
            
                        <circle
                            cx="100"
                            cy="100"
                            r={defaultBezierPointRadius}
                            className="point"
                        />
                        <circle
                            cx="400"
                            cy="100"
                            r={defaultBezierPointRadius}
                            className="point"
                        />
            
                        <line
                            x1={start.x}
                            y1={start.y}
                            x2="100"
                            y2="100"
                        />
                        <line
                            x1={end.x}
                            y1={end.y}
                            x2="400"
                            y2="100"
                        />
                    </>
                )
            })}
        </>
    )
}

export default ControlsComponent;