import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { useState } from "react";
import HeaderButton from "../components/button/HeaderButton";
import FeaturedBooks from "../components/home/FeaturedBooks";
import MostSellingBooks from "../components/home/MostSellingBooks";
import Welcome from "../components/home/Welcome";
import { Feather, Ionicons } from "@expo/vector-icons";

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
                    <Welcome
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        handlePress={() => {
                            if (searchValue) {
                                router.push(`/search/${searchValue}`);
                            }
                        }}
                    />
                    <FeaturedBooks searchValue={searchValue} />
                    <MostSellingBooks />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
