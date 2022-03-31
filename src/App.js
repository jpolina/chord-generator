import './App.css';
import * as Tone from "tone";
import Grid from './components/Grid'

function App() {
  const synth = new Tone.Synth().toDestination();

  return (
    <div>
      <div>
        <div class = 'rectangle shadow p-3 mb-4'>
          <div>
            <h1 class = 'centerTitle d-print-inline name'>
              <span class = "name"><strong>Chordial</strong></span>
              <span class = "description"> - a Chord Progression Generator by Jonathan Polina</span>
            </h1>
          </div>
        </div>
      </div>
      <div class = 'center'>
        <Grid/>
      </div>
      <div class = 'center rectangle1 shadow p-3 mb-5'>
        <h1 class = "text title"><u><strong>How to use it</strong></u></h1>
        <p class = "text instructions">
          <ol>
            <li>Enter a melody in the key of C major into the grid above.</li>
            <li>Click the Play button.</li>
            <li>A chord progression that fits the melody will be generated and played.</li>
            <li>Click the Play button again to stop the music.</li>
            <li>Click the Play button again to generate and play a new chord progression.</li>
            <li>Enjoy!</li>
          </ol>
        </p>
      </div>
    </div>
  );
}

export default App;
