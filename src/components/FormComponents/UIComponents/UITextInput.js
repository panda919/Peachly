import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput, View, Image } from 'react-native';

class UITextInput extends Component {
    render() {
        const {
            onBlur,
            onFocus,
            onChange,
            value,
            placeholder,
            secure,
            invalid,
            placeholderTextColor,
            fieldIcon,
            customStyles,
            wrapperStyles,
            multiline,
        } = this.props;
        return (
            <View
                style={[
                    {
                        flexDirection: 'row',
                        alignItems: 'center',
                    },
                    wrapperStyles && wrapperStyles,
                ]}
            >
                {!!fieldIcon && (
                    <View style={styles.fieldIcon}>
                        <Image source={fieldIcon} />
                    </View>
                )}
                <TextInput
                    style={[
                        styles.input,
                        invalid && { borderBottomColor: '#FF7573', textAlignVertical: 'top' },
                        customStyles && customStyles,
                    ]}
                    secureTextEntry={secure}
                    underlineColorAndroid="transparent"
                    onChangeText={onChange}
                    multiline={multiline}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        paddingVertical: 12,
        paddingLeft: 10,
        paddingRight: 23,
        color: '#464646',
        fontSize: 14,
        fontWeight: '500',
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    fieldIcon: {
        alignSelf: 'stretch',
        paddingLeft: 18,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
});
UITextInput.defaultProps = {
    multiline: false,
};
UITextInput.propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    secure: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    invalid: PropTypes.bool,
    fieldIcon: PropTypes.number,
    fieldIconTop: PropTypes.number,
    placeholderTextColor: PropTypes.string,
    customStyles: PropTypes.object,
    wrapperStyles: PropTypes.object,
    multiline: PropTypes.bool,
};

export default UITextInput;
