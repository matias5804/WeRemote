import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ titlee, content }) => {
    const [isActiveAccordion, setIsActiveAccordion] = useState(false);
  
    const handleClick = (e) => {
      setIsActiveAccordion((prevState) => !prevState);
    };
  
    return (
      <div
        onClick={handleClick}
        className={`accordion
        ${isActiveAccordion ? "open" : " " }`}>

        <div className="title">
          <h4>{titlee}</h4>
          <div class="arrow-down">
          <FontAwesomeIcon icon={faAngleDown}/>
          </div>
        </div>

        <p>{content}</p>


      </div>
    );
  };

export default Accordion