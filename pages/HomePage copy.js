import React, { useState, useEffect, useContext } from 'react'
import { Text, View, StatusBar, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import TrendingContent from './Components/TrendingContent'
import NewReleaseContent  from './Components/TopRatedContent'
import TopRatedContent  from './Components/ContentRenderer'
import BlankTrending  from './Components/BlankTrending'
import BlankNewRelease  from './Components/BlankNewRelease'
import axios from 'axios'
import {AppContext} from './Contexts/AppContext'

const HomePage = ({route, navigation}) => {
  const props = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => {
      axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${props.api_key}`)
      .then((response) => {
        props.changeTrending(response.data.results.slice(0, 5)) //dimofif non dinamis karena banyak gambar di API ini bernilai null
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
            <Image source={props.userPicture} style={{width: 52, height: 52}}/>
          </View>
        </View>
        {/* Trending Today */}
        <View style={{paddingLeft: 16, marginTop: 24}}>
          <View style={{marginBottom: 16}}>
            <Text style={{color: '#B9B9B9', fontWeight: '700', fontSize: 16}}>Trending Today</Text>
          </View>
          {
            props.dataTrending ? 
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={props.dataTrending}
              keyExtractor={(item, i) => `${item.id} ${i}`}
              renderItem={({item}) => <TrendingContent onPress={() => navigation.navigate('DetailPage', {id: item.id})} title={item.title} star={item.vote_average} img={item.backdrop_path} /> }
            />
            :
            <BlankTrending />
          }
        </View>
        {/* New Release */}
        <View style={{paddingHorizontal: 16, marginTop: 32}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <Text style={{color: '#B9B9B9', fontWeight: '700', fontSize: 16}}>New Release</Text>
            <TouchableOpacity><Text style={{fontSize: 10, color: '#21C3D9'}}>See all</Text></TouchableOpacity>
          </View>
            {
              props.dataNewRelease ? 
              <FlatList
                numColumns={3}
                data={props.dataNewRelease}
                keyExtractor={(item, i) => `${item.id} ${i}`}
                renderItem={({item}) => <NewReleaseContent onPress={() => navigation.navigate('DetailPage', {id: item.id})} title={item.title} star={item.vote_average} img={item.poster_path} /> }
              />
              :
              <>
                <BlankNewRelease marginTop={16} />
                <BlankNewRelease marginTop={16} />
              </>
            }
        </View>
        {/* Top Rated */}
        <View style={{paddingHorizontal: 16, marginTop: 32, marginBottom: 65/2}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: 'blue'}}>
            <Text style={{color: '#B9B9B9', fontWeight: '700', fontSize: 16}}>Top Rated</Text>
            <TouchableOpacity><Text style={{fontSize: 10, color: '#21C3D9'}}>See more</Text></TouchableOpacity>
          </View>
          <View style={{backgroundColor: 'red', flexDirection: 'row'}}>
            {
              props.dataTopRated ? 
              props.dataTopRated.map(item => (
                <NewReleaseContent onPress={() => navigation.navigate('DetailPage', {id: item.id})} title={item.title} star={item.vote_average} img={item.poster_path} />
              ))
              : 
              <>
                <BlankNewRelease marginTop={16} />
                <BlankNewRelease marginTop={16} />
              </>
            }
          </View>
        </View>
      </ScrollView>
    
    </View>
  )
}

export default HomePage