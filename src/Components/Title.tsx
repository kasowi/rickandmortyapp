import "./Title.css";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";

export default function Title() {

    return (
        <div>
        <div><Navbar /></div>
        <div className={"title"}>
            <a href ="/"><img src ="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"/></a>
        </div>
        </div>
    )
}