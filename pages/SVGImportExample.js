import React from 'react'
import { Text, View, Button } from 'react-native'
import BackArrow from '../assets/SVGComponents/BackArrow'
import MovieCat from '../assets/SVGComponents/MovieCat'
import Logo from '../assets/SVGComponents/Logo'
import Home from '../assets/SVGComponents/Home'
import HomeActive from '../assets/SVGComponents/HomeActive'
import Favorite from '../assets/SVGComponents/Favorite'
import FavoriteActive from '../assets/SVGComponents/FavoriteActive'
import Search from '../assets/SVGComponents/Search'
import SearchActive from '../assets/SVGComponents/SearchActive'
import User from '../assets/SVGComponents/User'
import UserActive from '../assets/SVGComponents/UserActive'
import PlayNowButton from '../assets/SVGComponents/PlayNowButton'
import SettingButton from '../assets/SVGComponents/SettingButton'
import Star from '../assets/SVGComponents/Star'

const SplashScreen = ({navigation}) => {
  return (
    <View>
      <Text>splash screen</Text>
      <Button title='next' onPress={() => navigation.navigate('Login')} />
      <BackArrow />
      
      <Logo />
      <MovieCat />
      <Home />
      <HomeActive />
      <Favorite />
      <FavoriteActive />
      <Search />
      <SearchActive />
      <User />
      <UserActive />
      <PlayNowButton />
      <SettingButton />
    </View>
  )
}

export default SplashScreen
