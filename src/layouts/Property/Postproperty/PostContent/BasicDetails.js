import React, { useState } from "react";
import "../../../../layouts/Property/Property.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../../../layouts/Property/Property.css";
import TextField from "@mui/material/TextField";  
import { Link } from "react-router-dom";
import { usePropertyContext } from "../Mycontext";

const BasicDetails = () => {
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedButton, setSelectedButton] = useState([]);
  const { setSelectedProperty } = usePropertyContext();

  const handleButtonClick = (propertyType) => {
    setSelectedProperty(propertyType);
  };

  const validationSchema = Yup.object({
    city: Yup.string().required("City is required"),
    building: Yup.string().required("Building/Project/Society is required"),
    locality: Yup.string().required("Locality is required"),
    optionSelected: Yup.string()
      .required("Please select one option")
      .nullable(),
  });

  const formik = useFormik({
    initialValues: {
      city: "",
      building: "",
      locality: "",
      optionSelected: null,
    },

    validationSchema,
    onSubmit: (values) => {
      // console.log(values);
    },
  });

  const handleOptionClick = (option) => {
    // console.log("Selected option:", option);
    setSelectedOption(option);
    setSelectedButton("");
    setSelectedProperty(option);
    formik.setFieldValue("optionSelected", option);
  };

  const getButtonStyle = (option) => {
    const buttonStyle = {
      borderColor: selectedOption === option ? "#68BCFF" : "#e6e6e6",
      backgroundColor: selectedOption === option ? "#2196F3" : "white",
      color: selectedOption === option ? "#FFFFFF" : "#8b8b8b",
    };
    // console.log(`Button style for ${option}:`, buttonStyle);
    return buttonStyle;
  };

  const renderResidentialOptions = () => {
    return (
      <>
        <button
          className="property_button"
          onClick={() => handleButtonClick("Apartments / Flat")}
          style={getButtonStyle("Apartments / Flat")}
        >
          Apartments / Flat
        </button>
        <button
          className="property_button"
          onClick={() => handleButtonClick("Independent House / Villa")}
          style={getButtonStyle("Independent House / Villa")}
        >
          Independent House / Villa
        </button>
        <button
          className="property_button"
          onClick={() => handleButtonClick("Plot / Land")}
          style={getButtonStyle("Plot / Land")}
        >
          Plot / Land
        </button>
        <button
          className="property_button"
          onClick={() => handleButtonClick("Condominiums (Condos)")}
          style={getButtonStyle("Condominiums (Condos)")}
        >
          Condominiums (Condos)
        </button>
        <button
          className="property_button"
          onClick={() => handleButtonClick("Cottages")}
          style={getButtonStyle("Cottages")}
        >
          Cottages
        </button>
        <button
          className="property_button"
          onClick={() => handleButtonClick("Duplexes and Triplexes")}
          style={getButtonStyle("Duplexes and Triplexes")}
        >
          Duplexes and Triplexes
        </button>
        <button
          className="property_button"
          onClick={() => handleButtonClick("Farm House")}
          style={getButtonStyle("Farm House")}
        >
          Farm House
        </button>
        <button
          className="property_button"
          onClick={() => handleButtonClick("Bungalows")}
          style={getButtonStyle("Bungalows")}
        >
          Bungalows
        </button>
        <button
          className="property_button"
          onClick={() => handleButtonClick("Paying Guest / Mansions")}
          style={getButtonStyle("Paying Guest / Mansions")}
        >
          Paying Guest / Mansions
        </button>
        <button
          className="property_button"
          onClick={() => handleButtonClick("Town Houses")}
          style={getButtonStyle("Town Houses")}
        >
          Town Houses
        </button>
        <button
          className="property_button"
          onClick={() => handleButtonClick("Tiny Houses")}
          style={getButtonStyle("Tiny Houses")}
        >
          Tiny Houses
        </button>
        <button
          className="property_button"
          onClick={() => handleButtonClick("Row House")}
          style={getButtonStyle("Row House")}
        >
          Row House
        </button>
        <button
          className="property_button"
          onClick={() => handleButtonClick("Others")}
          style={getButtonStyle("Others")}
        >
          Others
        </button>
      </>
    );
  };

  const renderOptions = () => {
    switch (selectedOption) {
      case "residential":
        return renderResidentialOptions();
      case "commercial":
        return (
          <>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Office Space")}
              style={getButtonStyle("Office Space")}
            >
              Office Space
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Retail Spaces")}
              style={getButtonStyle("Retail Spaces")}
            >
              Retail Spaces
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Plot / Land")}
              style={getButtonStyle("Plot / Land")}
            >
              Plot / Land
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Show room")}
              style={getButtonStyle("Show room")}
            >
              Show room
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Hotels / Hospitality")}
              style={getButtonStyle("Hotels / Hospitality")}
            >
              Hotels / Hospitality
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("ATM Space")}
              style={getButtonStyle("ATM Space")}
            >
              ATM Space
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Convenience Stores")}
              style={getButtonStyle("Convenience Stores")}
            >
              Convenience Stores
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Restaurants / Cafes")}
              style={getButtonStyle("Restaurants / Cafes")}
            >
              Restaurants / Cafes
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Ware house")}
              style={getButtonStyle("Ware house")}
            >
              Ware house
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Data Centres")}
              style={getButtonStyle("Data Centres")}
            >
              Data Centres
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Gas Stations ")}
              style={getButtonStyle("Gas Stations ")}
            >
              Gas Stations{" "}
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Automotive Properties")}
              style={getButtonStyle("Automotive Properties")}
            >
              Automotive Properties
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Research Parks / Technology")}
              style={getButtonStyle("Research Parks / Technology")}
            >
              Research Parks / Technology
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Mixed-Use / Special Purpose  ")}
              style={getButtonStyle("Mixed-Use / Special Purpose ")}
            >
              Mixed-Use / Special Purpose{" "}
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Financial Institutions")}
              style={getButtonStyle("Financial Institutions")}
            >
              Financial Institutions
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Others")}
              style={getButtonStyle("Others")}
            >
              Others
            </button>
          </>
        );

      case "industrial":
        return (
          <>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Manufacturing Land")}
              style={getButtonStyle("Manufacturing Land")}
            >
              Manufacturing Land
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Film / Production Studio")}
              style={getButtonStyle("Film / Production Studio")}
            >
              Film / Production Studio
            </button>
            <div className=""></div>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Light Industrial Land")}
              style={getButtonStyle("Light Industrial Land")}
            >
              Light Industrial Land
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Heavy Industrial Land")}
              style={getButtonStyle("Heavy Industrial Land")}
            >
              Heavy Industrial Land
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Others")}
              style={getButtonStyle("Others")}
            >
              Others
            </button>
          </>
        );

      case "agricultural":
        return (
          <>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Crop Land")}
              style={getButtonStyle("Crop Land")}
            >
              Crop Land
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Organic Farm")}
              style={getButtonStyle("Organic Farm")}
            >
              Organic Farm
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Renewable Energy Land")}
              style={getButtonStyle("Renewable Energy Land")}
            >
              Renewable Energy Land
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Raising Livestock")}
              style={getButtonStyle("Raising Livestock")}
            >
              Raising Livestock
            </button>
            <button
              className="property_button"
              onClick={() => handleButtonClick("Others")}
              style={getButtonStyle("Others")}
            >
              Others
            </button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="basic">
        <h3 className="basic_heading m-0">Basic Details</h3>
        <div className="basicPart1">
          <h6 className="basic_looking pb-3 m-0">Looking to</h6>
          <button
            className={`basic_sell ${
              selectedOption === "sell" ? "selected" : ""
            }`}
            style={getButtonStyle("sell")}
            onClick={() => handleOptionClick("sell")}
          >
            Sell
          </button>
          <button
            className={`basic_rent basic_sell ${
              selectedOption === "rent" ? "selected" : ""
            }`}
            style={getButtonStyle("rent")}
            onClick={() => handleOptionClick("rent")}
          >
            Rent/Lease
          </button>

          <button
            className={`basic_payingGuest basic_sell ${
              selectedOption === " PayingGuest" ? "selected" : ""
            }`}
            style={getButtonStyle(" Paying Guest")}
            onClick={() => handleOptionClick(" Paying Guest")}
          >
            Paying Guest
          </button>
        </div>

        <div className="basicPart2">
          <h6 className="basic_looking pb-3 m-0">Property Type</h6>
          <div className="basic_subpart">
            <div className="base_residential">
              <input
                type="radio"
                id="residential"
                name="propertyType"
                className="base_label"
                onChange={() => handleOptionClick("residential")}
              />
              <label htmlFor="residential">Residential</label>
            </div>
            <div className="base_commercial base_residential">
              <input
                type="radio"
                id="commercial"
                name="propertyType"
                className="base_label"
                onChange={() => handleOptionClick("commercial")}
              />
              <label htmlFor="commercial">Commercial</label>
            </div>
            <div className="base_agricultural base_residential">
              <input
                type="radio"
                id="agricultural"
                name="propertyType"
                className="base_label"
                onChange={() => handleOptionClick("agricultural")}
              />
              <label htmlFor="agricultural">Agricultural</label>
            </div>
            <div className="base_industrial base_residential">
              <input
                type="radio"
                id="industrial"
                className="base_label"
                name="propertyType"
                onChange={() => handleOptionClick("industrial")}
              />
              <label htmlFor="industrial">Industrial</label>
            </div>
          </div>

          <div className="basicPart3">
            <div className="row">
              <div className="col-6">{renderOptions()}</div>
            </div>
          </div>
        </div>

        <div className="location">
          <h6 className="basic_looking pb-3 m-0">Property Location Details?</h6>
          <div className="location_details">
            <form onSubmit={formik.handleSubmit}>
              <div className="location_city">
                <TextField
                  id="city"
                  name="city"
                  label="City*"
                  variant="standard"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </div>

              <div className="location_city">
                <TextField
                  id="building"
                  name="building"
                  label="Building/Project/Society*"
                  variant="standard"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.building}
                  error={
                    formik.touched.building && Boolean(formik.errors.building)
                  }
                  helperText={formik.touched.building && formik.errors.building}
                />
              </div>

              <div className="basic_error">
                <p>Can’t find your Building/project/society?</p>
                <span className="basic_add">Add New</span>
              </div>
              <div className="location_city">
                <TextField
                  id="locality"
                  name="locality"
                  label="Locality *"
                  variant="standard"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.locality}
                  error={
                    formik.touched.locality && Boolean(formik.errors.locality)
                  }
                  helperText={formik.touched.locality && formik.errors.locality}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="basicPart4">
          <h6 className="basic_looking pb-3 m-0">
            Share your contact details for the Buyer to reach you
          </h6>
          <label htmlFor="contactnumber" className="base_contact">
            Contact number
          </label>
          <div className="base_partContact">
            <div className="d-flex">
              <PhoneInput
                country={"in"}
                inputProps={{
                  autoFormat: false,
                }}
              />
            </div>
          </div>
          <p className="base_register">
            {" "}
            Are you a Registered User?
            <Link to="/login">
              <span className="base_login">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
