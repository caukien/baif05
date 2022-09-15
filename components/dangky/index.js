import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';

export default function index() {
    return (
        <><View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 190,
            width: '100%'
        }}>
            <Text style={{ fontSize: 30, color: '#2bc2bc', }}>Tạo tài khoản mới</Text>
        </View>
        <View style={{
            width:'100%', height:400, alignItems:'center',}}>
            <TextInput style={{
                height:50,
                width:'80%',
                borderRadius:20,
                marginBottom:40,
                borderWidth:1
            }}placeholder='Họ và tên'/>
            <TextInput style={{
                height:50,
                width:'80%',
                borderRadius:20,
                marginBottom:40,
                borderWidth:1
            }}placeholder='Số điện thoại'/>
            <TextInput style={{
                height:50,
                width:'80%',
                borderRadius:20,
                marginBottom:40,
                borderWidth:1,
            }}placeholder='E-mail'/>
            <TextInput style={{
                height:50,
                width:'80%',
                borderRadius:20,
                marginBottom:30,
                borderWidth:1,
            }}placeholder='Password'/>
            <View>
                <TouchableOpacity style={{height:50, width:250, backgroundColor:'pink', alignItems:'center',justifyContent:'center', borderRadius:30, backgroundColor:'#2bc2bc'}}>
                    <Text>Đăng kí thôi nào</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </>
    );
}