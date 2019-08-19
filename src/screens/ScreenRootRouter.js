'use strict';
import { createSwitchNavigator } from 'react-navigation';

import FeedbackPage from './FeedbackPage';
import ResponsePage from './ResponsePage';

const ScreenRootRouter = createSwitchNavigator(
    {
        FeedbackPage: { screen: FeedbackPage },
        ResponsePage: { screen: ResponsePage },
    },
    {
        initialRouteName: 'FeedbackPage',
        headerMode: 'none',
        navigationOptions: {
            header: null,
        },
    }
);
export default ScreenRootRouter;
