import React from "react";
import { useRoute } from "@react-navigation/native";

import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl
} from "react-native";
import {
    useLocation,
    useLocalSearchParams,
    useSearchParams
} from "expo-router";

function BookDetails() {
    const route = useRoute();
    const { book } = route.params || {};
    console.log(book);
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
