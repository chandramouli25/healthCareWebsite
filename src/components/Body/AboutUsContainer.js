import React from 'react'
import aboutusimg from '../../assets/about.jpg'
const AboutUsContainer = () => {
    return (
        <section className ="section__container about__container" id="about">
            <div className ="about__content">
                <h2 className ="section__header">About Us</h2>
                <p>
                    Welcome to our healthcare website, your one-stop destination for
                    reliable and comprehensive health care information. We are committed
                    to promoting wellness and providing valuable resources to empower you
                    on your health journey.
                </p>
                <p>
                    Explore our extensive collection of expertly written articles and
                    guides covering a wide range of health topics. From understanding
                    common medical conditions to tips for maintaining a healthy lifestyle,
                    our content is designed to educate, inspire, and support you in making
                    informed choices for your health.
                </p>
                <p>
                    Discover practical health tips and lifestyle advice to optimize your
                    physical and mental well-being. We believe that small changes can lead
                    to significant improvements in your quality of life, and we're here to
                    guide you on your path to a healthier and happier you.
                </p>
            </div>
            <div className ="about__image">
                <img src={aboutusimg} alt="about" />
            </div>
        </section>
    )
}

export default AboutUsContainer