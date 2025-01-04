import React, { forwardRef } from 'react';
import { Text, StyleSheet, TouchableOpacity, type ViewStyle, TouchableOpacityProps } from "react-native"

interface Props extends TouchableOpacityProps{
    children: JSX.Element
    style?: ViewStyle
    onPress?: () => void
}

const ChangeButton = forwardRef<React.ElementRef<typeof TouchableOpacity>, Props> (
    ({ children,style,onPress }, ref) => {
        return (
            <TouchableOpacity ref={ref}onPress={onPress} style={[styles.circleButton, style]}>
                <Text style={styles.circleButtonLabel}>{children}</Text>
            </TouchableOpacity>
        )}
) 

const styles = StyleSheet.create({
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#FF2D55',
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
    circleButtonLabel: {
        color: '#fff',
        fontSize: 40,
        lineHeight: 48
    }
})

export default ChangeButton;
