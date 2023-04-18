// import React from "react";
// import { BottomNavigation, BottomNavigationTab } from "react-native-paper";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Home from "../../app/index";
// import Profile from "../../app/screens/profile";

// const BottomNavigationBar = () => {
//     const [index, setIndex] = React.useState(0);

//     const handleTabPress = (newIndex) => {
//         setIndex(newIndex);
//     };

//     {
//         index === 0 && <Home />;
//     }
//     {
//         index === 1 && <Profile />;
//     }

//     return (
//         <BottomNavigation
//             navigationState={{ index }}
//             onIndexChange={handleTabPress}
//         >
//             {/* <BottomNavigationTab
//                 icon={() => (
//                     <MaterialCommunityIcons
//                         name="home"
//                         color="black"
//                         size={24}
//                     />
//                 )}
//                 label="home"
//             />
//             <BottomNavigationTab
//                 icon={() => (
//                     <FontAwesome name="star" color={`black`} size={24} />
//                 )}
//                 label="profile"
//             /> */}
//         </BottomNavigation>
//         // <></>
//     );
// };

// export default BottomNavigationBar;
