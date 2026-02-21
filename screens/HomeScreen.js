// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import Card from '../components/Card';
// import Button from '../components/Button';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <Text style={styles.title}>Welcome to Expo Template!</Text>
//         <Text style={styles.subtitle}>Start building your amazing app</Text>

//         <Card>
//           <Text style={styles.cardTitle}>Features</Text>
//           <Text style={styles.cardText}>• React Native with Expo</Text>
//           <Text style={styles.cardText}>• Navigation setup</Text>
//           <Text style={styles.cardText}>• Reusable components</Text>
//           <Text style={styles.cardText}>• Modern styling</Text>
//         </Card>

//         <Card>
//           <Text style={styles.cardTitle}>Getting Started</Text>
//           <Text style={styles.cardText}>
//             This template provides a solid foundation for your React Native app with Expo.
//           </Text>
//           <Button
//             title="Learn More"
//             style={styles.button}
//             onPress={() => console.log('Button pressed')}
//           />
//         </Card>

//         <Card>
//           <Text style={styles.cardTitle}>Live Demo (lol)</Text>
//           <Text style={styles.cardText}>Check out the responsive order and product screens.</Text>
//           <View style={{ flexDirection: 'row', gap: 10 }}>
//             <Button
//               title="Live Order"
//               style={[styles.button, { flex: 1 }]}
//               onPress={() => navigation.navigate('LiveOrder')}
//             />
//             <Button
//               title="Product List"
//               style={[styles.button, { flex: 1 }]}
//               onPress={() => navigation.navigate('ProductList')}
//             />
//           </View>
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
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 8,
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: '#666',
//     marginBottom: 30,
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
//     marginTop: 16,
//     alignSelf: 'flex-start',
//   },
// });

// export default HomeScreen;


import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.title1}>MOM</Text>
        <Text style={styles.title2}>PHARMACY</Text>

        <Pressable
          style={styles.profile}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons name="person" size={24} color="#fff" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.row}>
          <Pressable style={styles.box} onPress={() => navigation.navigate('QRScanner')}>
            <MaterialCommunityIcons name="qrcode-scan" size={48} color="#fff" />
            <Text style={styles.boxText}>Scan QR Code</Text>
          </Pressable>

          <Pressable style={styles.box} onPress={() => navigation.navigate('Scanner')}>
            <MaterialCommunityIcons name="barcode-scan" size={48} color="#fff" />
            <Text style={styles.boxText}>Scan Bar Code</Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('LiveOrder')}
        >
          <View style={styles.btnLeft}>
            <MaterialCommunityIcons name="cart" size={32} color="#fff" />
            <Text style={styles.btnText}>Live Order</Text>
          </View>
          <Ionicons name="arrow-forward" size={28} color="#fff" />
        </Pressable>

        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('ProductList')}
        >
          <View style={styles.btnLeft}>
            <MaterialCommunityIcons name="clipboard-list" size={32} color="#fff" />
            <Text style={styles.btnText}>Product List</Text>
          </View>
          <Ionicons name="arrow-forward" size={28} color="#fff" />
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#e6f9f7',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#00b8a9',
  },
  title1: {
    fontSize: 28,
    fontWeight: '700',
    color: '#00b8a9',
    letterSpacing: 1,
  },
  title2: {
    fontSize: 28,
    fontWeight: '700',
    color: '#00b8a9',
    letterSpacing: 1,
  },
  profile: {
    position: 'absolute',
    top: 60,
    right: 24,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#00b8a9',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00b8a9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  content: {
    padding: 24,
    paddingTop: 32,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 16,
    maxWidth: 400,
    width: '100%',
  },
  box: {
    flex: 1,
    backgroundColor: '#00b8a9',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
    shadowColor: '#00b8a9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  boxText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 22,
  },
  btn: {
    backgroundColor: '#00b8a9',
    borderRadius: 20,
    padding: 20,
    paddingVertical: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    minHeight: 80,
    shadowColor: '#00b8a9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
    maxWidth: 400,
    width: '100%',
  },
  btnLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;