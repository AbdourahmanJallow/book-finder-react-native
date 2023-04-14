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

const categories = [
    "Fiction",
    "History",
    "Adventure",
    "Science",
    "Law",
    "Crime",
    "Fantasy",
    "Classics"
];

function Welcome() {
    const [search, setSearch] = useState("");
    const [activeBtn, setActiveBtn] = useState("Fiction");
    return (
        <View className="w-full">
            <View className="flex flex-col">
                {/* <Text className="text-[#3B0918] text-xl">Hello Username</Text> */}
                <Text className="text-[#3B0918] font-bold text-2xl">
                    Find Your Book
                </Text>
            </View>

            <View className="flex flex-row gap-3 justify-between items-center h-10 w-full mt-3">
                <View className="flex-1 h-full justify-center items-center">
                    <TextInput
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                        placeholder="Find favorite book"
                        placeholderTextColor="lightgray"
                        className="bg-[#fff] text-black w-full p-2 rounded-md"
                    />
                </View>
                <TouchableOpacity className="flex justify-center items-center">
                    <AntDesign name="find" size={28} color="black" />
                </TouchableOpacity>
            </View>

            {/* Categories */}
            <View className="mt-6 w-full">
                <FlatList
                    horizontal
                    data={categories}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            className={`py-1 px-3 border-2 ${
                                activeBtn === item
                                    ? "border-[#3B0918]"
                                    : "border-gray-200"
                            }  rounded-full`}
                            onPress={() => setActiveBtn(item)}
                        >
                            <Text>{item}</Text>
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
