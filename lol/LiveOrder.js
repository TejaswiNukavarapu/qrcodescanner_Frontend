import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const isWeb = Platform.OS === 'web';

const LiveOrder = ({ navigation }) => {
  const orders = [
    { id: '#001', items: 5, status: 'Picking', countdown: '45/60 sec', worker: 'Rohit Kumar' },
    { id: '#002', items: 3, status: 'Packing', countdown: '12/60 sec', worker: 'Sumit Sharma' },
    { id: '#003', items: 8, status: 'Picking', countdown: '55/60 sec', worker: 'Anil Gupta' },
    { id: '#004', items: 2, status: 'Picking', countdown: '30/60 sec', worker: 'Rohit Kumar' },
    { id: '#005', items: 10, status: 'Picking', countdown: '10/60 sec', worker: 'Rohit Kumar' },
    { id: '#006', items: 4, status: 'Picking', countdown: '22/60 sec', worker: 'Rohit Kumar' },
  ];

  const OrderCard = ({ order }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.orderId}>Order ID: <Text style={styles.bold}>{order.id}</Text></Text>
        <Text style={styles.itemCount}>{order.items} Items</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>Order Status:</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{order.status}</Text>
        </View>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>Countdown:</Text>
        <Text style={styles.countdownValue}>{order.countdown} <Ionicons name="timer-outline" size={16} color="#008080" /></Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>By Whom:</Text>
        <Text style={styles.workerName}>{order.worker}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.responsiveWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#008080" />
          </TouchableOpacity>
          <Text style={styles.title}>Live Order</Text>
        </View>

        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>All Regions <Ionicons name="chevron-down" size={14} color="#fff" /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>All Stores <Ionicons name="chevron-down" size={14} color="#fff" /></Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.listContent}>
          <View style={styles.gridContainer}>
            {orders.map((order, index) => (
              <OrderCard key={index} order={order} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isWeb ? '#f0f2f5' : '#fff',
    alignItems: 'center',
    width: '100%',
  },
  responsiveWrapper: {
    flex: 1,
    width: '100%',
    maxWidth: isWeb ? '100%' : '100%',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#008080',
  },
  filterContainer: {
    flexDirection: 'row',
    padding: 15,
    gap: 10,
  },
  filterButton: {
    backgroundColor: '#008080',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  listContent: {
    padding: 20,
  },
  gridContainer: {
    flexDirection: isWeb ? 'row' : 'column',
    flexWrap: isWeb ? 'wrap' : 'nowrap',
    gap: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: isWeb ? 0 : 20,
    width: isWeb ? '31.5%' : '100%', // 3 columns on laptop
    borderWidth: 1,
    borderColor: '#e0f2f1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    minHeight: 180,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  orderId: {
    fontSize: 16,
    color: '#444',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  itemCount: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#666',
    width: 100,
  },
  statusBadge: {
    backgroundColor: '#e0f2f1',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#008080',
  },
  statusText: {
    color: '#008080',
    fontSize: 12,
    fontWeight: '600',
  },
  countdownValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008080',
  },
  workerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
});

export default LiveOrder;
