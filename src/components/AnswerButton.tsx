import React from 'react';
import { Text, StyleSheet, TouchableOpacity, type ViewStyle } from "react-native"

interface Props {
    label: string
    style?: ViewStyle
    onPress?: () => void
}

const AnswerButton = (props: Props) => {
    const { label, style, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={[styles.answerButton, style]}>
            <Text style={styles.answerButtonLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

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
        shadowOffset: { width: 0, height: 8},
        elevation: 8
    },
    answerButtonLabel: {
        color: '#000',
        fontSize: 30,
        lineHeight: 48
    }
})

export default AnswerButton
