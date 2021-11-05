import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Reanimated, {useValue, Value} from 'react-native-reanimated';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App1" component={App1} />
        <Stack.Screen name="App2" component={App2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App1: () => Node = ({navigation}) => {
  const _touchX = useRef(new Reanimated.Value(0));
  const onPanGestureEvent = Reanimated.event(
    [
      {
        nativeEvent: {
          translationX: _touchX.current,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  useEffect(() => {
    console.log('Mounted App1');
    return () => console.log('Unmounted App1');
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('App2');
        }}>
        <Text>Go to App2</Text>
      </TouchableOpacity>

      <PanGestureHandler
        onGestureEvent={onPanGestureEvent}
        style={{backgroundColor: 'yellow'}}
        width={200}
        height={5000}>
        <Reanimated.View
          style={[styles.view1, {transform: [{translateX: _touchX.current}]}]}
        />
      </PanGestureHandler>
    </View>
  );
};

const App2: () => Node = ({navigation}) => {
  const _touchX = useRef(new Reanimated.Value(0));
  const onPanGestureEvent = Reanimated.event(
    [
      {
        nativeEvent: {
          translationX: _touchX.current,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  useEffect(() => {
    console.log('Mounted App2');
    return () => console.log('Unmounted App2');
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('App1');
        }}>
        <Text>Go to App1</Text>
      </TouchableOpacity>
      <PanGestureHandler
        onGestureEvent={onPanGestureEvent}
        style={{backgroundColor: 'yellow'}}
        width={200}
        height={5000}>
        <Reanimated.View
          style={[styles.view2, {transform: [{translateX: _touchX.current}]}]}
        />
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
  },
  view1: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'blue',
    width: 200,
    height: 200,
  },
  view2: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'green',
    width: 200,
    height: 200,
  },
});

export default App;
