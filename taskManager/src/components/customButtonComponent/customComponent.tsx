import React from 'react'
import { ButtonContainer, ButtonText } from './styles'

interface Props {
  title: string
  onPress: () => void
}

export default function CustomComponent({ title, onPress }: Props) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
}


