import {Character} from "../Model/Character";
import "./CharacterCard.css";
import React, {useState} from "react";

type characterCardProps ={
    character: Character

}

export default function CharacterCard({character} :characterCardProps){

    const [count, setCount] = useState<number>(0);
    const increaseCount =  () => {
        setCount(count + 1);
    }

    return<div className={"CCard"}>
        <div className={"CCImage"}><img src={character.image}/></div>
        <div className={"CCName"}><h2>{character.name}</h2></div>
        <div className={"CCId"}><b>ID: </b>{character.id}</div>
        <div className={"CCOrigin"}><b>Origin: </b>{character.origin.name}</div>
        <div className={"CCSpecies"}><b>Species: </b>{character.species}</div>
        <div className={"CCStatus"}><b>Status: </b>{character.status}</div>
        <div className ="LikeButton">
            <button onClick={increaseCount}>
                Like
            </button>
            <p> {count} likes</p>
        </div>
    </div>

}
