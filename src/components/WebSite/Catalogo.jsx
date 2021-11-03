import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Carros from '../../assets/img/carro-somos.png';



export default function Catalogo() {


  const [cars, setCars] = useState([]);
  const getData = async () => {
    const res = await fetch('/api/autos');
    const data = await res.json()
    setCars(...[data])
  }

  useEffect(() => {
    getData()

  }, []);
  return (
    <Fragment>

      <div class="container mt-5">
        <div class="jumbotron">
          <h1 class="display-3">Catalogo</h1>
        </div>

        <div class="row">
          <div className="col-md-8 d-none-xs"></div>
          <div className="col-md-4 col-12 my-2">
            <label for="search" class="form-label">Encuentra el auto que buscas aqui</label>
            <input className="form-control" type="search" name="search" id="search" placeholder="Busca tu auto" />
          </div>
          {cars.map(car => car.send === false ?


            <div class="col-md-4 my-2" key={car._id}>

              <div class="card ">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 col-md-4">
                      <h4 class="card-title">{car.marca}</h4>
                    </div>
                    <div class="col-12 col-md-4">
                      <h6 class="card-text text-muted">{car.modelo}</h6>
                    </div>
                    <div class="col-12 col-md-4">
                      <h6 class="card-text text-muted">Precio: <span>${car.precio}</span></h6>
                    </div>
                  </div>
                </div>

                <img className="cardCatalogo__img" src={`../../img/${car.filename}`} alt="" />
                <div class="card-body">

                  <Link to={`/home/car/${car._id}`} class="btn btn-primary">Ver mas...</Link>
                </div>
              </div>

            </div> : null

          )}
        </div>
      </div>
    </Fragment>
  )
}
