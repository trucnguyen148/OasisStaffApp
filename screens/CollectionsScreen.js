import React from 'react';
import { ScrollView, StyleSheet, Modal,  TouchableHighlight, Alert } from 'react-native';
import {styles, buttons} from './../components/styles';
import { GridRow, TouchableOpacity, Card, Image, View, Subtitle, Caption, ListView, ImageBackground , Text} from '@shoutem/ui';

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
        modalVisible: false,
        collections: [
          {
            "id": 0,
              "name": "Gaspar Brasserie",
              "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
              
          },
          {
            "id": 1, 
              "name": "Chalk Point Kitchen",
              "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
          },
          {
            "id": 2,
              "name": "Kyoto Amber Upper East",
              "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
          },
          {
            "id": 3,
              "name": "Kyoto Amber Upper East",
              "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
          },
          {
            "id": 4,
              "name": "Kyoto Amber Upper East",
              "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
          },
          {
            "id": 5,
              "name": "Kyoto Amber Upper East",
              "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" },
          }
        ],
      }
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
    
    renderRow(rowData) {
      const cellViews = rowData.map((collection) => {
        return (
          <View key={collection.id}>
          <TouchableOpacity onPress={() => {
          this.setModalVisible(true);
        }}>
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

          {/* Modal detail Collection */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <View>
                  <Image styleName="large-wide" source={{ uri: collection.image.url  }} />
                </View>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
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

export default CollectionsScreen


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