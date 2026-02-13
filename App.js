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
    backgroundColor: '#f0f2f5', // Professional light gray background
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneWrapper: {
    width: Platform.OS === 'web' ? '96%' : '100%',
    maxWidth: Platform.OS === 'web' ? '96%' : 450, // Massive width for laptop, narrow for mobile
    height: Platform.OS === 'web' ? '96%' : '100%',
    maxHeight: Platform.OS === 'web' ? '96%' : '100%',
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: Platform.OS === 'web' ? 0.05 : 0.3,
    shadowRadius: 15,
    elevation: 20,
    borderRadius: Platform.OS === 'web' ? 20 : 0,
    marginVertical: 0,
  },
});
