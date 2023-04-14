import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native";
import BookCard from "../cards/BookCard";
import useFetch from "../../hooks/useFetch";

function FeaturedBooks() {
    const { data, loading, error, refetch } = useFetch();
    const handlePress = () => {};

    return (
        <View className="mt-5 p-2">
            <View className="flex flex-row justify-between items-center">
                <Text className="text-xl text-[#B8390E] font-semibold">
                    Featured Books
                </Text>
                <TouchableOpacity className="p-2 bg-blue-50 rounded-sm">
                    <Text>Show all</Text>
                </TouchableOpacity>
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
                            <BookCard item={item} handlePress={handlePress} />
                        )}
                        contentContainerStyle={{
                            columnGap: "10px"
                        }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) =>
                            item.canonical_published_work_id
                        }
                    />
                )}
            </View>
        </View>
    );
}

export default FeaturedBooks;
