import React from 'react'

const ServiceCards = ({serviceTitle,serviceDes}) => {
    return (
        <div className ="service__card">
            <span><i className ="ri-microscope-line"></i></span>
            <h4>{serviceTitle}</h4>
            <p>
                {serviceDes}
            </p>
            <button href="#">Learn More</button>
        </div>
    )
}

export default ServiceCards