import React from 'react'

const NavBarContainer = () => {
    const navContent = {'home':"#home","About us":"#about","Services" :"#service","Pages":"#pages","Blog":"#blog"} 
    
      
      return (
        <nav className="section__container nav__container">
          <div className="nav__logo">
            Health<span>Care</span>
          </div>
          <ul className="nav__links">
            {Object.keys(navContent).map((key) => (
              <li className="link" key={key}>
                <a href={navContent[key]}>{key}</a>
              </li>
            ))}
          </ul>
          <button className="btn">Contact Us</button>
        </nav>
      );
      
}

export default NavBarContainer