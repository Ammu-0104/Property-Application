import React from 'react';
// import Filter from './Filter';
// import ContentPreview from './ContentPreview';
import '../../../layouts/Property/Content/Content.css';
import Preview from '../Postproperty/Preview/Preview';

const Content = () => {
  return (
   <div className="content">
    {/* <div className="row">
      <div className="col-3">
        <Filter/>
      </div>
      <div className="col-9">
        <ContentPreview/>
      </div>
    </div> */}
    <Preview/>
   </div>
  );
}

export default Content;
