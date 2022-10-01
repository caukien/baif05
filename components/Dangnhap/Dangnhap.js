import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import Logo3 from '../../assets/anh/logo3.png';
import React from 'react'

export default function Dangnhap(){
    return(
        <View style={styles.container}>
          <View>
            <Image source={Logo3} style={{height:300, width:200,marginBottom:50}}/>
          </View>
          <View style={styles.o_nhap}>
            <TextInput style={styles.css_nut}placeholder='Email' />
            <TextInput style={styles.css_nut}placeholder='Mật khẩu' />
            <TouchableOpacity style={styles.css_button}>
              <Text style={{fontWeight:'bold'}}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    width:'100%',
    // justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#EAEBEB',
  },
  o_nhap:{
    width:'100%',
    height:300,
  },
  css_nut:{
    paddingHorizontal:13,
    height:50,
    width:'80%',
    borderRadius:10,
    marginBottom:40,
    borderWidth:1,
    alignSelf:'center',
    backgroundColor:'white'
  },
  css_button:{
    height:50,
        width:250,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginBottom:40,
        paddingHorizontal:20,
        alignSelf:'center',
        backgroundColor:'#2bc2bc'
  }
})