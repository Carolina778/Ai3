import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Paginas/Login';
import Produtos from './Paginas/Produtos';
import AdicionarProduto from './Paginas/AdicionarProduto';
import Utilizadores from './Paginas/Utilizadores';
import AdicionarUtilizador from './Paginas/AdicionarUtilizador'
import Encomendas from './Paginas/Encomendas';


 const axios = require('axios');
axios.defaults.baseURL = "http://localhost:4000"
axios.defaults.headers.common['Authorization'] = window.sessionStorage.getItem("authToken");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
          <Route exact path="/" exact component={Login}/>
          <Route exact path="/produtos" exact component={Produtos}/>
          <Route path="/add-produto" exact component={AdicionarProduto}/>
          
          <Route path="/utilizadores" exact component={Utilizadores}/>

          <Route path="/encomendas" exact component={Encomendas}/>
          
          
          <Route path="/add-utilizador" exact component={AdicionarUtilizador}/>
          {/*
          <Route path="/add-encomenda" exact component={AdicionarEncomenda}/> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
