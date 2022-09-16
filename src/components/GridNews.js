import React from 'react'
import imageNews1 from "../assets/img/imgNews1.png"
import imageNews2 from "../assets/img/newsReloj.jpg"
import imageNews3 from "../assets/img/mujerLeyendo.jpg"
import imageNews4 from "../assets/img/newsNinia.jpg"
import GridNoticias from './GridNoticias';

const GridNews = () => {
  return (
    <div className='newsSmall'>     
        <GridNoticias   
            title="Nutricion"
            subtitle="Colapso mental: cuando siento el peso del mundo sobre mí"
            img={imageNews1}
        />

        <GridNoticias   
            title="Curiosidades"
            subtitle="Por qué tenemos la sensación de que el tiempo pasa cada vez más rápido"
            img={imageNews2}
        />

        <GridNoticias   
            title="Actualidad y Psicología"
            subtitle="Por qué compartimos imformación falsa en las redes sociales"
            img={imageNews3}
        />

        <GridNoticias   
            title="Familia"
            subtitle="La madre intimidante: sobrevivir a la ausencia de ternura"
            img={imageNews4}
        />
    </div>
  );
}

export default GridNews
