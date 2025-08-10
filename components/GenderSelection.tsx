import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS, SIZES } from '@/constants/theme';

export default function GenderSelection() {
    const [gender, setGender] = useState('null');

    function handleGenderSelection(genderSelection: string): void {
        setGender(genderSelection);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.genderContainerWrapper,
                    { borderWidth: 1, borderColor: gender === 'male' ? '#1DB954' : 'transparent', backgroundColor: gender === 'male' ? '#293642ff' : '#364858' }
                ]}
                onPress={() => handleGenderSelection('male')}>
                <View style={styles.genderContainer}>
                    <Text style={styles.genderText}>Male</Text>
                    <Image
                        source={require('../assets/images/male-icon.webp')}
                        style={styles.genderIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.genderContainerWrapper,
                    { borderWidth: 1, borderColor: gender === 'female' ? '#1DB954' : 'transparent', backgroundColor: gender === 'female' ? '#293642ff' : '#364858' }
                ]}
                onPress={() => handleGenderSelection('female')}>
                <View style={styles.genderContainer}>
                    <Text style={styles.genderText}>Female</Text>
                    <Image
                        source={require('../assets/images/female-icon.webp')}
                        style={styles.genderIcon} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10
    },
    genderContainerWrapper: {
        flex: 1 / 2,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.foreground,
        borderRadius: SIZES.xSmall
    },
    genderContainer: {
        gap: SIZES.small,
        alignItems: 'center',
    },
    genderIcon: {
        width: SIZES.xLarge * 2,
        height: SIZES.xLarge * 2,
    },
    genderText: {
        fontSize: SIZES.medium,
        color: COLORS.defaultText
    }
})