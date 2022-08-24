import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';    
import reducers from './reducers'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './assets/display.css'
import './assets/fonts.css'


const store = createStore(reducers, compose(applyMiddleware(thunk)));
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
    <Provider store={store} >
        <BrowserRouter>      
            <App />
        </BrowserRouter>
    </Provider>
)
