import React from 'react';
import { Button,StyleSheet,Text,View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.dummyText}>
        HIIIIIIIIIII
      </Text>
      <Button title='WOHO' />
      <Text>555555555</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    color: 'red',
    margin: 20,
    borderWidth: 2,
    padding: 13,
    marginBottom: 20,
    borderRadius: 6
  }
});
