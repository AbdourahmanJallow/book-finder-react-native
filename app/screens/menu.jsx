import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import HeaderButton from "../../components/button/HeaderButton";
import { AntDesign } from "@expo/vector-icons";
import { useRouter, Stack } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

function menu() {
    const router = useRouter();

    return (
        <View
            style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                resizeMode: "cover"
            }}
            className="bg-slate-700"
        >
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#334155" },
                    headerShadowVisible: false,
                    headerTitle: "Navigation Menu",
                    headerLeft: () => (
                        <HeaderButton
                            icon={
                                <FontAwesome5
                                    name="times"
                                    size={30}
                                    color="#fff"
                                />
                            }
                            handlePress={() => router.back()}
                        />
                    )
                }}
            />
            {/* <ImageBackground
                source={require("../../assets/bg.jpg")}
                style={{
                    flex: 1,
                    resizeMode: "cover", // specify the image resize mode
                    justifyContent: "center"
                }}
            > */}
            <View
                style={{
                    flex: 1,
                    resizeMode: "cover"
                    // backgroundColor: "rgba(0,0,0,0.5)"
                }}
                className="flex-col gap-6 justify-center items-center"
            >
                <TouchableOpacity onPress={() => router.push("/")}>
                    <Text className="text-3xl text-white">Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => router.push("/screens/profile")}
                >
                    <Text className="text-3xl text-white">Profile</Text>
                </TouchableOpacity>
            </View>
            {/* </ImageBackground> */}
        </View>
    );
}

export default menu;
