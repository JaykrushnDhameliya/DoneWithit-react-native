import React, {useState} from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CreateUser} from "./CreateUser";
import {DataUser} from "./DataUser";
import ImageUpload from "./imageUpload";
import MyDrawer from "./navebar";
import {Button, TouchableOpacity,Text,View} from "react-native";
import ShowImage from "./showImage";
import LoginForm from "./LoginForm";
const Tab = createMaterialBottomTabNavigator();
function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const TabsPagination=()=> {
    const [show,setShow]=useState(true);
    return (
        <>
            {/*<Tab.Navigator>*/}
            {/*    <Tab.Screen name="Home" component={HomeScreen} />*/}
            {/*    <Tab.Screen name="Settings" component={SettingsScreen} />*/}
            {/*</Tab.Navigator>*/}
            {/*<TouchableOpacity onPress={()=>setShow(!show)} style={{flex:1}}>*/}

            {/*height:show?'10px':'80px',paddingTop:'10px'*/}


                <Tab.Navigator
                        initialRouteName="Home"
                        activeColor="#1000ff"
                        inactiveColor="black"
                        barStyle={{ backgroundColor: '#b8babb'}}
                        options={{onPress:()=>console.log('hiiiii')}}
                    >
                        <Tab.Screen
                            name="Feed"
                            component={CreateUser}
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({ color }) => (
                                    <Ionicons name="create-sharp" color={color} size={26} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Notifications"
                            component={DataUser}
                            options={{
                                tabBarLabel: 'Data User',
                                tabBarIcon: ({ color }) => (
                                    <Entypo name="user" color={color} size={26} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Image"
                            component={ImageUpload}
                            options={{
                                tabBarLabel: 'Upload',
                                tabBarIcon: ({ color }) => (
                                    <Ionicons name="camera-sharp" color={color} size={26} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Show-image"
                            component={ShowImage}
                            options={{
                                tabBarLabel: 'Image',
                                tabBarIcon: ({ color }) => (
                                    <Ionicons name="images-sharp" color={color} size={26} />
                                ),
                            }}
                        />


                    </Tab.Navigator>




            {/*</TouchableOpacity>*/}
        </>
    );
};
export default TabsPagination;
