import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);

    };

    return (
    <nav>
        <Link to='/about'>ABOUT</Link>
        &nbsp; | &nbsp;
        <Link to='/projects'>PROJECTS</Link>
        &nbsp; | &nbsp;
        <Link to='/contact'>CONTACT</Link>
        {/* <Link to='' onClick={handleLogOut}>Log Out</Link> */}
    </nav>
)}


