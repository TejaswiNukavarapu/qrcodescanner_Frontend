// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import Card from '../components/Card';
// import Button from '../components/Button';
// import Colors from '../constants/Colors';

// const ProfileScreen = ({ navigation }) => {
//   const handleLogout = () => {
//     navigation.replace('Login');
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar style="dark" />
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <View style={styles.profileHeader}>
//           <View style={styles.avatar}>
//             <Text style={styles.avatarText}>JD</Text>
//           </View>
//           <Text style={styles.profileName}>John Doe</Text>
//           <Text style={styles.profileEmail}>john.doe@gmail.com</Text>
//         </View>

//         <Card>
//           <Text style={styles.cardTitle}>About</Text>
//           <Text style={styles.cardText}>
//             This is a sample profile screen for MOM Pharmacy.
//           </Text>
//         </Card>

//         <Card>
//           <Text style={styles.cardTitle}>Account Settings</Text>
//           <Button
//             title="Edit Profile"
//             style={styles.button}
//             onPress={() => console.log('Edit Profile')}
//           />
//           <Button
//             title="Privacy Settings"
//             style={styles.button}
//             onPress={() => console.log('Privacy Settings')}
//           />
//           <Button
//             title="Logout"
//             style={[styles.button, styles.logoutButton]}
//             onPress={handleLogout}
//           />
//         </Card>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   scrollContent: {
//     padding: 20,
//   },
//   profileHeader: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   avatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: Colors.primary,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 16,
//   },
//   avatarText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   profileName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 4,
//     color: '#333',
//   },
//   profileEmail: {
//     fontSize: 16,
//     color: '#666',
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 12,
//     color: '#333',
//   },
//   cardText: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 8,
//     lineHeight: 20,
//   },
//   button: {
//     marginTop: 12,
//     alignSelf: 'flex-start',
//   },
//   logoutButton: {
//     backgroundColor: '#FF3B30', // Red for logout
//     marginTop: 20,
//     alignSelf: 'stretch',
//   },
// });

// export default ProfileScreen;

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileCard}>
          <View style={styles.closeBtn}>
            <Ionicons name="close" size={24} color="#00b8a9" />
          </View>

          <Text style={styles.title}>User Profile</Text>

          <View style={styles.profileHeader}>
            <View style={styles.imgWrapper}>
              <View style={styles.imgBox}>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/10041/10041755.png' }}
                  style={styles.avatar}
                />
              </View>
            </View>
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Saipriya</Text>
            <Text style={styles.profileEmail}>Admin</Text>

            <View style={styles.row}>
              <Ionicons name="mail-outline" size={16} color="#00b8a9" />
              <Text style={styles.contactText}>ps@mompharmacy</Text>
            </View>

            <View style={styles.row}>
              <Ionicons name="call-outline" size={16} color="#00b8a9" />
              <Text style={styles.contactText}>+91 7865384672</Text>
            </View>
          </View>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  closeBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e6f9f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  imgWrapper: {
    padding: 4,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#00b8a9',
    borderStyle: 'dashed',
  },
  imgBox: {
    width: 150,
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  profileInfo: {
    alignItems: 'center',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 16,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
});

export default ProfileScreen;
