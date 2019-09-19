import React from 'react';
import { View, Heading, Text, Button } from '@shoutem/ui';
import { Animated, StyleSheet} from 'react-native'
import { styles } from '../components/styles';
import { ScrollView } from 'react-native-gesture-handler';

class Welcome extends React.Component {
    constructor () {
        super()
        this.springValue = new Animated.Value(0.7)
      }
    componentDidMount () {
        this.spring()
      }
    spring () {
        this.springValue.setValue(0.7)
        Animated.spring(
          this.springValue,
          {
            toValue: 1,
            friction: 1
          }
        ).start()
    }
    render(){
        return(
            <ScrollView style={{alignContent: 'flex-end'}}>
            {/* <LinearGradient colors={['#FFF', '#FFE5E5']} style={{height: 'auto'}}> */}
                <View >
                    <Animated.Image
                        style={{ width: 227, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: '20%', transform: [{scale: this.springValue}] }}
                        source={require('./../assets/images/logo.png')}
                    />
                    <Text style={styles.heading}>Welcome!</Text>
                </View>
                <View style={styles.floatBottom}>
                    <Text style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '10%'}}>Login and enjoy your beauty world</Text>
                    <Button style={styles.buttonStyleMain}><Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Login')}>Sign in</Text></Button>
                    <View style={styles.sameRowMain}>
                        <Text>New here?</Text>
                        <Button style={{backgroundColor: 'transparent', borderColor: 'transparent'}} onPress={()=>this.props.navigation.navigate('Signup')}><Text style={{color: '#c2185b'}}>Sign up</Text></Button>
                    </View>
                
                {/* </LinearGradient> */}
                </View>
                </ScrollView>
        )
    }
}

export default Welcome