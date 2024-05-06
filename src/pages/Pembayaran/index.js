import React from 'react';
import {ScrollView, StyleSheet, View } from 'react-native';
import IMAGES from '../../assets/images';
import { ContentArea } from '../../components';

export default function Pembayaran() {
  const dataPembayaran = [{
    no: 1,
    jenis: 'BANK',
    icon: IMAGES.bank
  },{
    no: 2,
    jenis: 'QRIS',
    icon: IMAGES.qris
  },{
    no: 3,
    jenis: 'DANA',
    icon: IMAGES.dana
  },{
    no: 4,
    jenis: 'ALFAMART',
    icon: IMAGES.alfamart
  },{
    no: 5,
    jenis: 'INDOMARET',
    icon: IMAGES.indomaret
  }];
  return (
    <ScrollView style={{
      backgroundColor: '#0397B2',
    }}>
      <View style={styles.container}>
        <ContentArea data={dataPembayaran} />
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
