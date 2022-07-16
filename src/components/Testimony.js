import { useEffect, useState } from 'react'
import iconTestimony from '../assets/icon/comments.png'


const slides = [
    {
        eachSlide: 'Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.',
        name:' ~ Maria Montessori ~'
    },
    {
        eachSlide: 'Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.',
        name:' ~ Maria Montessori ~'
    },
    {
        eachSlide: 'Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.',
        name:' ~ Maria Montessori ~'
    },
    {
        eachSlide: 'Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.',
        name:' ~ Maria Montessori ~'
    },

];


const Testimony = () => {

    const [active, setActive] = useState(0);
    const [autoplay, setAutoplay] = useState(0);
    const max = slides.length;
    
    const intervalBetweenSlides = () => autoplay && setActive(active === max - 1 ? 0 : active + 1)

    useEffect(() => {
        const interval = setInterval( () => intervalBetweenSlides(), 3000);
        return () => clearInterval(interval);
    });
    
    const isActive = value => active === value && 'active'

    const setSliderStyles = () => {
        
        const transition = active *  - 375;
        
        return {
          width: ( slides.length * 100 ) + 'vw',
          transform: 'translateX(' + transition + 'px'
        }
    }

    const renderSlides = () => slides.map((item, index) => (
        <div className='each-slide'key={ index } >
                <img src={iconTestimony} alt="Testimony"/>
                <q>{item.eachSlide}</q>
                <p>{item.name}</p>

        </div>
    ));

    const renderDots = () => slides.map((silde, index) => ( // check index
        <li 
            className={ isActive(index) + ' dots' }   
            key={ index }>
                <button onClick={ () => setActive(index) }>
                    <span>&#9679;</span>
                </button>
        </li> 
    ));

  return (
    <section className='slider'>
        <div className='slider'>
            <div className='wrapper' style={ setSliderStyles() }>
            { renderSlides() }
            </div>

        </div>

        <ul className='dots-container'>
           { renderDots() }
        </ul>
    </section>
    )
}

export default Testimony