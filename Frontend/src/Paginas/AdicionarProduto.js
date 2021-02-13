import React from "react";
import Menu from './Menu';

function AdicionarProduto() {
    return (
        <div className="">
            <Menu />
            <div className="section">
                <div className="container-fluid" >
                    <div className="col-lg-12 col-xl-12">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex">
                                <div className="mr-auto p-2"><h3 className="font-weight-bold text-primary"> Adicionar Produto </h3></div>
                            </div>
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-md-10 mx-auto">
                                        <form>
                                            <div className="form-group row">
                                                <div className="col-sm-6">
                                                    <label htmlFor="inputNome">Nome</label>
                                                    <input type="text" className="form-control" id="inputNome" placeholder="Nome completo" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label htmlFor="selectTipo">Tipo</label>
                                                    <select className="form-control" id="selectTipo">
                                                        <option>Frutas</option>
                                                        <option>Móveis</option>
                                                        <option>Acessórios</option>
                                                        <option>Vestuário</option>
                                                        <option>Eletrónicos</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6">
                                                    <label htmlFor="inputUsername">Preço</label>
                                                    <input type="euro" className="form-control" id="inputUsername" placeholder="Username" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label htmlFor="inputPassword">Descrição</label>
                                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6">
                                                    <label htmlFor="inputDataNasc">Disponibilidade</label>
                                                    <input type="text" className="form-control" id="inputDataNasc" placeholder="01/01/2000" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label htmlFor="selectCargo"></label>
                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                        <option>Funcionário</option>
                                                        <option>Gerente</option>
                                                    </select>

                                                </div>


                                            </div>
                                            <button type="button" className="btn btn-primary px-4 float-right">Adicionar</button>
                                        </form>
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

export default AdicionarProduto;