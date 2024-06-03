import React, { useState, useEffect, useRef } from "react";
import { Galleria } from "primereact/galleria";
import { PhotoService } from "../Preview/PreviewPhotos";
import PreBhk from "../../../../assets/Icons/previewbhk.svg";
import PreBed from "../../../../assets/Icons/previewbed.svg";
import PreFurniture from "../../../../assets/Icons/previewfurniture.svg";
import { Tabs, Tab, Card, CardContent, Typography, Grid } from "@mui/material";
import overHome from "../../../../assets/Icons/overviewid.svg";
import Dining from "../../../../assets/Icons/amadining.svg";
import Washingmachine from "../../../../assets/Icons/amawashing.svg";
import Sofa from "../../../../assets/Icons/amasofa.svg";
import Microwave from "../../../.././assets/Icons/amamicrowave.svg";
import Stove from "../../../../assets/Icons/amastove.svg";
import Fridge from "../../../../assets/Icons/amafridge.svg";
import WaterPurifier from "../../../../assets/Icons/amawaterpurifier.svg";
import Gas from "../../../../assets/Icons/amagas.svg";
import Ac from "../../../../assets/Icons/amaac.svg";
import Tv from "../../../../assets/Icons/amatv.svg";
import Bed from "../../../../assets/Icons/amabed.svg";
import Cubboard from "../../../../assets/Icons/amacuboard.svg";
import Geyser from "../../../../assets/Icons/amagayser.svg";
import overType from "../../../../assets/Icons/pretype.svg";
import overBedroom from "../../../../assets/Icons/prebedroom.svg";
import overBathroom from "../../../../assets/Icons/prebathroom.svg";
import overGarages from "../../../../assets/Icons/prebathroom.svg";
import overSize from "../../../../assets/Icons/presize.svg";
import overFacing from "../../../../assets/Icons/prefacing.png";
import overYrBuild from "../../../../assets/Icons/preyearbuild.png";
import "../../../../layouts/Property/Property.css";
import NearScl from "../../../../assets/Icons/pre_school.svg";
import Transport from "../../../../assets/Icons/pre_transport.svg";
import Restaurant from "../../../../assets/Icons/pre_restaurant.svg";
import Hospital from "../../../../assets/Icons/pre_hospital.svg";
import Atm from "../../../../assets/Icons/pre_atm.svg";
import Railway from "../../../../assets/Icons/pre_railway.svg";
import Shopping from "../../../../assets/Icons/pre_shopping.svg";

const PreviewLeftView = () => {
  const [images, setImages] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const tabContentsRef = useRef([]);
  const [value, setValue] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setDialogOpen(true);
  };
  const handleTabChange = (newValue) => {
    setSelectedTab(newValue);
    tabContentsRef.current[newValue].scrollIntoView({ behavior: "smooth" });
  };
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "960px",
      numVisible: 4,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []);

  useEffect(()=>{
    PhotoService.getImages().then((data)=> setImages(data));
  }) 
  
  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{
          width: "100%",
          height: "410px",
          display: "block",
          borderRadius: "5px",
          paddingBottom: "20px",
        }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{
          display: "block",
          width: "100px",
          height: "80px",
          borderRadius: "10px",
        }}
      />
    );
  };

  return (
    <div className="prwview_cont">
      <div className="card">
        <div>
          <Galleria
            value={images}
            responsiveOptions={responsiveOptions}
            numVisible={7}
            circular
            style={{ width: "100%" }}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
          />
        </div>
        <div className="preview_imgContent">
          <div className="pre_sub">
            <img src={PreBhk} alt="preview bhk" />
            <p className="pre_flat">2 BHK Flat</p>
          </div>
          <div className="pre_sub">
            <img src={PreBed} alt="preview bhk" />
            <p className="pre_flat">3 Beds</p>
          </div>
          <div className="pre_sub">
            <img src={PreFurniture} alt="preview bhk" />
            <p className="pre_flat">Fully Furnished</p>
          </div>
          <div className="pre_sub0">
            <p className="pre_flat1">
              1000.00 sq.ft. - 1607.00 sq.ft. (Super Builtup Area) Sizes
            </p>
          </div>
        </div>
      </div>
      <div className="pre_stick">
        <Tabs
          value={selectedTab}
          aria-label="Navigation tabs"
          className="pre_overtab"
        >
          <Tab
            className="overtab"
            label="Overview"
            onClick={() => handleTabChange(0)}
          />
          <Tab
            className="overtab"
            label="Description"
            onClick={() => handleTabChange(1)}
          />
          <Tab
            className="overtab"
            label="Amenities"
            onClick={() => handleTabChange(2)}
          />
          <Tab
            className="overtab"
            label="Neighbourhood"
            onClick={() => handleTabChange(3)}
          />
        </Tabs>
        <div style={{ marginTop: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} ref={(ref) => (tabContentsRef.current[0] = ref)}>
              <Card
                className={
                  !selectedTab || selectedTab === 0
                    ? "tab-content active-tab"
                    : "tab-content"
                }
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    className={
                      selectedTab && selectedTab === 0
                        ? "tab-heading selected-tab"
                        : "tab-heading"
                    }
                    style={{
                      width: "max-content",
                      height: "29px",
                      padding: "5px 0px",
                      borderBottom: "1px solid #68BCFF",
                      fontFamily: "Lato",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#4A4A4A",
                    }}
                  >
                    Overview
                  </Typography>
                  <Typography style={{ marginTop: "20px" }}>
                    <div className="mt-4 pre_view">
                      <div className="over_part">
                        <div className="over_cont">
                          <div className="overIcon">
                            <img src={overHome} alt="home" />
                          </div>
                          <div>
                            <p className="pre_id">ID</p>
                            <p className="pre_no">1234</p>
                          </div>
                        </div>
                        <div className="over_cont">
                          <div className="overIcon">
                            <img src={overType} alt="home" />
                          </div>
                          <div>
                            <p className="pre_id">TYPE</p>
                            <p className="pre_no">Villas</p>
                          </div>
                        </div>
                        <div className="over_cont">
                          <div className="overIcon">
                            <img src={overBedroom} alt="home" />
                          </div>
                          <div>
                            <p className="pre_id">BEDROOM</p>
                            <p className="pre_no">2</p>
                          </div>
                        </div>
                        <div className="over_cont">
                          <div className="overIcon">
                            <img src={overBathroom} alt="home" />
                          </div>
                          <div>
                            <p className="pre_id">BATHROOMS</p>
                            <p className="pre_no">2</p>
                          </div>
                        </div>
                      </div>
                      <div className="over_part">
                        <div className="over_cont">
                          <div className="overIcon">
                            <img src={overGarages} alt="home" />
                          </div>
                          <div>
                            <p className="pre_id">GARAGES</p>
                            <p className="pre_no">1</p>
                          </div>
                        </div>
                        <div className="over_cont">
                          <div className="overIcon">
                            <img src={overSize} alt="home" />
                          </div>
                          <div>
                            <p className="pre_id">SIZE</p>
                            <p className="pre_no">780 SqFt</p>
                          </div>
                        </div>
                        <div className="over_cont">
                          <div className="overIcon">
                            <img src={overFacing} alt="home" />
                          </div>
                          <div>
                            <p className="pre_id">FACING</p>
                            <p className="pre_no">South</p>
                          </div>
                        </div>
                        <div className="over_cont">
                          <div className="overIcon">
                            <img src={overYrBuild} alt="home" />
                          </div>
                          <div>
                            <p className="pre_id">YEAR BUILD</p>
                            <p className="pre_no">2020</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} ref={(ref) => (tabContentsRef.current[1] = ref)}>
              <Card
                className={
                  !selectedTab || selectedTab === 1
                    ? "tab-content active-tab"
                    : "tab-content"
                }
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    className={
                      selectedTab && selectedTab === 1
                        ? "tab-heading selected-tab"
                        : "tab-heading"
                    }
                    style={{
                      width: "max-content",
                      height: "29px",
                      padding: "5px 0px",
                      borderBottom: "1px solid #68BCFF",
                      fontFamily: "Lato",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#4A4A4A !important",
                    }}
                  >
                    Description
                  </Typography>
                  <Typography>
                    <p className="pre_para">
                      This 2 bhk apartment is available for sale in town estate,
                      one of the most prominent projects for flats in
                      kattupakkam, chennai west. This is a south-Facing
                      property. Containing 2 bedroom(s), 2 bathrooms and 1
                      balcony, this flat is spread over a super built up area of
                      889 sq.Ft. The flat has a total of 5 floors and this
                      property is situated on 3rd floor. Moreover, the flat is
                      currently under construction and possession is expected by
                      december 2024. The beautifully designed vitrified flooring
                      enhances the beauty of the flat. The flat will offer a
                      modern lifestyle as it is presented with many of the
                      amenities such as maintenance staff, park, lift(s),
                      swimming pool, club house / community center and fitness
                      centre / gym. The housing society ensures a continuous
                      supply of water to your flat from municipal corporation
                      and borewell/tank.
                    </p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} ref={(ref) => (tabContentsRef.current[2] = ref)}>
              <Card
                className={
                  !selectedTab || selectedTab === 2
                    ? "tab-content active-tab"
                    : "tab-content"
                }
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    className={`
                      selectedTab && selectedTab === 2
                        ? "tab-heading selected-tab pre_amenitiesChange"
                        : "tab-heading"`}
                    style={{
                      width: "max-content",
                      height: "29px",
                      padding: "5px 0px",
                      borderBottom: "1px solid #68BCFF",
                      fontFamily: "Lato",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#4A4A4A !important",
                    }}
                  >
                    {" "}
                    Amenities
                  </Typography>

                  <Typography>
                    <div className="pre_amaSection">
                    <div className="pre_amenities mb-4 pt-4">
                      <div className="ama_cont me-3">
                        <div>
                          <img src={Dining} alt="dining table" />
                        </div>
                        <div>
                          <p className="m-0">Dining Table</p>
                        </div>
                      </div>
                      <div className="ama_cont me-3">
                        <div>
                          <img src={Washingmachine} alt="dining table" />
                        </div>
                        <div>
                          <p className="ama_space m-0 text-center">
                            Washing Machine
                          </p>
                        </div>
                      </div>
                      <div className="ama_cont me-3">
                        <div>
                          <img src={Sofa} alt="dining table" />
                        </div>
                        <div>
                          <p className="m-0">Sofa</p>
                        </div>
                      </div>
                      <div className="ama_cont me-3">
                        <div>
                          <img src={Microwave} alt="dining table" />
                        </div>
                        <div>
                          <p className="m-0">Microwave</p>
                        </div>
                      </div>
                      <div className="ama_cont me-3">
                        <div>
                          <img src={Stove} alt="dining table" />
                        </div>
                        <div>
                          <p className="m-0">Stove</p>
                        </div>
                      </div>
                    </div>

                    <div className="pre_amenities mb-4 pt-4">
                      <div className="ama_cont me-3">
                        <div>
                          <img src={Fridge} alt="dining table" />
                        </div>
                        <div>
                          <p className="m-0">Fridge</p>
                        </div>
                      </div>
                      <div className="ama_cont me-3">
                        <div>
                          <img src={WaterPurifier} alt="dining table" />
                        </div>
                        <div>
                          <p className="m-0 ama_space">Water Purifier</p>
                        </div>
                      </div>
                      <div className="ama_cont me-3">
                        <div>
                          <img src={Gas} alt="dining table" />
                        </div>
                        <div>
                          <p className="m-0 ama_space">Gas Pipeline</p>
                        </div>
                      </div>
                      <div className="ama_cont me-3">
                        <div>
                          <img src={Ac} alt="dining table" />
                        </div>
                        <div>
                          <p className="m-0">AC</p>
                        </div>
                      </div>
                      <div className="ama_cont me-3">
                        <div>
                          <img src={Tv} alt="dining table" />
                        </div>
                        <div>
                          <p className="m-0">TV</p>
                        </div>
                      </div>
                    </div>

                    <div className="pre_Neighbourhood">
                      <div className="ama_cont me-3">
                        <div>
                          <img src={Bed} alt="dining table" />
                        </div>
                        <div>
                          <p className="m-0">Bed</p>
                        </div>
                      </div>
                      <div className="ama_cont me-3">
                        <div>
                          <img src={Cubboard} alt="dining table" />
                        </div>
                        <div>
                          <p className="m-0">Cupboard</p>
                        </div>
                      </div>
                      <div className="ama_cont me-3">
                        <div>
                          <img src={Geyser} alt="dining table" />
                        </div>
                        <div>
                          <p className="m-0">Geyser</p>
                        </div>
                      </div>
                    </div>


                    </div>
                    
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} ref={(ref) => (tabContentsRef.current[3] = ref)}>
              <Card
                className={
                  !selectedTab || selectedTab === 3
                    ? "tab-content active-tab"
                    : "tab-content"
                }
              >
                <CardContent className="pre_neighbourView">
                  <Typography
                    variant="h5"
                    className={
                      selectedTab && selectedTab === 3
                        ? "tab-heading selected-tab"
                        : "tab-heading"
                    }
                    style={{
                      width: "max-content",
                      height: "29px",
                      padding: "5px 0px",
                      borderBottom: "1px solid #68BCFF",
                      fontFamily: "Lato",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#4A4A4A !important",
                    }}
                  >
                    Neighbourhood
                  </Typography>

                  <Typography>
                    <div className="map">
                      <div>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          aria-label="Tabs"
                        >
                          <Tab label="School" />
                          <Tab label="Transport" />
                          <Tab label="Restaurant" />
                          <Tab label="Hospitals" />
                          <Tab label="ATMS" />
                          <Tab label="Railway Station" />
                          <Tab label="Shopping Malls" />
                        </Tabs>
                      </div>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.135099206294!2d80.2129866109179!3d12.9632057872986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525db9195fde7b%3A0x87a8ca7d197ca826!2sKodukku%20Classifieds%20Private%20Limited!5e0!3m2!1sen!2sin!4v1705997937319!5m2!1sen!2sin"
                        title="map"
                        width="802"
                        height="485"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>

                      {value === 0 && (
                        <div className="card pre_map">
                          <div className="pre_cont">
                            <img
                              className="pre_schlImg"
                              src={NearScl}
                              alt="near by school"
                            />
                            <h4 className="Pre_nearSchool">Near by Schools</h4>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {value === 1 && (
                        <div className="card pre_map">
                          <div className="pre_cont">
                            <img
                              className="pre_schlImg"
                              src={Transport}
                              alt="near by school"
                            />
                            <h4 className="Pre_nearSchool">Transport</h4>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {value === 2 && (
                        <div className="card pre_map">
                          <div className="pre_cont">
                            <img
                              className="pre_schlImg"
                              src={Restaurant}
                              alt="near by school"
                            />
                            <h4 className="Pre_nearSchool">Restaurant</h4>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {value === 3 && (
                        <div className="card pre_map">
                          <div className="pre_cont">
                            <img
                              className="pre_schlImg"
                              src={Hospital}
                              alt="near by school"
                            />
                            <h4 className="Pre_nearSchool">Hospitals</h4>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {value === 4 && (
                        <div className="card pre_map">
                          <div className="pre_cont">
                            <img
                              className="pre_schlImg"
                              src={Atm}
                              alt="near by school"
                            />
                            <h4 className="Pre_nearSchool">ATMS</h4>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {value === 5 && (
                        <div className="card pre_map">
                          <div className="pre_cont">
                            <img
                              className="pre_schlImg"
                              src={Railway}
                              alt="near by school"
                            />
                            <h4 className="Pre_nearSchool">Railway Station</h4>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {value === 6 && (
                        <div className="card pre_map">
                          <div className="pre_cont">
                            <img
                              className="pre_schlImg"
                              src={Shopping}
                              alt="near by school"
                            />
                            <h4 className="Pre_nearSchool">Shopping Malls</h4>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">Joobilee School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                          <div className="Pre_border">
                            <div className="pre_contScl">
                              <p className="pre_gkm">G K M School</p>
                              <div>
                                <span className="pre_8 pre_9">8.5</span>
                                <span className="pre_8">9 Mins</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default PreviewLeftView;
