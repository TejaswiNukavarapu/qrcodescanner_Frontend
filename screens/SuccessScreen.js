import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SuccessScreen({ route, navigation }) {
    const { qrData } = route.params || {};

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

                {qrData && (
                    <View style={styles.dataContainer}>
                        <Text style={styles.dataLabel}>Scanned Data:</Text>
                        <Text style={styles.dataText}>{qrData}</Text>
                    </View>
                )}

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
        marginBottom: 20,
        lineHeight: 24,
    },
    dataContainer: {
        backgroundColor: '#f8f9fa',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        marginBottom: 40,
        borderLeftWidth: 4,
        borderLeftColor: '#00a99d',
    },
    dataLabel: {
        fontSize: 14,
        color: '#7f8c8d',
        marginBottom: 4,
        fontWeight: '600',
    },
    dataText: {
        fontSize: 16,
        color: '#2c3e50',
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
