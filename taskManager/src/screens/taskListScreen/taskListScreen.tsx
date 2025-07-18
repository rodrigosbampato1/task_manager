// src/screens/TaskListScreen.tsx
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { FlatList, Modal, Text, View } from 'react-native'
import headerImage from '../../assets/images/header.png'
import CustomButton from '../../components/customButtonComponent/customComponent'
import TaskCard from '../../components/taskComponent/taskComponent'
import { useTaskContext } from '../../context/context'
import { RootStackParamList } from '../../type/navigation'
import { ButtonView, Container, HeaderImage, ModalButton, ModalButtonText, ModalContainer, ModalContent } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'List'>

const TaskListScreen = ({ navigation }: Props) => {
  const { tasks, toggleTask, clearCompleted } = useTaskContext()

  const [modalVisible, setModalVisible] = useState(false)
  const [successVisible, setSuccessVisible] = useState(false)

  const handleClearPress = () => {
    setModalVisible(true)
  }

  const confirmClear = () => {
    clearCompleted()
    setModalVisible(false)
    setSuccessVisible(true)
    setTimeout(() => setSuccessVisible(false), 2000)
  }

  return (
    <Container>
      <HeaderImage source={headerImage} resizeMode="contain" />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskCard task={item} onToggle={() => toggleTask(item.id)} />
        )}
      />
      <ButtonView>
        <CustomButton title="Nova Tarefa" onPress={() => navigation.navigate('Add')} />
        <CustomButton title="Limpar Tarefa" onPress={handleClearPress} />
      </ButtonView>


      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContainer>
          <ModalContent>
            <Text style={{ fontSize: 18, marginBottom: 20, textAlign: 'center' }}>
              Deseja realmente limpar a tarefa concluída?
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <ModalButton onPress={() => setModalVisible(false)} cancel>
                <ModalButtonText cancel>Cancelar</ModalButtonText>
              </ModalButton>
              <ModalButton onPress={confirmClear}>
                <ModalButtonText>Confirmar</ModalButtonText>
              </ModalButton>
            </View>
          </ModalContent>
        </ModalContainer>
      </Modal>

      <Modal
        transparent
        animationType="fade"
        visible={successVisible}
        onRequestClose={() => setSuccessVisible(false)}
      >
        <ModalContainer>
          <ModalContent style={{ backgroundColor: '#4BB543' }}>
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>
              Tarefa concluída limpa com sucesso!
            </Text>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  )
}

export default TaskListScreen
