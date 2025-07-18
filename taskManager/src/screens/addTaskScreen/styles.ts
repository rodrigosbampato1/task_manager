import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #f2f2f2;
  justify-content: center;
`

export const Input = styled.TextInput`
  border: 1px solid #ccc;
  padding: 14px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: white;
`


export const SuccessMessage = styled.Text`
  color: #4BB543;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`

export const ModalContainer = styled.Modal`` 

export const ModalContent = styled.View`
  margin: 100px 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  elevation: 5;
  align-items: center;
`

export const ModalText = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
`

export const ModalButton = styled.TouchableOpacity`
  padding: 12px 40px;
  background-color: #a83238;
  border-radius: 8px;
  align-items: center;
`

export const ModalButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`
