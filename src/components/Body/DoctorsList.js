import React from 'react'
import doctImg1 from '../../assets/doctor-1.jpg'
import doctImg2 from '../../assets/doctor-2.jpg'
import doctImg3 from '../../assets/doctor-3.jpg'
import DoctorCard from '../cards/DoctorCard'

const DoctorsList = () => {
    const doctList = [
        { name: "Dr. Emily Smith", speciality: "Cardiologist", img: doctImg1 },
        { name: "Dr. James Anderson", speciality: "Neurosurgeon", img: doctImg2 },
        { name: "Dr. Michael Lee", speciality: "Cardiologist", img: doctImg3 }
    ];

    return (
        <section className="section__container doctors__container" id="pages">
            <div className="doctors__header">
                <div className="doctors__header__content">
                    <h2 className="section__header">Our Special Doctors</h2>
                    <p>
                        We take pride in our exceptional team of doctors, each a specialist
                        in their respective fields.
                    </p>
                </div>
                <div className="doctors__nav">
                    <span><i className="ri-arrow-left-line"></i></span>
                    <span><i className="ri-arrow-right-line"></i></span>
                </div>
            </div>
            <div className="doctors__grid">
                {doctList.map((data) => (
                    <DoctorCard
                        key={data.name}
                        doctorName={data.name}
                        docImg={data.img}
                        doctorSpecialist={data.speciality}
                    />
                ))}
            </div>
        </section>
    );
};

export default DoctorsList;
