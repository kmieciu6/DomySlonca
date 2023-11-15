import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import { LanguageProvider } from "./components/translations/LanguageContext";
import './scss/main.scss';
import Home from './components/Home';
import Yurts from './components/Yurts';
import Attractions from "./components/Attractions";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFoundPage from "./components/NotFoundPage";

function App() {

    return (
        <LanguageProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route exact path='/yurts' element={<Yurts />}/>
                    <Route exact path='/attractions' element={<Attractions />}/>
                    <Route exact path='/prices' element={<Prices />}/>
                    <Route exact path='/contact' element={<Contact />}/>
                    <Route exact path='/privacy_policy' element={<PrivacyPolicy />}/>
                    <Route path='/*' element={<NotFoundPage />}/>
                </Routes>
            </BrowserRouter>
        </LanguageProvider>
    );
}

export default App;