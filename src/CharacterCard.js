import React, { useState, useEffect, useRef } from 'react';
export default function CharacterCard(props) {
    const [active, setActive] = useState(false);
    const [reset,setReset] = useState(false);
    const attemptRef = useRef(props.attempt);
    useEffect(() => {
        if (attemptRef.current != props.attempt) {
            setActive(false) 
            setReset(true)
            attemptRef.current = props.attempt
        }
        console.log(attemptRef.current);
    })
    const activate = () => {
        if (!active) {
            setActive(true)
            props.activationHandler(props.value)
        }
        console.log(active);
    }

    const className = `card ${active ? 'activeCard' : ''}`
    const className2 = `${attemptRef.current && ""}`
    return (
        <div className={className} onClick={activate}>
            <div className={className2}>{props.value}</div>
        </div>
    )

}
