import React from 'react'
import { Helmet } from "react-helmet-async";
import SkillDevView from '../views/SkillDevView'

const SkillDevPage = () => {
  return (
    <>
      <Helmet>
        <title> Skill Dev </title>
      </Helmet>
      
      <SkillDevView />
    </>
  )
}

export default SkillDevPage
