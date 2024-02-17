import React from 'react'
import { Helmet } from "react-helmet-async";

import OrganizationView from '../views/OrganizationView'

const OrganizationPage = () => {
  return (
    <>
      <Helmet>
        <title> Organizations </title>
      </Helmet>
      
      <OrganizationView />
    </>
  )
}

export default OrganizationPage
