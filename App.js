import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Signin from './screen/signin'
import Index from './components/dangky'
import Index_dangnhap from './components/dangnhap'
export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={hinh.shape1}>
        <Text>hinh 1</Text>
        <StatusBar style="auto" />
      </View>

      <View style={hinh.shape2}>
        <Text>hinh 2</Text>
        <StatusBar style="auto" />
      </View>

      <View style={hinh.shape3}>
        <Text>hinh 3</Text>
        <StatusBar style="auto" />
      </View> */}
      {/* <Signin /> */}
      {/* <Index/> */}
      <Index_dangnhap/>
    </View>
    
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