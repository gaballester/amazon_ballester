import { NavLink } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
    return (
        <nav className="left_navlinks">
            <NavLink to="/">All Products</NavLink>
            '||'
            <NavLink to="/category/Computers">Computers</NavLink>
            '||'
            <NavLink to="/category/Monitors">Monitors</NavLink>
        </nav>
    )
}


export default Nav