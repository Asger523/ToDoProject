import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const TaskItem = (props: {title: any; onPress: any}) => {
  const {title, onPress} = props;

  return (
    <View style={styles.task}>
      <View style={styles.taskTextContainer}>
        <Text style={styles.taskText}>{title}</Text>
      </View>
      <Button title={'Done'} onPress={onPress} />
    </View>
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
    fontSize: 15,
  },
});
