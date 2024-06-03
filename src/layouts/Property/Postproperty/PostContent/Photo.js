import React, { useState } from "react";
// import PhotoImg from "../../../../assets/Icons/photoimg2.png";
import Photoplus from "../../../../assets/Icons/photoplusicon.svg";
// import DeleteIcon from "../../../../assets/Icons/deleteicon.svg";
// import { FormControl, MenuItem, Select } from "@mui/material";

export default function Photo() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files) {
      const imagesArray = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          imagesArray.push(reader.result);
          if (imagesArray.length === files.length) {
            setUploadedImages([...uploadedImages, ...imagesArray]);
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };

  return (
    <>
      <div className=" col-12 mt-md-0 mt-3">
        {/* <h6 className="general-label basic_looking"> */}
        <h3 className="basic_heading m-0">
          {uploadedImages.length > 0
            ? "Uploaded Images"
            : "Upload Photos"}
        </h3>

        <div className="d-flex flex-wrap">
          {uploadedImages.map((image, index) => (
            <>
              <div className="upload-card m-2 px-2">
                <img
                  key={index}
                  src={image}
                  alt={`Uploaded ${index + 1}`}
                  style={{
                    width: "126px",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </>
          ))}
          
          <label
            htmlFor="upload-photo"
            className="upload-card m-2 p-0"
            style={{
              border: "1px dashed #68bcff",
              borderRadius: "10px",
              background: "#eff5fc",
              width: "8rem",
              height: "8rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>

            <input
              id="upload-photo"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              style={{ display: "none" }}/>
            <div className="icon" style={{ color: "#2196f3" }}>
              <img src={Photoplus} alt="" />
              {/* <i class="fi fi-rr-add"></i> */}
            </div>
            <div className="overlay">
              <p style={{ color: "#2196f3" }}> Click to Upload </p>
            </div>
          </label>
        </div>
      </div>
    </>
  );

}
