import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {styles} from './../../components/styles';
import { Image, View, Text } from '@shoutem/ui';

class DetailsCollection extends React.Component{

  render() {
    const collection = this.props.navigation.state.params.collection
    
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={{fontSize: 20, textAlign: 'center', color: '#000'}}>{collection.name}</Text>
          <ScrollView>
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