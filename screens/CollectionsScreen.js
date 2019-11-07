import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import {styles} from './../components/styles';
import { GridRow, TouchableOpacity, Card, Image, View, Subtitle, ListView} from '@shoutem/ui';

import { graphql } from 'react-apollo';
import { getCollectionQuery } from './../components/queries/queries';

class CollectionsScreen extends React.Component{
  // Title
  static navigationOptions = {
    title: 'COLLECTIONS',
    headerTintColor :'#000000',
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 0.3,
      borderBottomColor: '#A91B60',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18
    },
  };

  constructor(props) {
      super(props);
      this.renderRow = this.renderRow.bind(this);
      this.state = {
        collections: []
      }
    }
    
    renderRow(rowData) {
      const cellViews = rowData.map((collection) => {
        return (
          <View key={collection.id}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', { collections: collection})}>
              <Card style={collectionStyles.border}>
                <Image
                  styleName="medium-wide"
                  style={collectionStyles.image}
                  source={{ uri: collection.image.url  }}
                />
                <View styleName="content">
                  <Subtitle style={collectionStyles.subtitle} numberOfLines={3}>{collection.name}</Subtitle>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
        );
      });
      return (
          <GridRow columns={2}>
            {cellViews}
          </GridRow>
        );
      }

  render(){
    if(this.props.data.loading){
      return (
        <View>
          <Image
            style={styles.logo}
            source={require("./../assets/images/logo.png")}
          />
        </View>
      )
    }
    else{
      this.props.data.collections.forEach(collection => {
        this.state.collections.push({
          "id": collection.id,
          "name": collection.name,
          "image": {
            "url": collection.image
          },
        })
      })
    const collections = this.state.collections;
    let isFirstArticle = false;
    const groupedData = GridRow.groupByRows(collections, 2, () => {
        if (isFirstArticle) {
        isFirstArticle = true;
        return 2;
        }
        return 1;
    });
    return(
      <ScrollView style={styles.containerCollections}>
          <ListView
              data={groupedData}
              renderRow={this.renderRow}
          />
      </ScrollView>
    )
    }
  }
}
export default graphql(getCollectionQuery)(CollectionsScreen)


const collectionStyles = StyleSheet.create({
    subtitle:{
        textAlign: 'center',
        flex: 1
    },
    border:{
      borderStyle: 'solid',
      borderWidth: 1.3,
      borderColor: '#000000',
      paddingTop: 5,
      marginBottom: 3,
      width: 'auto',
      height: 170
    },
    image:{
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
})