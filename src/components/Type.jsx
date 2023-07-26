import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const TypeLoop = () => {
    const [text] = useTypewriter({
        words: [' a Developer', ' a Techie', ' an Astrophile'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <h4>
            I'm 
            <span className='loop-bio'>
                {text}
            </span>
            <Cursor cursorStyle='|' cursorBlinking={true} cursorColor='red'/>
        </h4>
    )
}

export default TypeLoop;