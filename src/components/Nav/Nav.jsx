import { NavLink } from "react-router-dom"
import './Nav.css'
function Nav() {
    return (
        <nav>
            
                <div id='left-nav'>
                    <NavLink to='/'>Book Swap</NavLink>
                </div>

                <div id='right-nav'>
                    <NavLink to='/'>Available Books</NavLink>
                    <NavLink to='/claimedbooks'>Claimed Books</NavLink>
                    <NavLink to='/lalala2'>Add Book</NavLink>
                </div>
                
            
        </nav>
    )
}
export default Nav