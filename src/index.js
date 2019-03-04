import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
