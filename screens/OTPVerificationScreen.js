import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const { height, width } = Dimensions.get('window');

const OTPVerificationScreen = ({ navigation, route }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(60);
    const inputRefs = useRef([]);
    const email = route.params?.email || 'your email';

    useEffect(() => {
        let interval = null;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if value is entered
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        // Move to previous input on backspace
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleVerify = () => {
        const otpString = otp.join('');
        if (otpString.length !== 6) {
            alert('Please enter a 6-digit OTP');
            return;
        }

        const from = route.params?.from;

        if (from === 'Signup') {
            alert('Verification successful! Please log in.');
            navigation.replace('Login');
        } else {
            navigation.replace('Main');
        }
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
                            <TouchableOpacity
                                style={styles.backButton}
                                onPress={() => navigation.goBack()}
                            >
                                <Ionicons name="arrow-back" size={24} color={Colors.primary} />
                            </TouchableOpacity>

                            <Text style={styles.title}>OTP Verification</Text>
                            <Text style={styles.subtitle}>Enter 6-digit Verification code sent to your email id</Text>

                            <View style={styles.otpContainer}>
                                {otp.map((digit, index) => (
                                    <TextInput
                                        key={index}
                                        ref={(ref) => (inputRefs.current[index] = ref)}
                                        style={styles.otpInput}
                                        value={digit}
                                        onChangeText={(value) => handleOtpChange(value, index)}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                    />
                                ))}
                            </View>

                            <View style={styles.resendContainer}>
                                <Text style={styles.resendText}>
                                    Wait for {timer} seconds to
                                </Text>
                                <TouchableOpacity disabled={timer > 0} onPress={() => setTimer(60)}>
                                    <Text style={[styles.resendAction, timer > 0 && { opacity: 0.5 }]}> Resend OTP</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={styles.button} onPress={handleVerify}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>
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
        marginBottom: 35,
        textAlign: 'center',
        lineHeight: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    otpInput: {
        width: 40,
        height: 45,
        backgroundColor: Colors.lightPrimary,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.primary,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    button: {
        backgroundColor: Colors.primary,
        height: 45,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: Colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
    },
    resendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 25,
    },
    resendText: {
        color: Colors.textLight,
        fontSize: 13,
    },
    resendAction: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 13,
    },
});

export default OTPVerificationScreen;
