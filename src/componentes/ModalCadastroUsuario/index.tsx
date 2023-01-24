import { AbCampoTexto, AbModal} from "ds-alurabooks";
import imagemPrincipal from "./assets/login.png";
import React, { useState } from 'react';

const ModalCadastroUsuario = () => {

  const [nome, setNome] =  useState('')


  return (
    <AbModal
      titulo="Cadastra"
      aberta={true}
      aoFechar={() => console.log("Fechado")}
    >
      <figure>
        <img
          src={imagemPrincipal}
          alt="Imgaem de um monitor com uma pessoa segurando uma chave."
        />
      </figure>

      <form>
        <AbCampoTexto value={nome} label='Nome' onChange={setNome}/>
      </form>
    </AbModal>
  );
};

export default ModalCadastroUsuario;
