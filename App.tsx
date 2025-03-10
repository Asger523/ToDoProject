import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Overview from './app/screens/overview';
import {TaskProvider} from './app/contexts/tasks.context';
import TaskDetails from './app/screens/taskdetails';

const Stack = createNativeStackNavigator();

const App = () => {
  const scrOptions = {
    headerStyle: {backgroundColor: '#6200ee'},
    headerTitleStyle: {color: 'white'},
    headerBackTitleVisible: false,
    headerTintColor: 'white',
  };

  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={scrOptions}>
          <Stack.Screen
            name="Overview"
            options={{headerShown: false}}
            component={Overview}
          />
          <Stack.Screen name="TaskDetails" component={TaskDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
};

export default App;
