import React from "react";
import { Table, NavLink } from "react-bootstrap";
import Menu from './Menu';


function Produtos() {
    return (
        <div className="">
            <Menu />
            <div className="section">
                <div className="container-fluid" >
                    <div className="col-lg-12 col-xl-12">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex">
                                <div className="mr-auto p-2"><h3 className="font-weight-bold text-primary"> Produtos </h3></div>
                                <div className="btnadd p-2"> <NavLink className="btn btn-primary btnadd" to="/rh/criarrh"> Adicionar produto</NavLink></div>
                            </div>
                            <div className="table-responsive table mt-2 card-body  py-3 d-flex" id="dataTable" role="grid" aria-describedby="dataTable_info" style={{ fontFamily: 'Montserrat, sans-serif' }}>

                                <Table striped bordered hover className="table-responsive table dataTable my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th style={{ width: 100 }} className="text-center">#Id</th>
                                            <th style={{ width: 200 }} className="text-center">Nome</th>
                                            <th style={{ width: 200 }} className="text-center">Tipo</th>
                                            <th style={{ width: 100 }} className="text-center">Preço</th>
                                            <th style={{ width: 300 }} className="text-center">Descrição</th>
                                            <th style={{ width: 200 }} className="text-center">Disp</th>
                                            <th style={{ width: 100 }} className="text-center">Stock</th>
                                            <th style={{ width: 200 }} className="text-center" colSpan="2">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Maçãs</td>
                                            <td>Fruta</td>
                                            <td>1.50€</td>
                                            <td>Maçã de alcobaça</td>
                                            <td>Disponivel</td>
                                            <td>10</td>
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

export default Produtos;