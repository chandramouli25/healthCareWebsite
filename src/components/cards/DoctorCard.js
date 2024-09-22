import React from 'react'

const DoctorCard = ({doctorName,doctorSpecialist,docImg}) => {
    return (
        <div className ="doctors__card">
            <div className ="doctors__card__image">
                <img src={docImg} alt="doctor" />
                <div className ="doctors__socials">
                    <span><i className ="ri-instagram-line"></i></span>
                    <span><i className ="ri-facebook-fill"></i></span>
                    <span><i className ="ri-heart-fill"></i></span>
                    <span><i className ="ri-twitter-fill"></i></span>
                </div>
            </div>
            <h4>{doctorName}</h4>
            <p>{doctorSpecialist}</p>
        </div>
    )
}

export default DoctorCard