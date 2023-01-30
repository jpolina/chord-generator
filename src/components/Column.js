import React, {useEffect, useState} from 'react';
import Key from './Key'
import './Column.css'
const Column = (props, pushNote, beat) => {
    const[note, setNote]=useState("0");
    props.pushNote(note)
    const [signal, setSignal] = useState(0);

    useEffect(()=>{
        setSignal(note)
    },[note])
    return (
        <div>
            <div class = "grid-container">
                {/* the setNote function is drilled down to be used by Keys, which will call setNote when they are clicked to let the Grid know they were chosen*/}
                {/* the signal is a number 0-16 (1-16 if currently playing) drilled down from the grid, to let the keys know the active beat we're on when playing */}
                {/* the beat prop tells keys which beat they are */}
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>C6</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>B5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>A5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>G5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>F5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>E5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>D5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>C5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>B4</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>A4</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>G4</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>F4</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>E4</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>D4</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat}>C4</Key>
                {/* <div class = "grid-item">{note}</div> */}
            </div>


        </div>
    )
}

export default Column;