import React from 'react'

const FamiliaMembro = ({nome, sobrenome}) => {
  return (
    <div>
      {nome} <strong>{sobrenome}</strong>
    </div>
  )
}

export default FamiliaMembro