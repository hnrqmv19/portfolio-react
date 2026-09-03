import ExperienciaItem from "./ExperienciaItem.jsx";

function Experiencia({ items }) {
  return (
    <section id="experiencia">
      <div className="container-experiencia">
        <p className="titulo-seção">EXPERIÊNCIAS</p>
        <div className="experiencias">
          {items.map((item) => (
            <ExperienciaItem
              key={item.cargo}
              imagem={item.imagem}
              cargo={item.cargo}
              duracao={item.duracao}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiencia;