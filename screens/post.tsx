

import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
export const Posts = ({navigation}) => {
    const [posts, setPost] = useState<any>([
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipitnsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
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
    const GetPosts =  () => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>result.json()).then((res)=>{
            console.log(res)
            setPost(res)
        })
      
    }
    useEffect(() => {
        GetPosts()
    }, [])

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("PostDetails" , item)}>
            <Text style={styles.text}>{item?.title}</Text>
              <Text style={styles.description}>{item?.body}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Posts</Text>
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
        marginTop: 70,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    }
});