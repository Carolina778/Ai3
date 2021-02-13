import React from "react";
import { Table, NavLink } from "react-bootstrap";
import Menu from './Menu';


function Encomendas() {
    return (
        <div className="">
            <Menu />
            <div className="section">
                <div className="container-fluid" >
                    <div className="col-lg-12 col-xl-12">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex">
                                <div className="mr-auto p-2"><h3 className="font-weight-bold text-primary"> Encomendas </h3></div>
                                <div className="btnadd p-2"> <NavLink className="btn btn-primary btnadd" to="/rh/criarrh"> Realizar encomenda</NavLink></div>
                            </div>
                            <div className="table-responsive table mt-2 card-body  py-3 d-flex" id="dataTable" role="grid" aria-describedby="dataTable_info" style={{ fontFamily: 'Montserrat, sans-serif' }}>

                                <Table striped bordered hover className="table-responsive table dataTable my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th style={{ width: 100 }} className="text-center">#Id</th>
                                            <th style={{ width: 200 }} className="text-center">Estado</th>
                                            <th style={{ width: 200 }} className="text-center">Data criação</th>
                                            <th style={{ width: 100 }} className="text-center">Produtos</th>
                                            <th style={{ width: 300 }} className="text-center">Id funcionario resp.</th>
                                            <th style={{ width: 200 }} className="text-center">Destinatário</th>
                                            <th style={{ width: 100 }} className="text-center">Valor</th>
                                            <th style={{ width: 200 }} className="text-center" colSpan="2">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Entregue</td>
                                            <td>20/02/2020</td>
                                            <td>Maça e banana</td>
                                            <td>2343223</td>
                                            <td>Emanuel Pinto</td>
                                            <td>5,60€</td>
                                            <td>
                                                <button className="btn btn-outline-info">
                                                   Editar
                                                 </button>
                                            </td>
                                        </tr>
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

export default Encomendas;