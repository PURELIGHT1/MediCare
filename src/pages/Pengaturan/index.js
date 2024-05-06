import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ContentArea } from '../../components';

export default function Pengaturan() {
  const dataPengaturan = [{
    no: 1,
    jenis: 'Nama :',
    input: 'Medicare Unsri',
  },{
    no: 2,
    jenis: 'Email :',
    input: 'medicareunsri@mail.com',
  },{
    no: 3,
    jenis: 'No HP :',
    input: '080808080808',
  },{
    no: 4,
    jenis: 'Call Center :',
    input: '+62131311',
  },{
    no: 5,
    jenis: 'Upgrade Versi :',
    input: 'Versi 1.0.0',
  }];
  return (
    <ScrollView style={{
      backgroundColor: '#0397B2',
    }}>
      <View style={styles.container}>
        <ContentArea data={dataPengaturan} tampilInputan={true} />
      </View>
    </ScrollView>
    
  );
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
    height: 100,
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
});


