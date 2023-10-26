import React, { useState } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Post from './Post';
import Upload from './Upload';
import Community from './Community';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

const App = () => {
    const scaleValue = new Animated.Value(1);
    const [showNotifications, setShowNotifications] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const tabBarOptions = {
        activeTintColor: '#225577',
        inactiveTintColor: '#999',
        style: { backgroundColor: '#5522', height: 70 },
        labelStyle: { fontSize: 14, color: '#552277' },
    };

    const openMenu = () => {
        // Functionality to open the menu
    };

    return (
        <View style={styles.root}>
            <View style={styles.header}>
                <View style={styles.cont}>
                <Text style={styles.title}>
                    Student Community
                </Text>
                <Text style={styles.subtitle}>
                    connects with your community people.
                </Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => setShowNotifications(!showNotifications)}>
                        <Ionicons name={showNotifications ? 'notifications' : 'notifications-outline'} size={25} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => setIsBookmarked(!isBookmarked)}>
                        <Ionicons name={isBookmarked ? 'bookmark' : 'bookmark-outline'} size={25} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => openMenu()}>
                        <Ionicons name="menu" size={25} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Post') {
                            iconName = focused ? 'information-circle' : 'information-circle-outline';
                        } else if (route.name === 'Upload') {
                            iconName = focused ? 'add-circle' : 'add-circle-outline';
                        } else if (route.name === 'Community') {
                            iconName = focused ? 'people' : 'people-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={tabBarOptions}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Post" component={Post} />
                <Tab.Screen name="Upload" component={Upload} />
                <Tab.Screen name="Community" component={Community} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#000',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'flex-end',
        paddingHorizontal: 10,
        height: 80,
        backgroundColor: '#225577',
    },
    title: {
        color:'white',
        fontSize: 25,
        textTransform:'uppercase',
    },
    subtitle: {
        color: 'white',
        textTransform: 'capitalize',
        paddingBottom: 2,
    },
    iconContainer: {
        padding: 10,
    },
});

export default App;
