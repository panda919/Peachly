import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

class FormHeader extends Component {
    render() {
        const { title, paddingLeft } = this.props;

        return (
            <View style={[styles.container, { paddingLeft: paddingLeft || 108 }]}>
                <Text style={styles.title}> {title} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        left: -60,
        marginBottom: 30,
        backgroundColor: '#219653',
        borderRadius: 20,
        paddingTop: 9,
        paddingBottom: 10,
        paddingRight: 41,
        paddingLeft: 108,
        zIndex: 1,
    },
    title: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: '900',
    },
});
FormHeader.propTypes = {
    title: PropTypes.string,
    paddingLeft: PropTypes.number,
};

export default FormHeader;
