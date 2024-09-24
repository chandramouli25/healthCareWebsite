import React from 'react'
import doctImg1 from '../../assets/d2.jpg'
import doctImg2 from '../../assets/dr3.jpg'
import doctImg3 from '../../assets/dr4.jpg'
import DoctorCard from '../cards/DoctorCard'

const DoctorsList = () => {
    const doctList = [
        { name: "Dr. Kamala", speciality: "Cardiologist", img: doctImg1 },
        { name: "Dr. MohanRaj", speciality: "Neurosurgeon", img: doctImg2 },
        { name: "Dr. Priyesh A. A", speciality: "Urology", img: doctImg3 }
    ];

    return (
        <section className="section__container doctors__container" id="pages">
            <div className="doctors__header">
                <div className="doctors__header__content">
                    <h2 className="section__header">Our Dedicated Specialists</h2>
                    <p>
                        We are proud to present our outstanding team of doctors,
                        each an expert in their respective fields, dedicated to providing exceptional care.

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
