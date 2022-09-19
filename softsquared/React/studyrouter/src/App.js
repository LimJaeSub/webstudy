import React from 'react';
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom';

import './App.css';

import Header from './components/Header.jsx';
import Course from './components/Course.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound';
import Roadmap from './components/Roadmap.jsx';
import Linkpage from './components/Linkpage.jsx';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />}></Route>
        <Route path="/Roadmap" element={<Roadmap />}/>
        <Route path="/Linkpage" element={<Linkpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
