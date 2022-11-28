import { Table } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao';

function Consumos() {
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <div className="tables">
                    <h1>Clientes Masculino</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome: </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Carlos Eduardo Falandes
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <h1>Clientes Feminino</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome: </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Geovana Alberta
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}

export default Consumos;