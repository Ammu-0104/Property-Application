import React, { useState } from "react";
import { usePropertyContext } from "../../Mycontext";

const PricingFlow = () => {
  const [lease, SetLease] = useState("");
  const [inputPrice, setInputPrice] = React.useState("");
  const [formattedValue, setFormattedValue] = React.useState("");
  const [taxOption, setTaxOption] = React.useState("");
  const { selectedProperty } = usePropertyContext();

  const handleTaxOptionChange = (event) => {
    setTaxOption(event.target.value);
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
      <div className="price_cont">
        {selectedProperty === "Plot / Land" && (
          <div className="price_part1" style={{ paddingBottom: "30px" }}>
            <h6 className="basic_looking pb-3 m-0">Ownership</h6>
            <div>
              <button
                className="loc_bhkopt"
                style={getLeaseButtonStyle("Freehold")}
                onClick={() => handleLeaseClick("Freehold")}
              >
                Freehold
              </button>
              <button
                className="loc_bhkopt"
                style={getLeaseButtonStyle("Leasehold")}
                onClick={() => handleLeaseClick("Leasehold")}
              >
                Leasehold
              </button>
              <button
                className="loc_bhkopt"
                style={getLeaseButtonStyle("Co-operative society")}
                onClick={() => handleLeaseClick("Co-operative society")}
              >
                Co-operative society
              </button>
              <button
                className="loc_bhkopt"
                style={getLeaseButtonStyle("Power of Attorney")}
                onClick={() => handleLeaseClick("Power of Attorney")}
              >
                Power of Attorney
              </button>
            </div>
          </div>
        )}

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
        {selectedProperty === "Plot / Land" && (
          <div className="price_check row pb-3">
            <div className="col-sm-12 col-md-5 pb-2">
              <input type="checkbox" />
              <label htmlFor="All inclusive price" className="prc_box">
                All inclusive price
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
            <div className="col-sm-12 col-md-5 pb-2">
              <input type="checkbox" />
              <label htmlFor="Price Negotiable" className="prc_box">
                Price Negotiable
              </label>
            </div>
          </div>
        )}

        <h6 className="basic_looking pb-3 m-0 prc_mpd">More Price details</h6>
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
      <div className="price_description mb-3">
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
  );
};

export default PricingFlow;
