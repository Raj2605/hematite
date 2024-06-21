import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar></Navbar>
    <Home></Home>
    <Footer/>
  </React.StrictMode>
);
