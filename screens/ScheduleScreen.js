import React from 'react';
import { ScrollView, FlatList, StyleSheet } from 'react-native';
import {styles, buttons} from './../components/styles';
import { Subtitle, DropDownMenu, View, Text, Divider } from '@shoutem/ui';
import {Calendar} from 'react-native-calendars';

import { Icon } from 'react-native-elements'
import { Tooltip, Input} from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

class ScheduleScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count: 0 ,
      branches: [
        {"name": "Quang Trung"},
        {"name": "Hoang Kiem"}
      ],
      services: [
        {"name": "Nails"},
        {"name": "Permanent Make-up"},
        {"name": "Eyelash Extension"}
      ],
      staffs:[
        {
          "date": "24/09/2019",
          "workingHour": "8:00 - 14:00",
          "position": "Cashier"
        },
        {
          "date": "25/09/2019",
          "workingHour": "14:00 - 20:00",
          "position": "Manicurists"
        },
        {
          "date": "26/09/2019",
          "workingHour": "14:00 - 20:00",
          "position": "Manicurists"
        },
        {
          "date": "27/09/2019",
          "workingHour": "14:00 - 20:00",
          "position": "Manicurists"
        },
        {
          "date": "28/09/2019",
          "workingHour": "14:00 - 20:00",
          "position": "Manicurists"
        },
      ]
    }
    this.onDayPress = this.onDayPress.bind(this);
    this.onToDayPress = this.onToDayPress.bind(this);
  }
  
  serviceSeparator = () => {
    return (
      //Item Separator
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#FF92A5'}}
      />
    );
  };

  onDayPress(day) {
    this.setState({
      fromSelected: day.dateString,      
    });
  };

  onToDayPress(day) {
    this.setState({
      toSelected: day.dateString,      
    });
  };

  render(){
    const selectedBranch = this.state.selectedBranch || this.state.branches[0];
    return (
      <ScrollView style={styles.container}>
        {/* Choose branch */}
        <View style={styles.sameRow}>
            <Subtitle>Branch:</Subtitle>
            <View style={{position: 'absolute', right: -10}}>
              <DropDownMenu
                options={this.state.branches}
                selectedOption={selectedBranch ? selectedBranch : this.state.branches[0]}
                onOptionSelected={(branch) => this.setState({ selectedBranch: branch })}
                titleProperty="name"
                valueProperty="branches.name"
              />
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
                  markedDates={{[this.state.fromSelected]: {selected: true, disableTouchEvent: true}}}
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
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  size= {15}
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
                  markedDates={{[this.state.toSelected]: {selected: true, disableTouchEvent: true}}}
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
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  size= {15}
                  name='calendar'
                  type='font-awesome'
                  color='#AB0552'
                />
              </Tooltip>
            </View>
          </View>

          <LinearGradient colors={['#FFE5E5', '#FFC0CB']} >
          {/* Title */}
          <View style={scheduleStyles.sameRow}>
            <Subtitle style={scheduleStyles.titleDate}>Date
            </Subtitle>
            <Subtitle style={scheduleStyles.titleShift}>Working Hour</Subtitle>
            <Subtitle style={scheduleStyles.titlePosition}>Postion</Subtitle>
          </View>
          <View
            style={{ height: 0.5, width: '100%', backgroundColor: '#FF92A5'}}
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
                    <Text style={scheduleStyles.shift}>{item.workingHour}</Text>
                    <Text style={scheduleStyles.position} onPress={() => this.props.navigation.navigate('DetailsBooking')}>{item.position}</Text>
                </View>
            )}
            />
            </LinearGradient>
      </ScrollView>
    )
  }
  
  
}

export default ScheduleScreen

ScheduleScreen.navigationOptions = {
  title: 'SCHEDULE',
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
  date:{
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
  titleDate:{
    width: '45%',
    flex: 1,
    textAlign: 'center',
  },
  sameRow:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingBottom:8
  },
  service:{
    marginLeft: 30,
    paddingBottom: 0
  },

})