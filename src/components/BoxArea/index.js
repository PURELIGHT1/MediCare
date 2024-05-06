import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IMAGES from '../../assets/images';

export default function BoxArea({
  imageURI = IMAGES.cariJadwal,
  textURI = 'Cari Jadwal',
  imageStyle = {
    width: 200,
    height: 200,
  },
  ...props
}) {
  return (
      <View style={styles.box}>
        <TouchableOpacity
          {...props}
        >
          <Image source={imageURI} style={imageStyle}/>
        </TouchableOpacity>
        <Text style={styles.text}>{textURI}</Text>
      </View>
    
  )
}
const styles = StyleSheet.create({
  box: {
    width: '45%',
    height: 200, 
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
});

