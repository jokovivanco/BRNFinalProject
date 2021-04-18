import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Ionicons from '@expo/vector-icons/Ionicons'

import SplashScreen from '../pages/SplashScreen'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'
import ProfilePage from '../pages/ProfilePage'
import FavoritePage from '../pages/FavoritePage'
import SearchPage from '../pages/SearchPage'
// import Example from '../pages/SVGImportExample'

import { AppProvider, AppContext } from '../pages/Contexts/AppContext'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      tabStyle: {height: 40, shadowOpacity: 0}
    }} screenOptions={({ route }) => ({
      tabBarLabel: '',
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomePage') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'FavoritePage') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'SearchPage') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'ProfilePage') {
          iconName = focused ? 'person' : 'person-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
      tabBarOptions={{
        activeTintColor: '#2BC39B',
        inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="HomePage" component={HomePage} />
      <Tab.Screen name="FavoritePage" component={FavoritePage} />
      <Tab.Screen name="SearchPage" component={SearchPage} />
      <Tab.Screen name="ProfilePage" component={ProfilePage} />
    </Tab.Navigator>
  );
}

const index = () => {
  return (
    <AppProvider>
      <NavigationWrapper />
    </AppProvider>
  )
}

const NavigationWrapper = () => {
  const props = useContext(AppContext)
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.signIn ? (
          <>
            <Stack.Screen name='HomeTabs' component={HomeTabs} options={{headerShown: false}}/>
            <Stack.Screen name='DetailPage' component={DetailPage} options={{headerShown: false}}/> 
          </>
        ) : 
          <>
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown: false}} />
            <Stack.Screen name='LoginPage' component={LoginPage} options={{headerShown: false}} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

export default index
