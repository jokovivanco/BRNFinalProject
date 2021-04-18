import React, { useState, useEffect, useContext } from 'react'
import { Text, View, StatusBar, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ContentRenderer  from './Components/ContentRenderer'
import HeaderContent  from './Components/HeaderContent'
import axios from 'axios'
import {AppContext} from './Contexts/AppContext'

const HomePage = ({route, navigation}) => {
  const props = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => {
      axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${props.api_key}`)
      .then((response) => {
        props.changeTrending(response.data.results.slice(0, 6)) //dimofif non dinamis karena banyak gambar di API ini bernilai null
      })
      .catch(() => {console.log('error homepage')})

      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${props.api_key}&sort_by=release_date.desc&page=1`) 
      .then((response) => {
        props.changeNewRelease(response.data.results.slice(0, 6)) //dimodif non dinamis karena banyak gambar di API ini bernilai null
      })
      .catch(() => {console.log('error homepage')}) 

      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${props.api_key}&sort_by=vote_count.desc&page=2`) 
      .then((response) => {
        props.changeTopRated(response.data.results.slice(0, 6)) //dimofif non dinamis karena banyak gambar di API ini bernilai null
      })
      .catch(() => {console.log('error homepage')})
    }, 3000)
  }, [])

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => e.preventDefault())
  }, [])

  return (
    <View style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
      <ScrollView style={{flex: 1, paddingTop: 16, backgroundColor: '#fafafa'}}>
        {/* Header */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 16, width: '100%'}}>
          <View>
            <Text style={{fontSize: 20, fontWeight: '700', color: '#212121'}}>Halo, {props.userName}</Text>
            <Text style={{fontSize: 12, color: '#212121', opacity: .5}}>Let’s explore your loved movies here</Text>
          </View>
          <View style={{width: 64, height: 64, borderRadius: 32, backgroundColor: '#212121', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../assets/user-photo.png')} style={{width: 52, height: 52}}/>
          </View>
        </View>

        <View style={{paddingHorizontal: 16, marginTop: 32, marginBottom: 65/2}}>
          <Text style={{color: '#B9B9B9', fontWeight: '700', fontSize: 16}}>Trending</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{marginTop: 16, flexDirection: 'row'}}>
            {
              props.dataTrending ? 
              props.dataTrending.map((item, i) => (
                <HeaderContent key={`1 - ${i}`} onPress={() => navigation.navigate('DetailPage', {id: item.id})} title={item.title} star={item.vote_average} img={item.poster_path} />
              ))
              : 
              <Text>Loading images...</Text>
            }
          </ScrollView>
        </View>

        <View style={{paddingHorizontal: 16, marginBottom: 65/2}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <Text style={{color: '#B9B9B9', fontWeight: '700', fontSize: 16}}>New Release</Text>
            <TouchableOpacity><Text style={{fontSize: 10, color: '#21C3D9'}}>See all</Text></TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {
              props.dataNewRelease ? 
              props.dataNewRelease.map((item, i) => (
                <ContentRenderer key={`2 - ${i}`} onPress={() => navigation.navigate('DetailPage', {id: item.id})} title={item.title} star={item.vote_average} img={item.poster_path} />
              ))
              : 
              <Text>Loading images...</Text>
            }
          </View>
        </View>
        
        <View style={{paddingHorizontal: 16, marginBottom: 65/2}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <Text style={{color: '#B9B9B9', fontWeight: '700', fontSize: 16}}>Top Rated</Text>
            <TouchableOpacity><Text style={{fontSize: 10, color: '#21C3D9'}}>See more</Text></TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {
              props.dataTopRated ? 
              props.dataTopRated.map((item, i)=> (
                <ContentRenderer key={`3 - ${i}`} onPress={() => navigation.navigate('DetailPage', {id: item.id})} title={item.title} star={item.vote_average} img={item.poster_path} />
              ))
              : 
              <Text>Loading images...</Text>
            }
          </View>
        </View>


      </ScrollView>
    
    </View>
  )
}

export default HomePage