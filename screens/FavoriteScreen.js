import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';


class FavoriteScreen extends React.Component {
 render() {
   return (
     <View style={{ flex: 1, justifyContent: 'center' }}>
       <Text>This is FavoriteScreen</Text>

       <Icon
            name="close"
            onPress={() => this.props.navigation.navigate('home')}
        />
     </View>
   );
 }
}


export default FavoriteScreen;