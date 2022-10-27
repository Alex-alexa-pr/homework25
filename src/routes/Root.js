import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h1>hello</h1>

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

            <Outlet />
        </div>
    )
}

export default Root;