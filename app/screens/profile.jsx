import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    FlatList,
    TouchableOpacity,
    ImageBackground
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
import { status, dashboard } from "../../assets/constants";

function profile() {
    const router = useRouter();
    const [myStatus, setMyStatus] = useState("");

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
                            width: 120,
                            height: 120,
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
                            renderItem={({ item, i }) => (
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
                            keyExtractor={(item) => item.name}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            contentContainerStyle={{
                                columnGap: 20
                            }}
                        />
                    </View>
                </View>

                {/* Dashboard */}
                <View className="w-full mt-8">
                    <Text className="text-gray-400 text-xs px-2 mb-2">
                        Dashboard
                    </Text>

                    <View className="w-full px-2">
                        <FlatList
                            data={dashboard}
                            renderItem={({ item }) => (
                                <View className={`flex-row gap-2 rounded-full`}>
                                    {item.icon}
                                    <Text className="text-lg">
                                        {item.title}
                                    </Text>
                                </View>
                            )}
                            keyExtractor={(item) => item.name}
                            contentContainerStyle={{
                                rowGap: 20
                            }}
                        />
                        {/* {dashboard.map((item) => (
                            <View className={`flex-row   gap-5`}>
                                {item.icon}
                                <Text className="text-lg">{item.title}</Text>
                            </View>
                        ))} */}
                    </View>
                </View>

                {/* <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        // paddingHorizontal: 10
                        position: "relative",
                        borderRadius: 15
                    }}
                    className="min-h-fit mt-4 p-2 rounded-lg"
                >
                    <ImageBackground
                        className="h-full rounded-lg"
                        source={require("../../assets/bg.jpg")}
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            resizeMode: "cover",
                            height: 200,
                            justifyContent: "flex-end",
                            borderRadius: 10
                        }}
                    ></ImageBackground>
                </View> */}
            </View>
        </View>
    );
}

export default profile;
