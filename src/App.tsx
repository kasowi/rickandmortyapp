import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Character} from "./Model/Character";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Imprint from './pages/Imprint';
import CharacterDetailsPage from "./pages/CharacterDetailsPage";


function App() {
    const [characters, setCharacters] = useState<Character[]>([]);

    return (
      <BrowserRouter>
          <Routes>
              <Route path ={"/"} element={<Home />}/>
              <Route path={"/gallery"} element={<Gallery characters={characters} setCharacters={setCharacters}/>}/>
              <Route path={"/imprint"} element={<Imprint />}/>
              <Route path ={"character/:id"} element={<CharacterDetailsPage characters={characters}/>}/>
          </Routes>
      </BrowserRouter>
    )

}

export default App;