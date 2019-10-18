import React from 'react';
import { ScrollView } from 'react-native';
import { Subtitle, View, Button, Text, Image } from '@shoutem/ui';
import { Input } from 'react-native-elements';
import { styles, buttons } from './../../components/styles';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const profile = global.profile;
        const employee = global.employee;
        const branch = global.branch;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.sameRow}>
                    <Subtitle>Name:</Subtitle>
                    <Input inputStyle={styles.input}
                    >{profile.name}</Input>
                </View>
                <View style={styles.sameRow}>
                    <Subtitle>Address:</Subtitle>
                    <Input inputStyle={styles.input}>{profile.address}</Input>
                </View>
                <View style={styles.sameRow}>
                    <Subtitle>Email:</Subtitle>
                    <Input inputStyle={styles.input}>{employee.email}</Input>
                </View>
                <View style={styles.sameRow}>
                    <Subtitle>Facebook:</Subtitle>
                    <Input inputStyle={styles.input}>{employee.facebook}</Input>
                </View>
                <View style={styles.sameRow}>
                    <Subtitle>DOB:</Subtitle>
                    <Input inputStyle={styles.input}>{employee.dob}</Input>
                </View>
                <View style={styles.sameRow}>
                    <Subtitle>Phone number:</Subtitle>
                    <Input inputStyle={styles.input}>{profile.phone}</Input>
                </View>
                <View style={styles.sameRow}>
                    <Subtitle>Branch Office:</Subtitle>
                    <Input inputStyle={styles.input}>{branch.name}</Input>
                </View>
                <Button
                    onPress={() => this.props.navigation.navigate('Profiles')}
                    style={buttons.primary}
                >
                    <Text style={buttons.primaryText}>Save</Text>
                </Button>

            </ScrollView>
        )
    }
}

export default EditProfile

EditProfile.navigationOptions = {
    title: 'EDIT PROFILE',
    headerTintColor: '#000000',
    headerStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 0.3,
        borderBottomColor: '#000000'
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18
    },
};