import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import '../../assets/css/style.css';
import HeaderDashboard from './components/HeaderDashboard';
import NavbarDashboard from './components/NavbarDashboard';
import Solicitud from './components/Solicitud';
import Autos from './components/Autos';
import Promotores from './components/Promotores';
import Promotor from './components/PromotorInfo';
import Ventas from './components/Ventas';

export default function SystemExpoAutosGroup() {



  return (
    <Fragment>


      <HeaderDashboard></HeaderDashboard>
      <div class="container-fluid">
        <div class="row">
          <NavbarDashboard></NavbarDashboard>
          <main class="col-md-10 ms-sm-auto col-lg-10 px-md-4">
            <div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>

            {/* TABLA DE PROMOTORES */}
            <Route path="/dashboard/promotores">
              <Promotores></Promotores>
            </Route>

            {/* PROMOTOR INFO */}
            <Route path="/dashboard/promotor">
              <Promotor></Promotor>
            </Route>

            {/* SOLICITUD DE PROMOTOR */}
            <Route path="/dashboard/solicitud">
              <Solicitud></Solicitud>
            </Route>

            {/* TABLA DE AUTOS */}
            <Route path="/dashboard/autos">
              <Autos></Autos>
            </Route>

            {/* TABLA DE AUTOS */}
            <Route path="/dashboard/ventas">
              <Ventas></Ventas>
            </Route>


          </main>
        </div>
      </div>
    </Fragment>
  )
}
