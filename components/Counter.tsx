import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS, SIZES } from '@/constants/theme';

interface CounterProps {
    title: string;
    amount: number;
    handleAmountIncrement: () => void;
    handleAmountDecrement: () => void;
}

export default function Counter({ title, amount, handleAmountIncrement, handleAmountDecrement }: CounterProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.amountDisplayContainer}>
                <Text style={styles.amountText}>{amount}</Text>
                {title === 'weight' && <Text style={styles.unitText}>kg</Text>}
            </View>
            <View style={styles.btnCounterContainer}>
                <TouchableOpacity
                    style={styles.btnCounter}
                    onPress={handleAmountDecrement}>
                    <Text style={styles.btnCounterText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnCounter}
                    onPress={handleAmountIncrement}>
                    <Text style={styles.btnCounterText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1 / 2,
        backgroundColor: COLORS.foreground,
        borderRadius: SIZES.xSmall,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SIZES.large,
    },
    sliderContainer: {
        alignItems: 'center'
    },
    title: {
        fontSize: SIZES.large,
        fontWeight: 500,
        color: COLORS.defaultText,
        textTransform: 'capitalize'
    },
    amountDisplayContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: SIZES.xSmall,
        marginVertical: SIZES.medium
    },
    amountText: {
        fontSize: SIZES.medium * 2,
        color: COLORS.defaultText
    },
    unitText: {
        fontSize: SIZES.medium,
        color: COLORS.defaultText,
        marginBottom: 4
    },
    btnCounterContainer: {
        flexDirection: 'row',
        gap: SIZES.xSmall
    },
    btnCounter: {
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZES.small * 3,
        height: SIZES.small * 3,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.background
    },
    btnCounterText: {
        color: COLORS.defaultText,
        fontSize: SIZES.medium,
        fontWeight: 500
    }
})