import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native";
import BookCard from "../cards/BookCard";
import useFetch from "../../hooks/useFetch";
import { useRouter } from "expo-router";

function FeaturedBooks() {
    const router = useRouter();

    const { data, loading, error, refetch } = useFetch("search", {
        title: "Science",
        results_per_page: "25",
        page: "1",
        num_pages: 1
    });

    const checkBookDetails = (book) => {
        router.push(`/book-details/${book.work_id}`);
    };

    return (
        <View className="mt-5 p-2">
            <View className="flex flex-row justify-between items-center">
                <Text className="text-xl text-slate-600 font-semibold">
                    Top Ranked books
                </Text>
            </View>

            <View className="mt-3">
                {loading ? (
                    <ActivityIndicator size="large" color="#312651" />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <BookCard
                                book={item}
                                // checkBookDetails={checkBookDetails}
                            />
                        )}
                        contentContainerStyle={{
                            columnGap: "10px"
                        }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item?.work_id}
                    />
                )}
            </View>
        </View>
    );
}

export default FeaturedBooks;
