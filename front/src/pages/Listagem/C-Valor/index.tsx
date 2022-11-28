import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao';

function Consumos() {
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <div className="tables">
                    <h1>Clientes que mais consumiram em valor</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Total Produtos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Carlos Eduardo Falandes</td>
                                <td>670</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Total Serviços</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Carlos Eduardo Falandes</td>
                                <td>700</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section >
    );
}

export default Consumos;