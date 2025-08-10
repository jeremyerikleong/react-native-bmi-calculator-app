import { SafeAreaView, StyleSheet } from 'react-native';
import GenderSelection from './GenderSelection';
import HeightSlider from './HeightSlider';

import { SIZES } from '@/constants/theme';

export default function Calculator() {
    return (
        <SafeAreaView style={styles.container}>
            <GenderSelection />
            <HeightSlider />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: SIZES.medium
    }
})