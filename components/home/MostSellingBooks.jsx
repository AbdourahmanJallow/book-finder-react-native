import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native";
import SellingBookCard from "../cards/SellingBookCard";
import useFetch from "../../hooks/useFetch";
import { useRouter } from "expo-router";

function MostSellingBooks() {
    const router = useRouter();

    const { data, loading, error, refetch } = useFetch("search", {
        title: "Computer science",
        results_per_page: "25",
        page: "1",
        num_pages: 1
    });

    const checkBookDetails = (book) => {
        router.push({
            pathname: "/app/book-details/bookdetails.js",
            params: book
        });
    };

    return (
        <View className="mt-5 p-2">
            <View className="flex flex-row justify-between items-center">
                <Text className="text-xl text-[#B8390E] font-semibold">
                    Popular Books
                </Text>
                {/* <TouchableOpacity className="p-2 bg-blue-50 rounded-sm">
                    <Text>Show all</Text>
                </TouchableOpacity> */}
            </View>

            <View className="mt-3">
                {loading ? (
                    <ActivityIndicator size="large" color="#312651" />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    data?.map((book) => (
                        <SellingBookCard
                            book={book}
                            // checkBookDetails={checkBookDetails}
                            key={`selling-book-${book.work_id}`}
                        />
                    ))
                )}
            </View>
        </View>
    );
}

export default MostSellingBooks;
