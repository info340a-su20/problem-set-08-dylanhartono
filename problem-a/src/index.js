import React from 'react';
import ReactDOM from 'react-dom';

//render the App component here!
import { App } from './App.js'

// add json file
import allSenators from "./senators.json";

ReactDOM.render(<App senators={allSenators}/>, document.getElementById('root'));