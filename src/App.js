import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';
import { useState } from 'react';

function App() {
  const [prrojects, setPrrojects] = useState([]);
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home setProjects={setPrrojects}></Home>}></Route>
        <Route path='/project-detail/:id' element={<ProjectDetail projects={prrojects}></ProjectDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
