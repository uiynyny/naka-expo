import React from "react";
import { StyleSheet, TouchableHighlight, Text, View, } from "react-native";

const CustomButton = ({ style, innerStyle, onPress, content, disabled}) => {
    return (
        <TouchableHighlight style={[styles.button, style]} onPress={onPress} disabled={disabled}>
            <View style={[styles.button, innerStyle]} >
                <Text style={styles.text}>{content}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        backgroundColor: "#a0a0a0",
        borderRadius: 100,
    },
    text: {
        marginVertical:10,
        paddingHorizontal:10,
        fontFamily: "Hiragino Sans",
        textAlign: "center",
        color: "#ffffff",
        paddingVertical: 35 - (35 * 0.75),
    }
})

export default CustomButton
