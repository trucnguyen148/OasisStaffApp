import React from 'react';
import { ScrollView, Modal, FlatList } from 'react-native';
import { View, Text, Subtitle, Button, Image, DropDownMenu, SearchBar, Title  } from '@shoutem/ui';
import {styles, buttons} from './../../components/styles';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Icon } from 'native-base';
import { graphql } from 'react-apollo';
import { getDetailBookingQuery } from '../../components/queries/queries';

class DetailsBooking extends React.Component {
    constructor(props){
        super(props);
        this.state={
            image: null,
            image1: null,
            image2: null,
            image3: null,
            modalVisible: false,
            modalVisibleCart: false,
            modalVisibleProduct: false,
            modalVisibleProductCart: false,
            search: '',
            categories: [],
            services: [],
            refreshFlastlist: false,
        }
    }
    // ImagePicker function
    componentDidMount() {
        this.getPermissionAsync();
    }
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
    }
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
        });
        console.log(result);
        if (!result.cancelled ) {
          this.setState({ image: result.uri });
        }
    };
    _pickImage1 = async () => {
        let result1 = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
        });
        console.log(result1);
        if (!result1.cancelled ) {
          this.setState({ image1: result1.uri });
        }
    };
    _pickImage2 = async () => {
        let result2 = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
          });
        console.log(result2);
        if (!result2.cancelled) {
          this.setState({ image2: result2.uri });
        }
    };
    _pickImage3 = async () => {
        let result3 = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
        });
        console.log(result3);
        if (!result3.cancelled ) {
          this.setState({ image3: result3.uri });
        }
    };
    // Modal Product Cart
    setModalVisibleProductCart(visibleProductCart) {
        this.setState({modalVisibleProductCart: visibleProductCart});
    }
    // Modal Product
    setModalVisibleProduct(visibleProduct) {
        this.setState({modalVisibleProduct: visibleProduct});
    }
    // Modal Service Cart Function
    setModalVisibleCart(visibleCart) {
        this.setState({modalVisibleCart: visibleCart});
    }

    // Modal Service Search function
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
        // Search function
    updateSearch = search => {
        this.setState({ search });
    };
    serviceSeparator = () => {
        return (
            <View
            style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}
            />
        );
    }; 
    
    // Get Data
    getData(data) {
        if(data.loading){
            console.log('Loading')
        } else {
            if (this.state.categories.length == 0) {
                data.positions.map(service => {
                    this.state.categories.push({
                        "id": service.id,
                        "name": service.name
                    })
                })
            }
            if (this.state.services.length == 0) {
                this.getProducts(data, this.state.categories[0].id)
            }
        }
    }

    
    getProducts(data, category_id){
        if(data.loading){
            console.log('Loading')
        } else {
            this.state.services = [];
            return data.product_type.filter(product => {
                return product.category.id == category_id
            })
            .map(product => {
                this.state.services.push({
                    "id": product.id,
                    "name": product.name,
                    "price": product.unit_price + "e"
                })
            })
        }
    }
    render(){
        const data = this.props.data;
        this.getData(data);
        const { navigation } = this.props; 
        const booking = navigation.getParam('booking', '');
        let { image } = this.state;
        let { image1 } = this.state;
        let { image2 } = this.state;
        let { image3 } = this.state;
        const selectedCategory = this.state.selectedCategory || this.state.categories[0];

        return(
            <ScrollView style={styles.container}>
                <View style={styles.sameRow}>
                    <Subtitle>Date: </Subtitle>
                    <Text style={styles.floatRight}>{booking.date}</Text>
                </View>
                <View style={styles.sameRow}>
                    <Subtitle>Customer Name: </Subtitle>
                    <Text style={styles.floatRight}>{booking.customerName}</Text>
                </View>
                <View style={styles.sameRow}>
                    <Subtitle>Phone number: </Subtitle>
                    <Text style={styles.floatRight} >{booking.phone}</Text>
                </View>
                <View style={styles.sameRow}>
                    <Subtitle>Level:</Subtitle>
                    <Text style={styles.floatRight}>{booking.level}</Text>
                </View>
                <View style={styles.sameRow}>
                    <Subtitle>Waiting Booking:</Subtitle>
                    <Text style={styles.floatRight}>{booking.waitingBooking}</Text>
                </View>
                <View style={styles.sameRow}>
                    <Subtitle>Used Service(s):</Subtitle>
                        <Button style={styles.floatRightCart} onPress={() => {this.setModalVisibleCart(true);}} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}><Icon name="md-cart" style={styles.icon}/></Button>
                        <Button onPress={() => {this.setModalVisible(true);}} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} style={styles.floatRight}><Icon name="md-search" style={styles.icon}/></Button>
                    
                </View>
                {/* Modal Service Cart */}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisibleCart}
                    onRequestClose={() => {Alert.alert('Modal has been closed.');
                }}>
                    <View style={{marginTop: 60}}>
                        {/* <View style={styles.sameRow}>
                            <Subtitle style={{textAlign: 'center'}}>Service name</Subtitle>
                            <Subtitle style={styles.floatRightPriceFlatList}>Price</Subtitle>
                        </View> */}
                        <Title style={styles.titleModal}>SERVICE(S) CART</Title>
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
                                <Button style={styles.floatRightButtonFlatList}><Icon style={styles.middle} name="ios-remove-circle-outline" /></Button>
                            </View>
                        )}
                        />
                        <Button
                            onPress={() => {
                            this.setModalVisibleCart(!this.state.modalVisibleCart);
                            }}>
                            <Icon name="ios-close-circle" style={{color: '#c2185b'}}/>
                        </Button>
                    </View>
                </Modal>
                {/* Modal service search */}
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
                            onOptionSelected={
                              (category) => {
                                this.setState({ selectedCategory: category })
                                this.getProducts(data, category.id)
                              }
                            }
                            titleProperty="name"
                            valueProperty="categories.name"
                            style={{color: '#fff'}}
                            style={{
                                selectedOption: {
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
                        <Button
                            onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                            }} style={{marginBottom: 90}}>
                            <Icon name="ios-close-circle" style={{color: '#c2185b'}}/>
                        </Button>
                    </ScrollView>
                        
                        </View>
                </Modal>
                <View style={styles.sameRow}>
                    <Subtitle>Bought Product(s):</Subtitle>
                    <Button style={styles.floatRightCart} onPress={() => {this.setModalVisibleProductCart(true);}} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}><Icon name="md-cart" style={styles.icon}/>
                    </Button>
                    <Button onPress={() => {this.setModalVisibleProduct(true);}} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} style={styles.floatRight}><Icon name="md-search" style={styles.icon}/></Button>
                </View>
                {/* Modal Cart Product */}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisibleProductCart}
                    onRequestClose={() => {Alert.alert('Modal has been closed.');
                }}>
                    <View style={{marginTop: 60}}>
                        <Title style={styles.titleModal}>PRODUCT(S) CART</Title>
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
                                <Button style={styles.floatRightButtonFlatList}><Icon style={styles.middle} name="ios-remove-circle-outline" /></Button>
                            </View>
                        )}
                        />
                        <Button
                            onPress={() => {
                            this.setModalVisibleProductCart(!this.state.modalVisibleProductCart);
                            }}>
                            <Icon name="ios-close-circle" style={{color: '#c2185b'}}/>
                        </Button>
                    </View>
                </Modal>
                {/* Modal Search Product */}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisibleProduct}
                    onRequestClose={() => {Alert.alert('Modal has been closed.');
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
                            this.setModalVisibleProduct(!this.state.modalVisibleProduct);
                            }}>
                            <Icon name="ios-close-circle" style={{color: '#c2185b'}}/>
                        </Button>
                        </View>
                    
                </Modal>
                <View>
                    <Subtitle>Photos:</Subtitle>
                    {/* Add button */}
                    <View style={styles.sameRowButton}>
                        {image && <Image source={{ uri: image }} style={styles.imageBooking}/>}
                        <Button style={buttons.upload} onPress={this._pickImage}><Text style={buttons.edituploadText}>Upload</Text></Button>
                    </View>
                    {/* Add button1 */}
                    <View style={styles.sameRowButton}>
                        {image1 && <Image source={{ uri: image1 }} style={styles.imageBooking}/>}
                        <Button style={buttons.upload} onPress={this._pickImage1}><Text style={buttons.edituploadText}>Upload</Text></Button>
                    </View>
                    {/* Add button2 */}
                    <View style={styles.sameRowButton}>
                        {image2 && <Image source={{ uri: image2 }} style={styles.imageBooking}/>}
                        <Button style={buttons.upload} onPress={this._pickImage2}><Text style={buttons.edituploadText}>Upload</Text></Button>
                    </View>
                    {/* Add button3 */}
                    <View style={styles.sameRowButton}>
                        {image3 && <Image source={{ uri: image3 }} style={styles.imageBooking}/>}
                        <Button style={buttons.upload} onPress={this._pickImage3}><Text style={buttons.edituploadText}>Upload</Text></Button>
                    </View> 
                    <Button style={styles.buttonStyleMain}><Text style={styles.buttonText}>Save</Text></Button>
                </View>
            </ScrollView>

        )
    }
}

export default graphql(getDetailBookingQuery) (DetailsBooking)