import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SellingBookCard({ book, checkBookDetails }) {
    return (
        <TouchableOpacity
            className="my-2 p-2 rounded-md shadow-sm bg-[#fafafa] flex flex-col justify-center items-center min-h-fit"
            // onPress={() => checkBookDetails(book)}
        >
            {/* Book cover container plus book details */}
            <View className="w-full flex-1 flex flex-row justify-center items-center">
                <View className="p-1 mr-1 h-[250px] w-[25%]">
                    <Image
                        source={{
                            uri: book?.published_works[0]?.cover_art_url
                        }}
                        className="w-full h-full rounded-sm"
                        resizeMode="contain"
                    />
                </View>
                <View className="flex flex-col">
                    <Text
                        className="text-[#B8390E] text-lg font-light px-1"
                        numberOfLines={1}
                    >
                        {book?.title}
                    </Text>
                    {/* <View className="flex flex-row justify-start items-center px-1"> */}
                    <Text className="text-slate-500 px-1">
                        Author:{" "}
                        <Text className="text-[#3B0918] text-xs font-light px-1">
                            {book?.authors[0]}
                        </Text>
                    </Text>
                    {/* </View> */}
                    {/* <View className="flex flex-row justify-start items-center px-1"> */}
                    <Text className="text-slate-500 px-1">
                        Language:{" "}
                        <Text className="text-[#3B0918] text-xs font-light px-1">
                            {book?.language}
                        </Text>
                    </Text>
                    {/* </View> */}
                    <View className="flex flex-row justify-start items-center px-1">
                        <Text className="text-slate-500">Categories: </Text>
                        {book?.categories.map((categoryName, i) => (
                            <Text
                                className="text-[#3B0918] text-xs font-light px-1"
                                key={i}
                                numberOfLines={2}
                            >
                                {categoryName}
                            </Text>
                        ))}
                    </View>
                    <View className="flex flex-row justify-start items-center px-1">
                        <Text className="text-slate-500">Page count: </Text>
                        <Text className="text-[#3B0918] text-xs font-light px-1">
                            {book?.page_count}
                        </Text>
                    </View>
                </View>
            </View>

            {/* Summary */}
            <View className="flex-1">
                <Text className="p-1 text-slate-500">
                    Summary:{" "}
                    <Text className="text-[#3b0918]"> {book?.summary}</Text>
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default SellingBookCard;
