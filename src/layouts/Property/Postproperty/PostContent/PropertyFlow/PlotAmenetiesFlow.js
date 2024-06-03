import React,{useState} from "react";
import Gas from "../../../../../assets/Icons/amagas.svg";
import Lift from '../../../../../assets/Icons/amalift.svg';
import Cctv from '../../../../../assets/Icons/amacctv.svg';
import Gym from '../../../../../assets/Icons/amagym.svg';
import Garden from '../../../../../assets/Icons/amagarden.svg';
import Sports from '../../../../../assets/Icons/amasports.svg';
import Swimming from '../../../../../assets/Icons/amaswimming.svg';
import ClubHouse from '../../../../../assets/Icons/amaclubhouse.svg';
import WaterSupply from '../../../../../assets/Icons/amawatersupply.svg';
import PowerBackup from '../../../../../assets/Icons/amapowerbackup.svg';
import Security from '../../../../../assets/Icons/amaflowsecurity.svg';
import FireExtinguishers from '../../../../../assets/Icons/amaflowextinguish.svg';
import VaastuComplaint from '../../../../../assets/Icons/amaflowvasstu.svg';
import Cafeteria from '../../../../../assets/Icons/amaflowcafeteria.svg';
import WaterStorage from '../../../../../assets/Icons/amaflowstorage.svg';
import { usePropertyContext } from "../../Mycontext";

const AmenitiesFlow = () => {
  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const { selectedProperty } = usePropertyContext();
  
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
      <div className="amaenities_cont">
        <h6 className="basic_looking pb-3 m-0">Flat furnishings</h6>
        <div className="amanity_furniture">
        <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("Cctv")}
          style={getAmenitiesButtonStyle("Cctv")}>
            <div>
              <img src={Cctv} alt="dining table" />
            </div>
            <div>
              <p className="ama_space m-0 text-center">CCTV</p>
            </div>
          </div>
          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("PowerBackup")}
          style={getAmenitiesButtonStyle("PowerBackup")}>
            <div>
              <img src={PowerBackup} alt="dining table" />
            </div>
            <div>
              <p className="m-0 ama_space">Power backup</p>
            </div>
          </div>
          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("WaterSupply")}
          style={getAmenitiesButtonStyle("WaterSupply")}>
            <div>
              <img src={WaterSupply} alt="dining table" />
            </div>
            <div>
              <p className="m-0">Water Supply</p>
            </div>
          </div>
          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("24 x 7 Security")}
          style={getAmenitiesButtonStyle("24 x 7 Security")}>
            <div>
              <img src={Security} alt="Security" />
            </div>
            <div>
              <p className="ama_space m-0 text-center">24 x 7 Security</p>
            </div>
          </div>

          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("Lift")}
          style={getAmenitiesButtonStyle("Lift")}>
            <div>
              <img src={Lift} alt="dining table" />
            </div>
            <div>
              <p className="m-0">Lift</p>
            </div>
          </div>
          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("Swimming")}
          style={getAmenitiesButtonStyle("Swimming")}>
            <div>
              <img src={Swimming} alt="dining table" />
            </div>
            <div>
              <p className="m-0 ama_space text-center">Swimming Pool</p>
            </div>
          </div>
         
          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("Gym")}
          style={getAmenitiesButtonStyle("Gym")}>
            <div>
              <img src={Gym} alt="dining table"/>
            </div>
            <div>
              <p className="m-0">Gym</p>
            </div>

          </div>
          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("Gas")}
          style={getAmenitiesButtonStyle("Gas")}>
            <div>
              <img src={Gas} alt="dining table" />
            </div>
            <div>
              <p className="m-0 ama_space">Gas Pipeline</p>
            </div>
          </div>
          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("FireExtinguishers")}
          style={getAmenitiesButtonStyle("FireExtinguishers")}>
            <div>
              <img src={FireExtinguishers} alt="dining table" />
            </div>
            <div>
              <p className="m-0 amaFlowFire">Fire Extinguishers</p>
            </div>
          </div>
          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("ClubHouse")}
          style={getAmenitiesButtonStyle("ClubHouse")}>
            <div>
              <img src={ClubHouse} alt="dining table" />
            </div>
            <div>
              <p className="m-0">Club House</p>
            </div>
          </div>
          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("Vaastu Complaint")}
          style={getAmenitiesButtonStyle("Vaastu Complaint")}>
            <div>
              <img src={VaastuComplaint} alt="Vaastu Complaint" />
            </div>
            <div>
              <p className="m-0 amaFlowFire">Vaastu Complaint</p>
            </div>
          </div>
          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("Cafeteria")}
          style={getAmenitiesButtonStyle("Cafeteria")}>
            <div>
              <img src={Cafeteria} alt="dining table" />
            </div>
            <div>
              <p className="m-0">Cafeteria</p>
            </div>
          </div>
        
         
          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("Sports")}
          style={getAmenitiesButtonStyle("Sports")}>
            <div>
              <img src={Sports} alt="dining table" />
            </div>
            <div>
              <p className="m-0">Sports</p>
            </div>
          </div>
         
          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("WaterStorage")}
          style={getAmenitiesButtonStyle("WaterStorage")}>
            <div>
              <img src={WaterStorage} alt="dining table" />
            </div>
            <div>
              <p className="m-0 text-center ama_space">Water Storage</p>
            </div>
          </div>
        
          <div className="ama_cont me-3"
          onClick={() => handleAmenityClick("Garden")}
          style={getAmenitiesButtonStyle("Garden")}>
            <div>
              <img src={Garden} alt="dining table" />
            </div>
            <div>
              <p className="m-0">Garden</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesFlow;
