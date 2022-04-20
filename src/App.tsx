import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Title from "./Components/Title";
import GalleryBoard from "./Components/GalleryBoard";
import {Character} from "./Model/Character";
import CharacterCard from "./Components/CharacterCard";



export default function App() {

    const [characters, setCharacters] = useState<Character[]>([]);
    const fetchCharacters = () => {
        return fetch ('https://rickandmortyapi.com/api/character')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network error")
            })
            .catch(console.error)
    }

    useEffect(() => {
        fetchCharacters()
            .then(body => {
                setCharacters(body.results)
                console.log(body.results)
            })
    }, [])

    return (
        <div className="App">
            <div className="Header">
                <Title />
            </div>

            <div className="GalleryBoard">
            {characters.length > 0 ?
                    (<GalleryBoard characters={characters} />) : (<div></div>)
            }
                </div>
        </div>
    );
}