import React, { useState } from "react";
import TooltipImg from "../../../../../assets/Icons/tooltipimg.svg";
import proQuestion from "../../../../../assets/Icons/locquestion.svg";
import Tooltip from "@mui/material/Tooltip";
import { usePropertyContext } from "../../Mycontext";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const OfcPropertyFlow = () => { 
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const { selectedProperty } = usePropertyContext();
  const [selectedParking, setSelectedParking] = useState("");
  const [selectedOpenParking, setSelectedOpenParking] = useState(null);
  const [selectedTotalFloors, setSelectedTotalFloors] = useState("");
  const [selectedDirection, setSelectedDirection] = useState("");
  const [selectedPropertyFloor, setSelectedPropertyFloor] = useState("");
  const [showDirectionDropdown, setShowDirectionDropdown] = useState(false);
  const [ageProperty, setAgeProperty] = useState([]);

  const handleSquareChange = (e) => {
    setSelectedSquare(parseInt(e.target.value));
  };
  const getFurnitureButtonStyle = (furniture) => {
    return {
      borderColor: selectedFurniture === furniture ? "#2196F3" : "#e6e6e6",
      backgroundColor: selectedFurniture === furniture ? "#2196F3" : "white",
      color: selectedFurniture === furniture ? "#FFFFFF" : "#8b8b8b",
    };
  };

  const handleFurnitureClick = (furniture) => {
    setSelectedFurniture(furniture);
  };

  const handleParkingClick = (parking) => {
    setSelectedParking(parking);
  };

  const getParkingButtonStyle = (parking) => {
    return {
      borderColor: selectedParking === parking ? "#2196F3" : "#e6e6e6",
      backgroundColor: selectedParking === parking ? "#2196F3" : "white",
      color: selectedParking === parking ? "#FFFFFF" : "#8b8b8b",
    };
  };
  const handleParkingChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedParking(selectedOption);
  };
  const getOpenParkingButtonStyle = (openParking) => {
    return {
      borderColor: selectedOpenParking === openParking ? "#2196F3" : "#e6e6e6",
      backgroundColor:
        selectedOpenParking === openParking ? "#2196F3" : "white",
      color: selectedOpenParking === openParking ? "#FFFFFF" : "#8b8b8b",
    };
  };

  const handleOpenParkingChange = (e) => {
    setSelectedOpenParking(parseInt(e.target.value, 10));
  };
  const handleOpenParkingClick = (openParking) => {
    setSelectedOpenParking(openParking);
  };

  const handleTotalFloorsChange = (event) => {
    setSelectedTotalFloors(event.target.value);
  };

  const handlePropertyFloorChange = (event) => {
    setSelectedPropertyFloor(event.target.value);
  };

  const handleDirectionChange = (e) => {
    setSelectedDirection(e.target.value);
  };

  const getFacingParkingButtonStyle = (direction) => {
    return {
      backgroundColor: "#2196F3",
      color: "#FFFF",
    };
  };
  const getAgePropertyButtonStyle = (property) => {
    return {
      borderColor: ageProperty.includes(property) ? "#2196F3" : "#e6e6e6",
      backgroundColor: ageProperty.includes(property) ? "#2196F3" : "white",
      color: ageProperty.includes(property) ? "#FFFFFF" : "#8b8b8b",
    };
  };
  const handleAgePropertyClick = (property) => {
    setAgeProperty(property);
  };

  return (
    <div>
      <div className="propert_Areadetails ofc_pro">
        <div className="pro_area">
          <h6 className="basic_looking pb-3 m-0">
            About Property<span className="loc_ast">*</span>
          </h6>
        </div>

        <div className="pro_drop mb-5">
          <select
            className="Loc_one"
            onChange={(e) => handleSquareChange(e)}
            style={{ width: "289px" }}
          >
            <option className="Loc_one" value="Select Land Zone">
              Select Land Zone
            </option>
            <option className="Loc_one" value="Industrial">
              Industrial
            </option>
            <option className="Loc_one" value="Residential">
              Residential
            </option>
            <option className="Loc_one" value="Transport and Communication">
              Transport and Communication
            </option>
            <option className="Loc_one" value="Public Utilities">
              Public Utilities
            </option>
            <option className="Loc_one" value="Public and Semi Public Use">
              Public and Semi Public Use
            </option>
            <option className="Loc_one" value="Open Spaces ">
              Open Spaces
            </option>
            <option className="Loc_one" value="Agricultural Zone">
              Agricultural Zone
            </option>
            <option className="Loc_one" value="Special Economic Zone">
              Special Economic Zone
            </option>
            <option className="Loc_one" value="Natural Conservation Zone">
              Natural Conservation Zone
            </option>
            <option className="Loc_one" value="Government Use">
              Government Use
            </option>
            <option className="Loc_one" value="Others">
              Others
            </option>
          </select>
        </div>
        <div className="pro_otherromms">
          <h6 className="basic_looking pb-3 m-0">Location Hub</h6>
          <div className="d-flex mb-2">
            <button
              className="loc_bhkopt d-flex justify-content-center align-items-center ofc_park"
              style={getFurnitureButtonStyle("IT Park")}
              onClick={() => handleFurnitureClick("IT Park")}
            >
              IT Park
            </button>
            <button
              className="loc_bhkopt d-flex justify-content-center align-items-center ofc_park"
              style={getFurnitureButtonStyle("Business Park")}
              onClick={() => handleFurnitureClick("Business Park")}
            >
              Business Park
            </button>
            <button
              className="loc_bhkopt d-flex justify-content-center align-items-center ofc_park"
              style={getFurnitureButtonStyle("Others")}
              onClick={() => handleFurnitureClick("Others")}
            >
              Others
            </button>
          </div>
          {selectedFurniture === "Others" && (
            <div className="pro_drop">
              <input
                type="text"
                style={{ width: "289px" }}
                placeholder="Others Location Hub *"
                className="prc_maintanance hidden-arrows ofc_hubOther"
              />
            </div>
          )}
        </div>
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
                placeholder="carpet area"
                className="prc_maintanance hidden-arrows"
              />
              <select
                className="Loc_one"
                onChange={(e) => handleSquareChange(e)}
              >
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
            <div className="pro_drop">
              <input
                type="number"
                style={{ width: "289px" }}
                placeholder="Super Built-up Area"
                className="prc_maintanance hidden-arrows"
              />

              <select
                className="Loc_one"
                onChange={(e) => handleSquareChange(e)}
              >
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
                placeholder="Min. Number of seats*"
                className="prc_maintanance hidden-arrows"
              />
            </div>
          </div>
          <div className="price_moreprbdetails">
            <div className="prc_maintain1">
              <input
                type="number"
                style={{ width: "289px" }}
                placeholder="Number of Cabins *"
                className="prc_maintanance hidden-arrows"
              />
            </div>
          </div>
          <div className="price_moreprbdetails">
            <div className="prc_maintain1">
              <input
                type="number"
                style={{ width: "289px" }}
                placeholder="Private Washrooms*"
                className="prc_maintanance hidden-arrows"
              />
            </div>
          </div>
          <div className="price_moreprbdetails">
            <div className="prc_maintain1">
              <input
                type="number"
                style={{ width: "289px" }}
                placeholder="Conference Room"
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
                placeholder="Max. Number of seats *"
                className="prc_maintanance hidden-arrows"
              />
            </div>
          </div>
          <div className="price_moreprbdetails">
            <div className="prc_maintain1">
              <input
                type="number"
                style={{ width: "289px" }}
                placeholder="Number of Meeting Rooms *"
                className="prc_maintanance hidden-arrows"
              />
            </div>
          </div>
          <div className="price_moreprbdetails">
            <div className="prc_maintain1">
              <input
                type="number"
                style={{ width: "289px" }}
                placeholder="Public Washrooms *"
                className="prc_maintanance hidden-arrows"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pro_otherromms">
        <h6 className="basic_looking pb-3 m-0">Location Hub</h6>
        <div className="d-flex mb-2">
          <button
            className="loc_bhkopt d-flex justify-content-center align-items-center ofc_park"
            style={getFurnitureButtonStyle("IT Park")}
            onClick={() => handleFurnitureClick("IT Park")}
          >
            Available
          </button>
          <button
            className="loc_bhkopt d-flex justify-content-center align-items-center ofc_park"
            style={getFurnitureButtonStyle("Business Park")}
            onClick={() => handleFurnitureClick("Business Park")}
          >
            Non-Available
          </button>
        </div>
      </div>
      <div className="pro_reserved">
        <h6 className="basic_looking pb-3 m-0">Parking Space</h6>
        <div className="d-flex align-items-center">
          <div className="pe-4">
            <h6 className="loc_bedroom">Covered Parking</h6>
            <button
              className="Loc_one"
              style={getParkingButtonStyle(1)}
              onClick={() => handleParkingClick(1)}
            >
              1
            </button>

            <button
              className="Loc_one"
              style={getParkingButtonStyle(2)}
              onClick={() => handleParkingClick(2)}
            >
              2
            </button>
            <button
              className="Loc_one"
              style={getParkingButtonStyle(3)}
              onClick={() => handleParkingClick(3)}
            >
              3
            </button>
            <select
              className="Loc_one"
              value={selectedParking || ""}
              onChange={handleParkingChange}
            >
              <option className="Loc_one" value="4">
                4
              </option>
              <option className="Loc_one" value="5">
                5
              </option>
              <option className="Loc_one" value="6">
                6
              </option>
              <option className="Loc_one" value="7">
                7
              </option>
              <option className="Loc_one" value="8">
                8
              </option>
              <option className="Loc_one" value="9">
                9
              </option>
              <option className="Loc_one" value="10">
                10
              </option>
            </select>
          </div>

          <div>
            <h6 className="loc_bedroom">Open Parking</h6>
            <button
              className="Loc_one"
              style={getOpenParkingButtonStyle(1)}
              onClick={() => handleOpenParkingClick(1)}
            >
              1
            </button>
            <button
              className="Loc_one"
              style={getOpenParkingButtonStyle(2)}
              onClick={() => handleOpenParkingClick(2)}
            >
              2
            </button>
            <button
              className="Loc_one"
              style={getOpenParkingButtonStyle(3)}
              onClick={() => handleOpenParkingClick(3)}
            >
              3
            </button>
            <select
              className="Loc_one"
              value={selectedOpenParking}
              onChange={handleOpenParkingChange}
            >
              {[4, 5, 6, 7, 8, 9, 10].map((value) => (
                <option
                  key={value}
                  className="Loc_one"
                  value={value.toString()}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="pro_floorDetails">
        <h6 className="basic_looking pb-3 m-0">
          Floor Details<span className="loc_ast">*</span>
        </h6>
        <div className="pe-4">
          <h6 className="loc_bedroom">
            Total no of floors and property facing details
          </h6>
          <select
            className="Loc_one"
            value={selectedTotalFloors}
            onChange={handleTotalFloorsChange}
          >
            {[
              "select Floor",
              "Total Floor",
              "Ground",
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
            ].map((value) => (
              <option key={value} className="Loc_one" value={value.toString()}>
                {value}
              </option>
            ))}
          </select>
          <select
            className="Loc_one"
            value={selectedPropertyFloor}
            onChange={handlePropertyFloorChange}
          >
            {[
              "select Property Floor",
              "Property on Floor",
              "Ground",
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
            ].map((value) => (
              <option key={value} className="Loc_one" value={value.toString()}>
                {value}
              </option>
            ))}
          </select>
          <select
            className="Loc_one"
            value={selectedParking || ""}
            onChange={handleParkingChange}
          >
            <option className="Loc_one" value="Select Facing">
              Select Facing
            </option>
            <option className="Loc_one" value="Facing">
              Facing
            </option>
            <option className="Loc_one" value="Plot Facing">
              Plot Facing
            </option>
            <option className="Loc_one" value="C.P Entrance Facing">
              C.P Entrance Facing
            </option>
            <option className="Loc_one" value="Build entrance Facing">
              Build entrance Facing
            </option>
            <option className="Loc_one" value="Flat Facing">
              Flat Facing
            </option>
          </select>

          {showDirectionDropdown && (
            <select
              className="Loc_one"
              value={selectedDirection || ""}
              onChange={handleDirectionChange}
            >
              <option value="East">East</option>
              <option value="West">West</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="North-East">North-East</option>
              <option value="South-East">South-East</option>
              <option value="North-West">North-West</option>
              <option value="South-West">South-West</option>
            </select>
          )}
          {selectedDirection && (
            <button
              className="Loc_one"
              style={getFacingParkingButtonStyle(selectedDirection)}
              onClick={() => handleOpenParkingClick(selectedDirection)}
            >
              {selectedDirection}
            </button>
          )}
        </div>
      </div>
      <div className="pro_ageOfProperty">
        <h6 className="basic_looking pb-3 m-0">
          Age of property<span className="loc_ast">*</span>
        </h6>
        <div>
          <button
            className="loc_bhkopt"
            style={getAgePropertyButtonStyle("0-1years")}
            onClick={() => handleAgePropertyClick("0-1years")}
          >
            0-1 years
          </button>
          <button
            className="loc_bhkopt"
            style={getAgePropertyButtonStyle("1-5years")}
            onClick={() => handleAgePropertyClick("1-5years")}
          >
            1-5 years
          </button>
          <button
            className="loc_bhkopt"
            style={getAgePropertyButtonStyle("5-10years")}
            onClick={() => handleAgePropertyClick("5-10years")}
          >
            5-10 years
          </button>
          <button
            className="loc_bhkopt"
            style={getAgePropertyButtonStyle("10+years")}
            onClick={() => handleAgePropertyClick("10+years")}
          >
            10+ years
          </button>
        </div>
      </div>
      <div className="pro_availableFrom">
        <h6 className="basic_looking  m-0">
          Available form<span className="loc_ast">*</span>
        </h6>
        <div className="pro_date">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label=" " />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
};

export default OfcPropertyFlow;
