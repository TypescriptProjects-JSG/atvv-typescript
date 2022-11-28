import Navbar_ from '../../component/barraNavegacao';
import './styles.css'

function Home() {
    return (
       <section>
           <header>
               <Navbar_/>
           </header>
           <main>
               <div className="text">
                    <h1>Bem vindo ao salão WB</h1>
               </div>
           </main>
       </section>
    );
}
export default Home;