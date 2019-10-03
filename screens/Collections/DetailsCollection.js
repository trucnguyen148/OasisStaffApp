import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {styles} from './../../components/styles';
import { Image, View, Text } from '@shoutem/ui';
import CollectionsScreen from '../CollectionsScreen';

class DetailsCollection extends React.Component{
  
 
  render() {
    return (
      <View style={styles.container}>
          {/* Hot Deal */}
        <ScrollView>
          <Text>{collection.name}</Text>
          {/* {
            collection.images.map((photo, id) => {
              return (
                <View key={id} style={detailsCollectionStyles.space}>
                    <Image styleName="large-wide" source={{uri: photo.image.url}} />
                </View>
                
              )
            })
          } */}
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