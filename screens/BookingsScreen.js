import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './../components/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Subtitle, View, Text, DropDownMenu } from '@shoutem/ui';
import { graphql } from 'react-apollo';
import { getBookingsQuery } from '../components/queries/queries';


class BookingsScreen extends React.Component {
  // Title
  static navigationOptions = {
    title: 'BOOKINGS',
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
      categories: [],
      waitingBookings: [],
      refresh: false,
      modalVisible: false,
      firstTime: false,
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  getData(data, firstTime) {
    if (data.loading) {
      console.log('Loading')
    } else {
      if (this.state.categories.length == 0) {
        data.positions.map(service => {
          this.state.categories.push({
            "id": service.id,
            "name": service.name,
          });
        });
      }
      if (firstTime) {
        this.getBookings(data, this.state.categories[0].id)
        this.state.firstTime = false
      }
    }
  };

  getBookings(data, category_id) {
    if (data.loading) {
      console.log('Loading')
    } else {
      this.state.waitingBookings = [];
      return data.products.filter(product => {
        return product.category.id == category_id
      })
        .map(product => {
          product.bookings.map(booking => {
            this.state.waitingBookings.push({
              "id": booking.id,
              "date": booking.date_time,
              "customerId": booking.cus.id,
              "customerName": booking.cus.name,
              "phone": booking.cus.phone
            })
          })
        })
    }
  }

  getUniqueBookings(data, bookings) {
    if (data.loading) {
      console.log('Loading')
    } else {
      const result = [];
      const map = new Map();
      for (const item of bookings) {
        if (!map.has(item.id)) {
          map.set(item.id, true); // set any value to Map
          result.push({
            id: item.id,
            date: item.date,
            customerId: item.customerId,
            customerName: item.customerName,
            phone: item.phone
          });
        }
      }
      return result
    }

  }

  componentDidMount() {
    this.state.firstTime = true
  }

  render() {
    const data = this.props.data;
    this.getData(data, this.state.firstTime);

    const uniqueBookings = this.getUniqueBookings(data, this.state.waitingBookings)
    const selectedCategory = this.state.selectedCategory || this.state.categories[0];

    if (data.loading) {
      return <View><Text>Loading</Text></View>
    } else {
      return (
        <View style={styles.container}>
          {/* Choose service */}
          <View style={styles.sameRowBooking}>
            <Subtitle>Service:</Subtitle>
            <View style={styles.floatRight}>
              <DropDownMenu
                options={this.state.categories}
                selectedOption={selectedCategory ? selectedCategory : this.state.categories[0]}
                onOptionSelected={
                  (category) => {
                    this.setState({ selectedCategory: category })
                    this.getBookings(data, category.id)
                    this.setState(state => {
                      state.refresh = !state.refresh
                    })
                  }
                }
                titleProperty="name"
                valueProperty="categories.name"
              />
            </View>
          </View>
          <ScrollView>
            {uniqueBookings.map((booking) => {
              return (
                <LinearGradient key={booking.id} colors={['#FFE5E5', '#FFC0CB']} style={styles.booking} >
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailsBooking', {
                    booking: booking
                  })}>
                    <View style={styles.sameRow} >
                      {/* <Subtitle style={bookingStyles.floatRightTime}>{booking.waitingBooking}</Subtitle> */}
                      <Subtitle style={bookingStyles.floatRightDate}>{booking.date}</Subtitle>
                    </View>
                    <Text style={styles.text}>{booking.customerName}</Text>
                  </TouchableOpacity>
                </LinearGradient>
              )
            })}
          </ScrollView>
        </View>
      )
    }

  }
}

export default graphql(getBookingsQuery)(BookingsScreen);


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