import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./state/store";

// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>

);


