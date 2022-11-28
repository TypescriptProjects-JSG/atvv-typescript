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
                    <h1>Clietes que menos consumiram</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Produtos</th>
                                <th>Servicos</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alberta de Alcantara</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section >
    );
}

export default Consumos;