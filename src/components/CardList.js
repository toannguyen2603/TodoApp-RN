import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../themes/Colors";

export default CardList = ({ list }) => {
    const completedCount = list.todos.filter((todo) => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;
    return (
        <View style={[styles.listContainer, { backgroundColor: list.color }]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>
            <View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.count}>{completedCount}</Text>
                    <Text style={styles.subtitle}>Remaining</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.count}>{remainingCount}</Text>
                    <Text style={styles.subtitle}>Completed</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 5,
        alignItems: "center",
        marginHorizontal: 12,
        width: 200,
    },
    listTitle: {
        fontWeight: "700",
        fontSize: 24,
        color: Colors.white,
        marginBottom: 18,
    },
    count: {
        fontSize: 48,
        fontWeight: "200",
        color: Colors.white,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: "700",
        color: Colors.white,
    },
});
