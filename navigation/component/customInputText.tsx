import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

type CustomInputTextPropsType = {
  onChange: (text: string) => void;
  value: string;
  err?: string; 
  isSecure?:boolean;
};

export const CustomInputText = ({onChange , value , err , isSecure}:CustomInputTextPropsType) => {

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter email..."
                placeholderTextColor="#aaa"
                value={value}
                onChangeText={onChange}
                 secureTextEntry={isSecure}
            />
         {
            err &&    <Text style={styles.err}>{err}</Text>
         }
        </View>
    )
}

const styles = StyleSheet.create({
    err: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 5
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
        width: "100%",
        alignSelf: "center"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
        // alignItems: 'center',
        // justifyContent: 'center',
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