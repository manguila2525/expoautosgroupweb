import React from 'react';
import { Link } from 'react-router-dom';
const Headerdashboard = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
          <Link class="navbar-brand text-uppercase" to="/home">Expo<span class="text-danger">Autos</span>Group</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

    </div>
  );
}

export default Headerdashboard;
