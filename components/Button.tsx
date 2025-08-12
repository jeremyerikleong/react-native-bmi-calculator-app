import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { COLORS, SIZES } from '@/constants/theme';

interface buttonProps {
    title: string,
    handleOnPress: () => void;
}

export default function Button({ title, handleOnPress }: buttonProps) {
    return (
        <Pressable
            style={styles.btn}
            onPress={handleOnPress}>
            <Text style={styles.btnText}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {

        backgroundColor: COLORS.btnPrimary,
        borderRadius: SIZES.small / 2,
        paddingVertical: SIZES.medium,
    },
    btnText: {
        color: COLORS.defaultText,
        fontSize: SIZES.large,
        fontWeight: 500,
        textAlign: 'center'
    }
})