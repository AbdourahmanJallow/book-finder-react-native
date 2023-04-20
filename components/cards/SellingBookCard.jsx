import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

function SellingBookCard({ book }) {
    const router = useRouter();
    return (
        <TouchableOpacity
            className="my-2 p-2 rounded-md shadow-sm bg-[#fafafa] min-h-fit"
            onPress={() =>
                // router.push({
                //     pathname: "/book-details/bookdetails",
                //     params: { book: book }
                // })
                Linking.openURL(
                    `https://www.amazon.com/s?k=${book.title}&ref=nb_sb_noss_2`
                )
            }
        >
            {/* Book cover container plus book details */}
            <Text
                className="text-[#001F3D] text-xl font-bold px-1 truncate mb-3"
                numberOfLines={1}
            >
                {book?.title}
            </Text>
            <View className="flex-row h-[200px] mb-3">
                <TouchableOpacity className="p-1 mr-1 h-[200px] w-[150px]">
                    <Image
                        source={{
                            uri: book?.published_works[0]?.cover_art_url
                        }}
                        className="w-[100%] h-[100%] rounded-sm"
                        // resizeMode="contain"
                    />
                </TouchableOpacity>

                <View className="h-[100%] w-[70%] overflow-hidden">
                    <Text className="text-gray-400 px-1 text-lg">
                        Author:{" "}
                        <Text className="text-xs font-light px-1">
                            {book?.authors[0] ?? "N/A"}
                        </Text>
                    </Text>
                    <Text className="text-gray-400 px-1 text-lg">
                        Language:{" "}
                        <Text className="text-xs font-light px-1">
                            {book?.language}
                        </Text>
                    </Text>
                    <Text className="text-gray-400 px-1 text-lg">
                        Categories:{" "}
                    </Text>
                    {book?.categories.map((categoryName, i) => (
                        <Text
                            className="text-xs font-light px-1 text-gray-400"
                            key={i}
                            numberOfLines={1}
                        >
                            {categoryName}
                        </Text>
                    ))}
                    <View className="flex flex-row justify-start items-center px-1">
                        <Text className="text-gray-400 text-lg">
                            Page count:{" "}
                        </Text>
                        <Text className="text-xs font-light px-1">
                            {book?.page_count}
                        </Text>
                    </View>
                </View>
            </View>

            {/* Summary */}
            <View className="flex-1 mt-3">
                {book.summary ? (
                    <>
                        <Text className="p-1 text-xl text-gray-400">
                            Summary{" "}
                        </Text>
                        <Text className="text-black px-1">
                            {" "}
                            {book?.summary}
                        </Text>
                    </>
                ) : (
                    <Text>No Summary</Text>
                )}
            </View>
        </TouchableOpacity>
    );
}

export default SellingBookCard;
