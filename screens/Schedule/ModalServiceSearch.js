import React from 'react';
import { Modal, FlatList } from 'react-native';
import { View, Text, Subtitle, Button, Image, DropDownMenu, SearchBar, Title, ScrollView  } from '@shoutem/ui';
import { styles } from '../../components/styles';
import { Icon } from 'native-base';

class ModalServiceSearch extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            modalVisible: false,
            services: [
                {"name": "Sugar Ciated Manicure", "price": "35e"},
                {"name": "Short and Sweet Manicure", "price": "25e"},{"name": "Add-on Gel Colour to Hands", "price": "19e"},
                {"name": "Sugar Coated Pedicure", "price": "55e"},
                {"name": "Gel extensions - Regular Full Set", "price": "65e"},
                {"name": "Fill- Sculpted set", "price": "15e"}
            ],
            categories: [
                {"name": "Nails"},
                {"name": "Permanent Make-up"},
                {"name": "Eyelash Extension"},
                {"name": "Courses"}
            ],
        }
    }
    render(){
        const selectedCategory = this.state.selectedCategory || this.state.categories[0];
        return (
            <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 60}}>
                    
                    {/* Dropdown */}
                    <View style={styles.sameRowTitle}>
                        <View style={{width: '40%', marginLeft: 5}}>
                            <Icon name="md-cart" style={styles.iconTitle}/>
                        </View>
                        <View style={styles.floatRight}>
                        <DropDownMenu
                            options={this.state.categories}
                            selectedOption={selectedCategory ? selectedCategory : this.state.categories[0]}
                            onOptionSelected={(category) => this.setState({ selectedCategory: category })}
                            titleProperty="name"
                            valueProperty="categories.name"
                            style={{color: '#fff'}}
                            style={{
                                selectedOption: {
                                    // width: '40%',
                                    
                                    textAlign: 'right',
                                    'shoutem.ui.Text': {
                                        color: '#ffffff',
                                        borderColor: '#ffffff'
                                    },
                                    'shoutem.ui.Icon': {
                                        color: '#ffffff'
                                    }
                                }
                            }}    
                        />
                        </View>
                    </View>
                    {/* Show details with Flatlist */}
                    <ScrollView >
                        <FlatList
                        data={this.state.services}
                        ItemSeparatorComponent={this.serviceSeparator}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.sameRowFlatList} >
                                <Text style={styles.itemFlatList}
                                >{item.name}
                                </Text>
                                <Text style={styles.floatRightFlatList}>{item.price}</Text>
                                <Button style={styles.floatRightButtonFlatList}><Icon style={styles.middle} name="ios-add-circle-outline" /></Button>
                            </View>
                        )}
                        />
                    </ScrollView>
                        <Button
                            onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Icon name="ios-close-circle" style={{color: '#c2185b'}}/>
                        </Button>
                        </View>
                </Modal>
        )
    }
}

export default ModalServiceSearch