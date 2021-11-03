import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function Solicitud() {
  const [promotores, setPromotores] = useState([]);
  const [approved, setApproved] = useState(true);
  const newPromotores = promotores.filter(promo => promo.approved === false)
  console.log(newPromotores.length)
  const getData = async () => {

    const res = await fetch('/api/promotores');
    const data = await res.json()
    console.log(data)
    setPromotores(...[data])
  }

  useEffect(() => {
    getData()
  }, []);

  //APPROVED PROMOTOR
  const approvedPromo = async (e) => {
    e.preventDefault();
    getData()
  }
  const editPromotor = async (id) => {
    const data = new FormData()
    data.append('approved', approved)
    const res = await Axios.put(`/api/promotores/${id}`, data)
  }

  //ELIMINAR PROMOTOR
  const deletePromotor = async (id) => {

    const res = await fetch(`/api/promotores/${id}`, {
      method: 'DELETE'
    })
    getData()
  }

  return (
    <div className="mt-3">
      <h1>Solicitud de nuevo promotor</h1>
      <div>
        <div className="row">
          {
            newPromotores.length == 0 ? <h1 className="text-danger">No hay solicitud de promotores</h1> : promotores.map((promo, index) => {
              if (promo.approved === false) {
                return (
                  <div className="col-md-3 col-sm-4 my-2 " key={index} >

                    <div className="card cardPromotores">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12 col-md-12 d-flex justify-content-between align-items-center">
                            <h4 className="card-title">{promo.nombre}</h4>
                            <h6 className="card-text text-muted">{promo.edad} Años</h6>
                          </div>
                          <div className="col-12 col-md-12">
                            <h6 className="card-text text-muted">{promo.direccion}</h6>
                          </div>
                          <div className="col-12 col-md-12">

                          </div>
                        </div>
                      </div>

                      <img src={`../../../img/${promo.filename}`} className="cardPromotores__img" alt="" />
                      <div className="card-body">
                        <div className="row">
                          <form onSubmit={approvedPromo} className="btn btn-sm btn-success col mx-1">
                            <input type="hidden" name="approved" />
                            <button type="submit" onClick={() => editPromotor(promo._id)} className="btn btn-sm btn-success col mx-1">Aceptar</button>
                          </form>
                          <Link to={`/dashboard/promotor/${promo._id}`} className="btn btn-sm btn-primary col mx-1">Info</Link>
                          <button onClick={() => deletePromotor(promo._id)} className="btn btn-sm btn-danger col mx-1">Denegar</button>
                        </div>
                      </div>
                    </div>

                  </div>
                )
              }
            })

          }
        </div>
      </div>
    </div>
  )
}
