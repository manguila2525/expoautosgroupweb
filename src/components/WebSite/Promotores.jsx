import React, { Fragment, useState } from 'react'
import emailjs from 'emailjs-com';
import axios from 'axios';

export default function Promotores() {

  const [file, setFile] = useState();
  const [correo, setCorreo] = useState();
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState()
  const [cedula, setCedula] = useState()
  const [nacimiento, setNacimiento] = useState();
  const [edad, setEdad] = useState();
  const [instagram, setInstagram] = useState();
  const [facebook, setFacebook] = useState();
  const [pais, setPais] = useState();
  const [ciudad, setCiudad] = useState();
  const [direccion, setDireccion] = useState();
  const [tlf, setTlf] = useState();
  let Enviar = async (e) => {
    e.preventDefault();

    // ENVIAR MENSAJE AL CORREO ELECTRONICO
    // emailjs.sendForm('gmailMessage', 'template_2kpw7tb', e.target, 'user_hhtwIZvPfG23hg2LF8JwX')
    //   .then((result) => {
    //     alert("Mensaje enviado correctamente!!!");
    //   }, (error) => {
    //     alert(error)
    //   });

    const data = new FormData()
    data.append('file', file)
    data.append('correo', correo)
    data.append('nombre', nombre)
    data.append('apellido', apellido)
    data.append('cedula', cedula)
    data.append('nacimiento', nacimiento)
    data.append('edad', edad)
    data.append('instagram', instagram)
    data.append('facebook', facebook)
    data.append('pais', pais)
    data.append('ciudad', ciudad)
    data.append('direccion', direccion)
    data.append('tlf', tlf)
    await axios.post('/api/promotores', data)

    alert("Solicitud de promotor enviada")

    e.target.reset();

  }


  return (
    <Fragment>

      <div class="container mt-5">
        <div class="jumbotron">
          <h1 class="display-3">Nuevo Promotor <span className="text-success">+</span></h1>
        </div>
        <form onSubmit={Enviar} encType="multipart/form-data">
          <fieldset >
            <legend>Registrate y se parte de nuestro equipo en <span class=" text-uppercase" to="/">Expo<span class="text-danger">Autos</span>Group</span></legend>
            <div class="mb-3">
              <label for="email" class="form-label">Correo</label>
              <input required type="text" id="email" name="email" onChange={e => { setCorreo(e.target.value) }} class="form-control" placeholder="Dirección de correo electrónico" />
            </div>
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input required type="text" id="nombre" name="nombre" onChange={e => { setNombre(e.target.value) }} class="form-control" placeholder="Ingresa tus datos" />
            </div>
            <div class="mb-3">
              <label for="apellido" class="form-label">Apellido</label>
              <input required type="text" id="apellido" name="apellido" onChange={e => { setApellido(e.target.value) }} class="form-control" placeholder="Ingresa tus datos" />
            </div>
            <div class="mb-3">
              <label for="cedula" class="form-label">Cedula</label>
              <input required type="text" id="cedula" name="cedula" onChange={e => { setCedula(e.target.value) }} class="form-control" placeholder="Ingresa tus datos" />
            </div>
            <div class="mb-3">
              <label for="file" class="form-label">Foto de Documento de identidad</label>
              <input required type="file" id="file" onChange={(e) => { setFile(e.target.files[0]) }} name="file" class="form-control" placeholder="Ingresa tus datos" />
            </div>
            <div class="mb-3">
              <label for="fecha" class="form-label">Fecha de Nacimiento</label>
              <input required type="date" id="fecha" name="nacimiento" onChange={e => { setNacimiento(e.target.value) }} class="form-control" placeholder="Ingresa tus datos" />
            </div>
            <div class="mb-3">
              <label for="edad" class="form-label">Edad</label>
              <input required type="text" id="edad" name="edad" onChange={e => { setEdad(e.target.value) }} class="form-control" placeholder="Ingresa tus datos" />
            </div>
            <div class="mb-3">
              <label for="instagram" class="form-label">Instagram</label>
              <input required type="text" id="instagram" name="instagram" onChange={e => { setInstagram(e.target.value) }} class="form-control" placeholder="Ingresa tus datos" />
            </div>
            <div class="mb-3">
              <label for="facebook" class="form-label">Facebook</label>
              <input required type="text" id="facebook" name="facebook" onChange={e => { setFacebook(e.target.value) }} class="form-control" placeholder="Ingresa tus datos" />
            </div>
            <div class="mb-3">
              <label for="pais" class="form-label">País</label>
              <input required type="text" id="pais" name="pais" onChange={e => { setPais(e.target.value) }} class="form-control" placeholder="Ingresa tus datos" />
            </div>
            <div class="mb-3">
              <label for="ciudad" class="form-label">Ciudad</label>
              <input required type="text" id="ciudad" name="ciudad" onChange={e => { setCiudad(e.target.value) }} class="form-control" placeholder="Ingresa tus datos" />
            </div>
            <div class="mb-3">
              <label for="direccion" class="form-label">Dirección</label>
              <input required type="text" id="direccion" name="direccion" onChange={e => { setDireccion(e.target.value) }} class="form-control" placeholder="Ingresa tus datos" />
            </div>
            <div class="mb-3">
              <label for="telefono" class="form-label">Número de teléfono</label>
              <input required type="text" id="telefono" name="telefono" onChange={e => { setTlf(e.target.value) }} class="form-control" placeholder="Ingresa tus datos" />
            </div>

            <div class="mb-3">
              <button type="submit" class="btn btn-primary w-100 btn-lg">Enviar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </Fragment >
  )
}
