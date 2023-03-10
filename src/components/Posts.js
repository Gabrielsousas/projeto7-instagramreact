import { useState } from "react"
export default function Posts() {
  const posts = [
    {
      userImage: "assets/img/meowed.svg",
      nome: "meowed",
      contentImage: "assets/img/gato-telefone.svg",
      contentText: "gato-telefone",
      likedForImage: "assets/img/respondeai.svg",
      likedFor: "respondeai",
      totalDeCurtidas: "101523",
    },
    {
      userImage: "assets/img/barked.svg",
      nome: "barked",
      contentImage: "assets/img/dog.svg",
      contentText: "dog",
      likedForImage: "assets/img/adorable_animals.svg",
      likedFor: "adorable_animals",
      totalDeCurtidas: "99159",
    },
    {
      userImage: "assets/img/barked.svg",
      nome: "barked-the-fake-one",
      contentImage: "assets/img/dog.svg",
      contentText: "another-dog",
      likedForImage: "assets/img/adorable_animals.svg",
      likedFor: "adorable_animals",
      totalDeCurtidas: "9932",
    },
  ];

  return (
    <div className="posts" >
      {posts.map((post) => (
        <Post
          userImage={post.userImage}
          nome={post.nome}
          contentImage={post.contentImage}
          contentText={post.contentText}
          likedForImage={post.likedForImage}
          likedFor={post.likedFor}
          totalDeCurtidas={post.totalDeCurtidas}
        />
      ))}
    </div>
  );
}


function Post(props) {
  const [salvo, setSalvo] = useState(false)
  const [liked, setCurtido] = useState(false)
  
  const likes = liked ? Number(props.totalDeCurtidas) + 1 : props.totalDeCurtidas;
  const likesOnScreen = `${Math.floor(likes / 1000)}.${likes % 1000}`
  function salvarPost() {
      setSalvo((state) => !state)
  }

  function likePost() {
      setCurtido((state) => !state)
  }

function likeImage() {
  setCurtido(true);
  
}


  return(
  <div className="post" data-test="post">
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
    <img src={props.contentImage} alt={props.contentText} data-test="post-image" onClick={likeImage} />
    </div>

    <div className="fundo">
      <div className="acoes">
        <div>
        <ion-icon data-test="like-post" name={liked ? "heart" : "heart-outline"} onClick={likePost}></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon data-test="save-post" name={salvo ? "bookmark" : "bookmark-outline"} onClick={salvarPost}></ion-icon>
        </div>
      </div>
      <div className="curtidas">
        <img src={props.likedForImage} alt={props.likedFor} />
        <div data-test="likes-number" className="texto">
          Curtido por <strong>{props.likedFor}</strong> e{" "}
          <strong>outras {likesOnScreen} pessoas</strong>
        </div>
      </div>
    </div>
  </div>)
}
