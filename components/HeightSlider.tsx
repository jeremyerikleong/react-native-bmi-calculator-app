import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS, SIZES } from '@/constants/theme';

export default function HeightSlider() {
    const [height, setHeight] = useState(150);

    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <Text style={styles.title}>Height</Text>
                <View style={styles.heightDisplayContainer}>
                    <Text style={styles.heightText}>{height.toFixed(0)}</Text>
                    <Text style={styles.unitText}>cm</Text>
                </View>
                <Slider
                    style={{ width: 300, height: 40 }}
                    minimumValue={0}
                    maximumValue={300}
                    minimumTrackTintColor={COLORS.btnPrimary}
                    maximumTrackTintColor={'#a7a7a7'}
                    thumbTintColor={COLORS.btnPrimary}
                    value={height}
                    onValueChange={(prev) => setHeight(prev)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
    },
    heightDisplayContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: SIZES.xSmall,
        marginVertical: SIZES.medium
    },
    heightText: {
        fontSize: SIZES.medium * 2,
        color: COLORS.defaultText
    },
    unitText: {
        fontSize: SIZES.medium,
        color: COLORS.defaultText,
        marginBottom: 4
    }
})