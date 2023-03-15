import React,{useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput, Pressable, TouchableHighlight} from "react-native";
import {TextInput as PaperTextInput} from 'react-native-paper';
import {FormBuilder} from 'react-native-paper-form-builder';
import {useForm,Controller } from 'react-hook-form';
export const CreateUser=()=>{
    const {control, setFocus, register, handleSubmit,reset,formState: { errors } } = useForm({defaultValues: {
            firstName:'',
            lastName:'',
            email: '',
            password: ''
        }});
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
        },

        formLabel: {
            fontSize: 20,
            color: '#fff',
            padding: 0,

        },
        inputStyle: {
            width: 250,
            height: 40,
            paddingHorizontal: 15,
            backgroundColor: '#DCDCDC',
            borderTopLeftRadius:30,
            borderBottomRightRadius:30,
        },
        formText: {
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 20,
        },
        text: {
            color: '#fff',
            fontSize: 20,
        },
        submit: {
            color:'white',
            backgroundColor: 'coral',
            width: 300,
            padding: 20,
            borderTopLeftRadius:50,
            borderBottomRightRadius:50
        },
        button: {
            marginTop:20,
            paddingVertical: 7,
            paddingHorizontal: 50,
            backgroundColor: '#007069',
            borderTopLeftRadius:30,
            borderBottomRightRadius:30,
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',

        },
        lableInput:{
            padding:5,
        },
        box: {
            backgroundColor: '#565656',
            marginLeft: 10,
            marginRight: 10,
            width: 300,
            padding: 20,
            borderTopLeftRadius:50,
            borderBottomRightRadius:50
        },
        buttonReset:{
            marginTop:20,
            paddingVertical: 7,
            paddingHorizontal: 50,
            backgroundColor: 'coral',
            borderTopLeftRadius:30,
            borderBottomRightRadius:30,
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
        },
        errorText:{
            color:'red',
            paddingLeft:5,
            // fontWeight:'bold'
        }

    });
    const submit = (data) =>{
        console.log(data);

        fetch("http://192.168.29.95:3005/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            })
        reset()

    };
    const handleReset=()=>{
        reset()
    }

    return(
        <>

            <View style={styles.container}>
                <Text style={styles.formLabel}> Create User Form </Text>
                <View style={styles.box}>
                    <View style={styles.lableInput}>
                        <Text style={styles.formLabel}>First Name :-</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <PaperTextInput
                                    style={[styles.inputStyle,errors?.firstName ? {borderWidth:3,borderColor:'red'}:'']}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="First Name"
                                />
                            )}
                            name="firstName"
                        />
                    </View>
                    {errors?.firstName && <Text style={styles.errorText}>First Name is required.</Text>}
                    <View style={styles.lableInput}>
                        <Text style={styles.formLabel}>Last Name :-</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <PaperTextInput
                                    style={[styles.inputStyle,errors?.lastName ? {borderWidth:3,borderColor:'red'}:'']}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="Last Name"
                                />
                            )}
                            name="lastName"
                        />
                    </View>
                    {errors?.lastName && <Text style={styles.errorText}>Last Name is required.</Text>}
                    <View style={styles.lableInput}>
                    <Text style={styles.formLabel}>Email :-</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <PaperTextInput
                                    style={[styles.inputStyle,errors?.email ? {borderWidth:3,borderColor:'red'}:'']}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    autoComplete="off"
                                    placeholder='Enter E-mail'
                                />
                            )}
                            name="email"
                        />
                    </View>
                    {errors?.email && <Text style={styles.errorText}>Email is required.</Text>}
                        <View style={styles.lableInput}>
                    <Text style={styles.formLabel}>Password :-</Text>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <PaperTextInput
                                        style={[styles.inputStyle,errors?.password ? {borderWidth:3,borderColor:'red'}:'']}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder="Enter password"
                                        secureTextEntry={true}
                                    />
                                )}
                                name="password"
                            />
                        </View>
                    {errors?.password && <Text style={styles.errorText}>Password is required.</Text>}
                </View>
                {/*<View style={styles.submit}>*/}
                {/*<Button title={'Submit'} onPress={()=>handleSubmit()}/>*/}
                {/*</View>*/}
                <Pressable style={styles.button} onPress={handleSubmit(submit)}>
                    <Text style={styles.text}>Submit</Text>
                </Pressable>
                <Pressable style={[styles.buttonReset,{backgroundColor:'#953434'}]} onPress={()=>handleReset()}>
                    <Text style={styles.text}>Reset</Text>
                </Pressable>
            </View>
        </>
    )
};
