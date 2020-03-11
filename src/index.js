import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';

// Toast setup
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';

toast.configure({ pauseOnFocusLoss: true });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
