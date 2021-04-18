import React, { useEffect } from 'react'
import { View, Button } from 'react-native'
import MovieCat from '../assets/SVGComponents/MovieCat'
import Logo from '../assets/SVGComponents/Logo'

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => navigation.navigate('LoginPage'), 3000)
  }, [])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafafa'}}>
      <Logo />
      <View style={{marginTop: 26}}>
       <MovieCat />
      </View>
    </View>
  )
}

export default SplashScreen
