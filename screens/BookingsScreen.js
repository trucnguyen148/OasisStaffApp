import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {styles} from './../components/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Subtitle, View, Text, DropDownMenu } from '@shoutem/ui';
import { graphql } from 'react-apollo';
import { getBookingsQuery, getServicesQuery } from '../components/queries/queries';
import flowright from "lodash.flowright";


class BookingsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      services: [],
      waitingBookings: []
    }
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  dataBookings (){
    const data = this.props.getBookingsQuery;
    if(data.loading){
      console.log('Loading')
    } else {
      data.bookings.map(booking => {
        this.state.waitingBookings.push({
          "id": booking.id,
          "date": booking.date_time,
          "customerName" : booking.cus.name
        })
      })
    }
  }

  dataServices (){
    const data = this.props.getServicesQuery;
    if(data.loading){
      console.log('Loading')
    } else {
      data.positions.map(service => {
        this.state.services.push({
          "id": service.id,
          "name": service.name,
          
        })
      })
    }
  }
  render(){
    this.dataBookings();
    this.dataServices();
    const waitingBookings = this.state.waitingBookings;
    const selectedService = this.state.selectedService || this.state.services[0];
    return (
      <View style={styles.container}>
      {/* Choose service */}
          <View style={styles.sameRowBooking}>
            <Subtitle>Service:</Subtitle>
            <View style={styles.floatRight}>
            <DropDownMenu
              options={this.state.services}
              selectedOption={selectedService ? selectedService : this.state.services[0]}
              onOptionSelected={(service) => this.setState({ selectedService: service })}
              titleProperty="name"
              valueProperty="services.name"
            />
            </View>
          </View>
          <ScrollView>
          {waitingBookings.map((booking) => {
            return(
              <LinearGradient key={booking.id} colors={['#FFE5E5', '#FFC0CB']} style={styles.booking} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailsBooking')}>
                <View style={styles.sameRow} >
                  {/* <Subtitle style={bookingStyles.floatRightTime}>{booking.waitingBooking}</Subtitle> */}
                  <Subtitle style={bookingStyles.floatRightDate}>{booking.date}</Subtitle>
                  
                  </View>
                <Text  style={styles.text}>{booking.customerName}</Text>
                
                </TouchableOpacity>
              </LinearGradient>
              
            )
          })}
          </ScrollView>
      </View>
    )
  }
}

export default flowright(
  graphql(getBookingsQuery, {
     name: "getBookingsQuery"
  }),
  graphql(getServicesQuery, {
     name: "getServicesQuery"
  }),
)(BookingsScreen);

BookingsScreen.navigationOptions = {
  title: 'BOOKINGS',
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

const bookingStyles = StyleSheet.create({
  floatRightDate: {
    position: 'absolute',
    right: 5,
},
floatRightTime: {
    position: 'absolute',
    right: '50%',
},
})