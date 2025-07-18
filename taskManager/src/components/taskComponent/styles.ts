// src/components/taskComponent/styles.ts
import styled from 'styled-components/native';

interface Props {
  completed: boolean;
}

export const Card = styled.TouchableOpacity<Props>`
  background-color: ${({ completed }) => (completed ? '#e60914' : '#f0f0f0')};
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;


`;

export const TaskText = styled.Text<Props>`
  font-size: 16px;
  color: ${({ completed }) => (completed ? '#fff' : '#333')};
`;
