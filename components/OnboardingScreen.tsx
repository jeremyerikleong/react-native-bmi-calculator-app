import { Image, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import { COLORS, SIZES } from '@/constants/theme';

const slides = [
    {
        key: "1",
        title: "Welcome",
        text: "Track your BMI and stay healthy!",
        image: require("@/assets/images/onboarding-1.png"),
    },
    {
        key: "2",
        title: "What is BMI?",
        text: "BMI uses your height and weight to estimate body fat and health range.",
        image: require("@/assets/images/onboarding-2.png"),
    },
    {
        key: "3",
        title: "Stay Fit",
        text: "Know your BMI and improve your lifestyle.",
        image: require("@/assets/images/onboarding-3.png"),
    },
];

export default function OnboardingScreen({ navigation }: any) {
    const renderItem = ({ item }: any) => (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    return (
        <AppIntroSlider
            renderItem={renderItem}
            data={slides}
            onDone={() => navigation.replace("StartScreen")}
            showSkipButton
            onSkip={() => navigation.replace("StartScreen")}
            dotStyle={styles.defaultDot}
            activeDotStyle={styles.activeDot}
        />
    );
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SIZES.large,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: SIZES.large,
    },
    title: {
        fontSize: SIZES.xLarge,
        fontWeight: 'bold',
        color: COLORS.defaultText,
        textAlign: 'center',
        marginBottom: SIZES.xSmall,
    },
    text: {
        fontSize: SIZES.medium,
        color: '#ddd',
        textAlign: 'center',
    },
    defaultDot: {
        backgroundColor: COLORS.foreground,
        width: SIZES.xSmall,
        height: SIZES.xSmall,
        borderRadius: SIZES.xSmall / 2,
        marginHorizontal: SIZES.small / 3,
    },
    activeDot: {
        backgroundColor: COLORS.btnPrimary,
        width: SIZES.xLarge,
        height: SIZES.xSmall,
        borderRadius: SIZES.xSmall / 2,
        marginHorizontal: SIZES.small / 3,
    }
});
