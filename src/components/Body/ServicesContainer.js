import React from 'react'
import ServiceCards from '../cards/ServiceCards'

const ServicesContainer = () => {
    const serviceProviderData =  {"Laboratory Test":"Beyond simply providing medical care, our commitment lies in delivering unparalleled service tailored to your unique needs."
                                    ,"Health Check":"Our thorough assessments and expert evaluations help you stay proactive about your health.",
                                    "General Dentistry":"Experience comprehensive oral care with Dentistry. Trust us to keep  your smile healthy and bright."
    }
    return (
        <section className ="section__container service__container" id="service">
            <div className ="service__header">
                <div className ="service__header__content">
                    <h2 className ="section__header">Our Special service</h2>
                    <p>
                        Beyond simply providing medical care, our commitment lies in
                        delivering unparalleled service tailored to your unique needs.
                    </p>
                </div>
                <button className ="service__btn">Ask A Service</button>
            </div>
            <div className ="service__grid">
                
                    {Object.keys(serviceProviderData).map((key) => (
                        <ServiceCards serviceTitle={key} serviceDes={serviceProviderData[key]}/>
                      ))}
                
                
            </div>
        </section>
    )
}

export default ServicesContainer