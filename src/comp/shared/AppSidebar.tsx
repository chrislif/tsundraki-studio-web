import './sidebar.css';
import {Link} from "react-router-dom";

export default function AppHeader(): JSX.Element {
    return(
        <div className="sidebar">
            <div>
                <nav className="sideNav">
                    <ul>
                        <li>
                            <Link to="/atmor/page1">Page 1</Link>
                        </li>
                        <li>
                            <Link to="/atmor/page2">Page 2</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
