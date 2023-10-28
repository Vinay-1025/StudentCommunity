import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import user from '../../../assets/images/dou.png';
import userb from '../../../assets/images/userb.jpeg';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();

    const handleGoToCommunity = () => {
        // Navigate to the 'Community' screen
        navigation.navigate('Community'); // Replace 'Community' with the actual name of your community screen in your navigator.
    };

    const scrollY = useRef(new Animated.Value(0)).current;

    const headerOpacity = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    const fadeIn = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    const userImageTranslateY = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, 50],
        extrapolate: 'clamp',
    });

    const [iconStates, setIconStates] = useState({
        comment: false,
        code: false,
        bookmark: false,
    });

    const [showFullDescription, setShowFullDescription] = useState(false);

    const handleIconPress = (icon) => {
        setIconStates((prevState) => ({
            ...prevState,
            [icon]: !prevState[icon],
        }));
    };

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const userDescription = showFullDescription
        ? "Hereby I am attaching the files that I have worked in the past days."
        : "Hereby I am attaching the files that I have worked";

    return (
        <Animated.ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
        >
            <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
                <Image source={user} style={styles.img} />
                <Text style={styles.title}>User</Text>
                <TouchableOpacity onPress={handleGoToCommunity}>
                    <Text style={styles.go}>go community</Text>
                </TouchableOpacity>
            </Animated.View>

            {/* User Details and Post Section */}
            <Animated.View style={styles.details}>
                <Image source={userb} style={styles.userImage} />
                <Animated.View style={styles.userInfo}>
                    <Text style={styles.userName}>Mohan Patro</Text>
                    <Text style={styles.userDescription} numberOfLines={2}>
                        {userDescription}
                    </Text>
                    {userDescription.length > 40 && !showFullDescription && (
                        <TouchableOpacity onPress={toggleDescription}>
                            <Text style={styles.moreButton}>More</Text>
                        </TouchableOpacity>
                    )}
                </Animated.View>
            </Animated.View>

            {/* Post Content Section */}
            <Animated.View style={styles.postContent}>
                <Text style={styles.postText}>
                    This is the post content. You can display any text, images, or other media here.
                </Text>
                {/* Add more UI elements for the post, such as images, videos, etc. */}
            </Animated.View>

            {/* Icons and Information Section */}
            <Animated.View style={styles.main}>
                <Animated.View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => handleIconPress('comment')}>
                        <FontAwesome
                            name={iconStates.comment ? 'comment' : 'comment-o'}
                            size={20}
                            color={iconStates.comment ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('code')}>
                        <FontAwesome
                            name={iconStates.code ? 'check-circle' : 'code'}
                            size={20}
                            color={iconStates.code ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('bookmark')}>
                        <FontAwesome
                            name={iconStates.bookmark ? 'bookmark' : 'bookmark-o'}
                            size={20}
                            color={iconStates.bookmark ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={styles.infoContainer}>
                    <Text style={styles.category}>BACK-END WEB DEVELOPMENT</Text>
                    <Text style={styles.timestamp}>Today (9:00am)</Text>
                </Animated.View>
            </Animated.View>

            {/* User Details and Post Section */}
            <Animated.View style={styles.details}>
                <Image source={userb} style={styles.userImage} />
                <Animated.View style={styles.userInfo}>
                    <Text style={styles.userName}>Kalyan Reddy</Text>
                    <Text style={styles.userDescription} numberOfLines={2}>
                        {userDescription}
                    </Text>
                    {userDescription.length > 40 && !showFullDescription && (
                        <TouchableOpacity onPress={toggleDescription}>
                            <Text style={styles.moreButton}>More</Text>
                        </TouchableOpacity>
                    )}
                </Animated.View>
            </Animated.View>

            {/* Post Content Section */}
            <Animated.View style={styles.postContent}>
                <Text style={styles.postText}>
                    This is the post content. You can display any text, images, or other media here.
                </Text>
                {/* Add more UI elements for the post, such as images, videos, etc. */}
            </Animated.View>

            {/* Icons and Information Section */}
            <Animated.View style={styles.main}>
                <Animated.View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => handleIconPress('comment')}>
                        <FontAwesome
                            name={iconStates.comment ? 'comment' : 'comment-o'}
                            size={20}
                            color={iconStates.comment ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('code')}>
                        <FontAwesome
                            name={iconStates.code ? 'check-circle' : 'code'}
                            size={20}
                            color={iconStates.code ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('bookmark')}>
                        <FontAwesome
                            name={iconStates.bookmark ? 'bookmark' : 'bookmark-o'}
                            size={20}
                            color={iconStates.bookmark ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={styles.infoContainer}>
                    <Text style={styles.category}>Full stack WEB DEVELOPMENT</Text>
                    <Text style={styles.timestamp}>Today (9:00am)</Text>
                </Animated.View>
            </Animated.View>

            {/* User Details and Post Section */}
            <Animated.View style={styles.details}>
                <Image source={userb} style={styles.userImage} />
                <Animated.View style={styles.userInfo}>
                    <Text style={styles.userName}>ganisetti venkatesh</Text>
                    <Text style={styles.userDescription} numberOfLines={2}>
                        {userDescription}
                    </Text>
                    {userDescription.length > 40 && !showFullDescription && (
                        <TouchableOpacity onPress={toggleDescription}>
                            <Text style={styles.moreButton}>More</Text>
                        </TouchableOpacity>
                    )}
                </Animated.View>
            </Animated.View>

            {/* Post Content Section */}
            <Animated.View style={styles.postContent}>
                <Text style={styles.postText}>
                    This is the post content. You can display any text, images, or other media here.
                </Text>
                {/* Add more UI elements for the post, such as images, videos, etc. */}
            </Animated.View>

            {/* Icons and Information Section */}
            <Animated.View style={styles.main}>
                <Animated.View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => handleIconPress('comment')}>
                        <FontAwesome
                            name={iconStates.comment ? 'comment' : 'comment-o'}
                            size={20}
                            color={iconStates.comment ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('code')}>
                        <FontAwesome
                            name={iconStates.code ? 'check-circle' : 'code'}
                            size={20}
                            color={iconStates.code ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('bookmark')}>
                        <FontAwesome
                            name={iconStates.bookmark ? 'bookmark' : 'bookmark-o'}
                            size={20}
                            color={iconStates.bookmark ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={styles.infoContainer}>
                    <Text style={styles.category}>full stack WEB DEVELOPMENT</Text>
                    <Text style={styles.timestamp}>Today (9:00am)</Text>
                </Animated.View>
            </Animated.View>

            {/* User Details and Post Section */}
            <Animated.View style={styles.details}>
                <Image source={userb} style={styles.userImage} />
                <Animated.View style={styles.userInfo}>
                    <Text style={styles.userName}>appanna srinivas</Text>
                    <Text style={styles.userDescription} numberOfLines={2}>
                        {userDescription}
                    </Text>
                    {userDescription.length > 40 && !showFullDescription && (
                        <TouchableOpacity onPress={toggleDescription}>
                            <Text style={styles.moreButton}>More</Text>
                        </TouchableOpacity>
                    )}
                </Animated.View>
            </Animated.View>

            {/* Post Content Section */}
            <Animated.View style={styles.postContent}>
                <Text style={styles.postText}>
                    This is the post content. You can display any text, images, or other media here.
                </Text>
                {/* Add more UI elements for the post, such as images, videos, etc. */}
            </Animated.View>

            {/* Icons and Information Section */}
            <Animated.View style={styles.main}>
                <Animated.View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => handleIconPress('comment')}>
                        <FontAwesome
                            name={iconStates.comment ? 'comment' : 'comment-o'}
                            size={20}
                            color={iconStates.comment ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('code')}>
                        <FontAwesome
                            name={iconStates.code ? 'check-circle' : 'code'}
                            size={20}
                            color={iconStates.code ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('bookmark')}>
                        <FontAwesome
                            name={iconStates.bookmark ? 'bookmark' : 'bookmark-o'}
                            size={20}
                            color={iconStates.bookmark ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={styles.infoContainer}>
                    <Text style={styles.category}>data science</Text>
                    <Text style={styles.timestamp}>Today (9:00am)</Text>
                </Animated.View>
            </Animated.View>

            {/* User Details and Post Section */}
            <Animated.View style={styles.details}>
                <Image source={userb} style={styles.userImage} />
                <Animated.View style={styles.userInfo}>
                    <Text style={styles.userName}>karri sai kishore</Text>
                    <Text style={styles.userDescription} numberOfLines={2}>
                        {userDescription}
                    </Text>
                    {userDescription.length > 40 && !showFullDescription && (
                        <TouchableOpacity onPress={toggleDescription}>
                            <Text style={styles.moreButton}>More</Text>
                        </TouchableOpacity>
                    )}
                </Animated.View>
            </Animated.View>

            {/* Post Content Section */}
            <Animated.View style={styles.postContent}>
                <Text style={styles.postText}>
                    This is the post content. You can display any text, images, or other media here.
                </Text>
                {/* Add more UI elements for the post, such as images, videos, etc. */}
            </Animated.View>

            {/* Icons and Information Section */}
            <Animated.View style={styles.main}>
                <Animated.View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => handleIconPress('comment')}>
                        <FontAwesome
                            name={iconStates.comment ? 'comment' : 'comment-o'}
                            size={20}
                            color={iconStates.comment ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('code')}>
                        <FontAwesome
                            name={iconStates.code ? 'check-circle' : 'code'}
                            size={20}
                            color={iconStates.code ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('bookmark')}>
                        <FontAwesome
                            name={iconStates.bookmark ? 'bookmark' : 'bookmark-o'}
                            size={20}
                            color={iconStates.bookmark ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={styles.infoContainer}>
                    <Text style={styles.category}>machine learning</Text>
                    <Text style={styles.timestamp}>Today (9:00am)</Text>
                </Animated.View>
            </Animated.View>

            {/* User Details and Post Section */}
            <Animated.View style={styles.details}>
                <Image source={userb} style={styles.userImage} />
                <Animated.View style={styles.userInfo}>
                    <Text style={styles.userName}>saketi kalyan</Text>
                    <Text style={styles.userDescription} numberOfLines={2}>
                        {userDescription}
                    </Text>
                    {userDescription.length > 40 && !showFullDescription && (
                        <TouchableOpacity onPress={toggleDescription}>
                            <Text style={styles.moreButton}>More</Text>
                        </TouchableOpacity>
                    )}
                </Animated.View>
            </Animated.View>

            {/* Post Content Section */}
            <Animated.View style={styles.postContent}>
                <Text style={styles.postText}>
                    This is the post content. You can display any text, images, or other media here.
                </Text>
                {/* Add more UI elements for the post, such as images, videos, etc. */}
            </Animated.View>

            {/* Icons and Information Section */}
            <Animated.View style={styles.main}>
                <Animated.View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => handleIconPress('comment')}>
                        <FontAwesome
                            name={iconStates.comment ? 'comment' : 'comment-o'}
                            size={20}
                            color={iconStates.comment ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('code')}>
                        <FontAwesome
                            name={iconStates.code ? 'check-circle' : 'code'}
                            size={20}
                            color={iconStates.code ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('bookmark')}>
                        <FontAwesome
                            name={iconStates.bookmark ? 'bookmark' : 'bookmark-o'}
                            size={20}
                            color={iconStates.bookmark ? '#446677' : 'black'}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={styles.infoContainer}>
                    <Text style={styles.category}>ui/ux designer</Text>
                    <Text style={styles.timestamp}>Today (9:00am)</Text>
                </Animated.View>
            </Animated.View>
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#225577',
        borderColor: '#225577',
        borderWidth: 2,
    },
    header: {
        flexDirection: 'row',
        padding: 7,
        backgroundColor: '#AABBCC',
        borderBottomWidth: 6,
        borderBottomColor: '#225577',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        paddingLeft: 15,
        textTransform: 'uppercase',
        width: '45%',
    },
    img: {
        width: 55,
        height: 55,
        borderRadius: 50,
    },
    go: {
        backgroundColor: '#225577',
        fontSize: 20,
        borderWidth: 0,
        justifyContent: 'space-evenly',
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        borderColor: '#225577',
        borderRadius: 20,
        margin: 0,
        paddingHorizontal: 10,
    },
    details: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        borderTopWidth: 1,
        borderTopColor: '#333',
        backgroundColor: 'white',
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 40,
        marginRight: 10,
    },
    userInfo: {
        justifyContent: 'center',
    },
    userName: {
        fontSize: 18,
        color: '#225577',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    userDescription: {
        fontSize: 12,
        color: 'black',
        textTransform: 'capitalize',
    },
    postContent: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },
    postText: {
        fontSize: 16,
        color: '#333',
    },
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 3,
        marginBottom: 3,
        backgroundColor: '#ededed',
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 50,
        justifyContent: 'space-around',
        marginLeft: 15,
        backgroundColor: '#eeded'
    },
    icon: {
        fontSize: 20,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    category: {
        fontSize: 12,
        textTransform: 'uppercase',
        color: 'black',
    },
    timestamp: {
        fontSize: 10,
        color: 'gray',
    },
    moreButton: {
        color: '#225577',
        fontWeight: 'bold',
        marginTop: 5,
    },
});

export default Home;
