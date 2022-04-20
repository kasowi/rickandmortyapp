import "./Navbar.css";
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <div className="navbar">
            <Link to={"/"}>Home</Link>
            <Link to={"/gallery"}>Gallery</Link>
            <Link to={"/imprint"}>Imprint</Link>
        </div>
    )

}