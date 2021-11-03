import React, { Fragment, useState, useEffect } from 'react';
import Axios from 'axios';
const Promotorinfo = () => {

  const pathname = window.location.pathname;
  const idUrl = pathname.substr(20)
  const [promotor, setPromotor] = useState(idUrl);
  const [approved, setApproved] = useState(true);

  const getData = async (idUrl) => {
    const res = await fetch(`/api/promotores/${idUrl}`)
    const data = await res.json()
    setPromotor([data])
  }

  useEffect(() => {
    getData(idUrl)
  }, [])
  //APPROVED PROMOTOR
  const approvedPromo = async (e) => {
    e.preventDefault();
  }
  const editPromotor = async (id) => {
    const data = new FormData()
    data.append('approved', approved)
    const res = await Axios.put(`/api/promotores/${id}`, data)
    alert('Promotor aceptado')
  }

  const deletePromotor = async (id) => {

    const res = await fetch(`/api/promotores/${id}`, {
      method: 'DELETE'
    })
    alert('Promotor denegado')
  }

  return (
    <Fragment>
      <div className="mt-4">
        <h1>Informacion del Promotor <span >{promotor[0].nombre}</span></h1>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 my-2">
                <h3 className="text-danger">Nombre</h3>
                <h4>{promotor[0].nombre} {promotor[0].apellido}</h4>
              </div>
              <div className="col-md-6 my-2">
                <h3 className="text-danger">Cedula</h3>
                <h4> {promotor[0].cedula}</h4>
              </div>
              <div className="col-md-6 my-2">
                <h3 className="text-danger">Edad</h3>
                <h4> {promotor[0].edad} años</h4>
              </div>
              <div className="col-md-6 my-2">
                <h4 className="text-danger">Fecha de nacimiento</h4>
                <h4> {promotor[0].nacimiento}</h4>
              </div>
              <div className="col-md-6 my-2">
                <h3 className="text-danger">Pais</h3>
                <h4> {promotor[0].pais}</h4>
              </div>
              <div className="col-md-6 my-2">
                <h3 className="text-danger">Ciudad</h3>
                <h4>{promotor[0].ciudad}</h4>
              </div>
              <div className="col-md-6 my-2">
                <h3 className="text-danger">Dirección</h3>
                <h4>{promotor[0].direccion}</h4>
              </div>


            </div>
          </div>
          <div className="col-md-6">
            <img src={`../../img/${promotor[0].filename}`} alt="" className="cardPromotores__img" />
          </div>
          <div className="col-md-6 my-2">
            <h3 className="text-danger">Correo</h3>
            <h4>{promotor[0].correo}</h4>
          </div>
          <div className="col-md-3 my-2">
            <h3 className="text-danger">Facebook</h3>
            <h4>{promotor[0].facebook}</h4>
          </div>
          <div className="col-md-3 my-2">
            <h3 className="text-danger">Instagram</h3>
            <h4>{promotor[0].instagram}</h4>
          </div>
          <div className="col-md-6 my-2">
            <h3 className="text-danger">Telefonó</h3>
            <h4>{promotor[0].tlf}</h4>
          </div>
          {promotor[0].approved ? null : <Fragment>
            <div className="col-md-3 my-2">
              <form onSubmit={approvedPromo} className="btn btn-success">
                <input type="hidden" name="approved" />
                <button type="submit" onClick={() => editPromotor(promotor[0]._id)} className="btn btn-success col mx-1">Aceptar</button>
              </form>
            </div>
            <div className="col-md-3 my-2">
              <button onClick={() => deletePromotor(promotor[0]._id)} className="btn btn-lg btn-danger col mx-1">Denegar</button>

            </div>
          </Fragment>}
        </div>
      </div>
    </Fragment>
  );
}

export default Promotorinfo;
