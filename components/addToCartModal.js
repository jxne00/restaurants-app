import React from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { AddToCart } from '../data/handleCart';

const AddToCartModal = (props) => {
  const {
    modalVisible,
    setModalVisible,
    quantity,
    setQuantity,
    alreadyInCart,
    item,
  } = props;

  // increase and decrease quantity by 1
  const increase = () => setQuantity((prevCount) => prevCount + 1);
  const decrease = () =>
    setQuantity((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

  // function to handle adding item to cart
  const handleAddToCart = async () => {
    await AddToCart(item, quantity);
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          {/* "X" button to close modal */}
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => setModalVisible(false)}>
            <Ionicons name="close" size={26} color="#b60c0c" />
          </TouchableOpacity>

          <Text style={styles.header}>{item.itemName}</Text>

          <View style={styles.counterContainer}>
            <Ionicons
              name="remove"
              size={24}
              color="black"
              onPress={decrease}
            />
            <Text style={styles.qty}>{quantity}</Text>
            <Ionicons name="add" size={24} color="black" onPress={increase} />
          </View>

          <TouchableOpacity
            style={styles.addcartBtn}
            onPress={() => {
              quantity > 0 ? handleAddToCart() : alert('Quantity cannot be 0');
            }}>
            <Ionicons name="cart-outline" size={24} color="#d4d4d4" />
            {/* set button text based on whether item is already in cart */}
            {alreadyInCart ? (
              <Text style={styles.addcartBtnText}>Update cart</Text>
            ) : (
              <Text style={styles.addcartBtnText}>Add to cart</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: '#acd0eb',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  header: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    padding: 10,
  },
  qty: {
    fontSize: 20,
  },
  addcartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a2561',
    marginTop: 20,
    padding: 10,
    borderRadius: 20,
  },
  addcartBtnText: {
    fontSize: 18,
    color: '#d4d4d4',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cancelBtn: {
    alignSelf: 'flex-end',
  },
});

export { AddToCartModal };
