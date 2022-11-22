
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Db from './db.json'

import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import MainPage from './components/MainPage';


function App() {
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
