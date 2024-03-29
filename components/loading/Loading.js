import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = () => {
    return (
        <View>
            <ActivityIndicator size='large' />
        </View>
    );
}

export default Loading;