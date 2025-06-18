import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/weapon">weapon</Link>
            <Link to="/armour">armour</Link>
        </nav>
    );
}

export default NavBar;