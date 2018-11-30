import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import {primaryStart, primaryEnd} from "./utils/Colors";
import Header from './components/Header';
import Input from './components/Input';

const headerTitle = 'To Do';

export default class App extends React.Component {
    state = {
        inputValue: ''
    };
    newInputValue = value => {
        this.setState({
            inputValue: value
        });
    };
    render() {
        const { inputValue } = this.state;
        return (
            <LinearGradient
                colors={[primaryStart, primaryEnd]}
                style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.centered}>
                    <Header title={headerTitle}/>
                </View>
                <View>
                    <Input inputValue={inputValue} onChangeText={this.newInputValue}/>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    centered: {
        alignItems: 'center'
    },
    inputContainer: {
        marginTop: 40,
        paddingLeft: 15
    },
    list: {
        flex: 1,
        marginTop: 70,
        paddingLeft: 15,
        marginBottom: 10
    },
    scrollableList: {
        marginTop: 15
    }
});
