import React from 'react'
import Accordion from './Accordion';

const AccordionContainer = () => {
    return (
    <>
        <h1 className='titleFaq'>FAQ</h1>

        <Accordion
        titlee="¿Cuáles son los pasos para tomar una decisión?"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
    
        <Accordion
        titlee="¿Cuáles son los pasos para tomar una decisión?"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
    
        <Accordion
        titlee="¿Cuáles son los pasos para tomar una decisión?"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
    </>
    );
}

export default AccordionContainer