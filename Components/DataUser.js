import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Pressable, Button,ScrollView} from 'react-native';
import {DataTable} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export const DataUser = () => {
    const [userData, setData] = useState([]);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
            paddingTop: 30,
            backgroundColor: "#f0f3f5",
            overflow: 'scroll',
            height:2
        },
        head: {backgroundColor: "#808B97"},
        text: {margin: 6},
        row: {flexDirection: "row", backgroundColor: "white"},
        btn: {
            width: 58,
            height: 25,
            padding:2,
            backgroundColor: "black",
            borderRadius: 2,
            alignSelf: "center",
            color:'white',
            textAlign: 'center'
        },
        btnText: {textAlign: "center", color: "#fff"},
        border:{
            borderBottomWidth:1,
            borderColor:"black"
        },
    });
    useEffect(() => {
        (async () => {
            await fetch("http://192.168.29.95:3005/users")
                .then((response) => response.json())
                .then((data) => {
                    setData(data)
                })
        })()
    }, [userData]);

    const handleDelete = (i) => {
            fetch(`http://192.168.29.95:3005/users/${i}`, { method: 'DELETE' })
                .then(() => setData({ status: 'Delete successful' }));
        };
    return (
        <>
        <View style={styles.container}>
            <ScrollView>
            <DataTable style={styles.table}>
                    <DataTable.Header style={styles.head}>
                        <DataTable.Title>First Name</DataTable.Title>
                        <DataTable.Title>Last Name</DataTable.Title>
                        <DataTable.Title>email</DataTable.Title>
                        <DataTable.Title>password</DataTable.Title>
                        <DataTable.Title>action</DataTable.Title>
                    </DataTable.Header>
                    {userData?.length > 0 && userData.map((item) =>
                        <DataTable.Row>
                            <DataTable.Cell style={styles.border}>{item.firstName}</DataTable.Cell>
                            <DataTable.Cell style={styles.border}>{item.lastName}</DataTable.Cell>
                            <DataTable.Cell style={styles.border}>{item.email}</DataTable.Cell>
                            <DataTable.Cell style={styles.border}>{item.password}</DataTable.Cell>
                            <DataTable.Cell style={styles.border}>
                                <Pressable onPress={() => handleDelete(item._id)}>
                                    <Text style={styles.btn}>Delete</Text>
                                </Pressable>
                            </DataTable.Cell>
                        </DataTable.Row>
                    )}
                </DataTable>
            </ScrollView>

        </View>
        </>
    )
};
