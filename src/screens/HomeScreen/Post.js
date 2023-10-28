import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';


const AllPosts = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
            <Text>All Posts Content Goes Here</Text>
        </View>
    );
};

const PostedPosts = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
            <Text>Posted Posts Content Goes Here</Text>
        </View>
    );
};

const SolvedPosts = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
            <Text>Solved Posts Content Goes Here</Text>
        </View>
    );
};

const Post = () => {
    const [selectedTab, setSelectedTab] = useState('Cpost');

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <View style={{ flex: 1, borderColor: '#225577', borderWidth: 2 }}>
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, selectedTab === 'Cpost' ? styles.activeTab : null]}
                    onPress={() => handleTabPress('Cpost')}>
                    <Text style={styles.tabText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, selectedTab === 'posted' ? styles.activeTab : null]}
                    onPress={() => handleTabPress('posted')}>
                    <Text style={styles.tabText}>Posted</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, selectedTab === 'solved' ? styles.activeTab : null]}
                    onPress={() => handleTabPress('solved')}>
                    <Text style={styles.tabText}>Solved</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1 }}>
                {selectedTab === 'Cpost' && <AllPosts />}
                {selectedTab === 'solved' && <SolvedPosts />}
                {selectedTab === 'posted' && <PostedPosts />}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 0,
        borderBottomColor: '#225577',
        borderBottomWidth: 3,
        backgroundColor: '#d3d3d3',
    },
    tab: {
        padding: 10,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#225577',
    },
    tabText: {
        fontSize: 16,
        color: '#225577',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});

export default Post;
