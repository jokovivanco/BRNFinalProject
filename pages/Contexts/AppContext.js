import React, { useState, createContext, useEffect } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const API_KEY = '3623f7373a43a9e19f8efefa82292e09'
  const [dataTrending, setDataTrending] = useState(null)
  const [dataNewRelease, setDataNewRelease] = useState(null)
  const [dataTopRated, setDataTopRated] = useState(null)
  const [userName, setUserName] = useState('')
  const [watchLater, setWatchLater] = useState([])
  const [watchHistory, setWatchHistory] = useState([])
  const [signIn, setSignIn] = useState(false)
  
  const changeTrending = (data) => setDataTrending(data)
  const changeNewRelease = (data) => setDataNewRelease(data)
  const changeTopRated = (data) => setDataTopRated(data)
  const changeUserName = (data) => setUserName(data)
  const toggleSignIn = () => setSignIn(current => !current)

  const addWatchLater = (data) => {
    if (JSON.stringify(watchLater).includes(JSON.stringify(data))) {
      setWatchLater(current => [...current])
      alert('You can\'t add twice!')
    } else {
      setWatchLater(current => [...current, data])
      alert('This item set to your Watch Later')
    }
  }
  const addWatchHistory = (data) => {
    if (JSON.stringify(watchHistory).includes(JSON.stringify(data))) {
      setWatchHistory(current => [...current])
      alert('You\'ve ever played this movie!')
    } else {
      setWatchHistory(current => [...current, data])
      alert('You\'ve just played the movie, it sets to your Watch History')
    }
  }
  const appState = {
    dataTrending,
    dataNewRelease,
    dataTopRated,
    userName,
    signIn,
    watchLater,
    watchHistory,
    changeTrending,
    changeNewRelease,
    changeTopRated,
    changeUserName,
    toggleSignIn,
    addWatchLater,
    addWatchHistory,
    api_key: API_KEY
  }

  return (
    <AppContext.Provider value={appState}>
      {children}
    </AppContext.Provider>
  )
}