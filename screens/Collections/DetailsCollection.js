import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {styles} from './../../components/styles';
import { Image, View } from '@shoutem/ui';
class DetailsCollection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      photos:
      [
        { "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" } },
        { "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" } },
        { "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" } },
        { "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" } },
        { "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" } },
        { "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" } },
        { "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-7.jpg" } }
      ]
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
          {/* Hot Deal */}
        <ScrollView>
          {
            this.state.photos.map((photo, id) => {
              return (
                <View key={id} style={detailsCollectionStyles.space}>
                    <Image styleName="large-wide" source={{uri: photo.image.url}} />
                </View>
                
              )
            })
          }
        </ScrollView>
      </View>
    );
  }
}

export default DetailsCollection

const detailsCollectionStyles = StyleSheet.create({
  space:{
    paddingBottom: 10,
  },
})