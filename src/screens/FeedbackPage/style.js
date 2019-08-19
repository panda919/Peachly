'use strict';
import { StyleSheet } from 'react-native';

import * as globals from '../../utils/global';

const styles = StyleSheet.create({
    container: {
        // backgroundColor: globals.AppBackGroundColor,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentView: {
        backgroundColor: globals.defaultContainerBackColor,
        borderWidth: 2,
        borderRadius: 5,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    feedItem: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'black',
    },

    titleTxt: {
        color: globals.defaultTxtColor,
        fontSize: globals.TOP_FONT_SIZE,
        textAlign: 'center',
        fontFamily: globals.FONT_BOLD,
        marginVertical: 20,
    },
});

export default styles;
