import { Table } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao';
import maisQta from '../script/maiorQnt';

function Consumos() {
    const dados = maisQta();
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1 className='titles'> <strong>Clientes que mais consumiram</strong></h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Nome</th>
                                <th>Produtos</th>
                                <th>Servicos</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        {typeof dados !== 'undefined' && dados.map((value) => {
                            return value ?
                        <tbody className='body-table'>
                            <tr>
                                <td> {value[1]} </td>
                                <td> {value[2]} </td>
                                <td> {value[3]} </td>
                                <td> {value[4]} </td>
                            </tr>
                        </tbody>
                        :null})}
                    </Table>
                </div>
            </main>
        </section >
    );
}

export default Consumos;