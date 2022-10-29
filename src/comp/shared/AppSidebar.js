import './sidebar.css';
import {Link} from "react-router-dom";

export default function AppHeader() {
    return(
        <div className="sidebar">
            <div className="sideContent">
                <nav>
                    <ul>
                        <li>
                            <Link to="/atmor/overview">Atmor</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
