import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/atmor/overview">Atmor</Link>
                </li>
            </ul>
        </nav>
    );
}
