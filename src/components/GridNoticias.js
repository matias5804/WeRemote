import React from 'react'

const GridNoticias = ({title , img, subtitle}) => {
  return (
    <div className='newsSmall__div'>
        <div className='newsSmall__div__divImg'>
            <img src={img} alt="news" className="newsSmall__div__divImg__img"/>
        </div>
        <h3 className="newsSmall__div__sub">{title}</h3>
        <h1 className="newsSmall__div__titleNews">{subtitle}</h1>
    </div>
  )
}

export default GridNoticias