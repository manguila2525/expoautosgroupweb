import React, { useState, useEffect } from 'react'
import Axios from 'axios';

export default function Autos() {
  const [autos, setAutos] = useState([]);

  const getData = async () => {

    const res = await fetch('/api/autos');
    const data = await res.json()
    setAutos(...[data])
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
  const [file, setFile] = useState();
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState(null);
  const [age, setAge] = useState();
  const [transmision, setTransmision] = useState();
  const [cambio, setCambio] = useState();
  const [km, setKm] = useState();
  const [extra, setExtra] = useState();
  const [unico, setUnico] = useState()
  const [fallas, setFallas] = useState();
  const [precio, setPrecio] = useState();
  const [placa, setPlaca] = useState();
  //AÑADIR CARRO EN MODAL
  const addCar = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', file)
    data.append('marca', marca)
    data.append('modelo', modelo)
    data.append('age', age)
    data.append('transmision', transmision)
    data.append('cambio', cambio)
    data.append('km', km)
    data.append('extra', extra)
    data.append('unico', unico)
    data.append('fallas', fallas)
    data.append('precio', precio)
    data.append('placa', placa)
    // setCar({
    //   ...car,
    //   [e.target.name]: data
    // })
    const res = await Axios.post('/api/autos', data)
    console.log(car)

    // // const info = await res.json()
    // // console.log(car)
    // if (car._id) {
    //   const res = await fetch(`/api/autos/${car._id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify(car),
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   const data = await res.json()
    //   // console.log(data)
    //   getData()
    // } else {
    // const res = await fetch('/api/autos', {
    //   method: 'POST',
    //   body: JSON.stringify(car),
    //   // headers: {
    //   //   'Accept': 'application/json',
    //   //   'Content-Type': 'application/json'
    //   // }
    // })
    //   const res = await Axios.post('/api/autos')
    //   console.log(res)
    // }
    getData()
    e.target.reset()
  }

  //OPEN MODAL ADD CAR
  const modalAddCart = () => {
    setCar({
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
    })
  }

  //ELIMINAR CARRO
  const deleteCar = async (id) => {
    console.log(id)
    const res = await fetch(`/api/autos/${id}`, {
      method: 'DELETE'
    })
    getData()
  }

  //EDITAR CARRO
  const editCar = async (id) => {
    const res = await fetch(`/api/autos/${id}`)
    const data = await res.json()
    console.log(data)
    setCar({
      marca: data.marca,
      modelo: data.modelo,
      age: data.age,
      km: data.km,
      transmision: data.transmision,
      cambio: data.cambio,
      extra: data.extra,
      unico: data.unico,
      fallas: data.fallas,
      precio: data.precio,
      _id: data._id
    })

  }

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      setFile(file)
    } else {
      setCar({
        ...car,
        [name]: value
      })
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Autos</h1>
        <button type="button" onClick={modalAddCart} class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Añadir</button>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Placa</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Año</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {

              autos.map((car, index) =>
                car.send === false ? <tr key={car._id}>
                  <td>{car.placa}</td>
                  <td>{car.marca}</td>
                  <td>{car.modelo}</td>
                  <td>{car.age}</td>
                  <td>{car.precio}$</td>
                  <td>
                    {/* <button type="button" className="btn btn-sm mx-1 btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={() => editCar(car._id)}>Editar</button> */}
                    <button type="button" className="btn btn-sm btn-danger" onClick={() => deleteCar(car._id)}>Eliminar</button></td>
                </tr>
                  : null
              )

            }
          </tbody>
        </table>
      </div>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Añadir nuevo auto</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form onSubmit={addCar} encType="multipart/form-data">
                <div class="mb-3">
                  <label for="marca" class="col-form-label">Marca:</label>
                  <input type="text" onChange={e => {
                    setMarca(e.target.value)
                  }} class="form-control" id="marca" name="marca" value={marca} />
                </div>
                <div class="mb-3">
                  <label for="modelo" class="col-form-label">Modelo:</label>
                  <input type="text" onChange={e => {
                    setModelo(e.target.value)
                  }} class="form-control" id="modelo" name="modelo" value={modelo} />
                </div>
                <div class="mb-3">
                  <label for="placa" class="col-form-label">Placa:</label>
                  <input type="text" onChange={e => {
                    setPlaca(e.target.value)
                  }} class="form-control" id="placa" name="placa" value={placa} />
                </div>
                <div class="mb-3">
                  <label for="age" class="col-form-label">Año:</label>
                  <input type="text" onChange={e => {
                    setAge(e.target.value)
                  }} class="form-control" id="age" name="age" value={age} />
                </div>
                <div class="mb-3">
                  <label for="km" class="col-form-label">Km:</label>
                  <input type="text" onChange={e => {
                    setKm(e.target.value)
                  }} class="form-control" id="km" name="km" value={km} />
                </div>
                <div class="mb-3">
                  <label for="transmision" class="col-form-label">Transmisión:</label>
                  <input type="text" onChange={e => {
                    setTransmision(e.target.value)
                  }} class="form-control" id="transmision" name="transmision" value={transmision} />
                </div>
                <div class="mb-3">
                  <label for="cambio" class="col-form-label">Cambio:</label>
                  <input type="text" onChange={e => {
                    setCambio(e.target.value)
                  }} class="form-control" id="cambio" name="cambio" value={cambio} />
                </div>
                <div class="mb-3">
                  <label for="extra" class="col-form-label">Extra:</label>
                  <input type="text" onChange={e => {
                    setExtra(e.target.value)
                  }} class="form-control" id="extra" name="extra" value={extra} />
                </div>
                <div class="mb-3">
                  <label for="unico" class="col-form-label">Unico Dueño:</label>
                  <input type="text" onChange={e => {
                    setUnico(e.target.value)
                  }} class="form-control" id="unico" name="unico" value={unico} />
                </div>
                <div class="mb-3">
                  <label for="fallas" class="col-form-label">Fallas:</label>
                  <input type="text" onChange={e => {
                    setFallas(e.target.value)
                  }} class="form-control" id="fallas" name="fallas" value={fallas} />
                </div>
                <div class="mb-3">
                  <label for="precio" class="col-form-label">Precio:</label>
                  <input type="number" onChange={e => {
                    setPrecio(e.target.value)
                  }} class="form-control" id="precio" name="precio" value={precio} />
                </div>
                <div class="mb-3">
                  <label for="imagen" class="col-form-label">Imagen:</label>
                  <input type="file" name="file" onChange={handleChange} class="form-control" id="imagen" />
                  {/* <input type="file" name="file" onChange={async event => {
                    const data = new FormData();
                    data.append('file', file)
                    const info = event.target.files[0];
                    const res = await Axios.post('/api/autos/imagen', data)
                    setCar({
                      ...car,
                      // file
                    })
                    console.log(data)
                  }} class="form-control" id="imagen" /> */}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="submit" class="btn btn-success">Añadir auto</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
