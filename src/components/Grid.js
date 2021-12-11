import React, {useState} from 'react';
import Column from './Column'
import * as Tone from "tone";
import './Grid.css'

const synth = new Tone.Synth().toDestination()
const chordPlayer = new Tone.Synth().toDestination()
Tone.Transport.bpm.value = 50;

const IChord1 = ["C3","E3"];
const IChord2 = ["G3","E3"];
const IVChord1 = ["F3", "A3"]
const IVChord2 = ["C4", "A3"]
const VChord1 = ["B2", "D3"]
const VChord2 = ["G3", "D3"]
const generateChords = (noteArray) =>{
    let output = [];
    for (let i=0;i<16;i+=2) {
        let beat1 = noteArray[i].charAt(0);
        let beat2 = noteArray[i+1].charAt(0);
        // Determine which chord fits best with the notes
        // 1: I, vi, IV
        // 2: V, ii, 
        // 3: I, vi, iii
        // 4: IV, V, ii
        // 5: V, I, iii
        // 6: IV, vi, ii
        // 7: V

        switch(beat1) {
            default:
            case 'C':
            case 'E':
                output.push(IChord1);
                output.push(IChord2);
                break;
            case 'G':
            case 'D':
            case 'B':
                output.push(VChord1);
                output.push(VChord2);
                break;
            case 'F':
            case 'A':
                output.push(IVChord1);
                output.push(IVChord2);
                break;
        }
    }
    return output;
}

const Grid = () => {
    const [note1, pushNote1] = useState();
    const [note2, pushNote2] = useState();
    const [note3, pushNote3] = useState();
    const [note4, pushNote4] = useState();
    const [note5, pushNote5] = useState();
    const [note6, pushNote6] = useState();
    const [note7, pushNote7] = useState();
    const [note8, pushNote8] = useState();
    const [note9, pushNote9] = useState();
    const [note10, pushNote10] = useState();
    const [note11, pushNote11] = useState();
    const [note12, pushNote12] = useState();
    const [note13, pushNote13] = useState();
    const [note14, pushNote14] = useState();
    const [note15, pushNote15] = useState();
    const [note16, pushNote16] = useState();

    const playMelody = () => {
        Tone.Transport.cancel();
        let noteArray = [note1,note2,note3, note4, note5, note6, note7, note8, note9, note10, note11, note12, note13, note14, note15, note16]
        const seq=new Tone.Sequence((time, note)=>{
            synth.triggerAttackRelease(note,0.01, time);
        }, noteArray).start(0);

        const chordSeq = new Tone.Sequence((time, note) => {
            chordPlayer.triggerAttackRelease(note, 0.1, time);
            // subdivisions are given as subarrays
        }, generateChords(noteArray)).start(0);

        Tone.Transport.start();
    }
    
    const stopMelody = () => {
        Tone.Transport.stop()
        
    }

    return (
        <div>
            <div class="grid-container1">
                <Column class="grid-item1" pushNote={pushNote1}/>
                <Column class="grid-item1" pushNote={pushNote2}/>
                <Column class="grid-item1" pushNote={pushNote3}/>
                <Column class="grid-item1" pushNote={pushNote4}/>
                <Column class="grid-item1" pushNote={pushNote5}/>
                <Column class="grid-item1" pushNote={pushNote6}/>
                <Column class="grid-item1" pushNote={pushNote7}/>
                <Column class="grid-item1" pushNote={pushNote8}/>
                <Column class="grid-item1" pushNote={pushNote9}/>
                <Column class="grid-item1" pushNote={pushNote10}/>
                <Column class="grid-item1" pushNote={pushNote11}/>
                <Column class="grid-item1" pushNote={pushNote12}/>
                <Column class="grid-item1" pushNote={pushNote13}/>
                <Column class="grid-item1" pushNote={pushNote14}/>
                <Column class="grid-item1" pushNote={pushNote15}/>
                <Column class="grid-item1" pushNote={pushNote16}/>
            </div>
            {/* <div class="grid-container2">
                <div class = 'dropdown'>
                    <button class='btn btn-primary btn-sm grid-item2 dropdown-toggle'>Am</button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
                <button class='btn btn-sm grid-item2 dropdown-toggle'></button>
            </div> */}
            <button type = "button" class="btn btn-success px-4 btn-lg" onClick = {playMelody}>Play</button>
            <span> </span>
            <button type = "button" class="btn btn-danger px-4 btn-lg" onClick = {stopMelody}>Stop</button>

        </div>
    )
}

export default Grid;