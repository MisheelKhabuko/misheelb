import React, {useState, useEffect, useRef} from "react";
import {Link, useLocation} from 'react-router-dom';
import '../Styles/Navbar.css';
import RearderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

    return (
        <div className="navbar" id={expandNavbar ? "open" : ""}>
            <div className="toggleButton">
                <button onClick={() =>setExpandNavbar((prev) => !prev)}>
                    <RearderIcon />
                </button>
            </div>
            <div className="links">
                <Link to="/misheelb">Home</Link>
                <Link to="/misheelb/projects">Projects</Link>
                <Link to="/misheelb/experience">Experience</Link>
            </div>
        </div>
    );
}

export default Navbar;