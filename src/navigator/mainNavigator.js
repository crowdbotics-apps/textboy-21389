import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3138537Navigator from '../features/BlankScreen3138537/navigator';
import BlankScreen2138536Navigator from '../features/BlankScreen2138536/navigator';
import BlankScreen1138535Navigator from '../features/BlankScreen1138535/navigator';
import BlankScreen0138534Navigator from '../features/BlankScreen0138534/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
