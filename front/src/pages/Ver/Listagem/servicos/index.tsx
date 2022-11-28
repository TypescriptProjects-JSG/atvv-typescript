import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import Axios from "axios";
import { useState, useEffect } from "react";


function Servicos() {
    const [list, setList] = useState([]);
    
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/servicos`).then((resp) => {
        setList(resp.data);
      });
    }, [])

    function handleSubmit(id: number) {     
        Axios.post("http://localhost:3001/deletar", {
          id: id,
          tabela: 'servico'
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
                <h1>Serviços</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
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
                                        <a href={`/editar_servico/${value[0]}`}>Editar</a> <br /> 
                                        <a href='/servicos' type='submit' onClick={() => handleSubmit(value[0])}>Remover</a>
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

export default Servicos;