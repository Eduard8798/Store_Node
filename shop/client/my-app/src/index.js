import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';  // Убедитесь, что используете правильный импорт
import './index.css';
import App from './App.js';
import UserStore from "./store/UserStore.js";
import DeviseStore from "./store/DeviseStore.js";


export const Context = createContext(null);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value = {
        {
            user: new UserStore(),
            device: new DeviseStore()
        }
    }>
        <App />
    </Context.Provider>

);
