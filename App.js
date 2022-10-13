import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './screen/LoadingScreen';
import Home from './screen/Home';
import Signin from './screen/signin'
import Register from './components/dangky'
import Dangnhap from './components/Dangnhap/Dangnhap';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  const [isloggedin,setLogged] = useState(null)
  const detectLogin= async ()=>{
    const token = await AsyncStorage.getItem('token')
    if(token){
        setLogged(true)
    }else{
        setLogged(false)
    }
 }
useEffect(()=>{
   detectLogin()
},[])

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Dangnhap' component={Dangnhap} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name='Signin' component={Signin} />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}