import React from 'react'
import imgNewsBig from "../assets/img/newsSmall4.png"
import imgNewsSmall2 from "../assets/img/newsSmall2.png"
import imgNewsSmall3 from "../assets/img/newsSmall3.png"
import imgNewsSmall4 from "../assets/img/newsSmall1.png"

const GridNewsBig = () => {
  return (
    <div className='gridBig'>
        <div className='gridBig__newsBig div1' >
            <div className='gridBig__newsBig__divImg'>
                <img src={imgNewsBig} alt="news"/>
            </div>
            <div className='gridBig__newsBig__divTxt'>
                <h1 className="gridBig__newsBig">El contraste mental, un camino para evitar el optimismo ingenuo</h1>
                <p className="gridBig__newsBig__divContent">El contraste mental es un ejercicio y una perspectiva que ayuda a ver las cosas desde u...</p>
            </div>
        </div> 

        <div className='gridBig__news div2' >
            <div className='gridBig__news__divImg'>
                <img src={imgNewsSmall2} alt="news"/>
            </div>
            <div className='gridBig__news__divTxt'>
                <h1>7 rasgos de un padre narcisista</h1>
                <p>El rasgo central de un padre narcisista es la negación de...</p>
            </div>
        </div>   

        <div className='gridBig__news div3' >
            <div className='gridBig__news__divImg'>
                <img src={imgNewsSmall3} alt="news"/>
            </div>
            <div className='gridBig__news__divTxt'>
                <h1>¿Por qué se prefiere la medicación a la terapia psic...</h1>
                <p>Es innegable la necesidad de abordar las demandas de salu...</p>
            </div>
        </div>   

        <div className='gridBig__news div4' >
            <div className='gridBig__news__divImg'>
                <img src={imgNewsSmall4} alt="news"/>
            </div>
            <div className='gridBig__news__divTxt'>
                <h1>Cuando nos convertimos en padres de nuestros padres</h1>
                <p>La idea compartida es que la vejez llega poco a poco, con...</p>
            </div>
        </div>     
    </div>
  )
}

export default GridNewsBig