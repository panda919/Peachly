'use strict';
import { StyleSheet } from 'react-native';

import * as globals from '../../utils/global';

const styles = StyleSheet.create({
    container: {},
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentView: {
        borderWidth: 2,
        borderRadius: 5,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    itemBtnIcon: {
        fontSize: 25,
        fontWeight: '100',
        textAlign: 'center',
        color: globals.defaultContainerBackColor,
    },

    responseTxt: {
        color: globals.defaultTxtColor,
        fontSize: globals.NORMAL_FONT_SIZE,
        textAlign: 'center',
        fontFamily: globals.FONT_BOLD,
        marginVertical: 20,
    },
});

export default styles;
