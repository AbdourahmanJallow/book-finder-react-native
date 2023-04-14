import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";

function HeaderButton({ icon, text }) {
    return (
        <TouchableOpacity
            className="flex justify-center items-center px-3 py-1 rounded-md"
            style={{
                backgroundColor: "#f4f4f4",
                borderRadius: "5px"
            }}
        >
            {icon}
            {text ? (
                <Text className="flex justify-center items-center">{text}</Text>
            ) : (
                ""
            )}
        </TouchableOpacity>
    );
}

export default HeaderButton;
