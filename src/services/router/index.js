import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
    BerandaPage, 
    LoginPage, 
    Main,
    PembayaranPage,
    DokumenPage,
    PengaturanPage,
} from '../../pages';

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator
            initialRouteName='Main'
            screenOptions={{
                headerShown: false,
            }}
            screenListeners={{
                state: (data) => {
                    console.log('screen', JSON.stringify(data, null, 2));
                },
            }}
        >
            <Stack.Screen name='Main' component={Main}></Stack.Screen>
            <Stack.Screen name='Login' component={LoginPage}></Stack.Screen>
            <Stack.Screen name='Beranda' component={BerandaPage}></Stack.Screen>
            <Stack.Screen name='Pembayaran' component={PembayaranPage}></Stack.Screen>
            <Stack.Screen name='Dokumen' component={DokumenPage}></Stack.Screen>
            <Stack.Screen name='Pengaturan' component={PengaturanPage}></Stack.Screen>
        </Stack.Navigator>
    );
}
