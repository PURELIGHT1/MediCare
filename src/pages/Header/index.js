import React from 'react'
import { View } from 'react-native'
import { InputText } from '../../components'
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={{
        paddingHorizontal: 15,
        marginBottom: 25,
      }}>
        <View style={{
          backgroundColor: "#ffffff",
          height: 40,
          width: 'full',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}>
            <View style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'end',
                marginRight: 20,
                paddingVertical: 5,
            }}>   
                <AntDesign name="shoppingcart" size={24} color={'#000000'} style={{ marginRight: 5 }} />
                <Entypo name="dots-three-horizontal" size={24} color={'#000000'} />
            </View>
        </View>
        <View style={{
          paddingHorizontal: 10,
          marginTop: 40,
        }}>
            <InputText
                placeholder="Ketik disini untuk mencari..."
                border={true}
                borderColor="#000000"
                backgroundColor="#ffffff"
                vertical={7}
                horizontal={5}
                leftIcon={
                    <FontAwesome name="search" size={24} color={'#000000'} />
                }
                rightIcon={
                    <AntDesign name="close" size={18} color={'#000000'} style={{ marginRight: 10 }} />
                }
                right={20}
                left={10}
            />
        </View>
    </View>
  )
}
