import React from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const WatchRenderer = (props) => {
  return (
    <View style={{width: '33.3%', paddingHorizontal: 8, paddingTop: 16}}>
      <TouchableOpacity onPress={props.onPress}>
          <LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)']} style={{borderRadius: 5, justifyContent: 'flex-end', zIndex: 1, position: 'absolute', left: 0, right: 0, top: 0, height: 150, paddingBottom: 5}}>
            <Text style={{color: '#fafafa', fontWeight: '500', fontSize: 12, textAlign: 'center'}}>{props.title}</Text>
          </LinearGradient>
          <Image source={{uri: props.img}} style={{borderRadius: 5, width: 109, height: 150}}/>
      </TouchableOpacity>
    </View>
  )
}

export default WatchRenderer
