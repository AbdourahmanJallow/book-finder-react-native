import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native";
import HeaderButton from "../../components/button/HeaderButton";
import {
    AntDesign,
    Octicons,
    Ionicons,
    Fontisto,
    FontAwesome5
} from "@expo/vector-icons";
import { useRouter, Stack } from "expo-router";

function profile() {
    const router = useRouter();

    const [myStatus, setMyStatus] = useState("");

    const status = [
        {
            title: "Away",
            icon: (
                <Fontisto
                    name="holiday-village"
                    size={24}
                    color="white"
                    className="inline"
                />
            ),
            backgroundColor: "#1e293b"
        },
        {
            title: "At Work",
            icon: (
                <Ionicons
                    name="code-working-outline"
                    size={24}
                    color="white"
                    className="inline"
                />
            ),
            backgroundColor: "#4ade80"
        },
        {
            title: "Focused",
            icon: (
                <FontAwesome5
                    name="brain"
                    size={24}
                    color="white"
                    className="inline"
                />
            ),
            backgroundColor: "#e11d48"
        },
        {
            title: "Gaming",
            icon: (
                <Ionicons
                    name="game-controller-outline"
                    size={24}
                    color="white"
                    className="inline"
                />
            ),
            backgroundColor: "#facc15"
        },
        {
            title: "Unemplyed",
            icon: (
                <Octicons
                    name="stop"
                    size={24}
                    color="white"
                    className="inline"
                />
            ),
            backgroundColor: "#0369a1"
        }
    ];

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff"
            }}
            className="w-full"
        >
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#fff",
                        font: "light"
                    },
                    headerShadowVisible: false,
                    headerTitle: "My Profile",
                    headerLeft: () => (
                        <HeaderButton
                            icon={
                                <AntDesign
                                    name="arrowleft"
                                    size={24}
                                    color="black"
                                />
                            }
                            handlePress={() => router.back()}
                        />
                    )
                }}
            />
            <View className="w-full px-5">
                <View className="flex-row justify-between items-center py-8 w-full mt-4">
                    <Image
                        source={require("../../assets/profile2.jpg")}
                        style={{
                            width: 100,
                            height: 100,
                            // resizeMode: "contain"
                            borderRadius: "50%"
                        }}
                    />
                    <View className="flex-col justify-center items-center p-1">
                        <Text className="text-[42px] font-semibold">
                            Jane Doe
                        </Text>
                        <Text className="text-gray-400 text-xs">
                            Software Developer
                        </Text>
                    </View>
                </View>

                {/* Status */}

                <View className="w-full mt-4">
                    <Text className="text-gray-400 text-xs px-2">
                        My Status
                    </Text>
                    <View className="flex-row justify-center mt-2">
                        <FlatList
                            data={status}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    className={`${
                                        item.title === myStatus.title &&
                                        "opacity-20"
                                    } flex flex-row justify-between items-center p-3 rounded-full bg-[${
                                        item.backgroundColor
                                    }] `}
                                    style={{
                                        backgroundColor: `${item.backgroundColor}`
                                    }}
                                    onPress={() => setMyStatus(item)}
                                >
                                    {item.icon}
                                    <Text className="ml-2 text-white text-[14px]">
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            contentContainerStyle={{
                                columnGap: 20
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default profile;
