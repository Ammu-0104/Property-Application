import React, { useState } from "react";

const HotelsPrcFlow = () => {
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

  return (
    <div>
      <h3 className="basic_heading m-0">Pricing Details</h3>

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
            <input type="checkbox" />
            <label htmlFor="Price Negotiable" className="prc_box">
              Price Negotiable
            </label>
          </div>
        </div>

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

export default HotelsPrcFlow;
