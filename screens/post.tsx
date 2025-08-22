// https://jsonplaceholder.typicode.com/posts

import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "axios"
export const Posts = () => {
    const [posts, setPost] = useState<any>([
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
    ])
    const GetPosts = async () => {
        const res: [] = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPost(res)
    }
    useEffect(() => {
        // GetPosts()
    }, [])
    console.log(posts)


    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.text}>{item?.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Posts</Text>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    card: {

        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
        width: '100%',
    },
    text: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    heading: {
        marginTop: 70,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    }
});