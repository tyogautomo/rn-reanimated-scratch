import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Animated, { Transition, Transitioning } from 'react-native-reanimated';

import { card1, card2, card3 } from '../../themes/images';

const { width } = Dimensions.get('window');
const CARD_ASPECT_RATIO = 1324 / 863;
const CARD_WIDTH = width / 1.6;
const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO

const column = {
  id: 'column',
  name: 'Column',
  layout: {
    container: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    card: {
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      borderRadius: 15,
      marginVertical: 10,
      marginHorizontal: 10
    }
  }
}

const row = {
  id: 'row',
  name: 'Row',
  layout: {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    card: {
      width: CARD_WIDTH / 2.6,
      height: CARD_HEIGHT / 2.6,
      borderRadius: 8,
      marginVertical: 10,
      marginHorizontal: 10
    }
  }
}

const wrap = {
  id: 'wrap',
  name: 'Wrap',
  layout: {
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    card: {
      width: CARD_WIDTH / 1.5,
      height: CARD_HEIGHT / 1.5,
      borderRadius: 10,
      marginVertical: 10,
      marginHorizontal: 10
    }
  }
}

const layouts = [column, row, wrap];

function Transitions() {

  const ref = useRef(null)
  const transition = <Transition.Change durationMs={400} interpolation="easeInOut" />;

  const [currentLayout, setCurrentLayout] = useState(layouts[1].layout)
  const [images] = useState([card1, card2, card3]);

  return (
    <View style={{ flex: 1 }}>
      <Transitioning.View
        ref={ref}
        style={[styles.container, currentLayout.container]}
        transition={transition}
      >
        {images.map((card, index) => (
          <Image key={index} source={card} style={[currentLayout.card]} />
        ))}
      </Transitioning.View>
      <View style={styles.buttonsContainer}>
        {layouts.map(layout => (
          <Text
            key={layout.id}
            onPress={() => {
              if (ref) {
                ref.current.animateNextTransition();
              }
              setCurrentLayout(layout.layout)
            }} style={styles.menu}
          >
            {layout.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonsContainer: {
    width: '100%',
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  menu: {
    fontSize: 15,
    color: 'white',
    paddingVertical: 7
  }
})

export { Transitions };
