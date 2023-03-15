import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
} from 'react-native';
import {log} from "expo-updates/cli/utils/log";
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        image:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        image:'https://picsum.photos/200/300?grayscale'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image:'https://picsum.photos/seed/picsum/200/300'
    },
];
const Item = ({title,image}) => (
    <View style={styles.item}>
        <Image style={[styles.image,{aspectRatio:16/9}]} source={{ uri: image }} />
        {/*<Text style={styles.title}>{title}</Text>*/}
    </View>

);
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        // padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 12,
    },
    image:{
        width:330,
    },
});
const ShowImage =({route})=>{
    const [newData,setData]=useState([]);
    const uri=route.params;
    // console.log('urlllllllllllll',uri.uri);
    useEffect(()=>{
        fetch("http://192.168.29.95:3005/all-image")
            .then((response) => response.json())
            .then((data) =>setData(data));
        // setData([...newData,uri]);
    },[])
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.text}
                data={newData}
                horizontal

                renderItem={({item}) =><Item image={item.imageUrl}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
};
export default ShowImage;
