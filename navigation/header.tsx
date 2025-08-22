import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from 'expo-status-bar';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./homeStack";
type HeaderProps = {
  navigation: StackNavigationProp<RootStackParamList>;
  heading: string;
};

export const Header = ({ navigation, heading }:HeaderProps) => {
    const goback = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <TouchableOpacity onPress={goback}>
                <Ionicons name="chevron-back-outline" size={32} color="black" />
            </TouchableOpacity>

            <Text style={styles.heading}>{heading}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "65%",
        marginTop: 50,
        marginBottom: 20
    },
    heading: {
        // marginTop: 70,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    }
});