import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function BookCard({ item }) {
    return (
        <TouchableOpacity className="my-1 p-2 rounded-md shadow-sm bg-[#fafafa]">
            <View>
                <Text className="text-[#3B0918]">Book card</Text>
            </View>
        </TouchableOpacity>
    );
}

export default BookCard;
