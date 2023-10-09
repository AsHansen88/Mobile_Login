import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import axios from 'axios'
import {useState} from 'react'

  
export default function App() {

  const API_key = "AIzaSyASlK0YEkoiwasDiTYyXBz-HnP5ytIKH3c"
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=[API_KEY]"
  const [EnteredEmail, setEnteredEmail] = useState("a@a.dk") 
  const [EnteredPassword, setEnteredPassword] = useState("123456")
  
  async function login(){
    try{
      const response = await axios.post(url + API_key, {
        
        email: "a@a.dk",
        password: "123456",
        returnSecureToken: true
      
      })
      alert("logget ind")
      
    }catch(error){
      alert("Ikke logget ind" + error.response.data.error.errors[0].message)
    }
  
  }
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput 
      onChangeText={newText => setEnteredEmail(newEmail)}
      value={EnteredEmail}
      />
      <TextInput 
      onChangeText={newText => setEnteredPassword(newPassword)}
      value={EnteredPassword}
      />

      <Button 
      title='login'
      onPress={login} 
      />

      <StatusBar style="auto" />
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
});
