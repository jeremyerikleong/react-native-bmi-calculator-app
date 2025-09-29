import Calculator from '@/components/Calculator';
import Result from '@/components/Result';
import StartScreen from '@/components/StartScreen';
import { NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS, SIZES } from '@/constants/theme';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator initialRouteName="StartScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.background
          },
          headerTintColor: COLORS.defaultText,
          contentStyle: {
            backgroundColor: COLORS.background,
            padding: SIZES.large,
          }
        }}>
        <Stack.Screen name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false, animation: "fade" }}
        />
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
