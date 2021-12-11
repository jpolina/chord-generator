import React, {useState, useEffect, useContext} from 'react';
import * as Tone from "tone";
import "./Key.css"
import {BeatContext} from './BeatContext'

const synth = new Tone.PolySynth().toDestination();

function Key(props, setNote, signal, beat) {
    let currentBeat = useContext(BeatContext);
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

    useEffect(()=>{
        if (props.children==props.signal){
            if (currentBeat==props.beat){
                setButtonColor("rgb(252, 163, 17)")
                setTextColor("black")
            } else {
                setButtonColor("rgb(20, 33, 61)")
                setTextColor('white')
            }
        }
    },[currentBeat])
    let buttonStyle = {
        backgroundColor:buttonColor,
        color:textColor
    }
    return (
        <button class="button" onMouseDown={playSynth} style={buttonStyle}>{props.children}</button>
    );
}

export default Key;