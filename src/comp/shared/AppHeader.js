import NavBar from "./NavBar";
import './header.css';
import {Link} from "react-router-dom";

export default function AppHeader() {
    return(
        <header>
            <h2>
                <Link to="/">Tsundraki Studio</Link>
            </h2>
            <NavBar />
        </header>
    );
}
