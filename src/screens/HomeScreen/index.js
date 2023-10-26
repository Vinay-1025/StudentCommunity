import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Post from './Post';
import Upload from './Upload';
import Community from './Community';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

const App = () => {
    const scaleValue = new Animated.Value(1);

    const tabBarOptions = {
        activeTintColor: 'black',
        inactiveTintColor: '#999',
        style: { backgroundColor: '#5522', height: 70 }, // Increase tab bar height
    };

    return (
        <View style={styles.root}>
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

                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Animated.View
                                    style={[
                                        {
                                            transform: [
                                                {
                                                    scale: focused
                                                        ? scaleValue.interpolate({
                                                            inputRange: [0, 2],
                                                            outputRange: [1, 1.5],
                                                        })
                                                        : 1,
                                                },
                                            ],
                                        },
                                    ]}
                                >
                                    <Ionicons name={iconName} size={size} color={color} />
                                </Animated.View>
                            </View>
                        );
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
});

export default App;
