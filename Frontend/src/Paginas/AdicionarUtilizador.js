import React from "react";
import { Form } from "react-bootstrap";
import Menu from './Menu';
import moment from 'moment';
import Swal from 'sweetalert2';

const axios = require('axios');

class AdicionarUtilizador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            funcionario: '',
            email: '',
            username: '',
            password: '',
            datanasc: moment().format("yyyy-MM-dd"),
            cargo: '',
        };
        this.AddUtilizador = this.AddUtilizador.bind(this);
    }
    render() {
        return (
            <div className="">
                <Menu />
                <div className="section">
                    <div className="container-fluid" >
                        <div className="col-lg-12 col-xl-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex">
                                    <div className="mr-auto p-2"><h3 className="font-weight-bold text-primary"> Adicionar Utilizador </h3></div>
                                </div>
                                <div className="container py-5">
                                    <div className="row">
                                        <div className="col-md-10 mx-auto">
                                            <Form>
                                                <div className="form-group row">
                                                    <div className="col-sm-6">
                                                        <label htmlFor="inputNome">Nome</label>
                                                        <input type="text" className="form-control" id="inputNome" placeholder="Nome completo" value={this.state.funcionario}
                                                            onChange={(value) =>
                                                                this.setState({ funcionario: value.target.value })
                                                            } />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label htmlFor="inputEmail">Email</label>
                                                        <input type="text" className="form-control" id="inputEmail" placeholder="example@email.com" value={this.state.email}
                                                            onChange={(value) =>
                                                                this.setState({ email: value.target.value })
                                                            } />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-sm-6">
                                                        <label htmlFor="inputUsername">Username</label>
                                                        <input type="text" className="form-control" id="inputUsername" placeholder="Username" value={this.state.username}
                                                            onChange={(value) =>
                                                                this.setState({ username: value.target.value })
                                                            } />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label htmlFor="inputPassword">Password</label>
                                                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={this.state.password}
                                                            onChange={(value) =>
                                                                this.setState({ password: value.target.value })
                                                            } />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-sm-6">
                                                        <label htmlFor="inputDataNasc">Data de Nascimento</label>
                                                        <input type="date" className="form-control" id="inputDataNasc" placeholder="2000/12/01" value={this.state.datanasc}
                                                            onChange={(value) =>
                                                                this.setState({ datanasc: value.target.value })
                                                            } />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label htmlFor="selectCargo">Cargo</label>
                                                        <select className="form-control" id="selectCargo" value={this.state.cargo}
                                                            onChange={(value) =>
                                                                this.setState({ cargo: value.target.value })
                                                            }>
                                                            <option>funcionário</option>
                                                            <option>administrador</option>
                                                        </select>

                                                    </div>


                                                </div>
                                                <button type="button" className="btn btn-primary px-4 float-right" onClick={this.AddUtilizador}>Adicionar</button>
                                            </Form>
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


    AddUtilizador() {
        var this_ = this;
        axios({
            method: 'post',
            url: '/gestorencomendas-api/utilizador',
            data: {
                funcionario: this.state.funcionario,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                datanasc: this.state.datanasc,
                cargo: this.state.cargo
            }
        })
            .then(function (response) {
                console.log('Utilizador adicionado');
                Swal.fire(
                    'Adicionado!',
                    'Utilizador adicionado com sucesso!',
                    'success'
                  );
            })
            .catch(function (error) {
                console.log("err", error);
                Swal.fire(
                    'Erro!',
                    'Utilizador não foi adicionado!',
                    'error'
                  );

            })
            .then(function () {
                console.log("then");
            })
    }
}

export default AdicionarUtilizador;