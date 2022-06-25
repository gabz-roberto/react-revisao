import React from 'react'
import DiretaFilho from './DiretaFilho'

const DiretaPai = () => {
  return (
    <div>
        <DiretaFilho texto="O Senhor dos Aneis" numero={1} bool={true} />
        {/* A comunicação ocorre de forma direta do componente pai para o componente filho */}
        <DiretaFilho texto="Game of Thrones" numero={2} bool={false} />
    </div>
  )
}

export default DiretaPai