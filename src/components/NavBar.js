import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'

import logoBrand from '../assets/icon/logoBrand.png'
import searcher from '../assets/icon/searcher.png'
import '../scss/styles.scss'
import Search from './Search'
import { Link} from 'react-router-dom';


const NavBar = () => {

    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");

    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };

  return (
    <div className="nav">
        <div onClick={navToggle} className={icon}>
          <div className="nav__toggler__line1"></div>
          <div className="nav__toggler__line2"></div>
          <div className="nav__toggler__line3"></div>
        </div>

        <Link to="/">
          <img className="nav__imgLogo" src={logoBrand} alt="Logo Brand"/>       
        </Link>

        <img className='nav__iconSearcher' src={searcher} alt="searcher"/>

        <div className={active}>
            <Search/>
            <ul>
              <ol>
                <h3>Embarazo</h3>
                <li className='nav__item'>Quiero ser mamá <FontAwesomeIcon icon={faArrowRight} /></li>
                <li className='nav__item'>Voy a ser mamá <FontAwesomeIcon icon={faArrowRight} /></li>
                <li className='nav__item'>Parto <FontAwesomeIcon icon={faArrowRight} /></li>
              </ol>
              
              <ol>
                <h3>Educación</h3>
                <li className='nav__item '>Aprende a ser mamá <FontAwesomeIcon icon={faArrowRight} /></li>
                <li className='nav__item'>Educación para bebés <FontAwesomeIcon icon={faArrowRight} /></li>
                <li className='nav__item'>Educación para niños <FontAwesomeIcon icon={faArrowRight} /></li>
              </ol>
            </ul>
        </div>
    </div>
  )
}

export default NavBar