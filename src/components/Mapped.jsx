import React from "react";
import "./Mapped.css";

const Mapped = ({ en }) => {
  return (
    <div>
      <img className="imagen" src={en.urlFile} alt={en.fileName} />
    </div>
  );
};

export default Mapped;
