import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  ScrollView,
  StyleSheet, Modal, TouchableHighlight
} from 'react-native';
import { styles } from '../components/styles';
import {Text, Divider, View, Button, Subtitle, Title,} from '@shoutem/ui';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Item,
  Input,
  Icon
} from 'native-base';
class NewsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      modalVisible: false,
      news: [
        {
          "time": "08/09/2019",
          "title": "Summer party in Oulun Kaupunki",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          "time": "08/09/2019",
          "title": "Summer party in Oulun Kaupunki",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          "time": "08/09/2019",
          "title": "Summer party in Oulun Kaupunki",
          "description": " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      ]
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(){
    const news = this.state.news
    return(
      <ScrollView style={styles.container}>
        {
          news.map((u, id) => {
            return(
              <ScrollView key={id}>
                <TouchableHighlight onPress={() => {
            this.setModalVisible(true);}}>
                  <LinearGradient  colors={['#FFE5E5', '#FFC0CB']} style={styles.card}>
                      <Text style={newsStyle.text}>{u.time}</Text>
                      <Divider />
                      <Text style={newsStyle.titleText}>{u.title}</Text>
                  </LinearGradient>
                </TouchableHighlight>
                {/* Modal */}
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                  }}>
                  <View style={styles.containerModal}>
                    <Title style={styles.titleModal}>NEWS</Title>
                    <View>
                      <View style={styles.sameRow}>
                        <Subtitle>Date:</Subtitle>
                        <Text style={styles.floatRight}>{u.time}</Text>
                      </View>
                      <View style={styles.sameRow}>
                        <Subtitle>Title:</Subtitle>
                        <Text style={styles.floatRight}>{u.title}</Text>
                      </View>
                      <View >
                        <Subtitle>Description:</Subtitle>
                        <Text style={styles.floatRight}>{u.description}</Text>
                      </View>
                      <Divider />
                      <Button
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Icon name="ios-close-circle" style={{color: '#c2185b'}}/>
                      </Button>
                    </View>
                  </View>
                </Modal>
              </ScrollView>
            )
          })
        }
      </ScrollView>
    )
  }
}

export default NewsScreen

NewsScreen.navigationOptions = {
  title: 'NEWS',
  headerTintColor :'#000000',
  headerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 0.6,
    borderBottomColor: '#A91B60',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18
  },
};

const newsStyle = StyleSheet.create ({
  text: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold',   
  },
  titleText: {
    fontSize: 15,
    color: '#000000',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  test: {
    backgroundColor: 'transparent'
  }
})