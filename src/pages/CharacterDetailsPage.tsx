import {useParams} from "react-router-dom";
import React from "react";
import "./CharacterDetailsPage.css";
import {Character} from "../Model/Character";
import Title from "../Components/Title";

type CharacterDetailsProps = {
    characters : Character[]
}

export default function CharacterDetailsPage({characters}: CharacterDetailsProps) {

    console.log(characters)
    const params = useParams()
    const id = params.id
    if (id === undefined) {
        return <div>Not a valid ID!</div>
    }
    const character = characters.find(character => character.id === parseInt(id))
    if (character === undefined){
        return <div>Character does not exist!</div>
    }

    return (
        <div>
        <Title/>
        <div className={"CCCard"}>
            <div className={"CCCImage"}><img src={character.image}/></div>
            <div className={"CCCName"}><h2>{character.name}</h2></div>
            <div className={"CCCId"}><b>ID: </b>{character.id}</div>
            <div className={"CCCOrigin"}><b>Origin: </b>{character.origin.name}</div>
            <div className={"CCCSpecies"}><b>Species: </b>{character.species}</div>
            <div className={"CCCStatus"}><b>Status: </b>{character.status}</div>
        </div>
        </div>
    )
}