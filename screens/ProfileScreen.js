import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View, Card, Text, Subtitle, Button, TouchableOpacity, Divider } from '@shoutem/ui';
import { Image } from '@shoutem/ui/html';
import { styles, buttons } from './../components/styles';

class ProfilesScreen extends React.Component {
    // Title
    static navigationOptions = {
        title: 'YOUR PROFILE',
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
    }

    render() {
        const profile = global.profile;
        const employee = global.employee;
        const branch = global.branch;
        return (
            <ScrollView style={styles.container}>
                <View title="CARD WITH DIVIDER">
                        <View style={styles.sameRow}>
                            <View>
                                <Image style={profileStyles.image} source={{ uri: profile.image }} />
                                <Button style={buttons.edit} onPress={() => this.props.navigation.navigate('Edit')}><Text style={styles.edituploadText}>Edit</Text></Button>
                            </View>
                            <Text style={profileStyles.name}>{profile.name}</Text>
                        </View>
                        <View style={styles.sameRow}>
                            <Subtitle>Address:</Subtitle>
                            <Text style={styles.floatRight}>{profile.address}</Text>
                        </View>

                        <View style={styles.sameRow}>
                            <Subtitle>Email:</Subtitle>
                            <Text style={styles.floatRight}>{employee.email}</Text>
                        </View>
                        <View style={styles.sameRow}>
                            <Subtitle>Facebook:</Subtitle>
                            <Text style={styles.floatRight}>{employee.facebook}</Text>
                        </View>
                        <View style={styles.sameRow}>
                            <Subtitle>DOB:</Subtitle>
                            <Text style={styles.floatRight}>{employee.dob}</Text>
                        </View>

                        <View style={styles.sameRow}>
                            <Subtitle>Phone Number:</Subtitle>
                            <Text style={styles.floatRight}>{profile.phone}</Text>
                        </View>

                        <View style={styles.sameRow}>
                            <Subtitle>Branch Office:</Subtitle>
                            <Text style={styles.floatRight}>{branch.name}</Text>
                        </View>
                    </View>
            </ScrollView>
        )
    }
}
export default ProfilesScreen


const profileStyles = StyleSheet.create({
    card: {
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
    floatRightBill: {
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