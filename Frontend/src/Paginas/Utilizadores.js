import React from "react";
import { Table, NavLink } from "react-bootstrap";
import Menu from './Menu';
const axios = require('axios');


class Utilizadores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            utilizadores: {},
        };
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
                                    <div className="mr-auto p-2"><h3 className="font-weight-bold text-primary"> Utilizadores </h3></div>
                                    <div className="btnadd p-2"> <NavLink className="btn btn-primary btnadd" href="/add-utilizador"> Adicionar utilizador</NavLink></div>
                                </div>
                                <div className="table-responsive table mt-2 card-body  py-3 d-flex" id="dataTable" role="grid" aria-describedby="dataTable_info" style={{ fontFamily: 'Montserrat, sans-serif' }}>

                                    <Table striped bordered hover className="table-responsive table dataTable my-0" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th style={{ width: 100 }} className="text-center">#Id</th>
                                                <th style={{ width: 200 }} className="text-center">Funcionário</th>
                                                <th style={{ width: 200 }} className="text-center">Email</th>
                                                <th style={{ width: 100 }} className="text-center">Username</th>
{/*                                                 <th style={{ width: 300 }} className="text-center">Password</th> */}
                                                <th style={{ width: 200 }} className="text-center">Data Nasc.</th>
                                                <th style={{ width: 100 }} className="text-center">Cargo</th>
                                                <th style={{ width: 200 }} className="text-center" colSpan="2">Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.loadFillDataUtilizadores()} 
                                            {/* <tr>
                                            <td>1</td>
                                            <td>José</td>
                                            <td>jose@gmail.com</td>
                                            <td>jose</td>
                                            <td>******</td>
                                            <td>13/01/2004</td>
                                            <td>funcionário</td>
                                            <td>
                                                <button className="btn btn-outline-info">
                                                    Editar
                                                 </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-outline-danger">
                                                    Eliminar
                                                 </button>
                                            </td>

                                        </tr>  */}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    componentDidMount() {
        this.fetchData();
    }


    fetchData() {
        var this_ = this;
        axios({
            method: 'get',
            url: '/gestorencomendas-api/utilizador',
        })
            .then(result => {
                console.log('result.data: ', result.data)
                this_.setState({
                    utilizadores: result.data
                })
            })
            .catch(err => {
                console.log(err)
            });
    }
    loadFillDataUtilizadores() {
        return Object.values(this.state.utilizadores).map((data) => {
            return (

                <tr>
                    <th className="text-center">{data._id}</th>
                    <td>{data.funcionario}</td>
                    <td className="text-center">{data.email}</td>
                    <td >{data.username}</td>
                    {/* <td className="text-center">{data.password}</td> */}
                    <td className="text-center">{data.datanasc}</td>
                    <td className="text-center">{data.cargo}</td>
                    <td className="text-center">
                        <button className="btn btn-outline-info">
                            Editar
                     </button>
                    </td>
                    <td>
                        <button className="btn btn-outline-danger"
                            /* onClick={() => this.onDeleteRh(data.id_utilizador)} */>
                            Apagar
                     </button>
                    </td>
                </tr>
            )
        })
    }
}

export default Utilizadores;