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
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useState, useCallback } from "react";
import useFetch from "../../hooks/useFetch";

function BookDetails() {
    const params = useSearchParams();
    const router = useRouter();

    const { data, loading, error, refetch } = useFetch("book-details", {
        work_id: params.id
    });

    return (
        <View>
            <Text>BookDetails</Text>
        </View>
    );
}

export default BookDetails;
