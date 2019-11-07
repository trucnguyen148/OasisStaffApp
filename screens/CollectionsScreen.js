import React from 'react';
import { ScrollView, StyleSheet, Modal, TouchableHighlight, Alert } from 'react-native';
import { styles, buttons } from './../components/styles';
import { GridRow, TouchableOpacity, Card, Image, View, Subtitle, Caption, ListView, ImageBackground, Text } from '@shoutem/ui';
import { graphql } from 'react-apollo';
import { getCollectionQuerry } from '../components/queries/queries';

class CollectionsScreen extends React.Component {
  // Title
  static navigationOptions = {
    title: 'COLLECTIONS',
    headerTintColor: '#000000',
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

    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderRow(rowData) {
    const cellViews = this.props.data.collections.map((collection) => {
      return (
        <View key={collection.id}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {
            collection: collection
          })}>
            <Card style={collectionStyles.border}>
              <Image
                styleName="medium-wide"
                style={collectionStyles.image}
                source={{ uri: collection.images[0].image }}
              />
            </Card>
          </TouchableOpacity>

          {/* Modal detail Collection */}
          {/* <Modal
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
          </Modal> */}
        </View>
      );
    });
    return (
      <GridRow columns={2}>
        {cellViews}
      </GridRow>
    );
  }

  render2() {
    const data = this.props.data;
    if (data.loading) {
      return <View style={styles.containerPriceProduct}><Text>Loading</Text></View>
    }
    else {
      const collections = data.collections;
      return (
        <ScrollView style={styles.container}>
          {/* Hot Deal */}
          <ScrollView>
            {
              collections.map(collection => {
                return (
                  <View key={photo.id} style={hotdealsStyles.space}>
                    <Image styleName="large-wide" source={{ uri: collection.images[0].image }} />
                  </View>
                )
              })
            }
          </ScrollView>
        </ScrollView>
      );
    }

  }

  render() {
    const data = this.props.data;
    if (data.loading) {
      return <View style={styles.containerPriceProduct}><Text>Loading</Text></View>
    }
    else {
      const collections = data.collections;
      let isFirstArticle = false;
      const groupedData = GridRow.groupByRows(collections, 2, () => {
        if (isFirstArticle) {
          isFirstArticle = true;
          return 2;
        }
        return 1;
      });
      return (
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

export default graphql(getCollectionQuerry)(CollectionsScreen)


const collectionStyles = StyleSheet.create({
  subtitle: {
    textAlign: 'center',
    flex: 1
  },
  border: {
    borderStyle: 'solid',
    borderWidth: 1.3,
    borderColor: '#000000',
    paddingTop: 5,
    marginBottom: 3,
    width: 'auto',
    height: 170
  },
  image: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
})