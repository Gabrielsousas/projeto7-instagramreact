import React, { useState } from 'react';

const fotoDePerfilInicial = "assets/img/catanacomics.svg";
const nomeDeUsuarioInicial = "catanacomics";

export default function Usuario() {
  const [fotoDePerfil, setFotoDePerfil] = useState(fotoDePerfilInicial);
  const [nomeDeUsuario, setNomeDeUsuario] = useState(nomeDeUsuarioInicial);

  const handleClickImagemDePerfil = () => {
    const novaFotoDePerfil = prompt("Insira o link da sua nova foto");
    if (novaFotoDePerfil) {
      setFotoDePerfil(novaFotoDePerfil);
    }
  };

  const handleClickLapis = () => {
    const novoNomeDeUsuario = prompt("Insira o seu novo nome de usuário");
    if (novoNomeDeUsuario) {
      setNomeDeUsuario(novoNomeDeUsuario);
    }
  };

  return (
    <div className="usuario">
      <img
        src={fotoDePerfil}
        alt="imagem de perfil"
        data-test="profile-image"
        onClick={handleClickImagemDePerfil}
      />
      <div className="texto" data-test="name">
        <span>
          <strong>{nomeDeUsuario}</strong>
          <ion-icon name="pencil" data-test="edit-name" onClick={handleClickLapis}></ion-icon>
        </span>
      </div>
    </div>
  );
}
