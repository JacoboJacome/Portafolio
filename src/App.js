import './App.css';

//Components
import Header from './components/header/Header';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Proyectos from './components/Proyectos/Proyectos';

//Assets
import Portada from "./Assets/1905.i126.005_programmer work.jpg"

function App() {
  return (
    <div className="w-screen h-auto flex flex-col justify-center content-center aling-center">
      <div className="w-100 h-80 flex">
        <img className="object-cover"  src={Portada} alt='https://www.freepik.es/vectores/trabajo' />
      </div>
      <Header />
      <Proyectos />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
