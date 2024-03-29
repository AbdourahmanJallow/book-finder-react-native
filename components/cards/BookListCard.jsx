import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function BookListCard({ book }) {
    return (
        <TouchableOpacity
            className="rounded-md shadow-sm bg-[#fafafa] flex flex-col min-h-fit"
            onPress={() =>
                Linking.openURL(
                    `https://www.amazon.com/s?k=${book.title}&ref=nb_sb_noss_2`
                )
            }
        >
            <Text
                className="text-[#001F3D] text-lg font-bold p-2 flex-wrap overflow-hidden"
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
                        <Text className=" text-xs font-light px-1">
                            {book?.authors[0] ?? "N/A"}
                        </Text>
                    </Text>
                    <Text className="text-slate-500 px-1">
                        Language:{" "}
                        <Text className="text-xs font-light px-1">
                            {book?.language}
                        </Text>
                    </Text>
                    <Text className="text-slate-500 px-1">Categories: </Text>
                    {book?.categories.map((categoryName, i) => (
                        <Text
                            className="text-xs font-light px-1 text-slate-500"
                            key={i}
                            numberOfLines={1}
                        >
                            {categoryName}
                        </Text>
                    ))}
                    <View className="flex flex-row justify-start items-center px-1">
                        <Text className="text-slate-500">Page count: </Text>
                        <Text className="text-xs font-light px-1 text-slate-500">
                            {book?.page_count}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default BookListCard;
