import React, {useEffect, useState} from "react";
import Title from "../Components/Title";
import "./Home.css"

export default function Home() {
    return (
        <div className={"home"}>
            <Title />
            <h1>Welcome to the Rick and Morty Character Gallery!</h1>
            <h2><a href={"/gallery"}>Click to enter ...</a></h2>
            <img src={"../Components/rickandmortyimage.png"}/>
        </div>
            )
}