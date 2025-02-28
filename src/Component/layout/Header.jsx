import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="section-navbar">
    <section className="top_txt">
      <div className="head container">
        <div className="head_txt">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
        <div className="sing_in_up">
          <NavLink to="# ">SIGN IN</NavLink>
          <NavLink to="# ">SIGN UP</NavLink>
        </div>
      </div>

    </section>
    <div className="container">
      <div className="navbar-brand">
        <NavLink to="#">
          {/* <img
            src="/images/log.png"
            alt="thapa eCommerce logo"
            class="logo"
            width="80%"
            height="auto"
          /> */}
          <h3>Vrushabh</h3>
        </NavLink>
      </div>
      <nav className="navbar">
        <ul>
          <li className="nav-item ">
            <NavLink to="/" className={({isActive})=> isActive ? "nav-link active-link" : "nav-link"} >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Movies" className="nav-link" style={({isActive})=>{
              return {
                color:isActive? 'green': 'black'
              }
            }}>Movies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" className="nav-link">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" className="nav-link">About</NavLink>
          </li>

          {/* <li class="nav-item">
            <a
              href="addToCart.html"
              class="nav-link add-to-cart-button"
              id="cartValue"
            > 
              <i class="fa-solid fa-cart-shopping">0</i>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>

  </header>
  )
}

export default Header
