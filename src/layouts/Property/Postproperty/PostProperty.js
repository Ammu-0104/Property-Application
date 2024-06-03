import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import StepConnector, {stepConnectorClasses,} from "@mui/material/StepConnector";
import BasicDetails from "../Postproperty/PostContent/BasicDetails";
import PropertyDetails from "../Postproperty/PostContent/PropertyDetails";
import PricingDetails from "../Postproperty/PostContent/PricingDetails";
import AmenitiesSection from "../Postproperty/PostContent/AmenitiesSection";
import Photo from "../Postproperty/PostContent/Photo";
import Edit from "../../../assets/Icons/editicon.svg";
import formCall from "../../../assets/Icons/formcall.svg";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIconSrc from "../../../assets/Icons/amacloseicon.svg";
import TickIconSrc from "../../../assets/Icons/amatickicon.svg";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#00ff00" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#00ff00",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#00ff00",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
    theme.palette.mode === "dark" ? theme.palette.grey[800] : "#00ff00",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const stepsbutton = [
  "basic details",
  "Property Details",
  "Photos",
  "Pricing & Others",
  "Amenities Section",
];

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const steps = [
  <div>
    <p className="m-0  form_head5  px-1">
      Basic Details
      <span style={{ paddingLeft: "5px" }}>
        <img src={Edit} alt="edit" />
      </span>
    </p>
  </div>,
  <div>
    <p className="m-0 form_head5  px-1">
      Property Details
      <span style={{ paddingLeft: "5px" }}>
        <img src={Edit} alt="edit" />
      </span>
    </p>
  </div>,
  <div>
    <p className="m-0 form_head5  px-1">
      Photos
      <span style={{ paddingLeft: "5px" }}>
        <img src={Edit} alt="edit" />
      </span>
    </p>
  </div>,
  <div>
    <p className="m-0 form_head5  px-1">
      Pricing & Others
      <span style={{ paddingLeft: "5px" }}>
        <img src={Edit} alt="edit" />
      </span>
    </p>
  </div>,
  <div>
    <p className="m-0 form_head5  px-1">
      Amenities Section
      <span style={{ paddingLeft: "5px" }}>
        <img src={Edit} alt="edit" />
      </span>
    </p>
  </div>,
];

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleStep = (step) => () => {
    setActiveStep(step);
    setOpenModal(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setActiveStep(0);
    setOpenModal(false);
  };

  const getContentForStep = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <BasicDetails />;
      case 1:
        return <PropertyDetails />;
      case 2:
        return <Photo />;
      case 3:
        return <PricingDetails />;
      case 4:
        return <AmenitiesSection />;
      default:
        return null;
    }
  };

  return (
    <div className="ki">
      <Stack direction="column" spacing={3}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Item
              style={{
                // width: "300px",
                height: "92vh",
                backgroundColor: "#EFF5FC",
                position: "fixed",
                padding: "25px",
              }}
            >
              <div className="formPart1">
                <div>
                  <h4 className="form_heading">Post your property</h4>
                </div>
                <div>
                  <p className="form_para">
                    Sell/Rent your property in Simple Steps
                  </p>
                </div>
              </div>
              <Stepper
                orientation="vertical"
                activeStep={activeStep}
                connector={<QontoConnector />}
              >
                {steps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel onClick={handleStep(index)}>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <div className="formPart4">
                <p
                  className="
                formhelp"
                >
                  Need Help?
                </p>
                <img className="formCall" src={formCall} alt="call" />
                <p className="formnumber">Call +91 123 1234 123</p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item
              style={{
                padding: "30px 50px",
                height: "92vh",
                overflowY: "scroll",
              }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                startIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
              {getContentForStep(activeStep)}
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                className="mt-4"
              >
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={handleFinish}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Finish
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    endIcon={<ArrowForwardIcon />}
                  >
                    {`Next, Add ${capitalizeFirstLetter(
                      stepsbutton[activeStep + 1]
                    )}`}
                  </Button>
                )}
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Stack>
      {/* Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button onClick={handleCloseModal}>
              <img src={CloseIconSrc} alt="close" />
            </Button>
          </div>
        </DialogTitle>
        <DialogContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <img className="ama_tick" src={TickIconSrc} alt="" />
            <p className="ama_congrats">Congratulations !</p>
            <p className="ama_content">
              You have successfully posted your property, it will be live within
              3 Hrs
            </p>
            <div>
              <button className="ama_edit" onClick={handleStep(0)}>
                Edit
              </button>
              <Link to="/main/property">
                <button className="ama_preview">Preview Listing</button>
              </Link>
              {/* <button className="ama_edit" onClick={handleStep(1)}>Edit</button> */}
            </div>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
