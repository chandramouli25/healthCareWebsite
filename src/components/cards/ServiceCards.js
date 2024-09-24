import React from 'react'

const ServiceCards = ({serviceTitle,serviceDes ,servceIcon}) => {
    return (
        <div className ="service__card">
            <span>{servceIcon ? servceIcon : <i className ="ri-microscope-line"></i> }</span>
            <h4>{serviceTitle}</h4>
            <p>
                {serviceDes}
            </p>
            <button href="#" className ="service__btn" >Learn More</button>
        </div>
    )
}

export default ServiceCards