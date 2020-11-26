import './css/App.css';
import Myroute from './router';
import routeRules from './router/firstRules'
import axios from "axios";
import React from 'react'

React.Component.prototype.axios = axios;

function App() {
    return (
        <div className="App">
            <Myroute rules={routeRules}></Myroute>
        </div>
    );
}


export default App;
