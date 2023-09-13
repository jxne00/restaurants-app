import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { EmptyCart } from './data/handleCart';

// import components
import { HomeScreen } from './screens/home';
import { Menu } from './components/menu';
import { MenuItem } from './components/menuitem';
import { Cart } from './components/cart';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a2561',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#e9eaf2',
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Restaurants',
            headerRight: () => (
              <Ionicons
                name="cart-outline"
                size={24}
                color="#e9eaf2"
                style={{ marginRight: 20 }}
                onPress={() => navigation.navigate('Cart')}
              />
            ),
          })}
        />

        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: 'Menu' }}
        />

        <Stack.Screen
          name="MenuItem"
          component={MenuItem}
          options={({ route }) => ({
            title: route.params.restaurant,
          })}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'My Cart',
            headerBackTitle: 'Back',
            headerRight: () => (
              <Ionicons
                name="trash-outline"
                size={24}
                color="#e9eaf2"
                style={{ marginRight: 20 }}
                onPress={() => {
                  Alert.alert(
                    'Warning',
                    'Are you sure you want to clear your cart?',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => {},
                        style: 'cancel',
                      },
                      {
                        text: 'Yes',
                        onPress: () => {
                          EmptyCart();
                        },
                      },
                    ],
                    { cancelable: true },
                  );
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
