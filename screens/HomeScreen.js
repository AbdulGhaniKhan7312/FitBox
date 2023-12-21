import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';


const {width, height} = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReset = async ()=>{
    await removeItem('onboarded');
    navigation.push('Onboarding');
  }
  return (
    <View className='flex-1 flex justify-end'>
        <Image className='h-full w-full absolute' source={require('../assets/images/welcome.png')}/>
        <Animated.View entering={FadeInDown.delay(100).springify()} className='flex items-center mb-5'>
            <Text style={{fontSize: hp(5)}} className="text-white font-bold tracking-wide">
                    Best <Text className="text-yellow-500">Workouts</Text>
            </Text>
            <Text style={{fontSize: hp(5)}} className="text-white font-bold tracking-wide">
                For You
            </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()} className="space-y-4 mb-20">
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text 
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Sign Up
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="text-white font-semibold">Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className="font-semibold text-yellow-400"> Log In</Text>
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
                  <Text>Reset</Text>
                </TouchableOpacity> */}
        </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#877dfa'
  },
  lottie:{
    width: width*0.9,
    height: width
  },
  text: {
    fontSize: width*0.09,
    marginBottom: 20
  },
  resetButton: {
    backgroundColor: '#34d399',
    padding: 10,
    borderRadius: 10
  }
})