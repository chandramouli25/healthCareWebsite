import React from 'react'
import ServicesContainer from './ServicesContainer'
import AboutUsContainer from './AboutUsContainer'
import WhyUsContainer from './WhyUsContainer'
import DoctorsList from './DoctorsList'

const BodyContent = () => {
  return (
    <div>
        <ServicesContainer/>
        <AboutUsContainer/>
        <WhyUsContainer/>
        <DoctorsList/>
    </div>
  )
}

export default BodyContent