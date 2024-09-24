import React from 'react'
import whyusimg from '../../assets/Drmain.webp'
const WhyUsContainer = () => {
  return (
    <section className="section__container why__container" id="blog">
      <div className="why__image">
        <img src={whyusimg} alt="why choose us" />
      </div>
      <div className="why__content">
        <h2 className="section__header">Why Choose Us</h2>
        <p>
          With a strong dedication to your well-being,
          our team of skilled healthcare professionals is
          committed to providing you with outstanding patient experiences.
        </p>
        <div className="why__grid">
          <span><i className="ri-hand-heart-line"></i></span>
          <div>
            <h4>Comprehensive Intensive Care</h4>
            <p>
              Our Intensive Care Unit features cutting-edge technology and is staffed by a dedicated team of professionals,
              ensuring the highest level of care.
            </p>

          </div>
          <span><i className="ri-truck-line"></i></span>
          <div>
            <h4>Free Ambulance Car</h4>
            <p>
              A compassionate initiative to prioritize your health and
              well-being without any financial burden.
            </p>
          </div>
          <span><i className="ri-hospital-line"></i></span>
          <div>
            <h4>Compassionate Free Ambulance Service</h4>
            <p>
              A compassionate initiative designed to prioritize your health and well-being, providing essential transport
              without any financial burden.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsContainer