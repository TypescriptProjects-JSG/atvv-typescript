import { Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import '../../Listagem/styles.css';
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
                <h1 className="titles"> <strong> Clientes WB </strong> </h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead  className="titles-table">
                            <tr>
                                <th>Nome</th>
                                <th>Nome Social</th>
                                <th>Genero</th>
                                <th>CPF</th>
                                <th>RG</th>
                                <th>Telefone</th>
                                <th>Opções</th>
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
                                <td> {value[6]} </td>                  
                                <td>
                                    <div>
                                        <a className="editar-cps" href={`/editar_cliente/${value[0]}`}>Editar</a> <br />     
                                        <a className="adicionar" href={`/adicionar_produto/${value[0]}`}>Adicionar Produtos</a> <br />
                                        <a className="adicionar" href={`/adicionar_servico/${value[0]}`}>Adicionar Serviços</a> <br />
                                        <a className="remover-cps" href='/clientes' type='submit' onClick={() => handleSubmit(value[0])}>Remover</a>
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