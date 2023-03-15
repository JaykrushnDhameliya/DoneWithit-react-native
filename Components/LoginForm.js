import React from 'react';
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Button
} from 'react-native';
import stylesheet from "react-native-web/dist/exports/StyleSheet";
const styles=stylesheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3c5a36',
    },
    input:{
        width:240,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    lable:{
        color:'white',
        fontWeight:'bold',
        fontSize:16
    },
    field:{
        // display:'flex',
        // flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    title:{
        color:'white',
        fontSize:20
    },
    main:{
    //     width:350,
    //     height:300,
    //     backgroundColor:'#3c5a36',
        justifyContent:'center',
    //     alignItems:'flex-start',
    }
});
const LoginForm = () => {

    return (
        <View style={styles.container}>
            <View style={styles.main}>

            <Text style={styles.title}> Login Form </Text>
            <View style={styles.field}>
                {/*<Text style={styles.lable}>Email :-</Text>*/}
                <TextInput placeholder="Enter Email" style={styles.input}/>
            </View>
            <View style={styles.field}>
                {/*<Text style={styles.lable}>PassWord :-</Text>*/}
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                />
            </View>
                <View>
                    <Button title='Login' />
                </View>
            </View>
        </View>
    );
};

export default LoginForm;
