import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import components
import { HomeScreen } from './screens/home';
import { Menu } from './components/menu';
import { MenuItem } from './components/menuitem';

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
          options={{ title: 'Restaurants' }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
