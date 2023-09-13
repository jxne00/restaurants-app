import AsyncStorage from '@react-native-async-storage/async-storage';

const CART_KEY = '@CART';

// helper function to retrieve items from async storage
const RetrieveCart = async () => {
  try {
    const storedCart = await AsyncStorage.getItem(CART_KEY);
    if (storedCart !== null) {
      return JSON.parse(storedCart);
    }
    return [];
  } catch (error) {
    console.error('Error fetching cart: ', error);
    return [];
  }
};

// helper function to get item quantity from async storage
const GetItemQuantity = async (itemId) => {
  try {
    const cart = await RetrieveCart();
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      return item.quantity;
    }
    return 0;
  } catch (error) {
    console.error('Error fetching item quantity: ', error);
    return 0;
  }
};

// helper function to add items from async storage
const AddToCart = async (item, quantity) => {
  try {
    // retrieve cart from async storage
    const cart = await RetrieveCart();

    // check if item is already in cart
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    // if item is in cart, update quantity
    if (itemIndex > -1) {
      cart[itemIndex].quantity += quantity;
    } else {
      // else add item to cart
      cart.push({ ...item, quantity });
    }
    // update async storage with updated cart
    await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));

    // print cart to console
    console.log('Cart: ', cart);
  } catch (error) {
    console.error('Error adding to cart: ', error);
  }
};

// helper function to remove items from async storage
const RemoveFromCart = async (itemId) => {
  try {
    const cart = await getCart();
    const updatedCart = cart.filter((item) => item.id !== itemId);
    await AsyncStorage.setItem(CART_KEY, JSON.stringify(updatedCart));

    console.log('Cart: ', updatedCart);
  } catch (error) {
    console.error('Error removing from cart: ', error);
  }
};

// helper function to update item quantity in async storage
const UpdateCartItem = async (itemId, newQuantity) => {
  try {
    const cart = await getCart();
    const itemIndex = cart.findIndex((item) => item.id === itemId);

    if (itemIndex > -1) {
      cart[itemIndex].quantity = newQuantity;
      await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
  } catch (error) {
    console.error('Error updating item quantity: ', error);
  }
};

// helper function to clear async storage
const EmptyCart = async () => {
  try {
    // clear async storage
    await AsyncStorage.removeItem(CART_KEY);
  } catch (error) {
    console.error('Error clearing cart: ', error);
  }
};

// helper function to check if item is in cart
const CheckIfExist = async (itemId) => {
  try {
    const cart = await RetrieveCart();
    return cart.some((item) => item.id === itemId);
  } catch (error) {
    console.error('Error checking if item is in cart: ', error);
    return false;
  }
};

export {
  RetrieveCart,
  AddToCart,
  RemoveFromCart,
  UpdateCartItem,
  EmptyCart,
  CheckIfExist,
  GetItemQuantity,
};
