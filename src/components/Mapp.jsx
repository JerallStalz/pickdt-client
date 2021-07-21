import { useContext, useEffect } from "react";
import Mapped from "./Mapped";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageContext from "../context/ImageContext";
import "./Mapp.css"

const Mapp = () => {
  const imageContext = useContext(ImageContext);
  const { getImagesFn, ArrayparaMap } = imageContext;

  useEffect(() => {
    getImagesFn();
  }, []);

  if (ArrayparaMap.length === 0) {
    return (
        <div class="father">
            <div class="charging"></div>
            <h2 class="cargando"> Cargando Imagenes... </h2>
        </div>
    )
  }

  return (
    <div className="mapp">
      <ResponsiveMasonry 
        columnsCountBreakPoints={{ 300: 1, 550: 2, 800: 3, 1100: 4, 2200: 6 }}
      >
        <Masonry className="mapp-masonry">
          {ArrayparaMap.map((ArrayparaMap) => (
            <Mapped en={ArrayparaMap} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Mapp;