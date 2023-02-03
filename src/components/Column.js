import React, {useEffect, useState} from 'react';
import Key from './Key'
import './Column.css'
const Column = (props, pushNote, beat) => {
    const pitches = ["C6", "B5", "A5", "G5", "F5", "E5", "D5", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"]
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
                {pitches.map((pitch) => <Key class="grid-item" setNote={setNote} signal = {signal} beat={props.beat} key={pitch}>{pitch}</Key>)}
                {/* <div class = "grid-item">{note}</div> */}
            </div>


        </div>
    )
}

export default Column;