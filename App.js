import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Signin from './screen/signin'
import Register from './components/dangky'
import Dangnhap from './components/Dangnhap/Dangnhap';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        
        <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown:false}}>
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='Dangnhap' component={Dangnhap} />
        <Stack.Screen name="Register" component={Register} />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1  ,
    // backgroundColor: '#FFFFF',
    // alignItems: 'center',
    // margin: 50,
    // flexDirection: 'row',
    // justifyContent:'space-around',
  },
});

const hinh= StyleSheet.create({
  shape1: {
    width: 100,
    height: 100,
    backgroundColor : '#00FFFF',
    color: 'white',
    alignItems: 'center',
    // justifyContent: 'space-around',
 },
 shape2: {
  width: 100,
  height: 100,
  backgroundColor : '#00CC66',
  color: 'white',
  alignItems: 'center',
  // justifyContent: 'center',
  },
shape3: {
  width: 100,
  height: 100,
  backgroundColor : '#DD0000',
  color: 'white',
  alignItems: 'center',
  // justifyContent: 'center',
  },
});