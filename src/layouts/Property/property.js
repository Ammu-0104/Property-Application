import React from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import CollapsedBreadcrumbs from './Breadcrumbs/breadcrumbs'

const Property = () => {
  return (
    <div>
      <Header/>
      <CollapsedBreadcrumbs/>
      <Content/>
    </div>
  )
}

export default Property