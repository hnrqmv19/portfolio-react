function HabilidadeGrupo({ titulo, tags }) {
  return (
    <div className="habilidade">
      <h3>{titulo}</h3>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default HabilidadeGrupo;