import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Form, Field } from 'react-final-form';
import FormTextInput from '../../components/FormComponents/FormTextInput';
import FormMultiTextInput from '../../components/FormComponents/FormMultiTextInput';
import { Button } from 'native-base';
import * as globals from '../../utils/global';

class FormFeedback extends Component {
    static propTypes = {
        navigation: PropTypes.func.isRequired,
    };

    validate = values => {
        const errors = {};

        if (!values.first) {
            errors.first = ['First Name is required.'];
        }

        if (!values.last) {
            errors.last = ['Last Name is required.'];
        }

        if (!values.email) {
            errors.email = ['Email is required.'];
        }
        if (!values.message) {
            errors.message = ['Message is required.'];
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = ['Invalid email address'];
        }

        return errors;
    };

    render() {
        return (
            <Form
                onSubmit={this.props.onSubmit}
                initialValues={this.props.initialValues}
                validate={this.validate}
                render={({ handleSubmit, pristine, invalid, submitting, form }) => {
                    return (
                        <View style={styles.form}>
                            <View style={styles.row}>
                                <Field
                                    name="first"
                                    component={FormTextInput}
                                    placeholder="First Name"
                                    customStyles={styles.input}
                                    wrapperStyles={styles.wrapper}
                                />
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Field
                                    name="last"
                                    component={FormTextInput}
                                    placeholder="Last Name"
                                    customStyles={styles.input}
                                    wrapperStyles={styles.wrapper}
                                />
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Field
                                    name="email"
                                    component={FormTextInput}
                                    placeholder="John@example.com"
                                    customStyles={styles.input}
                                    wrapperStyles={styles.wrapper}
                                />
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Field
                                    name="message"
                                    component={FormMultiTextInput}
                                    placeholder="Message"
                                    customStyles={styles.input}
                                    wrapperStyles={styles.wrapper}
                                />
                            </View>
                            <View style={styles.group}>
                                <Button
                                    onPress={() => {
                                        handleSubmit();
                                    }}
                                    style={styles.formBtn}
                                >
                                    <Text style={styles.btnText}>{'Submit'}</Text>
                                </Button>
                            </View>
                        </View>
                    );
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    form: {
        width: 400,
        paddingHorizontal: 39,
    },
    row: {
        marginBottom: 16,
    },
    group: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // marginBottom: 24,
    },
    text: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '300',
        color: '#202020',
        fontFamily: globals.FONT_NORMAL,
    },
    wrapper: {
        // borderWidth: 2,
        // borderRadius: 5,
        // borderColor: globals.LIGHT_GRAY_COLOR,
    },
    textColored: {
        color: '#4a90e2',
    },
    input: {
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 18,
        fontFamily: globals.FONT_NORMAL,
    },
    btnText: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontFamily: globals.FONT_NORMAL,
    },
    formBtn: {
        alignSelf: 'stretch',
        marginVertical: 20,
        backgroundColor: globals.defaultBtnColor,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: globals.defaultBtnColor,
    },
});

FormFeedback.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
};

export default FormFeedback;
