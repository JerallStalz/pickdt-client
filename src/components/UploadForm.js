import UploadService from "../services/upload-service"
import React, { useState, Fragment } from "react";
import "./uploadForm.css";
import { useDropzone } from "react-dropzone";

const UploadForm = () => {
  // States
  const [file, setFile] = useState();
  const [pathImage, setPathImage] = useState();
  const [name, setName] = useState();

  // Inicializacion de dropzone
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    // Funcion ejecutada sobre los archivos aceptados
    onDrop: (acceptedFiles) => {
      const newFile = acceptedFiles[0];
      const reader = new FileReader();
      reader.readAsDataURL(newFile);
      reader.onload = function load() {
        setPathImage(reader.result);
      };
      setFile(newFile);
    }
  });

  console.log(file)
const sendImage = (e) => {
    e.preventDefault()
  
    if(!file || !name ) {
        console.log("There was an error")
    } else {
        UploadService.sendImages(name, file).then((result) => {
            console.log("el resultado es:", result)
        });
        setFile(null)
        setName("")  
    }
  }
  
  return (
    <div className="uploadform">
      <form className="uploadform-form">
        <div className="uploadform-form__div-1" {...getRootProps()}>
          <input
            {...getInputProps()}
            className="uploadform-form__div-1__input-image"
          />
          {file ? (
            <img
              src={pathImage}
              className="uploadform-form__div-1__input-image__img"
            />
          ) : (
            <div className="uploadform-form__div-1__input-image">
              <span className="uploadform-form__div-1__input-image__div-span">
                Haga click aqui o arraste una imagen para subir
              </span>
              <span className="material-icons-outlined div-2__icon">
                file_upload
              </span>
            </div>
          )}
        </div>
        <div className="uploadform-form__div-2">
          <input
            value={name}
            placeholder="Agregar un titulo"
            onChange={(e) => setName(e.target.value)}
            className="uploadform-form__div-2__input-name"
          />
        </div>
        <div>
          <button onClick={sendImage} className="button-send">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;