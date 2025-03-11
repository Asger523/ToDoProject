import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Text,
  Alert,
} from 'react-native';
import {useTasks} from '../contexts/tasks.context';

const AddTask = ({navigation}) => {
  const {addTask} = useTasks();
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const handleAddTask = () => {
    if (newTitle === '' || newDescription === '') {
      Alert.alert('Please make sure all fields are filled out.');
      return;
    }
    addTask({title: newTitle, description: newDescription, date: date});
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.background}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Add your task here!</Text>
      </View>

      {/* Seperator */}
      <View style={styles.seperator} />

      {/* Title input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task title..."
          value={newTitle}
          onChangeText={setNewTitle}
        />
      </View>

      {/* Description input */}
      <View style={styles.inputContainer}>
        <TextInput
          editable
          multiline
          style={styles.input}
          placeholder="Enter task description..."
          value={newDescription}
          onChangeText={setNewDescription}
        />
      </View>

      {/* Date Picker */}
      <View style={styles.dateContainer}>
        <DatePicker mode={'date'} date={date} onDateChange={setDate} />
      </View>

      {/* Seperator */}
      <View style={styles.seperator} />

      {/* Add Task Button */}
      <View style={styles.addTaskContainer}>
        <Button title="Add Task" color="#fff" onPress={() => handleAddTask()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#3b3b3b',
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#3b3b3b',
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
    minHeight: 40,
  },
  seperator: {
    height: 6,
    backgroundColor: '#6200ee',
    marginVertical: 10,
  },
  dateContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 6,
    alignSelf: 'center',
  },
  addTaskContainer: {
    backgroundColor: '#6200ee',
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 6,
    alignSelf: 'center',
  },
});

export default AddTask;
