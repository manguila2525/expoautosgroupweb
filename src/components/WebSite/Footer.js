import React, { Fragment } from 'react'

export default function Footer() {
  return (
    <Fragment>
      <footer class="bottom bg-dark text-light ">
        <div class="container">

          <div class="jumbotron jumbotron-fluid p-3 bg-dark">
            <div class="row">
              <div class="col-md-6">
                <h1 class="display-5">Expo Auto <span class="text-danger">Group</span></h1>
              </div>
              <div class="col-md-6">
                <h1 class="display-5">
                  <a href="#" class="text-decoration-none text-light"><i class="fa fa-instagram text-danger" aria-hidden="true"></i>expoautos<span class="text-danger">_</span>group</a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </Fragment>
  )
}
