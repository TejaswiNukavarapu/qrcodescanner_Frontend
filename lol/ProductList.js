import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const isWeb = Platform.OS === 'web';

const ProductList = ({ navigation }) => {
    const products = [
        { id: 'PID12561', category: 'Category Name', name: 'Paracetamol | 500mg' },
        { id: 'PID12562', category: 'Category Name', name: 'Amoxicillin | 250mg' },
        { id: 'PID12563', category: 'Category Name', name: 'Cough Syrup | 100ml' },
        { id: 'PID12564', category: 'Category Name', name: 'Vitamin D3 | 60K' },
        { id: 'PID12565', category: 'Category Name', name: 'Ibuprofen | 400mg' },
        { id: 'PID12566', category: 'Category Name', name: 'Aspirin | 100mg' },
        { id: 'PID12567', category: 'Category Name', name: 'Metformin | 500mg' },
        { id: 'PID12568', category: 'Category Name', name: 'Atorvastatin | 10mg' },
    ];

    // Using a stable remote image that looks like a medical tablet blister pack
    const tabletImage = 'https://cdn-icons-png.flaticon.com/512/822/822143.png';

    const ProductCard = ({ product }) => (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: tabletImage }}
                    style={styles.productImage}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.productId}>Product ID: <Text style={styles.textGray}>{product.id}</Text></Text>
                <Text style={styles.category}>Category: <Text style={styles.textGray}>{product.category}</Text></Text>
                <Text style={styles.productName}>Product Name: <Text style={styles.bold}>{product.name}</Text></Text>
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
                    <Text style={styles.title}>Product List</Text>
                </View>

                <View style={styles.filterContainer}>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>All Regions <Ionicons name="chevron-down" size={14} color="#fff" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>All Stores <Ionicons name="chevron-down" size={14} color="#fff" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>All Warehouse <Ionicons name="chevron-down" size={14} color="#fff" /></Text>
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={styles.listContent}>
                    <View style={styles.gridContainer}>
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
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
        maxWidth: '100%',
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
        flexWrap: 'wrap',
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
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginBottom: isWeb ? 0 : 15,
        width: isWeb ? '23.5%' : '100%', // 4 columns on laptop view
        borderWidth: 1,
        borderColor: '#e0f2f1',
        alignItems: 'center',
        minHeight: 120,
    },
    imageContainer: {
        width: 70,
        height: 70,
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#eee',
        overflow: 'hidden',
    },
    productImage: {
        width: '90%',
        height: '90%',
    },
    detailsContainer: {
        flex: 1,
    },
    productId: {
        fontSize: 14,
        color: '#333',
        marginBottom: 2,
    },
    category: {
        fontSize: 14,
        color: '#333',
        marginBottom: 4,
    },
    productName: {
        fontSize: 14,
        color: '#333',
    },
    textGray: {
        color: '#666',
    },
    bold: {
        fontWeight: 'bold',
        color: '#000',
    },
});

export default ProductList;
