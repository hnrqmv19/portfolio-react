import "./App.css";

// Coloque as imagens dentro de src/assets/ (veja o README.md)
import fotoPerfil from "./assets/eu.jpg";
import clubeProgImg from "./assets/clubeprog.jpg";
import clubeCyberImg from "./assets/clubecyber.jpg";

function App() {
  return (
    <div id="inicio">
      <header>
        <div className="navbar">
          <a className="nav-link" href="#inicio">INICIO</a>
          <a className="nav-link" href="#sobre">SOBRE</a>
          <a className="nav-link" href="#experiencia">EXPERIÊNCIAS</a>
          <a className="nav-link" href="#habilidades">HABILIDADES</a>
        </div>
      </header>

      <main>
        <section className="perfil">
          <div className="container">
            <img src={fotoPerfil} alt="Foto de perfil" className="foto-perfil" />
            <h1 className="nome">Henrique Vieira</h1>
          </div>
        </section>

        <section id="sobre">
          <div className="container-sobre">
            <p className="titulo-seção">SOBRE</p>
            <p className="sobre-texto">
              Sou um estudante de Engenharia de Computação no SENAI CIMATEC, com interesse em
              desenvolvimento de software, cibersegurança e sistemas computacionais. Tenho
              experiência com projetos acadêmicos, pesquisa e desenvolvimento de soluções, além
              de atuação em iniciativas relacionadas à tecnologia e segurança da informação.
              Busco constantemente expandir meus conhecimentos, enfrentar novos desafios e
              transformar aprendizado em soluções práticas.
            </p>
          </div>
        </section>

        <section id="experiencia">
          <div className="container-experiencia">
            <p className="titulo-seção">EXPERIÊNCIAS</p>
            <div className="experiencias">
              <div className="experiencia">
                <img src={clubeProgImg} alt="Clube de Programação" className="experiencia-imagem" />
                <div className="experiencia-conteudo">
                  <p className="nome-experiencia">Membro Administrativo - Clube de Programação</p>
                  <p className="experiencia-duracao">Dezembro de 2024 - Janeiro de 2026 · 1 ano e 2 meses</p>
                </div>
              </div>
              <div className="experiencia">
                <img src={clubeCyberImg} alt="Clube de Cybersegurança" className="experiencia-imagem" />
                <div className="experiencia-conteudo">
                  <p className="nome-experiencia">Membro Administrativo - Clube de Cybersegurança</p>
                  <p className="experiencia-duracao">Janeiro de 2026 - o momento · 8 meses</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="habilidades">
          <div className="container-habilidades">
            <p className="titulo-seção">HABILIDADES</p>
            <div className="habilidades">
              <div className="habilidade">
                <h3>Programação</h3>
                <div className="tags">
                  <span>Python</span>
                  <span>Java</span>
                  <span>C/C++</span>
                  <span>SQL</span>
                </div>
              </div>
              <div className="habilidade">
                <h3>Cibersegurança</h3>
                <div className="tags">
                  <span>Redes</span>
                  <span>CTF</span>
                  <span>Firewalls</span>
                </div>
              </div>
              <div className="habilidade">
                <h3>Idiomas</h3>
                <div className="tags">
                  <span>Português - Nativo</span>
                  <span>Inglês - Avançado</span>
                  <span>Francês - Básico</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="contato-info">
          <a href="mailto:henrimvieira1906@gmail.com" aria-label="E-mail">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/henrique-maranh%C3%A3o-vieira-1149982b9/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M8 11v5" />
              <path d="M8 8v.01" />
              <path d="M12 16v-5" />
              <path d="M12 13c0-1.1.9-2 2-2s2 .9 2 2v3" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;