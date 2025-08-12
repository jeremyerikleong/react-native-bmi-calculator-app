import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Button from './Button';
import Counter from './Counter';
import GenderSelection from './GenderSelection';
import HeightSlider from './HeightSlider';

import { SIZES } from '@/constants/theme';

type GenderType = 'male' | 'female';

export default function Calculator() {
    const [gender, setGender] = useState<GenderType>('male');
    const [height, setHeight] = useState(150);
    const [weight, setWeight] = useState(50);
    const [age, setAge] = useState(13);
    const [BMI, setBMI] = useState(0);


    function handleGenderSelection(genderSelection: GenderType) {
        setGender(genderSelection);
    }

    function handleHeightSlider(prev: number) {
        setHeight(prev);
    }

    function CalculateBMI() {
        if (gender && height && weight && age) {
            const formula = weight / ((height / 100) ** 2);
            setBMI(+formula.toFixed(1));
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <GenderSelection gender={gender} handleGenderSelection={handleGenderSelection} />
            <HeightSlider height={height} handleHeightSlider={handleHeightSlider} />
            <View style={styles.counterContainer}>
                <Counter
                    title={'weight'}
                    amount={weight}
                    handleAmountIncrement={() => setWeight(prev => prev + 1)}
                    handleAmountDecrement={() => { if (weight >= 1) { setWeight(prev => prev - 1) } }}
                />
                <Counter
                    title={'age'}
                    amount={age}
                    handleAmountIncrement={() => setAge(prev => prev + 1)}
                    handleAmountDecrement={() => { if (age >= 1) { setAge(prev => prev - 1) } }}
                />
            </View>
            <Button title='Calculate' handleOnPress={CalculateBMI} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: SIZES.medium
    },
    counterContainer: {
        flexDirection: 'row',
        gap: SIZES.xSmall,
    }
})