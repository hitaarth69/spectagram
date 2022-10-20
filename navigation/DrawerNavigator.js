import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import LikedVideos from "../screens/LikedVideos";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="LikedVideos" component={LikedVideos} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;