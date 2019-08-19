import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { UITextInput } from './UIComponents';

class FormTextInput extends Component {
    render() {
        const {
            input,
            meta,
            label,
            inputTextWeight,
            secure,
            placeholder,
            fieldIcon,
            customStyles,
            wrapperStyles,
        } = this.props;
        return (
            <View style={{ alignSelf: 'stretch' }}>
                {!!label && (
                    <View style={styles.labelBox}>
                        <Text style={styles.label}>{label}</Text>
                    </View>
                )}

                <UITextInput
                    value={input.value}
                    invalid={!!meta.submitError}
                    onBlur={input.onBlur}
                    onFocus={input.onFocus}
                    onChange={input.onChange}
                    inputTextWeight={inputTextWeight}
                    secure={secure}
                    placeholder={placeholder}
                    placeholderTextColor={'#a5b4c7'}
                    fieldIcon={fieldIcon}
                    customStyles={customStyles}
                    wrapperStyles={wrapperStyles}
                />
                {!!meta.submitError && !!meta.touched && (
                    <View style={[styles.errorBox]}>
                        {meta.submitError.map((error, index) => (
                            <Text key={index.toString()} style={styles.error}>
                                {error}
                            </Text>
                        ))}
                    </View>
                )}
                {!!meta.error && !!meta.touched && (
                    <View style={styles.errorBox}>
                        {meta.error.map((error, index) => (
                            <Text key={index.toString()} style={styles.error}>
                                {error}
                            </Text>
                        ))}
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        paddingBottom: 7,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(191, 191, 219, 0.5)',
        color: '#202020',
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '500',
    },
    labelBox: {
        marginBottom: 14,
    },
    label: {
        fontSize: 16,
        lineHeight: 19,
        color: '#CBCBDD',
    },
    title: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '500',
        color: '#202020',
    },
    errorBox: {
        marginTop: 8,
        marginBottom: 0,
    },
    error: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 19,
        color: '#FF7573',
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
});

FormTextInput.propTypes = {
    inputTextWeight: PropTypes.string,
    secure: PropTypes.bool,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    fieldIcon: PropTypes.number,
    customStyles: PropTypes.object,
    wrapperStyles: PropTypes.object,
};

FormTextInput.defaultProps = {
    inputTextWeight: '300',
    secure: false,
};

export default FormTextInput;
