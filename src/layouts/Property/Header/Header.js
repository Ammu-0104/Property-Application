import React from "react";
import Select from 'react-select';
import "../../Property/Property.css";
import headerImg from "../../../assets/images/headerLogo.svg";
import headLocation from '../../../assets/images/headlocation.png';
import { Link } from "react-router-dom";
import '../../../layouts/Property/Property.css';

const Header = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div>
      <div className="header_cont">
      <div className="card">
        <div className="header_container">
          <div className="header_Logo">
            <img className="header_img" src={headerImg} alt="headerlogo" />
          </div>
          <div className="header_navTab">
          <div className="header_content">
            <div className="header_ul"> 
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-buy-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-buy"
                    type="button"
                    role="tab"
                    aria-controls="pills-buy"
                    aria-selected="true"
                  >
                    Buy
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-rent-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-rent"
                    type="button"
                    role="tab"
                    aria-controls="pills-rent"
                    aria-selected="false">
                    Rent
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-commercial-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-commercial"
                    type="button"
                    role="tab"
                    aria-controls="pills-commercial"
                    aria-selected="false"
                  >
                    Commercial
                  </button>
                </li>
              </ul>
              {/* <div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-buy" role="tabpanel" aria-labelledby="pills-buy-tab">123</div>
  <div class="tab-pane fade" id="pills-rent" role="tabpanel" aria-labelledby="pills-rent-tab">465</div>
  <div class="tab-pane fade" id="pills-commercial" role="tabpanel" aria-labelledby="pills-commercial-tab">65456</div>
</div> */}
            </div>
            <div className="header_Search">
              <div className="search-container">
                <div className="head_subPart">
                  <div>
                  <img className="head_location" src={headLocation} alt="location"/>
                  </div>
                  <div>
                  <Select className="head_select"
                  placeholder="chennai" options={options} />
                  </div>
                </div>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for property"/>
                <button className="search-button">Search</button>
              </div>
            </div>
          </div>

          </div>
         
          <div className="header_button">
            <Link to="/main/property/Postproperty">
              <button className="head_btn">
                Post Property
              </button>
            </Link>
          </div>
        </div>
      </div>

      </div>
      
    </div>
  );
};

export default Header;
