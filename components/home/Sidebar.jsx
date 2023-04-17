import React, { useState } from "react";
import { View, TouchableOpacity, Text, Animated } from "react-native";
// import tw from "tailwind-react-native-classnames";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarWidth = 200;
    const sidebarAnimation = new Animated.Value(0);

    const toggleSidebar = () => {
        if (isSidebarOpen) {
            Animated.timing(sidebarAnimation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(sidebarAnimation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false
            }).start();
        }
        setIsSidebarOpen(!isSidebarOpen);
    };

    const sidebarTranslateX = sidebarAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [-sidebarWidth, 0]
    });

    return (
        <View className={`flex-1 flex-row`}>
            <View className={`flex-1 justify-center items-center`}>
                {/* Main Content */}
                <TouchableOpacity onPress={toggleSidebar}>
                    <Text className={`text-black`}>Toggle Sidebar</Text>
                </TouchableOpacity>
            </View>
            <Animated.View
                className={[
                    `w-48 bg-red-300 absolute top-0 bottom-0 left-0 z-10`,
                    { transform: [{ translateX: sidebarTranslateX }] }
                ]}
            >
                {/* Sidebar Content */}
                <Text className={`text-black`}>Sidebar</Text>
            </Animated.View>
        </View>
    );
};

export default Sidebar;
