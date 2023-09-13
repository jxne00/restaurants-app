import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

// displays details of the selected menu item
const MenuItem = ({ route, navigation }) => {
  // render button based on whether item is in stock
  const renderButton = () => {
    route.params.isinstock ? (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={handleButtonPress}>
          <Ionicons name="cart-outline" size={24} color="#d4d4d4" />
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleButtonPress}>
          <MaterialIcons name="error-outline" size={24} color="#d4d4d4" />
          <Text style={styles.buttonText}>Out of Stock!</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // function to handle button press
  const handleButtonPress = () => {
    Alert.alert(
      route.params.isinstock
        ? route.params.itemName + ' added to cart!'
        : route.params.itemName + ' is out of stock!',
      '',
      [
        {
          text: 'Ok',
          onPress: () => {
            navigation.goBack(); // direct back to Menu Screen
          },
        },
      ],
      { cancelable: true },
    );
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

        {/* button showing either 'add to cart' or 'out of stock' */}
        {renderButton()}
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
