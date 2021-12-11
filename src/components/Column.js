import React, {useEffect, useState} from 'react';
import Key from './Key'
import './Column.css'
const Column = (props, pushNote) => {
    const[note, setNote]=useState("0");
    props.pushNote(note)
    const [signal, setSignal] = useState(0);

    useEffect(()=>{
        setSignal(note)
    },[note])
    return (
        <div>
            <div class = "grid-container">
                <Key class="grid-item" setNote={setNote} signal = {signal}>C6</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>B5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>A5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>G5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>F5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>E5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>D5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>C5</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>B4</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>A4</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>G4</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>F4</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>E4</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>D4</Key>
                <Key class="grid-item" setNote={setNote} signal = {signal}>C4</Key>
                {/* <div class = "grid-item">{note}</div> */}
            </div>


        </div>
    )
}

export default Column;