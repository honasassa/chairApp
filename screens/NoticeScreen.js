import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';


class NoticeScreen extends React.Component {
 render() {
   return (
     <View style={{ flex: 1, justifyContent: 'center' }}>
       <Text>This is NoticeScreen</Text>

       <Icon
            name="close"
            onPress={() => this.props.navigation.navigate('home')}
        />
     </View>
   );
 }
}


export default NoticeScreen;