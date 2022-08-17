import React from 'react'
import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';    
import reducers from './reducers'
import { Background } from './components/Background';
import App from './App';
import './index.css'

const store = createStore(reducers , compose(applyMiddleware(thunk)))
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <Provider store={store} >
    <Background className="background" />
    <App className='app-container'/>
    </Provider>
)
