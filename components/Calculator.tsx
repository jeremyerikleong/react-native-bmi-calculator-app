import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import CounterContainer from './CounterContainer';
import GenderSelection from './GenderSelection';
import HeightSlider from './HeightSlider';

import { COLORS, SIZES } from '@/constants/theme';

export default function Calculator() {
    return (
        <SafeAreaView style={styles.container}>
            <GenderSelection />
            <HeightSlider />
            <CounterContainer />
            <Pressable style={styles.btnCalculate}>
                <Text style={styles.btnCalculateText}>Calculate</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: SIZES.medium
    },
    btnCalculate: {
        backgroundColor: COLORS.btnPrimary,
        borderRadius: SIZES.small / 2,
        paddingVertical: SIZES.medium
    },
    btnCalculateText: {
        color: COLORS.defaultText,
        fontSize: SIZES.large,
        fontWeight: 500,
        textAlign: 'center'
    }
})