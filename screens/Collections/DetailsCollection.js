import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {styles} from './../../components/styles';
import { Image, View, Text } from '@shoutem/ui';
import CollectionsScreen from '../CollectionsScreen';

class DetailsCollection extends React.Component{

  render() {
    const collection = this.props.navigation.state.params.collection
    
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>{collection.name}</Text>
          {
            collection.images.map((image, id) => {
              return (
                <View key={id} style={detailsCollectionStyles.space}>
                    <Image styleName="large-wide" source={{uri: image.image}} />
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