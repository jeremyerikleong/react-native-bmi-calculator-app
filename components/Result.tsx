import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

import { COLORS, SIZES } from '@/constants/theme';

type ResultProps = {
    navigation: any;
    route: any;
};

export default function Result({ navigation, route }: ResultProps) {
    const { bmi } = route.params;
    const [resultColor, setResultColor] = useState('');
    const [healthStatus, setHealthStatus] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        switch (true) {
            case bmi < 18.5:
                setHealthStatus("Underweight");
                setResultColor("#5dc8f2");
                setMessage("You are underweight.");
                break;
            case bmi >= 18.5 && bmi < 25:
                setHealthStatus("Healthy weight");
                setResultColor("#9BB33B");
                setMessage("You are at a healthy weight.");
                break;
            case bmi >= 25 && bmi <= 29.9:
                setHealthStatus("Overweight");
                setResultColor("#fbc80d");
                setMessage("You are overweight.");
                break;
            case bmi > 30 && bmi < 35:
                setHealthStatus("Obese");
                setResultColor("#f18930");
                setMessage("You are obese.");
                break;
            default:
                setHealthStatus("Extremely Obese");
                setResultColor("#ec2127");
                setMessage("You are extremely obese.");
                setMessage("You are obese.");
                break;
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={[styles.status, { color: resultColor }]}>{healthStatus}</Text>

                <View>
                    <Text style={styles.result}>{bmi}</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>Healthy BMI range:</Text>

                    <View style={styles.unitContainerWrapper}>
                        <View style={styles.unitContainer}>
                            <Text style={styles.unitText}>18.5 kg/m</Text>
                            <Text style={styles.superscript}>2</Text>
                        </View>

                        <View style={styles.unitContainer}>
                            <Text style={styles.unitText}> - 25 kg/m</Text>
                            <Text style={styles.superscript}>2</Text>
                        </View>

                    </View>
                </View>

                <View style={styles.messageContainer}>
                    <Text style={styles.message}>
                        {message}
                    </Text>
                </View>
            </View>
            <Button title={'Measure Again'} handleOnPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.large,
        gap: SIZES.medium,
        justifyContent: 'center',
        backgroundColor: COLORS.background
    },
    innerContainer: {
        backgroundColor: COLORS.foreground,
        height: '75%',
        width: '100%',
        borderRadius: SIZES.xSmall,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40
    },
    title: {
        fontSize: SIZES.large,
        color: COLORS.defaultText
    },
    result: {
        fontSize: SIZES.xLarge * 2,
        color: COLORS.defaultText,
        fontWeight: 700
    },
    status: {
        fontSize: SIZES.xLarge,
        fontWeight: 700,
    },
    unitContainerWrapper: {
        flexDirection: 'row'
    },
    unitContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    unitText: {
        fontSize: SIZES.medium,
        color: COLORS.defaultText,
        lineHeight: 30,
        marginTop: SIZES.xSmall / 2
    },
    superscript: {
        fontSize: SIZES.small,
        color: COLORS.defaultText,
        lineHeight: 28,
        textAlignVertical: 'top'
    },
    messageContainer: {

    },
    message: {
        color: COLORS.defaultText,
        fontSize: SIZES.medium,
        fontWeight: 700
    }
})