import React from 'react'
import './styles/NotFound.css'

const NotFound = () => {
  return (
      <div className="app__container-notfound">
        <h1 className="app__title-notfound">Oops! Nothing here.</h1>
        <a href ='/' className="app__button-notfound">Return</a>
      </div>
  )
}

export default NotFound