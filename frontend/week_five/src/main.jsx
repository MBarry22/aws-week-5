import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './routers/Router';
import { AuthContext, AuthProvider } from './components/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(

      <AuthProvider>
            <App />
      </AuthProvider>


)
