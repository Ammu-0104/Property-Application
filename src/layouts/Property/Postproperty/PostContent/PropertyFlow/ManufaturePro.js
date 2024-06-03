import React, { useState } from "react";
import TooltipImg from "../../../../../assets/Icons/tooltipimg.svg";
import proQuestion from "../../../../../assets/Icons/locquestion.svg";
import Tooltip from "@mui/material/Tooltip";

const ManufacturingPro = () => {
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [selectedParking, setSelectedParking] = useState("");

  const handleSquareChange = (e) => {
    setSelectedSquare(parseInt(e.target.value));
  };

  const getParkingButtonStyle = (parking) => {
    return {
      borderColor: selectedParking === parking ? "#2196F3" : "#e6e6e6",
      backgroundColor: selectedParking === parking ? "#2196F3" : "white",
      color: selectedParking === parking ? "#FFFFFF" : "#8b8b8b",
    };
  };

  const handleParkingClick = (parking) => {
    setSelectedParking(parking);
  };
  
  return (
    <div>
      <div className="propert_Areadetails">
        <div className="pro_area">
          <h6 className="basic_looking pb-3 m-0">
            Add Area Details<span className="loc_ast">*</span>
          </h6>
          <Tooltip
            title={<img src={TooltipImg} alt="tooltip" />}
            placement="right-start"
          >
            <p style={{ padding: "0", marginBottom: "0" }}>
              <img src={proQuestion} alt="questionmark" />
            </p>
          </Tooltip>
        </div>
        <div>
          <div className="pro_drop">
            <input
              type="number"
              style={{ width: "289px" }}
              placeholder="Plot  Area"
              className="prc_maintanance hidden-arrows"
            />
            <select className="Loc_one" onChange={(e) => handleSquareChange(e)}>
              <option className="Loc_one" value="Sq.ft">
                Sq.ft
              </option>
              <option className="Loc_one" value="Sq-yrd">
                Sq-yrd
              </option>
              <option className="Loc_one" value="Sq-m">
                Sq-m
              </option>
              <option className="Loc_one" value="Acre">
                Acre
              </option>
              <option className="Loc_one" value="Hectare">
                Hectare
              </option>
              <option className="Loc_one" value="Ground">
                Ground
              </option>
              <option className="Loc_one" value="Rood">
                Rood
              </option>
              <option className="Loc_one" value="Cent">
                Cent
              </option>
            </select>
          </div>

          <div
            className="pro_drop prc_maintain1 p-0"
            style={{ width: "289px" }}
          >
            <input
              type="number"
              style={{ width: "289px" }}
              placeholder="Plot Length"
              className="prc_maintanance hidden-arrows"
            />
            <span style={{ width: "45px" }}>(in ft.)</span>
          </div>

          <div>
            <div
              className="pro_drop prc_maintain1 p-0"
              style={{ width: "289px" }}
            >
              <input
                type="number"
                style={{ width: "289px" }}
                placeholder="Plot Breadth"
                className="prc_maintanance hidden-arrows"
              />
              <span style={{ width: "45px" }}>(in ft.)</span>
            </div>
          </div>
        </div>
      </div>
      <h6 className="basic_looking pb-3 m-0">Facilities</h6>
      <div className="ofc_facility">
        <div>
          <div className="price_moreprbdetails">
            <div className="prc_maintain1">
              <input
                type="number"
                style={{ width: "289px" }}
                placeholder="Private Washrooms"
                className="prc_maintanance hidden-arrows"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="price_moreprbdetails">
            <div className="prc_maintain1">
              <input
                type="number"
                style={{ width: "289px" }}
                placeholder="Public Washrooms"
                className="prc_maintanance hidden-arrows"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pro_reserved">
        <h6 className="basic_looking pb-3 m-0">
          Availability Status<span className="loc_ast">*</span>
        </h6>
        <div className="d-flex align-items-center">
          <div className="pe-4">
            <h6 className="loc_bedroom">Possession by</h6>
            <button
              className="Loc_one"
              style={getParkingButtonStyle("Ready to move")}
              onClick={() => handleParkingClick("Ready to move")}
            >
              Ready to move
            </button>

            <button
              className="Loc_one"
              style={getParkingButtonStyle("Under construction")}
              onClick={() => handleParkingClick("Under construction")}
            >
              Under construction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingPro;