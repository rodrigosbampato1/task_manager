// src/components/taskComponent/taskComponent.tsx
import React from 'react';
import { Task } from '../../type/task';
import { Card, TaskText } from './styles';

interface Props {
  task: Task;
  onToggle: () => void;
}

export default function TaskComponent({ task, onToggle }: Props) {
  return (
    <Card onPress={onToggle} completed={task.completed}>
      <TaskText completed={task.completed}>{task.title}</TaskText>
    </Card>
  );
}
