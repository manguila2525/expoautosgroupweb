import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './Home';
import Catalogo from './Catalogo';
import CarPage from './Car';
import Promotores from './Promotores';
export default function Navbar() {



  return (
    <Fragment>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div class="container">
            <Link class="navbar-brand text-uppercase" to="/home">Expo<span class="text-danger">Autos</span>Group</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#my-nav" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="my-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav text-center mr-auto">
                {/* <li class="nav-item active">
                  <a class="nav-link" href="#">Quienes somos</a>
                </li> */}
                <li class="nav-item active">
                  <Link class="nav-link " to="/home/catalogo">Catalogo</Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link text-success" to="/home/nuevo-promotor">Nuevo Promotor</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav> */}
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/home/catalogo">
          <Catalogo />
        </Route>
        <Route path="/home/car" >
          <CarPage></CarPage>
        </Route>
        <Route path="/home/nuevo-promotor" >
          <Promotores></Promotores>
        </Route>
      </BrowserRouter>
    </Fragment>
  )
}
