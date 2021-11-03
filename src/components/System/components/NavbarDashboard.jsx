import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NavbarDashboard() {

  return (

    <nav id="sidebarMenu" class="col-md-2 col-lg-2 d-md-grid bg-dark sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <Link class="nav-link text-white" to="/dashboard/autos">
              <i class="fas fa-car text-danger"></i> Ver autos
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" aria-current="page" to="/dashboard/promotores">
              <i class="fas fa-user-friends text-danger"></i> Promotores
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" aria-current="page" to="/dashboard/solicitud">
              <i class="fas fa-id-card text-danger"></i>  Ver solicitud
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link active text-white" aria-current="page" to="/dashboard/ventas">
              <i class="fas fa-money-bill-alt text-danger"></i> Ventas
            </Link>
          </li>

        </ul>


      </div>
    </nav>

  )
}
