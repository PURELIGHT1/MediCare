import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import IMAGES from '../../assets/images';
import { ContentArea } from '../../components';

export default function DokumenMedis() {
  const dataDokumenMedis = [{
    no: 1,
    jenis: 'RIWAYAT MEDIS',
    icon: IMAGES.riwayatMedis
  },{
    no: 2,
    jenis: 'PEMERIKSAAN',
    icon: IMAGES.pemeriksaan
  },{
    no: 3,
    jenis: 'TES LABORATORIUM',
    icon: IMAGES.tesLaboratorium
  },{
    no: 4,
    jenis: 'RADIOLOGI',
    icon: IMAGES.radiologi
  },{
    no: 5,
    jenis: 'TEKANAN DARAH',
    icon: IMAGES.tekananDarah
  }];
  return (
    <ScrollView style={{
      backgroundColor: '#0397B2',
    }}>
      <View style={styles.container}>
        <ContentArea data={dataDokumenMedis} />
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0397B2',
    flexGrow: 1,
  },
});

