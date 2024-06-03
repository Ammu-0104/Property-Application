import React from "react";
import "../../../../layouts/Property/Property.css";
import locBuilding from "../../../../assets/Icons/locbuildings.svg";
import { usePropertyContext } from "../Mycontext";
import PlotAndLand from "./PropertyFlow/PlotAndLand";
import locPlotLand from "../../../../assets/Icons/locplotandland.svg";
import OfcPropertyFlow from "./PropertyFlow/OfcPropertyFlow";
import RetailproFlow from "./PropertyFlow/RetailproFlow";
import WarehouseProFlow from "./PropertyFlow/WarehouseProFlow";
import HotelsProFlow from "./PropertyFlow/HotelsProFlow";
import AgriProFlow from "./PropertyFlow/AgriProFlow";
import ManufaturingPro from "../../../../layouts/Property/Postproperty/PostContent/PropertyFlow/ManufaturePro";
import FilmPro from "./PropertyFlow/FilmPro";
import PropertyComp1 from "./PropertyComp1";
import PropertyComp2 from "./PropertyComp2";

const PropertyDetails = () => {
  const { selectedProperty } = usePropertyContext();

  return (
    <div>
      <div className="property_details">
        <h3 className="basic_heading m-0">Tell us Rent your property</h3>
        <div className="property_type">
          <h6 className="basic_looking pb-3 m-0">Property Type</h6>
          <div className="loc_box">
            {selectedProperty !== "Plot / Land" && (
              <img src={locBuilding} alt="apartment" />
            )}

            {selectedProperty === "Plot / Land" && (
              <img src={locPlotLand} alt="apartment" />
            )}

            <p className="loc_apartment">{selectedProperty}</p>
          </div>
        </div>
        <PropertyComp1/>       
        <PropertyComp2/>

        {selectedProperty === "Plot / Land" && (
          <div>
            <PlotAndLand />
          </div>
        )}

        {(selectedProperty === "Office Space" ||
          selectedProperty === "Research Parks / Technology") && (
          <div>
            <OfcPropertyFlow />
          </div>
        )}

        {(selectedProperty === "Retail Spaces" ||
          selectedProperty === "Show room" ||
          selectedProperty === "ATM Space") && <RetailproFlow />}

        {(selectedProperty === "Ware house" ||
          selectedProperty === "Mixed-Use / Special Purpose") && (
          <WarehouseProFlow />
        )}

        {selectedProperty === "Hotels / Hospitality" && (
          <div>
            <HotelsProFlow />
          </div>
        )}

        {selectedProperty === "Crop Land" && (
          <div>
            <AgriProFlow />
          </div>
        )}

        {(selectedProperty === "Apartments / Flat" ||
          selectedProperty === "Condominiums (Condos)" ||
          selectedProperty === "Independent House / Villa" ||
          selectedProperty === "Duplexes and Triplexes") &&
           <PropertyDetails />}

        {selectedProperty === "Manufacturing Land" && (
          <div>
            <ManufaturingPro />
          </div>
        )}

        {selectedProperty === "Film / Production Studio" && (
          <div>
            <FilmPro />
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
