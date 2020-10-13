import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp19141188Navigator from '../features/SignUp19141188/navigator';
import Messaging9141187Navigator from '../features/Messaging9141187/navigator';
import BlankScreen6141184Navigator from '../features/BlankScreen6141184/navigator';
import BlankScreen5139178Navigator from '../features/BlankScreen5139178/navigator';
import BlankScreen4138538Navigator from '../features/BlankScreen4138538/navigator';
import BlankScreen3138537Navigator from '../features/BlankScreen3138537/navigator';
import BlankScreen2138536Navigator from '../features/BlankScreen2138536/navigator';
import BlankScreen1138535Navigator from '../features/BlankScreen1138535/navigator';
import BlankScreen0138534Navigator from '../features/BlankScreen0138534/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp19141188: { screen: SignUp19141188Navigator },
Messaging9141187: { screen: Messaging9141187Navigator },
BlankScreen6141184: { screen: BlankScreen6141184Navigator },
BlankScreen5139178: { screen: BlankScreen5139178Navigator },
BlankScreen4138538: { screen: BlankScreen4138538Navigator },
BlankScreen3138537: { screen: BlankScreen3138537Navigator },
BlankScreen2138536: { screen: BlankScreen2138536Navigator },
BlankScreen1138535: { screen: BlankScreen1138535Navigator },
BlankScreen0138534: { screen: BlankScreen0138534Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
