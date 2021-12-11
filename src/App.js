import logo from './logo.svg';
import './App.css';
import * as Tone from "tone";
import Grid from './components/Grid'

function App() {
  const synth = new Tone.Synth().toDestination();

  return (
    <div>
      <div>
        <div class = 'rectangle shadow p-3 mb-4'>
          <h1 class = 'centerTitle'>Chord Generator</h1>
        </div>
      </div>
      <div class = 'center'>
        <Grid/>
      </div>
      <div class = 'center rectangle1 shadow p-3 mb-5 bg-body'>
        <h2 class = "text title"><u>How to use</u></h2>
        <p class = "text instructions">
          1. Enter a melody in the key of C major into the grid above.<br/>
          2. Click the Play button.<br/>
          3. Chords which fit with the melody will be randomly generated and played.<br/>
          4. Clicking the Play button again will randomly generate a new set of chords.<br/>
          5. Enjoy!
        </p>
      </div>
    </div>
  );
}

export default App;
