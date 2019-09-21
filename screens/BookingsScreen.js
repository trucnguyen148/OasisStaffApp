import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {styles} from './../components/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Subtitle, View, Text, DropDownMenu, TextInput } from '@shoutem/ui';
import { graphql } from '@apollo/react-hoc';
import {Bookings, Services} from './../components/queries/queries'

class BookingsScreen extends React.Component{
  displayBookings(){
    var data = this.props.data;
    if(data.loading){
      return(<View><Text>Loading</Text></View>)
    } else {
      return data.bookings.map((booking) => {
        return(
          <LinearGradient key={booking.id} colors={['#FFE5E5', '#FFC0CB']} style={styles.booking} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailsBooking')}>
                <View style={styles.sameRow} >
                  {/* <Subtitle style={bookingStyles.floatRightTime}>{booking.cus.name}</Subtitle> */}
                  <Subtitle style={bookingStyles.floatRightDate}>{booking.date_time}</Subtitle>
                  </View>
                <Text  style={styles.text}>{booking.cus.name}</Text>
                </TouchableOpacity>
              </LinearGradient>
        )
      })
    }
  }
  displayServices(){
    var data = this.props.data;
    if(data.loading){
      return(<View><Text>Loading</Text></View>)
    } else {
      return data.services.map((service) => {
        return(
          <Text key={service.id}>{service.name}</Text>
        )
      })
    }
  }
  constructor(props){
    super(props);
    this.state={
     
    }
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render(){
    const waitingBookings = this.state.waitingBookings;
    // const selectedService = this.state.selectedService || this.state.service[0];
    return (
      <View style={styles.container}>
      {/* Choose service */}
          <View style={styles.sameRowBooking}>
            <Subtitle>Service:</Subtitle>
            <View style={styles.floatRight}>
            {/* <DropDownMenu
              options={this.state.services}
              selectedOption={selectedService ? selectedService : this.data.services}
              onOptionSelected={(service) => this.setState({ selectedService: service })}
              titleProperty="name"
              valueProperty="service.name"
            /> */}
            </View>
          </View>
          <ScrollView>
            {this.displayBookings()}
          </ScrollView>
      </View>
      
    )
  }
}

export default graphql(Bookings, Services)(BookingsScreen) ;

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