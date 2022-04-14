import {Character} from "../Model/Character";
import CharacterCard from "./CharacterCard";
import "./GalleryBoard.css";

type GalleryBoardProps = {
    characters : Character[]

}

export default function GalleryBoard({characters}: GalleryBoardProps){
    return <div className={"GalleryBoard"}>{characters.map(characters => <CharacterCard character={characters} />)}</div>

}