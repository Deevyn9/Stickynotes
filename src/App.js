import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Cards from './components/Cards';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function switchAsap() {
    setDarkMode(!darkMode)
  }

  return (
    <div className="App">
        <Header switchAsap={switchAsap} darkMode={darkMode} />
        <Search />
        <Cards />
    </div>
  );
}

export default App;
