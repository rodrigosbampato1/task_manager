// src/screens/styles.ts
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 16px;
`

export const HeaderImage = styled.Image`
  width: 100%;
  height: 180px;
  margin-bottom: 16px;
`

export const ButtonView = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.View`
  width: 80%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  elevation: 5;
`

interface ModalButtonProps {
  cancel?: boolean
}

export const ModalButton = styled.TouchableOpacity<ModalButtonProps>`
  flex: 1;
  padding: 12px 0;
  margin: 0 5px;
  border-radius: 8px;
  background-color: ${({ cancel }) => (cancel ? '#ccc' : '#a83238')};
  align-items: center;
`

export const ModalButtonText = styled.Text<ModalButtonProps>`
  color: ${({ cancel }) => (cancel ? '#000' : '#fff')};
  font-weight: 600;
  font-size: 16px;
`
