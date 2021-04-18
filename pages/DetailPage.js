import React, { useState, useEffect, useContext } from 'react'
import { Image, StatusBar, View, Text, Touchable } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import BackArrow from '../assets/SVGComponents/BackArrow'
import Star from '../assets/SVGComponents/Star'
import LittlePiece from '../assets/SVGComponents/LittlePiece'
import axios from 'axios'
import Ionicons from '@expo/vector-icons/Ionicons'
import { AppContext } from './Contexts/AppContext'


const DetailPage = ({route, navigation: {goBack}}) => {
  const props = useContext(AppContext)
  const {id} = route.params;
  const [title, setTitle] = useState('')
  const [poster, setPoster] = useState('http://image.tmdb.org/t/p/w500')
  const [rating, setRating] = useState('')
  const [released, setReleased] = useState('')
  const [duration, setDuration] = useState(0)
  const [genre, setGenre] = useState([])
  const [overview, setOverview] = useState('')
  const [fullOverview, setFullOverview] = useState(false)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${props.api_key}`) //dimofif karena banyak gambar di API bernilai null
    .then((response) => response.data)
    .then((response) => {
      setTitle(response.original_title)
      setPoster(current => current + response.poster_path)
      setRating(response.vote_average)
      setReleased(response.release_date)
      setDuration(response.runtime)
      setGenre(response.genres)
      setOverview(response.overview)
    })
    .catch(() => {
      alert('Halaman tidak ditemukan, mohon laporkan jika anda menumkan tulisan ini.')
      return goBack()
    })
  }, [])

  return (
    <View style={{flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#fafafa'}}>
      <ScrollView>
        <View style={{position: 'absolute', top: 16, left: 16, zIndex: 1}}>
          <TouchableOpacity onPress={() => goBack()}>
            <BackArrow />
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 48}}>
          <View style={{height: 400, borderBottomLeftRadius: 20, overflow: 'hidden'}}>
            <Image source={{uri: poster}} style={{width: '100%', flex: 1, resizeMode: 'cover'}} />
            <TouchableOpacity onPress={() => {
              props.addWatchLater({id, title, poster})
            }} style={{marginTop: 5, flexDirection: 'row', paddingVertical: 10, borderLeftBottomRadius: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EE8D33'}}>
              <Ionicons name='add-circle' size={24} color='#fafafa' /><Text style={{color: 'white', paddingLeft: 10, fontWeight: 'bold'}}>Add to Watch Later</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 14, paddingRight: 16}}>
            <Text style={{fontSize: 26, fontWeight: '500'}}>{title}</Text>
          </View>
          <View style={{marginTop: 16, flexDirection: 'row'}}>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <Text style={{fontSize: 12, color: '#B9B9B9'}}>Rating</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Star />
                <Text style={{fontSize: 10, color: '#212121'}}> {rating}</Text>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <Text style={{fontSize: 12, color: '#B9B9B9'}}>Released</Text>
              <Text style={{fontSize: 10, color: '#212121'}}>{released}</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <Text style={{fontSize: 12, color: '#B9B9B9'}}>Duration</Text>
              <Text style={{fontSize: 10, color: '#212121'}}>{duration}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 8, paddingBottom: 20}}>
            {
              genre.length > 0 ? 
              genre.map(
                (item) => (
                  <TouchableOpacity key={item.id} onPress={()=>alert('This feature is not coming yet')}>
                    <View style={{marginTop: 8, borderRadius: 200, paddingHorizontal: 12, paddingVertical: 8, marginRight: 8, backgroundColor: '#212121', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 10, color: '#fafafa'}}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )
              )
              : null
            }
          </View>
        </View>
      </ScrollView>
      <View style={{backgroundColor: '#212121'}}>
        <LittlePiece />
        <View style={{paddingLeft: 48, paddingTop: 16, paddingBottom: 10, paddingRight: 32,}}>
          <Text style={{color: '#fafafa', fontSize: 18, fontWeight: '700', letterSpacing: .8}}>Synopsis</Text>
          <Text style={{color: '#B9B9B9', marginTop: 10, lineHeight: 22}}>{
          overview.length <= 100 ?
            overview
          : fullOverview ? 
            (<Text>
              {overview} <Text style={{color: '#fafafa'}} onPress={() => setFullOverview(current => !current)}> ...readless</Text>
            </Text>): (<Text>
              {overview.substr(0, 100)} <Text style={{color: '#fafafa'}} onPress={() => setFullOverview(current => !current)}> ...readmore</Text>
            </Text>)
          }</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=> props.addWatchHistory({id, title, poster})} style={{flex: 1, paddingVertical: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2BC39B', width: '100%'}}>
        <Text style={{color: '#fafafa', fontSize: 16, fontWeight: 'bold'}}>PLAY NOW</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DetailPage
