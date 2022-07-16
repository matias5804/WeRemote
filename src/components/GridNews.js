import React from 'react'
import imageNews from "../assets/img/imgNews1.png"

const GridNews = () => {
  return (
    <div className='newsSmall'>     
        <div className='newsSmall__div'>
            <div className='newsSmall__div__divImg'>
                <img src={imageNews} alt="news" className="newsSmall__div__divImg__img"/>
            </div>
            <h3 className="newsSmall__div__sub">Nutrición</h3>
            <h1 className="newsSmall__div__titleNews">Colapso mental: cuando siento el peso del mundo sobre mí</h1>
        </div>

        <div className='newsSmall__div'>
            <div className='newsSmall__div__divImg'>
                <img src={imageNews} alt="news" className="newsSmall__div__divImg__img"/>
            </div>
            <h3 className="newsSmall__div__sub">Nutrición</h3>
            <h1 className="newsSmall__div__titleNews">Colapso mental: cuando siento el peso del mundo sobre mí</h1>
        </div>

        <div className='newsSmall__div'>
            <div className='newsSmall__div__divImg'>
                <img src={imageNews} alt="news" className="newsSmall__div__divImg__img"/>
            </div>
            <h3 className="newsSmall__div__sub">Nutrición</h3>
            <h1 className="newsSmall__div__titleNews">Colapso mental: cuando siento el peso del mundo sobre mí</h1>
        </div>

        <div className='newsSmall__div'>
            <div className='newsSmall__div__divImg'>
                <img src={imageNews} alt="news" className="newsSmall__div__divImg__img"/>
            </div>
            <h3 className="newsSmall__div__sub">Nutrición</h3>
            <h1 className="newsSmall__div__titleNews">Colapso mental: cuando siento el peso del mundo sobre mí</h1>
        </div>        
    </div>
  );
}

export default GridNews
