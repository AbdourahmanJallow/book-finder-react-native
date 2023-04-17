import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    View
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";
import axios from "axios";
import BookListCard from "../../components/cards/BookListCard";
import HeaderButton from "../../components/button/HeaderButton";
import { AntDesign } from "@expo/vector-icons";

const BookSearch = () => {
    const params = useSearchParams();
    const router = useRouter();

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([]);
        try {
            const options = {
                method: "GET",
                url: `https://book-finder1.p.rapidapi.com/api/search`,
                headers: {
                    "X-RapidAPI-Key":
                        "1d0e28a84bmsh473183a6a508d70p14fbb7jsnb4c21f814180",
                    "X-RapidAPI-Host": "book-finder1.p.rapidapi.com"
                },
                params: {
                    // ...query
                    title: params.id,
                    page: page.toString(),
                    results_per_page: "25",
                    num_pages: 1
                }
            };

            const response = await axios.request(options);
            setSearchResult(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            setSearchError(error);
            alert(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

    const handlePagination = (direction) => {
        if (direction === "left" && page > 1) {
            setPage(page - 1);
            handleSearch();
        } else if (direction === "right") {
            setPage(page + 1);
            handleSearch();
        }
    };

    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <SafeAreaView
            // style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
            className="flex-1 bg-[#f3f3f3]"
        >
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#f4f4f4" },
                    headerShadowVisible: false,
                    headerTitle: "",
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

            <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    <BookListCard
                        book={item}
                        // handleNavigate={() =>
                        //     router.push(`/job-details/${item.job_id}`)
                        // }
                    />
                )}
                keyExtractor={(item) => item.work_id}
                contentContainerStyle={{
                    padding: 16,
                    rowGap: 16
                }}
                ListHeaderComponent={() => (
                    <>
                        <View className="w-full">
                            <Text className="font-bold text-xl text-[#B8390E]">
                                {params.id}
                            </Text>
                            <Text className="font-light text-md text-[#DC4731]">
                                Best selling books
                            </Text>
                        </View>
                        <View className="mt-6">
                            {searchLoader ? (
                                <ActivityIndicator size="large" color="black" />
                            ) : (
                                searchError && (
                                    <Text>Oops something went wrong</Text>
                                )
                            )}
                        </View>
                    </>
                )}
                ListFooterComponent={() => (
                    <View className="flex flex-row justify-center items-center gap-3">
                        <TouchableOpacity
                            className="justify-center items-center w-[30px] h-[30px] rounded-sm"
                            onPress={() => handlePagination("left")}
                        >
                            <AntDesign
                                name="arrowleft"
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>

                        <View className="justify-center items-center w-[30px] h-[30px]">
                            <Text className="font-bold text-3xl text-[#B8390E]">
                                {page}
                            </Text>
                        </View>
                        <TouchableOpacity
                            className="justify-center items-center w-[30px] h-[30px] rounded-sm"
                            onPress={() => handlePagination("right")}
                        >
                            <AntDesign
                                name="arrowright"
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default BookSearch;
