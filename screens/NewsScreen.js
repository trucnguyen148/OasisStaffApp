import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { styles } from '../components/styles';
import { Text, Divider, View, TouchableOpacity, Image } from '@shoutem/ui';
import { LinearGradient } from 'expo-linear-gradient';

import { graphql } from 'react-apollo';
import { getAnnoucementsQuery } from '../components/queries/queries';

import { URL, makeRequest } from '../components/api';

class NewsScreen extends React.Component {
  // Title
  static navigationOptions = {
    title: 'NEWS',
    headerTintColor: '#000000',
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

  constructor(props) {
    super(props);
    this.state = {
      news: [],
      requests: [],
    }
  }

  componentWillUnmount() {
    this.state.requests.forEach(function (request) {
      request.abort()
    })
  }

  componentDidMount() {
    this.getProfile(global.user[0].profile_id)
  }

  getProfile(id) {
    makeRequest('GET', URL + "profile/" + id + "", this.state.requests)
      .then((response) => {
        global.profile = JSON.parse(response)
      })
      .then(() => {
        this.getEmployee(global.profile.employee_id)
      })
      .catch(err => {
        console.error('There was an error in profile!', err.statusText);
      });
  }

  getEmployee(id) {
    makeRequest('GET', URL + "employee/" + id + "", this.state.requests)
      .then((response) => {
        global.employee = JSON.parse(response)
      })
      .then(() => {
        this.getBranch(global.employee.branch_id)
      })
      .catch(err => {
        console.error('There was an error in employee!', err.statusText);
      });
  }

  getBranch(id) {
    makeRequest('GET', URL + "branch/" + id + "", this.state.requests)
      .then((response) => {
        global.branch = JSON.parse(response)
      })
      .catch(err => {
        console.error('There was an error in employee!', err.statusText);
      });
  }

  getData(data) {
    if (data.loading) {
      console.log('Loading')
    } else {
      if (this.state.news.length == 0) {
        data.announcements.map(announcement => {
          this.state.news.push({
            "id": announcement.id,
            "title": announcement.title,
            "description": announcement.detail,
            "time": announcement.created_at
          })
        })
      }
    }
  }

  render() {
    const data = this.props.data;
    this.getData(data)
    const news = this.state.news;

    if (data.loading) {
      return <View style={styles.containerPriceProduct}><Image
      style={styles.logo}
      source={require("./../assets/images/logo.png")}
    /></View>
    } else {
      return (
        <ScrollView style={styles.container}>
          {
            news.map((news) => {
              return (
                <ScrollView key={news.id}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailNews', {
                    news: news

                  })}>
                    <LinearGradient colors={['#FFE5E5', '#FFC0CB']} style={styles.card}>
                      <Text style={newsStyle.text}>{news.time}</Text>
                      <Divider />
                      <Text style={newsStyle.titleText}>{news.title}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </ScrollView>
              )
            })
          }
        </ScrollView>
      )
    }
  }
}

export default graphql(getAnnoucementsQuery)(NewsScreen)

const newsStyle = StyleSheet.create({
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