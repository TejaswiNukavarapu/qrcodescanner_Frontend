import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Card from '../components/Card';
import Button from '../components/Button';
import { useState } from 'react';

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [location, setLocation] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Settings</Text>

        <Card>
          <Text style={styles.cardTitle}>Preferences</Text>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Push Notifications</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#767577', true: '#007AFF' }}
              thumbColor={notifications ? '#fff' : '#f4f3f4'}
            />
          </View>

          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#767577', true: '#007AFF' }}
              thumbColor={darkMode ? '#fff' : '#f4f3f4'}
            />
          </View>

          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Location Services</Text>
            <Switch
              value={location}
              onValueChange={setLocation}
              trackColor={{ false: '#767577', true: '#007AFF' }}
              thumbColor={location ? '#fff' : '#f4f3f4'}
            />
          </View>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>Account</Text>
          <Button 
            title="Change Password" 
            style={styles.button}
            onPress={() => console.log('Change Password')}
          />
          <Button 
            title="Privacy Policy" 
            style={styles.button}
            onPress={() => console.log('Privacy Policy')}
          />
          <Button 
            title="Terms of Service" 
            style={styles.button}
            onPress={() => console.log('Terms of Service')}
          />
        </Card>

        <Card>
          <Text style={styles.cardTitle}>Support</Text>
          <Button 
            title="Help Center" 
            style={styles.button}
            onPress={() => console.log('Help Center')}
          />
          <Button 
            title="Contact Us" 
            style={styles.button}
            onPress={() => console.log('Contact Us')}
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
    marginBottom: 20,
    color: '#333',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
});

export default SettingsScreen;
