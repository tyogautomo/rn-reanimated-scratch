import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Menu({ navigation }) {

  const onPress = (page) => () => {
    navigation.navigate(page);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menu} onPress={onPress('Values')}>
        <Text style={styles.text}>Values</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu} onPress={onPress('Transitions')}>
        <Text style={styles.text}>Transitions</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  menu: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: 'purple',
    alignItems: 'center',
    width: '70%'
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})

export { Menu };
