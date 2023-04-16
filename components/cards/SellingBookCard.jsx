import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SellingBookCard({ book }) {
    return (
        <TouchableOpacity
            className="my-2 p-2 rounded-md shadow-sm bg-[#fafafa] flex flex-col justify-center items-center min-h-fit"
            // onPress={() => checkBookDetails(book)}
        >
            {/* Book cover container plus book details */}
            <View className="w-full flex flex-row justify-start">
                <TouchableOpacity className="p-1 mr-1 h-[200px] w-[150px]">
                    <Image
                        source={{
                            uri: book?.published_works[0]?.cover_art_url
                        }}
                        className="w-[100%] h-[100%] rounded-sm"
                        // resizeMode="contain"
                    />
                </TouchableOpacity>

                <View className="flex flex-wrap">
                    <Text
                        className="text-[#B8390E] text-lg font-light px-1 flex-wrap overflow-hidden"
                        numberOfLines={1}
                    >
                        {book?.title}
                    </Text>
                    <Text className="text-slate-500 px-1">
                        Author:{" "}
                        <Text className="text-[#3B0918] text-xs font-light px-1">
                            {book?.authors[0]}
                        </Text>
                    </Text>
                    <Text className="text-slate-500 px-1">
                        Language:{" "}
                        <Text className="text-[#3B0918] text-xs font-light px-1">
                            {book?.language}
                        </Text>
                    </Text>
                    <Text className="text-slate-500 px-1">Categories: </Text>
                    {book?.categories.map((categoryName, i) => (
                        <Text
                            className="text-[#3B0918] text-xs font-light px-1"
                            key={i}
                            numberOfLines={1}
                        >
                            {categoryName}
                        </Text>
                    ))}
                    <View className="flex flex-row justify-start items-center px-1">
                        <Text className="text-slate-500">Page count: </Text>
                        <Text className="text-[#3B0918] text-xs font-light px-1">
                            {book?.page_count}
                        </Text>
                    </View>
                </View>
            </View>

            {/* Summary */}
            <View className="flex-1 mt-3">
                {book.summary ? (
                    <Text className="p-1 text-slate-500">
                        Summary:{" "}
                        <Text className="text-[#3b0918]"> {book?.summary}</Text>
                    </Text>
                ) : (
                    <Text>No Summary</Text>
                )}
            </View>
        </TouchableOpacity>
    );
}

export default SellingBookCard;
