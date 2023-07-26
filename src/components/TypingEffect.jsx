import React, {useEffect, useRef, useState} from "react";

const Type = ({ text }) => {
    const counter = useRef(0);
    const [currentText, setText] = useState('');
    const bio = text

    useEffect(() => {
        counter.current = 0;
        setText('')
    }, [bio])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setText((value) => value + bio.charAt(counter.current));
            counter.current += 1;
        }, 900);
        return () => {
            clearTimeout(timeoutId);
        }
    }, [currentText, bio])
    return (
    <span>{currentText}</span>
    )
}

export default Type