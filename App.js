import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExpenses from './screens/AllExpenses';
import TabBar from './components/TabBar';
import PressableButton from './components/PressableButton';
import AddExpenses from './screens/AddExpenses';
import styleObj from './style';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabBar} options={{ headerShown: false }}/>
      <Stack.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={({ navigation }) => ({
            headerRight: () => (
              <PressableButton
                pressedFunction={() => {
                  navigation.navigate('AddExpenses');
                }}
                pressedStyle={styleObj.pressedStyle}
                defaultStyle={styleObj.defaultStyle}
              >
                <Text>+</Text>
              </PressableButton>
            ),
          })}
        />
        <Stack.Screen name="AddExpenses" component={AddExpenses}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
