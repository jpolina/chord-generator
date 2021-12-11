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
      <div class = 'center'>
        <Grid/>
      </div>
    </div>
  );
}

export default App;
