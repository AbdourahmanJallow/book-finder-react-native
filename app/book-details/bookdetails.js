import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl
} from "react-native";
import { useLocation } from "expo-router";

function BookDetails() {
    // const location = useLocation();
    // const { book } = location.params;

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            {/* <Text>{book.title}</Text> */}
        </SafeAreaView>
    );
}

export default BookDetails;
