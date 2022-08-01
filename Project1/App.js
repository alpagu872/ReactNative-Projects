import React from 'react';
import { Text, View, SafeAreaView, Button, StyleSheet } from 'react-native';



const App = () => { //Arrow function olayı
  // function App(){} şeklinde de kullanılabilir

  function sayHelloWhenClicked(event) {
    return console.log('Hi! ' + event);
  }


  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text>Hello World</Text>
        <Text>Hello world 1</Text>
      </View>
      <View>
        <Text>Hello world 3</Text>
        <Button
          title='Hi Console'
          onPress={sayHelloWhenClicked}
          disabled={false}
          style={styles.button}
          color="lightcoral"
        />
      </View>
    </SafeAreaView>
  )

};


const AppFlexStructure = () => { //Arrow function olayı
  // function App(){} şeklinde de kullanılabilir

  function sayHelloWhenClicked(event) {
    return console.log('Hi! ' + event);
  }


  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.upper_view_container}>
        <Text>Hello World</Text>

      </View>
      <View style={styles.bottom_view_container} >
        <Text>Merhaba Dünya</Text>

      </View>
    </SafeAreaView>
  )

};

const styles = (StyleSheet.create({
  container1: {
    margin: 10,
    backgroundColor: "lightcoral",
    borderRadius: 10,
    padding: 10
  },

  container: {
    flex: 1,
  },
  upper_view_container: {
    flex: 1,
    margin: 10,
    backgroundColor: "lightcoral",
    borderRadius: 10,
    padding: 10
  },
  bottom_view_container: {
    flex: 1,
    margin: 10,
    backgroundColor: "orange",
    borderRadius: 10,
    padding: 10
  },
}))

export default AppFlexStructure;