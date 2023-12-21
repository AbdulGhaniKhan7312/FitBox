import { View, Text, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        if (email && password) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                // navigation.navigate('MainScreen')
            } catch (err) {
                console.log('got error: ',err.message)
            }
        } else {
            
        }
    }

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg, background: 'white'}}>
        <Image className='h-full w-full absolute bg-fixed' style={{position: 'absolute', top: 0, right: 0, left: 0, bottom: 0}} source={require('../assets/images/welcome.png')}/>
      <SafeAreaView className="flex" style={{marginBottom: 200}}>
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-5"
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        {/* <View style={{flexDirection: 'row', justifyContent: 'center'}} className="flex-row justify-center">
            <Image source={require('../assets/images/signup.png')} 
                style={{width: 200, height: 200, marginBottom: 25}} />
        </View> */}
      </SafeAreaView>
      <Animated.View entering={FadeInDown.delay(200).springify()} className="flex-1 bg-white px-8 pt-10"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Full Name</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value=""
                placeholder='Enter Name'
            />
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value={email}
                onChangeText={value => setEmail(value)}
                placeholder='Enter Email'
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry
                value={password}
                onChangeText={value => setPassword(value)}
                placeholder='Enter Password'
            />
            <TouchableOpacity style={{paddingVertical: 3}}
                className="py-3 bg-yellow-400 rounded-xl"
                onPress={handleSubmit}
            >
                <Text style={{textAlign: 'center'}} className="font-xl font-bold text-center text-gray-700">
                    Sign Up
                </Text>
            </TouchableOpacity>
            <View className="flex-row justify-center">
                    <Text className="text-gray-500 font-semibold">Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className="font-semibold text-yellow-400"> Log In</Text>
                    </TouchableOpacity>
            </View>
        </View>
        {/* <Text className="text-xl text-gray-700 font-bold text-center py-5">
            Or
        </Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/google.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/apple.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/facebook.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-yellow-500"> Login</Text>
            </TouchableOpacity>
        </View> */}
      </Animated.View>
    </View>
  )
}