// https://jsonplaceholder.typicode.com/posts

import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Header } from "../navigation/header";

export const PostDetails = ({ navigation }) => {
    const item = useRoute().params
    console.log(item)
    return (
        <View style={styles.container}>
            <Header navigation={navigation} heading={'Posts Details'} />
            <View style={styles.card} >
                <Text style={styles.text}>user Id : {item?.userId}</Text>
                <Text style={styles.text}>{item?.title}</Text>
                <Text style={styles.description}>{item?.body}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headContainer: {
        marginTop: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        width: '65%',
        alignContent: "center"
    },
    back: {

        color: '#00000',
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    },
    footer: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        paddingBottom: 80
    },
    description: {
        color: '#6B7280',
        fontSize: 14,
        fontWeight: '400',
        padding: 10,
        lineHeight: 20,

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
        padding: 10,
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,

    },

    heading: {
        // marginTop: 70,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    }
});