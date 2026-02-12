import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    ScrollView,
    SafeAreaView,
    Image
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const { height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        if (!email.toLowerCase().endsWith('@gmail.com')) {
            setError('Email must end with @gmail.com');
            return;
        }

        setError('');
        navigation.replace('Main');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={styles.card}>
                        {/* Design Header */}
                        <View style={styles.header}>
                            <Image
                                source={require('../assets/momlogo.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                            <Text style={styles.headerText}>MOM PHARMACY</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.title}>Login</Text>
                            <Text style={styles.subtitle}>Email ID & Password Authentication</Text>

                            <View style={styles.form}>
                                <View style={styles.inputContainer}>
                                    <Ionicons name="mail" size={20} color={Colors.primary} style={styles.inputIcon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email Address"
                                        value={email}
                                        onChangeText={(text) => {
                                            setEmail(text);
                                            setError('');
                                        }}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        placeholderTextColor={Colors.textLight}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Ionicons name="lock-closed" size={20} color={Colors.primary} style={styles.inputIcon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Password"
                                        value={password}
                                        onChangeText={(text) => {
                                            setPassword(text);
                                            setError('');
                                        }}
                                        secureTextEntry={!showPassword}
                                        placeholderTextColor={Colors.textLight}
                                    />
                                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                        <Ionicons
                                            name={showPassword ? "eye" : "eye-off"}
                                            size={20}
                                            color={Colors.primary}
                                        />
                                    </TouchableOpacity>
                                </View>

                                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                                    <Text style={styles.buttonText}>Proceed</Text>
                                </TouchableOpacity>

                                <View style={styles.signupLinkContainer}>
                                    <Text style={styles.signupLinkText}>Don't have an account? </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                        <Text style={styles.signupLinkAction}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
    card: {
        width: '85%',
        backgroundColor: Colors.card,
        borderRadius: 30,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 8,
        minHeight: height * 0.7,
    },
    header: {
        backgroundColor: Colors.lightPrimary,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 60,
        height: 40,
        marginBottom: 5,
    },
    headerText: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    content: {
        padding: 25,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.text,
        marginTop: 10,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.textLight,
        marginBottom: 30,
        textAlign: 'center',
    },
    form: {
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        height: 50,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        color: Colors.text,
        fontSize: 15,
    },
    errorText: {
        color: Colors.error,
        fontSize: 13,
        marginBottom: 15,
        textAlign: 'center',
    },
    button: {
        backgroundColor: Colors.primary,
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: Colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
    },
    signupLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    },
    signupLinkText: {
        color: Colors.textLight,
    },
    signupLinkAction: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
