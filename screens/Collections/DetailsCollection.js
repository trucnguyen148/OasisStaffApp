import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {styles} from './../../components/styles';
import { Image, View, Text } from '@shoutem/ui';

class DetailsCollection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    }
  }
 
  render() {
    const { navigation } = this.props; 
    const collections = navigation.getParam('collections', '');
    return (
      <View style={styles.container}>
          {/* Hot Deal */}
        <ScrollView>
          <Text style={{fontSize: 20, textAlign: 'center', color: '#000'}}>{collections.name}</Text>
          <ScrollView>
            {
              this.state.photos.map(photo => {
                return (
                  <View key={photo.id}>
                    <Image styleName="large-wide" source={{ uri: photo.image.url }} />
                  </View>
                )
              })
            }
          </ScrollView>
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