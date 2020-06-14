import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Icon} from 'react-native-elements';

class ChatRoomHeader extends React.Component {

    componentDidMount() {
    }

    componentDidUpdate(
        prevProps: Readonly<P>,
        prevState: Readonly<S>,
        snapshot: SS
    ) {
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <SafeAreaView style={styles.header_safe_area}>
                    <View style={styles.header}>
                        <View style={styles.header_inner}>
                            <View>
                                <Image
                                    source={require('../Assets/back.png')}
                                    style={{width: 25, height: 25}}
                                />
                            </View>
                            <View>
                                <Text style={styles.chat_room_name}>
                                    Olaf
                                </Text>
                            </View>
                            <View>
                                <Image
                                    source={require('../Assets/back.png')}
                                    style={{width: 25, height: 25}}
                                />
                            </View>
                            <View>
                                <Image
                                    source={require('../Assets/back.png')}
                                    style={{width: 25, height: 25}}
                                />
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </>
        );
    }
}

export default ChatRoomHeader;

const styles = StyleSheet.create({
    header_safe_area: {
        zIndex: 1000,
        backgroundColor: '#B0C4DE',
    },
    header: {
        height: 50,
        paddingHorizontal: 16,
    },
    header_inner: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
    },
    chat_room_name: {
        fontWeight: 'bold',
        fontSize: 15,
    },
});

