import { useRef, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import Main from './components/Main';

function App() {
  const [guests, setGuests] = useState(0)
  const [location, setLocation] = useState('Add location')
  const mainRef = useRef()

  function handleSearch() {
    mainRef.current.searchStays()
  }

  return (
    <>
      <Header handleSearch={handleSearch} guests={guests} setGuests={setGuests} location={location} setLocation={setLocation}/>
      <Main ref={mainRef} guests={guests} location={location}/>
      <footer>
        <p>
        created by <a href="https://github.com/joaoalberis">João Alberis</a> - devChallenges.io
        </p>
      </footer>
    </>
  );
}

export default App;
