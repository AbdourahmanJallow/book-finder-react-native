import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderButton from "../../components/button/HeaderButton";
import { AntDesign } from "@expo/vector-icons";
import { useRouter, Stack } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

function menu() {
    const router = useRouter();

    return (
        <SafeAreaView
            style={{
                flex: 1
            }}
        >
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#f4f4f4" },
                    headerShadowVisible: false,
                    // headerTitle: "",
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
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text
                    style={{
                        color: "black",
                        fontSize: 20
                    }}
                >
                    Menu
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default menu;
