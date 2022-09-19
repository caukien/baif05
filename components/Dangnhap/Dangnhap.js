import { View, Text, StyleSheet } from 'react-native'

import React from 'react'

const Dangnhap = () => {
  return (
    <View style={styles.container}>
      <Text>Đăng nhập</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#e7eaf4',
  }
})

export default Dangnhap