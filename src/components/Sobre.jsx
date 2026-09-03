function Sobre({ texto }) {
  return (
    <section id="sobre">
      <div className="container-sobre">
        <p className="titulo-seção">SOBRE</p>
        <p className="sobre-texto">{texto}</p>
      </div>
    </section>
  );
}

export default Sobre;