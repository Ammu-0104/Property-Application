import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import TooltipImg from "../../../../../assets/Icons/tooltipimg.svg";
import proQuestion from "../../../../../assets/Icons/locquestion.svg";
import Armchair from "../../../../../assets/Icons/proarmchair.svg";
import Armchair1 from "../../../../../assets/Icons/proarmchair 1.svg";

const FilmPro = () => {
  const [selectedBedrooms, setSelectedBedrooms] = useState(null);
  const [selectedBathrooms, setSelectedBathrooms] = useState(null);
  const [selectedBalcony, setSelectedBalcony] = useState(null);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [selectedOtherRooms, setSelectedOtherRooms] = useState([]);
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const [selectedParking, setSelectedParking] = useState("");
  const [selectedOpenParking, setSelectedOpenParking] = useState(null);
  const [selectedTotalFloors, setSelectedTotalFloors] = useState("");
  const [selectedPropertyFloor, setSelectedPropertyFloor] = useState("");
  const [showDirectionDropdown, setShowDirectionDropdown] = useState(false);
  const [selectedDirection, setSelectedDirection] = useState("");

  const getBedroomButtonStyle = (bedroom) => {
    return {
      borderColor: selectedBedrooms === bedroom ? "#2196F3" : "#E6E6E6",
      backgroundColor: selectedBedrooms === bedroom ? "#2196F3" : "white",
      color: selectedBedrooms === bedroom ? "#FFFFFF" : "#8b8b8b",
    };
  };

  const handleBedroomClick = (bedroom) => {
    setSelectedBedrooms(bedroom);
  };

  const handleBedroomChange = (e) => {
    setSelectedBedrooms(parseInt(e.target.value, 10));
  };

  const handleBathroomClick = (bathroom) => {
    setSelectedBathrooms(bathroom);
  };

  const getBalconyButtonStyle = (balcony) => {
    return {
      borderColor: selectedBalcony === balcony ? "#2196F3" : "#e6e6e6",
      backgroundColor: selectedBalcony === balcony ? "#2196F3" : "white",
      color: selectedBalcony === balcony ? "#FFFFFF" : "#8b8b8b",
    };
  };

  const getBathroomButtonStyle = (bathroom) => {
    return {
      borderColor: selectedBathrooms === bathroom ? "#2196F3" : "#e6e6e6",
      backgroundColor: selectedBathrooms === bathroom ? "#2196F3" : "white",
      color: selectedBathrooms === bathroom ? "#FFFFFF" : "#8b8b8b",
    };
  };

  const handleBathroomChange = (e) => {
    setSelectedBathrooms(parseInt(e.target.value, 10));
  };

  const handleBalconyclick = (balcony) => {
    setSelectedBalcony(balcony);
  };

  const handleBalconyChange = (e) => {
    setSelectedBalcony(parseInt(e.target.value, 10));
  };

  const handleSquareChange = (e) => {
    setSelectedSquare(parseInt(e.target.value));
  };

  const handleOtherRoomclick = (otherRoom) => {
    if (selectedOtherRooms.includes(otherRoom)) {
      setSelectedOtherRooms(
        selectedOtherRooms.filter((room) => room !== otherRoom)
      );
    } else {
      setSelectedOtherRooms([...selectedOtherRooms, otherRoom]);
    }
  };

  const getOtherRoomButtonStyle = (otherRoom) => {
    return {
      backgroundColor: selectedOtherRooms.includes(otherRoom)
        ? "#2196F3"
        : "white",
      color: selectedOtherRooms.includes(otherRoom) ? "#FFFFFF" : "#8b8b8b",
    };
  };

  const handleFurnitureClick = (furniture) => {
    setSelectedFurniture(furniture);
  };

  const getFurnitureButtonStyle = (furniture) => {
    return {
      borderColor: selectedFurniture === furniture ? "#2196F3" : "#e6e6e6",
      backgroundColor: selectedFurniture === furniture ? "#2196F3" : "white",
      color: selectedFurniture === furniture ? "#FFFFFF" : "#8b8b8b",
    };
  };
  const handleParkingClick = (parking) => {
    setSelectedParking(parking);
  };

  const handleParkingChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedParking(selectedOption);
  };

  const getParkingButtonStyle = (parking) => {
    return {
      borderColor: selectedParking === parking ? "#2196F3" : "#e6e6e6",
      backgroundColor: selectedParking === parking ? "#2196F3" : "white",
      color: selectedParking === parking ? "#FFFFFF" : "#8b8b8b",
    };
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


  return (
    <div>
      
      <div className="loc_room">
        <h6 className="basic_looking pb-3 m-0">
          Add Rooms Details <span className="loc_ast">*</span>
        </h6>
        <div className="loc_wrap">
          <div className="loc_broom">
            <h6 className="loc_bedroom">
              Bedrooms<span className="loc_ast">*</span>
            </h6>
            <button
              className="Loc_one"
              style={getBedroomButtonStyle(1)}
              onClick={() => handleBedroomClick(1)}
            >
              1
            </button>
            <button
              className="Loc_one"
              style={getBedroomButtonStyle(2)}
              onClick={() => handleBedroomClick(2)}
            >
              2
            </button>
            <button
              className="Loc_one"
              style={getBedroomButtonStyle(3)}
              onClick={() => handleBedroomClick(3)}
            >
              3
            </button>
            <select
              style={{ outline: "none" }}
              className="Loc_one"
              value={selectedBedrooms || ""}
              onChange={handleBedroomChange}
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
            <h6 className="loc_bedroom">
              Bathrooms<span className="loc_ast">*</span>
            </h6>
            <button
              className="Loc_one"
              style={getBathroomButtonStyle(1)}
              onClick={() => handleBathroomClick(1)}
            >
              1
            </button>
            <button
              className="Loc_one"
              style={getBathroomButtonStyle(2)}
              onClick={() => handleBathroomClick(2)}
            >
              2
            </button>
            <button
              className="Loc_one"
              style={getBathroomButtonStyle(3)}
              onClick={() => handleBathroomClick(3)}
            >
              3
            </button>
            <select
              className="Loc_one"
              value={selectedBathrooms || ""}
              onChange={handleBathroomChange}
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
            <h6 className="loc_bedroom">
              Balconies<span className="loc_ast">*</span>
            </h6>
            <button
              className="Loc_one"
              style={getBalconyButtonStyle(1)}
              onClick={() => handleBalconyclick(1)}
            >
              1
            </button>
            <button
              className="Loc_one"
              style={getBalconyButtonStyle(2)}
              onClick={() => handleBalconyclick(2)}
            >
              2
            </button>
            <button
              className="Loc_one"
              style={getBalconyButtonStyle(3)}
              onClick={() => handleBalconyclick(3)}
            >
              3
            </button>
            <select
              className="Loc_one"
              value={selectedBalcony || ""}
              onChange={handleBalconyChange}
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
        </div>
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
          <div className="pro_drop">
            <input
              type="number"
              style={{ width: "289px" }}
              placeholder="Built-up Area"
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

          <div>
            <div className="pro_drop">
              <input
                type="number"
                style={{ width: "289px" }}
                placeholder="Annual dues amount"
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

      <div className="pro_otherromms">
        <h6 className="basic_looking pb-3 m-0">Other rooms</h6>
        <div>
          <button
            className="loc_bhkopt"
            style={getOtherRoomButtonStyle("poojaroom")}
            onClick={() => handleOtherRoomclick("poojaroom")}
          >
            Pooja Room
          </button>
          <button
            className="loc_bhkopt"
            style={getOtherRoomButtonStyle("studyroom")}
            onClick={() => handleOtherRoomclick("studyroom")}
          >
            Study Room
          </button>
          <button
            className="loc_bhkopt"
            style={getOtherRoomButtonStyle(" Servant Room")}
            onClick={() => handleOtherRoomclick(" Servant Room")}
          >
            Servant Room
          </button>
          <button
            className="loc_bhkopt"
            style={getOtherRoomButtonStyle("storeroom")}
            onClick={() => handleOtherRoomclick("storeroom")}
          >
            Store Room
          </button>
        </div>
      </div>

      <div className="pro_otherromms">
        <h6 className="basic_looking pb-3 m-0">
          Furnish Type<span className="loc_ast">*</span>
        </h6>
        <div className="d-flex">
          <button
            className="loc_bhkopt d-flex justify-content-center align-items-center"
            style={getFurnitureButtonStyle("Fully Furnished")}
            onClick={() => handleFurnitureClick("Fully Furnished")}
          >
            <img
              src={Armchair}
              alt="armchair"
              style={{
                filter:
                  selectedFurniture === "Fully Furnished"
                    ? "invert(65%)"
                    : "none",
              }}
            />
            Fully Furnished
          </button>
          <button
            className="loc_bhkopt d-flex justify-content-center align-items-center"
            style={getFurnitureButtonStyle("Semi Furnished")}
            onClick={() => handleFurnitureClick("Semi Furnished")}
          >
            <img
              src={Armchair}
              alt="armchair"
              style={{
                filter:
                  selectedFurniture === "Semi Furnished"
                    ? "invert(65%)"
                    : "none",
              }}
            />
            Semi Furnished
          </button>
          <button
            className="loc_bhkopt d-flex justify-content-center align-items-center"
            style={getFurnitureButtonStyle("Unfurnished")}
            onClick={() => handleFurnitureClick("Unfurnished")}
          >
            <img src={Armchair1} alt="armchair" />
            Unfurnished
          </button>
        </div>
      </div>

      <div className="pro_reserved">
        <h6 className="basic_looking pb-3 m-0">Reserved Parking</h6>
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

export default FilmPro;
