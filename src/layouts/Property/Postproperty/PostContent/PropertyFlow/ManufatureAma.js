import React, { useState } from "react";
import Dining from "../../../../../assets/Icons/amadining.svg";
import Washingmachine from "../../../../../assets/Icons/amawashing.svg";
import Sofa from "../../../../../assets/Icons/amasofa.svg";
import Microwave from "../../../../../assets/Icons/amamicrowave.svg";
import Stove from "../../../../../assets/Icons/amastove.svg";
import Fridge from "../../../../../assets/Icons/amafridge.svg";
import WaterPurifier from "../../../../../assets/Icons/amawaterpurifier.svg";
import Gas from "../../../../../assets/Icons/amagas.svg";
import Ac from "../../../../../assets/Icons/amaac.svg";
import Tv from "../../../../../assets/Icons/amatv.svg";
import Bed from "../../../../../assets/Icons/amabed.svg";
import Cubboard from "../../../../../assets/Icons/amacuboard.svg";
import Geyser from "../../../../../assets/Icons/amagayser.svg";
import Lift from "../../../../../assets/Icons/amalift.svg";
import Cctv from "../../../../../assets/Icons/amacctv.svg";
import Gym from "../../../../../assets/Icons/amagym.svg";
import Garden from "../../../../../assets/Icons/amagarden.svg";
import KidsArea from "../../../../../assets/Icons/amakidsarea.svg";
import Sports from "../../../../../assets/Icons/amasports.svg";
import Swimming from "../../../../../assets/Icons/amaswimming.svg";
import GateCommunity from "../../../../../assets/Icons/amagate.svg";
import ClubHouse from "../../../../../assets/Icons/amaclubhouse.svg";
import WaterSupply from "../../../../../assets/Icons/amawatersupply.svg";
import PowerBackup from "../../../../../assets/Icons/amapowerbackup.svg";

const ManufacturingAma = () => {
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
      <div className="amaenities_cont">
        <div>
          <h6 className="basic_looking pb-3 m-0">Property furnishings</h6>
          <div className="amanity_furniture pb-5">
            <div
              className={`ama_cont me-3 ${
                selectedAmenity === "dining" ? "selected" : ""
              }`}
              onClick={() => handleAmenityClick("dining")}
              style={getAmenitiesButtonStyle("dining")}
            >
              <div>
                <img src={Dining} alt="dining table" />
              </div>
              <div>
                <p className="m-0">Dining Table</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("Washingmachine")}
              style={getAmenitiesButtonStyle("Washingmachine")}
            >
              <div>
                <img src={Washingmachine} alt="dining table" />
              </div>
              <div>
                <p className="ama_space m-0 text-center">Washing Machine</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("Sofa")}
              style={getAmenitiesButtonStyle("Sofa")}
            >
              <div>
                <img src={Sofa} alt="dining table" />
              </div>
              <div>
                <p className="m-0">Sofa</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("Microwave")}
              style={getAmenitiesButtonStyle("Microwave")}
            >
              <div>
                <img src={Microwave} alt="dining table" />
              </div>
              <div>
                <p className="m-0">Microwave</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("Stove")}
              style={getAmenitiesButtonStyle("Stove")}
            >
              <div>
                <img src={Stove} alt="dining table" />
              </div>
              <div>
                <p className="m-0">Stove</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("Fridge")}
              style={getAmenitiesButtonStyle("Fridge")}
            >
              <div>
                <img src={Fridge} alt="dining table" />
              </div>
              <div>
                <p className="m-0">Fridge</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("WaterPurifier")}
              style={getAmenitiesButtonStyle("WaterPurifier")}
            >
              <div>
                <img src={WaterPurifier} alt="dining table" />
              </div>
              <div>
                <p className="m-0 ama_space">Water Purifier</p>
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
              onClick={() => handleAmenityClick("Ac")}
              style={getAmenitiesButtonStyle("Ac")}
            >
              <div>
                <img src={Ac} alt="dining table" />
              </div>
              <div>
                <p className="m-0">AC</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("Tv")}
              style={getAmenitiesButtonStyle("Tv")}
            >
              <div>
                <img src={Tv} alt="dining table" />
              </div>
              <div>
                <p className="m-0">TV</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("Bed")}
              style={getAmenitiesButtonStyle("Bed")}
            >
              <div>
                <img src={Bed} alt="dining table" />
              </div>
              <div>
                <p className="m-0">Bed</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("Cubboard")}
              style={getAmenitiesButtonStyle("Cubboard")}
            >
              <div>
                <img src={Cubboard} alt="dining table" />
              </div>
              <div>
                <p className="m-0">Cupboard</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("Geyser")}
              style={getAmenitiesButtonStyle("Geyser")}
            >
              <div>
                <img src={Geyser} alt="dining table" />
              </div>
              <div>
                <p className="m-0">Geyser</p>
              </div>
            </div>
          </div>

          <h6 className="basic_looking pb-3 m-0">Flat furnishings</h6>
          <div className="amanity_furniture">
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
              onClick={() => handleAmenityClick("Gym")}
              style={getAmenitiesButtonStyle("Gym")}
            >
              <div>
                <img src={Gym} alt="dining table" />
              </div>
              <div>
                <p className="m-0">Gym</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("Garden")}
              style={getAmenitiesButtonStyle("Garden")}
            >
              <div>
                <img src={Garden} alt="dining table" />
              </div>
              <div>
                <p className="m-0">Garden</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("KidsArea")}
              style={getAmenitiesButtonStyle("KidsArea")}
            >
              <div>
                <img src={KidsArea} alt="dining table" />
              </div>
              <div>
                <p className="m-0">Kids Area</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("Sports")}
              style={getAmenitiesButtonStyle("Sports")}
            >
              <div>
                <img src={Sports} alt="dining table" />
              </div>
              <div>
                <p className="m-0">Sports</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("Swimming")}
              style={getAmenitiesButtonStyle("Swimming")}
            >
              <div>
                <img src={Swimming} alt="dining table" />
              </div>
              <div>
                <p className="m-0 ama_space text-center">Swimming Pool</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("GateCommunity")}
              style={getAmenitiesButtonStyle("GateCommunity")}
            >
              <div>
                <img src={GateCommunity} alt="dining table" />
              </div>
              <div>
                <p className="m-0 text-center ama_space">Gated community</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("ClubHouse")}
              style={getAmenitiesButtonStyle("ClubHouse")}
            >
              <div>
                <img src={ClubHouse} alt="dining table" />
              </div>
              <div>
                <p className="m-0">Club House</p>
              </div>
            </div>
            <div
              className="ama_cont me-3"
              onClick={() => handleAmenityClick("Tv")}
              style={getAmenitiesButtonStyle("Tv")}
            >
              <div>
                <img src={Tv} alt="dining table" />
              </div>
              <div>
                <p className="m-0 text-center ama_space">Community Hall</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingAma;
