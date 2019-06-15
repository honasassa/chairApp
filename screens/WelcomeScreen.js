import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Alert, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

    // スクリーンの画面幅を取得
const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDE_DATA = [
    { title: 'Scene: 1', text: '全国の無料休憩所が探せます', uri: require('../assets/chair_muryouGamen.png') },
    { title: 'Scene: 2', text: 'シーンに応じて近くのお店も利用', uri: require('../assets/chair_yuryouGamen.png') },
    { title: 'Scene: 3', text: 'お店からのお得情報も受け取れる', uri: require('../assets/chair_couponGamen.png') },
    ];
    

class WelcomeScreen extends React.Component {
    // startボタンが押された時の挙動
    onStartButtonPress = () => {
        this.props.navigation.navigate('main');
    }

    // ラストスライドのボタンについて
    renderLastButton(index) {
        if (index === SLIDE_DATA.length - 1) {
            return (
                <Button
                    style={{ padding: 20 }}
                    buttonStyle={{ backgroundColor: 'deepskyblue' }}
                    title="CHAIRを始める "
                    onPress={this.onStartButtonPress}
                />
            );
        }
    }

    // 各スライドについて
  renderSlides() {
    return SLIDE_DATA.map((slide, index) => {
        return (
          <View
                key={index}
                style={styles.slideStyle}
            >
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>{slide.title}</Text>
                <Text style={styles.textStyle}>{slide.text}</Text>
            </View>

            <Image
                style={{ flex: 2 }}
                resizeMode="contain"
                source={slide.uri}
            />

            <View style={styles.containerStyle}>
                {this.renderLastButton(index)}
                <Text style={styles.textStyle}>{index + 1} / 3</Text>
            </View>
          </View>
        );
    });
  }

    // スクロールの際の挙動
  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

    // スライドのスタイルについて
const styles = StyleSheet.create({
    slideStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'orange',
        width: SCREEN_WIDTH
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        fontSize: 20,
        padding: 5
    }
});


export default WelcomeScreen;