import React from 'react'
import whiteSearchLogo from "../assets/icon/whiteSearcher.png"
import '../scss/styles.scss'

const Search = () => {
  return (
    <form className='formSearch'>
      <input placeholder='Buscar'/>
      <button type='submit'>
          <img src={whiteSearchLogo} alt='searcher' className='seacherLogoWhite'/>
      </button>
    </form>
  )
}

export default Search