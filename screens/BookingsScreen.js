import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {styles} from './../components/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Subtitle, View, Text, DropDownMenu } from '@shoutem/ui';

class BookingsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      services: [
        {"name": "Nails"},
        {"name": "Permanent Make-up"},
        {"name": "Eyelash Extension"}
      ],
      waitingBookings: [
        {
          "date": "05/08/2019",
          "customerName": "Nguyen Thu Thuy",
          "phone": "090.xxx.xxxx",
          "level": "Gold",
          "waitingBooking": "11:00",
          "finishedBooking": "",
          "service": "nails",
          "analyzedData": "xxxx"
        },
        {
          "date": "06/08/2019",
          "customerName": "Nguyen Thu Thuy",
          "phone": "090.xxx.xxxx",
          "level": "Gold",
          "waitingBooking": "11:00",
          "finishedBooking": "",
          "service": "nails",
          "analyzedData": "xxxx"
        },
        {
          "date": "07/08/2019",
          "customerName": "Nguyen Thu Thuy",
          "phone": "090.xxx.xxxx",
          "level": "Gold",
          "waitingBooking": "11:00",
          "finishedBooking": "",
          "service": "nails",
          "analyzedData": "xxxx"
        },
        {
          "date": "08/08/2019",
          "customerName": "Nguyen Thu Thuy",
          "phone": "090.xxx.xxxx",
          "level": "Gold",
          "waitingBooking": "11:00",
          "finishedBooking": "",
          "service": "nails",
          "analyzedData": "xxxx"
        },{
          "date": "09/08/2019",
          "customerName": "Nguyen Thu Thuy",
          "phone": "090.xxx.xxxx",
          "level": "Gold",
          "waitingBooking": "11:00",
          "finishedBooking": "",
          "service": "nails",
          "analyzedData": "xxxx"
        },
        {
          "date": "10/08/2019",
          "customerName": "Nguyen Thu Thuy",
          "phone": "090.xxx.xxxx",
          "level": "Gold",
          "waitingBooking": "11:00",
          "finishedBooking": "",
          "service": "nails",
          "analyzedData": "xxxx"
        },
        {
          "date": "11/08/2019",
          "customerName": "Nguyen Thu Thuy",
          "phone": "090.xxx.xxxx",
          "level": "Gold",
          "waitingBooking": "11:00",
          "finishedBooking": "",
          "service": "nails",
          "analyzedData": "xxxx"
        }

      ]
    }
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render(){
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
          {waitingBookings.map((booking, id) => {
            return(
              <LinearGradient key={id} colors={['#FFE5E5', '#FFC0CB']} style={styles.booking} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailsBooking')}>
                <View style={styles.sameRow} >
                  <Subtitle style={bookingStyles.floatRightTime}>{booking.waitingBooking}</Subtitle>
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

export default BookingsScreen 

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