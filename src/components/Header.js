import React from 'react'
import BookNow from './BookNow'
import NavBarContainer from './NavBarContainer'
const Header = () => {
    return (

        <header>
            <NavBarContainer/>
            <div className ="section__container header__container" id="home">
                <div className ="header__content">
                    <h1>Providing an Exceptional Patient Experience</h1>
                    <p>
                        Welcome, where exceptional patient experiences are our priority.
                        With compassionate care, state-of-the-art facilities, and a
                        patient-centered approach, we're dedicated to your well-being. Trust
                        us with your health and experience the difference.
                    </p>
                    <button className ="btn">See Services</button>
                </div>
                <BookNow></BookNow>
            </div>
        </header>
    )
}

export default Header