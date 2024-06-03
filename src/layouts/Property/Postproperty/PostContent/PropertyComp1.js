import React, { useState } from "react";
import "../../../../layouts/Property/Property.css";
import { usePropertyContext } from "../Mycontext";

const PropertyComp1 = () => {
  const [selectedBHK, setSelectedBHK] = useState(null);
  const [selectedBedrooms, setSelectedBedrooms] = useState(null);
  const [selectedBathrooms, setSelectedBathrooms] = useState(null);
  const [selectedBalcony, setSelectedBalcony] = useState(null);
  const { selectedProperty } = usePropertyContext();

  const handleBHKClick = (bhkType) => {
    setSelectedBHK(bhkType);
  };

  const getBHKButtonStyle = (bhkType) => {
    return {
      borderColor: selectedBHK === bhkType ? "#2196F3" : "#e6e6e6",
      backgroundColor: selectedBHK === bhkType ? "#2196F3" : "white",
      color: selectedBHK === bhkType ? "#FFFFFF" : "#8b8b8b",
    };
  };

  const handleBedroomChange = (e) => {
    setSelectedBedrooms(parseInt(e.target.value, 10));
  };

  const handleBedroomClick = (bedroom) => {
    setSelectedBedrooms(bedroom);
  };

  const getBedroomButtonStyle = (bedroom) => {
    return {
      borderColor: selectedBedrooms === bedroom ? "#2196F3" : "#E6E6E6",
      backgroundColor: selectedBedrooms === bedroom ? "#2196F3" : "white",
      color: selectedBedrooms === bedroom ? "#FFFFFF" : "#8b8b8b",
    };
  };

  const handleBathroomClick = (bathroom) => {
    setSelectedBathrooms(bathroom);
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

  const getBalconyButtonStyle = (balcony) => {
    return {
      borderColor: selectedBalcony === balcony ? "#2196F3" : "#e6e6e6",
      backgroundColor: selectedBalcony === balcony ? "#2196F3" : "white",
      color: selectedBalcony === balcony ? "#FFFFFF" : "#8b8b8b",
    };
  };

  return (
    <div>
      {selectedProperty !== "Apartments / Flat" &&
        selectedProperty !== "Independent House / Villa" &&
        selectedProperty !== "Condominiums (Condos)" &&
        selectedProperty !== "Cottages" &&
        selectedProperty !== "Duplexes and Triplexes" &&
        selectedProperty !== " Farm House" &&
        selectedProperty !== " Bungalows" &&
        selectedProperty !== "Paying Guest / Mansions" &&
        selectedProperty !== "Others" &&
        selectedProperty !== "Plot / Land" &&
        selectedProperty !== "Office Space" &&
        selectedProperty !== "Research Parks / Technology" &&
        selectedProperty !== "Retail Spaces" &&
        selectedProperty !== "Show room" &&
        selectedProperty !== "ATM Space" &&
        selectedProperty !== "Ware house" &&
        selectedProperty !== "Mixed-Use / Special Purpose" &&
        selectedProperty !== "Hotels / Hospitality" &&
        selectedProperty !== "Crop Land" &&
        selectedProperty !== "Manufacturing Land" &&
        selectedProperty !== "Film / Production Studio" && (
          <div>
            <div className="loc_bhk">
              <h6 className="basic_looking pb-3 m-0">BKH Type</h6>
              <div>
                <button
                  className="loc_bhkopt"
                  style={getBHKButtonStyle("1 RK")}
                  onClick={() => handleBHKClick("1 RK")}
                >
                  1 RK
                </button>
                <button
                  className="loc_bhkopt"
                  style={getBHKButtonStyle("1 BHK")}
                  onClick={() => handleBHKClick("1 BHK")}
                >
                  1 BHK
                </button>
                <button
                  className="loc_bhkopt"
                  style={getBHKButtonStyle("2 BHK")}
                  onClick={() => handleBHKClick("2 BHK")}
                >
                  2 BHK
                </button>
                <button
                  className="loc_bhkopt"
                  style={getBHKButtonStyle("3 BHK")}
                  onClick={() => handleBHKClick("3 BHK")}
                >
                  3 BHK
                </button>
                <button
                  className="loc_bhkopt"
                  style={getBHKButtonStyle("4 BHK")}
                  onClick={() => handleBHKClick("4 BHK")}
                >
                  4 BHK
                </button>
                <button
                  className="loc_bhkopt"
                  style={getBHKButtonStyle("4+ BHK")}
                  onClick={() => handleBHKClick("4+ BHK")}
                >
                  4+ BHK
                </button>
              </div>
            </div>

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
          </div>
        )}
    </div>
  );
};

export default PropertyComp1;
