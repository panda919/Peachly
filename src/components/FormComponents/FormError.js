import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class FormError extends Component {
    render() {
        const { error, submitFailed } = this.props.meta;
        // console.log('oshibki v forme', this.props.meta);
        return (
            <View style={styles.error}>
                {submitFailed && <Text style={styles.text}>{error}</Text>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    error: {
        marginLeft: 50,
    },
    text: {
        fontSize: 16,
        lineHeight: 19,
        color: '#bc0000',
    },
});

FormError.propTypes = {
    meta: PropTypes.object,
};

export default FormError;
