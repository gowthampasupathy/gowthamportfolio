import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import About from './main/about';
import Main from './main/main';
import Home from './main/home';
import Skill from './main/skill';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>  
    </Routes>
  );
}

export default App;
