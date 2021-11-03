import React from 'react';
import { StyleSheet, View } from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Reanimated from 'react-native-reanimated';

const _touchX = new Reanimated.Value(0);

const App: () => Node = () => {
  const onPanGestureEvent = Reanimated.event(
    [
      {
        nativeEvent: {
          translationX: _touchX,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  )

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onPanGestureEvent}>
        <Reanimated.View style={[styles.view, {transform: [{translateX: _touchX}]}]} />
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
  },
  view: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'red',
    width: 200,
    height: 200,
  }
});

export default App;
