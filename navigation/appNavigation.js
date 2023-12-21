import React, {useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import MainScreen from '../screens/MainScreen'
import WorkoutScreen from "../screens/WorkoutScreen";
import FitScreen from "../screens/FitScreen";
import RestScreen from "../screens/RestScreen";
import useAuth from "../hooks/useAuth"

import { getItem } from '../utils/asyncStorage'

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

    const [showOnboarding, setShowOnboarding] = useState(null);
    const {user} = useAuth();
    
    useEffect(() => {
      checkIfAlreadyOnboarding();
    }, [])

    const checkIfAlreadyOnboarding = async () => {
        let onboarded = await getItem('onboarded');
        if (onboarded == 1) {
            setShowOnboarding(false);        
        }else{
            setShowOnboarding(true);
        }
    }

    if (showOnboarding == null) {
        return null;
    }

    if (user) {
        return (
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName='MainScreen'>
                {/* <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen}/>
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
                <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
                <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} /> */}
                <Stack.Screen name="MainScreen" options={{headerShown: false}} component={MainScreen}/>
                <Stack.Screen name="WorkoutScreen" options={{headerShown: false}} component={WorkoutScreen}/>
                <Stack.Screen name="FitScreen" options={{headerShown: false}} component={FitScreen}/>
                <Stack.Screen name="RestScreen" options={{headerShown: false}} component={RestScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
          )
    }else{
        return (
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName='Onboarding'>
                <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen}/>
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
                <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
                <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
                {/* <Stack.Screen name="MainScreen" options={{headerShown: false}} component={MainScreen}/> */}
                </Stack.Navigator>
            </NavigationContainer>
          )
    }

    // if (user) {
    //     return(
    //         <NavigationContainer>
    //          <Stack.Navigator initialRouteName='MainScreen'>
    //          <Stack.Screen name="MainScreen" options={{headerShown: false}} component={MainScreen}/>
    //          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
    //          </Stack.Navigator>
    //      </NavigationContainer>
    //     )
        
    // } else {
    //     <NavigationContainer >
    //          <Stack.Navigator initialRouteName='Onboarding'>
    //          <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen}/>
             
    //          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
    //          <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
    //          </Stack.Navigator>
    //      </NavigationContainer>
    // }
    

  
}