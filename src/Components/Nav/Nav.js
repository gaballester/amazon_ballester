import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <NavLink to="/category/1">Category 1</NavLink>
            <NavLink to="/category/2">Category 2</NavLink>
        </nav>
    )
}

export default Nav