/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Image, Button, StyleSheet, Text, TextInput, View,
} from 'react-native';



function App(): JSX.Element {
  
  const [Author, setAuthor]=useState("");
  const [Title, setTitle]=useState("");
  const [Genre, setGenre] = useState("");
  const [NumberofPages, setNumberofPages] = useState("");
  const [display, setDisplay] = useState(false);

return (
  <SafeAreaView >
    <ScrollView> 

    <View style={styles.container}>
      <Image source={require("./img/book.png")} style={{height: 204, width:350, alignContent:'center'}}/> 
      <Text style={{fontSize: 25, color: '#528699', padding: 50}}>Books for Book Worms</Text>

      <Text style={styles.title}>Book Title</Text>
      <TextInput style={styles.input} textAlign= 'left' placeholder="Book title" value={Title} onChangeText={(text) => setTitle(text)} />

      <Text style={styles.title}>Author:</Text>
      <TextInput placeholder="Enter author" />
      <Text style={styles.title}>Genre:</Text>
      <TextInput placeholder="Enter Genre" />
    
      <Text style={styles.title}>Number of Pages:</Text>
      <TextInput placeholder="Enter pages" keyboardType="numeric" />
      <Button title='submit'/>

    </View>
    </ScrollView>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 24,
    backgroundColor: '#eaeaea',
    
  },
  title: {
  marginTop: 16,
  paddingVertical: 8,
  backgroundColor: '#528699',
  textAlign: 'center',
  fontSize: 10,
  fontWeight: 'bold'
  },
  input: {

  },
});
export default App;