import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, Image } from 'react-native';
import Logo from '../anh/logo.png';
export default function signin() {
    return (
        <View>
            <View style={{justifyContent: "center"}}>
                <View styles={{ alignItems: 'center' }}>
                    <Image source={Logo} style={styles.logo} />
                </View>

                <View style={styles.nut}>
                    <Button
                        title="Đăng nhập"
                        color='#2bc2bc'
                        onPress={() => Alert.alert('Chưa đăng nhập được đâu')}
                    />
                </View>
                <View style={styles.nut}>
                    <Button style={styles.hinh_nut}
                        title="Đăng kí"
                        color='#2bc2bc'
                        onPress={() => Alert.alert('Chưa đăng nhập được đâu')}
                    />
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 100,
        marginTop: 200,
        marginBottom: 50,
        borderRadius: 10,
        marginStart: 155,

    },
    nut: {
        marginBottom: 50,
        width: "80%",
        marginStart: 40,
    },
    hinh_nut: {

    },
});