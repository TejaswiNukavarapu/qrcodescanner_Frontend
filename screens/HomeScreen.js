import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Card from '../components/Card';
import Button from '../components/Button';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Welcome to Expo Template!</Text>
        <Text style={styles.subtitle}>Start building your amazing app</Text>
        
        <Card>
          <Text style={styles.cardTitle}>Features</Text>
          <Text style={styles.cardText}>• React Native with Expo</Text>
          <Text style={styles.cardText}>• Navigation setup</Text>
          <Text style={styles.cardText}>• Reusable components</Text>
          <Text style={styles.cardText}>• Modern styling</Text>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>Getting Started</Text>
          <Text style={styles.cardText}>
            This template provides a solid foundation for your React Native app with Expo.
          </Text>
          <Button 
            title="Learn More" 
            style={styles.button}
            onPress={() => console.log('Button pressed')}
          />
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  button: {
    marginTop: 16,
    alignSelf: 'flex-start',
  },
});

export default HomeScreen;
