import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <NavLink to="/category/Computers">Computers</NavLink>
            '||'
            <NavLink to="/category/Monitors">Monitors</NavLink>
        </nav>
    )
}

export default Nav