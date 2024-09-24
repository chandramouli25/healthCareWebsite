import React from 'react'
// import aboutusimg from '../../assets/about.jpg'
import aboutusimg from '../../assets/d29.jpg'

const AboutUsContainer = () => {
    return (
        <section className="section__container about__container" id="about">
            <div className="about__content">
                <h2 className="section__header">About Us</h2>
                <p>
                    Welcome to your trusted source for all things health and wellness! Here,
                    we offer reliable information and expert guidance to help you make informed decisions and
                    take charge of your well-being.


                </p>
                <p>
                    Dive into our collection of in-depth, expertly written articles covering a wide range of
                    health topics—from understanding medical conditions to actionable tips for improving your everyday
                    wellness. Whether you’re seeking advice on managing a specific condition or looking for ways to lead a
                    healthier lifestyle, our resources are designed to educate, inspire, and support you.

                </p>
                <p>
                    At our core, we believe that small, meaningful changes can have a big impact on your overall health
                    and happiness. We're here to provide practical, easy-to-follow advice
                    to boost your physical and mental well-being, helping you lead a healthier, more balanced life.
                </p>
                <p>
                    Your path to better health starts now—let us guide you every step of the way!


                </p>
            </div>
            <div className="about__image">
                <img src={aboutusimg} alt="about" />
            </div>
        </section>
    )
}

export default AboutUsContainer