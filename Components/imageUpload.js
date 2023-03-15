import React, { useState, useEffect } from 'react';
import {Button, Image, View, Platform, TouchableOpacity, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {useNavigation} from '@react-navigation/native'
import {log} from "expo-updates/cli/utils/log";
const ImageUpload =()=>{
    const [image, setImage] = useState({imageUrl:null});
    const showModel=()=>{
        Alert.alert('Upload Image','select a option',[
            {
                text:'Camera',
                onPress:()=>openCamera()
            },
            {
                text:'Gallery',
                onPress:()=>openLibrary()
            }
        ])
    };
    useEffect(()=>{
        fetch("http://192.168.29.95:3005/images", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(image),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    },[image]);
    const openCamera = async () => {
          await ImagePicker.launchCameraAsync().then((res)=>setImage({imageUrl:res.assets[0].uri}));
    };
    const openLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            await setImage({imageUrl:result.assets[0].uri});
        }
    };
    console.log(image.imageUrl)
    return (
        <>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'flex-end' }}>
            <Image source={{ uri: image.imageUrl?image.imageUrl:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/w1200-h630-p-k-no-nu/blank-profile-picture-hd-images-photo.JPG' }} style={{ width: 320, height: 350}}/>
        </View>
            {/*<View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>*/}
            {/*    <Image style={{flex: 2, alignItems: 'center', justifyContent: 'center'}} source={{ uri:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/w1200-h630-p-k-no-nu/blank-profile-picture-hd-images-photo.JPG'}} style={{ width: 300, height: 300}}/>*/}
            {/*</View>*/}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={showModel} />
            </View>
        <View>
        </View>
            </>
    );
}
export default ImageUpload
