import React, { useState, useEffect, useContext } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import {AppContext} from './Contexts/AppContext'

const LoginPage = ({navigation}) => {
  const props = useContext(AppContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const PASSWORD = 'admin'
  const loginCheck = () => {
    if (username&&password) {
      if (password == PASSWORD) {
        props.changeUserName(username)
        return props.toggleSignIn()
      }
      alert('user or password is incorrect.')
    } else {
      if (!username) {
        alert('please fill the user field!')
      } else {
        alert('please fill thepassword field!')
      }
    }
  }

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => e.preventDefault())
  }, [])

  return (
    <View style={{paddingHorizontal: 46, flex: 1, paddingTop: StatusBar.currentHeight ,backgroundColor: '#212121', alignItems: 'center'}}>
      <View style={{marginTop: 88}}>
        <Text style={{fontSize: 32, color: '#fafafa', fontWeight: '700'}}>Welcome Back!</Text>
        <Text style={{color: '#B9B9B9', paddingTop: 10, marginRight: 100}}>Let’s find out what the best movies you are loved</Text>
      </View>
      <View style={{marginTop: 80, width: '100%', paddingBottom: 80}}>
        <TextInput onChangeText={(text) => setUsername(text)} style={{borderRadius: 10, backgroundColor: '#2E2E2E', height: 63, color:'#fafafa', paddingLeft: 20, marginBottom: 20}} placeholderTextColor='#6B6B6B' placeholder='Some user' />
        <TextInput secureTextEntry={true} onChangeText={(pass) => setPassword(pass)} style={{borderRadius: 10, backgroundColor: '#2E2E2E', height: 63, color:'#fafafa', paddingLeft: 20}} placeholderTextColor='#6B6B6B' placeholder='Some password' />
      </View>
      <View style={{marginBottom: 24, width: '100%', flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Text style={{color: '#fafafa'}}>Doesn't have an account? <Text style={{fontWeight: '700'}}>Register</Text></Text>
          <TouchableOpacity onPress={loginCheck} style={{flexDirection: 'row', marginTop: 16}}>
            <View style={{borderRadius: 10, backgroundColor: '#fafafa', width: '100%', paddingVertical: 23, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#212121', fontWeight: '700', fontSize: 16}}>Sign In</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginPage