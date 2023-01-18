import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import './scss/main.scss';
import Home from './components/Home';
import Yurts from './components/Yurts';
import Attractions from "./components/Attractions";
import Prices from "./components/Prices";
import Reserve from "./components/Reserve";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFoundPage from "./components/NotFoundPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='yurts' element={<Yurts/>}/>
                    <Route path='attractions' element={<Attractions/>}/>
                    <Route path='prices' element={<Prices/>}/>
                    <Route path='reserve' element={<Reserve/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='privacy_policy' element={<PrivacyPolicy/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
