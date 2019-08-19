'use strict';
import React, { Component } from 'react';
// libraries
import { connect } from 'react-redux';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

// Components
import { Container, Content, Text, Button, Header, Left, Icon, Right } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

// Styles
import styles from './style';

// Constants
import * as globals from '../../utils/global';
// Redux
import { getFeedback } from '../../selectors';

class ResponsePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { feedback, navigation } = this.props;

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
                    <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
                        <Left>
                            <Button
                                transparent
                                onPress={() => {
                                    navigation.navigate('FeedbackPage');
                                }}
                            >
                                <Icon
                                    type="FontAwesome"
                                    name="long-arrow-left"
                                    style={styles.itemBtnIcon}
                                />
                            </Button>
                        </Left>
                        <Right />
                    </Header>
                    <Content contentContainerStyle={styles.content}>
                        <View style={styles.contentView}>
                            <Text style={styles.responseTxt}>
                                {'First Name: '}
                                {feedback.firstName ? feedback.firstName : 'invaild'}
                            </Text>
                            <Text style={styles.responseTxt}>
                                {'Last Name: '}
                                {feedback.lastName ? feedback.lastName : 'invaild'}
                            </Text>
                            <Text style={styles.responseTxt}>
                                {'Email: '}
                                {feedback.email ? feedback.email : 'invaild'}
                            </Text>
                            <Text style={styles.responseTxt}>
                                {'Message: '}
                                {feedback.message ? feedback.message : 'invaild'}
                            </Text>
                        </View>
                    </Content>
                </LinearGradient>
            </Container>
        );
    }
}

ResponsePage.propTypes = {
    feedback: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
    return {
        feedback: getFeedback(state),
    };
}

export default connect(
    mapStateToProps,
    {}
)(ResponsePage);
