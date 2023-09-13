import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RetrieveCart, UpdateCartItem } from '../data/handleCart';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      const cart = await RetrieveCart();
      if (cart) setCart(cart);
    };
    getCart();
  }, [cart]);

  const renderFlatListItem = ({ item }) => (
    <View style={styles.itemContainer} key={item.id}>
      <View style={styles.itemContentContainer}>
        <Image style={styles.imgStyle} source={item.itemImg} />

        <View style={styles.namePriceCont}>
          <Text style={styles.itemName}>{item.itemName}</Text>
          <Text style={styles.itemPrice}>{item.itemPrice}</Text>
        </View>

        <View style={styles.counterContainer}>
          <Ionicons
            name="remove"
            size={22}
            color="black"
            onPress={() => {
              if (item.quantity > 0) {
                UpdateCartItem(item.id, item.quantity - 1);
              }
            }}
          />
          <Text style={styles.qty}>{item.quantity}</Text>
          <Ionicons
            name="add"
            size={22}
            color="black"
            onPress={() => {
              UpdateCartItem(item.id, item.quantity + 1);
            }}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cart.length === 0 && (
        <Text style={styles.emptyText}>Cart is empty!</Text>
      )}

      <FlatList
        data={cart}
        renderItem={renderFlatListItem}
        keyExtractor={(item) => item.id}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    width: '95%',
    padding: 10,
    backgroundColor: '#dad9d9',
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
  itemContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgStyle: {
    width: '20%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
    alignSelf: 'center',
  },
  namePriceCont: {
    width: '50%',
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '20%',
  },
  qty: {
    fontSize: 16,
  },
  emptyText: {
    fontSize: 20,
    marginTop: '10%',
  },
});

export { Cart };
