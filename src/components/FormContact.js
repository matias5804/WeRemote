import React from 'react'
import imgContact from '../assets/img/photo5.png'

const FormContact = () => {

    const consulta =() =>{
        alert(`!Su consulta fue enviada con exito¡ \n ¡Muchas Gracias! ` )
    }
    
  return (

    <div className="divBig">
        <div className="divBigM__divImg">
            <img className='divBig__divImg__img' src={imgContact} alt='contact'/>
        </div>

        <div className="divBig__divForm">
            <div className="divBig__divForm__txt">
                <h2>CONTACTO</h2>
                <p>Por favor, complete el formulario y nos comunicaremos con usted a la brevedad. <br/> ¡Muchas Gracias!</p>
            </div>

            <form className="divBig__divForm__form">
                <input  placeholder="Nombre" />
                <input  type="email" placeholder="Email" />                                             
                <textarea id="message" type="text" placeholder="Escriba su Consulta" />
                <button className='buttonForm' id="submitButton" type="submit" onClick={consulta}>
                    Enviar
                </button>
            </form>
        </div>
    </div>  

    )
}
    

export default FormContact 