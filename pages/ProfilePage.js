import React, { useContext, useState, useEffect } from 'react'
import { Image, ImageBackground, StatusBar, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import MoreVertical from '../assets/SVGComponents/MoreVertical'
import SettingButton from '../assets/SVGComponents/SettingButton'
import { LinearGradient } from 'expo-linear-gradient'
import { AppContext } from './Contexts/AppContext'
import WatchRenderer from './Components/WatchRenderer'

const ProfilePage = ({navigation}) => {
  const props = useContext(AppContext)
  const [toggleLogout, setToggleLogout] = useState(false)

  useEffect(() => {
    return () => {
      props.changeUserName('')
    }
  }, [])

  return (
    <View style={{flex: 1, justifyContent: 'center', paddingTop: StatusBar.currentHeight, backgroundColor: '#fafafa'}}>
      <ScrollView style={{paddingTop: 36}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 16}}>
          {toggleLogout ? 
          <TouchableOpacity onPress={props.toggleSignIn} style={{borderRadius: 5, paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#DC3545'}}>
            <Text style={{color:'#fafafa', fontWeight: '700'}}>LOG OUT</Text>
          </TouchableOpacity> : null }
          <TouchableOpacity onPress={()=>setToggleLogout(current => !current)}>
            <MoreVertical/>
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center', width: 168, flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
          <View style={{alignItems: 'center'}}>
            <View style={{overflow: 'hidden', borderRadius: 20}}>
              <Image source={require('../assets/user-photo.png')} style={{width: 168, height: 152}} />
            </View>
            <Text style={{color: '#212121', marginTop: 24, fontSize: 16, fontWeight: '700'}}>{props.userName}</Text>
            <Text style={{color: '#626262', marginTop: 2, fontSize: 16, fontWeight: '500'}}>@{props.userName}</Text>
          </View>
          <View style={{position: 'absolute', top: -30, left: -30}}>
            <TouchableOpacity onPress={() => alert('This feature is not present yet')}>
              <SettingButton /> 
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingHorizontal: 16, marginBottom: 65}}>
          <View style={{marginTop: 32}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
              <Text style={{color: '#B9B9B9', fontWeight: '700', fontSize: 16}}>Watch Later</Text>
              <TouchableOpacity><Text style={{fontSize: 10, color: '#21C3D9'}}>See all</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {
                props.watchLater.length > 0 ?
                  props.watchLater.map((item, i) => 
                    <WatchRenderer key={`4 - ${i}`} onPress={() => navigation.navigate('DetailPage', {id: item.id})} title={item.title} img={item.poster} />
                  )
                :
                (
                  <Text>No Watch Later.</Text>
                )
                
              }
            </View>      
          </View>
          <View style={{marginTop: 32}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
              <Text style={{color: '#B9B9B9', fontWeight: '700', fontSize: 16}}>Watch History</Text>
              <TouchableOpacity><Text style={{fontSize: 10, color: '#21C3D9'}}>See all</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {
                props.watchHistory.length > 0 ?
                  props.watchHistory.map((item, i) => 
                    <WatchRenderer key={`5 - ${i}`} onPress={() => navigation.navigate('DetailPage', {id: item.id})} title={item.title} img={item.poster} />
                  )
                :
                (
                  <Text>No Watch History yet.</Text>
                )
                
              }
            </View>     
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProfilePage
