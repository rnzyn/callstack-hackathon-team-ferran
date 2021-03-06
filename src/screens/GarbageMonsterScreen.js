import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { notify, getSlackNameByName } from '../services/slackService';
import { getPhotoByName } from '../services/imagesService';

export default class GarbageMonsterScreen extends Component {

  static route = {
    navigationBar: {
      title: 'Garbage Monster',
    },
  };

  onEndorseHandler = () => {
    const { who } = this.props.route.params;
    const slackUser = getSlackNameByName(who);
    notify(`:thumbsup: Hey <@${slackUser}>, you're the best Garbage Monster ever!!!`, [
      {
        image_url: 'https://media.giphy.com/media/26BkNituin1dca6GI/giphy.gif',
        color: "#39ff80"
      }
    ], '#garbage');
  };

  onBlameHandler = () => {
    const { who } = this.props.route.params;
    const slackUser = getSlackNameByName(who);
    notify(`:sos: Hey <@${slackUser}>, take care of the garbage can!!!`, [
      {
        image_url: 'https://media.giphy.com/media/oBJ3iITOA7mBG/giphy.gif',
        color: "#ff2d38"
      }
    ], '#garbage');
  };

  render() {
    const { who } = this.props.route.params;
    return (
      <View style={styles.container}>
        <Image source={{ uri: getPhotoByName(who) }} style={styles.image} />
        <Text style={styles.name}>
          {`@${who}`}
        </Text>
        <Button
          title="Endorse!"
          backgroundColor="#009688"
          icon={{name: 'thumbs-up', type: 'font-awesome'}}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={this.onEndorseHandler}
        />
        <Button
          title="Garbage is full"
          backgroundColor="#FF0E6B"
          icon={{name: 'trash', type: 'font-awesome'}}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={this.onBlameHandler}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center'
  },
  button: {
    width: 200,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 18,
  },
  name: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 60
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
    borderRadius: 100
  }
});
