import React, { useState } from "react";
import { usePropertyContext } from "../Mycontext";
import PricingFlow from "./PropertyFlow/PlotPricingFlow";
import OfcPricingFlow from "./PropertyFlow/OfcPricingFlow";
import RetailPrcFlow from "./PropertyFlow/RetailPrcFlow";
import WarehousePrcFlow from "./PropertyFlow/WarehousePrcFlow";
import HotelsPrcFlow from "./PropertyFlow/HotelsPrcFlow";
import AgriPrcFlow from "./PropertyFlow/AgriPrcFlow";
import ManufacturingPrc from "./PropertyFlow/ManufaturePrc";
import FilmPrc from "./PropertyFlow/FilmPrc";

const PricingDetails = () => {
  const [lease, SetLease] = useState("");
  const [Security, setSecurity] = useState("");
  const [agreement, setAgreement] = useState("");
  const [inputPrice, setInputPrice] = React.useState("");
  const [formattedValue, setFormattedValue] = React.useState("");
  const [taxOption, setTaxOption] = React.useState("");
  const { selectedProperty } = usePropertyContext();

  const handleTaxOptionChange = (event) => {
    setTaxOption(event.target.value);
  };

  const getSecurityButtonStyle = (prcSecurity) => {
    return {
      backgroundColor: Security === prcSecurity ? "#2196F3" : "white",
      borderColor: Security === prcSecurity ? "#2196F3" : "#e6e6e6",
      color: Security === prcSecurity ? "#FFFFFF" : "#8b8b8b",
    };
  };

  const handleAgreementChange = (event) => {
    setAgreement(event.target.value);
  };

  const handleSecurityClick = (prcSecurity) => {
    setSecurity(prcSecurity);
  };

  const handlePriceChange = (event) => {
    const enteredPrice = event.target.value;
    const numericValue = parseFloat(enteredPrice.replace(/,/g, ""));
    if (!isNaN(numericValue)) {
      setInputPrice(enteredPrice);

      let formatted;
      if (numericValue >= 10000000) {
        formatted = `${numericValue / 10000000} Crore`;
      } else if (numericValue >= 100000) {
        formatted = `${numericValue / 100000} Lac`;
      } else if (numericValue >= 1000) {
        formatted = `${numericValue / 1000}k`;
      } else {
        formatted = numericValue;
      }

      setFormattedValue(formatted);
    } else {
      setInputPrice("");
      setFormattedValue("");
    }
  };
  const handleLeaseClick = (CompanyLease) => {
    SetLease(CompanyLease);
  };

  const getLeaseButtonStyle = (CompanyLease) => {
    return {
      backgroundColor: lease === CompanyLease ? "#2196F3" : "white",
      borderColor: lease === CompanyLease ? "#2196F3" : "#e6e6e6",
      color: lease === CompanyLease ? "#FFFFFF" : "#8b8b8b",
    };
  };

  return (
    <div>
      {selectedProperty !== "Plot / Land" &&
        selectedProperty !== "Office Space" &&
        selectedProperty !== "Research Parks / Technology" &&
        selectedProperty !== "Retail Spaces" &&
        selectedProperty !== "Show room" &&
        selectedProperty !== "ATM Space" &&
        selectedProperty !== "Ware house" &&
        selectedProperty !== "Mixed-Use / Special Purpose  " &&
        selectedProperty !== "Hotels / Hospitality" &&
        selectedProperty !== "Crop Land" &&
        selectedProperty !== "Manufacturing Land" &&
        selectedProperty !== "Film / Production Studio" && (
          <div className="price_cont">
            <h3 className="basic_heading m-0">Pricing Details</h3>
            <div className="price_part1" style={{ paddingBottom: "30px" }}>
              <h6 className="basic_looking pb-3 m-0">
                Preferred agreement type
              </h6>
              <div>
                <button
                  className="loc_bhkopt"
                  style={getLeaseButtonStyle("Company lease agreement")}
                  onClick={() => handleLeaseClick("Company lease agreement")}
                >
                  Company lease agreement
                </button>
                <button
                  className="loc_bhkopt"
                  style={getLeaseButtonStyle("Any")}
                  onClick={() => handleLeaseClick("Any")}
                >
                  Any
                </button>
              </div>
            </div>
            <h6 className="basic_looking pb-3 m-0">
              Price details<span className="loc_ast">*</span>
            </h6>
            <div className="price_details">
              <div className="position-relative">
                <input
                  className="Prc_exp form-control"
                  type="text"
                  placeholder="₹ Expected price"
                  value={inputPrice}
                  onChange={handlePriceChange}
                />
                <span className="position-absolute top-0 end-0 mt-2 pe-2">
                  {formattedValue !== "" ? formattedValue : ""}
                </span>
              </div>
            </div>

            <div className="price_check row pb-3">
              <div className="col-sm-12 col-md-5 pb-2">
                <input type="checkbox" />
                <label htmlFor="All inclusive price" className="prc_box">
                  All inclusive price
                </label>
              </div>

              <div className="col-sm-12 col-md-5 pb-2">
                <input type="checkbox" />
                <label htmlFor="Price Negotiable" className="prc_box">
                  Price Negotiable
                </label>
              </div>

              <div className="col-sm-12 col-md-5 pb-2">
                <input
                  type="checkbox"
                  checked={taxOption === "included"}
                  onChange={() =>
                    handleTaxOptionChange({ target: { value: "included" } })
                  }
                />
                <label
                  htmlFor="Tax and Govt. charges included"
                  className="prc_box"
                >
                  Tax and Govt. charges included
                </label>
              </div>

              <div className="col-sm-12 col-md-5 pb-2">
                <input
                  type="checkbox"
                  checked={taxOption === "excluded"}
                  onChange={() =>
                    handleTaxOptionChange({ target: { value: "excluded" } })
                  }
                />
                <label
                  htmlFor="Tax and Govt. charges excluded"
                  className="prc_box"
                >
                  Tax and Govt. charges excluded
                </label>
              </div>
            </div>
            <h6 className="basic_looking pb-3 m-0 prc_mpd">
              More Price details
            </h6>
            <div className="price_moreprbdetails">
              <div className="prc_maintain">
                <input
                  type="number"
                  placeholder="Maintenance"
                  className="prc_maintanance hidden-arrows"
                />
              </div>
              <div className="prc_month">
                <select name="" id="" className="prc_slct">
                  <option value="Monthly">Monthly</option>
                  <option value="Annually">Annually</option>
                  <option value="Net Amount">Net Amount</option>
                </select>
              </div>
            </div>
            <div className="price_moreprbdetails">
              <div className="prc_maintain1">
                <input
                  type="number"
                  style={{ width: "289px" }}
                  placeholder="Expected rental"
                  className="prc_maintanance hidden-arrows"
                />
              </div>
            </div>
            <div className="price_moreprbdetails">
              <div className="prc_maintain1">
                <input
                  type="number"
                  style={{ width: "289px" }}
                  placeholder="Booking amount"
                  className="prc_maintanance hidden-arrows"
                />
              </div>
            </div>
            <div className="price_moreprbdetails">
              <div className="prc_maintain1">
                <input
                  type="number"
                  style={{ width: "289px" }}
                  placeholder="Annual dues amount"
                  className="prc_maintanance hidden-arrows"
                />
              </div>
            </div>
          </div>
        )}

      {selectedProperty !== "Plot / Land" &&
        selectedProperty !== "Office Space" &&
        selectedProperty !== "Research Parks / Technology" &&
        selectedProperty !== "Retail Spaces" &&
        selectedProperty !== "Show room" &&
        selectedProperty !== "ATM Space" &&
        selectedProperty !== "Ware house" &&
        selectedProperty !== "Mixed-Use / Special Purpose  " &&
        selectedProperty !== "Hotels / Hospitality" &&
        selectedProperty !== "Crop Land" &&
        selectedProperty !== "Manufacturing Land" &&
        selectedProperty !== "Film / Production Studio" && (
          <div>
            <div className="price_security">
              <h6 className="basic_looking pb-3 m-0">
                Security deposit<span>(optional)</span>
              </h6>
              <button
                className="loc_bhkopt"
                style={getSecurityButtonStyle("Fixed")}
                onClick={() => handleSecurityClick("Fixed")}
              >
                Fixed
              </button>

              <button
                className="loc_bhkopt"
                style={getSecurityButtonStyle("Multiple of Rent")}
                onClick={() => handleSecurityClick("Multiple of Rent")}
              >
                Multiple of Rent
              </button>
              <button
                className="loc_bhkopt"
                style={getSecurityButtonStyle("None")}
                onClick={() => handleSecurityClick("None")}
              >
                None
              </button>
            </div>
            {Security === "Fixed" && (
              <div className="pro_drop">
                <input
                  type="number"
                  style={{ width: "289px" }}
                  placeholder="₹ Deposit values"
                  className="prc_maintanance hidden-arrows ofc_hubOther"
                />
              </div>
            )}
            {Security === "Multiple of Rent" && (
              <div className="pro_drop">
                <input
                  type="number"
                  style={{ width: "289px" }}
                  placeholder="No.of months (Max 30)"
                  className="prc_maintanance hidden-arrows ofc_hubOther"
                />
              </div>
            )}

            <div className="price_agreement">
              <h6 className="basic_looking pb-3 m-0">
                Agreement duration <span>(optional)</span>
              </h6>
              <select
                style={{ outline: "none", width: "185px" }}
                className="Loc_one"
                value={agreement || ""}
                onChange={handleAgreementChange}
              >
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="0 month"
                >
                  0 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="1 month"
                >
                  1 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="2 month"
                >
                  2 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="3 month"
                >
                  3 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="4 month"
                >
                  4 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="5 month"
                >
                  5 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="6 month"
                >
                  6 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="7 month"
                >
                  7 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="8 month"
                >
                  8 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="9 month"
                >
                  9 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="10 month"
                >
                  10 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="11 month"
                >
                  11 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="12 month"
                >
                  12 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="13 month"
                >
                  13 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="14 month"
                >
                  14 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="15 month"
                >
                  15 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="16 month"
                >
                  16 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="17 month"
                >
                  17 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="18 month"
                >
                  18 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="19 month"
                >
                  19 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="20 month"
                >
                  20 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="21 month"
                >
                  21 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="22 month"
                >
                  22 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="23 month"
                >
                  23 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="24 month"
                >
                  24 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="25 month"
                >
                  25 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="26 month"
                >
                  26 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="27 month"
                >
                  27 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="28 month"
                >
                  28 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="29 month"
                >
                  29 month
                </option>
                <option
                  style={{
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    color: "#8B8B8B",
                  }}
                  className="Loc_one"
                  value="30 month"
                >
                  30 month
                </option>
              </select>
            </div>

            <div className="price_noticeperiod">
              <h6 className="basic_looking pb-3 m-0">
                Notice period<span>(optional)</span>
              </h6>
              <button
                className="loc_bhkopt"
                style={getSecurityButtonStyle("none")}
                onClick={() => handleSecurityClick("none")}
              >
                none
              </button>
              <button
                className="loc_bhkopt"
                style={getSecurityButtonStyle("1 month")}
                onClick={() => handleSecurityClick("1 month")}
              >
                1 month
              </button>
              <button
                className="loc_bhkopt"
                style={getSecurityButtonStyle("2 month")}
                onClick={() => handleSecurityClick("2 month")}
              >
                2 month
              </button>
              <button
                className="loc_bhkopt"
                style={getSecurityButtonStyle("3 month")}
                onClick={() => handleSecurityClick("3 month")}
              >
                3 month
              </button>
            </div>

            <div className="price_description">
              <h6 className="basic_looking pb-3 m-0">
                Add property Description<span className="loc _ast">*</span>
              </h6>
              <textarea
                className="prc_description"
                placeholder="Tell us more about more the special features of your property..."
                name="postContent"
                rows={4}
                cols={40}
              />
              <div className="prc_cont">
                <p className="prc_char">Minimum 20 character s required</p>
                <p className="prc_char">0/5000</p>
              </div>
            </div>
          </div>
        )}

      {selectedProperty === "Plot / Land" && <PricingFlow />}
      {(selectedProperty === "Office Space" ||
        selectedProperty === "Research Parks / Technology") && (
        <OfcPricingFlow />
      )}
      {(selectedProperty === "Retail Spaces" ||
        selectedProperty === "Show room" ||
        selectedProperty === "ATM Space") && <RetailPrcFlow />}
      {(selectedProperty === "Ware house" ||
        selectedProperty === "Mixed-Use / Special Purpose") && (
        <WarehousePrcFlow />
      )}
      {selectedProperty === "Hotels / Hospitality" && <HotelsPrcFlow />}
      {selectedProperty === "Crop Land" && <AgriPrcFlow />}
      {selectedProperty === "Manufacturing Land" && <ManufacturingPrc />}
      {selectedProperty === "Film / Production Studio" && <FilmPrc />}
    </div>
  );
};

export default PricingDetails;
