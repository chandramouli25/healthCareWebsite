import React from 'react'
import BookNow from './BookNow'
import NavBarContainer from './NavBarContainer'
const Header = () => {
    return (

        <header>
            <NavBarContainer />
            <div className="section__container header__container" id="home">
                <div className="header__content">
                    <h1 style={{ textAlign: 'center' }}>Delivering Outstanding Patient Care Experience</h1>
                    <p  style={{ textAlign: 'center' }}>
                        Welcome! Your health and comfort are our highest priorities. With personalized care,
                        advanced facilities, and a patient-first approach, we are dedicated to ensuring a superior
                        healthcare experience. Rely on us for your well-being and discover the difference.
                    </p>
                    <button className="btn">See Services</button>
                </div>
                <BookNow></BookNow>
            </div>
        </header>
    )
}

export default Header