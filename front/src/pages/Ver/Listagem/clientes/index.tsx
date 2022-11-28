import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import './styles.css';
import Axios from "axios";
import { useState, useEffect } from "react";

function Clientes() {
    const [list, setList] = useState([]);
    
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/clientes`).then((resp) => {
        setList(resp.data);
      });
    }, [])

    function handleSubmit(id: number) {     
        Axios.post("http://localhost:3001/deletar", {
          id: id,
          tabela: 'cliente'
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
                <h1>Clientes</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Nome Social</th>
                                <th>Genero</th>
                                <th>CPF</th>
                                <th>RG</th>
                                <th>Telefone</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        {typeof list !== 'undefined' && list.map((value) => {
                            return value ?
                        <tbody>
                            <tr>
                                <td> {value[1]} </td>
                                <td> {value[2]} </td>
                                <td> {value[3]} </td>
                                <td> {value[4]} </td>
                                <td> {value[5]} </td>
                                <td> {value[7]} </td>                    
                                <td>
                                    <div>
                                        <a href={`/editar_cliente/${value[0]}`}>Editar</a> <br />     
                                        <a href={`/adicionar_produto/${value[0]}`}>Adicionar Produtos</a> <br />
                                        <a href={`/adicionar_servico/${value[0]}`}>Adicionar Serviços</a> <br />
                                        <a href='/clientes' type='submit' onClick={() => handleSubmit(value[0])}>Remover</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        :null})}
                    </Table>
                </div>
            </main>
        </section>
    );
}

export default Clientes;