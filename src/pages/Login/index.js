import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import ICONS from '../../assets/icons';
import { Button, InputText } from '../../components';
import { Fontisto, FontAwesome5 } from '@expo/vector-icons';

export default function Login({ navigation, route }) {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async() => {
    console.log(dataLogin);
    if(dataLogin.email !== 'admin@gmail.com'){
      alert('Email salah!');
    }else{
      if(dataLogin.password !== '12345'){
        alert('Password salah!');
      }else{
          try {
            alert('Login berhasil!');
            navigation.navigate('Main');
          } catch (error) {
              console.log('Gagal mengambil data:', error);
          }
      }
    }
  }
  return (
    <ScrollView style={{
      backgroundColor: "#F4EFEF",
    }}>
      <View style={{
        flex: 1,
        paddingHorizontal: 25,
      }}>
        <View style={{
          backgroundColor: "#0397B2",
          height: 40,
          width: 'full',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
            
        </View>
        <View style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
          <View style={{
            marginVertical: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image style={{
              width: 150,
              height: 150,
            }} source={ICONS.logo} />
            <Text style={{
              marginTop: 10,
              fontSize : 18,
            }}>
              LOGIN
            </Text>
          </View>
          <InputText
            placeholder="Email"
            value={dataLogin.email}
            onChangeText={(text) =>setDataLogin({ ...dataLogin, email: text })}
            leftIcon={
              <Fontisto name="email" size={24} color={'#A6A6A6'} />
            }
            right={20}
          />
          <InputText
            placeholder="Password"
            value={dataLogin.password}
            onChangeText={(text) =>setDataLogin({ ...dataLogin, password: text })}
            leftIcon={
              <FontAwesome5 name="lock" size={24} color={'#A6A6A6'} />
            }
            right={20}
          />
          <Button 
            textTitle='Login' 
            customStyle={{
              marginTop: 20,
            }}
            onPress={() => onSubmit()}
          />
          <Text style={{
            textAlign: 'center',
            marginVertical: 20,
            color: '#004AAD',
            fontSize : 14,
          }}>
            Atau Login dengan
          </Text>

          <Button imageIcon={
            <Image source={ICONS.google} style={{
              width: 80,
              height: 30,
            }} />
          } customStyle={{
            marginBottom: 7,
          }} borderColor='#E2E2E2' backgroundColor='#F4EFEF' borderWidth={4}/>

          <Button imageIcon={
            <Image source={ICONS.facebook} style={{
              width: 90,
              height: 30,
            }} />
          } customStyle={{
            marginBottom: 20,
          }} borderColor='#E2E2E2' backgroundColor='#F4EFEF' borderWidth={4}/>

        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4EFEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

