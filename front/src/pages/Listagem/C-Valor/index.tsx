import { Table } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao';
import maisValor from '../script/maiorValor';

function Consumos() {
    const dados = maisValor();
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <div className="tables">
                    <h1 className='titles'> <strong>Clientes que mais consumiram em valor </strong></h1>
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Nome</th>
                                <th>Total Produtos</th>
                                <th>Total Serviços</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        {typeof dados !== 'undefined' && dados.map((value) => {
                            return value ?
                        <tbody className='body-table'>
                            <tr>
                                <td> {value[1]} </td>
                                <td> R$ {value[2]} </td>
                                <td> R$ {value[3]} </td>
                                <td> R$ {value[4]} </td>
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