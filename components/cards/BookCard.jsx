import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function BookCard({ item }) {
    return (
        <TouchableOpacity className="my-1 p-2 rounded-md shadow-sm bg-[#fafafa] w-52 h-64 min-h-fit">
            <View className="rounded-sm p-1 mb-1 h-[85%]">
                <Image
                    source={{
                        uri: item?.published_works[0]?.cover_art_url
                    }}
                    className="w-full h-full"
                />
            </View>
            <View className="flex flex-col justify-center flex-1">
                <Text className="text-[#B8390E] text-md font-light px-1">
                    {item?.title}
                </Text>
                <View className="flex flex-row justify-start items-center px-1">
                    <Ionicons
                        name="ios-book"
                        size={14}
                        color="black"
                        className="inline"
                    />
                    {item?.authors.map((author) => (
                        <Text className="text-[#3B0918] text-xs font-light px-1">
                            {author}
                        </Text>
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default BookCard;
