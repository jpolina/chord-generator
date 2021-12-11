import logo from './logo.svg';
import './App.css';
import * as Tone from "tone";
import Grid from './components/Grid'

function App() {
  const synth = new Tone.Synth().toDestination();

  const playSynth = () => {
    synth.triggerAttackRelease("C4", "16n")
  }
  return (
    <div>
      <div>
        <div class = 'rectangle shadow p-3 mb-5'>
          <h1 class = 'centerTitle'>Chord Generator</h1>
        </div>
      </div>
      <div class = 'center'>
        <Grid/>
      </div>
      <div class = 'center rectangle1 shadow p-3 mb-5 bg-body'>
        <h2 class = "text title"><u>How to use</u></h2>
        <p class = "text instructions">
          1. Enter the melody into the grid above.<br/>
          2. Click the Play button.<br/>
          3. Chords will be randomly generated and demoed.<br/>
          4. Clicking the Play button again will randomly generate a new set of chords.<br/>
          5. Enjoy!
        </p>
      </div>
    </div>
  );
}

export default App;
