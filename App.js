import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';


import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import NoticeScreen from './screens/NoticeScreen.js';
import AddScreen from './screens/AddScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import ProfileScreen from './screens/ProfileScreen';
import Setting1Screen from './screens/Setting1Screen';
import Setting2Screen from './screens/Setting2Screen'; 


export default class App extends React.Component {
  render() {
    // ヘッダーの仕様について
    const headerNavigationOptions = {
      headerStyle: {
        backgroundColor: 'orange',
        marginTop: (Platform.OS === 'android' ? 24 : 0 )
      },
      headerTitleStyle: { color: 'white' },
      headerTintColor: 'white',
    };


    // `HomeStack`について
    const HomeStack = createStackNavigator({
      home: {
        screen: HomeScreen,
        navigationOptions: {
          ...headerNavigationOptions,
          headerTitle: 'CHAIR',
          headerBackTitle: 'Home'
        }
      },
      detail: {
        screen: DetailScreen,
        navigationOptions: {
          ...headerNavigationOptions,
          headerTitle: 'Detail',
        }
      }
    });
    
    // 1階層目以外はタブを隠す
    HomeStack.navigationOptions = ({ navigation }) => {
      return {
        tabBarVisible: (navigation.state.index === 0)
      };
    };


    // `AddStack`について
    const AddStack = createStackNavigator({
      add: {
        screen: AddScreen,
        navigationOptions: {
          header: null
        }
      }
    });

    // 全階層でタブを隠す
    AddStack.navigationOptions = ({ navigation }) => {
      return {
        tabBarVisible: (navigation.state.index === -1)
      };
    };


    // `ProfileStack`について
    const ProfileStack = createStackNavigator({
      profile: {
        screen: ProfileScreen,
        navigationOptions: {
          ...headerNavigationOptions,
          headerTitle: 'CHAIR',
          headerBackTitle: 'Profile'
        }
      },
      setting1: {
        screen: Setting1Screen,
        navigationOptions: {
          ...headerNavigationOptions,
          headerTitle: 'Setting 1',
        }
      },
      setting2: {
        screen: Setting2Screen,
        navigationOptions: {
          ...headerNavigationOptions,
          headerTitle: 'Setting 2',
        }
      }
    });

    // 1階層目以外はタブを隠す
    ProfileStack.navigationOptions = ({ navigation }) => {
      return {
        tabBarVisible: (navigation.state.index === 0)
      };
    };

    // `FavoriteStack`について（タブの非表示は検討中）
    const FavoriteStack = createStackNavigator({
      favorite: {
        screen: FavoriteScreen,
        navigationOptions: {
          ...headerNavigationOptions,
          headerTitle: 'Favorite',
        }
      }
    });

    // `NoticeStack`について（タブの非表示は検討中）
    const NoticeStack = createStackNavigator({
      notice: {
        screen: NoticeScreen,
        navigationOptions: {
          ...headerNavigationOptions,
          headerTitle: 'Notice',
        }
      }
    });

    
    // `Home`, `Add`, `Profile`, `Favorite`, `Notice` 5つのStackを繋げて`MainTab`に
    const MainTab = createBottomTabNavigator({
      homeStack: {
        screen: HomeStack,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Image
              style={{ height: 25, width: 25, tintColor: tintColor }}
              source={require('./assets/home.png')}
            />
          ),
          title: 'Home'
        }
      },
      noticeStack: {
        screen: NoticeStack,
        navigationOptions: {
          tabBarIcon: ( { tintColor }) => (
            <Image
              style={{ height: 25, width: 25, tintColor: tintColor }}
              source={require('./assets/notice.png')}
            />
          ),
          title: 'Notice',
        }
      },
      addStack: {
        screen: AddStack,
        navigationOptions: {
          tabBarIcon: () => (
            <Image
              style={{ height: 60, width: 60, tintColor: 'darkorange' }}
              source={require('./assets/add.png')}
            />
          ),
          title: '',
        }
      },
      favoriteStack: {
        screen: FavoriteStack,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Image
              style={{ height: 25, width: 25, tintColor: tintColor }}
              source={require('./assets/favorite.png')}
            />
          ),
          title: 'Favorite'
        }
      },
      profileStack: {
        screen: ProfileStack,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Image
              style={{ height: 25, width: 25, tintColor: tintColor }}
              source={require('./assets/profile.png')}
            />
          ),
          title: 'Profile'
        }
      },
    }, {
      swipeEnabled: false, // Android用（iOSと同じ挙動にする為）
    });

    // `WelcomeScreen`と`MainTab`を繋げて`NavigatorTab`に
    const NavigatorTab = createAppContainer(
      createSwitchNavigator({
        welcome: { screen: WelcomeScreen },
        main: { screen: MainTab }
      })
    );

    // `NavigatorTab`を描画
    return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <NavigatorTab />
    </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
