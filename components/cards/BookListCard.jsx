import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function BookListCard({ book }) {
    return (
        <TouchableOpacity className="rounded-md shadow-sm bg-[#fafafa] flex flex-col min-h-fit">
            <Text
                className="text-[#B8390E] text-lg font-bold p-2 flex-wrap overflow-hidden"
                numberOfLines={1}
            >
                {book?.title}
            </Text>
            <View className="w-full flex flex-row justify-start p-2">
                <TouchableOpacity className="mr-1 h-[125px] w-[100px] flex justify-center items-center">
                    <Image
                        source={{
                            uri: book?.published_works[0]?.cover_art_url
                        }}
                        className="w-[100%] h-[100%] rounded-sm self-center"
                        // resizeMode="contain"
                    />
                </TouchableOpacity>

                <View className="flex flex-wrap p-1">
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
        </TouchableOpacity>
    );
}

export default BookListCard;
