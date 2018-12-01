import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SubTitle = ({subtitle}) => (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>
            {subtitle}
        </Text>
    </View>
);

const styles = StyleSheet.create({
   subtitleContainer: {
       justifyContent: 'center',
       alignItems: 'center'
   },
    subtitleText: {
       color: 'white',
        fontSize: 16
    }
});

export default SubTitle;