// Import Components
import {useState, useRef} from 'react'
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';


// Import Styles
import './styles/app.scss';

// Import Data
import data from './data'

function App() {
  // Ref
  const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryStatus, setLibraryStatus] = useState(false)


  return (
    <div className={`App ${libraryStatus ? "library-active":""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library libraryStatus={libraryStatus} setSongs={setSongs} audioRef={audioRef} isPlaying={isPlaying} songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
