import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { useState } from "react";
import HeaderButton from "../components/button/HeaderButton";
import FeaturedBooks from "../components/home/FeaturedBooks";
import MostSellingBooks from "../components/home/MostSellingBooks";
import Welcome from "../components/home/Welcome";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const Home = () => {
    /* Colors
        rose red: #3B0918
        burnt orange: #B8390E
        cream: #FFF3D9
        rose red: #DC4731
     */
    const [searchValue, setSearchValue] = useState("");
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-[#f3f3f3]">
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#f4f4f4", padding: 8 },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerLeft: () => (
                        <HeaderButton
                            handlePress={() => {
                                router.push("/screens/menu");
                            }}
                            icon={
                                <Ionicons
                                    name={"md-menu"}
                                    size={26}
                                    color="black"
                                />
                            }
                        />
                    ),
                    headerRight: () => (
                        <HeaderButton
                            handlePress={() => {
                                router.push("/screens/profile");
                            }}
                            icon={
                                <Feather name="user" size={26} color="black" />
                            }
                        />
                    )
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex-1 p-4 w-full mt-3">
                    <Welcome
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        handlePress={() => {
                            if (searchValue) {
                                router.push(`/search/${searchValue}`);
                                setSearchValue("");
                            }
                        }}
                    />
                    <MostSellingBooks />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
