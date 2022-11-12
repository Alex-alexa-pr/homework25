import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "")}
                        to="/" end>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "")}
                        to="users" >Users</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "")}
                        to="hotels" >Hotels</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;