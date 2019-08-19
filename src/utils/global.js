'use strict';
import { Dimensions, StyleSheet } from 'react-native';
import moment from 'moment';
import _ from 'lodash';

//= ================Constant Value=======================================
export const testUserId = 'CHEF-001';
export const CHEF = 'CHEF';
export const FOODIE = 'FOODIE';

export const hideStatus = true;

export const DATE_FORMAT = 'D MMM YYYY';
export const START_DATE = moment().format('YYYY-MM-DD');
export const END_DATE = moment()
    .add(7, 'days')
    .format('YYYY-MM-DD');

//= ================Constant Value End=======================================

//= ================Color Value=======================================

export const DARK_GRAY_COLOR = '#5c5c5c';
export const LIGHT_GRAY_COLOR = '#e9e9e9';
export const MIDDLE_GRAY_COLOR = '#8e8e8e';
export const WHITE_COLOR = '#f4f4f5';
export const PERFECT_WHITE_COLOR = '#FFFFFF';
export const LIGHT_BLUE_COLOR = '#b0b9c2';
export const PERFECT_BLACk_COLOR = '#000000';
export const RED_COLOR = '#ff4d4d';
export const SECONDARY_GRAY_COLOR = '#c9c9c9';

export const AppBackGroundColor = '#e7e7e7';

export const defaultBtnColor = '#d3a1ff';
export const defaultTxtColor = '#bb8ce5';
export const defaultContainerBackColor = '#e7e7e7';

export const InputGradientStartColor = '#2a2a2a';
export const InputGradientEndColor = '#191919';
export const InputGradientColors = [InputGradientStartColor, InputGradientEndColor];

//= ===================Color Value End==========================================
//= ================Font Value=======================================
export const ICON_SIZE = 24;

export const TOP_FONT_SIZE = 40; // 31.99
export const BIGGER_FONT_SIZE = 31; // 31.99
export const BIG_FONT_SIZE = 28; // 28.79
export const NORMAL_FONT_SIZE = 23; // 23.03
export const SMALL_FONT_SIZE = 15; // 15.36
export const SMALLER_FONT_SIZE = 11; // 11.52

export const FONT_NORMAL = 'OpenSans';
export const FONT_REGULAR = 'OpenSans-Regular';
export const FONT_BOLD = 'OpenSans-Bold';
export const FONT_SEMI_BOLD = 'OpenSans-Semibold';
export const FONT_ITALIC = 'OpenSans-Italic';

//= ===================Font Value End==========================================

//= =========const screen value=================
export const DESIGN_WIDTH = 1080;
export const DESIGN_HEIGHT = 1920;
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const globalPaddingHorVal = 25;
export const globalMaxPaddingHorVal = 50;

export const globalPaddingVerVal = 25;

export function getDeviceWidth(width) {
    return Math.round((width * DEVICE_WIDTH) / DESIGN_WIDTH);
}
export function getDeviceHeight(height) {
    return Math.round((height * DEVICE_HEIGHT) / DESIGN_HEIGHT);
}
//= ======const screen value end===================
