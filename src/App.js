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
import ReactGA from 'react-ga';
import NickGenerator from "./components/NickGenerator/NickGenerator";

function App() {
    ReactGA.initialize('UA-140528693-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div className="App">
            <BrowserRouter>
                <MainMenu/>
                <Route exact path="/" component={BasicMode}/>
                <Route path="/advanced-mode" component={AdvancedMode}/>
                <Route path="/about" component={AboutMe}/>
                <Route path="/privacy-policy" component={PrivacyPolicy}/>
                <Route path="nick-generator" component={NickGenerator}/>
                <InfoFooter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
