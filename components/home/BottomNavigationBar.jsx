import React from "react";
import { BottomNavigation, BottomNavigationTab } from "react-native-paper";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import indexJs from "../../app/index";
import profile from "../../app/screens/profile";

const BottomNavigationBar = () => {
    const [index, setIndex] = React.useState(0);

    const handleTabPress = (newIndex) => {
        setIndex(newIndex);
    };

    {
        index === 0 && <indexJs />;
    }
    {
        index === 1 && <profile />;
    }

    return (
        <BottomNavigation
            navigationState={{ index }}
            onIndexChange={handleTabPress}
        >
            <BottomNavigationTab
                icon={() => (
                    <MaterialCommunityIcons
                        name="home"
                        color="black"
                        size={24}
                    />
                )}
                label="home"
            />
            <BottomNavigationTab
                icon={({ color, size }) => (
                    <Icon2 name="star" color={`black`} size={24} />
                )}
                label="profile"
            />
        </BottomNavigation>
    );
};

export default BottomNavigationBar;
