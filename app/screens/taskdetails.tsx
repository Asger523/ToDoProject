import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const TaskDetails = ({route}) => {
  const {task} = route.params;
  const formatDate = task.date.toDateString();

  return (
    <SafeAreaView style={styles.background}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Task Details</Text>
      </View>

      {/* Seperator */}
      <View style={styles.seperator} />

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{task.title + ':'}</Text>
      </View>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{task.description}</Text>
      </View>

      {/* Due date */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{formatDate}</Text>
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
  seperator: {
    height: 6,
    backgroundColor: '#6200ee',
    marginVertical: 10,
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    color: '#fff',
  },
  descriptionContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 5,
  },
  descriptionText: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
export default TaskDetails;
