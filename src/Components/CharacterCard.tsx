import {Character} from "../Model/Character";
import "./CharacterCard.css";

type characterCardProps ={
    character: Character

}

export default function CharacterCard({character} :characterCardProps){
    return<div className={"CCard"}>
        <div className={"CCImage"}><img src={character.image}/></div>
        <div className={"CCName"}><h2>{character.name}</h2></div>
        <div className={"CCId"}><b>ID: </b>{character.id}</div>
        <div className={"CCOrigin"}><b>Origin: </b>{character.origin.name}</div>
        <div className={"CCSpecies"}><b>Species: </b>{character.species}</div>
        <div className={"CCStatus"}><b>Status: </b>{character.status}</div>
    </div>

}
