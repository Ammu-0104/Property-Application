import React, { useState } from "react";
import Cctv from "../../../../../assets/Icons/amacctv.svg";
import PowerBackup from "../../../../../assets/Icons/amapowerbackup.svg";
import Security from "../../../../../assets/Icons/amaflowsecurity.svg";
import VaastuComplaint from "../../../../../assets/Icons/amaflowvasstu.svg";
import WifiConnectivity from "../../../../../assets/Icons/ofcamawifi.svg";
import DGAvailability from "../../../../../assets/Icons/ofcamadg.svg";
import WaterStorage from "../../../../../assets/Icons/amaflowstorage.svg";
import Cafeteria from "../../../../../assets/Icons/amaflowcafeteria.svg";

const RetailAmaFlow = () => {
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  const handleAmenityClick = (amenity) => {
    setSelectedAmenity(amenity);
  };

  const getAmenitiesButtonStyle = (amenity) => {
    return {
      borderColor: selectedAmenity === amenity ? "#2196F3" : "#e6e6e6",
      backgroundColor: selectedAmenity === amenity ? "#eff5fc" : "white",
      color: selectedAmenity === amenity ? "#8b8b8b" : "#8b8b8b",
    };
  };

  return (
    <div>
      <div className="amanity_furniture pb-5">
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("Cctv")}
          style={getAmenitiesButtonStyle("Cctv")}
        >
          <div>
            <img src={Cctv} alt="dining table" />
          </div>
          <div>
            <p className="ama_space m-0 text-center">CCTV</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("PowerBackup")}
          style={getAmenitiesButtonStyle("PowerBackup")}
        >
          <div>
            <img src={PowerBackup} alt="dining table" />
          </div>
          <div>
            <p className="m-0 ama_space">Power Backup</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("Wifi Connectivity")}
          style={getAmenitiesButtonStyle("Wifi Connectivity")}
        >
          <div>
            <img src={WifiConnectivity} alt="Wifi Connectivity" />
          </div>
          <div>
            <p className="m-0 amaFlowFire">Wifi Connectivity</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("24 x 7 Security")}
          style={getAmenitiesButtonStyle("24 x 7 Security")}
        >
          <div>
            <img src={Security} alt="Security" />
          </div>
          <div>
            <p className="ama_space m-0 text-center">24 x 7 Security</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("Cafeteria")}
          style={getAmenitiesButtonStyle("Cafeteria")}
        >
          <div>
            <img src={Cafeteria} alt="dining table" />
          </div>
          <div>
            <p className="m-0">Cafeteria</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("Vaastu Complaint")}
          style={getAmenitiesButtonStyle("Vaastu Complaint")}
        >
          <div>
            <img src={VaastuComplaint} alt="Vaastu Complaint" />
          </div>
          <div>
            <p className="m-0 amaFlowFire">Vaastu Complaint</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("DGAvailability")}
          style={getAmenitiesButtonStyle("DGAvailability")}
        >
          <div>
            <img src={DGAvailability} alt="DGAvailability" />
          </div>
          <div>
            <p className="m-0 ama_space amaFlowFire">DG availability</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("WaterStorage")}
          style={getAmenitiesButtonStyle("WaterStorage")}
        >
          <div>
            <img src={WaterStorage} alt="dining table" />
          </div>
          <div>
            <p className="m-0 text-center ama_space">Water Storage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailAmaFlow;
