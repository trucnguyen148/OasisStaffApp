import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View, Card, Text, Subtitle, Button,  TouchableOpacity, Divider } from '@shoutem/ui';
import { Image } from '@shoutem/ui/html';
import {styles, buttons} from './../components/styles';

class ProfilesScreen extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            profiles: [
                {
                    "image": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg",
                    "name": "Nguyen Van Troi",
                    "address": "Kajaanintie 40 A 35/1",
                    "postal": "90130",
                    "city": "Oulu",
                    "country": "Finland",
                    "phone": "090 xxx xxxxx",
                    "email": "xxxxxx@oasis.vn",
                    "branch": "Quang Trung"
                } 
                
            ]
        }
    }

    render(){
        const profiles = this.state.profiles;
        return(
            <ScrollView style={styles.container}>
                <View title="CARD WITH DIVIDER">
                {
                    profiles.map((profile, i) => {
                    return (
                        <View key={i} >
                            <View style={styles.sameRow}>
                                <View>
                                    <Image style={profileStyles.image} source={{uri: profile.image}}/>
                                    <Button style={buttons.edit} onPress={() => this.props.navigation.navigate('Edit')}><Text style={styles.edituploadText}>Edit</Text></Button>
                                </View>
                                <Text style={profileStyles.name}>{profile.name}</Text>
                            </View>
                            <View style={styles.sameRow}>
                                    <Subtitle>Address:</Subtitle>
                                    <Text style={styles.floatRight}>{profile.address}</Text>
                            </View>
                            <View style={styles.sameRow}>
                                    <Subtitle>Postal Code:</Subtitle>
                                    <Text style={styles.floatRight}>{profile.postal}</Text>
                            </View>
                            <View style={styles.sameRow}>
                                    <Subtitle>City:</Subtitle>
                                    <Text style={styles.floatRight}>{profile.city}</Text>
                            </View>
                            <View style={styles.sameRow}>
                                <Subtitle>Country:</Subtitle>
                                <Text style={styles.floatRight}>{profile.country}</Text>
                            </View>
                            <View style={styles.sameRow}>
                                <Subtitle>Phone Number:</Subtitle>
                                <Text style={styles.floatRight}>{profile.phone}</Text>
                            </View>
                            <View style={styles.sameRow}>
                                <Subtitle>Branch Office:</Subtitle>
                                <Text style={styles.floatRight}>{profile.branch}</Text>
                            </View>
                        </View>
                    );
                    })
                }
                </View>
            </ScrollView>
        )
    }
}
export default ProfilesScreen

ProfilesScreen.navigationOptions = {
    title: 'YOUR PROFILE',
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
  
const profileStyles = StyleSheet.create({
    card: {
        // borderColor: 'black',
        // borderStyle: 'solid',
        // borderWidth: 1,
        margin: 5,
        padding: 10,
        width: 'auto',
        backgroundColor: '#c2185b',
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        width: 90
    },
    space: {
        margin: 10,
        color: '#fff'
    },
    container: {
        flex: 1
    },
    image: {
        width: 105,
        height: 105,
        borderRadius: 50,
        marginBottom: 10
    },
    floatRightDate: {
        position: 'absolute',
        right: 5,
        color: '#fff'
    },
    floatRightTime: {
        position: 'absolute',
        right: '50%',
        color: '#fff'
    },
    floatRightBill:{
        // position: 'absolute',
        // right: '20%',
        textAlign: 'center',
        color: '#fff'
    },
    headerCard: {
        textTransform: 'uppercase',
        fontSize: 15,
        color: '#fff'
    },
    name: {
        position: 'absolute',
        right: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    width: {
        flex: 1
    }
    
})