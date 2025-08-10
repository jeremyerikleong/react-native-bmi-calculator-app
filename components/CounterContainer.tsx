import { StyleSheet, View } from 'react-native';
import Counter from './Counter';

import { SIZES } from '@/constants/theme';

export default function CounterContainer() {
    return (
        <View style={styles.container}>
            <Counter title={'weight'} />
            <Counter title={'age'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: SIZES.xSmall,
    }
})