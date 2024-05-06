import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import IMAGES from '../../assets/images';
import { BoxArea } from '../../components';

export default function Beranda() {
  return (
    <ScrollView style={{
      backgroundColor: '#0397B2',
    }}>
      <View style={styles.container}>
        <View style={[styles.row, {marginTop: 30}]}>
          <BoxArea imageURI={IMAGES.cariJadwal} textURI='Cari Jadwal'/>
          <BoxArea imageURI={IMAGES.tanyaDokter} textURI="Tanya Dokter" />
        </View>
        <View style={styles.row}>
          <BoxArea imageURI={IMAGES.beliObat} textURI="Beli Obat" />
          <BoxArea imageURI={IMAGES.pengingat} textURI="Pengingat" imageStyle={{
            width: 200,
            height: 200,
            marginLeft: 20,
          }}/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    backgroundColor: '#0397B2',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, 
  },
  box: {
    width: '45%',
    height: 200, 
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
});
