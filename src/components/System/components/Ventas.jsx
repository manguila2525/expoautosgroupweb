import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Ventas = () => {



  const [autos, setAutos] = useState([]);
  const [promotores, setPromotores] = useState([]);
  const [info, setInfo] = useState([]);
  const [viewPromotor, setViewPromotor] = useState();
  const [history, setHistory] = useState();
  const [send, setSend] = useState();

  const getDataAutos = async () => {

    const res = await fetch('/api/autos');
    const data = await res.json()
    setAutos(...[data])
  }


  const getDataPromotores = async () => {

    const res = await fetch('/api/promotores');
    const data = await res.json()
    setPromotores(...[data])
  }

  const getDataInfo = async () => {

    const res = await fetch('/api/history');
    const data = await res.json()
    setInfo(...[data])
  }

  useEffect(() => {

    getDataAutos()
    getDataPromotores()
    getDataInfo()
  }, []);

  const sendHistory = async (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append("send", true)
    const res1 = await axios.put(`/api/autos/${send}`, data)
    const res = await axios.post('/api/history', history)
    console.log(res)
    getDataInfo()
    getDataAutos()
  }
  const deleteCar = async (id) => {
    console.log(id)
    const res = await fetch(`/api/autos/${id}`, {
      method: 'DELETE'
    })
  }
  // const countAuto = autos.map(auto => {
  //   if (auto) {
  //     return auto._id
  //   }
  //   return console.log("good")
  // })
  // const countInfo = info.map(i => i.auto._id)
  // const newArray = [...countAuto, ...countInfo]

  // const numeros = [1, 2, 2, 3, 4, 4, 5];
  // let duplicados = [];

  // const tempArray = [...newArray].sort();

  // for (let i = 0; i < tempArray.length; i++) {
  //   if (tempArray[i + 1] === tempArray[i]) {
  //     duplicados.push(tempArray[i]);
  //     deleteCar(tempArray[i])
  //   }
  // }

  // console.log(duplicados);


  const switchPromotor = (e) => {
    if (e.target.value == "true") {

      console.log(viewPromotor)
      e.target.value = "false"
      setViewPromotor("false")
    } else {
      console.log(viewPromotor)
      e.target.value = "true"
      setViewPromotor("true")
    }
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setHistory({
      ...history,
      [name]: value
    })
    setSend(value)
    console.log(history)
    console.log(send)
  }

  return (
    <div className="mt-5">
      <div className="d-flex align-items-center">
        <h3 className="text-muted">Venta con promotor</h3>
        <div class="form-check form-switch mx-2">
          <input className="form-check-input" type="checkbox" onClick={switchPromotor} name="viewPromotor" id="viewPromotor" />
        </div>
      </div>
      <form onSubmit={sendHistory}>
        <div className="row ">
          {viewPromotor == "true" ? <div className="col-md-4">
            <h3><label htmlFor="promotor">Selecciona el Promotor</label></h3>
            <input type="hidden" name="send" value={true} />
            <select className="form-select" id="promotor" name="promotor" onClick={handleInput}>
              {
                promotores.map(promo => promo.approved ? <option value={promo._id} >P-{promo._id.substr(20)}</option> : null
                )
              }
            </select>
          </div> : null}
          <div className="col-md-4">
            <h3><label htmlFor="auto">Selecciona el Auto</label></h3>

            <select className="form-select" name="auto" id="auto" onClick={handleInput}>
              {
                autos.map(auto => {
                  if (auto.send !== true) {
                    return (
                      <option value={auto._id}>{auto.modelo}</option>
                    )
                  } else { return null }
                })
              }
            </select>
          </div>
          <div className="col-md-4">
            <h3 className="text-muted">Realizar venta</h3>
            <button type="submit" className="btn btn-success">Vender</button>
          </div>
        </div>
      </form>
      <h3 className="my-3">Historial de ventas</h3>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Id Promotor</th>
              <th scope="col">Nombre</th>
              <th scope="col">Auto</th>
              <th scope="col">Placa</th>
              <th scope="col">Fecha de venta</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {

              info.auto === null ? null : info.map((i, index) => {
                const { auto, promotor, createdAt } = i
                const string1 = new String(createdAt).substr(0, 10)

                if (promotor) {
                  return (

                    <tr key={i._id} >
                      <td>P-{promotor._id.substr(20)}</td>
                      <td>{`${promotor.nombre} ${promotor.apellido}`}</td>
                      <td>{`${auto.marca} ${auto.modelo} ${auto.age}`}</td>
                      <td><b>{auto.placa}</b></td>
                      <td>{string1}</td>
                      <td>
                        <button type="button" className="btn btn-sm btn-warning">Ver factura</button></td>
                    </tr>)
                } else {
                  return (

                    <tr key={i._id} >
                      <td className="text-success"><b>Sin Promotor</b></td>
                      <td className="text-success"><b>Expoautosgroup</b></td>
                      <td>{`${auto.marca} ${auto.modelo} ${auto.age}`}</td>
                      <td><b>{auto.placa}</b></td>
                      <td>{string1}</td>
                      <td>
                        <button type="button" className="btn btn-sm btn-warning">Ver factura</button></td>
                    </tr>)
                }
              }
              )

            }
          </tbody>
        </table>
      </div>

    </div >
  );
}

export default Ventas;
