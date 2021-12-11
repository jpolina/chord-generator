import React, {useEffect, useState, useContext} from 'react';
import Column from './Column'
import * as Tone from "tone";
import './Grid.css'
import Popper, { createPopper} from '@popperjs/core';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BeatContext} from './BeatContext'


//Create synths and BPM
const synth = new Tone.Synth().toDestination()
const chordPlayer = new Tone.Synth().toDestination()
Tone.Transport.bpm.value = 100;


//Create the chords
const IChord1 = ["C3","E3"];
const IChord2 = ["G3","E3"];
const IbChord1 = ["E3", "G3"]
const IbChord2 = ["C4", "G3"]
const IVChord1 = ["F3", "A3"]
const IVChord2 = ["C4", "A3"]
const IVbChord1 = ["A2", "C3"]
const IVbChord2 = ["F3", "C3"]
const VChord1 = ["G2", "B2"]
const VChord2 = ["D3", "B2"]
const VbChord1 = ["B2", "D3"]
const VbChord2 = ["G3", "D3"]
const iiChord1 = ["D3","F3"]
const iiChord2 = ["A3","F3"]
const viChord1 = ["A2","C3"]
const viChord2 = ["E3","C3"]
const iiiChord1 = ["E3", "G3"]
const iiiChord2 = ["B3", "G3"]

// Select random number
let randomInt;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const selectRandom = (number) => {
    return number[Math.floor(Math.random()*number)];
}

//The grid or "piano roll"
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
    const [BPM, setBPM] = useState(100);
    useEffect(()=>{
        Tone.Transport.bpm.value = BPM/2;
    }, [BPM])


    //Parallel timer
    const [currentBeat, setCurrentBeat] = useState(1);
    const [isActive, setIsActive] = useState(false);
    const toggle =()=> {
        setIsActive(true);
        setCurrentBeat(1);
    }
    const reset = () => {
        setCurrentBeat(0)
        setIsActive(false)
    }
    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setCurrentBeat(currentBeat => currentBeat + 1);
          }, 60/BPM*1000);
        } else if (!isActive && currentBeat !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, 60/BPM]);

    useEffect(()=> {
        if (currentBeat>16) {
            setCurrentBeat(1)
        }
    },[currentBeat])

    const generateChords = () =>{
        let noteArray = [note1,note2,note3, note4, note5, note6, note7, note8, note9, note10, note11, note12, note13, note14, note15, note16]
        let output = [];
        let prev = "";
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
                    if (prev=="G") {
                        output.push(IChord1);
                        output.push(IChord2);
                        setChordArray(chordArray=>[...chordArray,"C"])
                        setChordArray(chordArray=>[...chordArray,"C"])
                        prev="";

                    } else if (randomInt===0){
                        output.push(viChord1);
                        output.push(viChord2);
                        setChordArray(chordArray=>[...chordArray,"Am"])
                        setChordArray(chordArray=>[...chordArray,"Am"])
                    } else if (randomInt===1) {
                        output.push(IVChord1);
                        output.push(IVChord2);
                        setChordArray(chordArray=>[...chordArray,"F"])
                        setChordArray(chordArray=>[...chordArray,"F"])
                    } else if (randomInt===2) {
                        output.push(IbChord1);
                        output.push(IbChord2);
                        setChordArray(chordArray=>[...chordArray,"C/E"])
                        setChordArray(chordArray=>[...chordArray,"C/E"])
                    } else if (randomInt===3) {
                        output.push(IVbChord1);
                        output.push(IVbChord2);
                        setChordArray(chordArray=>[...chordArray,"F/A"])
                        setChordArray(chordArray=>[...chordArray,"F/A"])
                    } else if (randomInt===4) {
                        output.push(IChord1);
                        output.push(IChord2);
                        setChordArray(chordArray=>[...chordArray,"C"])
                        setChordArray(chordArray=>[...chordArray,"C"])
                    }
                    break;
                case 'D':
                case 'B':
                    randomInt = getRandomInt(2);
                    if (randomInt===0){
                        output.push(VbChord1);
                        output.push(VbChord2);
                        setChordArray(chordArray=>[...chordArray,"G/B"])
                        setChordArray(chordArray=>[...chordArray,"G/B"])
                        prev="G";
                    } else if (randomInt===1){
                        output.push(VChord1);
                        output.push(VChord2);
                        setChordArray(chordArray=>[...chordArray,"G"])
                        setChordArray(chordArray=>[...chordArray,"G"])
                        prev="G";
                    }
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
                    randomInt = getRandomInt(2)
                    if (beat2=="C"||beat2=="E") {
                        output.push(IChord1);
                        output.push(IChord2);
                        setChordArray(chordArray=>[...chordArray,"C"])
                        setChordArray(chordArray=>[...chordArray,"C"])
                    } else if (randomInt==0){
                        output.push(VChord1);
                        output.push(VChord2);
                        setChordArray(chordArray=>[...chordArray,"G"])
                        setChordArray(chordArray=>[...chordArray,"G"])
                        prev="G"
                    } else if (randomInt==1){
                        output.push(VbChord1);
                        output.push(VbChord2);
                        setChordArray(chordArray=>[...chordArray,"G/B"])
                        setChordArray(chordArray=>[...chordArray,"G/B"])
                        prev="G"
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
            <div class="grid-container1">
                <BeatContext.Provider value={currentBeat}>
                    <Column class="grid-item1" pushNote={pushNote1} beat={1}/>
                    <Column class="grid-item1" pushNote={pushNote2} beat={2}/>
                    <Column class="grid-item1" pushNote={pushNote3} beat={3}/>
                    <Column class="grid-item1" pushNote={pushNote4} beat={4}/>
                    <Column class="grid-item1" pushNote={pushNote5} beat={5}/>
                    <Column class="grid-item1" pushNote={pushNote6} beat={6}/>
                    <Column class="grid-item1" pushNote={pushNote7} beat={7}/>
                    <Column class="grid-item1" pushNote={pushNote8} beat={8}/>
                    <Column class="grid-item1" pushNote={pushNote9} beat={9}/>
                    <Column class="grid-item1" pushNote={pushNote10} beat={10}/>
                    <Column class="grid-item1" pushNote={pushNote11} beat={11}/>
                    <Column class="grid-item1" pushNote={pushNote12} beat={12}/>
                    <Column class="grid-item1" pushNote={pushNote13} beat={13}/>
                    <Column class="grid-item1" pushNote={pushNote14} beat={14}/>
                    <Column class="grid-item1" pushNote={pushNote15} beat={15}/>
                    <Column class="grid-item1" pushNote={pushNote16} beat={16}/>
                </BeatContext.Provider>
            </div>
            <button type = "button" class="btn btn-light playButton shadow mb-4 mt-2" onClick = {()=>{if (!isActive) {playMelody(); toggle()} else{reset();stopMelody() }}}><strong>Play/Stop</strong></button>
            <div class="slidecontainer shadow p-3 rounded">
                <span class = 'bpmDisplay'><strong>BPM: </strong></span>
                <input type = "range" min = "60" max = "200" class="slider" defaultValue='100' id="myRange" onChange={event=>setBPM(event.target.value)} disabled={isActive}></input>
                <span class = 'bpmDisplay'><strong>{BPM}</strong></span>
            </div>
        </div>
    )
}

export default Grid;