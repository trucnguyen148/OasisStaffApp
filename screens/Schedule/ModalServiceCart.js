import React from 'react';
import { Modal, FlatList } from 'react-native';
import { Title, View, Button, Icon } from '@shoutem/ui';
import { styles } from '../../components/styles';

class ModalServiceCart extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            modalVisible: false,
            modalVisibleCart: false,
        }
    }
    render(){
        return (
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
                            <Text style={styles.itemFlatList}>{item.name}
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
        )
    }
}

export default ModalServiceCart