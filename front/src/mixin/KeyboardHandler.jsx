import React from 'react';

const KeyboardHandler = (props) => {
   
    /*
    
        in parent component 

        const [isKeyPressed, setIsKeyPressed] = useState(false);
        const [keyCode, setKeyCode] = useState('');
    */


    const setKeyPressed = (isPressed, value) => {
        props.setIsKeyPressed(isPressed);
        props.setKeyCode(value);
    }
    
    const onKeyPress = (e) => {
        setKeyPressed(true, e.keyCode)
    }

    const onKeyUp = (e) => {
        setKeyPressed(false, '')
    }

    if (typeof window !== undefined) {
        document.addEventListener('keydown', onKeyPress)
        document.addEventListener('keyup', onKeyUp)
    }
    
    return null;
}

export default KeyboardHandler;