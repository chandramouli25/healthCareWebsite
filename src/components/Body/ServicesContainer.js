import React from 'react'
import ServiceCards from '../cards/ServiceCards'

const ServicesContainer = () => {
    const serviceProviderData = [
        {'title':"Laboratory Test" , "icon":<i class="ri-microscope-line"></i>,'describtion': "Beyond simply providing medical care, our commitment lies in delivering unparalleled service tailored to your unique needs."}
        , {"title":"Health Check","icon":<i class="ri-mental-health-line"></i>,"describtion": "Our thorough assessments and expert evaluations help you stay proactive about your health."},
        {'title':"General Dentistry","icon":<i class="ri-hospital-line"></i>,"describtion": "Experience comprehensive oral care with Dentistry. Trust us to keep  your smile healthy and bright."}
    ]
    return (
        <section className="section__container service__container" id="service">
            <div className="service__header">
                <div className="service__header__content">
                    <h2 className="section__header">Our Special service</h2>
                    <p>
                        Our commitment goes beyond providing medical care - we strive to deliver exceptional,
                        personalized service that meets your unique needs.
                    </p>
                </div>
                <button className="service__btn">Ask A Service</button>
            </div>
            <div className="service__grid">

                {serviceProviderData.map((serviceData) => (
                    <ServiceCards serviceTitle={serviceData.title} serviceDes={serviceData.describtion} servceIcon={serviceData.icon} />
                ))}


            </div>
        </section>
    )
}

export default ServicesContainer