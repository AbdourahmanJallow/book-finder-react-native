import {
    AntDesign,
    MaterialIcons,
    Octicons,
    Ionicons,
    Fontisto,
    FontAwesome5
} from "@expo/vector-icons";

export const status = [
    {
        title: "Away",
        icon: (
            <Fontisto
                name="holiday-village"
                size={24}
                color="white"
                className="inline"
            />
        ),
        backgroundColor: "#1e293b"
    },
    {
        title: "At Work",
        icon: (
            <Ionicons
                name="code-working-outline"
                size={24}
                color="white"
                className="inline"
            />
        ),
        backgroundColor: "#4ade80"
    },
    {
        title: "Focused",
        icon: (
            <FontAwesome5
                name="brain"
                size={24}
                color="white"
                className="inline"
            />
        ),
        backgroundColor: "#e11d48"
    },
    {
        title: "Gaming",
        icon: (
            <Ionicons
                name="game-controller-outline"
                size={24}
                color="white"
                className="inline"
            />
        ),
        backgroundColor: "#facc15"
    },
    {
        title: "Unemplyed",
        icon: (
            <Octicons name="stop" size={24} color="white" className="inline" />
        ),
        backgroundColor: "#0369a1"
    }
];

export const dashboard = [
    {
        title: "Achievements",
        icon: (
            <AntDesign
                name="gift"
                size={30}
                color="#e11d48"
                className="inline"
            />
        ),
        backgroundColor: "#e11d48"
    },
    {
        title: "Favourite books",
        icon: (
            <AntDesign
                name="like1"
                size={30}
                color="#1e293b"
                className="inline"
            />
        ),
        backgroundColor: "#1e293b"
    },
    {
        title: "Privacy",
        icon: (
            <MaterialIcons
                name="privacy-tip"
                size={30}
                color="#94a3b8"
                className="inline"
            />
        ),
        backgroundColor: "#94a3b8"
    }
];
