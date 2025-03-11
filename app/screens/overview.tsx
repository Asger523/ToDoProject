import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {TaskItem} from './../components/TaskItem';
import {useTasks} from '../contexts/tasks.context';

const Overview = ({navigation}) => {
  const {tasks, clearTasks} = useTasks();

  return (
    <SafeAreaView style={styles.background}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>To-Do App</Text>
      </View>

      {/*  Add Task button */}
      <View style={styles.addTaskContainer}>
        <Button
          title="Add Task"
          color={'#fff'}
          onPress={() => navigation.navigate('AddTask')}
        />
      </View>

      {/* Simple seperator */}
      <View style={styles.seperator} />

      {/* Task List */}
      {tasks.length === 0 ? (
        <View style={styles.hugeSeperator}>
          <Text style={styles.errorNoTasks}>No tasks available</Text>
        </View>
      ) : (
        <FlatList
        tasks.filter(task =>task.isDone !== true)
          style={styles.tasksContainer}
          data={tasks}
          renderItem={({item}) => (
            <TaskItem
              task={item}
              onPressGoToDetails={() =>
                navigation.navigate('TaskDetails', {task: item})
              }
            />
          )}
        />
      )}

      {/* View Done Tasks */}
      <View style={styles.addTaskContainer}>
        <Button
          title="View done tasks"
          color={'#fff'}
          onPress={() => navigation.navigate('DoneTasks')}
        />
      </View>
      {/* Clear Button */}
      {tasks.length > 0 && (
        <View style={styles.addTaskContainer}>
          <Button color="#fff" title="Clear All Tasks" onPress={clearTasks} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#3b3b3b',
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#6200ee',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  seperator: {
    height: 6,
    backgroundColor: '#6200ee',
  },
  addTaskContainer: {
    backgroundColor: '#6200ee',
    marginBottom: 10,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 6,
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
  },
  tasksContainer: {
    paddingTop: 10,
    flex: 1,
  },
  errorNoTasks: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  hugeSeperator: {
    flex: 1,
  },
});

export default Overview;
