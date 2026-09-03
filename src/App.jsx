import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Perfil from "./components/Perfil.jsx";
import Sobre from "./components/Sobre.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Habilidades from "./components/Habilidades.jsx";
import ContatoInfo from "./components/ContatoInfo.jsx";
import {
  navLinks,
  perfil,
  sobreTexto,
  experiencias,
  habilidades,
  contatos,
} from "./data/index.js";

function App() {
  return (
    <div id="inicio">
      <Navbar links={navLinks} />

      <main>
        <Perfil nome={perfil.nome} foto={perfil.foto} />
        <Sobre texto={sobreTexto} />
        <Experiencia items={experiencias} />
        <Habilidades grupos={habilidades} />
        <ContatoInfo contatos={contatos} />
      </main>
    </div>
  );
}

export default App;