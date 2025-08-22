

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Header } from "../navigation/header";


export const Posts = ({navigation}) => {
    const [posts, setPost] = useState<any>([])
    const GetPosts =  () => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>result.json()).then((res)=>{
            console.log(res)
            setPost(res)
        })
      
    }
    useEffect(() => {
        // GetPosts()
    }, [])

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("PostDetails" , item)}>
            <Text style={styles.text}>{item?.title}</Text>
              <Text style={styles.description}>{item?.body}</Text>
        </TouchableOpacity>
    );

     const goback=()=>{
    navigation.goBack()
 }
    return (
        <View style={styles.container}>
          <Header navigation={navigation} heading={"Post"}/>
            <FlatList
            style={{paddingBottom:80}}
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={()=>{
                    return <Text style={styles.footer}>End of list</Text>
                }}
            />
          
        </View>
    )
}


const styles = StyleSheet.create({
    back:{
        marginTop:50
    },
    footer:{
     
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        paddingBottom:80
    },
    description:{
           color: '#6B7280',
        fontSize: 14,
        fontWeight: '400',
        padding:10,
        lineHeight:20,
       
    },
    card: {
  backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    width: '98%',
    alignSelf: 'center',
    },
    text: {
        padding:10,
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },

    heading: {
      
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    }
});