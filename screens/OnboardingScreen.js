import { View, Text, StyleSheet, Dimensions, LogBox } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';

const {width, height} = Dimensions.get('window');

export default function OnboardingScreen() {

    const navigation = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('Home');
        setItem('onboarded', '1');
    }

  return (
    <View style={styles.container}>
      <Onboarding  
            onDone={handleDone} 
            onSkip={handleDone} 
            containerStyles={{paddingHorizontal: 15}} 
            pages={[
                {
                backgroundColor: '#003049',
                image: (
                    <View>
                        <LottieView style={{width: 300}} source={require('../assets/animations/workout.json')} autoPlay loop />
                    </View>
                ),
                title: 'Pose Detection',
                subtitle: 'Real-time Pose Estimation',
                },
                {
                    backgroundColor: '#003049',
                    image: (
                        <View>
                            <LottieView style={styles.lottie} source={require('../assets/animations/feedback.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Real-time Feedback',
                    subtitle: 'Tips and Visual Feedback',
                },
                {
                    backgroundColor: '#003049',
                    image: (
                        <View>
                            <LottieView style={{width: 400}} source={require('../assets/animations/progress.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Progress Tracking',
                    subtitle: 'Workout History and Nuitrition Record',
                },
            ]}
/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie:{
        width: 10,
        height: width
    }
})