import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Image from "../components/Image";

const ListImage = ({imageArray}) => {
    console.log(imageArray)
    return(
        <div className="masonry-container">
            {imageArray ?
                imageArray.map((imageArray)=>(
                    <Image url={imageArray.urlFile} />
                ))
                :<div>No hay nada</div>}
        </div>
    )
}

export default ListImage;