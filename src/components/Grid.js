import React, {useEffect, useState} from 'react';
import Column from './Column'
import * as Tone from "tone";
import './Grid.css'
import Popper, { createPopper} from '@popperjs/core';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';

const synth = new Tone.Synth().toDestination()
const chordPlayer = new Tone.Synth().toDestination()
Tone.Transport.bpm.value = 50;

const IChord1 = ["C3","E3"];
const IChord2 = ["G3","E3"];
const IbChord1 = ["E3", "G3"]
const IbChord2 = ["C4", "G3"]
const IVChord1 = ["F3", "A3"]
const IVChord2 = ["C4", "A3"]
const IVbChord1 = ["A2", "C3"]
const IVbChord2 = ["F3", "C3"]
const VChord1 = ["B2", "D3"]
const VChord2 = ["G3", "D3"]
const iiChord1 = ["D3","F3"]
const iiChord2 = ["A3","F3"]
const viChord1 = ["A2","C3"]
const viChord2 = ["E3","C3"]
const iiiChord1 = ["E3", "G3"]
const iiiChord2 = ["B3", "G3"]

let randomInt;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const selectRandom = (number) => {
    return number[Math.floor(Math.random()*number)];
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

    const [chordArray, setChordArray] = useState([]);

    const generateChords = () =>{
        let noteArray = [note1,note2,note3, note4, note5, note6, note7, note8, note9, note10, note11, note12, note13, note14, note15, note16]
        let output = [];
        setChordArray([])
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
                    randomInt = getRandomInt(5);
                    if (randomInt==0 || chordArray.length>0 && chordArray[i-1]==="G/B") {
                        output.push(IChord1);
                        output.push(IChord2);
                        setChordArray(chordArray=>[...chordArray,"C"])
                        setChordArray(chordArray=>[...chordArray,"C"])
                    } else if (randomInt===1){
                        output.push(viChord1);
                        output.push(viChord2);
                        setChordArray(chordArray=>[...chordArray,"Am"])
                        setChordArray(chordArray=>[...chordArray,"Am"])
                    } else if (randomInt===2) {
                        output.push(IVChord1);
                        output.push(IVChord2);
                        setChordArray(chordArray=>[...chordArray,"F"])
                        setChordArray(chordArray=>[...chordArray,"F"])
                    } else if (randomInt===3) {
                        output.push(IbChord1);
                        output.push(IbChord2);
                        setChordArray(chordArray=>[...chordArray,"C/E"])
                        setChordArray(chordArray=>[...chordArray,"C/E"])
                    } else if (randomInt===4) {
                        output.push(IVbChord1);
                        output.push(IVbChord2);
                        setChordArray(chordArray=>[...chordArray,"F/A"])
                        setChordArray(chordArray=>[...chordArray,"F/A"])
                    }
                    break;
                case 'D':
                case 'B':
                    output.push(VChord1);
                    output.push(VChord2);
                    setChordArray(chordArray=>[...chordArray,"G/B"])
                    setChordArray(chordArray=>[...chordArray,"G/B"])

                    break;
                case 'E':
                    randomInt = getRandomInt(2);
                    if (randomInt==0 || chordArray.length>0 && chordArray[i-1]==="G/B") {
                        output.push(IChord1);
                        output.push(IChord2);
                        setChordArray(chordArray=>[...chordArray,"C"])
                        setChordArray(chordArray=>[...chordArray,"C"])
                    } else if (randomInt==1) {
                        output.push(iiiChord1);
                        output.push(iiiChord2);
                        setChordArray(chordArray=>[...chordArray,"Em"])
                        setChordArray(chordArray=>[...chordArray,"Em"])
                    }
                    break;
                case 'F':
                    randomInt = getRandomInt(3);
                    if (randomInt==0) {
                        output.push(iiChord1);
                        output.push(iiChord2);
                        setChordArray(chordArray=>[...chordArray,"Dm"])
                        setChordArray(chordArray=>[...chordArray,"Dm"])
                    } else if (randomInt==1) {
                        output.push(IVChord1);
                        output.push(IVChord2);
                        setChordArray(chordArray=>[...chordArray,"F"])
                        setChordArray(chordArray=>[...chordArray,"F"])
                    } else if (randomInt==2) {
                        output.push(IVbChord1);
                        output.push(IVbChord2);
                        setChordArray(chordArray=>[...chordArray,"F/A"])
                        setChordArray(chordArray=>[...chordArray,"F/A"])
                    }
                    break;
                case 'G':
                    randomInt=getRandomInt(2)
                    if (randomInt==0) {
                        output.push(IChord1);
                        output.push(IChord2);
                        setChordArray(chordArray=>[...chordArray,"C"])
                        setChordArray(chordArray=>[...chordArray,"C"])
                    } else if (randomInt==1){
                        output.push(VChord1);
                        output.push(VChord2);
                        setChordArray(chordArray=>[...chordArray,"G/B"])
                        setChordArray(chordArray=>[...chordArray,"G/B"])
                    }
                    break;
                case 'A':
                    randomInt = getRandomInt(3);
                    if (randomInt==0){
                        output.push(IVChord1);
                        output.push(IVChord2);
                        setChordArray(chordArray=>[...chordArray,"F"])
                        setChordArray(chordArray=>[...chordArray,"F"])
                    } else if (randomInt==1) {
                        output.push(viChord1);
                        output.push(viChord2);
                        setChordArray(chordArray=>[...chordArray,"Am"])
                        setChordArray(chordArray=>[...chordArray,"Am"])
                    } else if (randomInt==2) {
                        output.push(iiChord1);
                        output.push(iiChord2);
                        setChordArray(chordArray=>[...chordArray,"Dm"])
                        setChordArray(chordArray=>[...chordArray,"Dm"])
                    }
                    break;
                    
            }
        }
        return output;
    }


    const playMelody = () => {
        Tone.Transport.stop()
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
            <div class="grid-container2">
                <div class='grid-item2'>{chordArray[0]}</div>
                <div class='grid-item2'>{chordArray[1]}</div>
                <div class='grid-item2'>{chordArray[2]}</div>
                <div class='grid-item2'>{chordArray[3]}</div>
                <div class='grid-item2'>{chordArray[4]}</div>
                <div class='grid-item2'>{chordArray[5]}</div>
                <div class='grid-item2'>{chordArray[6]}</div>
                <div class='grid-item2'>{chordArray[7]}</div>
                <div class='grid-item2'>{chordArray[8]}</div>
                <div class='grid-item2'>{chordArray[9]}</div>
                <div class='grid-item2'>{chordArray[10]}</div>
                <div class='grid-item2'>{chordArray[11]}</div>
                <div class='grid-item2'>{chordArray[12]}</div>
                <div class='grid-item2'>{chordArray[13]}</div>
                <div class='grid-item2'>{chordArray[14]}</div>
                <div class='grid-item2'>{chordArray[15]}</div>
            </div>
            <button type = "button" class="btn btn-success px-4 btn-lg" onClick = {playMelody}>Play</button>
            <span> </span>
            <button type = "button" class="btn btn-danger px-4 btn-lg" onClick = {stopMelody}>Stop</button>
            <span>   </span>
            {/* <button type = "button" class="btn btn-primary px-4 btn-lg" onClick = {generateChords}>Generate Chords</button> */}
        </div>
    )
}

export default Grid;