import React from 'react'
import whyusimg from '../../assets/choose-us.jpg'
const WhyUsContainer = () => {
  return (
    <section className ="section__container why__container" id="blog">
      <div className ="why__image">
        <img src={whyusimg} alt="why choose us" />
      </div>
      <div className ="why__content">
        <h2 className ="section__header">Why Choose Us</h2>
        <p>
          With a steadfast commitment to your well-being, our team of highly
          trained healthcare professionals ensures that you receive nothing
          short of exceptional patient experiences.
        </p>
        <div className ="why__grid">
          <span><i className ="ri-hand-heart-line"></i></span>
          <div>
            <h4>Intensive Care</h4>
            <p>
              Our Intensive Care Unit is equipped with advanced technology and
              staffed by team of professionals
            </p>
          </div>
          <span><i className ="ri-truck-line"></i></span>
          <div>
            <h4>Free Ambulance Car</h4>
            <p>
              A compassionate initiative to prioritize your health and
              well-being without any financial burden.
            </p>
          </div>
          <span><i className ="ri-hospital-line"></i></span>
          <div>
            <h4>Medical and Surgical</h4>
            <p>
              Our Medical and Surgical services offer advanced healthcare
              solutions to address medical needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsContainer