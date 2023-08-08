import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Analyzer } from 'react-native-accessibility-analyzer';

export default function App() {

  return (
    <Analyzer>
      <View style={styles.container}>
        <Text>Result:</Text>
      </View>
    </Analyzer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
