import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Star from '../../assets/SVGComponents/Star'

const HeaderContent = (prop) => {
  return (
    <TouchableOpacity onPress={prop.onPress} style={{marginRight: 16, position: 'relative', width: 280, height: 152, overflow: 'hidden', borderRadius: 5}} >
      <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={{justifyContent: 'flex-end', zIndex: 1, position: 'absolute', left: 0, right: 0, top: 0, height: 152, paddingHorizontal: 16, paddingBottom: 12}}>
        <Text style={{color: '#fafafa', fontWeight: '500', fontSize: 16}}>{prop.title}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}>
          {prop.noStar ? null : <Star />}
          <Text style={{marginLeft: 4, color: '#fafafa', fontSize: 8}}>{prop.star}</Text>
        </View>
      </LinearGradient>
      <Image source={{uri: 'http://image.tmdb.org/t/p/w500' + prop.img}} style={{width: 280, height: 152}} />
    </TouchableOpacity>
  )
}

export default HeaderContent
