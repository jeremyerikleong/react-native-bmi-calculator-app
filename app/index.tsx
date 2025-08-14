import Calculator from '@/components/Calculator';
import Result from '@/components/Result';
import { NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="Calculator"
          component={Calculator}
        />
        <Stack.Screen name="Result"
          component={Result}
        />
      </Stack.Navigator>
    </NavigationIndependentTree>
  );
}
