import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";

export default class AddListModal extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <TouchableOpacity style={{ position: "absolute", top: 64, right: 32 }} onPress={this.props.closeModal}>
                    <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
