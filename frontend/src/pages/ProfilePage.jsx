import React from 'react'
import { Helmet } from "react-helmet-async";
import ProfileView from '../views/ProfileView';

const ProfilePage = () => {
  return (
    <>
      <Helmet><title>Profile</title></Helmet>
      <ProfileView />
    </>
  )
}

export default ProfilePage
