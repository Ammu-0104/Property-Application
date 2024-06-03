import React from 'react'
import preShare from '../../../../assets/Icons/previewshare.svg';
import preDirection from '../../../../assets/Icons/previewdirection.svg';
import preHeart from '../../../../assets/Icons/previewheart.svg';
import preLocation from '../../../../assets/Icons/previewlocation.svg';
import preSecurity from '../../../../assets/Icons/previewsecurity.svg';
import preEdit from '../../../../assets/Icons/previewedit.svg';
import preContact from '../../../../assets/Icons/precontact.svg';
import preMsg from '../../../../assets/Icons/premsg.svg';
import { Link } from 'react-router-dom';




const PreviewRightView = () => {
  return (  
    <div className='previewRight'> 
      <div className="">
        <div className="card">
         <div className="previewPart1">
          <h3 className='pre_head3'>Varun Apartments</h3>
          <div className='pre_iconmain'>
          <img className='pre_share' src={preShare} alt="shareicon" />
          <img className='pre_share' src={preDirection} alt="directionicon" />
          <img className='pre_share' src={preHeart} alt="hearticon" />
          </div>
         </div>
         <div className="previewPart2">
          <p className='pre_parabhk'>2 BHK Flat for sale</p>
          <h6 className='pre_headcont'>Spacious backyard, modern kitchen, attached garage
           Perfect for outdoor entertaining ect...</h6>
          </div>
          <div className="previewPart3">
            <div className='pre_loc'>
            <img src={preLocation} alt="locationicon" className='pre_locations' />
            <div>
              <span className='pre_place'>Place : </span>
              <span className='pre_add'>Gandhi Nagar, T.Nagar, Chennai.</span>
            </div>
            </div>
            <div className='pre_loc pre_dir'>
            <img src={preSecurity} alt="securityicon" className='pre_locations' />
            <div>
              <span className='pre_place'>View : </span>
              <span className='pre_add'>Verified Listing</span>
            </div>
            </div>
          </div>
          <div className="previewPart4">
            <div className='pre_price'>
            <h1 className='pre_lac'>₹12.35 Lac </h1>
            <h5 className='pre_sqft'>₹ 860/sqft</h5>
            </div>
            <h4 className='pre_emi'>Monthly EMI : 21,000/</h4>
          </div>
          <div className="previewPart5">
            <div className='pre_btnEdit'> 
            <img className='pre_imgedit' src={preEdit} alt="editicon"/>
            <Link to="/main/property/Postproperty"> 
            <button className='pre_Edit'>Edit Property</button>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="previewRight2">
        <div className="card">
         <div className="previewPart1">
          <h3 className='pre_head3'>Varun Apartments</h3>
          <div className='pre_iconmain'>
          <img className='pre_share' src={preShare} alt="shareicons" />
          <img className='pre_share' src={preDirection} alt="directionicons" />
          <img className='pre_share' src={preHeart} alt="hearticons" />
          </div>
         </div>
         <div className="previewPart2">
          <p className='pre_parabhk'>2 BHK Flat for sale</p>
          <h6 className='pre_headcont'>Spacious backyard, modern kitchen, attached garage
           Perfect for outdoor entertaining ect...</h6>
          </div>
          <div className="previewPart3">
            <div className='pre_loc'>
            <img src={preLocation} alt="locationicons" />
            <div>
              <span className='pre_place'>Place : </span>
              <span className='pre_add'>Gandhi Nagar, T.Nagar, Chennai.</span>
            </div>
            </div>
            <div className='pre_loc pre_dir'>
            <img src={preSecurity} alt="securityicons" />
            <div>
              <span className='pre_place'>View : </span>
              <span className='pre_add'>Verified Listing</span>
            </div>
            </div>
          </div>
          
          <div className="previewPart4">
            <div className='pre_price'>
            <h1 className='pre_lac'>₹12.35 Lac </h1>
            <h5 className='pre_sqft'>₹ 860/sqft</h5>
            </div>
            <h4 className='pre_emi'>Monthly EMI : 21,000/</h4>
          </div>
          <div className="previewPart5 pb-2">
            <div className='pre_btnEdit pre_condetails'>  
            <img className='pre_imgedit' src={preContact} alt="contacticon"/>
            <button className='pre_Edit'>Contact Details</button>
            </div>
          </div>
          <div className="previewPart5">
            <div className='pre_btnEdit'> 
            <img className='pre_imgedit' src={preMsg} alt="messageicon"/>
            <button className='pre_Edit'>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewRightView