import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const TaskDetails = ({route}) => {
  const {task} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Task Details</Text>
        <Text style={styles.taskText}>{task.title}</Text>
        <Text style={styles.taskText}>{task.description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b3b3b',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  taskText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
});

export default TaskDetails;
