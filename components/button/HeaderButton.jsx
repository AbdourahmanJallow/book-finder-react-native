import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

function HeaderButton({ icon, handlePress }) {
    return (
        <TouchableOpacity onPress={handlePress} className="rounded-full p-1">
            <View className="flex flex-col justify-center items-center">
                <View
                    className="flex justify-center items-center rounded-md"
                    style={{
                        // backgroundColor: "#f4f4f4",
                        borderRadius: "5px"
                    }}
                >
                    {icon}
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default HeaderButton;
