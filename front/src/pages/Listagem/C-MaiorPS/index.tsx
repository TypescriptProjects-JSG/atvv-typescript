import { Button, Table } from 'react-bootstrap';
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
                <div className="tables">
                    <h1>Produto mais consumido</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        {typeof prod !== 'undefined' && prod.map((value) => {
                            return value ?
                        <tbody>
                            <tr>
                                <td> {value[0]} </td>
                                <td> {value[1]} </td>
                            </tr>
                        </tbody>
                        :null})}
                    </Table>
                    <h1>Serviço mais consumido</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        {typeof serv !== 'undefined' && serv.map((value) => {
                            return value ?
                        <tbody>
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