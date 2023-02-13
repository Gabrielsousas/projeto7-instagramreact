export default function Sugestoes() {
  const sugestoes = [
    { texto: "bad.vibes.memes", razao: "Segue você" },
    { texto: "chibirdart", razao: "Segue você" },
    { texto: "razoesparaacreditar", razao: "Novo no Instagram" },
    { texto: "adorable_animals", razao: "Segue você" },
    { texto: "smallcutecats", razao: "Segue você" },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map((sugestao) => (
        <Sugestao texto={sugestao.texto} razao={sugestao.razao} />
      ))}
    </div>
  );
}

function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={`assets/img/${props.texto}.svg`} alt={`${props.texto}.svg`} />
        <div className="texto">
          <div className="nome">{props.texto}</div>
          <div className="razao">{props.razao}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}
