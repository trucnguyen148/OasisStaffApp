import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Subtitle, Title } from '@shoutem/ui';
import { styles } from '../../components/styles';

class DetailNews extends React.Component {
    render (){
        const { navigation } = this.props; 
        const news = navigation.getParam('news', '');
        return (
            <ScrollView>
                <View style={styles.container}>
                      <View>
                        <View style={styles.sameRow}>
                          <Subtitle>Date:</Subtitle>
                          <Text style={styles.floatRight}>{news.time}</Text>
                        </View>
                        <View style={styles.sameRow}>
                          <Subtitle>Title:</Subtitle>
                          <Text style={styles.floatRight}>{news.title}</Text>
                        </View>
                        <View >
                          <Subtitle>Description:</Subtitle>
                          <Text style={styles.floatRight}>{news.description}</Text>
                        </View>
                      </View>
                    </View>
            </ScrollView>
        )
    }
}

export default DetailNews