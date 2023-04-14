import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { useState } from "react";
// import { HeaderButton, Welcome } from "../components";
import HeaderButton from "../components/button/HeaderButton";
import Welcome from "../components/pages/Welcome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";

const Home = () => {
    /* Colors
        rose red: #3B0918
        burnt orange: #B8390E
        cream: #FFF3D9
        rose red: #DC4731
     */
    return (
        <SafeAreaView className="flex-1 bg-[#f3f3f3]">
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#f4f4f4" },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerLeft: () => (
                        <HeaderButton
                            icon={
                                <Ionicons
                                    name={"md-menu"}
                                    size={24}
                                    color="black"
                                />
                            }
                        />
                    ),
                    headerRight: () => (
                        <HeaderButton
                            icon={
                                <Feather name="user" size={24} color="black" />
                            }
                            text="profile"
                        />
                    )
                }}
            />

            {/* Main Content */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex-1 p-4 w-full">
                    <Welcome />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
