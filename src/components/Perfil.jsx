function Perfil({ nome, foto }) {
  return (
    <section className="perfil">
      <div className="container">
        <img src={foto} alt="Foto de perfil" className="foto-perfil" />
        <h1 className="nome">{nome}</h1>
      </div>
    </section>
  );
}

export default Perfil;