import React from "react";
import Header from "../components/Header";
import Mapp from "../components/Mapp";


const Gallery = () => {
    return (
        <div>
            <Header on="Subir Imagen" to="/upload" />
            <Mapp className="mapp"/>
        </div>
    )
}

export default Gallery;