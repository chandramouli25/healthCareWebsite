import React from 'react'

const BookNow = () => {
    return (
        <div className ="header__form">
            <form>
                <h4>Book Now</h4>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Phone No." />
                <button className ="btn form__btn">Book Appointment</button>
            </form>
        </div>
    )
}

export default BookNow