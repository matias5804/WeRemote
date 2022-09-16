import React from 'react'
import '../scss/styles.scss'
import imgSlider1 from '../assets/img/photo1.jpg'

const Hero = () => {
  return (
    <div className='hero' id="slider">
        <figure>
            <div className='hero__divImg'>
                <img src={imgSlider1}/>
                <h1>Su viaje de <span className='spanPurple'> salud emocional </span>empieza aqui</h1>
                <h2>Conoce nuestro profesionales con licencia</h2>
                <h3>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</h3>
            </div>

            <div className='hero__divImg hero__divImgTwo'>
                <h1>Su viaje de <span className='spanPurple'> salud emocional </span>empieza aqui</h1>
                <h2>Conoce nuestro profesionales con licencia</h2>
                <h3>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</h3>
            </div>

            <div className='hero__divImg hero__divImgThree'>
                <h1>Su viaje de <span className='spanPurple'> salud emocional </span>empieza aqui</h1>
                <h2>Conoce nuestro profesionales con licencia</h2>
                <h3>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</h3>
            </div>

            <div className='hero__divImg hero__divImgFour'>
                <h1>Su viaje de <span className='spanPurple'> salud emocional </span>empieza aqui</h1>
                <h2>Conoce nuestro profesionales con licencia</h2>
                <h3>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</h3>
            </div>

            <div className='hero__divImg'>
                <h1>Su viaje de <span className='spanPurple'> salud emocional </span>empieza aqui</h1>
                <h2>Conoce nuestro profesionales con licencia</h2>
                <h3>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</h3>
            </div>
        </figure>
    </div>
  )
}

export default Hero