import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


const CheckButton = (props) => {
    const { onPress, disabled } = props;
    return (
        <View style={{ width: 40, height: 40, }}>
            <TouchableOpacity
                style={disabled === true ? styles.disabledButton : styles.button}
                activeOpacity={0.6}
                onPress={onPress}
                disabled={disabled === true}>
                <Text>
                    <Icon name="ios-checkmark" style={{
                        color: "rgb(144, 144, 144)",
                        fontSize: 35,
                    }} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        backgroundColor: "#0DBC5D",
        borderRadius: 100,
    },
    disabledButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        backgroundColor: "#ACB4AFF0",
        borderRadius: 100,
    }
})

export default CheckButton;