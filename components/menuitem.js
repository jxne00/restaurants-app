import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';

// displays details of the selected menu item
export function MenuItem({ route, navigation }) {
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
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Alert.alert(
              route.params.isinstock
                ? route.params.itemName + ' added to cart!'
                : route.params.itemName + ' is out of stock!',
              '',
              [
                {
                  text: 'Ok',
                  // direct back to Menu Screen
                  onPress: () => {
                    navigation.goBack();
                  },
                },
              ],
              { cancelable: true }
            )
          }>
          <Text style={styles.buttonText}>
            {route.params.isinstock ? 'Add to cart' : 'Out of Stock!'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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
    marginTop: 15,
  },
  descText: {
    fontSize: 18,
    margin: 20,
  },
  buttonStyle: {
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
  buttonText: {
    color: '#d4d4d4',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
