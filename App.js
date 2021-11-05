import React, {useRef} from 'react';
import { StyleSheet, View } from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Reanimated, {useValue, Value} from 'react-native-reanimated';



const App: () => Node = () => {
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
  )

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onPanGestureEvent} style={{backgroundColor: 'yellow'}} width={200} height={5000}>
        <Reanimated.View style={[styles.view, {transform: [{translateX: _touchX.current}]}]} />
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
    backgroundColor: 'blue',
    width: 200,
    height: 200,
  }

});

export default App;
