import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imgSlider1 from '../assets/img/photo1.jpg'
import imgSlider2 from '../assets/img/photo2.jpg'
import imgSlider3 from '../assets/img/photo5.png'
import '../scss/styles.scss'


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";


const HeroHome = () => {
  return (
    <div className="hero">
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>          
            <div className='hero__divImg'>
                <img src={imgSlider1} alt="imagen"/>
                <div className="divInfoHero">                    
                    <h1>Su viaje de <span className='spanPurple'> salud emocional </span>empieza aqui</h1>
                    <h2>Conoce a nuestros profesionales con licencia</h2>
                    <h3>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</h3>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>          
            <div className='hero__divImg'>
                <img src={imgSlider2} alt="imagen"/>
                <div className="divInfoHero">                    
                    <h1>Su viaje de <span className='spanPurple'> salud emocional </span>empieza aqui</h1>
                    <h2>Conoce nuestro profesionales con licencia</h2>
                    <h3>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</h3>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>          
            <div className='hero__divImg'>
                <img src={imgSlider3} alt="imagen"/>
                <div className="divInfoHero">                    
                    <h1>Su viaje de <span className='spanPurple'> salud emocional </span>empieza aqui</h1>
                    <h2>Conoce nuestro profesionales con licencia</h2>
                    <h3>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</h3>
                </div>
            </div>
        </SwiperSlide>


      </Swiper>
    </div>
  )
}

export default HeroHome



