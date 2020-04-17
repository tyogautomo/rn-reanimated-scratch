import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Animated, {
  Value,
  useCode,
  set,
  cond,
  not,
  add,
  eq,
  block,
  Clock,
  clockRunning,
  startClock,
  stopClock,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';
import { useMemoOne } from 'use-memo-one';

import { card1 } from '../../themes/images';

const { width } = Dimensions.get('window');
const CARD_ASPECT_RATIO = 1324 / 863;
const CARD_WIDTH = width / 1.2;
const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO

const duration = 2000;

function Values() {

  const [isShow, setShow] = useState(true);

  // const { time, clock, progress } = useMemo(() => ({
  //   time: new Value(0),
  //   clock: new Clock(0),
  //   progress: new Value(0)
  // }), []);
  const time = new Value(0)
  const clock = new Clock(0)
  const progress = new Value(0)
  const opacity = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: isShow ? [0, 1] : [1, 0],
    extrapolate: Extrapolate.CLAMP
  });

  useCode(() => (
    block([
      // 1. if the clock isnt running, start the clock and save the original clock value to time
      cond(
        not(clockRunning(clock)),
        [
          startClock(clock),
          set(time, clock)
        ]
      ),
      // 2. calculate the progress of the animation
      set(progress, interpolate(clock, {
        inputRange: [time, add(time, duration)],
        outputRange: [0, 1],
        extrapolate: Extrapolate.CLAMP
      })),
      // 3. if the animation is over/finished, stop the clock
      cond(
        eq(progress, 1),
        stopClock(clock)
      )
    ])
  ), [isShow]);

  return (
    <View style={styles.container}>
      <Animated.View style={[{ opacity }]}>
        <Image source={card1} style={styles.card} />
      </Animated.View>
      <TouchableOpacity onPress={() => setShow(prev => !prev)} style={styles.button}>
        <Text>{isShow ? 'HIDE' : 'SHOW'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: 'purple',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 15
  },
  button: {
    position: 'absolute',
    backgroundColor: 'skyblue',
    paddingHorizontal: 20,
    paddingVertical: 5,
    top: 500,
    elevation: 2
  }
});

export { Values };
