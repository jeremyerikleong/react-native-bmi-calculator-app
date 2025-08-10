import Calculator from '@/components/Calculator';
import { Stack } from 'expo-router';
import { StyleSheet, View } from "react-native";

import { COLORS, SIZES } from '@/constants/theme';

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: 'BMI Calculator' }} />
      <View style={styles.container}>
        <Calculator />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: SIZES.large,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.background
  }
})
