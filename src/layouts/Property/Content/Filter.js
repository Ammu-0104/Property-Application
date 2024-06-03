import React,{useState} from 'react';
import FilterReset from '../../../assets/Icons/filterreset.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Filter = () => {
  const [selectedBHK, setSelectedBHK] = useState(null);
  const handleBHKClick = (bhkType) => {
    setSelectedBHK(bhkType);
  };

  const getBHKButtonStyle = (bhkType) => {
    return {
      backgroundColor: selectedBHK === bhkType ? "#EFF5FC" : "white",
      borderColor: selectedBHK === bhkType ? "#68BCFF" : "#E6E6E6",
    };
  };
  return (
    <div className='filter_parent'>
      <div className="card">
      <div className="allFilters">
          <h5 className='filter_head'>All Filters</h5>
          <div className='fil_sub'>
            <img src={FilterReset} alt="filter" />
            <h5 className='filter_reset'>Reset</h5>
          </div>
        </div>
        <div className="filter_propertiesaccord">
        <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        className='filter_properties'
      >
        Properties
      </AccordionSummary>
      <AccordionDetails>
        <div className='filter_accord'>
          <input type="checkbox" id="property1" name="property1" className='filter_checkbox'/>
          <label htmlFor="property1" className='filter_protype'>Commercial</label>
        </div>
        <div className='filter_accord'>
          <input type="checkbox" id="property2" name="property2"  className='filter_checkbox' />
          <label htmlFor="property2" className='filter_protype'>Residential</label>
        </div>
        <div className='filter_accord'>
          <input type="checkbox" id="property3" name="property3"  className='filter_checkbox' />
          <label htmlFor="property3" className='filter_protype'>Agricultural</label>
        </div>
        <div className='filter_accord'>
          <input type="checkbox" id="property4" name="property4"  className='filter_checkbox'/>
          <label htmlFor="property4" className='filter_protype'>Industrial</label>
        </div>
       </AccordionDetails>
       </Accordion>
        </div>
        <div className="filter_Bhk">
        <div className="loc_bhk">
          <h6 className="filter_properties pb-3 m-0">BKH Type</h6>
          <div>
          <button
              className="loc_bhkopt"
              style={getBHKButtonStyle("1 RK")}
              onClick={() => handleBHKClick("1 RK")}
            >
              1 RK  
            </button>
            <button
              className="loc_bhkopt"
              style={getBHKButtonStyle("1 BHK")}
              onClick={() => handleBHKClick("1 BHK")}
            >
              1 BHK
            </button>
            <button
              className="loc_bhkopt"
              style={getBHKButtonStyle("2 BHK")}
              onClick={() => handleBHKClick("2 BHK")}
            >
              2 BHK
            </button>
            <button
              className="loc_bhkopt"
              style={getBHKButtonStyle("3 BHK")}
              onClick={() => handleBHKClick("3 BHK")}
            >
              3 BHK
            </button>
            <button
              className="loc_bhkopt"
              style={getBHKButtonStyle("4 BHK")}
              onClick={() => handleBHKClick("4 BHK")}
            >
              4 BHK
            </button>
            <button
              className="loc_bhkopt"
              style={getBHKButtonStyle("4+ BHK")}
              onClick={() => handleBHKClick("4+ BHK")}>
              4+ BHK
            </button>
          </div>
        </div>


        </div>
        <div className="filter_pricerage"></div>
        <div className="filter_furniture">
        <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        className='filter_properties'
      >
        Furnishing
      </AccordionSummary>
      <AccordionDetails>
        <div className='filter_accord'>
          <input type="checkbox" id="Full" name="Full" className='filter_checkbox'/>
          <label htmlFor="Full" className='filter_protype'>Full</label>
        </div>
        <div className='filter_accord'>
          <input type="checkbox" id="Semi" name="Semi"  className='filter_checkbox' />
          <label htmlFor="Semi" className='filter_protype'>Semi</label>
        </div>
        <div className='filter_accord'>
          <input type="checkbox" id="None" name="None"  className='filter_checkbox' />
          <label htmlFor="None" className='filter_protype'>None</label>
        </div>
       </AccordionDetails>
       </Accordion>

        </div>
        <div className="filter_rating">
        <div className="loc_bhk">
          <h6 className="filter_properties pb-3 m-0">BKH Type</h6>
          <div>
          <button
              className="loc_bhkopt"
              style={getBHKButtonStyle("Any")}
              onClick={() => handleBHKClick("Any")}
            >
              Any 
            </button>
            <button
              className="loc_bhkopt"
              style={getBHKButtonStyle("3.5+")}
              onClick={() => handleBHKClick("3.5+")}
            >
              3.5+
            </button>
            <button
              className="loc_bhkopt"
              style={getBHKButtonStyle("4.0+")}
              onClick={() => handleBHKClick("4.0+")}
            >
              4.0+
            </button>
            <button
              className="loc_bhkopt"
              style={getBHKButtonStyle("5.0")}
              onClick={() => handleBHKClick("5.0")}
            >
              5.0
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Filter