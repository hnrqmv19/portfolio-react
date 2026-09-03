function ExperienciaItem({ imagem, cargo, duracao }) {
  return (
    <div className="experiencia">
      <img src={imagem} alt={cargo} className="experiencia-imagem" />
      <div className="experiencia-conteudo">
        <p className="nome-experiencia">{cargo}</p>
        <p className="experiencia-duracao">{duracao}</p>
      </div>
    </div>
  );
}

export default ExperienciaItem;