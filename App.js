
import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'
// import the different screens
import Loading from './component/auth/Loading'
import SignUp from './component/auth/SignUp'
import Login from './component/auth/Login'
import Main from './component/main'
// create our app's navigation stack
const App = SwitchNavigator(
  {

    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)
export default App


