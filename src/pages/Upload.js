import React, { Fragment } from "react";
import Header from "../components/Header";
import UploadForm from "../components/UploadForm";
import "./Upload.css";

const Upload = () => {

    return (
        <Fragment>
            <Header on="Ir a la Galeria" to="/" />
            <div className="upload-div">
                <UploadForm/>
            </div>
        </Fragment>
    )
}

export default Upload;