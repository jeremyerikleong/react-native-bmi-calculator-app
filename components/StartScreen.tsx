import { Image, StyleSheet, Text, View } from 'react-native';
import Button from './Button';

import { COLORS, SIZES } from '@/constants/theme';


export default function StartScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image source={require('../assets/images/start-screen.png')} style={styles.image} />
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
    image: {
        width: 200,
        height: 200,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: SIZES.xxLarge
    },
});
