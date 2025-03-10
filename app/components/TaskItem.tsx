import React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {useTasks} from '../contexts/tasks.context';

export const TaskItem = (props: {
  task: {title: string; description: string};
  onPressGoToDetails: any;
}) => {
  const {task, onPressGoToDetails} = props;

  const {removeTask} = useTasks();

  return (
    <Pressable onPress={onPressGoToDetails} style={styles.task}>
      <View style={styles.taskTextContainer}>
        <Text style={styles.taskText}>{task.title}</Text>
      </View>
      <Button title={'Done'} onPress={() => removeTask(task)} />
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
  taskTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  taskText: {
    fontSize: 17,
  },
});
