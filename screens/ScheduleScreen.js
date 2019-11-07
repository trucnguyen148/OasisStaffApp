import React from 'react';
import { ScrollView, FlatList, StyleSheet } from 'react-native';
import { styles } from './../components/styles';
import { Subtitle, DropDownMenu, View, Text, Divider, Button, Image } from '@shoutem/ui';
import { Calendar } from 'react-native-calendars';

import { Icon } from 'react-native-elements'
import { Tooltip } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { graphql } from 'react-apollo';
import { getScheduleQuery } from '../components/queries/queries';
import { URL, makeRequest } from '../components/api';

class ScheduleScreen extends React.Component {
  // Title
  static navigationOptions = {
    title: 'SCHEDULE',
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
    this.state = {
      count: 0,
      branches: [],
      branch_id: null,
      staffs: [],
      date: {
        from: null,
        to: null,
      },
      worktimes: null,
    }

    this.onDayPress = this.onDayPress.bind(this);
    this.onToDayPress = this.onToDayPress.bind(this);
  }

  getData(data) {
    if (data.loading) {
      console.log('Loading')
    } else {
      if (this.state.branches.length == 0) {
        data.branches.map(branch => {
          this.state.branches.push({
            "id": branch.id,
            "name": branch.name
          })
        })
        this.getWorktimes()
      }
    }
  }

  compareDate(from_date, to_date) {
    const worktimes = this.state.worktimes
    let d1 = (new Date(from_date)).getTime()
    let d2 = (new Date(to_date)).getTime()
    let d3 = (new Date(worktimes.created_at.split(" ")[0]))

    if (d3 <= d2 && d3 >= d1) {
      this.state.staffs = []
      this.state.staffs.push({
        id: worktimes.id,
        date: worktimes.created_at.split(" ")[0],
        start_time: worktimes.start,
        end_time: worktimes.end,
      })
    }

    console.log(this.state.staffs)
  }

  getWorktimes() {
    makeRequest('GET', URL + "worktime-employee/" + global.employee.id + "")
      .then((response) => {
        this.setState({
          worktimes: JSON.parse(response),
        })
      })
      .catch(err => {
        console.error('There was an error!', err.statusText);
      });
  }

  serviceSeparator = () => {
    return (
      //Item Separator
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#FF92A5' }}
      />
    );
  };

  onDayPress(day) {
    this.setState({
      fromSelected: day.dateString,
    });
    this.state.date.from = day.dateString
  };

  onToDayPress(day) {
    if (this.state.date.from === null) {
      alert("Choose start date")
    } else {
      this.setState({
        toSelected: day.dateString,
      });
      this.state.date.to = day.dateString
      this.compareDate(this.state.date.from, this.state.date.to)
    }
  };

  render() {
    const data = this.props.data;
    this.getData(data);
    const selectedBranch = this.state.selectedBranch || this.state.branches[0];
    if (data.loading) {
      return <View style={styles.containerPriceProduct}><Image
        style={styles.logo}
        source={require("./../assets/images/logo.png")}
      /></View>
    } else {
      return (
        <ScrollView style={styles.container}>
          {/* Choose branch */}
          <View style={styles.sameRow}>
            <Subtitle>Branch:</Subtitle>
            <View style={{ position: 'absolute', right: 0 }}>
              <Subtitle>{global.branch.name}</Subtitle>
            </View>
          </View>
          {/* Choose From Date */}
          <View style={styles.sameRow}>
            <Subtitle>From date:</Subtitle>
            <Text style={styles.floatRightSchedule}>{this.state.fromSelected}</Text>
            <View style={styles.floatRight}>
              <Tooltip backgroundColor={"transparent"} width={350} popover={
                <Calendar
                  onDayPress={this.onDayPress}
                  style={styles.calendar}
                  displayLoadingIndicator
                  hideArrows={false}
                  markedDates={{ [this.state.fromSelected]: { selected: true, disableTouchEvent: true } }}
                  theme={{
                    textSectionTitleColor: '#000000',
                    todayTextColor: '#c2185b',
                    selectedDayTextColor: '#fff',
                    selectedDayBackgroundColor: '#000000',
                    arrowColor: '#000000',
                  }}
                />
              }>
                <Icon
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  size={15}
                  name='calendar'
                  type='font-awesome'
                  color='#AB0552'
                />
              </Tooltip>
            </View>
          </View>

          {/* Choose To Date */}
          <View style={styles.sameRow}>
            <Subtitle>To date:</Subtitle>
            <Text style={styles.floatRightSchedule}>{this.state.toSelected}</Text>
            <View style={styles.floatRight}>
              <Tooltip backgroundColor={"transparent"} width={350} popover={
                <Calendar
                  onDayPress={this.onToDayPress}
                  style={styles.calendar}
                  displayLoadingIndicator
                  hideArrows={false}
                  markedDates={{ [this.state.toSelected]: { selected: true, disableTouchEvent: true } }}
                  theme={{
                    textSectionTitleColor: '#000000',
                    todayTextColor: '#c2185b',
                    selectedDayTextColor: '#fff',
                    selectedDayBackgroundColor: '#000000',
                    arrowColor: '#000000',
                  }}
                />
              }>
                <Icon
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  size={15}
                  name='calendar'
                  type='font-awesome'
                  color='#AB0552'
                />
              </Tooltip>
            </View>
          </View>
          <Divider />

          <LinearGradient colors={['#FFE5E5', '#FFC0CB']} >
            {/* Title */}
            <View style={scheduleStyles.sameRow}>
              <Subtitle style={scheduleStyles.titleDate}>Start date
              </Subtitle>
              <Subtitle style={scheduleStyles.titleShift}>Start time</Subtitle>
              <Subtitle style={scheduleStyles.titlePosition}>End time</Subtitle>
            </View>
            <View
              style={{ height: 0.5, width: '100%', backgroundColor: '#FF92A5' }}
            />
            {/* Show data */}
            <FlatList
              data={this.state.staffs}
              ItemSeparatorComponent={this.serviceSeparator}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={scheduleStyles.sameRow}>
                  <Text style={scheduleStyles.date}>
                    {item.date}
                  </Text>
                  <Text style={scheduleStyles.date}>
                    {item.start_time}
                  </Text>
                  <Text style={scheduleStyles.shift}>{item.end_time}</Text>
                  
                </View>
              )}
            />
          </LinearGradient>
        </ScrollView>
      )
    }
  }
}

export default graphql(getScheduleQuery)(ScheduleScreen);

const scheduleStyles = StyleSheet.create({
  shift: {
    width: '40%',
    textAlign: 'center',
    fontSize: 12,
    color: '#000000'
  },
  position: {
    width: '30%',
    textAlign: 'center',
    fontSize: 12,
    color: '#000000'
  },
  date: {
    width: '45%',
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    color: '#000000'

  },
  titleShift: {
    width: '40%',
    textAlign: 'center',

  },
  titlePosition: {
    width: '30%',
    textAlign: 'center',

  },
  titleDate: {
    width: '45%',
    flex: 1,
    textAlign: 'center',
  },
  sameRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingBottom: 8
  },
  service: {
    marginLeft: 30,
    paddingBottom: 0
  },

})