import { useState } from "react";
import proQuestion from "../../../../../assets/Icons/locquestion.svg";
import Tooltip from "@mui/material/Tooltip";
import TooltipImg from "../../../../../assets/Icons/tooltipimg.svg";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


const AgriProFlow = () => {

    const [selectedSquare,setSelectedSquare] = useState(null);
    const [selectedParking, setSelectedParking] = useState("");
    const [selectedOpenParking, setSelectedOpenParking] = useState("");
    const [showDirectionDropdown] = useState(false);  
    const [selectedDirection, setSelectedDirection] = useState("");
    const [lease, SetLease] = useState("");
    const [boundary, setBoundary] = useState("");
  
    const handleSquareChange = (e) => {
      setSelectedSquare(parseInt(e.target.value));
    };
    const handleParkingChange = (e) => {
      const selectedOption = e.target.value;
      setSelectedParking(selectedOption);
    };
  
    const handleOpenParkingClick = (openParking) => {
      setSelectedOpenParking(openParking);
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
  
    const getLeaseButtonStyle = (CompanyLease) => {
      return {
        backgroundColor: lease === CompanyLease ? "#2196F3" : "white",
        borderColor: lease === CompanyLease ? "#2196F3" : "#e6e6e6",
        color: lease === CompanyLease ? "#FFFFFF" : "#8b8b8b",
      };
    };

    const handleLeaseClick = (CompanyLease) => {
      SetLease(CompanyLease);
    };

    const getBoundaryButtonStyle = (companyBoundary) => {
      return {
        backgroundColor: boundary === companyBoundary ? "#2196F3" : "white",
        borderColor: boundary === companyBoundary ? "#2196F3" : "#e6e6e6",
        color: boundary === companyBoundary ? "#FFFFFF" : "#8b8b8b",
      };
    };

    const handleBoundaryClick = (companyBoundary) => {
      setBoundary(companyBoundary);
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
  
            <div className="pro_drop prc_maintain1 p-0"
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
              <div className="pro_drop prc_maintain1 p-0"
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
       
        <div className="pro_floorDetails">
          <h6 className="basic_looking pb-3 m-0">property facing details</h6>
          <div className="pe-4">
            <select className="Loc_one"
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
        <h6 className="basic_looking pb-3 m-0">Width of road facing the plot</h6>
        <div className="price_moreprbdetails">
          <div className="prc_maintain1">
            <input
              type="number"
              style={{ width: "289px" }}
              placeholder="Road width"
              className="prc_maintanance hidden-arrows"
            />
            <span>Meters</span>
          </div>
        </div>
        <div className="price_part1" style={{ paddingBottom: "30px" }}>
          <h6 className="basic_looking pb-3 m-0">
            Any construction done<span className="loc_ast">*</span>
          </h6>
          <div>
            <button
              className="loc_bhkopt"
              style={getLeaseButtonStyle("Yes")}
              onClick={() => handleLeaseClick("Yes")}
            >
              Yes
            </button>
            <button
              className="loc_bhkopt"
              style={getLeaseButtonStyle("No")}
              onClick={() => handleLeaseClick("No")}
            >
              No
            </button>
          </div>
        </div>
        <div className="price_part1" style={{ paddingBottom: "30px" }}>
          <h6 className="basic_looking pb-3 m-0">
            Boundary wall around the property<span className="loc_ast">*</span>
          </h6>
          <div>
            <button
              className="loc_bhkopt"
              style={getBoundaryButtonStyle("Yes")}
              onClick={() => handleBoundaryClick("Yes")}
            >
              Yes
            </button>
            <button
              className="loc_bhkopt"
              style={getBoundaryButtonStyle("No")}
              onClick={() => handleBoundaryClick("No")}
            >
              No
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

export default AgriProFlow