import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { CustomInputText } from '../component/customInputText';

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [emailErr, setEmailErr] = useState<string>("")
    const [passwordErr, setPasswordErr] = useState<string>("")
    const isValidEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const handleEmail = useCallback((value: string) => {
        setEmail(value)
        setEmailErr('')
    }, [setEmail, email, emailErr, setEmailErr])

    const handlePassword = useCallback((value: string) => {
        setPassword(value)
        setPasswordErr('')
    }, [setPassword, password, setPasswordErr])

    const handleLogin = () => {
        if (!email) {
            setEmailErr("Email is required");
            return;
        }

        if (!isValidEmail(email)) {
            setEmailErr("Please enter a valid email address");
            return;
        }

        if (!password) {
            setPasswordErr("Password is required");
            return;
        }

        alert(`Email: ${email}\nPassword: ${password}`);
        setEmail("");
        setPassword("");
        
    }

    return (
        <View style={styles.container}>

            <StatusBar style="auto" />
            <Text style={styles.heading}>Login</Text>
            <View>
                <CustomInputText onChange={handleEmail} value={email} err={emailErr} />
                <CustomInputText onChange={handlePassword} value={password} isSecure={true} err={passwordErr} />
                <TouchableOpacity style={styles.buttontContainer} onPress={handleLogin}>
                    <Text style={styles.loginLable}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
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
