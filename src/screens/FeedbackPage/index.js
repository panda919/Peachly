'use strict';
import React, { Component } from 'react';
// libraries
import { connect } from 'react-redux';
import { View, StatusBar, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Spinner from 'react-native-loading-spinner-overlay';

// Components
import { Container, Content, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import LinearGradient from 'react-native-linear-gradient';

import FormFeedback from '../../containers/FormFeedback/FormFeedback';

// Styles
import styles from './style';

// Constants
import * as globals from '../../utils/global';
// Redux
import { sendFeedback } from '../../reducers/feedbackReducer';
import { getFeedback, getSubmittingState, getSubmitError } from '../../selectors';
const initFeedback = {
    first: null,
    last: null,
    email: null,
    message: null,
};
class FeedbackPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackData: initFeedback,
        };
    }
    componentDidUpdate = prevProps => {
        const { requesting, error, navigation } = this.props;
        if (!error && !requesting && prevProps.requesting !== requesting) {
            navigation.navigate('ResponsePage');
        }
    };
    resetFeedbackData = () => {
        this.setState({
            ...this.state,
            feedbackData: initFeedback,
        });
    };
    handleSubmit = values => {
        const { sendFeedback } = this.props;
        sendFeedback(values);
        Keyboard.dismiss();
        this.resetFeedbackData();
    };
    render() {
        const { requesting } = this.props;
        const { feedbackData } = this.state;

        return (
            <Container style={styles.container}>
                <StatusBar
                    backgroundColor={globals.AppBackGroundColor}
                    hidden={globals.hideStatus}
                />

                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={globals.InputGradientColors}
                    style={styles.linearGradient}
                >
                    <Content contentContainerStyle={styles.content}>
                        <View style={styles.contentView}>
                            <Text style={styles.titleTxt}>{'Feedback'}</Text>
                            <FormFeedback
                                initialValues={feedbackData}
                                onSubmit={this.handleSubmit}
                            />
                        </View>
                    </Content>
                </LinearGradient>
                <Spinner
                    visible={requesting}
                    textContent={'One moment...'}
                    textStyle={{ color: globals.defaultBtnColor }}
                />
            </Container>
        );
    }
}

FeedbackPage.propTypes = {
    feedback: PropTypes.object.isRequired,
    sendFeedback: PropTypes.func.isRequired,
    requesting: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    navigation: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
    return {
        feedback: getFeedback(state),
        requesting: getSubmittingState(state),
        error: getSubmitError(state),
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            sendFeedback,
        },
        dispatch
    );
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedbackPage);
