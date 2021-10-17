import React from 'react'
import ReactDOM from 'react-dom'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import App from './App'
import AppContextProvider from './context/AppContext'

ReactDOM.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>
    ,
    document.getElementById('root')
)
