import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { CheckIfExist, GetItemQuantity } from '../data/handleCart';
import { AddToCartModal } from './addToCartModal';

// displays details of the selected menu item
const MenuItem = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false); // modal to add item to cart
  const [quantity, setQuantity] = useState(0); // quantity of item to add to cart
  const [alreadyInCart, setAlreadyInCart] = useState(false);

  useEffect(() => {
    // check if item is already in cart
    const checkIfInCart = async () => {
      const exist = await CheckIfExist(route.params.id);
      setAlreadyInCart(exist);
    };
    checkIfInCart();
  }, []);

  useEffect(() => {
    // get quantity of item in cart
    const getQuantity = async () => {
      const itemQuantity = await GetItemQuantity(route.params.id);
      setQuantity(itemQuantity);
    };
    getQuantity();
  }, []);

  // show modal to add item to cart
  const handleButtonPress = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.imgStyle} source={route.params.itemImg} />
        <View style={styles.textContainer}>
          <Text style={styles.itemNameText}>
            {route.params.itemName}
            {route.params.isinstock
              ? ' (' + route.params.itemPrice + ')'
              : '\n(Out of stock)'}
          </Text>
          <Text style={styles.descText}>{route.params.itemDesc}</Text>
        </View>

        {/* render different buttons depending on whether item is in stock */}
        {route.params.isinstock ? (
          // add for adding item to cart if in stock
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={handleButtonPress}>
              <Ionicons name="cart-outline" size={24} color="#d4d4d4" />
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // disabled button for out of stock items
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle} disabled={'true'}>
              <MaterialIcons name="error-outline" size={24} color="#d4d4d4" />
              <Text style={styles.buttonText}>Out of Stock!</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* modal to add item to cart */}
        <AddToCartModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          quantity={quantity}
          setQuantity={setQuantity}
          alreadyInCart={alreadyInCart}
          item={route.params}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87adca',
  },
  imgStyle: {
    width: '100%',
    height: '50%',
  },
  textContainer: {
    position: 'absolute',
    height: '60%',
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#87adca',
    color: '#000',
  },
  itemNameText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
  },
  descText: {
    fontSize: 18,
    margin: 20,
  },
  buttonContainer: {
    backgroundColor: '#61617b',
    height: 55,
    width: '85%',
    bottom: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#d4d4d4',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export { MenuItem };
