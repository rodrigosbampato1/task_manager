import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../components/customButtonComponent/customComponent'
import { useTaskContext } from '../../context/context'
import { RootStackParamList } from '../../type/navigation'
import {
  Container,
  Input,
  ModalButton,
  ModalButtonText,
  ModalContainer,
  ModalContent,
  ModalText,
  SuccessMessage,
} from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'Add'>

const AddTaskScreen = ({ navigation }: Props) => {
  const [title, setTitle] = useState('')
  const [success, setSuccess] = useState(false)
  const [modalErrorVisible, setModalErrorVisible] = useState(false)
  const { addTask } = useTaskContext()

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false)
        navigation.goBack()
      }, 3000)
    }
    return () => clearTimeout(timer)
  }, [success, navigation])

  const handleAdd = () => {
    if (!title.trim()) {
      setModalErrorVisible(true)
      return
    }
    addTask(title)
    setTitle('')
    setSuccess(true)
  }

  return (
    <Container>
      <Input
        placeholder="Digite a nova tarefa"
        value={title}
        onChangeText={setTitle}
      />
      <CustomButton title="Adicionar" onPress={handleAdd} />

      {success && <SuccessMessage>Tarefa adicionada com sucesso!</SuccessMessage>}

      {/* Modal de erro */}
      <ModalContainer visible={modalErrorVisible} transparent animationType="fade">
        <ModalContent>
          <ModalText>Digite um título para a tarefa</ModalText>
          <ModalButton onPress={() => setModalErrorVisible(false)}>
            <ModalButtonText>Fechar</ModalButtonText>
          </ModalButton>
        </ModalContent>
      </ModalContainer>
    </Container>
  )
}

export default AddTaskScreen
