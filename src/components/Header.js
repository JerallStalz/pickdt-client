import React from "react"
import "./Header.css"
import {Link} from "react-router-dom";

const Header = ({on, to}) => {
    
    console.log(on)

    return(
        <div className="navbar">
            <span className="titulo">Pickdt</span>
            <Link className="link" to={to}>
                <span className="redireccion">{on}</span>
            </Link>
        </div>
    )
};

export default Header;