import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const backgroundImage = {uri: 'https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'};

const Route = ({route}) =>{
    const { uri } = route.params;
    const navigation=useNavigation();
    return (
    <View style={styles.container}>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>
                <Pressable onPress={() => {navigation.navigate('Home')}}>
                    <Text style={styles.btn}>create user</Text>
                </Pressable>
            </Text>
            <Text style={styles.text}>
                <Pressable onPress={() => {navigation.navigate('DataUser')}}>
                    <Text style={styles.btn}>table data</Text>
                </Pressable>
            </Text>
            <Text style={styles.text}>
                <Pressable onPress={() => {navigation.navigate('show-image',{uri:uri})}}>
                    <Text style={styles.btn}>Show Image</Text>
                </Pressable>
            </Text>
        </ImageBackground>
    </View>
);};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btn: {
        color: 'white'
    },
});

export default Route;
