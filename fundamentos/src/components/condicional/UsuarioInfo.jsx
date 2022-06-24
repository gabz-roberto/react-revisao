import React from 'react'

import If from './If';

const UsuarioInfo = (props) => {
    const usuario = props.usuario || "Usuário"

  return (
    <div>
        <If test={usuario && usuario.nome}>
            {/* Se usuário for true e tiver o atributo nome */}
            Seja Bem-vindo(a) {usuario.nome}!
        </If>
        <If test={!usuario || !usuario.nome}>
            {/* Se o usuário for false ou não tiver o atributo nome */}
            Seja Bem-vindo(a) Usuário!
        </If>
    </div>
  )
}

export default UsuarioInfo