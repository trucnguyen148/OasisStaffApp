import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {styles, buttons} from './../components/styles';
import { GridRow, TouchableOpacity, Card, Image, View, Subtitle, Caption, ListView, ImageBackground } from '@shoutem/ui';

class CollectionsScreen extends React.Component{
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state = {
          collections: [
            {
                "name": "Gaspar Brasserie",
                "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
            },
            {
                "name": "Chalk Point Kitchen",
                "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
            },
            {
                "name": "Kyoto Amber Upper East",
                "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
            },
            {
                "name": "Kyoto Amber Upper East",
                "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
            },
            {
                "name": "Kyoto Amber Upper East",
                "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
            },
            {
                "name": "Kyoto Amber Upper East",
                "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" },
            }
          ],
        }
      }
      renderRow(rowData) {
        const cellViews = rowData.map((collection, id) => {
          return (
            <TouchableOpacity key={id}  onPress={() => this.props.navigation.navigate('Details')}>
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
          );
        });
        return (
            <GridRow columns={2}>
              {cellViews}
            </GridRow>
          );
        }
    render(){
        const collections = this.state.collections;
        // Group the restaurants into rows with 2 columns, except for the
        // first restaurant. The first restaurant is treated as a featured restaurant
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

export default CollectionsScreen

CollectionsScreen.navigationOptions = {
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