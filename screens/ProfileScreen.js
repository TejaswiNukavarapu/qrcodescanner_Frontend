import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Card from '../components/Card';
import Button from '../components/Button';
import Colors from '../constants/Colors';

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@gmail.com</Text>
        </View>

        <Card>
          <Text style={styles.cardTitle}>About</Text>
          <Text style={styles.cardText}>
            This is a sample profile screen for MOM Pharmacy.
          </Text>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>Account Settings</Text>
          <Button
            title="Edit Profile"
            style={styles.button}
            onPress={() => console.log('Edit Profile')}
          />
          <Button
            title="Privacy Settings"
            style={styles.button}
            onPress={() => console.log('Privacy Settings')}
          />
          <Button
            title="Logout"
            style={[styles.button, styles.logoutButton]}
            onPress={handleLogout}
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
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
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
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  logoutButton: {
    backgroundColor: '#FF3B30', // Red for logout
    marginTop: 20,
    alignSelf: 'stretch',
  },
});

export default ProfileScreen;
