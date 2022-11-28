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
                    <h1>Produto mais consumido</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Creme</td>
                                <td>12</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h1>Serviço mais consumido</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Massagem</td>
                                <td>6</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section >
    );
}

export default Consumos;