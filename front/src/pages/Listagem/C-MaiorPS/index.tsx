import { Table } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao';
import maisConsiumidos from '../script/maisConsumidos';

function Consumos() {
    const dados = maisConsiumidos()
    const prod = dados[0]
    const serv = dados[1]
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1 className='titles'> <strong>Produtos mais consumidos</strong> </h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        {typeof prod !== 'undefined' && prod.map((value) => {
                            return value ?
                        <tbody className='body-table'>
                            <tr>
                                <td> {value[0]} </td>
                                <td> {value[1]} </td>
                            </tr>
                        </tbody>
                        :null})}
                    </Table>
                </div>
                    <h1 className='titles'> <strong> Serviços mais consumidos </strong></h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        {typeof serv !== 'undefined' && serv.map((value) => {
                            return value ?
                        <tbody className='body-table'>
                            <tr>
                                <td> {value[0]} </td>
                                <td> {value[1]} </td>
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