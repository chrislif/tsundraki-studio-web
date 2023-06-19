import { Link } from "react-router-dom";

export default function NavBar(): JSX.Element {
    return(
        <nav className="navBar">
            <ul>
                <li>
                    <Link to="/atmor/overview">Atmor</Link>
                </li>
            </ul>
        </nav>
    );
}
