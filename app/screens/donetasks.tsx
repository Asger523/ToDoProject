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

const DoneTasks = ({navigation}) => {
  const {tasks} = useTasks();

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Done Tasks:</Text>
      </View>
      <View style={styles.seperator} />
      <FlatList
        style={styles.tasksContainer}
        data={tasks.filter(task => task.isDone === true)}
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
  seperator: {
    height: 6,
    backgroundColor: '#6200ee',
    marginVertical: 10,
  },
  tasksContainer: {
    paddingTop: 10,
    flex: 1,
  },
});

export default DoneTasks;
