import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import tempData from "./src/apis/tempData";
import Colors from "./src/themes/Colors";

import CardList from "./src/components/CardList";
import AddListModal from "./src/components/AddListModal";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addTodoVisible: false,
        };
    }
    toggleAddTodoModal() {
        this.setState({
            addTodoVisible: !this.state.addTodoVisible,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal animationType="slide" visible={this.state.addTodoVisible} onRequestClose={() => this.toggleAddTodoModal()}>
                    <AddListModal closeModal={() => this.toggleAddTodoModal()} />
                </Modal>
                {/* Title Todo App */}
                <View style={{ flexDirection: "row" }}>
                    {/* Create lines */}
                    <View style={styles.divider} />
                    {/* Name title */}
                    <Text style={styles.title}>
                        Todo
                        <Text style={{ fontWeight: "300", color: Colors.blue }}>Lists</Text>
                    </Text>
                    {/* Create lines */}
                    <View style={styles.divider} />
                </View>
                <View style={{ marginVertical: 48 }}>
                    <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
                        <AntDesign name="plus" size={16} color={Colors.blue} />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: "600", color: Colors.blue, fontSize: 14, marginTop: 10 }}>Add list</Text>
                </View>
                <View style={{ height: 275, paddingLeft: 30 }}>
                    <FlatList
                        data={tempData}
                        renderItem={({ item }) => <CardList list={item} />}
                        keyExtractor={(item) => item.name}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    divider: {
        height: 1,
        flex: 1,
        alignSelf: "center",
        backgroundColor: Colors.lightBlue,
    },
    title: {
        fontSize: 38,
        fontWeight: "800",
        color: Colors.black,
        paddingHorizontal: 64,
    },
    addList: {
        borderWidth: 2,
        borderColor: Colors.lightBlue,
        borderRadius: 4,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
});
