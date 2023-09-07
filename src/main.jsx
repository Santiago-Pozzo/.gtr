import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { Provider } from 'react-redux'; 
import {persistor, store} from '../src/Redux/store';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <App />
        <GlobalStyles />
      </React.StrictMode>
    </PersistGate>
  </Provider>
)
