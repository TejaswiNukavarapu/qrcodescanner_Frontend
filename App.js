import React from 'react';
import { View, StyleSheet, Platform, SafeAreaView } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  if (Platform.OS === 'web') {
    return (
      <View style={styles.webContainer}>
        <View style={styles.phoneWrapper}>
          <AppNavigator />
        </View>
      </View>
    );
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    backgroundColor: '#333', // Dark background for the area outside the "phone"
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneWrapper: {
    width: '100%',
    maxWidth: 450, // Typical mobile phone width
    height: '100%',
    maxHeight: 900, // Typical mobile phone height
    backgroundColor: '#fff',
    overflow: 'hidden',
    // Realistic shadow for the "phone" look
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
    // Rounded corners like a phone
    borderRadius: Platform.OS === 'web' ? 20 : 0,
    marginVertical: Platform.OS === 'web' ? 20 : 0,
  },
});
