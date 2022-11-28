import {  Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import Axios from "axios";

function AdcServicos() {
    const navigate = useNavigate();
    var { id } = useParams();

    const [pessoas, setPessoas] = useState([]);
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/clientes`).then((resp) => {
        setPessoas(resp.data);
      });
    }, [])

    var Nome = new String
    for(let k=0; pessoas.length > k; ++k){
        var pessoa = pessoas[k]
        if(pessoa[0] == id){
            Nome = pessoa
            break 
        }  
    }

    const [list, setList] = useState([]);
    
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/servicos`).then((resp) => {
        setList(resp.data);
      });
    }, [])

    function handleSubmit(id_item: number) {     
        Axios.post("http://localhost:3001/adicionar", {
          item: id_item,
          id: id,
          relacao: 'servico'
        }).then((res)=>{
          console.log(res)
        })    
    }
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1 className="titles"> <strong> Serviços WB</strong> </h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className="titles-table">
                            <tr>
                                <th>Serviço</th>
                                <th>Preço</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        {typeof list !== 'undefined' && list.map((value) => {
                            return value ?
                        <tbody>
                            <tr>
                                <td> {value[1]} </td>
                                <td> {value[2]} </td>                
                                <td>
                                    <div>
                                        <a href="" type='submit' onClick={() => handleSubmit(value[0])}>Adicionar ao cliente</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        :null})}
                    </Table>
                    <div className="button-l">
                        <Button className="submit" variant="outline" onClick={() => navigate(-1)}>Voltar</Button>{' '} 
                    </div>
                </div>
            </main>
        </section>
    );
}

export default AdcServicos;