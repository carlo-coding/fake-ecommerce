import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route } from "wouter";
import Home from './pages/Home';
import Login from "./pages/Login"
import LoginTest from "./components/Login"
import Layout from "./pages/Layout";
import CarritoCompra from "./components/CarritoCompra";
import Register from "./pages/Register";

function App() {
  return (
    <React.Fragment>
        <Layout>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/leo'>
            <LoginTest/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
          <Route path="/carrito">
            <CarritoCompra/>
          </Route>
        </Layout>
    </React.Fragment>
  );
}

export default App;
