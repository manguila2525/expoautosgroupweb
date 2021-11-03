import React from 'react';
import '../../assets/css/style.css';
import Logo from '../../assets/img/logo.jpeg';

const Login = () => {

  let submitForm = (e) => {
    e.preventDefault();
    if (e.target.username.value === "expoautosgroup" && e.target.password.value === "1234") {
      alert(`El usuario: ${e.target.username.value} esta ingresando al sistema`)
      window.open("/dashboard")
    } else {
      alert("Error en Usuario o Contraseña");
      e.target.reset()
    }
  }

  return (
    <div >
      <header class="header-home col-12   bg-white">
      </header>
      <div className="container separador ">
        <div className="row">
          <form onSubmit={submitForm} className="form-login border mt-2 col-12 p-5 bg-white">
            <h1 className="display-1">Expo<span class="text-danger">Autos</span>Group</h1>
            <h1 className="text-muted">Login</h1>
            <div class="mb-3">
              <label for="username" class="form-label">Nombre de usuario</label>
              <input type="text" class="form-control" id="username" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">Coloca tu nombre de usuario.</div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <button type="submit" class="btn btn-primary w-100">Iniciar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
