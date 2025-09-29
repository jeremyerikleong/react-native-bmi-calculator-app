import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

import { COLORS, SIZES } from '@/constants/theme';


export default function StartScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Calculate Your BMI</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title='Start Now'
                    handleOnPress={() => navigation.replace("Calculator")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: SIZES.xLarge,
        fontWeight: 'bold',
        color: COLORS.defaultText,
        marginBottom: SIZES.large
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: SIZES.xxLarge
    },
});
