import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import {TaskItem} from './../components/TaskItem';
import {useTasks} from '../contexts/tasks.context';
import {useState} from 'react';

const DoneTasks = ({navigation}) => {
  const {tasks} = useTasks();
  const [search, setSearch] = useState('');

  // Filter tasks based on search. Not case sensitive
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.background}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Done Tasks:</Text>
      </View>

      {/* Search bar */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search tasks..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Seperator */}
      <View style={styles.seperator} />

      {/* Task List */}
      <FlatList
        style={styles.tasksContainer}
        data={filteredTasks.filter(task => task.isDone === true)}
        renderItem={({item}) => (
          <TaskItem
            task={item}
            onPressGoToDetails={() =>
              navigation.navigate('TaskDetails', {task: item})
            }
          />
        )}
      />
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
    backgroundColor: '#023E8A',
    marginVertical: 10,
  },
  tasksContainer: {
    paddingTop: 10,
    flex: 1,
  },
});

export default DoneTasks;
