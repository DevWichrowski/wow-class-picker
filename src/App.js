import React from 'react';
import './App.scss';
import BasicMode from "./components/BasicMode/BasicMode";
import {BrowserRouter} from "react-router-dom";
import AdvancedMode from "./components/AdvancedMode/AdvancedMode";
import {Route} from "react-router";

function App(props) {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={BasicMode}/>
                <Route path="/advanced-mode" component={AdvancedMode}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
