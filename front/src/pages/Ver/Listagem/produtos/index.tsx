import { Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import '../../Listagem/styles.css';
import Axios from "axios";
import { useState, useEffect } from "react";

function Produtos() {
    const [list, setList] = useState([]);
    
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/produtos`).then((resp) => {
        setList(resp.data);
      });
    }, [])

    function handleSubmit(id: number) {     
        Axios.post("http://localhost:3001/deletar", {
          id: id,
          tabela: 'produto'
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
                <h1 className="titles">  <strong>Produtos WB  </strong></h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className="titles-table">
                            <tr>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        {typeof list !== 'undefined' && list.map((value) => {
                            return value ?
                        <tbody>
                            <tr>
                                <td> {value[1]} </td>
                                <td> R$ {value[2]} </td>                
                                <td>
                                    <div className="dupla">
                                        <a className="editar-cps"  href={`/editar_produto/${value[0]}`}>Editar</a> <br /> 
                                        <a className="remover-cps" href='/produtos' type='submit' onClick={() => handleSubmit(value[0])}>Remover</a>
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

export default Produtos;