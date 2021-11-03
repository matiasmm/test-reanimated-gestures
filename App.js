/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme, Animated} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Reanimated from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const AnimatedScrollView = Reanimated.createAnimatedComponent(ScrollView);

const _touchX = new Reanimated.Value(0);

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onGestureEvent = () => {

  };

  console.log(46);

  return (
    <SafeAreaView style={backgroundStyle}>
      <PanGestureHandler>
        <Reanimated.View style={[styles.view, {transform: [{translateX: _touchX}]}]}>
          <Svg width={100} height={100} style={{backgroundColor: 'green'}}>
            <Circle x={250} y={250} r={100} fill="red" />
          </Svg>
        </Reanimated.View>
      </PanGestureHandler>
      <Svg width={500} height={500} style={{backgroundColor: 'yellow'}}>
        <Circle x={250} y={250} r={100} fill="red"/>
      </Svg>
      <Svg width={500} height={500} style={{backgroundColor: 'pink'}}>
        <Circle x={250} y={250} r={100} fill="red"/>
      </Svg>
      <Svg width={500} height={500} style={{backgroundColor: 'blue'}}>
        <Circle x={250} y={250} r={100} fill="red"/>
      </Svg>
      <Svg width={500} height={500} style={{backgroundColor: 'orange'}}>
        <Circle x={250} y={250} r={100} fill="red"/>
      </Svg>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

});

export default App;
