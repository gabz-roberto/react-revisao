import React, {useContext} from 'react'
import Container from '../../components/elements/Container/Container'
import dataContext from '../../context/data'

const Hiragana = () => {
  const context = useContext(dataContext)
  const hiragana = context.hiragana
  
  
  return (
    <Container>
      
    </Container>
  )
}

export default Hiragana