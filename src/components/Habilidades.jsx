import HabilidadeGrupo from "./HabilidadeGrupo.jsx";

function Habilidades({ grupos }) {
  return (
    <section id="habilidades">
      <div className="container-habilidades">
        <p className="titulo-seção">HABILIDADES</p>
        <div className="habilidades">
          {grupos.map((grupo) => (
            <HabilidadeGrupo key={grupo.titulo} titulo={grupo.titulo} tags={grupo.tags} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Habilidades;