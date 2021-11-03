import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function Promotores() {
  const [promotores, setPromotores] = useState([]);

  const getData = async () => {

    const res = await fetch('/api/promotores');
    const data = await res.json()
    setPromotores(...[data])
  }

  useEffect(() => {
    getData()
  }, []);

  const [car, setCar] = useState({
    marca: "",
    modelo: "",
    age: "",
    km: "",
    transmision: "",
    cambio: "",
    extra: "",
    unico: "",
    fallas: "",
    precio: "",
    _id: ""
  });



  //ELIMINAR CARRO
  const deletePromotor = async (id) => {
    console.log(id)
    const res = await fetch(`/api/promotores/${id}`, {
      method: 'DELETE'
    })
    getData()
  }


  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Promotores</h1>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Promotor</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Telefono</th>
              <th scope="col">Dirección</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {

              promotores.map((promotor, index) => {
                if (promotor.approved) {
                  return (
                    <tr key={promotor._id}>
                      <td>P-{promotor._id.substr(20)}</td>
                      <td>{`${promotor.nombre} ${promotor.apellido}`}</td>
                      <td>
                        <a href="#">{promotor.correo}</a>
                      </td>
                      <td>{promotor.tlf}</td>
                      <td>{promotor.direccion}</td>
                      <td>
                        <Link to={`/dashboard/promotor/${promotor._id}`} className="btn btn-sm btn-primary col mx-1">Info</Link>

                        <button type="button" className="btn btn-sm btn-danger" onClick={() => deletePromotor(promotor._id)}>Eliminar</button></td>
                    </tr>)
                }
              }
              )

            }
          </tbody>
        </table>
      </div>



    </div>
  )
}
