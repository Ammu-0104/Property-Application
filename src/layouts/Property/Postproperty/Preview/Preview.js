import React from 'react'
import PreviewRightView from './PreviewRightView';
import PreviewLeftView from './PreviewLeftView';


const Preview = () => {
  return (
    <div>
    <div className="preview">
    <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-8">
        <PreviewLeftView/>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-4">
        <PreviewRightView/>
      </div>
     </div>
    </div>
    </div>
  )
}

export default Preview