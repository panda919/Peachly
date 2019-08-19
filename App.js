'use strict';
import { createAppContainer } from 'react-navigation';
import ScreenRootRouter from './src/screens/ScreenRootRouter';
const AppContainer = createAppContainer(ScreenRootRouter);
export default AppContainer;
