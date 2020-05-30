import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//we will be rendering one root component and from it we will be nesting other root components
//we can also reach out to multiple nodes in HTML file and mount different root components in different react apps
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
