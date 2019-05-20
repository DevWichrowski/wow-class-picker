import React from 'react';
import './App.scss';
import BasicMode from "./components/BasicMode/BasicMode";
import {BrowserRouter} from "react-router-dom";
import AdvancedMode from "./components/AdvancedMode/AdvancedMode";
import {Route} from "react-router";
import MainMenu from "./components/MainMenu/MainMenu";
import InfoFooter from "./components/InfoFooter/InfoFooter";
import AboutMe from "./components/AboutMe/AboutMe";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MainMenu/>
                <Route exact path="/" component={BasicMode}/>
                <Route path="/advanced-mode" component={AdvancedMode}/>
                <Route path="/about" component={AboutMe}/>
                <Route path="/privacy-policy" component={PrivacyPolicy}/>
                <InfoFooter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
