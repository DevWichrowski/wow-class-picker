import React from 'react';
import {hydrate, render} from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Provider from 'react-redux/es/components/Provider';
import {rootReducer} from './store/reducers/rootReducer';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(
        <Provider store={store}>
            <App/>
        </Provider>, rootElement);
} else {
    render(<Provider store={store}>
            <App/>
        </Provider>
        , rootElement);
}

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// );

serviceWorker.unregister();
