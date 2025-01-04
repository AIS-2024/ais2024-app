import React, { forwardRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    type ViewStyle,
    TouchableOpacityProps
} from 'react-native';

interface FooterButtonProps extends TouchableOpacityProps {
    label: string; // ボタンのラベル
    style?: ViewStyle; // カスタムスタイル
    onPress?: () => void; // ラベル部分が押されたときのハンドラー
}

const FooterButton = forwardRef<React.ElementRef<typeof TouchableOpacity>, FooterButtonProps>(
    ({ label, style, onPress }, ref) => {
        return (
            <View style={[styles.footerContainer, style]}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity ref={ref} style={styles.labelTouchable} onPress={onPress}>
                        <Text style={styles.label}>{label}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
);

const styles = StyleSheet.create({
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80, // フッターの高さ
        backgroundColor: '#f5f5f5', // フッターの背景色
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 16,
    },
    buttonContainer: {
        width: 200,
        height: 64,
        borderRadius: 32,
        // backgroundColor: '#2DFF70',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8,
    },
    labelTouchable: {
        paddingHorizontal: 16, // ラベル部分のみ押せる範囲を調整
    },
    label: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default FooterButton;
