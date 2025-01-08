import React, { forwardRef } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    type ViewStyle,
    TouchableOpacityProps
} from "react-native";

interface Props extends TouchableOpacityProps {
    label: string;
    style?: ViewStyle;
    onPress?: () => void;
}

const AnswerButton = forwardRef<React.ElementRef<typeof TouchableOpacity>, Props>(
    ({ label, style, onPress }, ref) => {
        return (
            <View style={[styles.answerButton, style]}>
                {/* ラベル部分を押したときのみ onPress が実行 */}
                <TouchableOpacity onPress={onPress} ref={ref}>
                    <Text style={styles.answerButtonLabel}>{label}</Text>
                </TouchableOpacity>
            </View>
        );
    }
);

const styles = StyleSheet.create({
    answerButton: {
        width: 200,
        height: 64,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#2DFF70',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8,
    },
    answerButtonLabel: {
        color: '#000',
        fontSize: 30,
        lineHeight: 48,
    },
});

export default AnswerButton;
