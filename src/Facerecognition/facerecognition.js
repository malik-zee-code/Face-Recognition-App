import React from "react";
import "./facerecognition.css";

const FaceRecognition = ({ imgUrl, box }) => {
  return (
    <div className="center ma">
      <div className="mt2 absolute">
        <img id="inputimage" alt="" src={imgUrl} width="500px" heigh="auto" />
        <div
          className="bounding-box "
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        >{console.log({box})}</div>
      </div>
    </div>
  );
};

export default FaceRecognition;
