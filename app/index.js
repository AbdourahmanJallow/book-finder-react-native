import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { useState, useEffect } from "react";
import HeaderButton from "../components/button/HeaderButton";
import FeaturedBooks from "../components/home/FeaturedBooks";
import MostSellingBooks from "../components/home/MostSellingBooks";
import Welcome from "../components/home/Welcome";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Home = () => {
    const [searchValue, setSearchValue] = useState("");
    const router = useRouter();
    const [showComponent, setShowComponent] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowComponent(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

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
                    <FeaturedBooks />
                    {showComponent && <MostSellingBooks />}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
