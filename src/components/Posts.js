export default function Posts() {
  const posts = [
    {
      userImage: "assets/img/meowed.svg",
      nome: "meowed",
      contentImage: "assets/img/gato-telefone.svg",
      contentText: "gato-telefone",
      likedForImage: "assets/img/respondeai.svg",
      likedFor: "respondeai",
      qtdeCurtidas: "101.523",
    },
    {
      userImage: "assets/img/barked.svg",
      nome: "barked",
      contentImage: "assets/img/dog.svg",
      contentText: "dog",
      likedForImage: "assets/img/adorable_animals.svg",
      likedFor: "adorable_animals",
      qtdeCurtidas: "99.159",
    },
    {
      userImage: "assets/img/barked.svg",
      nome: "barked",
      contentImage: "assets/img/dog.svg",
      contentText: "dog",
      likedForImage: "assets/img/adorable_animals.svg",
      likedFor: "adorable_animals",
      qtdeCurtidas: "99.159",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          userImage={post.userImage}
          nome={post.nome}
          contentImage={post.contentImage}
          contentText={post.contentText}
          likedForImage={post.likedForImage}
          likedFor={post.likedFor}
          qtdeCurtidas={post.qtdeCurtidas}
        />
      ))}
    </div>
  );
}

function Post(props) {
  return(
  <div className="post">
    <div className="topo">
      <div className="usuario">
        <img src={props.userImage} alt={props.name} />
        {props.nome}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div className="conteudo">
      <img src={props.contentImage} alt={props.contentText} />
    </div>

    <div className="fundo">
      <div className="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div className="curtidas">
        <img src={props.likedForImage} alt={props.likedFor} />
        <div className="texto">
          Curtido por <strong>{props.likedFor}</strong> e{" "}
          <strong>outras {props.qtdeCurtidas} pessoas</strong>
        </div>
      </div>
    </div>
  </div>)
}
