import React, { useState } from "react";

const RetailPrcFlow = () => {
  const [formData, setFormData] = useState({
    lease: "",
    inputPrice: "",
    taxOption: "",
    formattedValue: "",
    security: "",
    fixedButton: "",
  });

  const handleFieldChange = (field, value) => {
    if (field === "lease" || field === "security") {
      setFormData({ ...formData, [field]: value });
    } else if (field === "inputPrice") {
      const enteredPrice = value;
      const numericValue = parseFloat(enteredPrice.replace(/,/g, ""));
      if (!isNaN(numericValue)) {
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
        setFormData({
          ...formData,
          [field]: enteredPrice,
          formattedValue: formatted,
        });
      } else {
        setFormData({ ...formData, [field]: "", formattedValue: "" });
      }
    } else if (field === "taxOption") {
      setFormData({ ...formData, [field]: value });
    }
  };

  const getButtonStyle = (field, option) => {
    return {
      backgroundColor: formData[field] === option ? "#2196F3" : "white",
      borderColor: formData[field] === option ? "#2196F3" : "#e6e6e6",
      color: formData[field] === option ? "#FFFFFF" : "#8b8b8b",
    };
  };

  const getSecurityButtonStyle = (prcSecurity) => {
    return {
      backgroundColor: formData.security === prcSecurity ? "#2196F3" : "white",
      borderColor: formData.security === prcSecurity ? "#2196F3" : "#e6e6e6",
      color: formData.security === prcSecurity ? "#FFFFFF" : "#8b8b8b",
    };
  };

  const handleSecurityClick = (prcSecurity) => {
    setFormData({ ...formData, security: prcSecurity });
  };

  const handleTaxOptionChange = (event) => {
    setFormData({ ...formData, taxOption: event.target.value });
  };

  return (
    <div>
      <h3 className="basic_heading m-0">Pricing Details</h3>
      <div className="price_part1" style={{ paddingBottom: "30px" }}>
        <h6 className="basic_looking pb-3 m-0">Ownership</h6>
        <div>
          <button
            className="loc_bhkopt"
            style={getButtonStyle("lease", "Freehold")}
            onClick={() => handleFieldChange("lease", "Freehold")}
          >
            Freehold
          </button>
          <button
            className="loc_bhkopt"
            style={getButtonStyle("lease", "Leasehold")}
            onClick={() => handleFieldChange("lease", "Leasehold")}
          >
            Leasehold
          </button>
          <button
            className="loc_bhkopt"
            style={getButtonStyle("lease", "Co-operative society")}
            onClick={() => handleFieldChange("lease", "Co-operative society")}
          >
            Co-operative society
          </button>
          <button
            className="loc_bhkopt"
            style={getButtonStyle("lease", "Power of Attorney")}
            onClick={() => handleFieldChange("lease", "Power of Attorney")}
          >
            Power of Attorney
          </button>
        </div>
      </div>
      <div className="price_cont">
        <h6 className="basic_looking pb-3 m-0">
          Price details<span className="loc_ast">*</span>
        </h6>
        <div className="price_details">
          <div className="position-relative">
            <input
              className="Prc_exp form-control"
              type="text"
              placeholder="₹ Expected price"
              value={formData.inputPrice}
              onChange={(e) => handleFieldChange("inputPrice", e.target.value)}
            />
            <span className="position-absolute top-0 end-0 mt-2 pe-2">
              {formData.formattedValue !== "" ? formData.formattedValue : ""}
            </span>
          </div>
        </div>

        <div className="price_check row pb-3">
          <div className="col-sm-12 col-md-5 pb-2">
            <input type="checkbox" />
            <label htmlFor="Electricity charges included" className="prc_box">
              Electricity charges included
            </label>
          </div>
          <div className="col-sm-12 col-md-5 pb-2">
            <input
              type="checkbox"
              checked={formData.taxOption === "included"}
              onChange={() =>
                handleTaxOptionChange({ target: { value: "included" } })
              }
            />
            <label htmlFor="Tax and Govt. charges included" className="prc_box">
              Tax and Govt. charges included
            </label>
          </div>

          <div className="col-sm-12 col-md-5 pb-2">
            <input
              type="checkbox"
              checked={formData.taxOption === "excluded"}
              onChange={() =>
                handleTaxOptionChange({ target: { value: "excluded" } })
              }
            />
            <label htmlFor="Tax and Govt. charges excluded" className="prc_box">
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
        <h6 className="basic_looking pb-3 m-0 prc_mpd">More Price details</h6>
        <div className="price_moreprbdetails mb-4">
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
        <div className="price_security ofc_prcSecurity">
          <h6 className="basic_looking pb-3 m-0">Security deposit</h6>
          <button
            className="loc_bhkopt mb-3"
            style={getSecurityButtonStyle("Fixed")}
            onClick={() => handleSecurityClick("Fixed")}
          >
            Fixed
          </button>

          <button
            className="loc_bhkopt mb-3"
            style={getSecurityButtonStyle("Multiple of Rent")}
            onClick={() => handleSecurityClick("Multiple of Rent")}
          >
            Multiple of Rent
          </button>
          <button
            className="loc_bhkopt mb-3"
            style={getSecurityButtonStyle("None")}
            onClick={() => handleSecurityClick("None")}
          >
            None
          </button>

          {formData.security === "Fixed" && (
            <div className="pro_drop">
              <input
                type="number"
                style={{ width: "289px" }}
                placeholder="₹ Deposit values"
                className="prc_maintanance hidden-arrows ofc_hubOther"
              />
            </div>
          )}
          {formData.security === "Multiple of Rent" && (
            <div className="pro_drop">
              <input
                type="number"
                style={{ width: "289px" }}
                placeholder="No.of months (Max 30)"
                className="prc_maintanance hidden-arrows ofc_hubOther"
              />
            </div>
          )}
        </div>
        <div>
          <h6 className="basic_looking pb-3 m-0">Lock-in Period</h6>
          <div className="pro_drop mb-5">
            <input
              type="number"
              style={{ width: "289px" }}
              placeholder="Enter Number of Months"
              className="prc_maintanance hidden-arrows ofc_hubOther"
            />
          </div>
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
    </div>
  );
};
export default RetailPrcFlow;
