import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';
import HomePageComponent from './components/pages/HomePageComponent';
import GooglePageComponent from './components/pages/GooglePageComponent';
import AdobePageComponent from './components/pages/AdobePageComponent';
import IntelPageComponent from './components/pages/IntelPageComponent';
import NetflixPageComponent from './components/pages/NetflixPageComponent';
import NvidiaPageComponent from './components/pages/NvidiaPageComponent';
import waveHeader from './wave.svg';

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent/>
      <img src={waveHeader}/>

      <div className='BG'>
      <Routes>
        <Route path='/' element={<HomePageComponent/>}/>
        <Route path='/Google' element={<GooglePageComponent/>}/>
        <Route path='/Adobe' element={<AdobePageComponent/>}/>
        <Route path='/Intel' element={<IntelPageComponent/>}/>
        <Route path='/Netflix' element={<NetflixPageComponent/>}/>
        <Route path='/Nvidia' element={<NvidiaPageComponent/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
