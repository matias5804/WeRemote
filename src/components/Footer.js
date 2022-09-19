import React from 'react'
import { Link} from 'react-router-dom';
import brandFooter from '../assets/icon/logoFooter.png'
import Modal from './Modal';
import { useModal } from '../components/hooks/useModal'

const Footer = () => {
    const[isOpenModalPago, openModalPago, closeModalPago] = useModal(false)

  return (
    <div className='footer'>
        <div className='footer__container'>
            <div className='footer__container__we'>  
                <div className='footer__container__we__div'>
                    <h3 className='footer__container__we__div__h3'>Nosotros</h3>

                    <Link to="/contacto" className="links">
                        <li className='footer__container__we__div__li'>Contacto</li>
                    </Link>
                </div>

                <div className='footer__container__we__div'>
                    <Link to="/faq" className="links">
                        <h3 className='footer__container__we__div__h3'>FAQ</h3>
                    </Link>    
                </div>
            </div> 

            <hr className='footer__container__hr'/>

            <div className='footer__container__brandTxt'>
                <img className='footer__container__brandTxt__img' src={brandFooter} alt='brand'/>
                <p className='footer__container__brandTxt__p'>
                    La Mente es Maravillosa is a property of Grupo MContigo© 2012 – 2020. All s reserved.<br/><br/>
                    Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.
                </p>
            </div>

            <hr className='footer__container__hr hrF'/>
            
            <ul className='footer__container__ulCopy'> 
                <li className='footer__container__ulCopy__liCo'>Política de Cookies</li>
                <li className='footer__container__ulCopy__liCo'>Política de Privacidad</li>
                <li className='footer__container__ulCopy__liCo'>Términos y Condiciones de Uso</li>
                <li className='footer__container__ulCopy__liCo'onClick={openModalPago} >Cláusula Informativa de Consentimiento</li>
            </ul>

            <div className='footer__container__derechos'>
                <p>Construido por Matias Alonso Pisani - Julio 2022</p>  
            </div>
        </div>
      
        <Modal isOpen={isOpenModalPago} closeModal={closeModalPago}>
            <div className="divModal">
                <div className="divModal__header">
                    <button onClick={closeModalPago}>
                      <span aria-hidden="true">X</span>                    
                    </button>
                    <h1>Clausula de Consentimiento</h1> 
                </div>

                <div className="divModal__body">                           
                    <p>
                        <strong>¿Quién es el responsable del tratamiento de sus datos?</strong>
                    </p>

                    <ul>
                        <li>Identidad: GRUPO M CONTIGO, S.L</li>
                        <li>CIF: B37527900</li>
                        <li>Dir. postal: C/ Consejo,12 37002 / Salamanca</li>
                        <li>Teléfono: 923267346</li>
                        <li>Correo elect: protecciondedatos@mcontigo.com</li>
                    </ul>

                    <p>
                        <strong>¿Con qué finalidad tratamos sus datos personales?</strong>
                    </p>

                    <p>En GRUPO M CONTIGO, S.L tratamos la información que nos facilitan las personas interesadas con el fin de cumplir con la prestación del servicio.</p>

                    <p>
                        <strong>¿Por cuánto tiempo conservaremos sus datos?</strong>
                    </p>

                    <p>Los datos personales proporcionados se conservarán mientras se preste el servicio o posteriormente para posibles responsabilidades legales y para el caso de comunicaciones comerciales hasta que retire el consentimiento.</p>

                    <p>
                        <strong>¿Cuál es la legitimación para el tratamiento de sus datos?</strong>
                    </p>

                    <p>
                        La base legal para el tratamiento de sus datos es el consentimiento del interesado
                    </p>
                    
                    <p>
                        <strong>¿A qué destinatarios se comunicarán sus datos?</strong>
                    </p>

                    <p>
                        Los datos no se ceden a terceros ajenos a la empresa.
                    </p>
                    
                    <p>
                        <strong>¿Cuáles son sus derechos cuando nos facilita sus datos?</strong>
                    </p>

                    <p>
                        Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales que les conciernan, o no.                    
                    </p>
                    
                    <p>
                        <strong>¿Cuáles son sus derechos cuando nos facilita sus datos?</strong>
                    </p>

                    <p>
                        Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales que les conciernan, o no.
                    </p>

                    <p>
                        <strong>¿Cuáles son sus derechos cuando nos facilita sus datos?</strong>
                    </p>

                    <p>
                        Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales que les conciernan, o no.
                    </p>
                </div>
            </div>
        </Modal>
        
    </div>
  )
}

export default Footer