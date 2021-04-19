import React from "react";
import "./imagelinkform.css";

const ImageLinkForm = ({ OninputChange, onSubmit }) => {
  return (
    <div>
      <p className="f4">
        {"This magic brain will detect faces in your picture. Give it a try."}
      </p>
      <div className="center">
        <div className="form center pa3 br3 shadow-5">
          <input className="f4 pa2 w-70 center" onChange={OninputChange}></input>
          <button
            style={{ border: "none" }}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
