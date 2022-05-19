import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Square </Text>
      <View style={styles.square} />
      <Text style={styles.header}> Rectangle </Text>
      <View style={styles.rectangle} />
      <Text style={styles.header}> Circle </Text>
      <View style={styles.circle} />
      <Text style={styles.header}> Triangle </Text>
      <View style={styles.triangle} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 16,
    marginTop: 20,
  },
  square: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
  },
  rectangle: {
    width: 80 * 2,
    height: 80,
    backgroundColor: 'blue',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: 'orange',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderStyle: 'solid',
    borderBottomColor: 'green',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});

export default App;