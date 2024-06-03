import React, { useState } from "react";
import Cctv from "../../../../../assets/Icons/amacctv.svg";
import PowerBackup from "../../../../../assets/Icons/amapowerbackup.svg";
import Furnishing from "../../../../../assets/Icons/ofcamafurniture.svg";
import Security from "../../../../../assets/Icons/amaflowsecurity.svg";
import Lift from "../../../../../assets/Icons/amalift.svg";
import VaastuComplaint from "../../../../../assets/Icons/amaflowvasstu.svg";
import WifiConnectivity from "../../../../../assets/Icons/ofcamawifi.svg";
import FireExtinguishers from "../../../../../assets/Icons/amaflowextinguish.svg";
import FireSensor from "../../../../../assets/Icons/ofcamafirenoc.svg";
import WaterSupply from "../../../../../assets/Icons/amawatersupply.svg";
import Ups from "../../../../../assets/Icons/ofcamausb.svg";
import Gas from "../../../../../assets/Icons/amagas.svg";
import DGAvailability from "../../../../../assets/Icons/ofcamadg.svg";
import WaterStorage from "../../../../../assets/Icons/amaflowstorage.svg";
import ReceptionArea from "../../../../../assets/Icons/ofcamareception.svg";
import FireNOCCertified from "../../../../../assets/Icons/ofcamafirenoc.svg";
import OccupancyCertified from "../../../../../assets/Icons/ofcamaoccupancy.svg";
import CentralAirConditioning from "../../../../../assets/Icons/ofcamaoccupancy.svg";
import OxygenDuct from "../../../../../assets/Icons/ofcamaoxgen.svg";

const OfcAmaFlow = () => {
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
          onClick={() => handleAmenityClick("Furnishing")}
          style={getAmenitiesButtonStyle("Furnishing")}
        >
          <div>
            <img src={Furnishing} alt="Furnishing" />
          </div>
          <div>
            <p className="m-0 ama_space">Furnishing</p>
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
          onClick={() => handleAmenityClick("Lift")}
          style={getAmenitiesButtonStyle("Lift")}
        >
          <div>
            <img src={Lift} alt="dining table" />
          </div>
          <div>
            <p className="m-0">Lift</p>
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
          onClick={() => handleAmenityClick("FireExtinguishers")}
          style={getAmenitiesButtonStyle("FireExtinguishers")}
        >
          <div>
            <img src={FireExtinguishers} alt="dining table" />
          </div>
          <div>
            <p className="m-0 amaFlowFire">Fire Extinguishers</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("Fire Sensor")}
          style={getAmenitiesButtonStyle("Fire Sensor")}
        >
          <div>
            <img src={FireSensor} alt="Fire Sensor" />
          </div>
          <div>
            <p className="m-0 amaFlowFire">Fire Sensor</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("WaterSupply")}
          style={getAmenitiesButtonStyle("WaterSupply")}
        >
          <div>
            <img src={WaterSupply} alt="dining table" />
          </div>
          <div>
            <p className="m-0">Water Supply</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("ups")}
          style={getAmenitiesButtonStyle("ups")}
        >
          <div>
            <img src={Ups} alt="dining table" />
          </div>
          <div>
            <p className="m-0">UPS</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("Gas")}
          style={getAmenitiesButtonStyle("Gas")}
        >
          <div>
            <img src={Gas} alt="dining table" />
          </div>
          <div>
            <p className="m-0 ama_space">Gas Pipeline</p>
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
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("ReceptionArea")}
          style={getAmenitiesButtonStyle("ReceptionArea")}
        >
          <div>
            <img src={ReceptionArea} alt="Reception Area" />
          </div>
          <div>
            <p className="m-0 text-center ama_space">Reception Area</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("Fire NOC Certified")}
          style={getAmenitiesButtonStyle("Fire NOC Certified")}
        >
          <div>
            <img src={FireNOCCertified} alt="dining table" />
          </div>
          <div>
            <p className="m-0 text-center ama_space">Fire NOC Certified</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("OccupancyCertified")}
          style={getAmenitiesButtonStyle("OccupancyCertified")}
        >
          <div>
            <img src={OccupancyCertified} alt="OccupancyCertified" />
          </div>
          <div>
            <p className="m-0 text-center ama_space">Occupancy Certified</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("CentralAirConditioning")}
          style={getAmenitiesButtonStyle("CentralAirConditioning")}
        >
          <div>
            <img src={CentralAirConditioning} alt="CentralAirConditioning" />
          </div>
          <div>
            <p className="m-0 text-center ama_space">Central Air Conditioning</p>
          </div>
        </div>
        <div
          className="ama_cont me-3"
          onClick={() => handleAmenityClick("OxygenDuct")}
          style={getAmenitiesButtonStyle("OxygenDuct")}
        >
          <div>
            <img src={OxygenDuct} alt="dining table" />
          </div>
          <div>
            <p className="m-0 text-center ama_space">Oxygen Duct</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfcAmaFlow;
