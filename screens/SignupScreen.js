import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Dimensions,
    SafeAreaView,
    Image
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const { height } = Dimensions.get('window');

const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        let newErrors = {};

        if (name.trim().length === 0) {
            newErrors.name = 'Name is required';
            valid = false;
        } else if (name.length > 20) {
            newErrors.name = 'Name must be 20 characters or less';
            valid = false;
        }

        if (!email.toLowerCase().endsWith('@gmail.com')) {
            newErrors.email = 'Email must end with @gmail.com';
            valid = false;
        }

        if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSignup = () => {
        if (validate()) {
            navigation.navigate('OTPVerification', { email, from: 'Signup' });
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
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
                            <TouchableOpacity
                                style={styles.backButton}
                                onPress={() => navigation.goBack()}
                            >
                                <Ionicons name="arrow-back" size={24} color={Colors.primary} />
                            </TouchableOpacity>

                            <Text style={styles.title}>Create Account</Text>
                            <Text style={styles.subtitle}>Fill in details to join</Text>

                            <View style={styles.form}>
                                <View style={[styles.inputContainer, errors.name && styles.inputError]}>
                                    <Ionicons name="person" size={20} color={Colors.primary} style={styles.inputIcon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Full Name"
                                        value={name}
                                        onChangeText={(text) => {
                                            setName(text);
                                            if (text.length <= 20) {
                                                setErrors({ ...errors, name: null });
                                            } else {
                                                setErrors({ ...errors, name: 'Max 20 characters' });
                                            }
                                        }}
                                        maxLength={20}
                                        placeholderTextColor={Colors.textLight}
                                    />
                                    <Text style={styles.charCount}>{name.length}/20</Text>
                                </View>
                                {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

                                <View style={[styles.inputContainer, errors.email && styles.inputError]}>
                                    <Ionicons name="mail" size={20} color={Colors.primary} style={styles.inputIcon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email Address (@gmail.com)"
                                        value={email}
                                        onChangeText={(text) => {
                                            setEmail(text);
                                            setErrors({ ...errors, email: null });
                                        }}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        placeholderTextColor={Colors.textLight}
                                    />
                                </View>
                                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                                <View style={[styles.inputContainer, errors.password && styles.inputError]}>
                                    <Ionicons name="lock-closed" size={20} color={Colors.primary} style={styles.inputIcon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Password"
                                        value={password}
                                        onChangeText={(text) => {
                                            setPassword(text);
                                            setErrors({ ...errors, password: null });
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
                                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                                    <Text style={styles.buttonText}>Proceed</Text>
                                </TouchableOpacity>

                                <View style={styles.loginLinkContainer}>
                                    <Text style={styles.loginLinkText}>Already have an account? </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                        <Text style={styles.loginLinkAction}>Log In</Text>
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
    scrollContainer: {
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
    backButton: {
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.textLight,
        marginBottom: 25,
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
        paddingHorizontal: 10,
        marginBottom: 8,
        height: 50,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    inputError: {
        borderColor: Colors.error,
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
    charCount: {
        fontSize: 10,
        color: Colors.textLight,
        marginLeft: 5,
    },
    errorText: {
        color: Colors.error,
        fontSize: 11,
        marginBottom: 8,
        marginLeft: 5,
    },
    button: {
        backgroundColor: Colors.primary,
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: Colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginLinkText: {
        color: Colors.textLight,
    },
    loginLinkAction: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
});

export default SignupScreen;
