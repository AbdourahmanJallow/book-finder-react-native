import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    Image
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const categories = [
    "Art & Photography",
    "Computer Programming",
    "Education & Teaching",
    "Hobbies, Sports & Outdoors",
    "History",
    "Literature & Fiction",
    "Mystery & Suspense",
    "Politics & Social Sciences",
    "Reference",
    "Romance",
    "Religion & Sprituality",
    "Science & Math",
    "Science Fiction & Fantasy"
];

function Welcome({ searchValue, setSearchValue, handlePress }) {
    const [category, setCategory] = useState("");
    const router = useRouter();

    return (
        <View className="w-full">
            <View className="flex flex-col mb-1">
                <Text className="text-[#001F3D] font-bold text-4xl">
                    Find Your Book
                </Text>
            </View>

            <View className="flex flex-row gap-3 justify-between items-center h-10 w-full mt-3">
                <View className="flex-1 h-full justify-center items-center">
                    <TextInput
                        value={searchValue}
                        onChangeText={(text) => setSearchValue(text)}
                        placeholder="Find favorite book"
                        placeholderTextColor="gray"
                        className="bg-[#fff] text-black h-full w-full p-3 rounded-md"
                    />
                </View>
                <TouchableOpacity
                    className="h-full flex justify-center items-center ml-3 p-2 rounded-2xl bg-[#001F3D]"
                    onPress={handlePress}
                >
                    <AntDesign name="find" size={24} color="white" />
                </TouchableOpacity>
            </View>

            {/* Categories */}
            <View className="mt-7 w-full">
                <FlatList
                    horizontal
                    data={categories}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            className={`py-1 px-3 ${
                                category === item
                                    ? "bg-[#001F3D] border-none text-[#fff]"
                                    : "border-2 border-gray-200"
                            }  rounded-full`}
                            onPress={() => {
                                setCategory(item);
                                router.push(`/search/${item}`);
                            }}
                        >
                            <Text
                                className={`${
                                    category === item && "text-[#fff]"
                                }`}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{
                        columnGap: "10px"
                    }}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

/* Colors
        rose red: #3B0918
        burnt orange: #B8390E
        cream: #FFF3D9
        rose red: #DC4731
     */
export default Welcome;
