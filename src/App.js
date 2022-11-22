import logo from './logo.svg';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Db from './db.json'

import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import MainPage from './components/MainPage';


function App() {

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   try {
  //     fetch("db.json")
  //     .then((response) => response.json())
  //     .then((info) => setItems(info));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [])


  return (
    <Router>
      <Routes>
        {
          Db?.map((item) => (
            
            <Route
            key={item.id}
            path={`${item.cliente}`}
            element={<MainPage info={item}/>}
            
            />
            
          ))
        }
        <Route path ="/" element = {<Home />} />
        <Route path ="*" element = {<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
