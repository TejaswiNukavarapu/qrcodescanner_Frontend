import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function QRSuccessScreen({ route, navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <MaterialCommunityIcons
                    name="check-circle"
                    size={100}
                    color="#00a99d"
                    style={styles.icon}
                />

                <Text style={styles.title}>Scan Successful!</Text>
                <Text style={styles.subtitle}>
                    The QR code was recognized and validated.
                </Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>SCAN ANOTHER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    icon: {
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#7f8c8d',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 24,
    },
    buttonContainer: {
        width: '100%',
        maxWidth: 250,
    },
    primaryButton: {
        backgroundColor: '#00a99d',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    }
});
