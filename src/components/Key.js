import React, {useState, useEffect} from 'react';
import * as Tone from "tone";
import "./Key.css"

const synth = new Tone.PolySynth().toDestination();
function Key(props, setNote, signal) {
    const [buttonColor, setButtonColor] = useState("");
    const [textColor, setTextColor] = useState("");

    const playSynth = () => {
        if(props.children!==props.signal) {
        synth.triggerAttackRelease(props.children, "32n")
        props.setNote(props.children)
        } else {
            props.setNote("0")
        }
    }
    
    useEffect(()=>{
        if (props.children===props.signal){
            setButtonColor("rgb(20, 33, 61)")
            setTextColor('white')
        } else {
            setButtonColor("rgb(229, 229, 229)")
            setTextColor('black')
        }
    }, [props.signal])

    let buttonStyle = {
        backgroundColor:buttonColor,
        color:textColor
    }
    return (
        <button class="button" onMouseDown={playSynth} style={buttonStyle}>{props.children}</button>
    );
}

export default Key;