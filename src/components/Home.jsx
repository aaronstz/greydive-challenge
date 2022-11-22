import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

    

  return (
    <div>
      <button><Link to ='/viamo' >Viamo</Link></button>
      <button><Link to ='/nebula' >Nebula</Link></button>

    </div>
  )
}

export default Home