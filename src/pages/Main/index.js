import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, Text, View } from 'react-native';
import Header from '../Header';
import Beranda from '../Beranda';
import Pembayaran from '../Pembayaran';
import DokumenMedis from '../DokumenMedis';
import Pengaturan from '../Pengaturan';
import ICONS from '../../assets/icons';
import { HEIGHT, HEIGHTSCREEN } from '../../assets/styles';

const Tab = createMaterialTopTabNavigator();

export default function Main({ navigation, route }) {
    return (
    <View style={{ flex: 1, backgroundColor: '#0397B2', marginTop: 20, }}>
        <Header/>
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    const iconTab = {
                        Beranda: ICONS.beranda,
                        Pembayaran: ICONS.pembayaran,
                        Dokumen: ICONS.dokumen,
                        Pengaturan: ICONS.pengaturan,
                    };

                    return (
                        <View style={{width: 28, height: 28}}>
                            <Image
                                source={iconTab[route.name]}
                                style={{ width: 28, height: 28, resizeMode: "contain" }}
                            />
                        </View>
                    );
                },

                tabBarLabel: ({ focused, color }) => {
                    return (
                        <Text style={{
                            fontSize: 10,
                            color: color,
                            marginTop: 10,
                        }}>
                            {route.name === "Dokumen" ? "Dokumen Medis" : route.name}
                        </Text>
                    );
                },
                tabBarStyle: {
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor: "#FFFFFF",
                },
            })}
        >
            <Tab.Screen name="Beranda" component={Beranda} />
            <Tab.Screen name="Pembayaran" component={Pembayaran} />
            <Tab.Screen name="Dokumen" component={DokumenMedis} />
            <Tab.Screen name="Pengaturan" component={Pengaturan} />
        </Tab.Navigator>
    </View>
    )
}