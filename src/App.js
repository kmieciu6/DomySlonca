import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import './scss/main.scss';
// import PreLoader from "./components/PreLoader";
import Home from './components/Home';
import Yurts from './components/Yurts';
import Attractions from "./components/Attractions";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/yurts' element={<Yurts/>}/>
                    <Route path='/attractions' element={<Attractions/>}/>
                    <Route path='/prices' element={<Prices/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/privacy_policy/' element={<PrivacyPolicy/>}/>
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
