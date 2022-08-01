/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Card from './components/Card'


function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Card title='Eddard Stark' text="Winter is coming" />
      <Card title="Hasan" text="Hmm" />
      <Card title="Bekir Teke" text="Bir günde yaklaşık 50km yürüdüm." />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'grey',
  },

})



export default App;