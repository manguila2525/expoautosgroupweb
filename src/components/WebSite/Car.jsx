import React, { Fragment, useEffect, useState } from 'react'
import carImg from '../../assets/img/carro-somos.png';

export default function Car({ name, age, price, details }) {
  const pathname = window.location.pathname;
  const idUrl = pathname.substr(10)
  const [car, setCar] = useState(idUrl);


  const getData = async (idUrl) => {
    const res = await fetch(`/api/autos/${idUrl}`)
    const data = await res.json()
    setCar([data])
    console.log(car[0])
  }

  useEffect(() => {
    getData(idUrl)
  }, [])

  return (
    <Fragment>
      <div className="container-fluid mt-5">
        <div className="row">
          <div class="col-md-9 col-12">

            <div class="card ">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-md-12">
                    <h1 class="card-title text-center">{car[0].marca}</h1>
                  </div>
                </div>
              </div>

              <img src={`../../img/${car[0].filename}`} alt="" />
              <div class="card-body">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-3 border">
                      <h1>img</h1>
                    </div>
                    <div className="col-3 border">
                      <h1>img</h1>
                    </div>
                    <div className="col-3 border">
                      <h1>img</h1>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-3 col-12">
            <div class="card ">
              <div class="card-body px-5">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-12">
                    <h2 class="card-title">Marca: {car[0].marca}</h2>
                  </div>
                  <div class="col-12 col-md-12">
                    <h2 class="card-text ">Modelo: {car[0].modelo}</h2>
                  </div>
                  <div class="col-12 col-md-12">
                    <h2 class="card-text ">Año: {car[0].age}</h2>
                  </div>
                  <div class="col-12 col-md-12">
                    <h2 class="card-text ">Transmisión: {car[0].transmision}</h2>
                  </div>
                  <div class="col-12 col-md-12">
                    <h2 class="card-text ">Acepta cambio: {car[0].cambio}</h2>
                  </div>
                  <div class="col-12 col-md-12">
                    <h2 class="card-text ">Extra: {car[0].extra}</h2>
                  </div>
                  <div class="col-12 col-md-12">
                    <h2 class="card-text ">Unico Dueño: {car[0].unico}</h2>
                  </div>
                  <div class="col-12 col-md-12">
                    <h2 class="card-text ">Km: {car[0].km}</h2>
                  </div>
                  <div class="col-12 col-md-12">
                    <h2 class="card-text ">Fallas: {car[0].fallas}</h2>
                  </div>
                  <div class="col-12 col-md-12">
                    <h2 class="card-text ">Precio: {car[0].precio}</h2>
                  </div>

                </div>
              </div>
              <div class="card-body">

                <a className="btn btn-success w-100 " href="#">Comprar</a>

                {/* <Link to="/car" class="btn btn-primary">Ver mas...</Link> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}
