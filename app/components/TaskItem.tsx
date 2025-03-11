import React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {useTasks} from '../contexts/tasks.context';

export const TaskItem = (props: {
  task: {title: string; description: string; date: Date; isDone?: boolean};
  onPressGoToDetails: any;
}) => {
  const {task, onPressGoToDetails} = props;
  const {removeTask, updateTask} = useTasks();
  // Convert to Date object
  const formatDate = task.date.toLocaleDateString();
  //Check the task date:
  const isPastDue = task.date < new Date();
  //Check if task is done:
  const done = task.isDone;

  const handleDone = () => {
    updateTask({...task, isDone: true});
  };

  return (
    <Pressable
      onPress={onPressGoToDetails}
      style={[
        styles.task,
        isPastDue && styles.pastDueTask,
        done && styles.doneTask,
      ]}>
      <View style={styles.taskTextContainer}>
        <Text style={styles.taskText}>{task.title}</Text>
        <Text style={styles.taskDateText}>Due: {formatDate}</Text>
      </View>
      {!done && <Button title={'Done'} onPress={handleDone} />}
      {done && <Button title={'Remove'} onPress={() => removeTask(task)} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#f9f9f9',
    padding: 8,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  pastDueTask: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
  doneTask: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  taskTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  taskText: {
    fontSize: 17,
  },
  taskDateText: {
    fontSize: 14,
  },
});
