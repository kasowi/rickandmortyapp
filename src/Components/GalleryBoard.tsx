import {Character} from "../Model/Character";
import CharacterCard from "./CharacterCard";
import "./GalleryBoard.css";
import {ChangeEvent, useState} from "react";

type GalleryBoardProps = {
    characters : Character[]
}

export default function GalleryBoard({characters}: GalleryBoardProps){

    const [filter, setFilter] = useState<string>('');
    const [filtered, setFiltered] = useState<Character[]>(characters);

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setFilter(event.target.value)
        setFiltered(characters.filter(character => character.name.toLowerCase().includes(event.target.value.toLowerCase())))
        console.log(filtered)
    }

    return <div className={"Gallery"}>
        <div>Type to filter:</div>
        <input id={"filter"} name={"filter"} type={"text"} value={filter} onChange={onTextChange}/>
        {(filtered.length > 0) ?
            <div className={"GalleryBoard"}>
                {filtered.map(obj => <CharacterCard character={obj}/>)}
            </div>

            : <div className={"FilterError"}>
                <p>This filter inquiry is invalid.</p>
            </div>
        }

        </div>
}




