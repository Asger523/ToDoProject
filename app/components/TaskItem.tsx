import React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {useTasks} from '../contexts/tasks.context';

export const TaskItem = (props: {
  task: {title: string; description: string; date: Date};
  onPressGoToDetails: any;
}) => {
  const {task, onPressGoToDetails} = props;
  const {removeTask} = useTasks();
  // Convert to Date object
  const formatDate = task.date.toLocaleDateString();
  //Check the task date:
  const isPastDue = task.date < new Date();

  return (
    <Pressable
      onPress={onPressGoToDetails}
      style={[styles.task, isPastDue && styles.pastDueTask]}>
      <View style={styles.taskTextContainer}>
        <Text style={styles.taskText}>{task.title}</Text>
        <Text style={styles.taskDateText}>Due: {formatDate}</Text>
      </View>
      <Button title={'Done'} onPress={() => console.log('Done pressed')} />
      <Button title={'Remove'} onPress={() => removeTask(task)} />
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
