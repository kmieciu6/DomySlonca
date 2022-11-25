import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import './scss/main.scss';
import Home from './components/Home';
import JurtaSun from './components/jurts/JurtaSun';
import JurtaWind from './components/jurts/JurtaWind';
import JurtaEtno from './components/jurts/JurtaEtno';
import JurtaFire from './components/jurts/JurtaFire';
import Surroundings from "./components/jurts/Surroundings";
import Attractions from "./components/Attractions";
import Prices from "./components/Prices";
import Contact from "./components/Contact";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/jurta_sun' element={<JurtaSun/>}/>
                <Route path='/jurta_wind' element={<JurtaWind/>}/>
                <Route path='/jurta_etno' element={<JurtaEtno/>}/>
                <Route path='/jurta_fire' element={<JurtaFire/>}/>
                <Route path='/surroundings' element={<Surroundings/>}/>
                <Route path='/attractions' element={<Attractions/>}/>
                <Route path='/prices' element={<Prices/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
