import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { Provider } from 'react-redux'; 
import {store} from '../src/Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
     <App />
     <GlobalStyles />
    </React.StrictMode>,
  </Provider>

)
