import React, { useState } from 'react';

import PathComponent from './parts/pathComponent/PathComponent';
import ControlsComponent from './parts/controlsComponent/ControlsComponent';
import MenuComponent from './parts/menuComponent/MenuComponent';

const tmp = [{
    type: 'path',
    cssClass: 'path-class',
    cssID: 'path-id',
    id: 1,
    line: [
        {
            start: {
                x: 10,
                y: 10,
            },
            end: {
                x: 100,
                y: 100,
            },
            
            bend: {
                start: {
                    x: 40,
                    y: 40,
                },
                end: {
                    x: 70,
                    y: 70,
                }
            }
        }
    ],
    styles: {
        fill: null, // '#ccc'
        stroke: '#333',
        strokeWidth: 3,
    },
}];


const SvgDrawer = () => {

    /*
        {
            type: 'path', // 'line' / 'polyline'
            id: 1,
            start: {
                x: 10,
                y: 10,
            },
            end: {
                x: 100,
                y: 100,
            },
            props: {
                fill: null, // '#ccc'
                stroke: '#333',
                strokeWidth: 3,
            },
            bend: {
                start: {
                    x: 40,
                    y: 40,
                },
                end: {
                    x: 70,
                    y: 70,
                }
            }
        }
    */

    const [lines, setLines] = useState(tmp);

    const updateLine = (line) => {
        const lineIndex = lines.findIndex(item=>item.id === line.id);
        lines[lineIndex] = {...line};
        setLines([...lines]);
    }

    return (
        <div className='svg-drawer'>
            <span>TODO см example.js и файлы в parts</span>
            {
                lines.map((lineProps) => {
                    return (
                    <svg>
                        <PathComponent
                            key={'line'+lineProps.id}
                            {...lineProps}
                        />
                        <ControlsComponent
                            key={'ctrl'+lineProps.id}
                            update={updateLine}
                            {...lineProps}
                        />
                    </svg>
                    )
                })
            }

            <MenuComponent />
        </div>
    )
}

export default SvgDrawer;