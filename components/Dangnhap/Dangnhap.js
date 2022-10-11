import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import Logo3 from '../../assets/anh/logo3.png';
import React from 'react'
import Register from '../dangky';

export default function Dangnhap({navigation}){
    return(
        <View style={styles.container}>
          <View>
            <Image source={Logo3} style={{height:300, width:230,marginBottom:50,}}/>
          </View>
          <View style={styles.o_nhap}>
            <TextInput style={styles.css_nut}placeholder='Email' />
            <TextInput style={styles.css_nut}placeholder='Mật khẩu' />


            <TouchableOpacity style={styles.css_button}>
              <Text style={{fontWeight:'bold'}}>Đăng nhập</Text>
            </TouchableOpacity>


            <Text style={{alignSelf:'center', fontWeight:'500'}}>Bạn chưa gia nhập với chúng tôi ư, 
              <TouchableOpacity style={{padding:0}} onPress ={() => navigation.navigate('Register')}>
                <Text style={{color:'red'}}> Đăng ký</Text>
              </TouchableOpacity>
            </Text>
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
    // backgroundColor:'green'
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