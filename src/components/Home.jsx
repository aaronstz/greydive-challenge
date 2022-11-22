import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Home.css'

const Home = () => {

    

  return (
    <div className="app__home-container">
      <h1 className="app__home-title">Bienvenidos</h1>
      <button className="app__home-button"><a href ='/viamo' >Viamo</a></button>
      <button className="app__home-button"><a href ='/nebula' className="btn-primary">Nebula</a></button>

    </div>
  )
}

export default Home