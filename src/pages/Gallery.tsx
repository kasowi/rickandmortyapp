import React, {useEffect, useState} from "react";
import {Character} from "../Model/Character";
import Title from "../Components/Title";
import GalleryBoard from "../Components/GalleryBoard";

type GalleryProps = {
    characters : Character[]
    setCharacters : (value:Character[]) => void
}

export default function Gallery({characters, setCharacters}: GalleryProps) {

   // const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
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