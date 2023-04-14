import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

function HeaderButton({ icon, text }) {
    return (
        <TouchableOpacity>
            <View className="flex flex-col justify-center items-center">
                <View
                    className="flex justify-center items-center px-3 py-1 rounded-md"
                    style={{
                        backgroundColor: "#f4f4f4",
                        borderRadius: "5px"
                    }}
                >
                    {icon}
                </View>
                {text ? (
                    <Text className="flex justify-center items-center">
                        {text}
                    </Text>
                ) : (
                    ""
                )}
            </View>
        </TouchableOpacity>
    );
}

export default HeaderButton;
