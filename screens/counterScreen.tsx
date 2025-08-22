import { StatusBar } from 'expo-status-bar';
import {  useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Counter() {
const [counter, setCounter]=useState<number>(0)
 const increase=()=>{
    setCounter(counter+1)
 }
  const decrease=()=>{
    setCounter(counter-1)
 }

    return (
        <View style={styles.container}>

            <StatusBar style="auto" />
            <Text style={styles.heading}>Counter {counter}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttontContainer} onPress={increase}>
                    <Text style={styles.loginLable}>
                        increase
                    </Text>
                </TouchableOpacity>
                 <TouchableOpacity style={styles.buttontContainer} onPress={decrease}>
                    <Text style={styles.loginLable}>
                        decreae
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonsContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
  
    loginLable: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttontContainer: {
        marginTop: 20,
        backgroundColor: '#000000',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 12,
        width: "48%",
        alignSelf: "center"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop:50
    
    },
    input: {
        marginTop: 20,
        width: "100%",
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#ddd',
        alignSelf: "center"
    },
    heading: {
        marginTop: 70,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    }
});
