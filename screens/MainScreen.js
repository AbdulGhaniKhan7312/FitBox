import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import React, {useContext} from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth"
import {auth} from "../config/firebase"
import { useNavigation } from '@react-navigation/native';
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";
// import { ScrollView } from 'react-native-gesture-handler';

export default function MainScreen() {

    const navigation = useNavigation();

    const handleLogout = async () => {
        await signOut(auth)
    }

    const {
      minutes,
      calories,
      workout,
    } = useContext(FitnessItems);

  return (

    <ScrollView contentContainerStyle={{flexGrow: 1, marginTop: 35, height: '100%'}}>
      <View style={{backgroundColor: '#003049', padding: 10, height: 200, width: '100%'}}>
      {/* <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Main Screen - </Text> */}
        <TouchableOpacity onPress={handleLogout} >
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Logout</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>

          <View>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: 18}}>{workout}</Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>Workouts</Text>
          </View>

          <View>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: 18}}>{calories}</Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>KCAL</Text>
          </View>

          <View>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: 18}}>{minutes}</Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>Minutes</Text>
          </View>
        
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {/* <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          /> */}
        </View>
        <FitnessCards />
      </View>          
    </ScrollView>
  )
}