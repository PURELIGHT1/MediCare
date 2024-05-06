import React from 'react'
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function ContentArea({data, tampilInputan = false}) {
  return (
    <>
    {data.map((item, index) => {
        return (
            <View key={index} style={[styles.content, styles.borderBottom]}>
                <View style={styles.leftContent}>
                    {!tampilInputan && <Image source={item.icon} style={styles.image} />}
                    <Text style={styles.text}>{item.jenis}</Text>
                    {tampilInputan && <TextInput style={styles.textInput} placeholder={item.input} />}
                </View>
                <SimpleLineIcons name="arrow-down" size={24} color="black" style={{alignSelf: 'center', marginRight: 20}} />
            </View>
        )
    })}
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0397B2',
    flexGrow: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    backgroundColor: '#D9D9D9',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 70,
    marginLeft: 20,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  borderBottom: {
    borderBottomWidth: 3,
    borderBottomColor: 'black',
  },
  textInput: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10
  }
});

