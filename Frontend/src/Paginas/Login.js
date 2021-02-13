import React from "react";
import {Form, Button} from "react-bootstrap";



function Login() {
    return (
        <div className="container-fluid bg-primary ">
        <div className="row justify-content-center order-sm-center order-md-center order-lg-center order-xl-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <div className="flex-grow-1 bg-login-image"  />
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="p-5">
                      <div className="text-center">
                        <h2 className="text-dark mb-4">Gestor de Encomendas</h2>
                      </div>
                      <form className="user">
                        <div className="form-group"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Username" name="username" style={{marginTop: 50}} /></div>
                        <div className="form-group"><input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" style={{marginTop: 10, marginBottom: 30}} /></div><button className="btn btn-primary btn-block text-white btn-user" type="submit">Login</button></form>
                      <div className="text-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}

export default Login;