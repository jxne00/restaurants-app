import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import components
import { HomeScreen } from './components/homescreen';
import { Menu } from './components/menu';
import { MenuItem } from './components/menuitem';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#a09eba',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'black',
        }}>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{ title: 'Restaurants' }}
        />
        <Stack.Screen
          name='Menu'
          component={Menu}
          options={{ title: 'Menu' }}
        />
        <Stack.Screen
          name='MenuItem'
          component={MenuItem}
          options={({ route }) => ({
            title: route.params.restaurant,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
